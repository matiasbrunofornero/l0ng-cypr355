Feature: Homeowner

Scenario: As a regular user I want to use Do the math functionality
    Given a user who navigates to belong homepage
    When user clicks on For Homeowners button
    And user clicks on Do The Math button
    And user types a valid address value
    And user types a valid unit value
    And user clicks on Next button on Address modal
    And user sets an estimate value
    And user clicks on Next button on Estimate modal
    And user clicks on No button on Mortgage modal
    And user clicks on Next button on Mortgage modal
    And user clicks on No button on Homeowner's Association modal
    And user clicks on Next button on Homeowner's Association modal
    And user sets a valid name on Unlock Price modal
    And user sets a valid lastname on Unlock Price modal
    And user sets a valid email on Unlock Price modal
    And user sets a valid phone number on Unlock Price modal
    Then the unlock price button should be enabled