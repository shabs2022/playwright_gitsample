exports.CartPage=class CartPage{

    constructor(page){        //in a cart multiple prodycts are ther,we need to check particular product will be there in the web table.

this.page=page;
this.noOfProducts='//tbody[@id="tbodyid"]/tr/td[2]';
//here we will get every pdt from the web table and iterate the product and match expexcted pdt..
//////tbody/tr[1]/td[4]
    }

async checkProductIncart(productName){


const productInCart=await this.page.$$(this.noOfProducts);  //this return all the product added in the cart
for(const product of productInCart){

    console.log(await product.textContent());
    if(productName==await product.textContent()){
        return true;  //expected text is not in the table,loop will skip
        break;
    }
}



}
}
