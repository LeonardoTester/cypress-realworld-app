    class HistoryPay {

        selectorsList() {
        const selectors = {
        
            ButtonData: "[data-test='transaction-list-filter-date-range-button']", 
            SelectDay: ".react-calendar__month-view__days__day",  
            AllMonthAndYear: ".react-calendar__navigation__label", 
            SelectMonth: ".react-calendar__year-view__months__month", 
            SelectYear: ".react-calendar__decade-view__years__year", 
            gridPay:".MuiGrid-spacing-xs-2",
        
            }       
                return selectors
            }
        

            // selecionamos a data dentro dos parâmetros
            infoTransactionSuccess(DayId = 5, MonthID = 11, YearID = 4) {
            
            cy.get(this.selectorsList().ButtonData).click()
            cy.get(this.selectorsList().SelectDay).eq(DayId).click() 
            cy.get(this.selectorsList().AllMonthAndYear).click()
            cy.get(this.selectorsList().SelectMonth).eq(MonthID).click()
            cy.get(this.selectorsList().AllMonthAndYear).click()
            cy.get(this.selectorsList().AllMonthAndYear).click()
            cy.get(this.selectorsList().SelectYear).should('be.visible').eq(YearID).click({ force: true }) // 
             

        
            }
    
            // salvamos a data usando os parâmetros
            returnSave(gridPay, SaveDay = 5, saveMonth = 11) {

            cy.get(this.selectorsList().SelectMonth).eq(saveMonth).click()
            cy.get(this.selectorsList().SelectDay).eq(SaveDay).click() 
            cy.get(this.selectorsList().gridPay).eq(0).should('contain', gridPay)
            

            } 
            // selecionamos a data dentro dos parâmetros
            infoNotTransaction(IdDay = 5, IDMonth = 11, IDYear = 4) {
            
            cy.get(this.selectorsList().ButtonData).click()
            cy.get(this.selectorsList().SelectDay).eq(IdDay).click() 
            cy.get(this.selectorsList().AllMonthAndYear).click()
            cy.get(this.selectorsList().SelectMonth).eq(IDMonth).click()
            cy.get(this.selectorsList().AllMonthAndYear).click()
            cy.get(this.selectorsList().AllMonthAndYear).click()
            cy.get(this.selectorsList().SelectYear).should('be.visible').eq(IDYear).click({ force: true }) 
        
            }
             // salvamos a data usando os parâmetros
            LastSave(gridPay, LastSaveMonth = 11, LastSaveDay = 5  ) {

            cy.get(this.selectorsList().SelectMonth).eq(LastSaveMonth).click()
            cy.get(this.selectorsList().SelectDay).eq(LastSaveDay).click() 
            cy.get(this.selectorsList().gridPay).eq(0).should('contain', gridPay)

            } 
            
            
            
        }

        export default HistoryPay

  




