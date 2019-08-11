import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';


class Product extends React.Component{

    render(){

        const {id,title,img,price,inCart} =this.props.product;
        console.log(img);
        return(
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={console.log("clicked")}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-image-top" 
                            />
                        </Link>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

const ProductWrapper=styled.div`
`;

export default Product;