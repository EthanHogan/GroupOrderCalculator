export interface IOrder {
    tax: number;
    taxRate: number;
    tip: number;
    fees: number;
    subtotal: number;
    total: number;
}

export class Order implements IOrder {
    private _tax: number = 0.00;
    private _taxRate: number = 0.00;
    private _subtotal: number = 0.00;
    tip: number = 0.00;
    fees: number = 0.00;
    total: number = 0.00;

    get tax():number { return this._tax}
    set tax(t:number) {
        this._tax = t;
        this.setTaxRate();
    }

    get taxRate():number { return this._taxRate }

    get subtotal():number { return this._subtotal}
    set subtotal(st) {
        this._subtotal = st;
        this.setTaxRate();
    }

    setTaxRate() {
        if (this._subtotal > 0 && this._tax > 0) {
            this._taxRate = this._tax / this._subtotal;
        } else {
            this._taxRate = 0.00;
        }
    }
}

export interface IGroupOrder extends IOrder {
    numOrders: number;
    orders: Order[];
}

export class GroupOrder extends Order implements IGroupOrder {
    numOrders: number = 0;
    orders: Order[] = [];
}

export interface IIndividualOrder extends IOrder {
    name: string;
}

export class IndividualOrder extends Order implements IIndividualOrder {
    name: string = "";
}