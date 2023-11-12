
// import { it } from 'mocha';
import { registerForm, confirmForm } from '../pages/registrationForm'
describe('Registration Form', () => {

  beforeEach(() => {
    cy.fixture('registrationFormTestData.json').as('registration')
    cy.visit('/automation-practice-form')
  });

  // TCRegister#1: Verify that user can submit successfully with valid input in all data fields
  it('TCRegister#1: Verify that user can submit successfully with valid input in all data fields', () => {
    cy.get('@registration').then((users) => {

      registerForm
        .inputLastName(users[0].lastName)
        .inputFirstName(users[0].firstName)
        .inputEmail(users[0].email)
        .checkGender(users[0].gender)
        .inputUserNumber(users[0].userNumber)
        .chooseDOB(users[0].dob_day, users[0].dob_month, users[0].dob_year)
        .inputSubjects(users[0].subjects)
        .checkHobbies(users[0].hobbies)
        .uploadPicture(users[0].picture)
        .inputCurrentAddress(users[0].currentAddress)
        .inputState(users[0].state)
        .inputCity(users[0].city)
        .clickSubmit()

      confirmForm
        .isCorrectName(users[0].firstName, users[0].lastName)
        .isCorrectGender(users[0].gender)
        .isCorrectEmail(users[0].email)
        .isCorrectMobile(users[0].userNumber)
        .isCorrectDOB(users[0].dob_day, users[0].dob_month, users[0].dob_year)
        .isCorrectSubjects(users[0].subjects)
        .isCorrectHobbies(users[0].hobbies)
        .isCorrectPicture(users[0].picture)
        .isCorrectAddress(users[0].currentAddress)
        .isCorrectStateAndCity(users[0].state, users[0].city)
        .clickClose()
    });

  });

  // TCRegister#2: Verify that user can submit successfully with valid data in required data fields
  it('TCRegister#2: Verify that user can submit successfully with valid data in required data fields', () => {
    cy.get('@registration').then((users) => {

      registerForm
        .inputLastName(users[0].lastName)
        .inputFirstName(users[0].firstName)
        .checkGender(users[0].gender)
        .inputUserNumber(users[0].userNumber)
        .clickSubmit()

      confirmForm
        .isCorrectName(users[0].firstName, users[0].lastName)
        .isCorrectGender(users[0].gender)
        .isCorrectMobile(users[0].userNumber)
        .clickClose()
    });
  });

  /*   TCRegister#3: Verify that user submit successfully when first name, last name, current adrress have abundant space at the begin and end of input data*/
  it('TCRegister#3: Verify that user submit successfully when first name, last name, current adrress have abundant space at the begin and end of input data', () => {
    cy.get('@registration').then((users) => {

      registerForm
        .inputLastName(users[1].lastName)
        .inputFirstName(users[1].firstName)
        .checkGender(users[1].gender)
        .inputUserNumber(users[1].userNumber)
        .clickSubmit()

      confirmForm
        .isCorrectName(users[1].firstName, users[1].lastName)
        .isCorrectGender(users[1].gender)
        .isCorrectMobile(users[1].userNumber)
        .clickClose()
    });
  });

  // TCRegister#4: Verify that user cannot submit with empty data fields.
  it('TCRegister#4: Verify that user cannot submit with empty data fields.', () => {
    registerForm
      .clickSubmit()
      .checkFirstNameValid(false)
      .checkLastNameValid(false)
      .isGenderChecked(false)
      .checkMobileValid(false)
  });
  const users = require('../fixtures/registrationFormTestData.json')


  /*  TCRegister#5: Verify that user cannot submit with invalid first name and last name:
  - First name and Last name includes numbers and special characters.
  - First name and Last name includes only a space character. */
  const invalidName = users[2].name
  invalidName.forEach(username => {
    it('TCRegister#5: Verify that user cannot submit with invalid first name and last name' + JSON.stringify(username), () => {
      registerForm
        .inputLastName(username.lastName)
        .inputFirstName(username.firstName)
        .checkGender(users[2].gender)
        .inputUserNumber(users[2].userNumber)
        .clickSubmit()
        .checkFirstNameValid(false) //Validate the input
        .checkLastNameValid(false)
    });
  })


  // it('TCRegister#5: Verify that user cannot submit with invalid first name and last name', () => {
  //   cy.get('@registration').then((users) => {
  //     // names = users[2].name
  //     cy.get(users[2].name).each((username) => {
  //       registerForm
  //         .inputLastName(username.lastName)
  //         .inputFirstName(username.firstName)
  //         .checkGender(users[2].gender)
  //         .inputUserNumber(users[2].userNumber)
  //         .clickSubmit()
  //         .checkFirstNameValid(false) //Validate the input
  //         .checkLastNameValid(false)
  //     });

  //   });
  // });

  /*  TCRegister#6: Verify that user cannot submit with invalid data:
  - Date of birth is selected by a day after today.
  - Picture is selected with a file that is not an image format file. */
  it('TCRegister#6: Verify that user cannot submit with invalid DOB and pictur file.', () => {
    cy.get('@registration').then((users) => {
      let tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(tomorrow);
      let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(tomorrow);
      let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(tomorrow);
      registerForm
        .inputLastName(users[3].lastName)
        .inputFirstName(users[3].firstName)
        .inputEmail(users[3].email)
        .checkGender(users[3].gender)
        .inputUserNumber(users[3].userNumber)
        .chooseDOB(day, month, year)
        .uploadPicture(users[3].picture)
        .clickSubmit()
        .checkDOBValid(false) //Validate the input
        .checkPictureValid(false)
    });
  });

  const invalidData = users[4].invalidEmailAndNumber
  invalidData.forEach(data => {
    it('TCRegister#7: Verify that user cannot submit with invalid email and invalid phone number: ' + JSON.stringify(data), () => {
      registerForm
        .inputLastName(users[4].lastName)
        .inputFirstName(users[4].firstName)
        .inputEmail(data.email)
        .checkGender(users[4].gender)
        .inputUserNumber(data.userNumber)
        .clickSubmit()

      registerForm
        .checkFirstNameValid(true)
        .checkLastNameValid(true)
        .checkEmailValid(false)
        .isGenderChecked(true)
        .checkMobileValid(false)

    })

  })


  /*    TCRegister#8: Verify that user cannot submit with:
- First name, Last name, Current Adress have more than 255 characters.
- Picture file's size exceeds limit file size 2MB. */
  it('TCRegister#8: Verify that user cannot submit with: \n- First name, Last name, Current Adress have more than 255 characters. \n- Picture file"s size exceeds limit file size 2MB.', () => {
    cy.get('@registration').then((users) => {
      // First register
      registerForm
        .inputLastName(users[5].lastName)
        .inputFirstName(users[5].firstName)
        .checkGender(users[5].gender)
        .inputUserNumber(users[5].userNumber)
        .inputCurrentAddress(users[5].currentAddress)
        .clickSubmit()
        .checkFirstNameValid(false) //Validate the input
        .checkLastNameValid(false)
        .checkAddressValid(false)
        .checkPictureValid(false)

    });
  });
});