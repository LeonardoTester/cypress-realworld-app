class TestPayment {

    selectorsList() {
     const selectors = {
       
        payment: "[href='/transaction/new']",
        dashboardSelectContact: ".MuiGrid-grid-xs-12",
        SearchContact: "#user-list-search-input",
        SelectContact: "[data-test='user-list-item-GjWovtg2hr']",
        dashboardPayment:".TransactionCreateStepTwo-paper",
        ConfirmNameContact: ".css-mpyo7s-MuiTypography-root",
        ValidAmount: "[placeholder='Amount']",
        AddNote:"[placeholder='Add a note']",
        ButtonPay: "[data-test='transaction-create-submit-payment']",
        CompleteTransaction: ".TransactionCreateStepThree-paper",
        AlertSuccessPayment: '[data-test="alert-bar-success"]'


          
        }            
            return selectors
        }
      
        infoPayment(SearchContact, ValidAmount, AddNote) {
        
        cy.get(this.selectorsList().payment).click()
        cy.get(this.selectorsList().dashboardSelectContact)
        cy.get(this.selectorsList().SearchContact).click()
        cy.get(this.selectorsList().SearchContact).type(SearchContact) // Kristian Bradtke
        cy.get(this.selectorsList().SelectContact).click()
        cy.get(this.selectorsList().dashboardPayment)
        cy.get(this.selectorsList().ConfirmNameContact)
        cy.get(this.selectorsList().ValidAmount).click().type(ValidAmount)
        cy.get(this.selectorsList().AddNote).click().type(AddNote)
        cy.get(this.selectorsList().ButtonPay).click()
        cy.get(this.selectorsList().CompleteTransaction)
        cy.get(this.selectorsList().AlertSuccessPayment)





        }

    }

    export default TestPayment
