import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Header from "./components/Header";




const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNjU5Yjk4YjAzOGY3NzljZmYiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NDcsImV4cCI6MTY5OTQ0Nzk0N30.JgFw4p22D2PfathigfzWABjSCuXU4-ynJu-at1BgCPo";



export default () => {
    const [goods, setGoods] = useState([]);
    useEffect(() => {
        fetch("https://api.react-learning.ru/products", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setGoods(data.products);
            })
    }, []);
    return <>
        <Header/>
        <main>
          
           <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog goods={goods}/>}/>
                    <Route path="/product/:id" element={<Product token={token}/>}/>
                </Routes>
            </Container>
        </main> 
        
        <footer className="container-fluid d-flex align-items-center bg-warning ">
           
     <Container>
     ©2023 React Learning
      </Container>
        </footer>
    </>
}