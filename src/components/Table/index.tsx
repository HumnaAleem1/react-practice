import './Table.css'

export const Table = () => {
    return (
    <table>
        <tr>
            <th>Sr #</th>
            <th>Author</th>
            <th>Title</th>
            <th>Action</th>
        </tr>
        {
            [1,2,3].map((item) => {
                return (
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>
                            <button>Detail</button>
                        </td>
                    </tr>
                )
            })
        }
    </table>
    )
}