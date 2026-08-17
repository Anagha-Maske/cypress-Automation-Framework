import inventoryPage from "../../pages/inventoryPage";
import loginPage from "../../pages/loginPage";

describe('login', () => {

   let data;

  beforeEach(() => {
    cy.visit('/');
    cy.fixture('userData').then((userData) => {
      data = userData;
    });
  });
  it('TC_001 - login with valid credentials', () => {
    
      cy.login(data.username,data.password);
      cy.url().should('include', '/inventory.html');
      inventoryPage.verifyAppLogoVisible();
      inventoryPage.verifyProductsTitleVisible();
      inventoryPage.verifyCartIconVisible();
      inventoryPage.verifyMenuIconVisible();
      inventoryPage.clickLogoutButton();
 
    })
    it('TC_002 - login with invalid username', () => {
   
       cy.login(data.invalidUsername,data.password);
      loginPage.verifyErrorMsg(data.invalidCredsErrorMsg);
    

    })
     it('TC_003 - login with invalid password', () => {
    
      cy.login(data.username,data.invalidPassword);
      loginPage.verifyErrorMsg(data.invalidCredsErrorMsg);
    
    })
    
     it('TC_004 - login with invalid username and password', () => {
    
      cy.login(data.invalidUsername,data.invalidPassword);
      loginPage.verifyErrorMsg(data.invalidCredsErrorMsg);
    
    })
  
    it('TC_005 - login with empty username ', () => {
   
      cy.login("",data.password);
      loginPage.verifyErrorMsg(data.emptyUsernameErrorMsg);
    
    })
    
it('TC_006 - login with empty password ', () => {
  
      cy.login(data.username,"");
      loginPage.verifyErrorMsg(data.emptyPasswordErrorMsg);
    
    })
    
it('TC_007 - login with empty username and Password ', () => {
      cy.login("","");
      loginPage.verifyErrorMsg(data.emptyUsernameErrorMsg);
    })
it('TC_008 - locked user login', () => {
      cy.login(data.lockedUser,data.password);    
      loginPage.verifyErrorMsg(data.lockedUserErrorMsg);
    })
  
it('TC_009 - verify password masking', () => {
      loginPage.verifyPasswordMasked();
      cy.login(data.username,data.password)
      cy.url().should('include', '/inventory.html');
  })
it('TC_010 - Verify logout functionality', () => {  
     
      cy.login(data.username,data.password)
      cy.url().should('include', '/inventory.html');
      inventoryPage.verifyMenuIconVisible();
      inventoryPage.clickLogoutButton();
      loginPage.loginButtonVisible();
      cy.url().should('eq', data.url);
 

    })
  })

