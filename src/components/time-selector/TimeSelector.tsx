import { useState } from 'react'
import { checkboxArray } from './Checkboxes'
import { ICheckbox, IDayCard } from './TimeSelectorInterfaces'
import { TimeSelectorCard } from '../card/TimeSelectorCard'

export const TimeSelector = () => {

    const [cards, setCards] = useState<IDayCard[]>([])
    const [checkboxes, setCheckboxes] = useState<ICheckbox[]>(checkboxArray)

    const getCards = () => {
        return ( 
            cards?.sort((a, b) => a.order - b.order).map(card => {
                return <TimeSelectorCard key={card.order} {...card}/>
            })
        )
    }

    const markCheckbox = (checkboxValue: boolean, name: string, index: number, order: number) => {
        checkboxes[index].checked = checkboxValue
        setCheckboxes(checkboxes)
    
        if(checkboxValue) {
            setCards([...cards, {name, order}])
        } else {
            for(let index in cards) {
                if(cards[index].order === order) {
                    cards.splice(parseInt(index), 1)
                    break
                }
            }
            setCards([...cards])
        }
    }

    return  <>
        {
            checkboxes?.map((checkbox, index) => {
                const { checked, label, order } = checkbox
                return  <div key={ label }>
                    <input type='checkbox' checked={checked} onChange={(e) => markCheckbox(e.target.checked, label, index, order)}/>
                    <label>{label}</label>
                </div>
           })
       }
       { cards && getCards() }
    </>
}