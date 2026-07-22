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
    addtocartButtonLocator="button.btn_inventory"

    

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
}
export default new inventoryPage();