describe('login', () => {

    const testData = require('../fixtures/testData.json')[0]
    beforeEach(() => {
        cy.visit("https://demoqa.com/automation-practice-form")
    });
    it('submit successfully with valid input', () => {
        cy.fixture('testData').then((data) => {
            cy.get("#firstName").type(data.firstName)
            cy.get("#lastName").type(data.lastName)
            cy.get('#userEmail').type(data.userEmail)
            cy.get("label[for='gender-radio-1']").click();
            cy.get("#userNumber").type(data.userNumber)
            cy.get('#dateOfBirthInput').click()
            cy.get('.react-datepicker__month-select').select('January')
            cy.get('.react-datepicker__year-select').select('2001')
            cy.get('[role = "option"]').contains('15').click()
            cy.get('#subjectsContainer').type('m{enter}')
            cy.get('#uploadPicture').selectFile('cypress/fixtures/ok.png')
            cy.get('label[for="hobbies-checkbox-1"]').click();
            cy.get('textarea[placeholder="Current Address"]').type(data.Address)
            // cy.get('#state').type('N{enter}',{force:true})

            cy.get("#submit").click({ force: true })

            cy.get(".modal-content").should("be.visible");
            cy.get("#firstName").should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get("#lastName").should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get('#userEmail').should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get("label[for='gender-radio-1']").should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get("#userNumber").should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get('#dateOfBirthInput').should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get('label[for="hobbies-checkbox-1"]').should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get('textarea[placeholder="Current Address"]').should('have.css', 'border-color', 'rgb(40, 167, 69)')
        })
    })

    it('submit successfully with a needed input', () => {
        cy.fixture('testData').then((data) => {
            cy.get("#firstName").type(data.firstName)
            cy.get("#lastName").type(data.lastName)
            cy.get("label[for='gender-radio-1']").click();
            cy.get("#userNumber").type(data.userNumber)

            cy.get("#submit").click({ force: true })

            cy.get(".modal-content").should("be.visible");
            cy.get("#firstName").should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get("#lastName").should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get("label[for='gender-radio-1']").should('have.css', 'border-color', 'rgb(40, 167, 69)')
            cy.get("#userNumber").should('have.css', 'border-color', 'rgb(40, 167, 69)')
        })
    })

    it('Submit successfully with mobile start with code', () => {

        cy.fixture('testData').then((data) => {
            cy.get("#firstName").type(data.firstName)
            cy.get("#lastName").type(data.lastName)
            cy.get("label[for='gender-radio-1']").click();
            cy.get("#userNumber").type("+8493300884")

            cy.get("#submit").click({ force: true })

            cy.get("#userNumber").should('have.css', 'border-color', 'rgb(220, 53, 69)');

        })
    })

    it('cannot submit with all empty', () => {

        cy.get("#submit").click({ force: true })

        cy.get("#firstName").should('have.css', 'border-color', 'rgb(220, 53, 69)')
        cy.get("#lastName").should('have.css', 'border-color', 'rgb(220, 53, 69)')
        cy.get("label[for='gender-radio-1']").should('have.css', 'border-color', 'rgb(220, 53, 69)')
        cy.get("#userNumber").should('have.css', 'border-color', 'rgb(220, 53, 69)')
    })

    it('cannot submit with firstName and LastName have specChar ', () => {

        cy.fixture('testData').then((data) => {
            cy.get("#firstName").type(data.firstName + '@#')
            cy.get("#lastName").type(data.lastName + '$%^')
            cy.get("label[for='gender-radio-1']").click();
            cy.get("#userNumber").type(data.userNumber)

            cy.get("#submit").click({ force: true })

            cy.get("#firstName").should('have.css', 'border-color', 'rgb(220, 53, 69)')
            cy.get("#lastName").should('have.css', 'border-color', 'rgb(220, 53, 69)')
        })
    })

    it('cannot submit with invalid mobile ', () => {

        testData.invalidNumbers.forEach((mobile, index) => {
            cy.get("#firstName").type(testData.firstName)
            cy.get("#lastName").type(testData.lastName)
            cy.get("label[for='gender-radio-1']").click();
            cy.get("#userNumber").type(mobile)

            cy.get("#submit").click({ force: true })

            cy.get("#userNumber").should('have.css', 'border-color', 'rgb(220, 53, 69)');
        })
    })

    it('cannot submit with an invalid email', () => {
        testData.invalidEmail.forEach((email, index) => {

            cy.get("#firstName").type(testData.firstName)
            cy.get("#lastName").type(testData.lastName)
            cy.get("label[for='gender-radio-1']").click();
            cy.get("#userNumber").type(testData.userNumber)
            cy.get('#userEmail').type(email)

            cy.get("#submit").click({ force: true })

            cy.get("#userEmail").should('have.css', 'border-color', 'rgb(220, 53, 69)');
        })
    })

    it('cannot submit with DOB with later than today', () => {

        cy.fixture('testData').then((data) => {
            cy.get("#firstName").type(data.firstName)
            cy.get("#lastName").type(data.lastName)
            cy.get("label[for='gender-radio-1']").click();
            cy.get("#userNumber").type(data.userNumber)
            cy.get('#dateOfBirthInput').click()
            cy.get('.react-datepicker__month-select').select('January')
            cy.get('.react-datepicker__year-select').select('2024')
            cy.get('[role = "option"]').contains('15').click()

            cy.get('#userEmail').type('vnphuong3001@')

            cy.get("#submit").click({ force: true })
            cy.get('#dateOfBirthInput').should('have.css', 'border-color', 'rgb(220, 53, 69)')
        })
    })

    it('cannot submit with picture is not a image file', () => {

        cy.fixture('testData').then((data) => {
            cy.get("#firstName").type(data.firstName)
            cy.get("#lastName").type(data.lastName)
            cy.get("label[for='gender-radio-1']").click();
            cy.get("#userNumber").type(data.userNumber)
            cy.get('#uploadPicture').selectFile('cypress/fixtures/NAB_TC_studentRegistrationForm.xlsx')

            cy.get("#submit").click({ force: true })
            cy.get(".modal-content").should("not.be.visible");
        })
    })

    it('cannot choose second gender', () => {

        cy.fixture('testData').then((data) => {
            cy.get("#firstName").type(data.firstName)
            cy.get("#lastName").type(data.lastName)
            cy.get("label[for='gender-radio-1']").click();
            cy.get('#gender-radio-1').should('be.checked')
            cy.get("label[for='gender-radio-2']").click();
            cy.get('#gender-radio-2').should('be.checked')
            cy.get('#gender-radio-1').should('not.be.checked')
            cy.get("#userNumber").type(data.userNumber)
        })
    })

    it('user can select multiple option of Hobbies', () => {

        cy.fixture('testData').then((data) => {
            cy.get("#firstName").type(data.firstName)
            cy.get("#lastName").type(data.lastName)
            cy.get("label[for='gender-radio-1']").click();
            cy.get("#userNumber").type(data.userNumber)
            cy.get('label[for="hobbies-checkbox-1"]').click();
            cy.get('#hobbies-checkbox-1').should('be.checked')
            cy.get('label[for="hobbies-checkbox-2"]').click();
            cy.get('#hobbies-checkbox-2').should('be.checked')
        })
    })

    it('After registers successfully, all inputs of that page will empty', () => {

        cy.fixture('testData').then((data) => {
            cy.get("#firstName").type(data.firstName)
            cy.get("#lastName").type(data.lastName)
            cy.get("label[for='gender-radio-1']").click();
            cy.get("#userNumber").type(data.userNumber)

            cy.get("#submit").click({ force: true })
            cy.get("#closeLargeModal").click({ force: true })

            cy.get("#firstName").should('have.value', '');
            cy.get("#lastName").should('have.value', '');
            cy.get("#userNumber").should('have.value', '');
            cy.get('#gender-radio-1').should('be.checked')
            cy.get('#gender-radio-2').should('be.checked')
            cy.get('#gender-radio-3').should('be.checked')
        })
    })
})