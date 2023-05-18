import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import NosProduits from "./NosProduits";
import './NosProduits.css'
import FooterPage from "../components/FooterPage";
import Service from "./Service";
import TestimonialSlider from "./TestimonialSlider";
import Slid from "./Testimonial";
import Slider from "./Slider";
import '../App.css'

import MapContainer from "../components/MapContainer";


import homeBanner from '../images/Blue Purple Orange Cartoon Playful Web Software Development Announcement Banner2.png'
import Testimonial from "./Testimonial";

function Home() {
   
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
    return (
        <div >
            {/* <img src=" https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png" className="home-banner" /> */}
            
            <Slider/>
        
            <div className="featured-products-container container mt-4">
                <h2 className="title">Last products</h2>
                {/* last products here */}
                <div className="d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>
                <div>
                    <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
                        <button class="BtnMore">See more {">>"}</button>
                    </Link>
                </div>
            </div>
            {/* sale banner */}
            <div className="sale__banner--container mt-4">
                <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" />
            </div>
            <div className="recent-products-container container mt-4">
                <h2 className="title">Categories</h2>
                <Row>
                    {categories.map((category ,index) => (
                        <LinkContainer key={index} to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>

                <NosProduits/>

                <h1 className="title"> Get Your Apps</h1>
               <div className="Form" >
                
                
               <Link to='/service'><img src="https://www.devosystem.com/img/logo.png"  /></Link>
               
               </div>

            
               <Testimonial/>
               {/* <Slid/> */}
               <br /><br />
               <MapContainer/>
               <br/>
                <FooterPage/>
            </div>
        </div>
    );
}

export default Home;
