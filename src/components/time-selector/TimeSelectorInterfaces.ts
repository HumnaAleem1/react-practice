export interface ICheckbox {
    label: string
    checked: boolean
}

export interface IDayCard {
    [day: string]: ICard
}

interface ICard {
    name: string
}