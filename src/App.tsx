import React from 'react';
import {Router} from "modules/environment/router/router";
import {ShoppingBasketProvider} from "modules/shopping-basket/providers/shopping-basket-provider";

const App: React.FC = () => {
    return <ShoppingBasketProvider>
        <Router/>
    </ShoppingBasketProvider>;
};

export default App;
