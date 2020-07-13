import API from "../js/API";

export default{
  getAllTweets(){
    console.log(1, "Tactions for tweets");
    API.getAllTweets();
  },
  sendTweet(body){
    API.addTweet(body);
  }
}