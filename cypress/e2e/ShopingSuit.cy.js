import HomePage from "../pages/HomePage.js"
import ShoppingPage from "../pages/ShoppingPage.js";
import LoginPage from "../pages/LoginPage.js";
describe('ShopingSuit', () => {
    const SP = new ShoppingPage();
    beforeEach(() => {
        cy.visit('https://www.jumia.com.eg/')
        const HP = new HomePage();
        const UL = new LoginPage();
        HP.ClosePopup()
        HP.RegisterNavigation()
        cy.fixture('data').as('data')
        cy.get('@data').then(input => {
        UL.Login(input.Email,input.Password).contains(input.FirstName)})
        HP.OpenSupermarket()
        
    })
    afterEach(() => {
        SP.ClearCart()
        SP.Logout()
      })
    it('AddToCartItemsValidation', () => {
        cy.fixture('data').as('data')
       cy.get('@data').then(input => {
           SP.AddToCart(input.ProductNo)
       })
       SP.AddMoreQuantity()
       SP.CheckCartItemsNo().contains('2')
        })  
        
    it('CartItemsPriceValidation', () => {
        cy.fixture('data').as('data')
       cy.get('@data').then(input => {
           SP.AddToCart(input.ProductNo)
       })
       SP.AddMoreQuantity()
        SP.OpenCart()
        SP.CompareItemAndTotal();
            })  
    
            
            
})