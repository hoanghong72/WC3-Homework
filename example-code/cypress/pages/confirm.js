export const confirm ={
    TXT_NAME: "table >tbody >tr:nth-child(1) td:nth-child(2)",
    TXT_EMAIL: "table >tbody >tr:nth-child(2) td:nth-child(2)",
    TXT_GENDER: "table >tbody >tr:nth-child(3) td:nth-child(2)",
    TXT_MOBILE: "table >tbody >tr:nth-child(4) td:nth-child(2)",
    TXT_DOB: "table >tbody >tr:nth-child(5) td:nth-child(2)",
    TXT_SUBJECT: "table >tbody >tr:nth-child(6) td:nth-child(2)",
    TXT_HOBBIES: "table >tbody >tr:nth-child(7) td:nth-child(2)",
    TXT_PICTURE: "table >tbody >tr:nth-child(8) td:nth-child(2)",
    TXT_ADDRESS: "table >tbody >tr:nth-child(9) td:nth-child(2)",
    TXT_STATE_AND_CITY: "table >tbody >tr:nth-child(10) td:nth-child(2)",
    
    isTrueName(firstName, lastName) {
        // Loại bỏ khoảng trắng ở đầu và cuối của tên
        Name = firstName + " " + lastName;
      
        // Kiểm tra xem tên có chính xác hay không
        return Name === cy.get(this.TXT_NAME).text();
      },
      isTrueEmail(email) {
        cy.get(this.TXT_EMAIL).should("have.text", email);
        return this;
    },
    isTrueGender(email){
        cy.get(this.TXT_EMAIL).should("have.text", email);
        return this;
    },
    isTrueMobile(mobile) {
        cy.get(this.TXT_MOBILE).should("have.text", mobile);
        return this;
    },
    isTrueDOB(day, month, year) {
        cy.get(this.TXT_DOB).should("have.text", day + " " + month + "," + year);
        return this;
    },
    isTruePic(picture) {
        cy.get(this.TXT_PICTURE).should("have.text", picture);
        return this;
    },
    isTrueSub(subjects){
        subjectsString = subjects.join(', ');
        cy.get(this.TXT_SUBJECT).should('have.text', subjectsString);
        return this;
    },
    isTrueHobbies(hobbies) {
         hobbiesString = hobbies.join(', ');
        cy.get(this.TXT_HOBBIES).should('have.text', hobbiesString);
        return this;
      },
      isTrueAdd(currentAddress) {
        cy.get(this.TXT_ADDRESS).should("have.text", currentAddress);
        return this;
    },

    isTrueState(state, city) {
         locationText = state + (state && city ? ' ' : '') + city;
        cy.get(this.TXT_STATE_AND_CITY).should('have.text', locationText);
        return this;
      },
      clickClose() {
        cy.get(this.BTN_CLOSE).click({ force: true });
        return this;},

    
}