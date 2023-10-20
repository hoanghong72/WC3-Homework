import{ registrationPage } from "../pages/registrationPage";
import { confirm } from "../pages/confirm";

describe('Registration Form', () => {
  beforeEach(()=>{
    cy.fixture("information").as("info");
    cy.visit(Cypress.env("form"));
  
});
  it("User can submit with valid information", () =>{
    cy.get('@info').then((info) =>{
      registrationPage
      .inputFirstName(info.firstname)
      .inputLastName(info.lastname)
      .inputEmail(info.email)
      .chooseMale()
      .chooseFemale()
      .inputMobile(info.mobile)
      .clickDOB()
      .chooseYear(info.DOB_year)
      .chooseMonth(info.DOB_month)
      .chooseDay(info.DOB_days)

      .chooseSubject(user.subjects)
      .checkSports()
      .insertPicture(user.picture)
      .inputCurrAddress(user.currentAdress)
      .inputState(user.state)
      .inputCity(user.city)
      .clickSubmit();
      confirmForm
      .isTrueName(users.firstName + " " + users.lastName)
      .isTrueEmail(users.email)
      .isTrueGender(users.gender)
      .isTrueMobile(users.userNumber)
      .isTrueDOB(users.dob_day, users.dob_month, users.dob_year)
      .isTrueSub(users.subjects)
      .isTrueHobbies(users.hobbies)
      .isTruePic(users.picture)
      .isTrueAdd(users.currentAddress)
      .isTrueState(users.state, users.city)
      .clickClose()
    });
  });
  

  it("'User register successfully with required field'", () =>{
    cy.get('@info').then((info) =>{
      registrationPage
      .inputFirstName(info.firstname)
      .inputLastName(info.lastname)
      .chooseMale()
      .chooseFemale()
      .inputMobile(info.mobile)
      .clickSubmit();
      confirmForm
      .isTrueName(users.firstName + " " + users.lastName)
      .isTrueGender(users.gender)
      .isTrueEmail(users.email)
      .isTrueMobile(users.userNumber)
      .clickClose()
    });
  });
  it("User cannot register with all empty", () =>{
    cy.get('@info').then((info) =>{
      registrationPage
      .clickSubmit();
      confirmForm
      .isTrueName(users.firstName + " " + users.lastName)
      .isTrueGender(users.gender)
      .isTrueEmail(users.email)
      .isTrueMobile(users.userNumber)
    });
  });

  it("User cannot register with invalid mobile", () =>{
    cy.get('@info').then((info) =>{
      registrationPage
      .inputFirstName(info.firstname)
      .inputLastName(info.lastname)
      .chooseMale()
      .chooseFemale()
      .inputMobile(info.mobile)
      .clickSubmit();
      confirmForm
      .isTrueMobile(users.userNumber)
    });
  });
  it('User cannot register with an invalid email', () => {
    testData.invalidEmail.forEach((email, index) => {
      cy.get('@info').then((info) =>{
        registrationPage
        .inputFirstName(info.firstname)
        .inputLastName(info.lastname)
        .chooseMale()
        .chooseFemale()
        .inputMobile(info.mobile)
        .clickSubmit();
        confirmForm
        .isTrueEmail(users.email)
       
    })
})


})
})