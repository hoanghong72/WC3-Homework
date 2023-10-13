
describe('Automation Test For Practice Form', () => {
  const testData = {
    firstName: 'NHU',
    lastName: 'BUI NGUYEN THUY NHU',
    email: 'nhubnt2508@gmail.com',
    gender: 'Female',
    phoneNumber: '0345596300',
    //dateOfBirth: '25/08/2001',
    subjects: 'History',
    hobby: '1', // Checkbox value
    address: 'Pham Van Dong Street, Ho Chi Minh City',
    state: 'NCR',
    city: 'Delhi',
    //filePath: 'somefile.txt',
  }
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  
  // Happy flow
    it('Sucessfully submit', () => {
    // Textbox
    cy.get('#firstName').type(testData.firstName).should('have.value',testData.firstName)
    cy.get('#lastName').type(testData.lastName).should('have.value',testData.lastName)
    cy.get('#userEmail').type(testData.email).should('have.value',testData.email)
    cy.get('input[value="' + testData.gender + '"]').click({force: true}).click({force:true}).should('have.value',testData.gender)
    cy.get('#userNumber').type(testData.phoneNumber).should('have.value',testData.phoneNumber)
    
    // Choose date of birth
    cy.get('#dateOfBirth-wrapper').click()
    cy.get('.react-datepicker__month-select').select('August')
    cy.get('.react-datepicker__year-select').select('2001')
    cy.get('.react-datepicker__day--025').click()
    
  
    cy.get('#subjectsInput').type(testData.subjects);
    cy.get('.subjects-auto-complete__menu-list')
      .contains(testData.subjects)
      .click();
    
    //cy.get('#uploadPicture').attachFile(filePath)
    cy.get('[for="hobbies-checkbox-3"]').click()
    cy.get('#currentAddress').type(testData.address)
    

    //cy.get('#city').type
    cy.get('#submit').click({force: true})
    

  })
  it('Bank Page', () => {
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

    // Verify that the subject has been deleted
    //cy.get('#subjectsInput')
      // .contains(testData.subjects)
      // .should('not.exist')



    cy.get('#submit').click({force: true})
    

  })
})
