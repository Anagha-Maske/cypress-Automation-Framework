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
    
})