import HomePage from "../pages/HomePage.js"
describe('HomeSuit', () => {
    const HP = new HomePage();
    it('VerifyHomePage', () => {
        cy.visit('https://www.jumia.com.eg/')
        HP.ClosePopup()
        HP.CheckHome().contains('Account')
    })
  })