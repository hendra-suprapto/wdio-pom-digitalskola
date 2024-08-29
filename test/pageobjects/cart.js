//import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
    get btnCart () {
        return $('#shopping_cart_container');
    }
    async cart () {
        await this.btnCart.click();
        // await $("#add-to-cart-sauce-labs-backpack").click()
        // await $("#shopping_cart_container").click()
        await browser.pause(5000)
    }
    open () {
        return super.open('inventory.html');
    }
}
export default new CartPage();