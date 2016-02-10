Feature: 4.1 CRUD stops
  As an admin
  I want to create/read/update/delete stop
  So that these stops would be used as meeting points

  Background: Admin account exists
    Given Admin exists

  Scenario: 4.1.2 Selects stop on a map
    Given Login with "admin@tiktai.lt"
    And I see ".stopsAdmin" in "/admin/stops"
