import { useState } from 'react'
import { checkboxArray } from './Checkboxes'
import { ICheckbox } from './TimeSelectorInterfaces'
import { TimeSelectorCard } from '../card/TimeSelectorCard'

export const TimeSelector = () => {

    const [cards, setCards] = useState<string[]>([])
    const [checkboxes, setCheckboxes] = useState<ICheckbox[]>(checkboxArray)

    const getCards = () => {
        return ( 
            cards?.map((card, index) => {
            return card && <TimeSelectorCard key={`${index}-${card}`} name={card}/>
            })
        )
    }

    const markCheckbox = (checkboxValue: boolean, name: string, index: number) => {
        checkboxes[index].checked = checkboxValue
        setCheckboxes(checkboxes)
    
        if(checkboxValue) {
            cards[index] = name
        } else {
            cards[index] = ''
        }

        setCards([...cards])
    }

    return  <>
        {
            checkboxes?.map((checkbox, index) => {
                const { checked, label } = checkbox
                return  <div key={ label }>
                    <input type='checkbox' checked={checked} onChange={(e) => markCheckbox(e.target.checked, label, index)}/>
                    <label>{label}</label>
                </div>
           })
       }
       { cards && getCards() }
    </>
}