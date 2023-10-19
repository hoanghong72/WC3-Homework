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
        .typeFirstName(account.user[0].firstName)
        .typeLastName(account.user[0].lastName)
        .typeUserEmail(account.user[0].email)
        .chooseGender(account.user[0].gender)
        .typeUserNumber(account.user[0].mobile)
        .chooseDateOfBirth(account.user[0].day, account.user[0].month, account.user[0].year)
        .chooseSubject(account.user[0].subjects)
        .chooseHobbies(account.user[0].hobbies)
        .choosePicture(account.user[1].picture)
        .typeCurrentAddress(account.user[0].currentAddress)
        .chooseState(account.user[0].state)
        .chooseCity(account.user[0].city)
        .choosePicture(account.user[0].picture)
        .clickSubmit();

      confirmDialog
        .isNameCorrect(account.user[0].firstName, account.user[0].lastName)
        .isEmailCorrect(account.user[0].email)
        .isGenderCorrect(account.user[0].gender)
        .isMobileCorrect(account.user[0].mobile)
        .isDOBCorrect(account.user[0].day, account.user[0].month, account.user[0].year)
        .isPictureCorrect(account.user[0].picture)
        .isSubjectsCorrect(account.user[0].subjects)
        .isHobbiesCorrect(account.user[0].hobbies)
        .isAddressCorrect(account.user[0].currentAddress)
        .isStateCorrect(account.user[0].state, account.user[0].city);

    });
  });

  it("TC-SIGNUP-4: The user sign up successfully with filling only required areas with valid information", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.user[0].firstName)
        .typeLastName(account.user[0].lastName)
        .chooseGender(account.user[0].gender)
        .typeUserNumber(account.user[0].mobile)
        .chooseDateOfBirth(account.user[0].day, account.user[0].month, account.user[0].year)
        .clickSubmit();

      confirmDialog
        .isNameCorrect(account.user[0].firstName, account.user[0].lastName)
        .isGenderCorrect(account.user[0].gender)
        .isMobileCorrect(account.user[0].mobile)
        .isDOBCorrect(account.user[0].day, account.user[0].month, account.user[0].year)

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

  it("TC-SIGNUP-7: The registration page does not accept leading or trailing spaces in FirstName and LastName", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.user[2].firstName)
        .typeLastName(account.user[2].lastName)
        .typeUserEmail(account.user[2].email)
        .chooseGender(account.user[2].gender)
        .typeUserNumber(account.user[2].mobile)
        .chooseDateOfBirth(account.user[2].day, account.user[2].month, account.user[2].year)
        .chooseSubject(account.user[2].subjects)
        .chooseHobbies(account.user[2].hobbies)
        .choosePicture(account.user[2].picture)
        .typeCurrentAddress(account.user[2].currentAddress)
        .chooseState(account.user[2].state)
        .chooseCity(account.user[2].city)
        .clickSubmit();

      confirmDialog
        .isNameCorrect(account.user[2].firstName, account.user[2].lastName)
        .isEmailCorrect(account.user[2].email)
        .isGenderCorrect(account.user[2].gender)
        .isMobileCorrect(account.user[2].mobile)
        .isDOBCorrect(account.user[2].day, account.user[2].month, account.user[2].year)
        .isPictureCorrect(account.user[2].picture)
        .isSubjectsCorrect(account.user[2].subjects)
        .isHobbiesCorrect(account.user[2].hobbies)
        .isAddressCorrect(account.user[2].currentAddress)
        .isStateCorrect(account.user[2].state, account.user[2].city);
    });
  });

  it("TC-SIGNUP-8: The user can not sign up with:\n - Email includes multiple '@'\n - Mobile number has alphabet characters\n - Picture has invalid file format", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.user[3].firstName)
        .typeLastName(account.user[3].lastName)
        .typeUserEmail(account.user[3].email)
        .chooseGender(account.user[3].gender)
        .typeUserNumber(account.user[3].mobile)
        .chooseDateOfBirth(account.user[3].day, account.user[3].month, account.user[3].year)
        .choosePicture(account.user[3].picture)
        .clickSubmit();

      registrationPage
        .isFirstNameValid(true)
        .isLastNameValid(true)
        .isEmailValid(false)
        .isGenderValid(true)
        .isMobileValid(false)
        .isDOBValid(true)
        .isPictureValid();
    });
  });

  it("TC-SIGNUP-9: The user can not sign up with:\n - FirstName has only space characters\n - Email does not include '.com'\n - Mobile has spaces, special character and non-number character: '1=1'", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.user[4].firstName)
        .typeLastName(account.user[4].lastName)
        .typeUserEmail(account.user[4].email)
        .chooseGender(account.user[4].gender)
        .typeUserNumber(account.user[4].mobile)
        .chooseDateOfBirth(account.user[4].day, account.user[4].month, account.user[4].year)
        .clickSubmit();

      registrationPage
        .isEmailValid(false)
        .isMobileValid(false)
        .isFirstNameValid(false);

    });
  });

  it("TC-SIGNUP-10: The user can not sign up with:\n - Email includes more than 1 '.'\n - Mobile number has spaces", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.user[5].firstName)
        .typeLastName(account.user[5].lastName)
        .typeUserEmail(account.user[5].email)
        .chooseGender(account.user[5].gender)
        .typeUserNumber(account.user[5].mobile)
        .chooseDateOfBirth(account.user[5].day, account.user[5].month, account.user[5].year)
        .clickSubmit();

      registrationPage
        .isMobileValid(false)
        .isEmailValid(false);
    });
  });

  it("TC-SIGNUP-11: The user can not sign up with:\n - Empty FirstName\n - LastName with '@' and number\n - Empty Gender\n - Email has spaces\n - Mobile has prefix character:'+'", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeLastName(account.user[6].lastName)
        .typeUserEmail(account.user[6].email)
        .typeUserNumber(account.user[6].mobile)
        .chooseDateOfBirth(account.user[6].day, account.user[6].month, account.user[6].year)
        .clickSubmit();

      registrationPage
        .isFirstNameValid(false)
        .isEmailValid(false)
        .isGenderValid(false)
        .isMobileValid(false)
        .isLastNameValid(false);
    });
  });

  it("TC-SIGNUP-12: The user can not sign up with:\n - Empty Mobile Number\n - Empty LastName\n - Email has leading and trailing spaces\n - Birthday after today", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.user[7].firstName)
        .chooseGender(account.user[7].gender)
        .typeUserEmail(account.user[7].email)
        .chooseDateOfBirth(account.user[7].day, account.user[7].month, account.user[7].year)
        .clickSubmit();

      registrationPage
        .isLastNameValid(false)
        .isEmailValid(false)
        .isMobileValid(false)
        .isDOBValid(false);
    });
  });

});


