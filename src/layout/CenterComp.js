import React from 'react';
import { Switch, Route } from "react-router-dom";

import CurrentComp from './CurrentComp';
import Products from './ProductsComp';
import CartProducts from './CartProductsComp';

export default function CenterComp() {
    return (
        <div>
            <Switch>
                <Route path="/currentProduct" exact={true} component={CurrentComp} />
                <Route path="/" exact component={Products} />
                <Route path="/cartProducts" exact component={CartProducts} />
            </Switch>
        </div>
    )
}
