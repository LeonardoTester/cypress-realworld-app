import userData from '../../fixtures/userData.json'
import LoginTest from './pages/loginPage'
import HomeDashboard from './pages/homePage'
import HistoryPay from './pages/PayHistory'

   
const homepage = new HomeDashboard()
const loginPage = new LoginTest()
const payhistory = new HistoryPay()
  

describe('Real App', () => {

  it('Info Transaction', () => {
    
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    homepage.infoGrid()
    payhistory.infoTransactionSuccess()
    payhistory.returnSave('paid', '500')

  })

  it.skip('No transactions', () => {

    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    

  })

})
   