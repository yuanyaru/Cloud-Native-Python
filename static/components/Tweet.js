export default class Tweet extends React.Component {
    render() {
        return (
            <div className="row">
                <form>
                    <div className="input-field">
                        <textarea ref="tweetTextArea" className="materialize-textarea" />
                        <label>How you doing?</label>
                        <button className="btn waves-effect waves-light right">Tweet now
                        <i className="material-icons right">send</i></button>
                    </div>
                </form>
            </div>
        );
    }
}