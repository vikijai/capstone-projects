const asideVideos = [{
  id: 1,
  title: "Football highlight",
  videoThumbnailUrl: "../assets/images/video8.webp",
  imageAlternateText: 'Video 1',
  channelName: "Channel A",
  views: "1M views",
  publishedDate: "a min ago",
},
{
  id: 2,
  title: "Yuvan songs",
  videoThumbnailUrl: "../assets/images/video6.webp",
  imageAlternateText: 'Video 2',
  channelName: "Channel B",
  views: "5k views",
  publishedDate: "5 days ago",
},
{
  id: 3,
  title: "ReactJs tutorial",
  videoThumbnailUrl: "../assets/images/video4.webp",
  imageAlternateText: 'Video 3',
  channelName: "Channel C",
  views: "585 views",
  publishedDate: "3 months ago",
},
{
  id: 4,
  title: "nodeJs tutorial",
  videoThumbnailUrl: "../assets/images/video1.webp",
  imageAlternateText: 'Video 4',
  channelName: "Channel D",
  views: "2K views",
  publishedDate: "9 months ago",
},
{
  id: 5,
  title: "Vijay Tv special",
  videoThumbnailUrl: "../assets/images/video5.webp",
  imageAlternateText: 'Video 5',
  channelName: "Channel E",
  views: "3M views",
  publishedDate: "3 months ago",
},
{
  id: 6,
  title: "Mutton Chuka",
  videoThumbnailUrl: "../assets/images/video3.webp",
  imageAlternateText: 'Video 6',
  channelName: "Channel F",
  views: "5K views",
  publishedDate: "10 months ago",
},
{
  id: 7,
  title: "Tom and Jerry",
  videoThumbnailUrl: "../assets/images/video7.webp",
  imageAlternateText: 'Video 7',
  channelName: "Channel G",
  views: "1M views",
  publishedDate: "3 months ago",
}];
const replyComments = [
  {
    id: 1,
    replyAvatar: "https://placehold.co/32/800080/ffffff?text=V",
    replyName: "vignesh Jai",
    replyDate: "7 days ago",
    replyComment: "Hari is my schoolmate...I'm really glad and proud to see him in this channel, all the best da.... unexpected!",
    replyLike: "3.1K",
    replyReplyCount: "5"
  },
  {
    id: 2,
    replyAvatar: "https://placehold.co/32/FFFF00/ffffff?text=R",
    replyName: "Ram",
    replyDate: "4 days ago",
    replyComment: "Hari is my schoolmate...I'm really glad and proud to see him in this channel, all the best da.... unexpected!",
    replyLike: "2.1K",
    replyReplyCount: "8"
  }
];
//map function to add aside video to video page
let asideWrapper = document.getElementById("asideVideo");
asideVideos.map((video) => {
  asideWrapper.innerHTML +=
    `<div class="grid-video-wrapper">
    <a href="#">
      <img src=${video.videoThumbnailUrl} alt=${video.imageAlternateText}>
    </a>
    <a href="#">
      <h4>${video.title}</h4>
      <p class="aside-video-details">
        <span>${video.channelName}</span>
        <span>${video.views}</span>
        <span>${video.publishedDate}</span>
      </p>
    </a>
  </div>`
}).join('');

//map function to add comments to video page
let replyElements = document.querySelector(".reply-commets");
replyComments.map((reply) => {
  replyElements.innerHTML +=
    `<img src=${reply.replyAvatar} alt="B">
      <div class="reply-details">
        <h3>${reply.replyName}<span>${reply.replyDate}</span></h3>              
        <p>${reply.replyComment}</p>
        <i class="fa-regular fa-thumbs-up"></i>
        <span>${reply.replyLike}</span>
        <i class="fa-regular fa-thumbs-down"></i>
        <span>Reply</span>
        <div class="reply-drop-down">
          <i class="fa-solid fa-caret-down"></i>
          <span>${reply.replyReplyCount} replies</span>
        </div>
      </div>`
}).join('');

//get data from localStorage and display in video page
let mainVideoTitle = document.getElementById('mainVideoTitle');
let videoChannel = document.getElementById('videoChannel');
let videoViews = document.getElementById('videoViews');
let videoDate = document.getElementById('videoDate');
mainVideoTitle.innerText = localStorage.getItem('videoTitle');
videoChannel.innerText = localStorage.getItem('videoChannel');
videoViews.innerText = localStorage.getItem('videoViews');
videoDate.innerText = localStorage.getItem('videoDate');

//console.log(localStorage.getItem('video'));