import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Homepage } from '../pages/Homepage';
import { CartPage } from '../pages/CartPage';

test('pom test',async({page})=>{

    //login
const login=new LoginPage(page);
await login.gotoLoginPage();
await login.login('shabana','stctechnology');
//await page.waitForTimeout(10000);

    //home
const home=new Homepage(page);
await home.addProducttoCart("Nexus 6");
await page.waitForTimeout(10000);
await home.gotoCart();

    //cart

 
    const cart=new CartPage(page);
    await page.waitForTimeout(3000);
    const status=await cart.checkProductIncart('Nexus 6');
    expect(await status).toBe(true);
});



