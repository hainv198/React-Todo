import Card from 'react-bootstrap/Card';
import './layout.css'
import {CardGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import React from "react";
import {Link} from "react-router-dom";
import {Button, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DetailsIcon from '@mui/icons-material/Details';
function GridExample() {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        console.log('app useeffect!!');
        let url = 'https://fakestoreapi.com/products';

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    var products_jsx = [];
    if (products != null) {
        products_jsx = products.map((item) => (
            <div class="card col-sm-4" className='products'  style={{padding:'10px 0', margin:'20px 0', width:'30%', height:400}}>
                <img class="card-img-top mt-3" src={item.image} alt="Card image" />
                <div class="card-body" >
                    <div >
                        <b >
                            <p className="card-title">{item.title}</p>
                        </b>
                        <p className="card-text">${item.price}</p>
                    </div>
                    <Stack direction="row" spacing={2} display='flex' justifyContent='space-between'>
                        <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
                            Buy
                        </Button>
                        <Button variant="outlined" endIcon={<DetailsIcon />}>
                            <Link style={{color:'while'}} to={`/products/${item.id}`}>Details</Link>

                        </Button>
                    </Stack>
                </div>

            </div>
        ));
    }

    return (
        <div>
            <div class="jumbotron text-center" >
                <h1>Welcome to ZPhone Shop</h1>
            </div>
            <div class="container  ">
                <div class="row card-deck " style={{ display:'flex', justifyContent:'space-between'}}>{products_jsx}</div>
            </div>
        </div>
    );
}

export default GridExample;