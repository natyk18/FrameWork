Feature: Techfios bank and cash New Account Functionality

  Scenario Outline: User should be able to login with valid credentials
    and open a new account

    Given User is on the techfios login page
    When User enters the "<username>"
    When User enters "<password>"
    And User clicks on login button
    Then User should land on Dashboard page
    And User clicks on Bank Cash
    And User clicks on NewAccount
    And User enters accountTitle as"<AccountTitle>" in accounts page
    And User enters description as "<description>" in accounts page
    And User enters balance on"<initialBalance>" in accounts page
    And User enters acctNumber"<accountNumber>" in accounts page
    And User enters contact on"<contactPerson>" in accounts page
    And User enters phoneNumber on"<Phone>" in accounts page
    And User enters url on"<internetBankingURL>" in accounts page
    And User clicks on button submit
    Then User should be able to validate account created successfully

    Examples: 
      | username          | password | accountTitle | description     | initialBalance | accountNumber | contactPerson | Phone     | internetBankingURL    |
      | demo@techfios.com | abc123   | hsgdkjfueh   | NataliaAccount1 | $1250          |          3233 | Lia           | 078237892 | https://www.bing.com/ |
