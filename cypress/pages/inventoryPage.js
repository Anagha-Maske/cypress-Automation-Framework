class inventoryPage
{
    menuIconSelector="#react-burger-menu-btn";
    productSelector=".title";
    appLogoSelector=".app_logo";
    cartIconSelector="#shopping_cart_container";
    logoutButtonSelector="#logout_sidebar_link";
    sortDropdownselector=".product_sort_container";
    productCardsLocator=".inventory_item";
    productNamesLocator=".inventory_item_name";
    productImagesLocator="a .inventory_item_img";
    productsPriceLocator=".inventory_item_price";
    addtocartButtonLocator="button.btn_inventory";
    productTitleLocator=".inventory_details_name";
    backToProductsLocator="#back-to-products";
    inventoryContainerLocator="#inventory_container";
    productDescriptionLocator=".inventory_details_desc";
    cartBadgelocator=".shopping_cart_badge";
    removeBtnLocator=".btn_secondary";
    cartItemLocator=".cart_item"

    

    verifyAppLogoVisible(){
       return cy.get(this.appLogoSelector).should("be.visible").contains("Swag Labs");

    }
    verifyMenuIconVisible(){
       return cy.get(this.menuIconSelector).should("be.visible").click({force:true})
    }
    verifyProductsTitleVisible(){
       return cy.get(this.productSelector).should("be.visible").contains("Products")
    }
    verifyCartIconVisible(){
    return cy.get(this.cartIconSelector).should("be.visible")
    }
    clickLogoutButton(){
        return cy.get(this.logoutButtonSelector).click()
    }
    verifyAllProductsDisplayed(){
      return cy.get(this.productCardsLocator).should('have.length',6)
    }
    verifyProductNamesVisible(){
      cy.get(this.productNamesLocator).should('have.length',6)
      .each(($product=>{
         cy.wrap($product).should('be.visible')
         .and('not.be.empty')
      }))
    }
    verifyProductImagesVisible(){
      cy.get(this.productImagesLocator).should('have.length',6)
      .each(($img)=>{
         cy.wrap($img).should('be.visible')
      })
    }
    verifyProductsPriceVisible(){
      cy.get(this.productsPriceLocator).should('have.length',6)
      .each(($price)=>{
         cy.wrap($price).should('be.visible').invoke('text')
         .should('match',/^\$\d+\.\d{2}$/)
      })
    }
    verifyAddtoCartButtonVisible(){
      cy.get(this.addtocartButtonLocator).should('have.length',6)
      .each(($btn)=>{
         cy.wrap($btn).should('be.visible').contains('Add to cart')
      })
    }
    verifyProductDetailsPage()
    {
      cy.get(this.productNamesLocator).first().invoke('text')
      .then((selectedProduct)=>{
         cy.get(this.productNamesLocator).first().click();
         cy.url().should("include","/inventory-item.html");
         cy.get(this.productTitleLocator)
         .should('be.visible')
         .and('have.text',selectedProduct)
      });
   
    }
    verifyBackToProdcuts()
    {
      cy.get(this.productNamesLocator).first().click();
      cy.url().should("include","/inventory-item.html");
      cy.get(this.backToProductsLocator)
         .should('be.visible')
         .click();
      cy.url().should("include","/inventory.html");
      cy.get(this.inventoryContainerLocator).should('be.visible')
      

    }
    verifyProdcutDescription()
    {
      cy.get(this.productNamesLocator).first().click();
      cy.url().should("include","/inventory-item.html");
      cy.get(this.productDescriptionLocator)
      .should('be.visible')
      .and('not.be.empty')

    }
    verifyAddOneProductToCart(){
      cy.get(this.addtocartButtonLocator).first().click();
      cy.get(this.cartBadgelocator)
      .should('be.visible')
      .and('have.text','1')

    }
    verifyAddMultipleProductsToCart(){
      cy.get(this.addtocartButtonLocator)
      .eq(0).click();
      cy.get(this.addtocartButtonLocator)
      .eq(1).click();
      cy.get(this.addtocartButtonLocator)
      .eq(4).click();
      cy.get(this.cartBadgelocator)
      .should('be.visible')
      .and('have.text',"3")
    }
    verifyRemoveProductFromInventoryPage(){
      cy.get(this.addtocartButtonLocator)
      .eq(0).click();
      cy.get(this.addtocartButtonLocator)
      .eq(1).click();
      cy.get(this.addtocartButtonLocator)
      .eq(4).click();
      cy.get(this.cartBadgelocator)
      .should('be.visible')
      .and('have.text',"3")
      cy.get(this.removeBtnLocator).first().click()
      cy.get(this.cartBadgelocator)
      .should('be.visible')
      .and('have.text',"2")
    }
    verifyRemoveProductFromCartPage(){
      cy.get(this.addtocartButtonLocator)
      .eq(0).click();
      cy.get(this.addtocartButtonLocator)
      .eq(1).click();
      cy.get(this.addtocartButtonLocator)
      .eq(4).click();
      cy.get(this.cartBadgelocator)
      .should('be.visible')
      .and('have.text',"3");
      cy.get(this.cartIconSelector).click();
      cy.get(this.removeBtnLocator).first().click();
      cy.get(this.cartBadgelocator)
      .should('be.visible')
      .and('have.text','2');
      
    }
    verifyRemoveBtnText()
    {
      cy.get(this.addtocartButtonLocator).first().click()
      cy.get(this.removeBtnLocator).should('be.visible')
      .and('have.text','Remove')
    }
    verifyCartRetainsProductsAfterNavigation(){
      cy.get(this.addtocartButtonLocator).first().click();
      cy.get(this.cartBadgelocator).should('have.text','1');
      cy.get(this.productNamesLocator).first().click();
      cy.get(this.cartBadgelocator).should('have.text','1');
      cy.get(this.backToProductsLocator).click();
      cy.get(this.cartIconSelector).click();
      cy.get(this.cartItemLocator).should('have.length',1)



    }
}
export default new inventoryPage();
