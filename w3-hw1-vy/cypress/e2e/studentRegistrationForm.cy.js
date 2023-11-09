import { confirmDialog } from "../pages/studentRegistrationForm/confirmDialog";
import { registrationPage } from "../pages/studentRegistrationForm/registrationPage";

describe("The user sign up successfully", () => {
  beforeEach(() => {
    cy.fixture("account").as("account");
    cy.visit(Cypress.env("registrationForm"));
  });

  it("TC-SIGNUP-3: The user can:\n -Change uploaded picture\n -Sign up successfully by filling all areas with valid information", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.name.valid[0].firstName)
        .typeLastName(account.name.valid[0].lastName)
        .typeUserEmail(account.email.valid[0])
        .chooseGender(account.gender)
        .typeUserNumber(account.mobile.valid[0])
        .chooseDateOfBirth(account.day, account.month, account.year)
        .chooseSubject(account.subjects)
        .chooseHobbies(account.hobbies)
        .choosePicture(account.picture.valid[0])
        .typeCurrentAddress(account.currentAddress)
        .chooseState(account.state)
        .chooseCity(account.city)
        .choosePicture(account.picture.valid[1])
        .clickSubmit();

      confirmDialog
        .isNameCorrect(account.name.valid[0].firstName, account.name.valid[0].lastName)
        .isEmailCorrect(account.email.valid[0])
        .isGenderCorrect(account.gender)
        .isMobileCorrect(account.mobile.valid[0])
        .isDOBCorrect(account.day, account.month, account.year)
        .isSubjectsCorrect(account.subjects)
        .isHobbiesCorrect(account.hobbies)
        .isPictureCorrect(account.picture.valid[1])
        .isAddressCorrect(account.currentAddress)
        .isStateCorrect(account.state, account.city);

    });
  });

  it("TC-SIGNUP-4: The user sign up successfully with filling only required areas with valid information", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.name.valid[0].firstName)
        .typeLastName(account.name.valid[0].lastName)
        .chooseGender(account.gender)
        .typeUserNumber(account.mobile.valid[0])
        .chooseDateOfBirth(account.day, account.month, account.year)
        .clickSubmit();

      confirmDialog
        .isNameCorrect(account.name.valid[0].firstName, account.name.valid[0].lastName)
        .isGenderCorrect(account.gender)
        .isMobileCorrect(account.mobile.valid[0])
        .isDOBCorrect(account.day, account.month, account.year)

    });
  });

  it("TC-SIGNUP-7: The Confirm Dialog does not accept leading or trailing spaces in FirstName and LastName", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.name.valid[1].firstName)
        .typeLastName(account.name.valid[1].lastName)
        .chooseGender(account.gender)
        .typeUserNumber(account.mobile.valid[0])
        .chooseDateOfBirth(account.day, account.month, account.year)
        .clickSubmit();

      confirmDialog
        .isNameCorrect(account.name.valid[1].firstName, account.name.valid[1].lastName)
        .isGenderCorrect(account.gender)
        .isMobileCorrect(account.mobile.valid[0])
        .isDOBCorrect(account.day, account.month, account.year)

    });
  });
});


describe("The user can not sign up", () => {
  beforeEach(() => {
    cy.fixture("account").as("account");
    cy.visit(Cypress.env("registrationForm"));
  });

  it("TC-SIGNUP-5: The user can not sign up with all empty information", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .clickSubmit();

      registrationPage
        .isFirstNameValid(false)
        .isLastNameValid(false)
        .isGenderValid(false)
        .isMobileValid(false)
        .isDOBValid(true);
    });
  });

  const user = require('../fixtures/account.json');
  const invalidName = user.name.invalid;
  const invalidEmail = user.email.invalid;
  const invalidMobile = user.mobile.invalid;

  invalidName.forEach((userName) => {
    it("Verify that user can not sign up with invalid First name and Last name", () => {
      cy.get("@account").then((account) => {
        registrationPage
          .typeFirstName(userName.firstName)
          .typeLastName(userName.lastName)
          .chooseGender(account.gender)
          .typeUserNumber(account.mobile.valid[0])
          .chooseDateOfBirth(account.day, account.month, account.year)
          .clickSubmit();

        registrationPage
          .isFirstNameValid(false)
          .isLastNameValid(false)
      })
    })
  });

  invalidEmail.forEach((email) => {
    it("Verify that user can not sign up with invalid Email", () => {
      cy.get("@account").then((account) => {
        registrationPage
          .typeFirstName(account.name.valid[0].firstName)
          .typeLastName(account.name.valid[0].lastName)
          .chooseGender(account.gender)
          .typeUserEmail(email)
          .typeUserNumber(account.mobile.valid[0])
          .chooseDateOfBirth(account.day, account.month, account.year)
          .clickSubmit();

        registrationPage
          .isEmailValid(false)
      })
    })
  });

  invalidMobile.forEach((mobile) => {
    it("Verify that user can not sign up with invalid Mobile", () => {
      cy.get("@account").then((account) => {
        registrationPage
          .typeFirstName(account.name.valid[0].firstName)
          .typeLastName(account.name.valid[0].lastName)
          .chooseGender(account.gender)
          .typeUserEmail(account.email.valid[0])
          .typeUserNumber(mobile)
          .chooseDateOfBirth(account.day, account.month, account.year)
          .clickSubmit();

        registrationPage
          .isMobileValid(false)
      })
    })
  });

  it("Verify that user can not sign up with invalid picture format", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.name.valid[0].firstName)
        .typeLastName(account.name.valid[0].lastName)
        .chooseGender(account.gender)
        .typeUserNumber(account.mobile.valid[0])
        .chooseDateOfBirth(account.day, account.month, account.year)
        .choosePicture(account.picture.invalid[0])
        .clickSubmit();

      registrationPage
        .isPictureValid();

    })
  });

  it("Verify that user can not sign up with birthday which is after today", () => {
    cy.get("@account").then((account) => {
      let tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(tomorrow);
      let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(tomorrow);
      let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(tomorrow);

      registrationPage
        .typeFirstName(account.name.valid[0].firstName)
        .typeLastName(account.name.valid[0].lastName)
        .chooseGender(account.gender)
        .typeUserNumber(account.mobile.valid[0])
        .chooseDateOfBirth(day, month, year)
        .clickSubmit();

      registrationPage
        .isDOBValid(false)
    })
  });
});


