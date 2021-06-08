export interface ICards {
    [cardId: string]: ICard
}

export interface ICard {
    authorName: string
    title: string
    cardId: string
}