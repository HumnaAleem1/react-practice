import { redditData } from '../../API/contants';
import API from '../../API';

export const Home = () => {

    const onClickGo = () => {
        API.get(redditData).then(result => {
            console.log(result)
        });
    }

    return (
    <div>
        <div>Test App</div>
        <button onClick={onClickGo}>Go</button>
    </div>
    )
}