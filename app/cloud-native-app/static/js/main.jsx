import Tweet from "../components/Tweet";
import TweetList from "../components/TweetList";
// import cookie from 'react-cookie';
import TActions from "../actions/Tactions";
import TStore from "../stores/TStore";

TActions.getAllTweets();

let getAppState = () =>{
  return { tweetslist: TStore.getAll()};
};

class Main extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { userId: cookie.load('session') };
        // this.state={tweets:[]}
        this.state= getAppState();
        this._onChange = this._onChange.bind(this);
    }
    // function to pull tweets
    componentDidMount() {
        TStore.addChangeListener(this._onChange);
    };

    componentWillUnMount() {
      TStore.removeChangeListener(this._onChange);
    };

    _onChange(){
      this.setState(getAppState());
    }
    /**
    componentDidMount() {
        var self=this;
        $.getJSON('/api/v2/tweets', function(tweetModels) {
          var t = tweetModels;
          console.log(t);
          self.setState({tweets: t})
        });
    }

    addTweet(tweet){
        var self = this;
        $.ajax({
            url: '/api/v2/tweets',
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                'username': "rd",
                'body': tweet,
            }),
            success: function(data) {
                alert("添加成功！");
                let newTweetList = self.state.tweets;
                var date = new Date();
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var D = date.getDate() + ' ';
                var h = date.getHours() + ':';
                var m = date.getMinutes() + ':';
                var s = date.getSeconds();
                var timestamp = Y + M + D + h + m + s;
                newTweetList.unshift({ username: "rd",body: tweet, timestamp: timestamp});
                console.log(newTweetList);
                self.setState({tweets: newTweetList});
  		        return;
            },
            error: function() {
                return console.log("Failed");
            }
        });
    }
    **/
    render() {
        return (
            <div>
                <Tweet />
                <TweetList tweet={this.state.tweetslist}/>
                {/*<Tweet sendTweet={this.addTweet.bind(this)}/>*/}
                {/*<TweetList tweet={this.state.tweets}/>*/}
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