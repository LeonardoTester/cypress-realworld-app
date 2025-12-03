import userData from '../../fixtures/userData.json'
import LoginTest from './pages/loginPage'
import HomeDashboard from './pages/homePage'

   
const homepage = new HomeDashboard()
const loginPage = new LoginTest()

  

describe('Real App', () => {

  it('Login Success)', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    homepage.infoGrid()
      
    
  })

  it('Login Fail', () => {


    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.AlertErrorLogin()
    
  })
})











