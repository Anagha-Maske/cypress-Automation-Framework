describe('Api chaining',()=>{
    
        before(()=>{
            cy.fixture('authData').then((authdata) => {

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

    
     it("POST Request",()=>{
        cy.request({method:"POST",
                    url:`${Cypress.env("apiBaseUrl")}/booking`,
                    body:{
                            firstname:"Anagha",
                            lastname:"maske",
                            totalprice: 500,
                            depositpaid: true,
                            bookingdates: {
                                 checkin: "2026-08-20",
                                 checkout: "2026-08-25"
        },
                             additionalneeds: "Breakfast"
                    }
                    
        }).then((response)=>{
            console.log(response.body);
            expect(response.status).to.eq(200);
            const bookingid=response.body.bookingid;
            cy.log(`Created Booking ID:${bookingid}`);
            expect(bookingid).to.exist;
            cy.request({method:"PUT",
                        url:`${Cypress.env('apiBaseUrl')}/booking/${bookingid}`,
                        headers:{
                            Cookie:`token=${Cypress.env('authToken')}`
                        },
                        body:{
                            firstname:"Anagha updated",
                            lastname:"anavane",
                            totalprice: 1000,
                            depositpaid: true,
                            bookingdates: {
                                 checkin: "2026-08-21",
                                 checkout: "2026-08-25"
        },
                             additionalneeds: "lunch"
                    }
            }).then((response)=>{
                            cy.log(response.body);
                            expect(response.status).to.eq(200);
                             expect(response.body.firstname).to.eq('Anagha updated');
                            expect(response.body.lastname).to.eq('anavane');
                            expect(response.body.totalprice).to.eq(1000);
                            expect(response.body.depositpaid).to.eq(true);
                             expect(response.body.bookingdates.checkin).to.eq("2026-08-21");
                             expect(response.body.bookingdates.checkout).to.eq("2026-08-25");
                            expect(response.body.additionalneeds).to.eq("lunch");
        cy.request({method:"GET",
        url:`${Cypress.env('apiBaseUrl')}/booking/${bookingid}`
        }).then((response)=>{
                            cy.log(response.body);
                            expect(response.status).to.eq(200);
                             expect(response.body.firstname).to.eq('Anagha updated');
                            expect(response.body.lastname).to.eq('anavane');
                            expect(response.body.totalprice).to.eq(1000);
                            expect(response.body.depositpaid).to.eq(true);
    })
    cy.request({method:"DELETE",
         url:`${Cypress.env('apiBaseUrl')}/booking/${bookingid}`,
         headers:{
             Cookie: `token=${Cypress.env('authToken')}`
         }
    }).then((response)=>{
         cy.log(`Delete status: ${response.status}`);
         expect(response.status).to.eq(201);
    })
    cy.request({method:"GET",
        url:`${Cypress.env('apiBaseUrl')}/booking/${bookingid}`,
         failOnStatusCode: false
        }).then((response)=>{
                            cy.log(`Final GET status: ${response.status}`);
                            expect(response.status).to.eq(404);
            })
        })
    })
   
        

        })
    })