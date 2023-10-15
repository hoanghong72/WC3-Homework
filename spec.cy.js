/// <reference types='cypress'/>

describe('demoQA - Regist Form', () => {
  const testInput = {
      firstName: "Nghia",
      lastName: "Do",
      email: "meomeo211@gmail.com",
      gender: "Female",
      phoneNumber: '0774859984',
      // DOB: "14/11/2001"
      subjects: "Economics",
      hobby: "2",
      address: "Ho Chi Minh City",
      state: "NCR",
      city: "Dehli",
  }
  it ('User submit sucessfully', () => {
      cy.visit('https://demoqa.com/automation-practice-form')

      cy.get('#firstName').type(testInput.firstName).should('have.value',testInput.firstName)
      cy.get('#lastName').type(testInput.lastName).should('have.value',testInput.lastName)
      cy.get('#userEmail').type(testInput.email).should('have.value',testInput.email)
      cy.get('input[value="'+testInput.gender+'"]').click({force:true}).should('have.value',testInput.gender)
      cy.get('#userNumber').type(testInput.phoneNumber).should('have.value',testInput.phoneNumber)
      cy.get('#dateOfBirthInput').click()
      cy.get('.react-datepicker__month-select').select('November')
      cy.get('.react-datepicker__year-select').select('2001')
      cy.get('.react-datepicker__day--014').click()
      cy.get('.subjects-auto-complete__value-container').type(testInput.subjects).click({force:true})
      cy.get('[for="hobbies-checkbox-2"]').click()
      cy.get('#currentAddress').type(testInput.address).should('have.value', testInput.address)
      cy.get('#submit').click({force:true})
      cy.get('#closeLargeModal').click({force:true})


  })
})