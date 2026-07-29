import inventoryPage from "../pages/inventoryPage";

describe('inventory Test case suit',()=>{
     let data;  
    beforeEach (()=>{
         cy.visit('/');
        cy.fixture('userdata').then(userdata=>{
            data=userdata;
            cy.login(data.username,data.password)
        });
       });


    it ('TC_I1 Verify all products displayed',()=>{
        inventoryPage.verifyAllProductsDisplayed();
    })

    it ('TC_I2 verify all products name diaplayed',()=>{
        inventoryPage.verifyProductNamesVisible();
    })
    it ('TC_I3 verify all product images are diaplayed',()=>{
        inventoryPage.verifyProductImagesVisible();
    })

    it ('TC_I4 verify all product prices are diaplayed',()=>{
        inventoryPage.verifyProductsPriceVisible();
    })

     it ('TC_I5 verify all product addtocart button are diaplayed',()=>{
        inventoryPage.verifyAddtoCartButtonVisible();
    })
     it('TC_I6 verify product details page',()=>{
        inventoryPage.verifyProductDetailsPage();
    })
    it('TC_I7 verify Back to Products',()=>{
        inventoryPage.verifyBackToProdcuts();
    })
    it('TC_I8 verify Products description',()=>{
        inventoryPage.verifyProdcutDescription();
    })
     it('TC_I9 Add one product to cart',()=>{
        inventoryPage.verifyAddOneProductToCart();
    })
    it('TC_I10 Add multiple products to cart',()=>{
        inventoryPage.verifyAddMultipleProductsToCart();
    })
    it('TC_I11 Remove product from inventory page',()=>{
        inventoryPage.verifyRemoveProductFromInventoryPage();
    })
    it('TC_I12 Remove product from cart page',()=>{
        inventoryPage.verifyRemoveProductFromCartPage();
    })
    it('TC_I13 Verify "Remove" button after adding',()=>{
        inventoryPage.verifyRemoveBtnText();
    })
     it('TC_I14 Verify cart retains products after navigation',()=>{
        inventoryPage.verifyCartRetainsProductsAfterNavigation();
    })
    
})