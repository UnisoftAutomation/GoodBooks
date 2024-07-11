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
    And Eneter basic input values for the cost center type creation
    And Retrieve the new cost center type
    And Delete newly created cost center type
    Then Delete all input values using Add new button

  Scenario: Scenario: C28- Verify that a user can create a new cost Category entry
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
    And grab and resue the cost center type
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
