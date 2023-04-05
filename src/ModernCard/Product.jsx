import React, { useState } from 'react'
import "./Product.css"
import { FaShoppingBasket, FaHeart } from "../../node_modules/react-icons/fa"
const Product = () => {
    const [liked, setLiked] = useState(false);
    const renk = () => {
        setLiked(!liked);
    }
    const defrenk = liked ? 'text-danger' : 'text-light';
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card bg-dark text-white">
                        <div className="card-tepe">
                            <img className="card-img card-img-top" src="./GC.jpg" alt='images' />
                        </div>
                        <div className="card-body">
                            <h5 className="card-subtitle sub-tit">Gamer</h5>
                            <h4 className="card-title tit">Game Controller</h4>
                            <p className="card-text">Trepcrow Protective Case Fit for Nintendo Switch OLED</p>
                        </div>
                        <hr className="w-75 m-auto" />
                        <div className="card-dip">
                            <div className="price d-flex">
                                <p className='my-md-1 mx-md-1 text-warning cizili'>$96.00</p>
                                <p className='my-md-1 mx-md-1 text-warning'>$249.99</p>
                            </div>
                            <ul className="icon d-flex">
                                <li><a href="#"><FaHeart className={defrenk} onClick={renk} /></a></li>
                                <li><a href="#"><FaShoppingBasket className='text-warning' /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product