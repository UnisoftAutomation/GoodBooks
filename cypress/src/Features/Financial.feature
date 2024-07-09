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

  Scenario: test
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
    And test
    And test1
