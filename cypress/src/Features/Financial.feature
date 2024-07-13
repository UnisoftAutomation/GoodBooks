Feature: Financial

  @skip
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

  @skip
  Scenario: C28- Verify that a user can create a new cost center type entry
    Given Sign in to the goodboods ERP site
    When Verify the Sign in page Header
    And Enter the valid server name 'USCQC'
    And Enter the valid user name 'ADMIN'
    And Enter the valid password 'admin'
    And Click the signIn submit button
    And Click the following module
      | index | text      |
      |     3 | Financial |
    And Click the following Form
      | form   |
      | Master |
    And Click the following screen under the master menu
      | screen      |
      | Cost Center |
    And Click the following sub-screen under the screen menu
      | SubScreen        |
      | Cost Center Type |
    And Eneter cost center type code
    And Eneter cost center type name
    And Eneter basic input values for the cost center type creation
    And Save the form
    And Retrieve the new cost center type
    And Update the form
    And Delete newly created cost center type
    And Delete the form
    Then Delete all input values using Add new button

  @skip
  Scenario: Verify that a user can create a new cost Category entry
    Given Sign in to the goodboods ERP site
    When Verify the Sign in page Header
    And Enter the valid server name 'USCQC'
    And Enter the valid user name 'ADMIN'
    And Enter the valid password 'admin'
    And Click the signIn submit button
    And Click the following module
      | index | text      |
      |     3 | Financial |
    And Click the following Form
      | form   |
      | Master |
    And Click the following screen under the master menu
      | screen      |
      | Cost Center |
    And Click the following sub-screen under the screen menu
      | SubScreen        |
      | Cost Center Type |
    And Create cost center type
    And Click the following Form
      | form   |
      | Master |
    And Click the following screen under the master menu
      | screen      |
      | Cost Center |
    And Click the following sub-screen under the screen menu
      | SubScreen     |
      | Cost Category |
    And Enter the cost Category code value
    And Enter the cost Category name value
    And Enter the Category short name
    And grab and reuse the cost center type
    And Enter basic cost category input values
    And Retrieve the new cost Category
    And Delete newly created cost Category
    And Delete all input values using Add new button
    And Click the following Form
      | form   |
      | Master |
    And Click the following screen under the master menu
      | screen      |
      | Cost Center |
    And Click the following sub-screen under the screen menu
      | SubScreen        |
      | Cost Center Type |
    And After cost category created Delete cost center type

  Scenario: Verify that a user can create a new cost center entry
    Given Sign in to the goodboods ERP site
    When Verify the Sign in page Header
    And Enter the valid server name 'USCQC'
    And Enter the valid user name 'ADMIN'
    And Enter the valid password 'admin'
    And Click the signIn submit button
    And Click the following module
      | index | text      |
      |     3 | Financial |
    And Click the following Form
      | form   |
      | Master |
    And Click the following screen under the master menu
      | screen      |
      | Cost Center |
    And Click the following sub-screen under the screen menu
      | SubScreen        |
      | Cost Center Type |
    And Create cost center type
    And Click the following Form
      | form   |
      | Master |
    And Click the following screen under the master menu
      | screen      |
      | Cost Center |
    And Click the cost center
    And grab the cost center type and input the cost center page
    And Enter the cost center code value
    And Enter the cost center name value
    And Enter the cost center short name
    And Enter basic field for the cost center
    And Retrieve the new cost center
    And Delete newly created cost center
    And Remove the input field values using Add New button
    And Click the following Form
      | form   |
      | Master |
    And Click the following screen under the master menu
      | screen      |
      | Cost Center |
    And Click the following sub-screen under the screen menu
      | SubScreen        |
      | Cost Center Type |
    Then After cost category created Delete cost center type

    
