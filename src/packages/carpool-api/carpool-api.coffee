Router.route('/api/user/location', where: 'server').get(->
  result =
    loc: [25.26246500000002,54.6779097]
    time: new Date()
    user: "HX8jY2bnYWGoHB7Em"
  headers =
    'Content-type': 'application/json; charset=utf-8'
  @response.writeHead(200, headers);
  @response.end(JSON.stringify(result), "utf-8");

).post(->
  # POST /webhooks/stripe
  return
).put ->
  # PUT /webhooks/stripe
  return

Router.route('/api/trip/location', where: 'server').get(->
  result = { "_id" : "rpfb3p3JBfWYdR3c7", "fromAddress" : "Dzūkų 54, Vilnius", "role" : "driver", "toAddress" : "Šeškinės g. 10, Vilnius", "time" : new Date("2016-03-08T03:29:42.465Z"), "toLoc" : [ 25.25145359999999, 54.71326200000001 ], "fromLoc" : [ 25.289606400000025, 54.6646826 ], "path" : "ssslIokjyCjA`YNtJ@tDC`Do@lFYhB[pBUr@a@dB_@xBYhC_@tCUhAQ`@m@z@gCfBNvBFfAn@`IqEpASHa@XuFfGaA|@gAl@[LiFbA{Cz@sBx@eATyLpCaDx@cFxAcFnA{Ct@yD`AoBlAWRsCbBkCxA}@^cBZo@VyAPaADkETM?GEOMo@eAmIuLSQWOgGuAsA_@]Q_Ao@u@k@{B{AcCwAmAw@qByAqAfCgCtF{ApCq@vAQrAm@bF]zCGVObAGROXMTe@CyBCuAF}DJs@D{Kh@cD\\aALqHyB]Q_AAaARu@^u@x@WV}@dBk@hBMn@q@jIKzAWpDW~BIr@Uz@eAtDW\\yDfDyDpD_DxC}CjD}CfDi@b@aEdCsAjAcDnC]@a@Rg@?uDy@gB_@qAe@", "stops" : [ ], "owner" : "HX8jY2bnYWGoHB7Em", "requests" : [ ], "status" : "scheduled" }
  headers =
    'Content-type': 'application/json; charset=utf-8'
  @response.writeHead(200, headers);
  @response.end(JSON.stringify(result), "utf-8");
)
