import API from "../js/API";

// 需要执行两个操作
export default{
  // 列出推文
  getAllTweets(){
    console.log(1, "Tactions for tweets");
    API.getAllTweets();
  },
  // 添加新的推文
  sendTweet(body){
    API.addTweet(body);
  }
}