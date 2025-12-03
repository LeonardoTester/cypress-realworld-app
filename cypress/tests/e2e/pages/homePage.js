
class HomePage {

    selectorsList() {
     const selectors = {
       
        Homegrid: ".MuiGrid-spacing-xs-3",
       

        
        }
        
        
            return selectors


        }
      
        infoGrid() {
        
        cy.get(this.selectorsList().Homegrid)


                


        }

    }

    export default HomePage





// cy.get(this.selectorsList().CredentialAlert)