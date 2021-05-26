const LoginPage = require('../pageobjects/login.page');
const footerPage = require('../pageobjects/footer.page');

describe('Testing Social Network Links', () => {
    beforeAll('Open browser and log in with standard user', () =>{
        LoginPage.open()
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(3000)
    })
    it('Social Media buttons should be displayed at the footer', () => {
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        expect(footerPage.twitterBtn).toBeDisplayed()
        expect(footerPage.facebookBtn).toBeDisplayed()
        expect(footerPage.linkedInBtn).toBeDisplayed()
    })
    it('Social media buttons should have the respective link', () => {
        expect(footerPage.twitterLink).toHaveLinkContaining('https://twitter.com/saucelabs')
        expect(footerPage.facebookLink).toHaveLinkContaining('https://www.facebook.com/saucelabs')
        expect(footerPage.linkedInLink).toHaveLinkContaining('https://www.linkedin.com/company/sauce-labs/')
    })
    it('Clicking on the Twitter button should redirect to the SwagLabs Twitter page', () => {
        footerPage.twitterBtn.click()
        browser.pause(3000)
        browser.switchWindow('https://twitter.com/saucelabs')
        expect(browser).toHaveUrl('https://twitter.com/saucelabs')
        browser.closeWindow()
        browser.switchWindow('https://www.saucedemo.com/inventory.html')
    })
        it('Clicking on the Facebook button should redirect to the SwagLabs Facebook page', () => {
        footerPage.facebookBtn.click()
        browser.pause(3000)
        browser.switchWindow('https://www.facebook.com/saucelabs')
        expect(browser).toHaveUrl('https://www.facebook.com/saucelabs')
        browser.closeWindow()
        browser.switchWindow('https://www.saucedemo.com/inventory.html')
    })
        it('Clicking on the LinkedIn button should redirect to the SwagLabs Linkedin page', () => {
        footerPage.linkedInBtn.click()
        browser.pause(3000)
        browser.switchWindow('linkedin.com')
        browser.pause(3000)
        expect(browser).toHaveUrlContaining('https://www.linkedin.com')
        //expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/')
    })
/*WHEN CLICKING ON THE LINKEDIN BUTTON, SOMETIMES LINKEDIN REDIRECTS  CORRECTLY TO 'https://www.linkedin.com/company/sauce-labs/'
AND SOMETIMES DETECTS THERE IS NO USER LOGGED IN, SO REDIRECTS TO THE URL:'https://www.linkedin.com/authwall?...'
THAT IS WHY THE TEST WON´T PASS IF I PUT THE CORRECT THING TO BE TESTED: "expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/')*/
})
