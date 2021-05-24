const CartPage = require('../pageobjects/cart.page');
const LoginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');

describe('Shopping Cart Link', () => {
    beforeAll('Open browser and log in with standard user', () =>{
        LoginPage.open();
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(3000)
    })
    it('Shopping Cart link is enabled and redirect to the Cart page', () => {
        CartPage.shoppingCart.click()
        browser.pause(3000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        expect(CartPage.cartTitle).toHaveText('YOUR CART')
        })
})
describe('Continue Shopping button', () => {
    it('Continue Shopping button is enabled and redirect back to inventory page', () => {
        CartPage.open()
        CartPage.contShopBtn.click()

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})
describe('Verify the selected items are added to the cart page and can be removed', () => {
    it('The items selected from inventory page should be listed in the cart page', () => {
        inventoryPage.open()
        browser.pause(3000)
        inventoryPage.addBackpack.click()
        inventoryPage.addBikeLight.click()
        CartPage.shoppingCart.click()
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        browser.pause(3000)

        expect(CartPage.itemBackpackTitle).toBeDisplayed()
        expect(CartPage.itemBackpackDesc).toBeDisplayed()
        expect(CartPage.priceBackpack).toBeDisplayed()
        expect(CartPage.itemBikeLightTitle).toBeDisplayed()
        expect(CartPage. itemBikeLightDesc).toBeDisplayed()
        expect(CartPage.priceBikeLight).toBeDisplayed()
    })
    it('The items listed in the cart page should be removed when clicking on the ´Remove´ button', () => {
        browser.pause(3000)
        inventoryPage.removeBackpack.click()
        inventoryPage.removeBikeLight.click()
        expect(CartPage.itemBackpackTitle).not.toBeDisplayed()
        expect(CartPage.itemBikeLightTitle).not.toBeDisplayed()
        expect(CartPage.removedItems).toExist()
    })
})
describe('Checkout button', () => {
    it('Checkout button is enabled and redirect to the checkout page', () => {
        CartPage.checkoutBtn.click()
        browser.pause(3000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
    })
})
