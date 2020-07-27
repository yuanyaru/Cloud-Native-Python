import SActions from '../actions/SActions';

export default{
  getAllTweets(){
    console.log(2, "API get tweets");
    // let str = "/api/v2/tweets/" + localStorage.getItem("sessionid");
    $.getJSON("/api/v2/tweets" , function(tweetModels) {
        var t = tweetModels;
        SActions.receivedTweets(t);
    });
  },
  addTweet(body){
    $.ajax({
  	    url: '/api/v2/tweets',
  	    contentType: 'application/json',
  	    type: 'POST',
  	    data: JSON.stringify({
  		    'username': "rd",
            'body': body,
  	    }),
  	    success: function() {
  	        alert("添加成功！");
            rawTweet => SActions.receivedTweet({ username: "rd", body: body, timestamp: Date.now});
  	    },
  	    error: function() {
  		      return console.log("Failed");
        }
    });
  }
}
