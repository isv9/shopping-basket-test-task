import { ShoppingBasketFetch } from '../shopping-basket-fetch';

function getHttpFetchMock() {
    return {
        delete: jest.fn(() => Promise.resolve({ data: {} })),
        get: jest.fn(() => Promise.resolve({ data: {} })),
        post: jest.fn(() => Promise.resolve({ data: {} })),
    };
}

describe('ShoppingBasketFetch', () => {
    let shoppingBasketFetch: ShoppingBasketFetch;
    let httpFetch: any;
    let defineHttpRequestError: any;

    beforeEach(() => {
        httpFetch = getHttpFetchMock();
        defineHttpRequestError = jest.fn(error => error);
        shoppingBasketFetch = new ShoppingBasketFetch({
            httpFetch,
            defineHttpRequestError,
        });
    });

    it('addOrder', async () => {
        await shoppingBasketFetch.addOrder();
        expect(httpFetch.post.mock.calls).toMatchSnapshot('post calls');
    });

    it('addOrderedItemToShoppingBasket', async () => {
        await shoppingBasketFetch.addOrderedItemToShoppingBasket('test id');
        expect(httpFetch.post.mock.calls).toMatchSnapshot('post calls');
    });

    it('adjustOrderedItemInShoppingBasket', async () => {
        await shoppingBasketFetch.adjustOrderedItemInShoppingBasket('test id', 4);
        expect(httpFetch.post.mock.calls).toMatchSnapshot('post calls');
    });

    it('getCurrentShoppingBasket', async () => {
        httpFetch = {
            ...getHttpFetchMock(),
            get: jest.fn(() => Promise.resolve({ data: {} })),
        };
        shoppingBasketFetch = new ShoppingBasketFetch({
            httpFetch,
            defineHttpRequestError,
        });
        await shoppingBasketFetch.getCurrentShoppingBasket();
        expect(httpFetch.get.mock.calls).toMatchSnapshot('get calls');
    });

    it('removeOrderedItemFromShoppingBasket', async () => {
        await shoppingBasketFetch.removeOrderedItemFromShoppingBasket('test id');
        expect(httpFetch.delete.mock.calls).toMatchSnapshot('delete calls');
    });

    it('defineHttpRequestError', async () => {
        expect.assertions(2);
        httpFetch = {
            ...getHttpFetchMock(),
            post: jest.fn(() => Promise.reject(new Error())),
        };
        shoppingBasketFetch = new ShoppingBasketFetch({
            httpFetch,
            defineHttpRequestError,
        });
        try {
            await shoppingBasketFetch.addOrder();
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
        expect(defineHttpRequestError.mock.calls.length).toBe(1);
    });
});
