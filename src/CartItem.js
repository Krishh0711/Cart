import React from 'react';

class CartItem extends React.Component {
    
    increaseQuantity = () => {
    //    this.state.qty=this.state.qty+1;
    // setState form 1 -> this takes optional callback
    // this.setState({
    //    qty: this.state.qty+1
    // });
    // setState form 2 -- if prev state req use this
    this.setState((prevState) => {
        return {
            qty: prevState.qty+1
        }
    });
    }

    decreaseQuantity = () => {
        const {qty} = this.state;

        if(qty == 0){
            return;
        }

        this.setState((prevState) => {
            return {
                qty: prevState.qty-1
            }
        });
    }
    render () {
        console.log(this.props);
        const {price,title,qty} = this.props.product;
        return (
          <div className="cart-item">
            <div className="left-block">
              <img style={styles.image} src="data:image/jpeg;base64,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"/>
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
                onClick={this.increaseQuantity}
              />
              <img 
                 alt="decrease" 
                 className="action-icons" 
                 src="https://image.flaticon.com/icons/svg/992/992683.svg" 
                 onClick={this.decreaseQuantity}
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