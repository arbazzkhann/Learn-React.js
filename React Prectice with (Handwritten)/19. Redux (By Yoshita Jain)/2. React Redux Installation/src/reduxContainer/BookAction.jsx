import { buy_book, sell_book } from './BookType'

export const buyBook = () => {
    return { type: buy_book };
};

export const sellBook = () => {
    return { type: sell_book };
};