const tweet = document.getElementById("tweet");
const username = document.getElementById("username");
const submit = document.getElementById("submit");
const newsfeed = document.getElementsByClassName("newsfeed")[0];


function creatTweet(){
    let ptweet = document.createElement("p");
    let h1Username = document.createElement("h4");
    let holder = document.createElement("div");
    holder.id = "tweet-holder"
    ptweet.textContent=tweet.value;
    h1Username.textContent=username.value;
    holder.appendChild(ptweet);
    holder.appendChild(h1Username);
    newsfeed.appendChild(holder);


   

};
submit.addEventListener("click",submitTweet);
function submitTweet(e){
    e.preventDefault()
    console.log("hello world",tweet.value,username.value);
    creatTweet()
};
