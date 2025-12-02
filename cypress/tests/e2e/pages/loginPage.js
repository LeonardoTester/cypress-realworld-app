class LoginPage {

    selectorsList() {
     const selectors = {
       
        usernameField: "#username",
        passwordField: "#password",
        loginButton: "button",
        wrongCredentialAlert: ".MuiAlert-message",
        
        }
        
        
            return selectors


        }
      
        acessLoginPage() {

         cy.visit('http://localhost:3000/')

        }

        loginWithUser(usarname, password) {

            cy.get(this.selectorsList().usernameField).type(usarname)
            cy.get(this.selectorsList().passwordField).type(password)
            cy.get(this.selectorsList().loginButton).click()

        }

        AlertErrorLogin() {


            cy.get(this.selectorsList().wrongCredentialAlert)

        }
    }

    export default LoginPage
