//import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import CartPage from '../pageobjects/cart.js'
import AddProduct from '../pageobjects/addproduct.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce') 
    })
    it('should cart credentials', async () => {
        await AddProduct.open()
        await AddProduct.add('add-to-cart-sauce-labs-backpack')
    })
    it('should cart credentials', async () => {
            await CartPage.open()
            await CartPage.cart('shopping_cart_container')
})
})