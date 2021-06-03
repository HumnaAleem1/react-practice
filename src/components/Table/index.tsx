import './Table.css'

interface Props {
	data: RedditData['data']['children']
}

export const Table: React.FC<Props> = ({ data }) => {
    return (
    <table>
        <thead>
            <tr>
                <th>Sr #</th>
                <th>Author</th>
                <th>Title</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map((childData, index) => {
                    const { author_fullname: author, title } = childData.data
                    return (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{author}</td>
                            <td>{title}</td>
                            <td>
                                <button>Detail</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )
}