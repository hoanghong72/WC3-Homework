import { confirmTable } from "../pages/confirmTable";
describe('Automation Test For Practice Form', () => {
  beforeEach(() => {
    cy.fixture('testData.json').as('testData')
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  
  // Happy flow 1
  it ('Sucessfully submit with valid input', () => {
    cy.get('@testData').then((testData) => {
    // Textbox
      cy.get('#firstName').type(testData.firstName).should('have.value',testData.firstName)
      cy.get('#lastName').type(testData.lastName).should('have.value',testData.lastName)
      cy.get('#userEmail').type(testData.email).should('have.value',testData.email)
      cy.get('input[value="' + testData.gender + '"]').click({force:true}).should('have.value',testData.gender)
      cy.get('#userNumber').type(testData.phoneNumber).should('have.value',testData.phoneNumber)
      
      // Choose date of birth
      cy.get('#dateOfBirth-wrapper').click()
      cy.get('.react-datepicker__month-select').select(testData.dob_month)
      cy.get('.react-datepicker__year-select').select(testData.dob_year)
      cy.get('.react-datepicker__day--025').first().click()
    
      cy.get('#subjectsInput').type(testData.subjects)
      cy.get('.subjects-auto-complete__menu-list')
        .contains(testData.subjects)
        .click()
      
      cy.get('#uploadPicture').selectFile(testData.picture);
      cy.get('[for="hobbies-checkbox-3"]').click()
      cy.get('#currentAddress').type(testData.address).should('have.value',testData.address)
      

      cy.get('#state input').type(testData.state, { force: true }).type('{enter}', { force: true });
      cy.get('#city input').type(testData.city, { force: true }).type('{enter}', { force: true });    
      cy.get('#submit').click({force: true})

      
      confirmTable
      .validName(testData.firstName,testData.lastName)
      .validEmail(testData.email)
      .validGender(testData.gender)
      .validPhoneNumber(testData.phoneNumber)
      .validDOB(testData.dob_day, testData.dob_month, testData.dob_year)
      .validPicture(testData.picture)
      .validSubjects(testData.subjects)
      .validHobbies(testData.hobby)
      .validAddress(testData.address)
      .validStateCity(testData.state,testData.city)
      });

  })

  // Happy flow 2
  it ('Sucessfully submit with required input', () => {
    cy.get('@testData').then((testData) => {
      cy.get('#firstName').type(testData.firstName).should('have.value',testData.firstName)
      cy.get('#lastName').type(testData.lastName).should('have.value',testData.lastName)
      cy.get('input[value="' + testData.gender + '"]').click({force:true}).should('have.value',testData.gender)
      cy.get('#userNumber').type(testData.phoneNumber).should('have.value',testData.phoneNumber)
      cy.get('#submit').click({force: true})
      
      confirmTable
      .validName(testData.firstName,testData.lastName)
      .validGender(testData.gender)
      .validPhoneNumber(testData.phoneNumber)
      });

  })
  
  // Invalid email
  //invalid: "rgb(220, 53, 69)",
  //valid: "rgb(40, 167, 69)"
  it ('Unucessfully submit with invalid format of email', () => {
    cy.get('@testData').then((testData) => {
      cy.get('#firstName').type(testData.firstName).should('have.value',testData.firstName)
      cy.get('#lastName').type(testData.lastName).should('have.value',testData.lastName)
      cy.get('#userEmail').type("nhubnt12")
      cy.get('input[value="' + testData.gender + '"]').click({force:true}).should('have.value',testData.gender)
      cy.get('#userNumber').type(testData.phoneNumber).should('have.value',testData.phoneNumber)
      cy.get('#submit').click({force: true})

      cy.get('#userEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)')
      });

  })

  // Delete Subjects field lead to blank page
  it('Delete Subjects field lead to blank page', () => {
    cy.get('@testData').then((testData) => {
      // Textbox
      cy.get('#firstName').type(testData.firstName).should('have.value',testData.firstName)
      cy.get('#lastName').type(testData.lastName).should('have.value',testData.lastName)
      cy.get('input[value="' + testData.gender + '"]').click({force: true}).click({force:true}).should('have.value',testData.gender)
      cy.get('#userNumber').type(testData.phoneNumber).should('have.value',testData.phoneNumber)
      
      cy.get('#subjectsInput').type(testData.subjects);
      cy.get('.subjects-auto-complete__menu-list')
        .contains(testData.subjects)
        .click();
        cy.get('.subjects-auto-complete__multi-value__remove')
        .click({force:true})
        .should('not.exist')

      cy.get('#submit').click({force: true})
      
    })
  })
})
