const suggestedTopics = ['Music', 'Football', 'News', 'Cinema', 'Games', 'Cricket', 'Tennis', 'Chess', 'Movies', 'Netflix'];
const videos = [{
  id: 1,
  title: "AR Rahman songs",
  videoThumbnailUrl: "../assets/images/video1.webp",
  imageAlternateText: 'AR Rahman',
  channelName: "Channel A",
  channelThumbnailUrl: "https://placehold.co/32/cc9999/993333?text=A",
  views: "1M views",
  publishedDate: "4 weeks ago",
},
{
  id: 2,
  title: "IND vs NZ",
  videoThumbnailUrl: "../assets/images/video2.webp",
  imageAlternateText: 'IND vs Nz',
  channelName: "Channel B",
  channelThumbnailUrl: "https://placehold.co/32/800000/ffffff?text=B",
  views: "3M views",
  publishedDate: "4 weeks ago",
},
{
  id: 3,
  title: "How to make chicken masala",
  videoThumbnailUrl: "../assets/images/video3.webp",
  imageAlternateText: 'chicken masala',
  channelName: "Channel C",
  channelThumbnailUrl: "https://placehold.co/32/0000FF/ffffff?text=C",
  views: "3K views",
  publishedDate: "1 weeks ago",
},
{
  id: 4,
  title: "Ifran Views",
  videoThumbnailUrl: "../assets/images/video4.webp",
  imageAlternateText: 'Ifran Views',
  channelName: "Channel D",
  channelThumbnailUrl: "https://placehold.co/32/FFFF00/ffffff?text=D",
  views: "856 views",
  publishedDate: "4 days ago",
},
{
  id: 5,
  title: "how to make mutton chuka",
  videoThumbnailUrl: "../assets/images/video5.webp",
  imageAlternateText: 'Village food',
  channelName: "Channel E",
  channelThumbnailUrl: "https://placehold.co/32/800000/ffffff?text=E",
  views: "79 views",
  publishedDate: "10 weeks ago",
},
{
  id: 6,
  title: "how to learn Reactjs",
  videoThumbnailUrl: "../assets/images/video6.webp",
  imageAlternateText: 'Net Ninja',
  channelName: "Channel F",
  channelThumbnailUrl: "https://placehold.co/32/008000/ffffff?text=F",
  views: "1M views",
  publishedDate: "4 weeks ago",
},
{
  id: 7,
  title: "Sun News Live",
  videoThumbnailUrl: "../assets/images/video7.webp",
  imageAlternateText: 'Sun News',
  channelName: "Channel G",
  channelThumbnailUrl: "https://placehold.co/32/f00/ffffff?text=G",
  views: "Live",
  publishedDate: "updated a min ago",
},
{
  id: 8,
  title: "CWC season 4 promo",
  videoThumbnailUrl: "../assets/images/video8.webp",
  imageAlternateText: 'Vijay TV',
  channelName: "Channel H",
  channelThumbnailUrl: "https://placehold.co/32/800080/ffffff?text=H",
  views: "1.5K views",
  publishedDate: "4 weeks ago",
},
];
//map function to add suggestedTopic to home screen
let suggestedElements = suggestedTopics.map((topic) => {
  return (
    `<li><a href="#">${topic}</a></li>`
  )
}).join('');
let suggestedTopicsWrapper = document.getElementById("suggestedTopics");
suggestedTopicsWrapper.innerHTML = `<ul>${suggestedElements}</ul>`;

//map function to add videos to home screen
let gridWrapper = document.getElementById("grid-parent");
videos.map((video) => {
  gridWrapper.innerHTML +=
    `<div class="grid-wrapper">
        <div class="grid-wrapper-img">
          <img src=${video.videoThumbnailUrl} alt="${video.imageAlternateText}">
        </div>
        <div class="grid-wrapper-details">
          <div class="grid-wrapper-avatar">
            <img src=${video.channelThumbnailUrl} alt="${video.channelName}">
          </div>
          <div class="grid-wrapper-channel">
            <a class="redirectVideo" href="./video.html">
              <h3>${video.title}</h3>
            </a>
             <div class="grid-wrapper-channel-views">
              <a href="#">${video.channelName}</a>
              <a href="#">
                <i class="fa-regular fa-circle-check"></i>
                <span class="tooltip">Verified</span>
              </a>
              <p>
                <span>${video.views}</span>
                <span>${video.publishedDate}</span>
              </p>
            </div>
          </div>
        </div>
      </div>`
}).join('');


//function to add to local storage
for (let i = 0; i < videos.length; i++) {
  const addLocalStorage = document.querySelectorAll('.grid-wrapper');
  addLocalStorage[i]?.addEventListener('click', function (event) {
    localStorage.setItem('videoTitle', addLocalStorage[i].children[1].children[1].children[0].innerText);
    localStorage.setItem('videoChannel', addLocalStorage[i].children[1].children[1].children[1].children[0].innerHTML);
    localStorage.setItem('videoViews', addLocalStorage[i].children[1].children[1].children[1].children[2].children[0].innerHTML);
    localStorage.setItem('videoDate', addLocalStorage[i].children[1].children[1].children[1].children[2].children[1].innerHTML);
  });
}
//heading
//addLocalStorage[i].children[1].children[1].children[0].innerText

//channel
//addLocalStorage[i].children[1].children[1].children[1].children[0].innerHTML

//views
//addLocalStorage[i].children[1].children[1].children[1].children[2].children[0].innerHTML

//datepublish
//addLocalStorage[i].children[1].children[1].children[1].children[2].children[1].innerHTML

