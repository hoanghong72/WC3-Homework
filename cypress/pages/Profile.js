export const Profile = {
    TXT_USERNAMECORRECT: "#userName-value",
    BTN_PROFILE: "#item-3",
    BTN_BOOKNAME: ".action-buttons",

    clickToProfile () {
        cy.get(this.BTN_PROFILE).click();
        return this;
    },

    checkUserNamevalue(username) {
        cy.get(this.TXT_USERNAMECORRECT).should('have.text',username);
        return this;
    },

    checkBookName () {
        cy.get(this.BTN_BOOKNAME).should('be.visible');
        return this;
    }

}