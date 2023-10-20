Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
  
describe('Add book with name "Git Pocket Guide" to my collection and verify it in my profile', () => {
    it('Should add the book to the collection and verify it in the profile', () => {
  
      //Visit the login page and login
      cy.visit('https://demoqa.com/login');
      cy.get('#userName').type('ngocmai197');
      cy.get('#password').type('Demoqa@ngocmai1907');
      cy.get('#login').click();

      //Go to the bookstore
      cy.contains('Book Store').click();

      //Search for the book "Git Pocket Guide"
      cy.get('#searchBox').type('Git Pocket Guide');

      //click on the book in the search results
      cy.contains('Git Pocket Guide').click();

      //click "Add To Your Collection" button
      cy.get('#addNewRecordButton').click({force:true});

      // Assert that the form submission was successful
    //   cy.contains('Book added to your collection.').should('be.visible');


      //Go to the profile page
      cy.contains('Profile').click();

      //Search for the book "Git Pocket Guide"
      cy.get('#searchBox').type('Git Pocket Guide');
      cy.contains('Git Pocket Guide').should('be.visible');
    });
});
