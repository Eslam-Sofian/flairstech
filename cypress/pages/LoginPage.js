import RegisterPage from "../pages/RegisterPage.js"
class LoginPage{
   Login(Email,Password){
    const UR = new RegisterPage();
    UR.FirstRegistrationStep(Email)
    cy.get('.mdc-text-field').type(Password)
    cy.get('#loginButton > span.mdc-button__touch').click()
    return cy.get('#jm > header > section > div.col.-df.-j-bet.-m.-phn.-i-ctr > div:nth-child(1) > label')
   }

 
 
 }
 export default LoginPage