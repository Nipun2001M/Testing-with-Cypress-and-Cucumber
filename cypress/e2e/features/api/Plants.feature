Feature: Plants API
    Test the /api/plants endpoint

    Scenario: Get all plants with valid token
        Given I have a valid Bearer token
        When send GET request to "/api/plants"
        Then response status should be 200
        And response should be an array

    Scenario: Get all plants with invalid token
        Given I have an invalid Bearer token
        When send GET request to "/api/plants"
        Then response status should be 401

    Scenario: Get all plants with no token
        Given I have no token
        When send GET request to "/api/plants"
        Then response status should be 401

    Scenario: Get plants from invalid endpoint
        Given I have a valid Bearer token
        When send GET request to "/api/plantss"
        Then response status should be 404
