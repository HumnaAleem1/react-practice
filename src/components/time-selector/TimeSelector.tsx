import { useState } from 'react'
import { checkboxes } from './Checkboxes'

export const TimeSelector = () => {

    const [cards, setCards] = useState([])

    const checkedCheckbox = (value: boolean, day: string) => {
        
    }

    return  <div>
        {
            Object.values(checkboxes).map((checkbox) => {
                const { checked, label} = checkbox
                return  <>
                        <input type='checkbox' checked={checked} onChange={(e) => checkedCheckbox(e.target.checked, label)}/>
                        <label>{label}</label>
                </>
           })
       }
    </div>
}