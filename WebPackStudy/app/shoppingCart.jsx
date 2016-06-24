import React from 'react';
import shopItem from './shopItem.jsx';
import cartList from './cartList.jsx';


class ShoppingCart extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            cartListShow: false,
            selectedItem: []
        }
    }

    addCartItem(){
        this.setState({
            cartListShow : true
        });
    }

    closeCartList(){
        this.setState({
            cartListShow : false
        });
    }

    render(){
        return (
            <div styleName = "shoppingCart">
                <shopItem data = {this.state} clickEvent = {this.addCartItem.bind(this)} />
                <cartList data = {this.state} closeEvent = {this.closeCartList.bind(this)}/>
            </div>
        );

    }

}