import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let response;
let token;

Given("I have a valid Bearer token", () => {
  token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNzY4MzE4NzcxLCJleHAiOjE3NjgzMjIzNzF9.qGTrBStYIQj2o6L_BGwzMHA9gkQ-NecFCTKIPFLLSMo";
});

Given("I have an invalid Bearer token", () => {
  token = "invalid_token_123";
});

Given("I have no token", () => {
  token = null;
});

When("send GET request to {string}", (endpoint) => {
  const headers = token
    ? { Authorization: `Bearer ${token}`, Accept: "application/json" }
    : { Accept: "application/json" };

  cy.request({
    method: "GET",
    url: `http://localhost:8080${endpoint}`,
    headers,
    failOnStatusCode: false,
  }).then((res) => {
    response = res;
  });
});

Then("response status should be {int}", (status) => {
  expect(response.status).to.eq(status);
});

Then("response should be an array", () => {
  expect(response.body).to.be.an("array");
});
