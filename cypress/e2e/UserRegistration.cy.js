import RegisterPage from "../pages/RegisterPage.js"
import HomePage from "../pages/HomePage.js"
describe('RegisterSuit', () => {
    const UR = new RegisterPage();
    before(() => {
        cy.visit('https://www.jumia.com.eg/')
        const HP = new HomePage();
        HP.ClosePopup()
        HP.RegisterNavigation()
    })

   it('UserRegistrationValidation', () => {
        cy.fixture('data').as('data')
        cy.get('@data').then(input => {
          UR.UserRegister(input.Email,input.Password,input.FirstName,input.LastName,input.PhoneNumber,input.DateOfBirth).contains(input.FirstName+", Your account has been created!")
            })   
  })
    })