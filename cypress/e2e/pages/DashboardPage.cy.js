class DashboardPage {
  VerifyDashboardPage() {
    cy.url().should("include", "/dashboard");
    cy.get(".mb-4").should("contain", "Dashboard");
  }
}
export default new DashboardPage();
