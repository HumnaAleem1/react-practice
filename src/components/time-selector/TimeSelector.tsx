import { useState } from 'react'
import { checkboxObj } from './Checkboxes'
import { ICheckBoxes, IDayCard } from './TimeSelectorInterfaces'
import { Card } from './Card'

export const TimeSelector = () => {

    const [cards, setCards] = useState<IDayCard>({})
    const [checkboxes, setCheckboxes] = useState<ICheckBoxes>(checkboxObj)

    const getCards = () => {
        return (
            Object.values(cards).map(card => {
                return <Card key={card.name} name={card.name}/>
            })
        )
    }

    const markCheckbox = (checkboxValue: boolean, dayName: string) => {
        checkboxes[dayName].checked = checkboxValue
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
            Object.values(checkboxes).map((checkbox) => {
                const { checked, label} = checkbox
                return  <div key={label}>
                    <input type='checkbox' checked={checked} onChange={(e) => markCheckbox(e.target.checked, label)}/>
                    <label>{label}</label>
                </div>
           })
       }
       { cards && getCards() }
    </>
}