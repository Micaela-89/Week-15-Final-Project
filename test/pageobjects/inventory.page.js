const Page = require('./page');

class inventoryPage extends Page {

//Inventory page title
    get mainTitle () { return $('.title')}

    get firstItem () { return $('.inventory_item:nth-child(1)') }
    get secondItem () { return $('.inventory_item:nth-child(2)') }
    get thirdItem () { return $('.inventory_item:nth-child(3)') }
    get fourthItem () { return $('.inventory_item:nth-child(4)') }
    get fifthItem () { return $('.inventory_item:nth-child(5)') }
    get sixthItem () { return $('.inventory_item:nth-child(6)') }

    //Product´s titles selectors
    get backpackTitle () { return $('#item_4_title_link')}
    get bikeLightTitle () { return $('#item_0_title_link')}
    get boltTShirtTitle () { return $('#item_1_title_link')}
    get jacketTitle () { return $('#item_5_title_link')}
    get onesieTitle () { return $('#item_2_title_link')}
    get redTShirtTitle () { return $('#item_3_title_link')}


    //Product´s images selectors
    get backpack () { return $('#item_4_img_link')}
    get bikeLight () { return $('#item_0_img_link')}
    get boltTShirt () { return $('#item_1_img_link')}
    get jacket () { return $('#item_5_img_link')}
    get onesie () { return $('#item_2_img_link')}
    get redTShirt () { return $('#item_3_img_link')}

    //Back to Products Button Selector
    get backToProductsBtn () { return $('#back-to-products')}

    //Add to cart selectors
    get addBackpack () { return $('#add-to-cart-sauce-labs-backpack')}
    get addBikeLight () { return $('#add-to-cart-sauce-labs-bike-light')}
    get addBoltTShirt () { return $('#add-to-cart-sauce-labs-bolt-t-shirt')}
    get addJacket () { return $('#add-to-cart-sauce-labs-fleece-jacket')}
    get addOnesie () { return $('#add-to-cart-sauce-labs-onesie')}
    get addRedTShirt () { return $('[name="add-to-cart-test.allthethings()-t-shirt-(red)"]')}

    //Remove items selectors
    get removeBackpack () { return $(' #remove-sauce-labs-backpack')}
    get removeBikeLight () { return $('#remove-sauce-labs-bike-light')}
    get removeBoltTShirt () { return $('#remove-sauce-labs-bolt-t-shirt')}
    get removeJacket () { return $('#remove-sauce-labs-fleece-jacket')}
    get removeOnesie () { return $('#remove-sauce-labs-onesie')}
    get removeRedTShirt () { return $('[name="remove-test.allthethings()-t-shirt-(red)"]')}

    //Filter-Sort By selectors
    get sortByBtn () { return $('.product_sort_container')}
    get sortByNameAtoZ () { return $('span > select > option:nth-child(1)')}
    get sortByNameZtoA () { return $('span > select > option:nth-child(2)')}
    get sortByPriceLotoHi() { return $('span > select > option:nth-child(3)')}
    get sortByPriceHitoLo() { return $('span > select > option:nth-child(4)')}

    //Inventory Path
    open () {
        return super.open('inventory.html');
    }

}
module.exports = new inventoryPage();
