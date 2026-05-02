const { log } = require("node:console");

exports.Homepage=class Homepage{

    constructor(page) {
        this.page=page;

        this.productList='//*[@id="tbodyid"]/div/div[1]/div/h4/a';
        this.addToCartbtn='//a[normalize-space()="Add to cart"]';
        this.cart='#cartur';
            }
 async addProducttoCart(productName){

    const products = this.page.locator(this.productList);

    const count = await products.count();
    console.log('count is ',count);

    for(let i = 0; i < count; i++){

        const text = await products.nth(i).textContent();
        

        if(productName === text.trim()){

            await products.nth(i).click();
            break;
        }
    
}

        await this.page.on('dialog',async dialog=>{

            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })
        
      await this.page.locator(this.addToCartbtn).click();
               } 
               
async gotoCart() {

        await this.page.locator(this.cart).click();

               }
}