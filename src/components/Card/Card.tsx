import './Card.css'

interface States {
    displayCard: boolean
    authorName: string
    title: string
}

interface Props {
	authorName: string
    title: string
    state: States
    setState: (value: States) => void
}

const Card: React.FC<Props> = ({authorName, title, state, setState}) => {

    return (
        <div className="card-container">
            <div className="card">
                <div>Author</div><br/>
                <div>{authorName}</div>
                <div>Title</div><br/>
                <div>{title}</div>
                <button onClick={() => setState({...state, displayCard: false})}>Delete</button>
            </div>
        </div>
    )
}

export default Card