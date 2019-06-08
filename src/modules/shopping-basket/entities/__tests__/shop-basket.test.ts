import {ShoppingBasket} from "../shopping-basket";

describe('ShoppingBasket entity', () => {

    it('orderedItemsCount', () => {
        const shoppingBasket = new ShoppingBasket({
            orderedItems: [
                {
                    itemId: 'test2',
                    count: 2
                }
            ]
        });
        expect(shoppingBasket.orderedItemsCount).toBe(2);
    });

    it('isExistOrderItems', () => {
        const shoppingBasket = new ShoppingBasket({
            orderedItems: [
                {
                    itemId: 'test1',
                    count: 2
                },
                {
                    itemId: 'test2',
                    count: 2
                }
            ]
        });
        expect(shoppingBasket.hasOrderedItems).toBeTruthy();
        expect(new ShoppingBasket().hasOrderedItems).toBeFalsy();
    });

    it('getOrderedItemCount', () => {
        const shoppingBasket = new ShoppingBasket({
            orderedItems: [
                {
                    itemId: 'test1',
                    count: 2
                },
                {
                    itemId: 'test2',
                    count: 5
                }
            ]
        });
        expect(shoppingBasket.getOrderedItemCount('test2')).toBe(5);
    });

});