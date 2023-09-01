Feature: Login to Swag Labs

  @TC-LOGIN-1
  Scenario Outline: Successful login

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see Products title

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |


  @TC-LOGIN-5 @TC-LOGIN-8 @TC-LOGIN-11 
  Scenario Outline: Failed login when invalid data
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an <error_message>

    Examples:
      | username       | password      | error_message                                               |
      | standard_user$ | secret_sauce$ | Username and password do not match any user in this service |
      | standard_user  | secret_sauce$ | Username and password do not match any user in this service |
      | standard_user$ | secret_sauce  | Username and password do not match any user in this service |


  @TC-LOGIN-20
  Scenario Outline: Failed login when empty data
    Given I am on the login page
    When I login without username and password
    Then I should see an <error_message>

    Examples:
      | error_message        |
      | Username is required |


  @TC-LOGIN-14
  Scenario Outline: Failed login when empty username
    Given I am on the login page
    When I login with only <password>
    Then I should see an <error_message>

    Examples:
      | password     | error_message        |
      | secret_sauce | Username is required |


  @TC-LOGIN-17
  Scenario Outline: Failed login when empty password
    Given I am on the login page
    When I login only have <username>
    Then I should see an <error_message>

    Examples:
      | username      | error_message        |
      | standard_user | Password is required |