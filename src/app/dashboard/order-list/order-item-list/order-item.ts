export class OrderItem {
    constructor(public id: string,
                public description: string,
                public transactionId: string,
                public amount: number
    ) {}
}
