describe('login', () => {

    beforeEach(() => {
        cy.visit("https://demoqa.com/automation-practice-form")
    });

    it('submit successfully with a needed input', () => {
        cy.get("#firstName").type("Phuong")
        cy.get("#lastName").type("Vo")
        cy.get('#userEmail').type('vnphuong3001@gmail.com')
        //  cy.get('#dateOfBirthInput').click()
        //  cy.get('.react-datepicker__month-select').select('January')
        // cy.get('.react-datepicker__year-select').select('2001')
        // cy.get('#subjectsContainer').type('m')
        // cy.get('css-12jo7m5 subjects-auto-complete__multi-value__label').click()

    

        cy.get("label[for='gender-radio-1']").click();
        cy.get("#userNumber").type("0933008846")
        // cy.get('lable[for="hobbies-checkbox-1"]').click()
        cy.get('textarea[placeholder="Current Address"]').type('Nguyen dinh chieu')
        cy.get('.col-md-4 col-sm-12').click()


        cy.get("#submit").click({ force: true })

        cy.get(".modal-content").should("be.visible");

    })
    it('submit successfully with a needed input', () => {
        cy.get("#firstName").type("Phuong")
        cy.get("#lastName").type("Vo")
        cy.get("label[for='gender-radio-1']").click();
        cy.get("#userNumber").type("0933008846")

        cy.get("#submit").click({ force: true })

        cy.get(".modal-content").should("be.visible");

    })

    it('cannot submit with all empty', () => {

        cy.get("#submit").click({ force: true })

        cy.get("#firstName").should('have.css', 'border-color', 'rgb(220, 53, 69)')
        cy.get("#lastName").should('have.css', 'border-color', 'rgb(220, 53, 69)')
        cy.get("label[for='gender-radio-1']").should('have.css','border-color','rgb(220, 53, 69)')
        cy.get("#userNumber").should('have.css','border-color','rgb(220, 53, 69)')
    })

    it('cannot submit without FirstName', () => {

        cy.get("#lastName").type("Vo")
        cy.get("label[for='gender-radio-1']").click();
        cy.get("#userNumber").type("0933008846")

        cy.get("#submit").click({ force: true })

        cy.get("#firstName").should('have.css', 'border-color', 'rgb(220, 53, 69)')

    })

    it('cannot submit without LastName empty', () => {

        cy.get("#firstName").type("Phuong")
        cy.get("label[for='gender-radio-1']").click();
        cy.get("#userNumber").type("0933008846")

        cy.get("#submit").click({ force: true })

        cy.get("#lastName").should('have.css', 'border-color', 'rgb(220, 53, 69)')

    })

    it('cannot submit with firstName and LastName have specChar ', () => {

        cy.get("#firstName").type("Phuong$")
        cy.get("#lastName").type("Vo*")
        cy.get("label[for='gender-radio-2']").click();
        cy.get("#userNumber").type("0933008846")

        cy.get("#submit").click({ force: true })

        cy.get("#first").should('have.css', 'border-color', 'rgb(220, 53, 69)')
        cy.get("#lastName").should('have.css', 'border-color', 'rgb(220, 53, 69)')

    })


    it('cannot submit without chosing gender', () => {
        cy.get("#firstName").type("Phuong")
        cy.get("#lastName").type("Vo")
        cy.get("#userNumber").type("0933008846")

        cy.get("#submit").click({ force: true })

        cy.get("label[for='gender-radio-1']").should('have.css','border-color','rgb(220, 53, 69)')

    })

    it('cannot submit without mobile', () => {
        cy.get("#firstName").type("Phuong")
        cy.get("#lastName").type("Vo")
        cy.get("label[for='gender-radio-1']").click();

        cy.get("#submit").click({ force: true })

        cy.get("#userNumber").should('have.css','border-color','rgb(220, 53, 69)');

    })

    it('cannot submit without mobile less than 10 digits', () => {
        cy.get("#firstName").type("Phuong")
        cy.get("#lastName").type("Vo")
        cy.get("label[for='gender-radio-1']").click();
        cy.get("#userNumber").type("093300884")


        cy.get("#submit").click({ force: true })

        cy.get("#userNumber").should('have.css','border-color','rgb(220, 53, 69)');

    })

    it('cannot submit with mobile inculed only char', () => {
        cy.get("#firstName").type("Phuong")
        cy.get("#lastName").type("Vo")
        cy.get('#gender-radio-1').check({ force: true });
        cy.get("#userNumber").type("vonhuphuon")

        cy.get("#submit").click({ force: true })
        cy.get('#userNumber').should("have.css", "border-color", "rgb(220, 53, 69)");


    })

    it('cannot submit with mobile include char and digits ', () => {
        cy.get("#firstName").type("Phuong")
        cy.get("#lastName").type("Vo")
        cy.get("label[for='gender-radio-1']").click();
        cy.get("#userNumber").type("093300884P")


        cy.get("#submit").click({ force: true })

        cy.get("#userNumber").should('have.css','border-color','rgb(220, 53, 69)');

    })

    it('cannot submit with email without Separator and Domain name', () => {
        cy.get("#firstName").type("Phuong")
        cy.get("#lastName").type("Vo")
        cy.get('#userEmail').type('vnphuong3001')
        cy.get("label[for='gender-radio-1']").click();
        cy.get("#userNumber").type("0933008846")



        cy.get("#submit").click({ force: true })

        cy.get("#userEmail").should('have.css','border-color','rgb(220, 53, 69)');

    })


    it('cannot submit with email without domain name', () => {
        cy.get("#firstName").type("Phuong")
        cy.get("#lastName").type("Vo")
        cy.get('#userEmail').type('vnphuong3001@')
        cy.get("label[for='gender-radio-1']").click();
        cy.get("#userNumber").type("0933008846")



        cy.get("#submit").click({ force: true })

        cy.get("#userEmail").should('have.css','border-color','rgb(220, 53, 69)');

    })

        it('delete all input in DOBtextbox', () => {
   
         cy.get('#dateOfBirthInput').clear()
        

    })









})