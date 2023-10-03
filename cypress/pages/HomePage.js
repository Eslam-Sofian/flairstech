class HomePage{
   
   CheckHome(){ 
    return cy.get('div.dpdw>label.trig:nth-of-type(1)')
}
   ClosePopup(){
    cy.get('button.cls>svg').click()
  }  
  RegisterNavigation(){
    cy.get('div:nth-of-type(1)>label.trig').click()
    cy.get('div.-pam.-hr-bb>a.btn').click()
}
  OpenSupermarket(){
    cy.get("a[class='itm']:nth-child(1)").scrollIntoView()
    cy.get('[href="/breads-bakery/"]').click({force:true})
  }


}
export default HomePage
