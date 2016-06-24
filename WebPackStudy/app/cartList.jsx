import React from 'react';
import styles from './cartList.css'

class cartList extends React.Component{
    constructor(props){
        super(props);
    }

    handlerClick(){
        alert('you get done!');
    }

    render(){
        let cartData = this.props.data,cartDataShow = [],
            totalCount = 0;

        cartData['shopItemData']['summay'].forEach(function(item,index){
            if(item['count'] !=0){
                cartDataShow.push(<shopItemDes data = {item} key={"shopItem"+index} />);
                totalCount += item['price'] * item['count'];
            }
        });

        return (
            <div styleName="cartList" style={{display:cartData['cartListShow']? 'block':'hidden'}}>
                <div styleName = "cartList-describe">
                    <h2>{cartData['shopItemData'].title}</h2>
                    {cartDataShow}
                    <button styleName = "submitBtn" onClick={this.handlerClick.bind(this)}> submit</button>
                </div>
                <div styleName = "cartList-summary">
                    <span>Total Price: ${totalCount}</span>
                </div>
                <span styleName = "closeBtn">x</span>
            </div>
        );
    }
}

class shopItemDes extends React.Component{
    render(){
        let data = this.props.data;

        return (
            <div styleName="shopItemShow">
                <p>{data.size} * {data.count}</p>
                <p>{data.size * data.price}</p>
            </div>
        );
    }
}



