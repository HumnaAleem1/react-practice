import { useState } from 'react'
import { checkboxArray } from './Checkboxes'
import { ICheckbox, IDayCard } from './TimeSelectorInterfaces'
import { TimeSelectorCard } from '../card/TimeSelectorCard'

export const TimeSelector = () => {

    const [cards, setCards] = useState<IDayCard>({})
    const [checkboxes, setCheckboxes] = useState<ICheckbox[]>(checkboxArray)

    const getCards = () => {
        return ( //use card as an object... to delete card at O(1). we cannot use index to get desired value from array.
            Object.values(cards).map(card => {
                return <TimeSelectorCard key={card.name} name={card.name}/>
            })
        )
    }

    const markCheckbox = (checkboxValue: boolean, dayName: string, index: number) => {
        checkboxes[index].checked = checkboxValue
        setCheckboxes(checkboxes)
    
        if(checkboxValue) {
            setCards({...cards, [dayName]: {name: dayName}})
        } else {
            const tempCards = {...cards}
            delete tempCards[dayName]
            setCards(tempCards)
        }
    }

    return  <>
        {
            checkboxes.map((checkbox, index) => {
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