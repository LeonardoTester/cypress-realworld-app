import TestSign from './pages/SignTest'


const signTest = new TestSign()


describe('Real App', () => {

  it('Sign Up - Success)', () => {
  
    signTest.goToSignUp()
    signTest.TestSuccessRegister('Leonardo','Nascimento', 'EternoSeja', 'vasco123', 'vasco123')
    
    
  }) 

    it('Sign Up - Not Success', () => {
  
    signTest.goToSignUp()
    signTest.TestNotSuccessRegister('EternoSeja', 'vasco123', 'vasco123')
      
    })
})