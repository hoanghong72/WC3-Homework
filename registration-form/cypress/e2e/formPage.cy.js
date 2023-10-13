import { formPage } from "../pages/formPage";

describe('User register successfully', () => {
  beforeEach(() => {
    cy.fixture("student").as("student");
    cy.visit(Cypress.env("form"));
  });
  it("User register successfully with all valid input", () => {
    cy.get("@student").then((student) => {
      formPage
        .typeFirstName(student.firstname)
        .typeLastName(student.lastname)
        .typeEmail(student.email)
        .selectFemale()
        .typeMobile(student.mobile)
        .openDOB()
        .selectYear(student.year)
        .selectMonth(student.month)
        .selectDay(student.day)
        .typeSubjects(student.subjects)
        .checkMusic()
        .uploadPicture(student.file)
        .typeCurrentAddress(student.currentaddress)
        .typeState(student.state)
        .typeCity(student.city)
        .clickSubmit()
        // .isRegistrationformDisplay()
    });
  });

})

