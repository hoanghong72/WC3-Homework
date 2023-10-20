// Haven't done yet
describe('Add book into book store', () => {
    const testData = {
      userName: 'khoi.nguyen3',
      passWord: 'Abcd1234!@',
    }
    before(() => {
      cy.visit('https://demoqa.com/login')
    })

        it('Login sucessfully', () => {
        // Textbox
        cy.get('#userName').type(testData.userName).should('have.value',testData.userName)
        cy.get('#password').type(testData.passWord).should('have.value',testData.passWord)
        cy.get('#login').click()
    
        // Delete all books
        cy.get('#userName-value').should("have.text", testData.userName)
        cy.get('.buttonWrap button').contains('Delete All Books').click({ force: true })
        cy.get('#closeSmallModal-ok').click({ force: true })

        // Naviagte to book store
        cy.get('.menu-list li')
            .contains('Profile')
            .click()
        // cy.get('#gotoStore').click({force:true});

        // cy.get('.ReactTable a').contains('Git Pocket Guide').click();
        // cy.get('button').contains('Add To Your Collection').click({ force: true });
        // cy.on("window:alert", (s) => {
        //     expect(s).to.contains('Book added to your collection');
        //});
    })
  

  
  })
  