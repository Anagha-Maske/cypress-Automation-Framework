# Cypress Automation Framework

## Tech Stack

- Cypress
- JavaScript
- Page Object Model (POM)
- Fixtures
- Custom Commands
- Mochawesome Reporter
- GitHub

## Features

- Login Automation
- Inventory Automation
- API Testing (Coming Soon)
- Reusable Page Objects
- Data Driven Testing

## Project Structure
cypress/
├── e2e/
│   ├── APIAutomation/
│   │   ├── auth.cy.js
│   │   ├── booking.cy.js
│   │   ├── dayOne.cy.js
│   │   └── dayTwo.cy.js
│   │
│   └── UIAutomation/
│       ├── cart.cy.js
│       ├── inventory.cy.js
│       └── login.cy.js
│
├── fixtures/
├── pages/
└── support/

## Run Project

npm install

npx cypress open

or

npx cypress run
