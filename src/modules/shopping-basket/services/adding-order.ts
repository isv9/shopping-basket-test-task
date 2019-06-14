import { AddingOrderInteractor } from '../use-cases/adding-order';
import { shoppingBasketFetch } from './shopping-basket-fetch';

export function createAddingOrderInteractor(): AddingOrderInteractor {
    return new AddingOrderInteractor(shoppingBasketFetch);
}
