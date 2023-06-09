import React from 'react';
import "./ProductGrid.css"

const ProductGrid = ({product, stordInLocalStore}) => {
    const {_id, index, price, picture, name, } = product;
    return (
        <div className='product_box'>
            <img width="400px" height="400px" src={picture} alt={name} />
            <button onClick={() => stordInLocalStore(_id)} className="add_to_cart">Add to cart</button>
        </div>
    );
};

export default ProductGrid;