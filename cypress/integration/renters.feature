Feature: Renters

Scenario: As a regular user I want to rent a home in Los Angeles
    Given a user who navigates to belong homepage
    When user clicks on For Renters button
    And user sets a valid city
    And user sets a valid number of beds
    And user sets a valid number of baths
    And user sets a valid maximum rent value
    And user sets a valid pets option
    And user selects the first result
    And user clicks on Apply button
    And user clicks on Start button
    And user select ASAP move in option
    And user clicks on Next button
    And user sets a valid name on Become a Belong Member modal
    And user sets a valid last name on Become a Belong Member modal
    And user sets a valid email on Become a Belong Member modal
    And user sets a valid phone on Become a Belong Member modal
    And user sets a valid password on Become a Belong Member modal
    Then the create account button should be enabled
