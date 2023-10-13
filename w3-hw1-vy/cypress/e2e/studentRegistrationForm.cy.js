import { confirmDialog } from "../pages/studentRegistrationForm/confirmDialog";
import { registrationPage } from "../pages/studentRegistrationForm/registrationPage";

describe("The user sign up successfully", () => {
  beforeEach(() => {
    cy.fixture("account").as("account");
    cy.visit(Cypress.env("registrationForm"));
  });

  it("Verify that the user sign up successfully by filling all areas with valid information",()=>{
    cy.get("@account").then((account) =>{
      registrationPage
        .typeFirstName(account.firstName)
        .typeLastName(account.lastName)
        .typeUserEmail(account.email)
        .chooseGender(account.gender)
        .typeUserNumber(account.mobile)
        .chooseDateOfBirth(account.dateOfBirth)
        .chooseSubject(account.subjects)
        .chooseHobbies(account.hobbies)
        .choosePicture(account.picture)
        .typeCurrentAddress(account.currentAddress)
        .chooseState(account.state)
        .chooseCity(account.city)
        .clickSubmit();
      
        confirmDialog.isInformationCorrect(account);

    });
  });
})