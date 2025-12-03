
class HomeDashboard {

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

    export default HomeDashboard


