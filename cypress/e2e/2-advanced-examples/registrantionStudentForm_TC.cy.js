

import { Registpage} from "../pages/Registpage";
import { confirmform } from "../pages/Confirmform";


describe('demoQA - Regist Form - Sucessfully', () => {
  beforeEach(() => {
    cy.fixture("account").as("user");
    cy.visit(Cypress.env("regist"));
    
  });
  
  it ('User filling all valid infor', () => {
      cy.get("@user").then((user) => {
        Registpage
        .typeFirstname(user.firstName.valid)
        .typeLastname(user.lastName.valid)
        .typeEmail(user.email.valid)
        .selectGender(user.gender [1])
        .typeUserMobile(user.phoneNumber.valid)
        .chooseDOB(user.month, user.year.valid, user.date)
        .chooseSubjects(user.subjects) 
        .selectHobbies(user.hobby[1])
        .choosePiture(user.file.valid)
        .typeAddress(user.address.valid) 
        .typeState(user.state)
        .typeCity(user.city)
        .clickSubmit()

        confirmform
        .isNameCorrect(user.firstName.valid, user.lastName.valid)
        .isMailCorrect(user.email.valid)
        .isGenderCorrect(user.gender [1])
        .isMobileCorrect(user.phoneNumber.valid)
        .isDOBCorrect(user.date, user.month, user.year.valid)
        .isSubjectsCorrect(user.subjects)
        .isHobbiesCorrect(user.hobby)
        .isPictureCorrect(user.file.valid)
        .isAddressCorrect(user.address.valid)
        .isState_and_City_Correct(user.state+ " " + user.city) 
      }); 
      cy.get('#closeLargeModal').click({force:true})
    });

    it ('User can not submit when does not fill any infotmation', () => {
      cy.get("@user").then((user) => {
      Registpage
      .clickSubmit ();

      confirmform
      .isNameCorrect(user.firstName.valid+ " " + user.lastName.valid)
      .isGenderCorrect(user.gender [1])
      .isMobileCorrect(user.phoneNumber.valid)
    });
    cy.get('#closeLargeModal').click({force:true})
    });

    it ('User filling requirement information only', () => {
      cy.get("@user").then((user) => {
        Registpage
        .typeFirstname(user.firstName.valid)
        .typeLastname(user.lastName.valid)
        .selectGender(user.gender [1])
        .typeUserMobile(user.phoneNumber.valid)
        .clickSubmit()

        confirmform
        .isNameCorrect(user.firstName.valid+ " " + user.lastName.valid)
        .isGenderCorrect(user.gender [1])
        .isMobileCorrect(user.phoneNumber.valid)
      });
      cy.get('#closeLargeModal').click({force:true})
    }); 

  // USER CAN'T SUBMIT WITH INVALID NAME

  it('Wrong Firstname - BUG', () => {
    cy.get("@user").then((user) => {
      Registpage
      .typeFirstname(user.firstName.invalid)
      .typeLastname(user.lastName.valid)
      .selectGender(user.gender [1])
      .typeUserMobile(user.phoneNumber.valid)
      .typeEmail(user.email.valid)    
      .clickSubmit()
      Registpage
      .firstNameValid(false)
    });
    });

    it('Wrong Lastname - BUG', () => {
      cy.get("@user").then((user) => {
        Registpage
        .typeFirstname(user.firstName.valid)
        .typeLastname(user.lastName.invalid)
        .selectGender(user.gender [1])
        .typeUserMobile(user.phoneNumber.valid)
        .typeEmail(user.email.valid)    
        .clickSubmit()
        Registpage
        .lastNameValid(false)
      });
      });

  // USER CAN'T SUBMIT WITH INVALID EMAIL  
    it ('No @ or domain', () => {
      cy.get("@user").then((user) => {
        Registpage
        .typeFirstname(user.firstName)
        .typeLastname(user.lastName)
        .selectGender(user.gender [1])
        .typeUserMobile(user.phoneNumber.valid)
        .typeEmail(user.email.invalid[0])    
        .clickSubmit()
        Registpage
        .emailValid(false)
      });
      });

      it('Leading dash in domain', () => {
        cy.get("@user").then((user) => {
          Registpage
          .typeFirstname(user.firstName)
          .typeLastname(user.lastName)
          .selectGender(user.gender [1])
          .typeUserMobile(user.phoneNumber.valid)
          .typeEmail(user.email.invalid [4])    
          .clickSubmit()
          Registpage
          .emailValid(false)
        });
        });

    // USER CAN'T SUBMIT WITH INVALID PHONENUMBER
      it('Including special character', () => {
        cy.get("@user").then((user) => {
          Registpage
          .typeFirstname(user.firstName)
          .typeLastname(user.lastName)
          .selectGender(user.gender [1])
          .typeUserMobile(user.phoneNumber.invalid[1])
          .typeEmail(user.email.valid)    
          .clickSubmit()
          Registpage
          .mobileValid(false)
        });
        });

        it('All number are the same - BUG', () => {
          cy.get("@user").then((user) => {
            Registpage
            .typeFirstname(user.firstName)
            .typeLastname(user.lastName)
            .selectGender(user.gender [1])
            .typeUserMobile(user.phoneNumber.invalid[2])
            .typeEmail(user.email.valid)    
            .clickSubmit()
            Registpage
            .mobileValid(false)
          });
          });
      
    });

  


      


