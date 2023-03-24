import React, { Component } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'

export default class Shop extends Component {

    constructor(props) {
        super(props)
        this.addToCart=this.addToCart.bind(this)
        this.deleted=this.deleted.bind(this)
        this.deletItem=this.deletItem.bind(this)
        this.state = {
            products: [
                { id: 1, title: 'Mobile 1', price: 5, img: './images/1.jpg' },
                { id: 2, title: 'Mobile 2', price: 15, img: './images/2.jpg' },
                { id: 3, title: 'Mobile 3', price: 20, img: './images/3.jpg' },
                { id: 4, title: 'Mobile 4', price: 100, img: './images/4.jpg' },
                { id: 5, title: 'Mobile 5', price: 100, img: './images/5.jpg' },
                { id: 6, title: 'Mobile 6', price: 100, img: './images/5.jpg' },
            ],

            shoppingCart: [],
            socials: [
                { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
                { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
                { id: 3, href: 'https://www.facebook.com', img: 'Images/YouTube Logo.png' },
            ],
        }
    }

    addToCart(productId){
        let mainProduct= this.state.products.find(product=>{
            return product.id === productId
        })
        this.setState(prevState=>{
            return {shoppingCart:[...prevState.shoppingCart,mainProduct]}

        })
    }

    deleted(){
        this.setState({
            shoppingCart:[]
        })
    }

    deletItem(productId){
        let deleted = this.state.shoppingCart.filter(product=>{
            return product.id !== productId
        })
        this.setState(prevState=>{
            return{
                shoppingCart:deleted
            }
        })
    }

    render() {
        return (
            <>
                <header className="main-header">
                    <nav className="main-nav nav">
                        <ul>
                            <li><a href="#">صفحه اصلی</a></li>
                            <li><a href="#">فروشگاه</a></li>
                            <li><a href="#">دباره ما</a></li>
                        </ul>
                    </nav>
                    <h1 className="band-name band-name-large">Mobile Shop</h1>
                </header>
                <section className="container content-section">
                    <div className="shop-items">
                        {this.state.products.map(product =>(
                            <Product key={product.id}  {...product} addToCart={this.addToCart}/>
                        ))}
                    </div>
                </section>
                <section className="container content-section">
                    <h2 className="section-header">سبد خرید شما</h2>
                    <div className="cart-row">
                        <span className="cart-item cart-header cart-column">محصول</span>
                        <span className="cart-price cart-header cart-column">قیمت</span>
                        <span className="cart-quantity cart-header cart-column">عملیات</span>
                    </div>
                    <div className="cart-items">
                            {this.state.shoppingCart.map(product=>(
                                <CartProduct {...product} deletItem={this.deletItem} />
                            ))}
                    </div>
                    <button onClick={this.deleted} className="btn btn-primary btn-purchase" type="button">
                        حذف کل سبد
                    </button>
                </section>
                <footer className="main-footer">
                        <h3 className="band-name">Farshid zahedi</h3>
                        <ul className="nav footer-nav">
                             {this.state.socials.map(social=>(
                                 <Social {...social}/>
                             ))}   
                        </ul>
                </footer>


            </>
        )
    }
}