
const buy_book = "buyBook"
const sell_book = "sellBook"

export const buyBook = () => {
    return { type: buy_book };
};

export const sellBook = () => {
    return { type: sell_book };
};