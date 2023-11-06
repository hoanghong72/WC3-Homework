export const registrationPage={
    TXT_FIRSTNAME: "#firstname",
    TXT_LASTNAME: "#lastname",
    TXT_EMAIL: "#userEmail",
    RDO_MALE:"gender-radio-1",
    RDO_FEMALE:"gender-radio-2",
    RDO_OTHER: "#gender-radio-3",
    TXT_MOBILE:"#userNumber",
    DTP_DOB:"#dateofBirthInput",
    DDL_MONTH: ".react-datepicker__month-select",
    DDL_YEAR: ".react-datepicker__year-select",
    DTP_DAY: ".react-datepicker__week .react-datepicker__day",
    TXT_SUBJECTS: "#subjectsInput",
    CHK_SPORTS: "#hobbies-checkbox-1",
   
    BTN_PICTURE: "#uploadPicture",
    TXT_CURRENTADDRESS: "#currentAddress",
    DDL_STATE: "#state input",
    DDL_CITY: "#city input",
    BTN_SUBMIT: "#submit",

    inputFirstName(firstname){
        cy.get(this.TXT_FIRSTNAME).type(firstname,{force:true});
        return this;
    },
    inputLastName(lastname){
        cy.get(this.TXT_LASTNAME).type(lastname,{force:true});
        return this;
    },
   inputEmail(email){
    cy.get(this.TXT_EMAIL).type(email, {force:true});
   return this;
    },

    chooseMale(){
        cy.get(this.RDO_MALE).check({force:true});
        return this;
    },

    chooseFemale(){
        cy.get(this.RDO_FEMALE).check({force:true});
        return this;
    },
    chooseOther(){
        cy.get(this.RDO_OTHER).check({force:true});
        return this;
    },
    
    inputMobile(mobile){
        cy.get(this.TXT_MOBILE).type(mobile);
        return this;
    },

    clickDOB(){
        cy.get(this.DTP_DOB).click();
        return this;
    },
     chooseMonth(month){
        cy.get(this.DDL_MONTH).select(month);
        return this;
    },
    chooseYear(year){
        cy.get(this.DDL_YEAR).select(year);
        return this;
    },
    chooseDay(day){
        cy.get(this.DTP_DAY).contains(day).eq(0).click();
        return this;
    },
   
    chooseSubject(subject){
        //lay bo chon cho phan tu select
        subject.forEach((subject) => {
            cy.get(this.TXT_SUBJECTS).type(subject).type('{enter}')
          });
          return this;
    },

    checkSports(){
        const hobbiesMap = {
            "Sports": this.CHK_HOBBIES + "1",
            "Reading": this.CHK_HOBBIES + "2",
            "Music": this.CHK_HOBBIES + "3"
          };
        
          hobbies.forEach(hobby => {
            const hobbyCheckbox = hobbiesMap[hobby];
            if (hobbyCheckbox) {
              cy.get(hobbyCheckbox).click({ force: true });
            }
          });
        
          return this;
    },
    
    insertPicture(picture){
        cy.get(this.BTN_PICTURE).selectFile(picture)
        return this
    },
    inputCurrAddress(currentAddress){
        cy.get(this.TXT_CURRENTADDRESS).type(currentAdress,{force:true});
            return this;
    },
    inputState(state){
        cy.get(this.DDL_STATE).type(state,{force:true}).type('{enter}',{force:true})
        return this;
    },
    inputCity(city){
        cy.get(this.DDL_CITY).type(state,{force:true}).type('{enter}',{force:true})
        return this;
    },
    clickSubmit(){
        cy.get(this.BTN_SUBMIT).click({force:true});
        return this;
    },
  
    
}