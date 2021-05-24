const Page = require('./page');

class checkoutPage extends Page {

    //title selector
    get title () { return $('.title')}


    //Checkout inputs selectors
    get firstName () { return $('#first-name')}
    get lastName () { return $('#last-name')}
    get postCode () { return $('#postal-code')}

    //Checkout buttons selectors
    get cancelBtn () { return $('#cancel')}
    get continueBtn () { return $('#continue')}
    get finishBtn () { return $('#finish')}

    //Prices selectors
    get subtotal() { return $('.summary_subtotal_label') }
    get tax() { return $('.summary_tax_label') }
    get total() { return $('.summary_total_label') }

    //Comp checkout elements selectors
    get header () { return $('.complete-header') }
    get textOrder () { return $('.complete-text') }
    get ponyExpImg () { return $('.pony_express') }

    //Checkout Path
    open () {
        return super.open('checkout-step-one.html');
    }
    //Checkout Step2 Path
    open2 () {
        return super.open('checkout-step-two.html');
    }
    //Checkout Complete Path
    open3 () {
        return super.open('checkout-complete.html');
    }
}
module.exports = new checkoutPage();


