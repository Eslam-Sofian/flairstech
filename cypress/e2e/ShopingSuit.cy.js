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
        cy.fixture('data').as('data')
       cy.get('@data').then(input => {
           SP.AddToCart(input.ProductNo)
       })
       SP.AddMoreQuantity()
    })
    afterEach(() => {
        SP.ClearCart()
        SP.Logout()
      })
    it('AddToCartItemsValidation', () => {
        
       SP.CheckCartItemsNo().contains('2')
     
        })  
        
    it('CartItemsPriceValidation', () => {
        SP.CompareItemAndTotal().should('eq', (Number(newEle()) * 2).toFixed(2));
        /*cy.fixture('data').as('data')
        cy.get('@data').then(input => {
               SP.AddToCart(input.ProductNo)
           })
           SP.OpenCart()*/
      
            })  
    
            
            
})