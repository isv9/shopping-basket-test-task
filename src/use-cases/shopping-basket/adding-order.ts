import { Command } from '../../entities/command';
import { ShoppingBasketFetch } from './shopping-basket-fetch';

interface AddingOrderParams {
    routerGateway: RouterGateway;
    shoppingBasket: ShoppingBasket;
}

interface ShoppingBasket {
    hasOrderItems: boolean;

    clear(): void;
}

interface RouterGateway {
    redirectToMenu(): void;
}

interface ShoppingBasketFetchGateway {
    addOrder: ShoppingBasketFetch['addOrder'];
}

export class AddingOrderInteractor {
    private readonly shoppingBasketFetch: ShoppingBasketFetchGateway;

    constructor(shoppingBasketFetch: ShoppingBasketFetchGateway) {
        this.shoppingBasketFetch = shoppingBasketFetch;
    }

    getAddingOrderCommand(params: AddingOrderParams): Command {
        const { shoppingBasket } = params;
        return {
            isAvailable: shoppingBasket.hasOrderItems,
            execute: () => this.addOrder(params),
        };
    }

    async addOrder(params: AddingOrderParams) {
        const { routerGateway, shoppingBasket } = params;
        await this.shoppingBasketFetch.addOrder();
        shoppingBasket.clear();
        routerGateway.redirectToMenu();
    }
}
