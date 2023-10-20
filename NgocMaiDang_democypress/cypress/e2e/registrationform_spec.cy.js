Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});

describe('Verify successful submission of Registration Form', () => {
  it('Should fill out the Registration form and submiss successfully', () => {

    //open the Browser and go to the Registration form
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(600, 400);

    //fill out the required information
    
    cy.get('#firstName').type('Mai');
    cy.get('#lastName').type('Dang');
    cy.get('#userEmail').type('ngocmai197@gmail.com');
    // cy.get('label[for="gender-radio-2"]').click();
    cy.get('.custom-control-label').contains('Female').click();
    cy.get('#userNumber').type('0911111111');
    cy.get('#dateOfBirthInput').invoke('val', '1992-07-19').wait(1000);
    cy.get('.subjects-auto-complete__value-container input').click();
    cy.get('.subjects-auto-complete__value-container input').type('Maths').wait(1000);
    cy.get('.subjects-auto-complete__value-container input').type('{enter}');
    cy.get('.custom-control-label').contains('Reading').click();
    cy.get('#currentAddress').type('257 ben van don street, Ward 2, District 4, HCMC').wait(1000);
    cy.get("#state").type("NCR{enter}").click({force:true});
    cy.get("#city").type("Delhi{enter}").click({force:true});


    // Click on the "Submit" button
    cy.get('#submit').click();

    // Assert that the form submission was successful
    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
  });
});

