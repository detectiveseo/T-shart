import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import "./Products.css"
import {storeDataOnLocalStorage} from "../Utilitys/functions"

const Products = () => {
    const stordInLocalStore = (id) => {
        storeDataOnLocalStorage(id);
    }
    const products = useLoaderData();
    return (
        <div className='shop_page'>
            <div className='shop_page_warper'>
                <div className='grid_warper'>
                    {
                        products.map(p => <ProductGrid stordInLocalStore={stordInLocalStore} key={p._id} product={p}></ProductGrid>)
                    }
                </div>
                <div>
                    <h1>THis is the section of cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Products;