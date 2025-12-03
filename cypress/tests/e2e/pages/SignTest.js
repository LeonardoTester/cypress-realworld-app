class TestSign {

    selectorsList() {
        const selectors = {
            buttonSign: "[href='/signup']",
            FirstNameField: "#firstName",
            LastNameField: "#lastName",
            UserNameField: "#username",
            PassWorldField: "#password",
            ConfirmPassword: "#confirmPassword",
            ButtonRegister: "[data-test='signup-submit']"

        }
        return selectors
    }

    goToSignUp() {
        cy.visit('http://localhost:3000/')
        cy.get(this.selectorsList().buttonSign).click()
    }

    TestSuccessRegister(FirstNameField, LastNameField, UserNameField, PassWorldField, ConfirmPassword) {
        
        cy.get(this.selectorsList().FirstNameField).type(FirstNameField)
        cy.get(this.selectorsList().LastNameField).type(LastNameField)
        cy.get(this.selectorsList().UserNameField).type(UserNameField)
        cy.get(this.selectorsList().PassWorldField).type(PassWorldField)
        cy.get(this.selectorsList().ConfirmPassword).type(ConfirmPassword)
        cy.get(this.selectorsList().ButtonRegister).click()      
    }

    TestNotSuccessRegister(FirstNameField, LastNameField, UserNameField, PassWorldField, ConfirmPassword) {
       
        
        cy.get(this.selectorsList().FirstNameField).type(FirstNameField)
        cy.get(this.selectorsList().LastNameField).type(LastNameField)
        cy.get(this.selectorsList().UserNameField).type(UserNameField)
        cy.get(this.selectorsList().PassWorldField).type(PassWorldField)
        cy.get(this.selectorsList().ConfirmPassword).type(ConfirmPassword)
        cy.get(this.selectorsList().ButtonRegister).click()    

    }
}

export default TestSign

