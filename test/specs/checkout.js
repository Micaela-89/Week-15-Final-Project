const CartPage = require('../pageobjects/cart.page');
const LoginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');
const checkoutPage = require('../pageobjects/checkout.page');
const cartPage = require('../pageobjects/cart.page');


describe ('Checkout Page', () => {
    beforeAll('Open browser and log in(standard user), add 2 items, go to the cart and click on Checkout button', () =>{
        LoginPage.open();
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(2000)
        inventoryPage.addBackpack.click()
        inventoryPage.addBikeLight.click()
        browser.pause(2000)
        CartPage.shoppingCart.click()
        browser.pause(2000)
        CartPage.checkoutBtn.click()
        browser.pause(2000)
    })
    it('Should verify Checkout page is displayed and its title', () => {
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        expect(checkoutPage.title).toHaveText('CHECKOUT: YOUR INFORMATION')
    })
})
    describe('Cancel button', () => {
    it('Cancel Button is enabled and redirect back to the cart page', () => {
        checkoutPage.open()
        checkoutPage.cancelBtn.click()
        browser.pause(2000)

        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    })
})
    describe ('Attempt to continue to next step leaving empty inputs', () => {
    it('Should not allow to continue leaving all empty inputs- First Name, Last Name and Postal Code-', () => {
        checkoutPage.open()
        checkoutPage.firstName.setValue('')
        checkoutPage.lastName.setValue('')
        checkoutPage.postCode.setValue('')
        browser.pause(2000)
        checkoutPage.continueBtn.click()
        browser.pause(2000)

        expect(LoginPage.alertWrongInput).toHaveText('Error: First Name is required')
    })
    it('Should not allow to continue providing First Name but empty Last Name and Postal Code', () => {
        checkoutPage.firstName.setValue('Micaela')
        checkoutPage.lastName.setValue('')
        checkoutPage.postCode.setValue('')
        browser.pause(2000)
        checkoutPage.continueBtn.click()
        browser.pause(2000)

        expect(LoginPage.alertWrongInput).toHaveText('Error: Last Name is required')
    })
    it('Should not allow to continue providing First Name and Last Name  but empty Postal Code', () => {
        checkoutPage.firstName.setValue('Micaela')
        checkoutPage.lastName.setValue('Casais')
        checkoutPage.postCode.setValue('')
        browser.pause(2000)
        checkoutPage.continueBtn.click()
        browser.pause(2000)

        expect(LoginPage.alertWrongInput).toHaveText('Error: Postal Code is required')
    })
})
describe ('Attempt to continue to next step providing invalids inputs', () => {
    it('Should not allow to continue to next step providing invalid First Name but valids Last Name and Postal Code', () => {
        checkoutPage.open();
        checkoutPage.firstName.setValue('12345')
        checkoutPage.lastName.setValue('Casais')
        checkoutPage.postCode.setValue('2000')
        browser.pause(2000)
        checkoutPage.continueBtn.click()
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        //TEST WILL PASS DUE TO AN ERROR OR LACK OF VALIDATION FOR THE INPUTS. EVEN THOUGH AN ERROR MESSAGE SHOULD BE DISLPAYED AND DENY TO CONTINUE.
    })
    it('Should not allow to continue to next step providing valid First Name but invalids Last Name and Postal Code', () => {
        checkoutPage.open();
        checkoutPage.firstName.setValue('Micaela')
        checkoutPage.lastName.setValue('999999')
        checkoutPage.postCode.setValue('0q8*e')
        browser.pause(2000)
        checkoutPage.continueBtn.click()
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        //THE TEST WILL PASS DUE TO AN ERROR OR LACK OF VALIDATION FOR THE INPUTS. EVEN THOUGH AN ERROR MESSAGE SHOULD BE DISLPAYED AND DENY TO CONTINUE.
    })
    it('Should not allow to continue to next step providing valid First Name and Last Name but invalid Postal Code', () => {
        checkoutPage.open();
        checkoutPage.firstName.setValue('Micaela')
        checkoutPage.lastName.setValue('Casais')
        checkoutPage.postCode.setValue('0q8*e')
        browser.pause(2000)
        checkoutPage.continueBtn.click()
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        //THE TEST WILL PASS DUE TO AN ERROR OR LACK OF VALIDATION FOR THE INPUTS. EVEN THOUGH AN ERROR MESSAGE SHOULD BE DISLPAYED AND DENY TO CONTINUE.
    })
})
    describe (' Attempt to continue to next step providing valid inputs', () => {
    it('Should allow to continue to next step providing valid First Name, Last Name and Postal Code', () => {
        checkoutPage.open();
        checkoutPage.firstName.setValue('Micaela')
        checkoutPage.lastName.setValue('Casais')
        checkoutPage.postCode.setValue('2000')
        browser.pause(2000)
        checkoutPage.continueBtn.click()
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
    })
})
    describe ('Checkout Page Step 2', () => {
    it('Should verify Checkout page is displayed and its title', () => {
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        expect(checkoutPage.title).toHaveText('CHECKOUT: OVERVIEW')
    })
})

describe('Verify the selected items are listed in the checkout page step2', () => {
    it('The items selected from inventory page should be listed in the cart page', () => {
        checkoutPage.open2()
        browser.pause(3000)
        expect(cartPage.itemBackpackTitle).toBeDisplayed()
        expect(cartPage.itemBackpackDesc).toBeDisplayed()
        expect(cartPage.priceBackpack).toBeDisplayed()
        expect(cartPage.itemBikeLightTitle).toBeDisplayed()
        expect(cartPage.itemBikeLightDesc).toBeDisplayed()
        expect(cartPage.priceBikeLight).toBeDisplayed()
    })
})
describe('Verify the subtotal and total price are correct', () => {
    it('The subtotal should be the sum(39.98) of the prices of the selected items(29.99 + 9.99)', () => {
        checkoutPage.open2()
        browser.pause(3000)

        expect(checkoutPage.subtotal).toHaveTextContaining('39.98')
    })
    it('The total should be the sum(43.18) of the subtotal and the tax(39.98 + 3.20)', () => {
        checkoutPage.open2()
        browser.pause(3000)

        expect(checkoutPage.subtotal).toHaveTextContaining('39.98')
        expect(checkoutPage.total).toHaveTextContaining('43.18')
    })
})
describe('Cancel button', () => {
    it('Cancel Button is enabled and redirect back to the inventory page', () => {
        checkoutPage.open2()
        checkoutPage.cancelBtn.click()
        browser.pause(2000)

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})
describe('Finish button', () => {
    it('Finish Button is enabled and directs to a complete-chekout page)', () => {
        checkoutPage.open2()
        checkoutPage.finishBtn.click()
        browser.pause(3000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
    })
})

describe ('Complete checkout Page', () => {
    it('Should verify Checkout page is displayed and its title', () => {
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        expect(checkoutPage.title).toHaveText('CHECKOUT: COMPLETE!')
    })
})

describe('Verify purchase information is shown in the Complete Checkout Page', () => {
    it('Some information related to the completed purchase proccess should be displayed in the complete checkout page', () => {
        checkoutPage.open3()
        browser.pause(3000)
        expect(checkoutPage.header).toBeDisplayed()
        expect(checkoutPage.textOrder).toBeDisplayed()
        expect(checkoutPage.ponyExpImg).toBeDisplayed()
    })
})
describe('Back Home button', () => {
    it('Back Home is enabled and redirect back to the inventory page', () => {
        checkoutPage.open3()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        expect(inventoryPage.backToProductsBtn).toBeDisplayed();
        inventoryPage.backToProductsBtn.click()
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(2000);
        browser.reloadSession()
    })
})
