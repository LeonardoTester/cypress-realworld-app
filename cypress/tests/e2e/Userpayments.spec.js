import userData from '../../fixtures/userData.json'
import LoginTest from './pages/loginPage'
import HomeDashboard from './pages/homePage'
import TestPayment from './pages/payments'

   
const homepage = new HomeDashboard()
const loginPage = new LoginTest()
const payTest = new TestPayment()

  

describe('Real App', () => {

  it('Payments - Sufficient Balance)', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    homepage.infoGrid()
    payTest.infoPayment('Kristian Bradtke', '200', 'Thank you')
    
    })

    it('Payments - Insufficient Balance)', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    homepage.infoGrid()
    payTest.infoPayment('Kristian Bradtke', '2000', 'Thank you')
    payTest.Balance()
    
    })

  })

