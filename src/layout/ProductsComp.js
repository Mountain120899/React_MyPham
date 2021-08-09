import { React } from 'react';
import { useSelector } from 'react-redux';

import '../style/Product.css';
import Product from './ProductComp';

export default function Products() {
    const currentCategory = useSelector((state) => state.currentCategory);

    const allProducts = useSelector(state => {
        if (currentCategory === "all") {
            var temp = [];
            for (let x in state.allProduct)
            {
                temp = temp.concat(state.allProduct[x]);
            }
            return temp;
        }
        return state.allProduct[currentCategory];
    });

    return (
        <div className = "product-container">
            {
                allProducts.map((item) => { 
                    return(
                            <Product item = {item} key={item.name}/>
                        )
                    }
                )
            }
        </div>
    )
}
