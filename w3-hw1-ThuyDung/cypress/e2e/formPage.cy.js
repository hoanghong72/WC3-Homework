
import { formPage } from "../pages/registrationForm/formPage";
describe('Register', () => {
  beforeEach(() => {
    cy.fixture("profile").as("profile")
    // cy.fixture("data").as("data");
    cy.visit(Cypress.env("form"));
  });
  it.skip("Can registers with valid data in all fields ", () => {
    cy.get("@profile").then((profile) => {
      formPage
        .typeFirstName(profile.firstname.valid[0])
        .typeLastName(profile.lastname.valid[0])
        .typeEmail(profile.email.valid[0])
        .selectGender(profile.gender)
        .typeMobile(profile.mobile.valid[0])
        .selectDOB(profile.DOB.valid.day, profile.DOB.valid.month, profile.DOB.valid.year)
        .selectSubjects(profile.subjects)
        .checkHobbies(profile.hobbies)
        .uploadPicture(profile.picture.valid)
        .typeCurrentAddress(profile.currentaddress)
        .selectStateAndCity(profile.state, profile.city)
        .clickSubmit();
      formPage.resultPopup
        .isNameCorret(profile.firstname.valid[0], profile.lastname.valid[0])
        .isEmaiCorret(profile.email.valid[0])
        .isGenderCorret(profile.gender)
        .isMobileCorret(profile.mobile.valid[0])
        .isDOBCorret(profile.DOB.valid.day, profile.DOB.valid.month, profile.DOB.valid.year)
        .isSubjectsCorrect(profile.subjects)
        .isHobbiesCorrect(profile.hobbies)
        .isPictureCorrect(profile.picture.valid)
        .isCurrentAddressCorrect(profile.currentaddress)
        .isStateAndCityCorrect(profile.state, profile.city);
    });
  });
  it.skip("Can registers with valid data in mandatory fields", ()=>{
    cy.get("@profile").then((profile) => {
      formPage
        .typeFirstName(profile.firstname.valid[0])
        .typeLastName(profile.lastname.valid[0])
        .selectGender(profile.gender)
        .typeMobile(profile.mobile.valid[0])
        .clickSubmit();
      formPage.resultPopup
        .isNameCorret(profile.firstname.valid[0], profile.lastname.valid[0])
        .isGenderCorret(profile.gender)
        .isMobileCorret(profile.mobile.valid[0])
    });
  });

  it.skip("Cannot register when not input any mandatory fields",()=>{
      formPage
        .clickSubmit()
        .isFirtsNameValid(false)
        .isLastNameValid(false)
        .isGenderValid(false)
        .isMobileValid(false);
  });

  
  const profile = require('../fixtures/profile.json');

  const listInvalidFirstName = profile.firstname.invalid;
  listInvalidFirstName.forEach((firstname) => {
    it(`Cannot register with invalid firstname: "${firstname}"`, () => {
      cy.get("@profile").then((profile) =>{
        formPage
          .typeFirstName(firstname)
          .typeLastName(profile.lastname.valid[0])
          .selectGender(profile.gender)
          .typeMobile(profile.mobile.valid[0])
          .clickSubmit();
        formPage
          .isFirtsNameValid(false);
      })
    });
  });

  const listInvalidLastName = profile.lastname.invalid;
  listInvalidLastName.forEach((lastname) => {
    it(`Cannot register with invalid lastname: "${lastname}"`, () => {
      cy.get("@profile").then((profile) =>{
        formPage
          .typeFirstName(profile.firstname.valid[0])
          .typeLastName(lastname)
          .selectGender(profile.gender)
          .typeMobile(profile.mobile.valid[0])
          .clickSubmit();
        formPage
          .isLastNameValid(false);
      })
    });
  });

  const listInvalidMobile = profile.mobile.invalid;
  listInvalidMobile.forEach((mobile) => {
    it(`Cannot register with invalid mobile: "${mobile}"`, () => {
      cy.get("@profile").then((profile) =>{
        formPage
          .typeFirstName(profile.firstname.valid[0])
          .typeLastName(profile.lastname.valid[0])
          .selectGender(profile.gender)
          .typeMobile(mobile)
          .clickSubmit();
        formPage
          .isMobileValid(false);
      })
    });
  });

  const listInvalidEmail = profile.email.invalid;
  listInvalidEmail.forEach((email) => {
    it(`Cannot register with invalid email: "${email}"`, () => {
      cy.get("@profile").then((profile) =>{
        formPage
          .typeFirstName(profile.firstname.valid[0])
          .typeLastName(profile.lastname.valid[0])
          .typeEmail(email)
          .selectGender(profile.gender)
          .typeMobile(profile.mobile.valid[0])
          .clickSubmit();
        formPage
          .isEmailValid(false);
      })
    });
  });
});

