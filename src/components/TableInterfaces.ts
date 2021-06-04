export interface ITableStates {
    displayCard: boolean
    cards: {
        [cardId: string]: ICard
    }
}

interface ICard {
    authorName: string
    title: string
}