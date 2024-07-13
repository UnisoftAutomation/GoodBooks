Feature: Admin page

  @skip
  Scenario: T14- Verify Company Details Form
    Given Sign in to the goodboods ERP site
    When Verify the Sign in page Header
    And Enter the valid server name 'USCQC'
    And Enter the valid user name 'ADMIN'
    And Enter the valid password 'admin'
    And Click the signIn submit button
    And Click the following module
      | index | text  |
      |     1 | Admin |
    And Click the following Form
      | form   |
      | Master |
    And Click the following screen under the master menu
      | screen       |
      | Organization |
    And Click the following sub-screen under the screen menu
      | SubScreen |
      | Company   |
    And Click the add company button
    And Add new company code 'v5463'
    And Add new company name 'v43264'
    And Add new company short name 'v22'
    And Enter new company basic details
    And Retrieve the company details
    And Delete new company
    Then Remove the new company input field values

  @skip
  Scenario: T12- Verify that a user can create a new country entry
    Given Sign in to the goodboods ERP site 1 user gb5qc
    And Enter the valid server name 'GB5QC'
    And Enter the valid user name 'E502'
    And Enter the valid password '12345'
    And Click the signIn submit button
    And Verify home page Header 1 user gb5qc
    And Click the following module
      | index | text  |
      |     1 | Admin |
    And Click the following Form
      | form   |
      | Master |
    And Click the following screen under the master menu
      | screen |
      | Region |
    And Click the following sub-screen under the screen menu
      | SubScreen |
      | Country   |
    And Add new country code '45636'
    And Add new country name '7587'
    And Enter the ISD code and Gst country code values
      | ISDcode | GSTcountry |
      |    5356 |       0795 |
    And Retrieve the new country value
    And Delete newly created country value
    And Clear country all input values using Add new button


  Scenario: T32- Verify that User Can Create New state and Related to the Field
    Given Sign in to the goodboods ERP site 1 user gb5qc
    And Enter the valid server name 'GB5QC'
    And Enter the valid user name 'E502'
    And Enter the valid password '12345'
    And Click the signIn submit button
    And Verify home page Header 1 user gb5qc
    And Click the following module
      | index | text  |
      |     1 | Admin |
    And Click the following Form
      | form   |
      | Master |
    And Click the following screen under the master menu
      | screen |
      | Region |
    And Click the following sub-screen under the screen menu
      | SubScreen |
      | State     |
    And Add new state code '28756'
    And Add new state name '434656'
    And Enter following input values
      | GSTStateCode | TIN  |
      |         1237 | 4563 |
    And Select the country value
    And Retrieve the state value
    And Delete the newly created state value
