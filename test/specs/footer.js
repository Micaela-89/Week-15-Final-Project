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
    it('Clicking on the social media buttons should redirect to to the correct website', () => {
        footerPage.twitterBtn.click()
        browser.pause(3000)
        browser.switchWindow('https://twitter.com/saucelabs')
        expect(browser).toHaveUrl('https://twitter.com/saucelabs')
        browser.closeWindow()
        browser.switchWindow('https://www.saucedemo.com/inventory.html')

        footerPage.facebookBtn.click()
        browser.pause(3000)
        browser.switchWindow('https://www.facebook.com/saucelabs')
        expect(browser).toHaveUrl('https://www.facebook.com/saucelabs')
        browser.closeWindow()
        browser.switchWindow('https://www.saucedemo.com/inventory.html')

        footerPage.linkedInBtn.click()
        browser.pause(3000)
        browser.switchWindow('linkedin.com')
        expect(browser).not.toHaveUrl('https://www.linkedin.com/company/sauce-labs/')
        expect(browser).toHaveUrlContaining('https://www.linkedin.com')
//WHEN CLICKING ON THE LINKEDIN BUTTON, LINKEDIN DETECTS THER IS NO USER LOGGED IN, SO REDIRECTS TO THE URL:'https://www.linkedin.com/authwall?trk=ripf&trkInfo=AQ...'
//THAT IS WHY THE TEST WON´T PASS IF I PUT THE CORRECT THING TO BE TESTED: "expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/')
    })
})
