Feature: API

Scenario: As an user I want to use GET method in Dummy Rest Sample API
    Given a user who has a valid access token
    When user calls the Employees endpoint by GET method
    Then code response should be 200
    And body response should not be null

Scenario: As an user I want to use POST method in Dummy Rest Sample API
    Given a user who has a valid access token
    When user creates a new employee with the name "Matias" using POST method
    Then body response status should be success
    Then body response should includes the name "Matias"

Scenario: As an user I want to use PUT method in Dummy Rest Sample API
    Given a user who has a valid access token
    When user updates a employee with ID "1" name to "Jack"
    Then body response status should be success
    Then body response should includes the name "Jack"