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

export interface OrdersAPI {
    onOrderCreated: OrderEvent;
	onOrderClaimed: OrderEvent;
	onOrderCompleted: OrderEvent;
	EnableGui(Player: Player, gui: "cashierGui" | "kioskGui" | "hrScreenGui"): void;
	SendNotification(Player: Player, message: string, time: number): void;
	RegisterPluginGuiWithHrScreen(gui: GuiObject): void
}
