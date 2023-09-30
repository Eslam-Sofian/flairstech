class HomePage{
   
   WelcomeMessage(){ 
    return cy.get('.-fs29')
}
   ClosePopup(){
    cy.get('.cw > .cls').click()
  }  
  RegisterNavigation(){
    cy.get(':nth-child(1) > .trig').click()
    cy.get('#dpdw-login-box > .inbox > .-pam > .btn').click()
}
  OpenSupermarket(){
    cy.get(' div.flyout-w.-fsh0.-fs0 > div > a:nth-child(1)').trigger('mouseover')
    cy.get('[href="/breads-bakery/"]').click({force: true})
  }


}
export default HomePage
