import userData from '../../fixtures/userData.json'
import LoginTest from './pages/loginPage'
import HomePage from './pages/homePage'
// import DashboardPage from '../pages/dashboardPage'
   
const homepage = new HomePage
const loginPage = new LoginTest()
// const dashboardPage = new DashboardPage()
  

describe('Real App', () => {

  it('User Info - Sucesso)', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    homepage.infoGrid()
    // dashboardPage.checkDashboard()         // checagem de dashboard   
    
  })

  it('Login - Fail', () => {


    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.AlertErrorLogin()
    
  })
})









