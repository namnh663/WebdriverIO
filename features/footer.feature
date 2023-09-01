Feature: Footer inventory

    Background: User is logged in

        Given I am on the login page
        When I login with valid credentials
        Then I should see Products title


    Scenario Outline: Href twitter

        Given I am on the inventory page
        Then href twitter should be https://twitter.com/saucelabs


    Scenario Outline: Href facebook

        Given I am on the inventory page
        Then href facebook should be https://www.facebook.com/saucelabs


    Scenario Outline: Href linkedin

        Given I am on the inventory page
        Then href linkedin should be https://www.linkedin.com/company/sauce-labs/
