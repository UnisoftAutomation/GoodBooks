Feature: Login page

  
  Scenario: T6- Verify invalid user is NOT able to successfully login.
    Given Sign in to the goodboods ERP site
    When Verify the Sign in page Header
    And Enter the invalid server name
    And Enter the invalid user name
    And Enter the invalid password
    And Click the signIn submit button
    Then Verify the SignIn failed to connect the database popup

  
  Scenario:T5- Verify valid user is able to successfully login
    Given Sign in to the goodboods ERP site
    When Verify the Sign in page Header
    And Enter the valid server name 'USCQC'
    And Enter the valid user name 'ADMIN'
    And Enter the valid password 'admin'
    And Click the signIn submit button
    Then Verify home page Header
    

  
