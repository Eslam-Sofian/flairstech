import HomePage from "../pages/HomePage.js"
import LoginPage from "../pages/LoginPage.js"
describe('LoginSuit', () => {
    const UL = new LoginPage();
    before(() => {
        cy.visit('https://www.jumia.com.eg/',{failOnStatusCode: false})
        const HP = new HomePage();
        HP.ClosePopup()
        HP.RegisterNavigation()
    })
    it('UserLoginValidation', () => {
        cy.fixture('data').as('data')
        cy.get('@data').then(input => {
        UL.Login(input.Email,input.Password).contains(input.FirstName)
        })
            })   
            
})