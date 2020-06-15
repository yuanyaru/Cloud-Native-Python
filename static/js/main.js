import Tweet from "../components/Tweet";
import TweetList from "../components/TweetList";
import cookie from 'react-cookie';


class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {userId: cookie.load('session') };
        this.state = {tweets: [{'id': 1, 'name': 'guest', 'body': '"Listen to your heart. It knows all things." - ' +
                    'Paulo Coelho #Motivation'}]}
    }

    render() {
        return (
            <div>
                <h1>Welcome to cloud - native - app!</h1>
                <TweetList tweets={this.state.tweets}/>
            </div>
        );
    }
}

let documentReady = () => {
    ReactDOM.render(
        <Main />,
        document.getElementById('react')
    );
};
$(documentReady);