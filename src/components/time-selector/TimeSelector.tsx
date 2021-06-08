import { useState } from 'react'
import { checkboxArray } from './Checkboxes'
import { ICheckbox, IDayCard } from './TimeSelectorInterfaces'
import { TimeSelectorCard } from '../card/TimeSelectorCard'

export const TimeSelector = () => {

    const [cards, setCards] = useState<IDayCard[]>([])
    const [checkboxes, setCheckboxes] = useState<ICheckbox[]>(checkboxArray)

    const getCards = () => {
        return ( 
            cards?.map(card => {
                const { name } = card
                return <TimeSelectorCard key={name} name={name}/>
            })
        )
    }

    const markCheckbox = (checkboxValue: boolean, dayName: string, index: number) => {
        checkboxes[index].checked = checkboxValue
        setCheckboxes(checkboxes)
    
        if(checkboxValue) {
            setCards([...cards, {name: dayName}])
        } else {
            for(let index in cards) {
                console.log('iterations')
                if(cards[index].name === dayName) {
                    cards.splice(parseInt(index), 1)
                    break
                }
            }
            setCards([...cards])
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