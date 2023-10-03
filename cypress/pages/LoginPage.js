import RegisterPage from "../pages/RegisterPage.js"
class LoginPage{
   Login(Email,Password){
    const UR = new RegisterPage();
    UR.FirstRegistrationStep(Email)
    cy.get("input[name='password']").type(Password)
    cy.get("button[id='loginButton'][type='submit']").click()
    return cy.get('div:nth-of-type(1)>label.trig')
   }

 
 
 }
 export default LoginPage