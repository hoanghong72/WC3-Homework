import { formPage } from "../pages/formPage";

describe('User can register', () => {
  beforeEach(() => {
    cy.fixture("data").as("data");
    cy.visit(Cypress.env("form"));
  });
  it("TC-FORM-05: Verify that user can registers when user inputs all fields with valid data ", () => {
    cy.get("@data").then((data) => {
      formPage
        .typeFirstName(data.profiles[5].firstname)
        .typeLastName(data.profiles[5].lastname)
        .typeEmail(data.profiles[5].email)
        .selectGender(data.profiles[5].gender)
        .typeMobile(data.profiles[5].mobile)
        .selectDOB(data.profiles[5].DOB.day, data.profiles[5].DOB.month, data.profiles[5].DOB.year)
        .selectSubjects(data.profiles[5].subjects)
        .checkHobbies(data.profiles[5].hobbies)
        .uploadPicture(data.profiles[5].picture)
        .typeCurrentAddress(data.profiles[5].currentaddress)
        .selectStateAndCity(data.profiles[5].state, data.profiles[5].city)
        .clickSubmit();
      formPage.popup
        .isNameCorret(data.profiles[5].firstname, data.profiles[5].lastname)
        .isEmaiCorret(data.profiles[5].email)
        .isGenderCorret(data.profiles[5].gender)
        .isMobileCorret(data.profiles[5].mobile)
        .isDOBCorret(data.profiles[5].DOB.day,data.profiles[5].DOB.month,data.profiles[5].DOB.year)
        .isSubjectsCorrect(data.profiles[5].subjects)
        .isHobbiesCorrect(data.profiles[5].hobbies)
        .isPictureCorrect(data.profiles[5].picture)
        .isCurrentAddressCorrect(data.profiles[5].currentaddress)
        .isStateAndCityCorrect(data.profiles[5].state, data.profiles[5].city)
    });
  });
  it("TC-FORM-06: Verify that user can register when user inputs mandatory fields with valid data", ()=>{
    cy.get("@data").then((data) => {
      formPage
        .typeFirstName(data.profiles[6].firstname)
        .typeLastName(data.profiles[6].lastname)
        .selectGender(data.profiles[6].gender)
        .typeMobile(data.profiles[6].mobile)
        .clickSubmit();
      formPage.popup
        .isNameCorret(data.profiles[6].firstname, data.profiles[6].lastname)
        .isGenderCorret(data.profiles[6].gender)
        .isMobileCorret(data.profiles[6].mobile)
    });
  });
});
describe('User can not register',()=>{
  beforeEach(() => {
    cy.fixture("data").as("data");
    // cy.visit(Cypress.env("form"));
    cy.visit(Cypress.env("form"), {
      timeout: 1000000 
    });
  });
  it("TC-FORM-07: Verify that user cannot register when user doesn't input any mandatory fields",()=>{
    cy.get("@data").then((data) =>{
      formPage
        .clickSubmit()
        .isFirtsNameValid(false)
        .isLastNameValid(false)
        .isGenderValid(false)
        .isMobileValid(false);
    })
  });
  it("TC-FORM-10: Verify that user cannot register when inputting only blank spaces on First Name field", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[10].firstname)
        .typeLastName(data.profiles[10].lastname)
        .selectGender(data.profiles[10].gender)
        .typeMobile(data.profiles[10].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(false)
        .isLastNameValid(true)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("TC-FORM-11: Verify that user cannot register when inputting number characters on First Name field", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[11].firstname)
        .typeLastName(data.profiles[11].lastname)
        .selectGender(data.profiles[11].gender)
        .typeMobile(data.profiles[11].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(false)
        .isLastNameValid(true)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("TC-FORM-12: Verify that user cannot register when inputting special characters on First Name field", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[12].firstname)
        .typeLastName(data.profiles[12].lastname)
        .selectGender(data.profiles[12].gender)
        .typeMobile(data.profiles[12].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(false)
        .isLastNameValid(true)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("TC-FORM-13: Verify that user cannot register when inputting only blank spaces on Last Name field", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[13].firstname)
        .typeLastName(data.profiles[13].lastname)
        .selectGender(data.profiles[13].gender)
        .typeMobile(data.profiles[13].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(false)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("TC-FORM-14: Verify that user cannot register when inputting number characters on Last Name field", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[14].firstname)
        .typeLastName(data.profiles[14].lastname)
        .selectGender(data.profiles[14].gender)
        .typeMobile(data.profiles[14].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(false)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("TC-FORM-15: Verify that user cannot register when inputting special characters on Last Name field", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[15].firstname)
        .typeLastName(data.profiles[15].lastname)
        .selectGender(data.profiles[15].gender)
        .typeMobile(data.profiles[15].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(false)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("TC-FORM-16: Verify that user cannot register when inputting Email with wrong domain name", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[16].firstname)
        .typeLastName(data.profiles[16].lastname)
        .typeEmail(data.profiles[16].email)
        .selectGender(data.profiles[16].gender)
        .typeMobile(data.profiles[16].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isEmailValid(false)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("TC-FORM-17: Verify that user cannot register when inputting Email with missing domain", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[17].firstname)
        .typeLastName(data.profiles[17].lastname)
        .typeEmail(data.profiles[17].email)
        .selectGender(data.profiles[17].gender)
        .typeMobile(data.profiles[17].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isEmailValid(false)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("TC-FORM-18: Verify that user cannot register when inputting Email with missing \"@\"", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[18].firstname)
        .typeLastName(data.profiles[18].lastname)
        .typeEmail(data.profiles[18].email)
        .selectGender(data.profiles[18].gender)
        .typeMobile(data.profiles[18].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isEmailValid(false)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("TC-FORM-19: Verify that user cannot register when inputting Email with special character", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[19].firstname)
        .typeLastName(data.profiles[19].lastname)
        .typeEmail(data.profiles[19].email)
        .selectGender(data.profiles[19].gender)
        .typeMobile(data.profiles[19].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isEmailValid(false)
        .isGenderValid(true)
        .isMobileValid(true);
    })
  });
  it("TC-FORM-20: Verify that user cannot register when inputting alphabetic characters on Mobile field", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[20].firstname)
        .typeLastName(data.profiles[20].lastname)
        .selectGender(data.profiles[20].gender)
        .typeMobile(data.profiles[20].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isGenderValid(true)
        .isMobileValid(false);
    })
  });
  it("TC-FORM-21: Verify that user cannot register when inputting special characters on Mobile field", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[21].firstname)
        .typeLastName(data.profiles[21].lastname)
        .selectGender(data.profiles[21].gender)
        .typeMobile(data.profiles[21].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isGenderValid(true)
        .isMobileValid(false);
    })
  });
  it("TC-FORM-22: Verify that the user cannot register when inputting a mobile number less than 10 characters on Mobile filed", () =>{
    cy.get("@data").then((data) =>{
      formPage
        .typeFirstName(data.profiles[22].firstname)
        .typeLastName(data.profiles[22].lastname)
        .selectGender(data.profiles[22].gender)
        .typeMobile(data.profiles[22].mobile)
        .clickSubmit()
      formPage
        .isFirtsNameValid(true)
        .isLastNameValid(true)
        .isGenderValid(true)
        .isMobileValid(false);
    })
  });

})

