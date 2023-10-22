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
    SYMBOL_INVALID: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
    SYMBOL_VALID :"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")",
    LBL_OPTION: ".custom-control-label",
    COLOR_RED: "rgb(220, 53, 69)",
    COLOR_GREEN: "rgb(40, 167, 69)",


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
            cy.get('label').contains(hobbies[i]).prev('input[type="checkbox"]').check();
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
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'border-color', this.COLOR_GREEN);
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'background-image', this.SYMBOL_VALID);
        }else{
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'border-color', this.COLOR_RED);
            cy.get(this.TXT_FIRSTNAME).should('have.css', 'background-image', this.SYMBOL_INVALID);
        }
        return this;
    },
    isLastNameValid(isValid){
        if(isValid === true){
            cy.get(this.TXT_LASTNAME).should('have.css', 'border-color', this.COLOR_GREEN);
            cy.get(this.TXT_LASTNAME).should('have.css', 'background-image', this.SYMBOL_VALID);
        }else{
            cy.get(this.TXT_LASTNAME).should('have.css', 'border-color', this.COLOR_RED);
            cy.get(this.TXT_LASTNAME).should('have.css', 'background-image', this.SYMBOL_INVALID);
        }
        return this;
    },
    isMobileValid(isValid){
        if(isValid === true){
            cy.get(this.TXT_MOBILE).should('have.css', 'border-color', this.COLOR_GREEN);
            cy.get(this.TXT_MOBILE).should('have.css', 'background-image', this.SYMBOL_VALID);
        }else{
            cy.get(this.TXT_MOBILE).should('have.css', 'border-color', this.COLOR_RED);
            cy.get(this.TXT_MOBILE).should('have.css', 'background-image', this.SYMBOL_INVALID);
        }
        return this;
    },
    isEmailValid(isValid){
        if(isValid === true){
            cy.get(this.TXT_EMAIL).should('have.css', 'border-color', this.COLOR_GREEN);
            cy.get(this.TXT_EMAIL).should('have.css', 'background-image', this.SYMBOL_VALID);
        }else{
            cy.get(this.TXT_EMAIL).should('have.css', 'border-color', this.COLOR_RED);
            cy.get(this.TXT_EMAIL).should('have.css', 'background-image', this.SYMBOL_INVALID);
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
                      expect(borderColor).to.equal(this.COLOR_GREEN);
                      expect(color).to.equal(this.COLOR_GREEN);
                    }else{
                        expect(borderColor).to.equal(this.COLOR_RED);
                        expect(color).to.equal(this.COLOR_RED);
                    }
                })
            })
        }
        return this;
    },





//After regiter successfully => show popup
    popup :{
        TXT_NAME_POPUP: "table > tbody > tr:nth-child(1) > td:nth-child(2)",
        TXT_EMAIL_POPUP: "table > tbody > tr:nth-child(2) > td:nth-child(2)",
        TXT_GENDER_POPUP: "table > tbody > tr:nth-child(3) > td:nth-child(2)",
        TXT_MOBILE_POPUP: "table > tbody > tr:nth-child(4) > td:nth-child(2)",
        TXT_DOB_POPUP: "table > tbody > tr:nth-child(5) > td:nth-child(2)",
        TXT_SUBJECTS_POPUP: "table > tbody > tr:nth-child(6) > td:nth-child(2)",
        TXT_HOBBIES_POPUP: "table > tbody > tr:nth-child(7) > td:nth-child(2)",
        TXT_PICTURE_POPUP: "table > tbody > tr:nth-child(8) > td:nth-child(2)",
        TXT_ADDRESS_POPUP: "table > tbody > tr:nth-child(9) > td:nth-child(2)",
        TXT_STATE_AND_CITY_POPUP: "table > tbody > tr:nth-child(10) > td:nth-child(2)",

        isNameCorret(firstname, lastname){
            cy.get(this.TXT_NAME_POPUP).should('have.text',firstname+" "+lastname);
            return this;
        },
        isEmaiCorret(email){
            cy.get(this.TXT_EMAIL_POPUP).should('have.text',email);
            return this;
        },
        isGenderCorret(gender){
            cy.get(this.TXT_GENDER_POPUP).should('have.text',gender);
            return this;
        },
        isMobileCorret(mobile){
            cy.get(this.TXT_MOBILE_POPUP).should('have.text',mobile);
            return this;
        },
        isDOBCorret(day, month, year){
            cy.get(this.TXT_DOB_POPUP).should('have.text',day+" "+month+","+year);
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
            cy.get(this.TXT_SUBJECTS_POPUP).should('have.text',subjects_s);
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
            cy.get(this.TXT_HOBBIES_POPUP).should('have.text',hobbies_s);
            return this;
        },
        isPictureCorrect(picture){
            cy.get(this.TXT_PICTURE_POPUP).should('have.text',picture);
            return this;
        },
        isCurrentAddressCorrect(currentaddress){
            cy.get(this.TXT_ADDRESS_POPUP).should('have.text', currentaddress);
            return this;
        },
        isStateAndCityCorrect(state, city){
            cy.get(this.TXT_STATE_AND_CITY_POPUP).should('have.text',state+" "+city)
            return this;
        }
    }
    

}