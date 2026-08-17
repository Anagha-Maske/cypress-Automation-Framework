describe("Authentication API",()=>{
    it ("Generate Authentication Token",()=>{
        cy.fixture('authData').then((authdata)=>{
            cy.request({method:"POST",
                        url:`${Cypress.env('apiBaseUrl')}/auth`,
                        body:authdata

            }).then((Response)=>{
                expect(Response.status).to.eq(200);
                console.log(Response.body);
                const token=Response.body.token;
                Cypress.env('authToken',token)
                cy.log(`The generated Token:${token}`);
                cy.log('Authentication token generated successfully')
                expect(token).to.exist;
            })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

        })



    })

})