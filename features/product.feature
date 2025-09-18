Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate product sort by price low to high
    Then I will login as "standard_user"
    When I sort the products by "Price (low to high)"
    Then all product tiles should be sorted by price low to high
