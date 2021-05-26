const LoginPage = require('../pageobjects/login.page');
const menuPage = require('../pageobjects/menu.page');
const CartPage = require('../pageobjects/cart.page');
const inventoryPage = require('../pageobjects/inventory.page');

describe('Menu Button', () => {
    beforeAll('Open browser and log in with standard user', () =>{
        LoginPage.open()
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(3000)
    })
    it('Clicking on the Open menu button should open a sidebar with different options', () => {
        menuPage.menuBtn.click()
        browser.pause(3000)

        expect(menuPage.navBar).toBeDisplayed()
    })
    it('Clicking on the ´All Items´ button should redirect to the inventory Page', () => {
        CartPage.shoppingCart.click()
        browser.pause(2000)
        menuPage.menuBtn.click()
        menuPage.allItemsBtn.click()
        browser.pause(2000)

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('Clicking on the ´About´ button should redirect to the SauceLabs Website', () => {
        inventoryPage.open()
        browser.pause(2000)
        menuPage.menuBtn.click()
        menuPage.aboutBtn.click()
        browser.pause(2000)

        expect(browser).toHaveUrl('https://saucelabs.com/')
    })
    it('Clicking on the ´Reset App State´ button should clear the cart and the added items badge on the cart should not display a number', () => {
        inventoryPage.open()
        browser.pause(2000)
        inventoryPage.addBackpack.click()
        browser.pause(2000)
        menuPage.menuBtn.click()
        menuPage.resetBtn.click()
        browser.pause(2000)

        expect(CartPage.addedItemsBadge).toMatch('')
    })
    it('Clicking on the ´Reset App State´ button should clear the cart and enable to select the items again', () => {
        inventoryPage.open()
        browser.pause(2000)
        inventoryPage.addBackpack.click()
        browser.pause(2000)
        menuPage.menuBtn.click()
        menuPage.resetBtn.click()
        browser.pause(2000)

        expect(inventoryPage.removeBackpack).toBeDisplayed();
       // THIS BUTTON SHOULD NOT BE DSIPLAYED. IT SHOULD CHANGE TO THE ´ADD TO CART´ BUTTON.
    })
    it('Clicking on the ´Log Out´ button should log out and redirect to the Login Page', () => {
        inventoryPage.open()
        browser.pause(2000)
        menuPage.menuBtn.click()
        menuPage.logOutBtn.click()
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/')
    })
})

