import * as config from "../config/config";

context("Trivago Case Study Challenge", () => {
  beforeEach(() => {
    // The test cases are independent of each other to minimize defect clustering
    cy.visit(`${config.baseUrl}`);
  });

  it("CASE_ID_1 : Search for 'Texas' \
      and verify # of search results", () => {
    // Searching for the search icon
    cy.get("div.search-icon").click();
    // Asserting that the search menu is visible
    cy.get('div[id="search"]').should("be.visible");
    // Selecting and writing "Texas" in the search field
    cy.get('div[id="search"]')
      .find("input")
      .click()
      .type(`${config.searchText}{enter}`)
      .should("have.value", "Texas");
    // Asserting the top count number of search results
    // is equal to config.searchResultsNumber i.e. 23
    cy.get('div[class="search-results"]')
      .find("h3")
      .should("contain", `${config.searchResultsNumber} Search Results`);
    // Asserting that the number of search results
    // is equal to config.searchResultsNumber i.e. 23
    cy.get('div[class="search-results"]')
      .find("section > div.row")
      .children()
      .should("have.length", `${config.searchResultsNumber}`);
  });
});
