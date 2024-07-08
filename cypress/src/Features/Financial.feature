Feature: Financial

  Scenario: Financial workflow
    Given Sign in to the goodboods ERP site
    When Verify the Sign in page Header
    And Enter the valid server name 'USCQC'
    And Enter the valid user name 'ADMIN'
    And Enter the valid password 'admin'
    And Click the signIn submit button
    And Click the following module
      | index | text      |
      |     3 | Financial |
  
