
import { formPage } from "../pages/registrationForm/formPage";
describe('Register', () => {
  beforeEach(() => {
    cy.fixture("data").as("data");
    cy.visit(Cypress.env("form"));
  });
  it("Verify that user can registers when user inputs all fields with valid data ", () => {
    cy.get("@data").then((data) => {
      formPage
        .typeFirstName(data.profiles[0].firstname)
        .typeLastName(data.profiles[0].lastname)
        .typeEmail(data.profiles[0].email)
        .selectGender(data.profiles[0].gender)
        .typeMobile(data.profiles[0].mobile)
        .selectDOB(data.profiles[0].DOB.day, data.profiles[0].DOB.month, data.profiles[0].DOB.year)
        .selectSubjects(data.profiles[0].subjects)
        .checkHobbies(data.profiles[0].hobbies)
        .uploadPicture(data.profiles[0].picture)
        .typeCurrentAddress(data.profiles[0].currentaddress)
        .selectStateAndCity(data.profiles[0].state, data.profiles[0].city)
        .clickSubmit();
      formPage.popup
        .isNameCorret(data.profiles[0].firstname, data.profiles[0].lastname)
        .isEmaiCorret(data.profiles[0].email)
        .isGenderCorret(data.profiles[0].gender)
        .isMobileCorret(data.profiles[0].mobile)
        .isDOBCorret(data.profiles[0].DOB.day,data.profiles[0].DOB.month,data.profiles[0].DOB.year)
        .isSubjectsCorrect(data.profiles[0].subjects)
        .isHobbiesCorrect(data.profiles[0].hobbies)
        .isPictureCorrect(data.profiles[0].picture)
        .isCurrentAddressCorrect(data.profiles[0].currentaddress)
        .isStateAndCityCorrect(data.profiles[0].state, data.profiles[0].city)
    });
  });
  it("Verify that user can register when user inputs mandatory fields with valid data", ()=>{
    cy.get("@data").then((data) => {
      formPage
        .typeFirstName(data.profiles[0].firstname)
        .typeLastName(data.profiles[0].lastname)
        .selectGender(data.profiles[0].gender)
        .typeMobile(data.profiles[0].mobile)
        .clickSubmit();
      formPage.popup
        .isNameCorret(data.profiles[0].firstname, data.profiles[0].lastname)
        .isGenderCorret(data.profiles[0].gender)
        .isMobileCorret(data.profiles[0].mobile)
    });
  });
  it("Verify that user cannot register when user doesn't input any mandatory fields",()=>{
      formPage
        .clickSubmit()
        .isFirtsNameValid(false)
        .isLastNameValid(false)
        .isGenderValid(false)
        .isMobileValid(false);
  });
  it("Verify that user cannot register when inputting only blank spaces on First Name, Last Name, Mobile fields", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[1].firstname)
        .typeLastName(data.profiles[1].lastname)
        .selectGender(data.profiles[1].gender)
        .typeMobile(data.profiles[1].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(false)
        .isLastNameValid(true)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("Verify that user cannot register when inputting number characters on First Nam, Last Name fields", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[2].firstname)
        .typeLastName(data.profiles[2].lastname)
        .selectGender(data.profiles[2].gender)
        .typeMobile(data.profiles[2].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(false)
        .isLastNameValid(true)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("Verify that user cannot register when inputting special characters on First Name, Last Name, Email, Mobile fields", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[3].firstname)
        .typeLastName(data.profiles[3].lastname)
        .typeEmail(data.profiles[3].email)
        .selectGender(data.profiles[3].gender)
        .typeMobile(data.profiles[3].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(false)
        .isLastNameValid(true)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("Verify that user cannot register when inputting Email with wrong domain name", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[4].firstname)
        .typeLastName(data.profiles[4].lastname)
        .typeEmail(data.profiles[4].email)
        .selectGender(data.profiles[4].gender)
        .typeMobile(data.profiles[4].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isEmailValid(false)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("Verify that user cannot register when inputting Email with missing domain", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[5].firstname)
        .typeLastName(data.profiles[5].lastname)
        .typeEmail(data.profiles[5].email)
        .selectGender(data.profiles[5].gender)
        .typeMobile(data.profiles[5].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isEmailValid(false)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("Verify that user cannot register when inputting Email with missing \"@\"", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[6].firstname)
        .typeLastName(data.profiles[6].lastname)
        .typeEmail(data.profiles[6].email)
        .selectGender(data.profiles[6].gender)
        .typeMobile(data.profiles[6].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isEmailValid(false)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("Verify that user cannot register when inputting alphabetic characters on Mobile field", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[7].firstname)
        .typeLastName(data.profiles[7].lastname)
        .selectGender(data.profiles[7].gender)
        .typeMobile(data.profiles[7].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isGenderValid(true)
        .isMobileValid(false);
    })
  });
  it("Verify that the user cannot register when inputting a mobile number less than 10 characters on Mobile filed", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[8].firstname)
        .typeLastName(data.profiles[8].lastname)
        .selectGender(data.profiles[8].gender)
        .typeMobile(data.profiles[8].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isGenderValid(true)
        .isMobileValid(false);
    })
  });  
});

