const Page = require('./page');

class LoginPage extends Page {



    //Login credentials selectors
    get username () { return $('#user-name')}
    get password () { return $('#password')}

    //Button selector
    get submitBtn () { return $('#login-button')}

    //Alert messages selector
    get alertWrongInput () { return $('.error-message-container.error')}


    //Login Path
    open () {
        return super.open('');
    }

    submit () {
        this.submitBtn.click()
    }
}
module.exports = new LoginPage();
