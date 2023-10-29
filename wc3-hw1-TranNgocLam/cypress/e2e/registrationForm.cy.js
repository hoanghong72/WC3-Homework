
import { registerForm, confirmForm } from '../pages/registrationForm'
describe('Registration Form', () => {
  beforeEach(() => {
    cy.fixture('registrationFormTestData.json').as('registration')
    cy.visit('/automation-practice-form')
  });

  // TCRegister#1: Verify that user can submit successfully with valid input in all data fields
  it('TCRegister#1', () => {
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
  it('TCRegister#2', () => {
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

  /*   TCRegister#3: Verify that user submit successfully when first name, last name, current adrress have abundant space  at the begin and end of input data:
     - First name, Last name, Current Adress have more than 255 characters.
     - Picture file's size exceeds limit file size 2MB. */
  it('TCRegister#3', () => {
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

  // TCRegister#4: Verify that user cannot submit with empty data fields.
  it('TCRegister#4', () => {
    registerForm
      .clickSubmit()
      .checkFirstNameValid(false)
      .checkLastNameValid(false)
      .isGenderChecked(false)
      .checkMobileValid(false)
  });

  /*  TCRegister#5: Verify that user cannot submit with invalid data:
    - First Name includes numbers and special characters.
    - Last Name includes numbers and special characters */
  it('TCRegister#5', () => {
    cy.get('@registration').then((users) => {
      registerForm
        .inputLastName(users[2].lastName)
        .inputFirstName(users[2].firstName)
        .checkGender(users[2].gender)
        .inputUserNumber(users[2].userNumber)
        .clickSubmit()

      confirmForm
        .isCorrectName(users[2].firstName, users[2].lastName)
        .isCorrectGender(users[2].gender)
        .isCorrectMobile(users[2].userNumber)
        .clickClose()
    });
  });

  /*  TCRegister#6: Verify that user cannot submit with invalid data:
    - Email lacks of '@' and email domain.
    - Phone number has less than 10 digits. */
  it.only('TCRegister#6', () => {
    cy.get('@registration').then((users) => {
      registerForm
        .inputLastName(users[3].lastName)
        .inputFirstName(users[3].firstName)
        .inputEmail(users[3].email)
        .checkGender(users[3].gender)
        .inputUserNumber(users[3].userNumber)
        .clickSubmit()

      cy.wait(5000)

      registerForm
        .checkFirstNameValid(true)
        .checkLastNameValid(true)
        .checkEmailValid(false)
        .isGenderChecked(true)
        .checkMobileValid(false)

    });
  });

  /*  TCRegister#7: Verify that user cannot submit with invalid data:
    - First Name includes only a space character.
    - Last Name includes only a space character.
    - Date of birth is selected by a day after today.
    - Picture is selected with a file that is not an image format file. */
  it('TCRegister#7', () => {
    cy.get('@registration').then((users) => {
      let tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(tomorrow);
      let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(tomorrow);
      let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(tomorrow);
      registerForm
        .inputLastName(users[4].lastName)
        .inputFirstName(users[4].firstName)
        .inputEmail(users[4].email)
        .checkGender(users[4].gender)
        .inputUserNumber(users[4].userNumber)
        .chooseDOB(day, month, year)
        .uploadPicture(users[4].picture)
        .clickSubmit()

      confirmForm
        .isCorrectName(users[4].firstName, users[4].lastName)
        .isCorrectGender(users[4].gender)
        .isCorrectEmail(users[4].email)
        .isCorrectMobile(users[4].userNumber)
        .isCorrectDOB(day, month, year)
        .isCorrectPicture(users[4].picture)
        .clickClose()

    });
  });

  /*  TCRegister#8: Verify that user cannot submit with invalid data:
    - Email lacks of email domain.
    - Phone number includes characters. */
  it('TCRegister#8', () => {
    cy.get('@registration').then((users) => {

      registerForm
        .inputLastName(users[5].lastName)
        .inputFirstName(users[5].firstName)
        .inputEmail(users[5].email)
        .checkGender(users[5].gender)
        .inputUserNumber(users[5].userNumber)
        .clickSubmit()

      registerForm
        .checkFirstNameValid(true)
        .checkLastNameValid(true)
        .checkEmailValid(false)
        .isGenderChecked(true)
        .checkMobileValid(false)

    });
  });

  /*  TCRegister#9: Verify that user cannot submit with invalid data:
    - Email's domain lacks of ".com".
    - Phone numbers begin with a phone code instead of 0. */
  it('TCRegister#9', () => {
    cy.get('@registration').then((users) => {

      registerForm
        .inputLastName(users[6].lastName)
        .inputFirstName(users[6].firstName)
        .inputEmail(users[6].email)
        .checkGender(users[6].gender)
        .inputUserNumber(users[6].userNumber)
        .clickSubmit()

      registerForm
        .checkFirstNameValid(true)
        .checkLastNameValid(true)
        .checkEmailValid(false)
        .isGenderChecked(true)
        .checkMobileValid(false)

    });
  });
  /*    TCRegister#10: Verify that user cannot submit with invalid data:
      - Email's domain lacks of ".com".
      - Phone numbers begin with a phone code instead of 0. */
  it('TCRegister#10', () => {
    cy.get('@registration').then((users) => {

      registerForm
        .inputLastName(users[7].lastName)
        .inputFirstName(users[7].firstName)
        .inputEmail(users[7].email)
        .checkGender(users[7].gender)
        .inputUserNumber(users[7].userNumber)
        .clickSubmit()

      confirmForm
        .isCorrectName(users[7].firstName, users[7].lastName)
        .isCorrectGender(users[7].gender)
        .isCorrectEmail(users[7].email)
        .isCorrectMobile(users[7].userNumber)
        .clickClose()

    });
  });

  /*    TCRegister#11: Verify that user cannot submit with already registered mobile phone and email. */
  it('TCRegister#11', () => {
    cy.get('@registration').then((users) => {
      // First register
      registerForm
        .inputLastName(users[8].lastName)
        .inputFirstName(users[8].firstName)
        .inputEmail(users[8].email)
        .checkGender(users[8].gender)
        .inputUserNumber(users[8].userNumber)
        // .inputCurrentAddress(users[8].currentAddress)
        .clickSubmit()

      confirmForm
        .isCorrectName(users[8].firstName, users[8].lastName)
        .isCorrectGender(users[8].gender)
        .isCorrectEmail(users[8].email)
        .isCorrectMobile(users[8].userNumber)
        // .isCorrectAddress(users[8].currentAddress)
        .clickClose()

      // Second register
      registerForm
        .inputLastName(users[9].lastName)
        .inputFirstName(users[9].firstName)
        .inputEmail(users[9].email)
        .checkGender(users[9].gender)
        .inputUserNumber(users[9].userNumber)
        // .inputCurrentAddress(users[8].currentAddress)
        .clickSubmit()

      confirmForm
        .isCorrectName(users[9].firstName, users[9].lastName)
        .isCorrectGender(users[9].gender)
        .isCorrectEmail(users[9].email)
        .isCorrectMobile(users[9].userNumber)
        // .isCorrectAddress(users[8].currentAddress)
        .clickClose()

    });
  });


  /*    TCRegister#12: Verify that user cannot submit with:
- First name, Last name, Current Adress have more than 255 characters.
- Picture file's size exceeds limit file size 2MB. */
  it('TCRegister#12', () => {
    cy.get('@registration').then((users) => {
      // First register
      registerForm
        .inputLastName(users[10].lastName)
        .inputFirstName(users[10].firstName)
        .checkGender(users[10].gender)
        .inputUserNumber(users[10].userNumber)
        .inputCurrentAddress(users[10].currentAddress)
        .clickSubmit()

      confirmForm
        .isCorrectName(users[10].firstName, users[10].lastName)
        .isCorrectGender(users[10].gender)
        .isCorrectMobile(users[10].userNumber)
        .isCorrectAddress(users[10].currentAddress)
        .clickClose()

    });
  });
});