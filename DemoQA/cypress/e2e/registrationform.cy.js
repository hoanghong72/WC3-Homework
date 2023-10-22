/// <reference types="cypress" />
import { regisForm } from "../pages/regisform/regisForm";
import { confirmForm} from "../pages/regisform/confirmForm";
describe('User register successfully', () => {
  beforeEach(() => {
    cy.fixture("regisform.json").as("data");
    cy.visit('https://demoqa.com/automation-practice-form');
  });
  it("User registers successfully when inputting into all fields", () => {
    cy.get("@data").then((data) => {
      regisForm
        .typeFirstname(data.firstName)
        .typeLastname(data.lastName)
        .typeEmail(data.email)
        .selectGender()
        .typeMobile(data.mobile)
        .selectDOB(data.day,data.month,data.year)
        .typeSubjects(data.subjects)
        .selectHobbies()
        .uploadPicture(data.picture)
        .typeCurrentAddress(data.currentAddress)
        .typeStateAndCity(data.state,data.city)
        .clickSubmit();
      confirmForm
        .isSuccessMessageDisplay()
        .isNameCorrect(data.firstName, data.lastName)
        .isEmaiCorrect(data.email)
        .isGenderCorrect(data.gender)
        .isMobileCorrect(data.mobile)
        .isDOBCorrect(data.day,data.month,data.year)
        .isSubjectsCorrect(data.subjects)
        .isHobbiesCorrect(data.hobbies)
        .isPictureCorrect(data.picture)
        .isCurrentAddressCorrect(data.currentAddress)
        .isStateAndCityCorrect(data.state,data.city)
    })
});
it("User registers successfully when only inputting the mandatory fields ", () => {
  cy.get("@data").then((data) => {
    regisForm
      .typeFirstname(data.firstName)
      .typeLastname(data.lastName)
      .selectGender()
      .typeMobile(data.mobile)
      .selectDOB(data.day,data.month,data.year)
      .clickSubmit();
    confirmForm
      .isSuccessMessageDisplay()
      .isNameCorrect(data.firstName, data.lastName)
      .isGenderCorrect(data.gender)
      .isMobileCorrect(data.mobile)
      .isDOBCorrect(data.day,data.month,data.year)
  })
})
})