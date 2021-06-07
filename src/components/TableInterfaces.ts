export interface ITableStates {
    displayCard: boolean
    cards: ICard[]
}

export interface ICard {
    authorName: string
    title: string
    cardId: string
}