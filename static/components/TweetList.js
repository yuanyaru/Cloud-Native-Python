import Tweettemplate from '../components/templatetweet'

export default class TweetList extends React.Component {
    render(){
        let tweetlist = this.props.tweet.map(tweet => <Tweettemplate key={tweet.id} {...tweet}/>);
        return(
            <div>
                <ul className="collection">
                    {tweetlist}
                </ul>
            </div>
        );
    }
}
