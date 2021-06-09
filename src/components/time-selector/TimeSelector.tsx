import { useState } from 'react'
import { checkboxArray } from './Checkboxes'
import { ICheckbox } from './TimeSelectorInterfaces'
import { TimeSelectorCard } from '../card/TimeSelectorCard'

export const TimeSelector = () => {

    const [cards, setCards] = useState<string[]>([])
    const [checkboxes, setCheckboxes] = useState<ICheckbox[]>(checkboxArray)

    const getCards = () => {
        return ( 
            cards?.map(name => {
            return name && <TimeSelectorCard key={name} name={name}/>
            })
        )
    }

    const markCheckbox = (checkboxValue: boolean, name: string, index: number) => {
        checkboxes[index].checked = checkboxValue
        setCheckboxes(checkboxes)
    
        if(checkboxValue) {
            const backup = [...cards]
            backup[index] = name
            setCards(backup)
        } else {
            cards[index] = ''
            setCards([...cards])
        }
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