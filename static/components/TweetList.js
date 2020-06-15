export default class TweetList extends React.Component {
    render(){
        return(
            <div>
                <ul className="collection">
                <li className="collection-item avatar">
                    <i className="material-icons circle red">play_arrow</i>
                    <span className="title">{this.props.username}</span>
                    <p>{this.props.body}</p>
                    <p>{this.props.timestamp}</p>
                </li>
                </ul>
            </div>
        );
    }
}
