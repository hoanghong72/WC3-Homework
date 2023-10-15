import { confirmDialog } from "../pages/studentRegistrationForm/confirmDialog";
import { registrationPage } from "../pages/studentRegistrationForm/registrationPage";

describe("The user sign up successfully", () => {
  beforeEach(() => {
    cy.fixture("account").as("account");
    cy.visit(Cypress.env("registrationForm"));
  });

  it("Verify that the user sign up successfully by filling all areas with valid information", () => {
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
        .choosePicture(account.user[0].picture)
        .typeCurrentAddress(account.user[0].currentAddress)
        .chooseState(account.user[0].state)
        .chooseCity(account.user[0].city)
        .clickSubmit();

      confirmDialog
        .isConfirmationFormCorrect(account.user[0].firstName
          , account.user[0].lastName
          , account.user[0].email
          , account.user[0].gender
          , account.user[0].mobile
          , account.user[0].day, account.user[0].month, account.user[0].year
          , account.user[0].picture
          , account.user[0].subjects
          , account.user[0].hobbies
          , account.user[0].currentAddress
          , account.user[0].state
          , account.user[0].city);


    });
  });

  it("Verify that the user sign up successfully with filling only valid required areas", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.user[0].firstName)
        .typeLastName(account.user[0].lastName)
        .chooseGender(account.user[0].gender)
        .typeUserNumber(account.user[0].mobile)
        .chooseDateOfBirth(account.user[0].day, account.user[0].month, account.user[0].year)
        .clickSubmit();

      confirmDialog
        .isConfirmationFormCorrect(account.user[0].firstName
          , account.user[0].lastName
          , ""
          , account.user[0].gender
          , account.user[0].mobile
          , account.user[0].day, account.user[0].month, account.user[0].year);

    });
  });
});


describe("The user can not sign up", () => {
  beforeEach(() => {
    cy.fixture("account").as("account");
    cy.visit(Cypress.env("registrationForm"));
  });

  it("Verify that the user can not sign up with all empty required information", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .clickSubmit();

      registrationPage
        .isValid(false, false, true, false, false, false);
    });
  });

  it("Verify that the user can not sign up with empty Mobile Number and empty Last name", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.user[0].firstName)
        //.typeLastName("")
        .typeUserEmail(account.user[0].email)
        .chooseGender(account.user[0].gender)
        //.typeUserNumber("")
        .chooseDateOfBirth(account.user[0].day, account.user[0].month, account.user[0].year)
        .chooseSubject(account.user[0].subjects)
        .chooseHobbies(account.user[0].hobbies)
        .choosePicture(account.user[0].picture)
        .typeCurrentAddress(account.user[0].currentAddress)
        .chooseState(account.user[0].state)
        .chooseCity(account.user[0].city)
        .clickSubmit();

      registrationPage.isValid(true, false, true, true, false, true);
    });
  });

  it("Verify that the user can not sign up with empty Gender and empty firstName", () => {
    cy.get("@account").then((account) => {
      registrationPage
        //.typeFirstName(account.user[0].firstName)
        .typeLastName(account.user[0].lastName)
        .typeUserEmail(account.user[0].email)
        //.chooseGender(account.user[0].gender)
        .typeUserNumber(account.user[0].mobile)
        .chooseDateOfBirth(account.user[0].day, account.user[0].month, account.user[0].year)
        .chooseSubject(account.user[0].subjects)
        .chooseHobbies(account.user[0].hobbies)
        .choosePicture(account.user[0].picture)
        .typeCurrentAddress(account.user[0].currentAddress)
        .chooseState(account.user[0].state)
        .chooseCity(account.user[0].city)
        .clickSubmit();

      registrationPage.isValid(false, true, true, false, true, true);
    });
  });

  it("Verify that the user can not sign up with invalid information: Email does not include .com ; Mobile number has alphabet characters ; Picture has invalid file format", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.user[0].firstName)
        .typeLastName(account.user[0].lastName)
        .typeUserEmail("ngphvy01@gmail")
        .chooseGender(account.user[0].gender)
        .typeUserNumber("090abcdefg")
        .chooseDateOfBirth(account.user[0].day, account.user[0].month, account.user[0].year)
        .chooseSubject(account.user[0].subjects)
        .chooseHobbies(account.user[0].hobbies)
        .choosePicture("I.pdf")
        .typeCurrentAddress(account.user[0].currentAddress)
        .chooseState(account.user[0].state)
        .chooseCity(account.user[0].city)
        .clickSubmit();

      registrationPage.isValid(true, true, false, true, false, true);
    });
  });

  it("Verify that the user can not sign up with and invalid email: Email include more than 1 '.' ; Mobile number has alphabet characters; Picture has invalid file format", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.user[0].firstName)
        .typeLastName(account.user[0].lastName)
        .typeUserEmail("ngphvy01@gmail....com")
        .chooseGender(account.user[0].gender)
        .typeUserNumber("090abcdefg")
        .chooseDateOfBirth(account.user[0].day, account.user[0].month, account.user[0].year)
        .chooseSubject(account.user[0].subjects)
        .chooseHobbies(account.user[0].hobbies)
        .choosePicture("I.pdf")
        .typeCurrentAddress(account.user[0].currentAddress)
        .chooseState(account.user[0].state)
        .chooseCity(account.user[0].city)
        .clickSubmit();

      registrationPage.isValid(true, true, false, true, false, true);
    });
  });


  it("Verify that the user can not sign up with birthday after today", () => {
    cy.get("@account").then((account) => {
      registrationPage
        .typeFirstName(account.user[0].firstName)
        .typeLastName(account.user[0].lastName)
        .typeUserEmail(account.user[0].email)
        .chooseGender(account.user[0].gender)
        .typeUserNumber(account.user[0].mobile)
        .chooseDateOfBirth("15", account.user[0].month, account.user[0].year)
        .chooseSubject(account.user[0].subjects)
        .chooseHobbies(account.user[0].hobbies)
        .choosePicture(account.user[0].picture)
        .typeCurrentAddress(account.user[0].currentAddress)
        .chooseState(account.user[0].state)
        .chooseCity(account.user[0].city)
        .clickSubmit();

      //Assume today is 14th Oct,2023
      const date = new Date();
      let day = date.getDate();
      //check date
      if (15 > day) {
        // form not exist
        cy.contains('Thanks for submitting the form').should('not.exist');
      }

    });
  });
});


