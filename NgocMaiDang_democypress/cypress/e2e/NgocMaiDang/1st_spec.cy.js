Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Verify successful submission of Registration Form', () => {
  it('Should fill out the Registration form and submiss successfully', () => {

    //open the Browser and go to the Registration form
    cy.visit('https://demoqa.com/automation-practice-form');

    //fill out the required information
    
    cy.get('#firstName').type('Mai');
    cy.get('#lastName').type('Dang');
    cy.get('#userEmail').type('ngocmai197@gmail.com');
    cy.get('input[name="gender"][value="Female"]').check();
    cy.get('#userNumber').type('0911111111');
    cy.get('#dateOfBirthInput').type('1992-07-19');
    cy.get('.subjects-auto-complete__value-container').type('Maths').type('{enter}');
    cy.get('input[name="hobbies"][value="Reading"]').check();

    // // Upload an image
    // const imagePath = 'C:\\Users\\Itel\\OneDrive\\Desktop\\NgocMaiDang_democypress\\cypress\\e2e\\NgocMaiDang\\hinh-anh-meo-ngau_021619515.jpg';
    // cy.fixture(imagePath, 'binary').then((fileContent) => {
    //   cy.get('input[type="file"]').attachFile({
    //     fileContent: fileContent,
    //     fileName: 'hinh-anh-meo-ngau_021619515.jpg',
    //     mimeType: 'image/jpeg'
    //   });
    // });

    cy.get('#currentAddress').type('257 ben van don street, Ward 2, District 4, HCMC');
    cy.get('#state').type('NCR').type('{enter}');
    cy.get('#city').type('Delhi').type('{enter}');

    // Click on the "Submit" button
    cy.get('#submit').click();

    // Assert that the form submission was successful
    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
  });
});

