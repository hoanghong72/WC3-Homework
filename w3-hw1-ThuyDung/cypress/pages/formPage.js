export const formPage ={

    TXT_FIRSTNAME: "#firstName",
    TXT_LASTNAME: "#lastName",
    TXT_EMAIL: "#userEmail",
    RDO_MALE: "#gender-radio-1",
    RDO_FEMALE: "#gender-radio-2",
    RDO_OTHER: "#gender-radio-3",
    TXT_MOBILE: "#userNumber",
    TXT_DOB :"#dateOfBirthInput",
    DDL_MONTH: ".react-datepicker__month-select",
    DDL_YEAR: ".react-datepicker__year-select",
    DTP_DAY: ".react-datepicker__week .react-datepicker__day",
    TXT_SUBJECTS: "#subjectsInput",
    CBO_SUBJECTS: ".subjects-auto-complete__menu",
    CHK_SPORTS: "#hobbies-checkbox-1",
    CHK_READING: "#hobbies-checkbox-2",
    CHK_MUSIC: "#hobbies-checkbox-3",
    BTN_PICTURE: "#uploadPicture",
    TXA_CURRENTADDRESS: "#currentAddress",
    TXT_STATE: "#react-select-3-input", 
    TXT_CITY: "#react-select-4-input",
    BTN_SUBMIT: "#submit",
    FRA_FORM: ".modal-dialog modal-lg",
    LBL_FORM: "#example-modal-sizes-title-lg",
    //Name
    typeFirstName(firstname){
        cy.get(this.TXT_FIRSTNAME).type(firstname);
        return this;
    },
    typeLastName(lastname){
        cy.get(this.TXT_LASTNAME).type(lastname);
        return this;
    },
    typeEmail(email){
        cy.get(this.TXT_EMAIL).type(email);
        return this;
    },

    //Gender
    selectMale(){
        cy.get(this.RDO_MALE).check({force: true});
        return this;
    },

    selectFemale(){
        cy.get(this.RDO_FEMALE).check({force:true});
        return this;
    },

    selectOther(){
        cy.get(this.RDO_OTHER).check({force:true});
        return this;
    },

    //Mobile
    typeMobile(mobile){
        cy.get(this.TXT_MOBILE).type(mobile);
        return this;
    },

    //Date of Birth
    openDOB(){
        cy.get(this.TXT_DOB).click();
        return this;
    },
    selectMonth(month){
        cy.get(this.DDL_MONTH).select(month);
        return this;
    },
    selectYear(year){
        cy.get(this.DDL_YEAR).select(year);
        return this;
    },
    selectDay(day){
        cy.get(this.DTP_DAY).contains(day).eq(0).click();
        return this;
    },

    //Subjects
    typeSubjects(subjects){
        cy.get(this.TXT_SUBJECTS).type(subjects);
        return this;
    },
    selectSubjects(subjects){
        cy.get(this.CBO_SUBJECTS).contains(subjects).click();
        return this;
    },

    //Hobbies
    checkSports(){
        cy.get(this.CHK_SPORTS).check({force: true});
        return this;
    },
    checkReading(){
        cy.get(this.CHK_READING).check({force: true});
        return this;
    },
    checkMusic(){
        cy.get(this.CHK_MUSIC).check({force: true});
        return this;
    },

    //Upload picture
    uploadPicture(file){
        cy.get(this.BTN_PICTURE).selectFile(file);
        return this;
    },

    //Address
    typeCurrentAddress(address){
        cy.get(this.TXA_CURRENTADDRESS).type(address);
        return this;
    },
    //State and city
    typeState(state){
        cy.get(this.TXT_STATE).type(state,{force: true}).type('{enter}');
        return this;
    },
    typeCity(city){
        cy.get(this.TXT_CITY).type(city,{force: true}).type('{enter}')
        return this;
    },
    //Submit
    clickSubmit(){
        cy.get(this.BTN_SUBMIT).click({ force: true });
    },
    popup :{
        TXT_NAME_PO: "table > tbody > tr:nth-child(1) > td:nth-child(2)",
        TXT_EMAIL_PO: "table > tbody > tr:nth-child(2) > td:nth-child(2)",
        TXT_GENDER_PO: "table > tbody > tr:nth-child(3) > td:nth-child(2)",
        TXT_MOBILE_PO: "table > tbody > tr:nth-child(4) > td:nth-child(2)",
        TXT_DOB_PO: "table > tbody > tr:nth-child(5) > td:nth-child(2)",
        TXT_SUBJECTS_PO: "table > tbody > tr:nth-child(6) > td:nth-child(2)",
        TXT_HOBBIES_PO: "table > tbody > tr:nth-child(7) > td:nth-child(2)",
        TXT_PICTURE_PO: "table > tbody > tr:nth-child(8) > td:nth-child(2)",
        TXT_ADDRESS_PO: "table > tbody > tr:nth-child(9) > td:nth-child(2)",
        TXT_STATE_AND_CITY_PO: "table > tbody > tr:nth-child(10) > td:nth-child(2)",
    
        isAllInformationDisplay(profile){
            cy.get(this.TXT_NAME_PO).should('have.text',profile.firstname+" "+profile.lastname),
            cy.get(this.TXT_EMAIL_PO).should('have.text',profile.email),
            cy.get(this.TXT_GENDER_PO).should('have.text',profile.gender)
            cy.get(this.TXT_MOBILE_PO).should('have.text',profile.mobile),
            cy.get(this.TXT_DOB_PO).should('have.text',profile.dateofbirth.day+" "+profile.dateofbirth.month+","+profile.dateofbirth.year),
            cy.get(this.TXT_SUBJECTS_PO).should('have.text',profile.subjects),
            cy.get(this.TXT_HOBBIES_PO).should('have.text',profile.hobbies),
            cy.get(this.TXT_PICTURE_PO).should('have.text',profile.file),
            cy.get(this.TXT_ADDRESS_PO).should('have.text', profile.currentaddress),
            cy.get(this.TXT_STATE_AND_CITY_PO).should('have.text',profile.state+" "+profile.city)
        }
    }
    

}