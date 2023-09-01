Feature: Add inventory

    Background: User is logged in

        Given I am on the login page
        When I login with valid credentials
        Then I should see Products title


    Scenario Outline: Add all item to cart

        Given I am on the inventory page
        When I add items to the cart
        Then the cart badge should equal 6
