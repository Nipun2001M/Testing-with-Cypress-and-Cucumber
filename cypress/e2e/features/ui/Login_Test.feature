Feature: Login Test
    Login to the application: QA as an admin

    Scenario: Login to the QA application with valid credentials
        Given Launch the QA application
        When enter "admin" as username
        And enter "admin123" as password
        And click on the login button
        Then should see the dashboard page

    Scenario: Login to the QA application with invalid credentials
        Given Launch the QA application
        When enter "Admin" as username
        And enter "invalid password" as password
        And click on the login button
        Then verify error message "Invalid username or password"
