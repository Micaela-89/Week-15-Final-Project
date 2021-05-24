const Page = require('./page');

class menuPage extends Page {

    get menuBtn () { return $('#react-burger-menu-btn')}
    get navBar () { return $('.bm-item-list')}
    get allItemsBtn () { return $('#inventory_sidebar_link')}
    get aboutBtn () {return $('#about_sidebar_link')}
    get logOutBtn () {return $('#logout_sidebar_link')}
    get resetBtn () {return $('#reset_sidebar_link')}

}
module.exports = new menuPage();

