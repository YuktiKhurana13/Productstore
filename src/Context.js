import React from 'react';
import {storeProducts,detailProduct} from './data';

const ProductContext=React.createContext();
//provider
//consumer

class ProductProvider extends React.Component{

    state={
        products:storeProducts,
        detailProduct:detailProduct
    }

    handleDetail=()=>{
        console.log("Hello from handle Detail");
    }

    addToCart=()=>{
        console.log("Hello from handle Detail");
    }
    render(){
        return(
            <ProductContext.Provider
            value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer=ProductContext.Consumer;

export { ProductProvider,ProductConsumer };