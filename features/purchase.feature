Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as "standard_user"
    Then I will add the backpack to the cart
    When I go to the cart
    And I proceed to checkout
    And I fill in the checkout information with "FirstName" "LastName" "12345"
    And I continue to the overview
    And I finish the purchase
    Then I should see the text "Thank you for your order!"
