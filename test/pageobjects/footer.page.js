const Page = require('./page');

class footerPage extends Page {

    get twitterBtn () { return $('.social_twitter') }
    get facebookBtn () { return $('.social_facebook')}
    get linkedInBtn () { return $('.social_linkedin') }
    get twitterLink () { return $('.social_twitter > a') }
    get facebookLink() { return $('.social_facebook > a')}
    get linkedInLink () { return $('.social_linkedin > a') }


}
module.exports = new footerPage();
