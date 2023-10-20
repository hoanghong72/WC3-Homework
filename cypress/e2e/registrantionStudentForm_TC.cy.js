///// <reference types='cypress'/>

import { Registpage, confirmform } from "../pages/Registpage";


describe('demoQA - Regist Form - Sucessfully', () => {
  beforeEach(() => {
    cy.fixture("account").as("user");
    cy.visit('https://demoqa.com/automation-practice-form');
    
  })
  
  // HAPPY CASE
  it ('User filling all valid infor', () => {
      cy.get("@user").then((user) => {
        Registpage
        .typeFirstname(user.firstName)
        .typeLastname(user.lastName)
        .typeEmail(user.email)
        .selectGender(user.gender)
        .typeUserMobile(user.phoneNumber)
        .chooseDOB(user.month, user.year, user.date)
        .chooseSubjects(user.subjects)
        .selectHobbies(user.hobby)
        .choosePiture(user.file1)
        .typeAddress(user.address)
        .typeState(user.state)
        .typeCity(user.city)
        .clickSubmit()

        confirmform
        //.isNameCorrect(user.firstName+ " " + user.lastName)
        .isMailCorrect(user.email)
        .isGenderCorrect(user.gender)
        .isMobileCorrect(user.phoneNumber)
        .isDOBCorrect(user.date, user.month, user.year)
        .isSubjectsCorrect(user.subjects)
        .isHobbiesCorrect(user.hobby)
        //.isPictureCorrect(user.file1)
        .isAddressCorrect(user.address)
        .isState_and_City_Correct(user.state+ " " + user.city)
      });
      cy.get('#closeLargeModal').click({force:true})
    });

    it ('User filling requirement information only', () => {
      cy.get("@user").then((user) => {
        Registpage
        .typeFirstname(user.firstName)
        .typeLastname(user.lastName)
        .selectGender(user.gender)
        .typeUserMobile(user.phoneNumber)
        .clickSubmit()

        confirmform
        //.isNameCorrect(user.firstName+ " " +user.lastName)
        .isGenderCorrect(user.gender)
        .isMobileCorrect(user.phoneNumber)
      });
      cy.get('#closeLargeModal').click({force:true})
    });

  });
  
// UNHAPPY CASE  
  describe('demoQA - Regist Form - Unsucessfully', () => {
    beforeEach(() => {
      cy.fixture("invalid").as("invalid");
      cy.visit('https://demoqa.com/automation-practice-form');
      
    })

    it('No @ or domain', () => {
      cy.get("@invalid").then((invalid) => {
        Registpage
        .typeFirstname(invalid.firstName)
        .typeLastname(invalid.lastName)
        .typeEmail(invalid.email1)
        .selectGender(invalid.gender)
        .typeUserMobile(invalid.phoneNumber)
        .chooseDOB(invalid.month, invalid.year, invalid.date)
        .chooseSubjects(invalid.subjects)
        .selectHobbies(invalid.hobby)
        .choosePiture(invalid.file1)
        .typeAddress(invalid.address)
        .typeState(invalid.state)
        .typeCity(invalid.city)
        .clickSubmit()

        confirmform
        //.isNameCorrect(user.firstName+ " " + user.lastName)
        .isMailCorrect(invalid.email)
        .isGenderCorrect(invalid.gender)
        .isMobileCorrect(invalid.phoneNumber)
        .isDOBCorrect(invalid.date, invalid.month, invalid.year)
        .isSubjectsCorrect(invalid.subjects)
        .isHobbiesCorrect(invalid.hobby)
        //.isPictureCorrect(user.file1)
        .isAddressCorrect(invalid.address)
        .isState_and_City_Correct(invalid.state+ " " + invalid.city)
      });
      cy.get('#closeLargeModal').click({force:true})
        
      })

      it('Bug on email - user can submit subcess fully with wrong email format', () => {
        cy.get("@invalid").then((invalid) => {
          Registpage
          .typeFirstname(invalid.firstName)
          .typeLastname(invalid.lastName)
          .typeEmail(invalid.email6)
          .selectGender(invalid.gender)
          .typeUserMobile(invalid.phoneNumber)
          .chooseDOB(invalid.month, invalid.year, invalid.date)
          .chooseSubjects(invalid.subjects)
          .selectHobbies(invalid.hobby)
          .choosePiture(invalid.file1)
          .typeAddress(invalid.address)
          .typeState(invalid.state)
          .typeCity(invalid.city)
          .clickSubmit()
  
          confirmform
          //.isNameCorrect(user.firstName+ " " + user.lastName)
          .isMailCorrect(invalid.email6)
          .isGenderCorrect(invalid.gender)
          .isMobileCorrect(invalid.phoneNumber)
          .isDOBCorrect(invalid.date, invalid.month, invalid.year)
          .isSubjectsCorrect(invalid.subjects)
          .isHobbiesCorrect(invalid.hobby)
          //.isPictureCorrect(user.file1)
          .isAddressCorrect(invalid.address)
          .isState_and_City_Correct(invalid.state+ " " + invalid.city)
        });
        cy.get('#closeLargeModal').click({force:true})
          
        })


        it('Bug on email - user can submit subcess fully with wrong email format', () => {
          cy.get("@invalid").then((invalid) => {
            Registpage
            .typeFirstname(invalid.firstName)
            .typeLastname(invalid.lastName)
            .typeEmail(invalid.email)
            .selectGender(invalid.gender)
            .typeUserMobile(invalid.phoneNumber1)
            .chooseDOB(invalid.month, invalid.year, invalid.date)
            .chooseSubjects(invalid.subjects)
            .selectHobbies(invalid.hobby)
            .choosePiture(invalid.file1)
            .typeAddress(invalid.address)
            .typeState(invalid.state)
            .typeCity(invalid.city)
            .clickSubmit()
    
            confirmform
            //.isNameCorrect(user.firstName+ " " + user.lastName)
            .isMailCorrect(invalid.email)
            .isGenderCorrect(invalid.gender)
            .isMobileCorrect(invalid.phoneNumber1)
            .isDOBCorrect(invalid.date, invalid.month, invalid.year)
            .isSubjectsCorrect(invalid.subjects)
            .isHobbiesCorrect(invalid.hobby)
            //.isPictureCorrect(user.file1)
            .isAddressCorrect(invalid.address)
            .isState_and_City_Correct(invalid.state+ " " + invalid.city)
          });
          cy.get('#closeLargeModal').click({force:true})
            
          })
      
    })


      



