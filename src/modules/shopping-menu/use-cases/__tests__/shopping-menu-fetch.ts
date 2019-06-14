import { ShoppingMenuItem } from '../../entities/shopping-menu-item';
import { ShoppingMenuFetch } from '../shopping-menu-fetch';

describe('ShoppingMenuFetch', () => {
    it('getShoppingMenuDictionary', async () => {
        const menuItems: ShoppingMenuItem[] = [
            {
                name: 'menu item 1',
                id: 'm1',
            },
        ];
        const get = jest.fn(() =>
            Promise.resolve({
                data: menuItems,
                status: 200,
                statusText: '',
            }),
        );
        const defineHttpRequestError = jest.fn();
        const shoppingMenuFetch = new ShoppingMenuFetch({
            httpFetch: {
                get: get as any,
                delete: jest.fn(),
                post: jest.fn(),
            },
            defineHttpRequestError,
        });
        expect(await shoppingMenuFetch.getShoppingMenuDictionary()).toMatchSnapshot();
        expect(get.mock.calls).toMatchSnapshot('get calls');
    });
});
