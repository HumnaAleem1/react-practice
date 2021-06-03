import './Card.css'

interface Props {
	authorName: string
    title: string
}

const Card: React.FC<Props> = ({authorName, title}) => {

    return (
        <div className="card-container">
            <div className="card">
                <div>Author</div><br/>
                <div>{authorName}</div>
                <div>Title</div><br/>
                <div>{title}</div>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Card