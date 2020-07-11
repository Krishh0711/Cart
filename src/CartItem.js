import React from 'react';

class CartItem extends React.Component {
    
    // increaseQuantity = () => {
    // //    this.state.qty=this.state.qty+1;
    // // setState form 1 -> this takes optional callback
    // // this.setState({
    // //    qty: this.state.qty+1
    // // });
    // // setState form 2 -- if prev state req use this
    // this.setState((prevState) => {
    //     return {
    //         qty: prevState.qty+1
    //     }
    // });
    // }

    // decreaseQuantity = () => {
    //     const {qty} = this.state;

    //     if(qty == 0){
    //         return;
    //     }

    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty-1
    //         }
    //     });
    // }
    render () {
        
        const {price,title,qty,img} = this.props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity} = this.props;
        return (
          <div className="cart-item">
            <div className="left-block">
              <img alt="Product image" style={styles.image} src={img}/>
            </div>
            <div className="right-block">
              <div style={ {fontSize: 25}}> {title}</div>
              <div style={ {color: '#777'}}> Rs {price}</div>
              <div style={ {color: '#777'}}> Qty: {qty}</div>
              <div className="cart-item-actions"> 
              {
                  //button
              }
              <img 
                alt="increase" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                onClick={() => onIncreaseQuantity(product)}
              />
              <img 
                 alt="decrease" 
                 className="action-icons" 
                 src="https://image.flaticon.com/icons/svg/992/992683.svg" 
                 onClick={() => onDecreaseQuantity(product)}
              />
              <img 
                 alt="delete" 
                 className="action-icons" 
                 src="https://image.flaticon.com/icons/svg/3096/3096673.svg" 
               />
              </div>
            </div>
          </div>  
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;