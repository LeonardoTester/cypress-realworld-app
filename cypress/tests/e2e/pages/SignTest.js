class TestSign {

    selectorsList() {
        const selectors = {
            buttonSign: "[href='/signup']",
            FirstNameField: "#firstName",
            LastNameField: "#lastName",
            UserNameField: "#username",
            PassWorldField: "#password",
            ConfirmPassword: "#confirmPassword",
            ButtonRegister: "[data-test='signup-submit']",
            FirstNameConfirm: "#firstName-helper-text",
            LastNameConfirm: "#lastName-helper-text",
            UserNameConfirm: "#username-helper-text",
            PasswordHelp: "#password-helper-text",
            HelpConfirmPassword: "#confirmPassword-helper-text"

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
        cy.get(this.selectorsList().FirstNameConfirm)
        cy.get(this.selectorsList().LastNameConfirm)
        cy.get(this.selectorsList().UserNameConfirm)
        cy.get(this.selectorsList().PassWorldField)
        cy.get(this.selectorsList().HelpConfirmPassword)
        
        
         

    }


}

export default TestSign

