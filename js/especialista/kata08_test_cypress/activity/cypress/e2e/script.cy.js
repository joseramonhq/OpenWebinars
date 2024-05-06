describe("index", () => {
	it("User generate activity when click button", () => {
		cy.visit("http://localhost:8080");
		cy.get(".request").contains("Generate new one").click();;

		cy.get("div.activity h4").should("exist");
		cy.get("div.activity a").should("exist");
		cy.get(".activity > a").should("have.attr", "href");

	});
});