import React from 'react'
import { FaTwitter, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa"
import "./UserCard.css"

const UserCard = () => {
    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-5 col-md-3 ">
                    <div className="card gradyan text-center pt-5">
                        <div className="card-ust">
                            <img className="card-img-top img-fluid" src="../public/female.jpg" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title baslik lead">Denisa Lopez</h5>
                            <p className="card-text text-muted yazi lead">Frontent Developer</p>
                        </div>
                        <hr className='w-75 m-auto' />
                        <div className="card-alt text-center">
                            <ul className="list-group d-flex flex-row justify-content-center" id='social'>
                                <li className="list-group d-inline-block w-75 ">
                                    <a href="#" className="list-group-item-action"><FaTwitter className='iconlar' /> </a>
                                </li>
                                <li className="list-group d-inline-block w-75 ">
                                    <a href="#" className="list-group-item-action"><FaGithub className='iconlar' /> </a>
                                </li>
                                <li className="list-group d-inline-block w-75 ">
                                    <a href="#" className="list-group-item-action"><FaPhone className='iconlar' /> </a>
                                </li>
                                <li className="list-group d-inline-block w-75 ">
                                    <a href="#" className="list-group-item-action">
                                        <FaEnvelope className='iconlar' /> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard