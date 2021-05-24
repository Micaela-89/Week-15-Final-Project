const CartPage = require('../pageobjects/cart.page');
const LoginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');
const checkoutPage = require('../pageobjects/checkout.page');
const cartPage = require('../pageobjects/cart.page');
const menuPage = require('../pageobjects/menu.page');

describe('End to end tests for standard user - Successful purchasing process ', () => {
    beforeAll('Open ´Saucedemo´ page', () =>{
        LoginPage.open()
        browser.pause(2000)
    });
    it( 'Log in with standard user valid credentials', () => {
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(3000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('Sort products from Low to High price', () => {
        inventoryPage.sortByBtn.click()
        browser.pause(3000)
        inventoryPage.sortByPriceLotoHi.click()
        expect(inventoryPage.firstItem).toHaveTextContaining('Sauce Labs Onesie');
        expect(inventoryPage.secondItem).toHaveTextContaining('Sauce Labs Bike Light');
        expect(inventoryPage.thirdItem).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
        expect(inventoryPage.fourthItem).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
        expect(inventoryPage.fifthItem).toHaveTextContaining('Sauce Labs Backpack');
        expect(inventoryPage.sixthItem).toHaveTextContaining('Sauce Labs Fleece Jacket');
    })
    it('Select and add some items from the inventory page to the cart', () => {
        inventoryPage.addBackpack.click()
        inventoryPage.addBikeLight.click()
        inventoryPage.addBoltTShirt.click()
        browser.pause(3000)
        expect(CartPage.addedItemsBadge).toHaveText('3')
    })
    it('Verify the selected items are added in the cart page and user is enabled to continue to checkout page', () => {
        CartPage.shoppingCart.click()
        browser.pause(3000)
        expect(CartPage.itemBackpackTitle).toBeDisplayed()
        expect(CartPage.itemBackpackDesc).toBeDisplayed()
        expect(CartPage.priceBackpack).toBeDisplayed()
        expect(CartPage.itemBikeLightTitle).toBeDisplayed()
        expect(CartPage.itemBikeLightDesc).toBeDisplayed()
        expect(CartPage.priceBikeLight).toBeDisplayed()
        expect(CartPage.itemBoltTShirtTitle).toBeDisplayed()
        expect(CartPage.itemBoltTShirtDesc).toBeDisplayed()
        expect(CartPage.priceBoltTShirt).toBeDisplayed()
        CartPage.checkoutBtn.click()
    })
    it('Provide valid First Name, Last Name and Postal Code and continue to next step', () => {
        browser.pause(3000)
        expect(checkoutPage.title).toHaveText('CHECKOUT: YOUR INFORMATION')
        checkoutPage.firstName.setValue('Micaela')
        checkoutPage.lastName.setValue('Casais')
        checkoutPage.postCode.setValue('2000')
        browser.pause(2000)
        checkoutPage.continueBtn.click()
    })
    it('Verify the selected items are listed in the checkout page step 2', () => {
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        expect(checkoutPage.title).toHaveText('CHECKOUT: OVERVIEW')
        expect(cartPage.itemBackpackTitle).toBeDisplayed()
        expect(cartPage.itemBackpackDesc).toBeDisplayed()
        expect(cartPage.priceBackpack).toBeDisplayed()
        expect(CartPage.itemBikeLightTitle).toBeDisplayed()
        expect(CartPage. itemBikeLightDesc).toBeDisplayed()
        expect(CartPage.priceBikeLight).toBeDisplayed()
        expect(CartPage.itemBoltTShirtTitle).toBeDisplayed()
        expect(CartPage. itemBoltTShirtDesc).toBeDisplayed()
        expect(CartPage.priceBoltTShirt).toBeDisplayed()
        expect(checkoutPage.subtotal).toHaveTextContaining('55.97')
        expect(checkoutPage.total).toHaveTextContaining('60.45')
    })
    it('Cancel checkout to enable user to remove some products before continuing', () => {
        checkoutPage.cancelBtn.click()
        browser.pause(3000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        expect(inventoryPage.mainTitle).toHaveText('PRODUCTS')
        inventoryPage.removeBoltTShirt.click()
        expect(CartPage.addedItemsBadge).toHaveText('2')
    })
    it('Return to checkout ', () => {
        CartPage.shoppingCart.click()
        browser.pause(3000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(CartPage.itemBackpackTitle).toBeDisplayed()
        expect(CartPage.itemBackpackDesc).toBeDisplayed()
        expect(CartPage.priceBackpack).toBeDisplayed()
        expect(CartPage.itemBikeLightTitle).toBeDisplayed()
        expect(CartPage. itemBikeLightDesc).toBeDisplayed()
        expect(CartPage.priceBikeLight).toBeDisplayed()
        CartPage.checkoutBtn.click()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
    })
    it('Confirm checkout ', () => {
        browser.pause(3000)
        expect(checkoutPage.title).toHaveText('CHECKOUT: YOUR INFORMATION')
        checkoutPage.firstName.setValue('Micaela')
        checkoutPage.lastName.setValue('Casais')
        checkoutPage.postCode.setValue('2000')
        browser.pause(2000)
        checkoutPage.continueBtn.click()
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        expect(checkoutPage.title).toHaveText('CHECKOUT: OVERVIEW')
        expect(checkoutPage.subtotal).toHaveTextContaining('39.98')
        expect(checkoutPage.total).toHaveTextContaining('43.18')
        checkoutPage.finishBtn.click()
        browser.pause(3000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
    })
    it('Once purchase process is finished, go back to home page and log out',() => {

        inventoryPage.backToProductsBtn.click()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(2000)
        menuPage.menuBtn.click()
        menuPage.logOutBtn.click()
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/')
    })
})
