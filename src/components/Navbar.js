import React from 'react';
import {Link} from 'react-router-dom'; 
import logo from '../logo.svg';
import styled from 'styled-components';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5 ">
                    <Link to="/">
                        <img src={logo} alt="store" className="navbar-brand" />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link products">
                                Products
                            </Link>
                        </li>
                    </ul>
                    <Link to="/Cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                               <i className="fas fa-cart-plus" />
                                my cart
                            </span>
                        </ButtonContainer>
                    </Link>
            </nav>
        );
    }
}

const ButtonContainer=styled.button`
    text-transform:capitalize;
    background:transparent;
    border:0.05rem solid var(--lightBlue);
    font-size:1rem;
    color:var(--lightBlue);
    border-radius:0.5 rem;
    padding:0.2rem 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0.5rem;
    transition:all 0.5s ease-in-out;
    &:hover{
        background:var(-lightBlue);
        color:var(--mainBlue);
    }
    &:focus{
        outline:none;
    }
`; 
export default Navbar;
