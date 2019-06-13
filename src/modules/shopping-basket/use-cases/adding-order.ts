import {ShoppingBasketFetch} from "modules/shopping-basket/use-cases/shopping-basket-fetch";
import {Command} from "modules/core/command/command";

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
    addOrder: ShoppingBasketFetch['addOrder']
}

export class AddingOrderInteractor {

    constructor(private readonly shoppingBasketFetch: ShoppingBasketFetchGateway) {
    }

    getAddingOrderCommand(params: AddingOrderParams): Command {
        const {
            shoppingBasket
        } = params;
        return {
            isAvailable: shoppingBasket.hasOrderItems,
            execute: () => this.addOrder(params)
        }
    }

    async addOrder(params: AddingOrderParams) {
        const {
            routerGateway,
            shoppingBasket,
        } = params;
        await this.shoppingBasketFetch.addOrder();
        shoppingBasket.clear();
        routerGateway.redirectToMenu();
    }
}