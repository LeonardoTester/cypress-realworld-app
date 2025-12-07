class HistoryPay {

    selectorsList() {
     const selectors = {
       
        ButtonData: "[data-test='transaction-list-filter-date-range-button']", // abre o calendário
        SelectDay: ".react-calendar__month-view__days__day", // seleciona o dia 
        AllMonthAndYear: ".react-calendar__navigation__label", // 1º clique - abre o mês / 2º clique abre o ano
        SelectMonth: "[aria-label='dezembro de 2025']", // seleciona o mês 
        SelectYear: ".react-calendar__decade-view__years__year", // seleciona o ano
        gridPay:".MuiGrid-spacing-xs-2"

       
        
        }       
            return selectors
        }
      
        infoTransactionSuccess() {
         
           cy.get(this.selectorsList().ButtonData).click()
           cy.get(this.selectorsList().SelectDay).eq(5).click() // 06/12/2025
           cy.get(this.selectorsList().AllMonthAndYear).click()
           cy.get(this.selectorsList().SelectMonth).click()
           cy.get(this.selectorsList().AllMonthAndYear).click()
           cy.get(this.selectorsList().AllMonthAndYear).click()
           cy.get(this.selectorsList().SelectYear).should('be.visible').eq(4).click({ force: true }) // garante que apareceu
    
        }
   
        returnSave(gridPay) {

        cy.get(this.selectorsList().SelectMonth).click()
        cy.get(this.selectorsList().SelectDay).eq(5).click() // Mesmo dia do SelectDays(): 06/12/2025
        cy.get(this.selectorsList().gridPay).eq(0).should('contain', gridPay)

        }   
    }

    export default HistoryPay

  




