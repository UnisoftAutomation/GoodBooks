Feature: Admin page

  @skip
  Scenario: Verify the User can able to create, update, Delete company details
    Given Sign in to the goodboods ERP site
    When Verify the Sign in page Header
    And Enter the valid server name 'USCQC'
    And Enter the valid user name 'ADMIN'
    And Enter the valid password 'admin'
    And Click the signIn submit button
    And Click the following module
      | index | text  |
      |     1 | Admin |
    And Click loyout Admin master
    And Click menu Master- oraganization
    And Click menu Oraganization- company
    And Click the add company button
    And Add new company code
    And Add new company name
    And Add new company short name
    And Enter new company basic details
    And Retrieve the company details
    And Delete new company
    Then Remove the new company input field values

  Scenario: Verify the User can able to create region>state>country
    Given Sign in to the goodboods ERP site 1 user gb5qc
    And Enter the valid server name 'GB5QC'
    And Enter the valid user name 'E502'
    And Enter the valid password '12345'
    And Click the signIn submit button
    And Verify home page Header 1 user gb5qc
    And Click the following module
      | index | text  |
      |     1 | Admin |
    And Click loyout Admin master 
    #And Click menu Master and select the following screen

