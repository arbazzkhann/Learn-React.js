import { BUY_BOOK, SELL_BOOK } from "./ActionType";

export const buyBook = () => {
    return {type: BUY_BOOK}
}

export const sellBook = () => {
    return {type: SELL_BOOK}
}