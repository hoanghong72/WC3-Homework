export  const confirmForm ={
    TXT_NAME_CF: "tbody tr:nth-child(1) td:nth-child(2)",
    TXT_EMAIL_CF: "tbody tr:nth-child(2) td:nth-child(2)",
    TXT_GENDER_CF: "tbody tr:nth-child(3) td:nth-child(2)",
    TXT_MOBILE_CF: "tbody tr:nth-child(4) td:nth-child(2)",
    TXT_DOB_CF: "tbody tr:nth-child(5) td:nth-child(2)",
    TXT_SUBJECTS_CF: "tbody tr:nth-child(6) td:nth-child(2)",
    TXT_HOBBIES_CF: "tbody tr:nth-child(7) td:nth-child(2)",
    TXT_PICTURE_CF: "tbody tr:nth-child(8) td:nth-child(2)",
    TXT_CURRENTADDRESS_CF: "tbody tr:nth-child(9) td:nth-child(2)",
    TXT_STATE_CITY_CF: "tbody tr:nth-child(10) td:nth-child(2)",
    FRA_DIALOG: "[role='document']",
    LBL_FORM: "#example-modal-sizes-title-lg",

    isSuccessMessageDisplay(){
        cy.get(this.FRA_DIALOG).should('be.visible');
        cy.get(this.LBL_FORM).should('have.text','Thanks for submitting the form');
        return this;
    },

    isNameCorrect(firstName, lastName){
        cy.get(this.TXT_NAME_CF).should('have.text',firstName+" "+lastName);
        return this;
    },
    isEmaiCorrect(email){
        cy.get(this.TXT_EMAIL_CF).should('have.text',email);
        return this;
    },
    isGenderCorrect(gender){
        cy.get(this.TXT_GENDER_CF).should('have.text',gender);
        return this;
    },
    isMobileCorrect(mobile){
        cy.get(this.TXT_MOBILE_CF).should('have.text',mobile);
        return this;
    },
    isDOBCorrect(day, month, year){
        cy.get(this.TXT_DOB_CF).should('have.text',day+" "+month+","+year);
        return this;
    },
    isSubjectsCorrect(subjects){
        let subjects_cf = "";
        for ( let i =0; i<subjects.length; i++){
            subjects_cf += subjects[i];
            if( i < subjects.length-1){
                subjects_cf += ", ";
            }
        }
        cy.get(this.TXT_SUBJECTS_CF).should('have.text',subjects_cf);
        return this;
    },    
    isHobbiesCorrect(hobbies){
        cy.get(this.TXT_HOBBIES_CF).should('have.text',hobbies);
        return this;
    },
    isPictureCorrect(picture){
        cy.get(this.TXT_PICTURE_CF).should('have.text',picture);
        return this;
    },
    isCurrentAddressCorrect(currentAddress){
        cy.get(this.TXT_CURRENTADDRESS_CF).should('have.text',currentAddress);
        return this;
    },
    isStateAndCityCorrect(state,city){
        cy.get(this.TXT_STATE_CITY_CF).should('have.text',state+" "+city)
        return this;
    }
}
