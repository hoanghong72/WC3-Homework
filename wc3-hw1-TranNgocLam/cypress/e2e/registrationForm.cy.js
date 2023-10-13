
import { registerForm, confirmForm } from '../pages/registrationForm'
describe('Registration Form', () => {
  beforeEach(() => {
    cy.fixture('registrationFormTestData.json').as('registration')
    cy.visit('/automation-practice-form')
  });

  it('Register with valid data in required data fields', () => {
    cy.get('@registration').then((users) => {
      
      registerForm
        .inputLastName(users.lastName)
        .inputFirstName(users.firstName)
        .checkGender(users.gender)
        .inputUserNumber(users.userNumber)
        .clickSubmit()

      confirmForm
        .isCorrectName(users.firstName + " " + users.lastName)
        .isCorrectGender(users.gender)
        .isCorrectMobile(users.userNumber)
        .clickClose()
    });

  });


  it('Register with valid input in all data fields', () => {
    cy.get('@registration').then((users) => {
      
      registerForm
        .inputLastName(users.lastName)
        .inputFirstName(users.firstName)
        .checkGender(users.gender)
        .inputUserNumber(users.userNumber)
        .chooseDOB(users.dob_day, users.dob_month, users.dob_year)
        .inputSubjects(users.subjects)
        .checkHobbies(users.hobbies)
        .uploadPicture(users.picture)
        .inputCurrentAddress(users.currentAddress)
        .inputState(users.state)
        .inputCity(users.city)
        .clickSubmit()

      confirmForm
        .isCorrectName(users.firstName + " " + users.lastName)
        .isCorrectGender(users.gender)
        .isCorrectMobile(users.userNumber)
        .isCorrectDOB(users.dob_day, users.dob_month, users.dob_year)
        .isCorrectSubjects(users.subjects)
        .isCorrectHobbies(users.hobbies)
        .isCorrectPicture(users.picture)
        .isCorrectAddress(users.currentAddress)
        .isCorrectStateAndCity(users.state, users.city)
        .clickClose()
    });

  });
});