class ShoppingPage{
    AddToCart (FProductNo){
    cy.get(' article:nth-child('+FProductNo+') > footer > form > button').click({force :true})
    cy.get('[data-submit]').click({force :true})
    }
    AddMoreQuantity(){
        cy.get('[aria-label="increase cart quantity"] > .ic > use').click()
    }
    CheckCartItemsNo(){
        cy.get('.-gy9').click()
       return cy.get('.-w-32')
    }
    ClearCart(){
        cy.get('article > footer > button').click({force : true})
        cy.get('div > section > div > div > form:nth-child(2) > button').click({force : true})
        
    }
   
Logout(){
    cy.get('div.col.-df.-j-bet.-m.-phn.-i-ctr > div:nth-child(1) > label').click()
    cy.get('#dpdw-login-box > div > form > button').click()
}
CompareItemAndTotal(){
 
    cy.get('.sd > .prc')
    .first()
          .invoke('text')
          .then((itemPrice) => {
              const newEle = () => itemPrice.replace('EGP ', '').trim();
              cy.get('.card > .-i-ctr > .-fs20')
                  .invoke('text')
                  .then((totalPrice) => totalPrice.replace('EGP ', '').trim())
                  .should('eq',(Number(newEle())*2).toFixed(2));
          });}

          
          
 }
 export default ShoppingPage