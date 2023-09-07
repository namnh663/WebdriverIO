Feature: Filter inventory

    Background: User is logged in

        Given I am on the login page
        When I login with valid credentials
        Then I should see Products title


    @TC-FILTER-31
    Scenario Outline: Default by name A to Z

        Given I am on the inventory page
        Then the inventory should be displayed in ascending order of name


    @TC-FILTER-33
    Scenario Outline: Filter by name Z to A

        Given I am on the inventory page
        When I select za option in filter
        Then the inventory should be displayed in descending order of name


    @TC-FILTER-35
    Scenario Outline: Filter by price low to high

        Given I am on the inventory page
        When I select lohi option in filter
        Then the inventory should be displayed in ascending order of price


    @TC-FILTER-37
    Scenario Outline: Filter by price high to low

        Given I am on the inventory page
        When I select hilo option in filter
        Then the inventory should be displayed in descending order of price