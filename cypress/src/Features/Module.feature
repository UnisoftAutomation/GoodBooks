Feature: Modules

 Scenario: Verify all Modules
  #  Given Sign in to the goodboods ERP site
    When Verify the Sign in page Header
    And Enter the valid server name 'USCQC'
    And Enter the valid user name 'ADMIN'
    And Enter the valid password 'admin'
    And Click the signIn submit button
    And I verify the Modules with the following text
      | index | text        |
      |     1 | Admin       |
      |     3 | Financial   |
      |     5 | Inventory   |
      |     7 | Purchase    |
      |     9 | Sales       |
      |    11 | Production  |
      |    13 | Dashboard   |
      |    15 | HRMS        |
      |    17 | CRM Service |
      |    19 | Quality     |
      |    21 | Costing     |
      |    23 | R&D         |
      |    25 | Planning    |
      |    27 | Maintenance |
      |    29 | FAM         |
      |    31 | Analytics   |
      |    33 | CRM Sales   |
      |    35 | Security    |
      |    37 | Logistics   |
      |    39 | JobWork     |
      |    41 | Subcontract |
      |    43 | GST         |
      |    45 | Frame Work  |
      |    47 | Fabric      |
      |    49 | WMS         |
      |    51 | Projects    |
    And I grab all values from the elements
    And I should log all the values
    And test dataMap