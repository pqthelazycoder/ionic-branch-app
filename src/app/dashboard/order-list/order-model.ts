export class Order {
    constructor(
        public id: string,
        public description: string,
        public status: string,
        public orderDate: string,
        public totalPrice: number,
        public title: string
        ) {

    }
}