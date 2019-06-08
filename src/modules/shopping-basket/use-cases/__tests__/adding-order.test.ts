import {AddingOrderInteractor} from "../adding-order";

function getRouterGatewayMock() {
    return {
        redirectToMenu: jest.fn(),
    }
}

describe('AddingOrderInteractor', () => {

    let addingOrderInteractor: AddingOrderInteractor;
    let routerGateway: any;

    beforeEach(() => {
        routerGateway = getRouterGatewayMock();
        addingOrderInteractor = new AddingOrderInteractor(
            {
                addOrder: jest.fn()
            },
        );
    });

    it('available adding order command', () => {
        const availableAddOrderCommand = addingOrderInteractor
            .getAddingOrderCommand({
                shoppingBasket: {
                    hasOrderItems: true,
                    clear(): void {
                    }
                },
                routerGateway
            });
        expect(availableAddOrderCommand.isAvailable).toBeTruthy();
    });

    it('unavailable adding order command', () => {
        const unavailableAddOrderCommand = addingOrderInteractor
            .getAddingOrderCommand({
                shoppingBasket: {
                    hasOrderItems: false,
                    clear(): void {
                    }
                },
                routerGateway
            });
        expect(unavailableAddOrderCommand.isAvailable).toBeFalsy();
    });

    it('addOrder', async () => {
        const clearShoppingBasket = jest.fn();
        await addingOrderInteractor.addOrder({
            shoppingBasket: {
                hasOrderItems: false,
                clear: clearShoppingBasket
            },
            routerGateway
        });
        expect(clearShoppingBasket.mock.calls.length).toBe(1);
        expect(routerGateway.redirectToMenu.mock.calls.length).toBe(1);
    });

});