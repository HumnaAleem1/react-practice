export interface IRedditData {
    kind: string,
    data: IParentData
}

interface IParentData {
    modhash: string,
    dist: number,
    children: IChildren[]
}

interface IChildren {
    kind: string,
    data: IChildData
}

interface IChildData {
    title: string,
    id: string,
    author: string,
}