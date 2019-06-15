import { AddingOrderInteractor } from '../../use-cases/shopping-basket/adding-order';
import { shoppingBasketFetch } from './shopping-basket-fetch';

export function createAddingOrderInteractor(): AddingOrderInteractor {
    return new AddingOrderInteractor(shoppingBasketFetch);
}
