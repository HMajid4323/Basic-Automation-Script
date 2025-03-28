# Playwright Login Test for SauceDemo

This project contains an automated test using [Playwright](https://playwright.dev/) to verify user login functionality on [SauceDemo](https://www.saucedemo.com/v1/).


## Prerequisites

Ensure you have the following installed:
- **Node.js** (LTS recommended)
- **Playwright** (`@playwright/test` package)

## Installation

Clone the repository and install dependencies:

```sh
git clone <repository-url>
cd <project-folder>
npm install
npx playwright install


## Running Tests

Execute tests with these commands:

```sh
# Run all tests in headless mode (default)
npm test

# Run tests with UI (headed mode)
npm run test:headed

# Run specific test file
npx playwright test tests/login.spec.js

# Generate HTML test report
npx playwright show-report



