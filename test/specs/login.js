const LoginPage = require('../pageobjects/login.page');

describe('Login Form button', () => {
    it('Login button is enabled', () => {
        LoginPage.open()
        browser.pause(3000)
        expect(LoginPage.submitBtn).toExist;
        expect(LoginPage.submitBtn).toBeClickable;
    })
})
describe ('Attempt to log in leaving empty inputs', () => {
    beforeEach('Open browser', () =>{
        LoginPage.open();
    })
    it('Should deny access leaving both empty inputs', () => {
            LoginPage.username.setValue('')
            LoginPage.password.setValue('')
            LoginPage.submit()
            browser.pause(5000);

            expect(LoginPage.alertWrongInput).toHaveText('Epic sadface: Username is required')
        })
    it('Should deny access providing valid username but empty password', () => {
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('')
        LoginPage.submit()
        browser.pause(5000);

        expect(LoginPage.alertWrongInput).toHaveText('Epic sadface: Password is required')
    })
    it('Should deny access with empty username and valid password', () => {
        LoginPage.username.setValue('')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(5000);

        expect(LoginPage.alertWrongInput).toHaveText('Epic sadface: Username is required')
    })
})
describe (' Attempt to log in providing invalid credentials', () => {
    beforeEach('Open browser', () =>{
		LoginPage.open();
    })
    it('Should deny access with valid username and wrong password', () => {
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('123456')
        LoginPage.submit()
        browser.pause(5000);

        expect(LoginPage.alertWrongInput).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })

    it('Should deny access with invalid username and correct password', () => {
        LoginPage.username.setValue('standarduser')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(5000);

        expect(LoginPage.alertWrongInput).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
    it('Should deny access with invalid username and wrong password', () => {
        LoginPage.username.setValue('Juan')
        LoginPage.password.setValue('12345')
        LoginPage.submit()
        browser.pause(5000);

        expect(LoginPage.alertWrongInput).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
})

    describe (' Attempt to log in providing valid credentials', () => {
        beforeEach('Open browser', () =>{
            LoginPage.open();
        })
    it('Should allow access with correct credentials(Username: standard_user)', () => {
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(5000);

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('Should allow access with correct credentials(Username: problem_user)', () => {
        LoginPage.username.setValue('problem_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(5000);

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('Should allow access with correct credentials(Username: performance_glitch_user)', () => {
        LoginPage.username.setValue('performance_glitch_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(5000);

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('Should not allow access with existing but locked username(Username:locked_out_user)', () => {
        LoginPage.username.setValue('locked_out_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(5000);

        expect(LoginPage.alertWrongInput).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    })
})
