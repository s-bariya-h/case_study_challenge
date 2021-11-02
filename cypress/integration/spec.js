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

  it("CASE_ID_2.1 : Open 'Mom Knows Best: Family Vacations in Texas' \
      and verify all featured hotels are in the side list", () => {
    // Clicking the search icon
    cy.get("div.search-icon").click();
    // Typing searchText i.e. 'Texas' in the search bar
    // of the search menu
    cy.get('div[id="search"]')
      .find("input")
      .click()
      .type(`${config.searchText}{enter}`);
    // Finding and clicking the search result containing the text
    // 'Mom Knows Best: Family Vacations in Texas'
    cy.get("div.search-results > section > div.row").within(() => {
      cy.get("div.article-card")
        .find("h2")
        .contains(`${config.selectArticleWithText}`)
        .click();
    });
    //Waiting for the webpage to open
    cy.wait(500);

    // Searching for all the anchor tags containing <strong> tag inside them

    // !!IMPORTANT: This test fails here because there are multiple `post_content divs`
    // and all with inconsistent child elements
    cy.get(".post_content > div > .hotel-and-destination-module").each(() => {
      const text = cy.find("a > strong").invoke("text");
      cy.get(".table-of-contents").should("contain", text);
    });
  });

  it("CASE_ID_2.2 : Open 'Mom Knows Best: Family Vacations in Texas' \
      and verify there are no broken links", () => {
    /// Clicking the search icon
    cy.get("div.search-icon").click();
    // Typing searchText i.e. 'Texas' in the search bar
    // of the search menu
    cy.get('div[id="search"]')
      .find("input")
      .click()
      .type(`${config.searchText}{enter}`);
    // Finding and clicking the search result containing the text
    // 'Mom Knows Best: Family Vacations in Texas'
    cy.get("div.search-results > section > div.row").within(() => {
      cy.get("div.article-card")
        .find("h2")
        .contains(`${config.selectArticleWithText}`)
        .click();
    });
    //Waiting for the webpage to open
    cy.wait(500);
    // Searching for all the anchor tags and
    // asserting that none of the links have an href attr. equal to #undefined
    cy.contains("a").each(($a) => {
      const text = $a.text();
      expect($a, text).to.not.have.attr("href", "#undefined");
    });
  });
});
