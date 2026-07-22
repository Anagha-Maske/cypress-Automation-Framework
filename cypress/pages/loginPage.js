class LoginPage {


 
  usernameInputBox= "#user-name";
  passwordInputBox="#password";
  loginButton="#login-button";
  errorMsgSelector="h3"
  
  
  
  
  enterUsername(username){
return cy.get(this.usernameInputBox).type(username);
}
enterPassword(password)
{
  return cy.get(this.passwordInputBox).type(password);
}
verifyPasswordMasked(){
  return cy.get(this.passwordInputBox).should('have.attr', 'type', 'password');
}
loginButtonVisible(){
  return  cy.get(this.loginButton).should('be.visible')
}
clickLoginButton()
{
 return  cy.get(this.loginButton).click();
  
}
login(username, password) {
    if (username) {
        this.enterUsername(username);
    }

    if (password) {
        this.enterPassword(password);
    }

    
        this.clickLoginButton();
    }
verifyErrorMsg(errormsg){
  return cy.get(this.errorMsgSelector).should("be.visible").contains(errormsg);
}










}
export default new LoginPage();
