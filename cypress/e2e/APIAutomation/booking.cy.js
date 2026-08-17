describe("valide the RESTfull APIs",()=>{
    it ("GET Method to check Booking",()=>{

        cy.request({method:"GET" ,
                    url :`${Cypress.env("apiBaseUrl")}/booking/1`
        }).then((response)=>{
           console.log(response.body);
           expect(response.status).to.eq(200);
          
           
        
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
            })
        })
    })
})