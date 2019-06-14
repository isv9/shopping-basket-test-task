import { HttpFetch } from '../entities/http-fetch';
import { HttpFetchResponse } from '../entities/http-fetch-response';
import { ShoppingMenuItem } from '../../../shopping-menu/entities/shopping-menu-item';
import {
    AddingOrderedItemToShoppingBasketInputDTO,
    AdjustingOrderedItemInShoppingBasketInputDTO,
    RemovingOrderedItemFromShoppingBasketInputDTO,
    ServiceShoppingBasketDTO,
} from '../../../shopping-basket/dtos/service-shopping-basket-dtos';
import { NotFoundObjectError } from '../../error-handler/entities/not-found-object-error';
import { ShoppingMenuFetch } from '../../../shopping-menu/use-cases/shopping-menu-fetch';

const shoppingBasketLocalStorageKey = 'shoppingBasket';

export const mockHttpFetch: HttpFetch = {
    get,
    post,
    delete: restDelete,
};

function get(url: string): Promise<HttpFetchResponse<any>> {
    switch (url) {
        case ShoppingMenuFetch.basePath: {
            return getShoppingMenu();
        }
        case '/shopping-basket': {
            const shoppingBasket = getShoppingBasketFromLocalStorage();
            const response: HttpFetchResponse<ServiceShoppingBasketDTO> = {
                status: 200,
                statusText: '',
                data: shoppingBasket,
            };
            return Promise.resolve(response);
        }
        default:
            return Promise.reject();
    }
}

function getShoppingMenu(): Promise<HttpFetchResponse<any>> {
    const response: HttpFetchResponse<ShoppingMenuItem[]> = {
        data: ['Четыре сыра', 'Ветчина и грибы', 'Маргарита', 'Мясная', 'Сырная', 'Пепперони', 'Итальянская'].map(
            (name, index): ShoppingMenuItem => {
                return {
                    name,
                    id: (index + 1).toString(),
                };
            },
        ),
        status: 200,
        statusText: '',
    };
    return Promise.resolve(response);
}

function post<TBody, TResponse = object>(url: string, data: TBody): Promise<HttpFetchResponse<TResponse>> {
    const shoppingBasket = getShoppingBasketFromLocalStorage();
    switch (url) {
        case '/shopping-basket/order': {
            window.localStorage.removeItem(shoppingBasketLocalStorageKey);
            const response: HttpFetchResponse<any> = {
                data: {},
                status: 200,
                statusText: '',
            };
            return Promise.resolve(response);
        }
        case '/shopping-basket/ordered-item': {
            return addOrderedItem(shoppingBasket, (data as any) as AddingOrderedItemToShoppingBasketInputDTO);
        }
        default:
            if (url.includes('/shopping-basket/ordered-item/')) {
                return adjustOrderedItem(shoppingBasket, (data as any) as AdjustingOrderedItemInShoppingBasketInputDTO);
            }
            return Promise.reject();
    }
}

function addOrderedItem(
    shoppingBasket: ServiceShoppingBasketDTO,
    data: AddingOrderedItemToShoppingBasketInputDTO,
): Promise<HttpFetchResponse<any>> {
    const orderedItemId = data.orderedItemId;
    shoppingBasket.orderedItems = [...shoppingBasket.orderedItems, { itemId: orderedItemId, count: 1 }];
    saveShoppingBasketInLocalStorage(shoppingBasket);
    const response: HttpFetchResponse<ServiceShoppingBasketDTO> = {
        data: shoppingBasket,
        status: 200,
        statusText: '',
    };
    return Promise.resolve(response as any);
}

function adjustOrderedItem(
    shoppingBasket: ServiceShoppingBasketDTO,
    requestParams: AdjustingOrderedItemInShoppingBasketInputDTO,
): Promise<HttpFetchResponse<any>> {
    const orderedItemId = requestParams.orderedItemId;
    const orderedItem = shoppingBasket.orderedItems.find(orderedItem => orderedItem.itemId === orderedItemId);
    if (!orderedItem) {
        return Promise.reject(new NotFoundObjectError('orderedItemId'));
    }
    const adjustmentValue = requestParams.adjustmentValue;
    if (orderedItem.count + adjustmentValue <= 0) {
        shoppingBasket.orderedItems = shoppingBasket.orderedItems.filter(
            orderedItem => orderedItem.itemId !== orderedItemId,
        );
    } else {
        shoppingBasket.orderedItems = shoppingBasket.orderedItems.map(orderedItem => {
            if (orderedItem.itemId === orderedItemId) {
                return {
                    ...orderedItem,
                    count: orderedItem.count + adjustmentValue,
                };
            }
            return orderedItem;
        });
    }
    saveShoppingBasketInLocalStorage(shoppingBasket);
    const response: HttpFetchResponse<ServiceShoppingBasketDTO> = {
        data: shoppingBasket,
        status: 200,
        statusText: '',
    };
    return Promise.resolve(response);
}

function restDelete<TBody, TResponse = object>(url: string, data: TBody): Promise<HttpFetchResponse<TResponse>> {
    const shoppingBasket = getShoppingBasketFromLocalStorage();
    if (url.includes('/shopping-basket/ordered-item/')) {
        const requestParams = (data as any) as RemovingOrderedItemFromShoppingBasketInputDTO;
        const orderedItemId = requestParams.orderedItemId;
        shoppingBasket.orderedItems = shoppingBasket.orderedItems.filter(
            orderedItem => orderedItem.itemId !== orderedItemId,
        );
        saveShoppingBasketInLocalStorage(shoppingBasket);
        const response: HttpFetchResponse<ServiceShoppingBasketDTO> = {
            data: shoppingBasket,
            status: 200,
            statusText: '',
        };
        return Promise.resolve(response as any);
    }
    return Promise.reject();
}

function getShoppingBasketFromLocalStorage(): ServiceShoppingBasketDTO {
    const shoppingBasketFromLocalStorage = window.localStorage.getItem(shoppingBasketLocalStorageKey);
    return shoppingBasketFromLocalStorage ? JSON.parse(shoppingBasketFromLocalStorage) : { orderedItems: [] };
}

function saveShoppingBasketInLocalStorage(shoppingBasket: ServiceShoppingBasketDTO) {
    window.localStorage.setItem(shoppingBasketLocalStorageKey, JSON.stringify(shoppingBasket));
}
