describe("Api chaining for bookingd",()=>{
before("Auth generate",()=>{
    cy.fixture('authData').then(auth=>{
    cy.request({method:"POST",
                url:`${Cypress.env('apiBaseUrl')}/auth`,
                body: auth
    }).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body.token).to.exist;
        const token=response.body.token;
        Cypress.env('authToken1',token)
        cy.log(token);
        
    }) 
    })
})
    it("API chaining for CRUD operation",()=>{
        cy.request({method:"POST",
            url:`${Cypress.env('apiBaseUrl')}/booking`,
            headers:{
                    Cookie:`token=${Cypress.env('authToken1')}`
            },
            body:{
                firstname:"DAY2_Anagha",
                lastname:"DAY2_maske",
                totalprice: 500,
                depositpaid: true,
                bookingdates: {
                        checkin: "2026-08-20",
                        checkout: "2026-08-25"
        },
                additionalneeds: "Breakfast"

            }
        }).then((response)=>{
                expect(response.status).to.eq(200);
                console.log(response.body);
                expect(response.body.bookingid).to.exist;
                const bookingid=response.body.bookingid;
                cy.log(bookingid);
                expect(response.body.booking.firstname).to.eq("DAY2_Anagha");
                expect(response.body.booking.lastname).to.eq("DAY2_maske");
                expect(response.body.booking.totalprice).to.eq(500);
                expect(response.body.booking.depositpaid).to.eq(true);
                expect(response.body.booking.additionalneeds).to.eq("Breakfast");
                
                cy.request({method:'PUT',
                    url:`${Cypress.env('apiBaseUrl')}/booking/${bookingid}`,
                   //failOnStatusCode: false,
                    headers:{
                        Cookie:`token=${Cypress.env('authToken1')}`
                       

                    },
                    body:{
                            firstname:"DAY2_Anagha_updated",
                            lastname:"DAY2_maske_updated",
                            totalprice: 1500,
                            depositpaid: true,
                            bookingdates: {
                                checkin: "2026-08-20",
                                 checkout: "2026-08-25"
        },
                        additionalneeds: "Dinner"
                    }
                }).then((response)=>{
                 expect(response.status).to.eq(200);
                console.log(response.body);
                expect(response.body.firstname).to.eq("DAY2_Anagha_updated");
                expect(response.body.lastname).to.eq("DAY2_maske_updated");
                expect(response.body.totalprice).to.eq(1500);
                expect(response.body.depositpaid).to.eq(true);
                expect(response.body.additionalneeds).to.eq("Dinner");
                })
                cy.request({method:'GET',
                    url:`${Cypress.env('apiBaseUrl')}/booking/${bookingid}`,

                }).then((response)=>{
                    expect(response.status).to.eq(200);
                console.log(response.body);
                expect(response.body.firstname).to.eq("DAY2_Anagha_updated");
                expect(response.body.lastname).to.eq("DAY2_maske_updated");
                expect(response.body.totalprice).to.eq(1500);
                expect(response.body.depositpaid).to.eq(true);
                expect(response.body.additionalneeds).to.eq("Dinner");
                })
                cy.request({method:"DELETE",
                    url:`${Cypress.env('apiBaseUrl')}/booking/${bookingid}`,
                    
                    headers:{
                        Cookie:`token=${Cypress.env('authToken1')}`
                    }
                }).then((response)=>{

                        expect(response.status).to.eq(201);
                })
                cy.request({method:'GET',
                    url:`${Cypress.env('apiBaseUrl')}/booking/${bookingid}`,
                    failOnStatusCode:false,
                }).then((response)=>{
                    expect(response.status).to.eq(404);
                
                })
                
        })
    
    })
})