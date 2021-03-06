import React from 'react'
import ExpandableSearch from '../components/ExpandableSearch'
import { config } from '../config'
import { FlowHelpers } from '../../flowHelpers'
import { googleServices } from 'meteor/spastai:google-client'
import DateTimePicker from '../components/DateTimePicker'
import moment from 'moment'

const getStyles = (width) => ({
  searchField: {
    padding: 5,
    margin: '5px auto',
    background: config.colors.lightBlue,
    width: width * 0.8,
    height: 24,
    display: 'flex',
    flexDirection: 'row',
  },
  searchHint: {
    color: '#ddd',
    fontSize: 12,
    marginLeft: 3,
  },
  searchValue: {
    fontSize: 12,
    marginLeft: 5,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
})

export default class TopSearch extends React.Component {

  constructor(props) {
    super(props)
    //console.log("Create TopSearch with", props);
    this.state = {
      fromAddress : '...',
      toAddress: '...',
      pickerOpen: false,
      isDepartureDate: false,
      date: props.bTime || moment(),
    }
  }

  updatedLocations(props) {
    carpoolService.resolveLocation(props.from, props.fromAddress, (location) => {
      //console.log(props.from, props.fromAddress, "resolved -", location)
      this.setState({fromAddress: location});
    })
    carpoolService.resolveLocation(props.to, props.toAddress, (location) => {
      this.setState({toAddress: location});
    })
  }

  componentWillMount() {
    //console.log("Will Mount TopSearch with", this.props);
    this.updatedLocations(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //console.log("Will Update TopSearch with", nextProps);
    this.updatedLocations(nextProps);
  }

  render () {
    const styles = getStyles(this.props.width)
    return (
      <div
        style={{
          // position: 'fixed',
          // top: this.props.topOffset,
          width: this.props.width,
          background: this.props.background === 'blue' ? config.colors.main :
            (this.props.background === 'green' ? config.colors.green :
            (this.props.background ? this.props.background : config.colors.main)),
          color: 'white',
          borderRadius: 0,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 5,
          paddingBottom: 10,
          display: 'flex',
          flexDirection: 'column',
          // zIndex: 1,
          height: this.props.height,
        }}
        zDepth={this.props.noShadow ? 0 : 1}
      >
        <div style={styles.searchField} onClick={() => {FlowHelpers.goExtendedQuery('LocationAutocomplete', {screen: "RideOffers", field:"aLoc"})}}>
          <div style={styles.searchHint}>from</div>
          <div style={styles.searchValue}>{this.props.fromAddress ? this.props.fromAddress : this.state.fromAddress}</div>
        </div>
        <div style={styles.searchField} onClick={() => {FlowHelpers.goExtendedQuery('LocationAutocomplete', {screen: "RideOffers", field:"bLoc"})}}>
          <div style={styles.searchHint}>to</div>
          <div style={styles.searchValue}>{this.props.toAddress ? this.props.toAddress : this.state.toAddress}</div>
        </div>
        <div style={styles.searchField} onClick={() => {this.refs.picker.openDateTimePicker(this.state.isDepartureDate, this.state.date)}}>
          <div style={styles.searchHint}>{this.state.isDepartureDate ? 'depart at' : 'arrive by'}</div>
          <div style={styles.searchValue}>{this.state.date ? this.state.date.format('ddd, MMM D, H:mm') : null}</div>
        </div>
        <DateTimePicker ref="picker" onDateSelected={({date, isDepartureDate}) => {
            FlowHelpers.goExtendedQuery(null, {}, {bTime: date.format("YYYYMMDDTHHmm")});
            this.setState({date, isDepartureDate})
        }} />
      </div>
    )
  }
}
