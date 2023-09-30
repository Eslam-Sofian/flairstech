class RegisterPage{


FirstRegistrationStep(Email){
    cy.get('.mdc-text-field__input', { timeout: 6000 }).type(Email)
    cy.get('body > div.content-container > div.card > form > div.ctx-identification.flow-layout > div:nth-child(3) > div.mdc-touch-target-wrapper > button > span.mdc-button__touch').click()
}
SecondRegistrationStep(Password){
    cy.get('#card_password > :nth-child(3) > .mdc-text-field').type(Password)
    cy.get('#card_password > :nth-child(4) > .mdc-text-field').type(Password)
    cy.wait(500)
    cy.get('#card_password > .actions').click({forcr:true})
}
ThirdRegistrationStep(Fname,Lname,Phonenumber){
    cy.get('#card_profile_details > :nth-child(2) > .mdc-text-field').type(Fname)
    cy.get('#card_profile_details > :nth-child(3) > .mdc-text-field').type(Lname)
    cy.get('.phone-number-field > .mdc-text-field').type(Phonenumber)
    cy.get('#card_profile_details > .actions').click()
}
ForthRegistrationStep(DateOfBirth){
    cy.get('#gender > .mdc-select__anchor').click({ force: true })
    cy.get('[data-value="M"] > .mdc-deprecated-list-item__text').click({force: true})
    cy.get('#input_birth_date').click({force: true}).type(DateOfBirth)
    cy.get('#acceptTC').click()
    cy.get('.center > .actions').click()
}
UserRegister(Email,Password,Fname,Lname,Phonenumber,DateOfBirth){
   this.FirstRegistrationStep(Email)
   this.SecondRegistrationStep(Password)
   this.ThirdRegistrationStep(Fname,Lname,Phonenumber)
   this.ForthRegistrationStep(DateOfBirth)
   return cy.get('h2')
}
}
export default RegisterPage

