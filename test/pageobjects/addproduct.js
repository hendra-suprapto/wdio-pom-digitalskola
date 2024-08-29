//import { $ } from '@wdio/globals'
import Page from './page.js'; 

class AddProduct extends Page {
    get btnAdd () {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    async add () {
        await this.btnAdd.click();
        await browser.pause(2000)
    }
    open () {
        return super.open('inventory.html');
    }
}
export default new AddProduct();
