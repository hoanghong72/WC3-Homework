import { constants } from "../../constants/constants";

export const formPage ={

    TXT_FIRSTNAME: "#firstName",
    TXT_LASTNAME: "#lastName",
    TXT_EMAIL: "#userEmail",
    TXT_MOBILE: "#userNumber",
    TXT_DOB :"#dateOfBirthInput",
    DDL_MONTH: ".react-datepicker__month-select",
    DDL_YEAR: ".react-datepicker__year-select",
    DTP_DAY: ".react-datepicker__week .react-datepicker__day",
    TXT_SUBJECTS: "#subjectsInput",
    CBO_SUBJECTS: ".subjects-auto-complete__menu",
    BTN_PICTURE: "#uploadPicture",
    TXA_CURRENTADDRESS: "#currentAddress",
    TXT_STATE: "#react-select-3-input", 
    TXT_CITY: "#react-select-4-input",
    BTN_SUBMIT: "#submit",
    LBL_OPTION: ".custom-control-label",


//Actions
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
    selectGender(gender){
        cy.get('label').contains(gender).prev('input[type="radio"]').check({force:true});
        return this;
    },
    typeMobile(mobile){
        cy.get(this.TXT_MOBILE).type(mobile);
        return this;
    },
    selectDOB(day, month, year){
        cy.get(this.TXT_DOB).click();
        cy.get(this.DDL_YEAR).select(year);
        cy.get(this.DDL_MONTH).select(month);
        cy.get(this.DTP_DAY).contains(day).eq(0).click();
        return this;
    },
    selectSubjects(subjects){
        for (let i=0; i< subjects.length; i++){
        cy.get(this.TXT_SUBJECTS).type(subjects[i]);
        cy.get(this.CBO_SUBJECTS).contains(subjects[i]).click();
        }
        return this;
    },
    checkHobbies(hobbies){
        for(let i=0; i< hobbies.length; i++){
            cy.get('label').contains(hobbies[i]).prev('input[type="checkbox"]').check({force: true});
        }
        return this;
    },
    uploadPicture(picture){
        cy.get(this.BTN_PICTURE).selectFile(picture);
        return this;
    },
    typeCurrentAddress(address){
        cy.get(this.TXA_CURRENTADDRESS).type(address);
        return this;
    },
    selectStateAndCity(state,city){
        cy.get(this.TXT_STATE).type(state,{force: true}).type('{enter}');
        cy.get(this.TXT_CITY).type(city,{force: true}).type('{enter}');
        return this;
    },
    clickSubmit(){
        cy.get(this.BTN_SUBMIT).click({ force: true });
        return this;
    },

//Assertion 
    isFirtsNameValid(isValid){
        if(isValid === true){
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'border-color', constants.COLOR_GREEN);
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'background-image', constants.SYMBOL_VALID);
        }else{
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'border-color', constants.COLOR_RED);
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'background-image', constants.SYMBOL_INVALID);
        }
        return this;
    },
    isLastNameValid(isValid){
        if(isValid === true){
            cy.get(this.TXT_LASTNAME).should('have.css', 'border-color', constants.COLOR_GREEN);
            cy.get(this.TXT_LASTNAME).should('have.css', 'background-image', constants.SYMBOL_VALID);
        }else{
            cy.get(this.TXT_LASTNAME).should('have.css', 'border-color', constants.COLOR_RED);
            cy.get(this.TXT_LASTNAME).should('have.css', 'background-image', constants.SYMBOL_INVALID);
        }
        return this;
    },
    isMobileValid(isValid){
        if(isValid === true){
            cy.get(this.TXT_MOBILE).should('have.css', 'border-color', constants.COLOR_GREEN);
            cy.get(this.TXT_MOBILE).should('have.css', 'background-image', constants.SYMBOL_VALID);
        }else{
            cy.get(this.TXT_MOBILE).should('have.css', 'border-color', constants.COLOR_RED);
            cy.get(this.TXT_MOBILE).should('have.css', 'background-image', constants.SYMBOL_INVALID);
        }
        return this;
    },
    isEmailValid(isValid){
        if(isValid === true){
            cy.get(this.TXT_EMAIL).should('have.css', 'border-color', constants.COLOR_GREEN);
            cy.get(this.TXT_EMAIL).should('have.css', 'background-image',constants.SYMBOL_VALID);
        }else{
            cy.get(this.TXT_EMAIL).should('have.css', 'border-color', constants.COLOR_RED);
            cy.get(this.TXT_EMAIL).should('have.css', 'background-image', constants.SYMBOL_INVALID);
        }
        return this;
    },
    isGenderValid(isValid){
        for(let i=0; i< 3; i++){
            cy.get(this.LBL_OPTION).eq(i).within(($el) => {
                cy.window().then((win) => {
                    const beforeElement = win.getComputedStyle($el[0], "::before");
                    const afterElement = win.getComputedStyle($el[0], "::after");
                    const borderColor = beforeElement.getPropertyValue("border-color");
                    const color = afterElement.getPropertyValue("color");
                    if(isValid === true){
                      expect(borderColor).to.equal(constants.COLOR_GREEN);
                      expect(color).to.equal(constants.COLOR_GREEN);
                    }else{
                        expect(borderColor).to.equal(constants.COLOR_RED);
                        expect(color).to.equal(constants.COLOR_RED);
                    }
                })
            })
        }
        return this;
    },

//After regiter successfully => show popup
    resultPopup :{
        TXT_VALUE: "td + td",

        isNameCorret(firstname, lastname){
            cy.get(this.TXT_VALUE).contains(firstname+" "+lastname).should("be.visible");
            return this;
        },
        isEmaiCorret(email){
            cy.get(this.TXT_VALUE).contains(email).should("be.visible");
            return this;
        },
        isGenderCorret(gender){
            cy.get(this.TXT_VALUE).contains(gender).should("be.visible");
            return this;
        },
        isMobileCorret(mobile){
            cy.get(this.TXT_VALUE).contains(mobile).should("be.visible");
            return this;
        },
        isDOBCorret(day, month, year){
            cy.get(this.TXT_VALUE).contains(day+" "+month+","+year).should("be.visible");
            return this;
        },
        isSubjectsCorrect(subjects){
            let subjects_s ="";
            for ( let i =0; i<subjects.length; i++){
                subjects_s += subjects[i];
                if( i < subjects.length-1){
                    subjects_s += ", ";
                }
            }
            cy.get(this.TXT_VALUE).contains(subjects_s).should("be.visible");
            return this;
        },
        isHobbiesCorrect(hobbies){
            let hobbies_s ="";
            for ( let i =0; i<hobbies.length; i++){
                hobbies_s += hobbies[i];
                if( i < hobbies.length-1){
                    hobbies_s += ", ";
                }
            }
            cy.get(this.TXT_VALUE).contains(hobbies_s).should("be.visible");
            return this;
        },
        isPictureCorrect(picture){
            cy.get(this.TXT_VALUE).contains(picture).should("be.visible");
            return this;
        },
        isCurrentAddressCorrect(currentaddress){
            cy.get(this.TXT_VALUE).contains(currentaddress).should("be.visible");
            return this;
        },
        isStateAndCityCorrect(state, city){
            cy.get(this.TXT_VALUE).contains(state+" "+city).should("be.visible");
            return this;
        }
    }
    

}