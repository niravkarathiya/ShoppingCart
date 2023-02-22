export interface Products {
    id: number;
    description: string;
    image: string;
    rating: any;
    title: string;
    price: number;
    quantity: number;
}

export interface CartData {
    product: Products[];
}