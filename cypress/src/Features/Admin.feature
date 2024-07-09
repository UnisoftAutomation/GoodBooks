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
    And Add new company code
    And Add new company name
    And Add new company short name
    And Enter new company basic details
    And Retrieve the company details
    And Delete new company
    Then Remove the new company input field values
 
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
    And Add new country code
    And Add new country name
    And Enter the ISD code and Gst country code values
