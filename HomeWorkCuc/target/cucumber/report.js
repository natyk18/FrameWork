$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/NewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Bank Cash",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on NewAccount",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle as\"\u003cAccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters balance on\"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters acctNumber\"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters contact on\"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters phoneNumber on\"\u003cPhone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters url on\"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on button submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "hsgdkjfueh",
        "NataliaAccount1",
        "$1250",
        "3233",
        "Lia",
        "078237892",
        "https://www.bing.com/"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3663552100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Bank Cash",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on NewAccount",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle as\"\u003cAccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"NataliaAccount1\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters balance on\"$1250\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters acctNumber\"3233\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters contact on\"Lia\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters phoneNumber on\"078237892\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters url on\"https://www.bing.com/\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on button submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 179881200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "StepDefinition.user_enters_the(String)"
});
formatter.result({
  "duration": 3091002400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_enters(String)"
});
formatter.result({
  "duration": 3058213600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5221944900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 6381600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on()"
});
formatter.result({
  "duration": 3040688700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_NewAccount()"
});
formatter.result({
  "duration": 1806475900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cAccountTitle\u003e",
      "offset": 28
    }
  ],
  "location": "StepDefinition.user_enters_accointTitle_as_AccountTitle_in_accounts_page(String)"
});
formatter.result({
  "duration": 3082467800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NataliaAccount1",
      "offset": 28
    }
  ],
  "location": "StepDefinition.user_enters_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3082910600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1250",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_balance_on_in_accounts_page(String)"
});
formatter.result({
  "duration": 3066080100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3233",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_acctNumber_in_accounts_page(String)"
});
formatter.result({
  "duration": 3063396900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lia",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_contact_on_in_accounts_page(String)"
});
formatter.result({
  "duration": 3052527000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "078237892",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enters_phoneNumber_on_in_accounts_page(String)"
});
formatter.result({
  "duration": 3066717600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bing.com/",
      "offset": 19
    }
  ],
  "location": "StepDefinition.user_enters_url_on_in_accounts_page(String)"
});
formatter.result({
  "duration": 3079447900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_button_submit()"
});
formatter.result({
  "duration": 491873500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
});