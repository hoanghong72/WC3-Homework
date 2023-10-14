import { formPage } from "../pages/formPage";

describe('User register successfully', () => {
  beforeEach(() => {
    cy.fixture("profile").as("profile");
    cy.visit(Cypress.env("form"));
  });
  it("User register successfully with all valid input", () => {
    cy.get("@profile").then((profile) => {
      formPage
        .typeFirstName(profile.valid.firstname)
        .typeLastName(profile.valid.lastname)
        .typeEmail(profile.valid.email)
        .selectFemale()
        .typeMobile(profile.valid.mobile)
        .openDOB()
        .selectYear(profile.valid.dateofbirth.year)
        .selectMonth(profile.valid.dateofbirth.month)
        .selectDay(profile.valid.dateofbirth.day)
        .typeSubjects(profile.valid.subjects)
        .selectSubjects(profile.valid.subjects)
        .checkMusic()
        .uploadPicture(profile.valid.file)
        .typeCurrentAddress(profile.valid.currentaddress)
        .typeState(profile.valid.state)
        .typeCity(profile.valid.city)
        .clickSubmit();
      formPage.popup
      .isAllInformationDisplay(profile.valid);
    });
  });

})

