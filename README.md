# 'BECOME A QA AUTOMATION' - Week 15 - Final Project.

This project consists of automated UI tests based on WebdriverIO framework for Saucelab's testing webpage. (https://www.saucedemo.com/)

## Technology stack
* Node.js (At least version 12 is necessary -  Node.js/docs )
* WebDriver IO (WebDriverIO/docs)
* Visual Studio Code (or other code editor is necessary)
* Google chrome (preferred)

## Description
**The tests were made based on WebdriverIO, on Jasmine framework, in synchronous mode.**

It includes tests for:
- The login page (with empty inputs, invalid and valid credentials for all users).

***With a standard user session:***
- The inventory page (checking the items description, adding items to cart from different parts of the webpage, removing them, sorting products by price or name, etc).
- The menu button( all buttons: All items, About, Reset App State and Log out, etc).
- The footer (Social media links)
- The cart page (checking added items are listed correctly, items can be removed,and user can continue to checkout)
- The checkout page (checking out with valid and invalid credentials)
- An End to End Test (Login, sorting products, adding them to the cart, cancelling checkout to remove some items, checking out and log out).

*All tests are oganized by corresponding Describes and Its for a better understanding.*

*Different 'PageObject' files were created for each test file.*



## Installation 

**After downloading the project from this repository, the following procedures are needed before tests can be run:**

 (You should use the following commands, either on the git or on the VS console)

* Run *Git Bash* on the project's folder (could be other terminal)
* Run *npm init* 
* Run *code .* (to open the files in Visual Studio Code)
* Run *npm install* (to install every dependency of the package.json)
* Run *npx wdio run ./wdio.conf.js*  to run the tests.

The package.Json should contain the following script:

"scripts": {
  "test": "npx wdio run ./wdio.conf.js"


## About the tests 

As the instruction of this project specified that all tests should pass, and the webpage have some bugs, if some tests would be written in the right way, those tests would not pass. In those cases, I commented at the end of the test explaining they're not well written because the page doesn't return the expected behavior, and which would be the correct way to write that test.

*For example:*

**In menu.js:** The ´Reset App State´ button should clear the cart and enable to select the items again, so the 'Remove' buttons of products shouldn't be displayed because this means that the products are still added to the cart. The  'Remove' buttons should change to 'Add to Cart' button.

**In checkout.js:** when 'attempting to continue to next step providing invalids inputs', user should not be able to continue. The checkout form is sent when clicking on the 'Continue' button, even though invalid inputs are provided for name, last name and postal code. I commented that this test pass even though an error message should be displayed and user should be denied to continue to checkout.
Also when 'Should not allow user to checkout when the cart is empty' the user is redirected to the 'checkout' page after pressing the 'checkout' button, even though the cart is empty. This is a bug, and test should fail.

**In footer.js:**  when 'clicking on linkedin buttons should redirect to the SwagLabs Linkedin page': by running the test several times, I noticed that sometimes it redirects correctly to  'https://www.linkedin.com/company/sauce-labs/', but other times LinkedIn detects the user is not logged in so redirects to another url (https://www.linkedin.com/authwall?...') so user can register or log in. This is why the test would not pass if written in the correct way, which would be: "expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/'). I left that commented and edited it to:  "expect(browser).toHaveUrlContaining('https://www.linkedin.com')" so that the test pass.






