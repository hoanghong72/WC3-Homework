

export const regisForm ={

    TXT_FIRSTNAME: "#firstName",
    TXT_LASTNAME: "#lastName",
    TXT_EMAIL: "#userEmail",
    RDO_GENDER: "#gender-radio-2",
    TXT_MOBILE: "#userNumber",
    TXT_DOB :"#dateOfBirthInput",
    DDL_MONTH: ".react-datepicker__month-select",
    DDL_YEAR: ".react-datepicker__year-select",
    DTP_DAY: ".react-datepicker__day--0",
    TXT_SUBJECTS: "#subjectsInput",
    CB_HOBBIES: "#hobbies-checkbox-3",
    BTN_PICTURE: "#uploadPicture",
    TXT_CURRENTADDRESS: "#currentAddress",
    TXT_STATE: "#react-select-3-input", 
    TXT_CITY: "#react-select-4-input",
    BTN_SUBMIT: "#submit",
    
// Username field
typeFirstname(firstName) { 
    cy.get(this.TXT_FIRSTNAME).type(firstName);
    return this;
},
typeLastname(lastName) {
    cy.get(this.TXT_LASTNAME).type(lastName);
    return this;
},
//Email field
typeEmail(email) {
    cy.get(this.TXT_EMAIL).type(email);
    return this;
},

//gender
selectGender(gender) {
    cy.get(this.RDO_GENDER).click({force:true});
    return this;
},

//Mobile number
typeMobile(mobile) {
    cy.get(this.TXT_MOBILE).type(mobile);
    return this;    
},

// Date of birth
selectDOB(day,month,year){
    cy.get(this.TXT_DOB).click();
    cy.get(this.DDL_YEAR).select(year);
    cy.get(this.DDL_MONTH).select(month);
    cy.get(this.DTP_DAY+day).first().click();
    return this;
},

 // Subjects field
 typeSubjects(subjects) {
    for (let i = 0; i < subjects.length; i++) {
    cy.get(this.TXT_SUBJECTS).type(subjects[i]).type('{enter}')
    };
    return this;
},

 //Hobbies field
selectHobbies(hobbies) {
    cy.get(this.CB_HOBBIES).click({force:true});
    return this;
},

//Upload picture
uploadPicture(picture) {
    cy.get(this.BTN_PICTURE).attachFile(picture);
    return this;
},

// Current Address
typeCurrentAddress(currentAddress) {
    cy.get(this.TXT_CURRENTADDRESS).type(currentAddress);
    return this;
},

//State
typeStateAndCity (state, city) {
    cy.get(this.TXT_STATE).type(state,{force: true}).type('{enter}');
    cy.get(this.TXT_CITY).type(city,{force: true}).type('{enter}');
    return this;
},

//Submit
clickSubmit(){
    cy.get(this.BTN_SUBMIT).click({ force: true });
},

}
