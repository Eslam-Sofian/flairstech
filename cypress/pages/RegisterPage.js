class RegisterPage{

 MakeEmail() {
        var strValues = "qwertyuiopasdfghjklzxcvbnm12345";
        var strEmail = "";
        var strTmp;
        for (var i = 0; i < 10; i++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        return strEmail+"@gmail.com";
    }
FirstRegistrationStep(Email){
    cy.get('#input_identifierValue').type(Email)
    cy.get("button[type='submit']").click()
}
SecondRegistrationStep(Password){
    cy.get('input.mdc-text-field__input.password-input').type(Password)
    cy.get('input.mdc-text-field__input.confirm-password-input').type(Password)
    cy.get('button.mdc-button.mdc-button--touch.mdc-button--raised.to-personal-details.mdc-ripple-upgraded').click()
}
ThirdRegistrationStep(Fname,Lname,Phonenumber){
    cy.get("input[name='first_name']").type(Fname)
    cy.get("input[name='last_name']").type(Lname)
    cy.get("input[name='phone[number]']").type(Phonenumber)
    cy.get('button.mdc-button.mdc-button--touch.mdc-button--raised.to-personal-details-part-2.mdc-ripple-upgraded').click()
}
ForthRegistrationStep(DateOfBirth){
    cy.get('div#gender>div.mdc-select__anchor').click()
    cy.get('[data-value="M"]').click()
    cy.get('#input_birth_date').type(DateOfBirth)
    cy.get('input#acceptTC').click()
    cy.get('button#confirmBtn').click()
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

