@wallet @ext:phantom @wallet:main
Feature: Wallet Authentication (Phantom)
  As a TradeGenius user
  I want to sign in via my Phantom wallet
  So that I can access the platform and manage assets

  @smoke
  Scenario: Successful sign in via Phantom
    Given I navigate to the Discover page
    When I click Sign In button
    And I click Connect with Wallet
    And I select "Phantom" from the wallet provider modal
    And I approve the connection in the Phantom popup
    And I complete the onboarding profile
    Then I should see correct wallet username
    And I should see correct wallet balance

  @smoke
  Scenario: Successful log out
    Given I navigate to the Account page
    When I log out
    Then I should see sign in button after log out

  @smoke
  Scenario: Successful re-login
    Given I navigate to the Discover page
    When I click Sign In button
    And I click Connect with Wallet
    And I select "Phantom" from the wallet provider modal
    And I select chain "Solana" from the chain modal
    And I approve the connection in the Phantom popup
    Then I should see correct wallet username
    And I should see correct wallet balance

