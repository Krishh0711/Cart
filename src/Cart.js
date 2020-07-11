import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor (){
        super();

       this.state = {
        products: [
            { 
                price: 9991,
                title: 'ASUS phone',
                qty:1,
                img:'',
                id:1
            },
            {
                price: 99912,
                title: 'ASUS MAX PRO',
                qty:1,
                img:'',
                id:2
            },
            {
                price: 999,
                title: 'watch',
                qty:1,
                img:'',
                id:3
            },
            {
                price: 99912,
                title: 'Dell Laptop',
                qty:1,
                img:'',
                id:4
            }

        ]
       }

       
      
    }

  render () {
    const {products} = this.state;
    return (
        <div className="cart"> 
            
            {products.map((product)=>{
                return (
                  <CartItem 
                     product={product} 
                    key={product.id}/>
                )
            })}
        </div>
    );
  }
  
}

export default Cart;