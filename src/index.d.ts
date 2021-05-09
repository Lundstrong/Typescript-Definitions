interface Order {
	orderReceiver: Player;
	orderCreator: Player;
	orderClaimer: boolean | Player;
	id: number;
	isClaimed: boolean;
	isCompleted: boolean;
	items: string[]
}

interface OrderEvent extends RBXScriptSignal {
	Connect(this: RBXScriptSignal, callback: (order: Order) => any): RBXScriptConnection;
	ConnectParallel(this: RBXScriptSignal, callback: (order: Order) => any): RBXScriptConnection;
}

interface API {
    onOrderCreated: OrderEvent;
	onOrderClaimed: OrderEvent;
	onOrderCompleted: OrderEvent;
	EnableGui(Player: Player, gui: string): void;
	SendNotification(Player: Player, message: string, time: number): void
}

declare module "@rbxts/services" {
	interface ReplicatedStorage {
		LundstrongOrders: {
			API: ModuleScript
		}
	}
	interface Workspace {
		LundstrongOrders: {
			Configuration: ModuleScript;
			MenuItemsConfig: ModuleScript
		}
	}
}

export default API;
