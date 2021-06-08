export interface ICheckBoxes {
    [day: string]: ICheckBox
}

export interface ICheckBox {
    label: string
    checked: boolean
}

export interface IDayCard {
    [day: string]: ICard
}

interface ICard {
    name: string
}