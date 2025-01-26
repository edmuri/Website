
//listed from most recent to oldest
var homePosts = [
   /* //Winter update 3
    {
        title: "WinterUpdate3",
        date: "January 6, 2025",
        images: [
            "photos/home/crabDog.jpg"
        ],
        description: `DOGEE`
    },

    //Can't wait..
    {
        title: "Update2",
        date: "January 3, 2025",
        images: [
            "photos/home/funDog.jpg",
            "photos/home/smileyDog.jpg"
        ],
        description: `Can't want for school to start again!`
    },*/

    //Winter Break Update
    {
        title: "WinterBreakUpdate",
        date: "January 1, 2025",
        images: [
            "photos/home/crabDog.jpg",
            "photos/home/funDog.jpg"
        ],
        description: `Winter Break has been super busy! In addition to making this website 
                            I'm currently working with the Spotify API for two projects,
                                one to make playlists and another for a widget for my computer.
                                    Check out my projects tab to see the final results!`
    }
];

var projects = [
    //Playlist Maker
    /*{
        name: "Playlist Maker",
        id:"PlaylistMaker",
        date: "12/24-Present",
        images: [
            'photos/general/inProgress.jpg'
        ],
        link:'https://github.com/edmuri/Playlist_Maker',
        description: `This is an application that uses the Spotify API to create a playlist for the user on their spotify account.`
    },*/
    //Spotify Widget
    /*{
        name: "Spotify Widget",
        id:"SpotifyWidget",
        date: "12/24-Present",
        images:[
            'photos/general/inProgress.jpg'
        ],
        link:'https://github.com/edmuri/Website',
        description: `This is a widget I am making for my computer desktop. The goal is to use the online Spotify API
                                    to display the current song playing and allow the widget to change the theme of my desktop to match
                                        the album color palette.`
    },*/
    //Arcade Simulator
    {
        name: "Arcade Simulator",
        id: "ArcadeSim",
        date: "10/23-12/23",
        images:[
            "photos/projects/ArcadeSimulator/AsteroidShooter.png",
            "photos/projects/ArcadeSimulator/GhostShooter.png",
            "photos/projects/ArcadeSimulator/GuessTheNumber.png",
            "photos/projects/ArcadeSimulator/Leaderboard.png",
            "photos/projects/ArcadeSimulator/PlayMenu.png"
        ],
        wrapNum: 0,
        link:'https://github.com/edmuri/Arcade-Simulator',
        description: `This is an arcade simulator game that I created my sophomore year of college.
                            I made it using SDL2 and C++. This took me about two months to make.`
    }
];

var activities = [
    {
        groupName: "",
        position: "",
        images: []
    }
];

let wrapIndexes = [];


if(document.URL.includes("index.html")){
    createPostSection();
}
if(document.URL.includes("projects.html")){
    createProjectsPage();
    initializeGallerys();
}
if(document.URL.includes("activities.html")){
    createActivitiesPage();
}







/*

FUNCTIONS

*/

function createActivitiesPage(){

}

function createProjectsPage(){
    let main = document.createElement('main');
    main.className = "projectMain";

    let buttonSection = document.createElement('section');
    buttonSection.className = "buttonSection";
    main.appendChild(buttonSection);


    for(const element of projects){

        let button = createButton(element.name, element.id);
        buttonSection.appendChild(button);

        let projectDiv = createProjectDiv(element.name,element.id,element.images,element.description,element.date,element.link,element.wrapNum);
        main.appendChild(projectDiv);

    }
    document.body.appendChild(main);
}

function createButton(name,id){
    let button = document.createElement('button');
    button.className = "projectButton";
    button.textContent = name;
    button.setAttribute('onclick', `slideToDiv(${id})`);

    return button;
}
function createToTop(){
    let backToTop = document.createElement('button');
    backToTop.className = "backToTop";
    backToTop.textContent = "Back To Top";
    backToTop.setAttribute('onclick',"slideToTop()");

    return backToTop;
}
function slideToTop(){
    window.scroll({top: 0, behavior:'smooth'});
}
function slideToDiv(divName){
    divName.scrollIntoView({behavior:'smooth', block:'center'});
}

function createProjectDiv(name,id,images,description,date,link,wrapNum){
    let backToTopBut = createToTop();

    let projectDiv = document.createElement('div');
    projectDiv.className = "projectDiv";
    projectDiv.id = id;

    let textSummary = document.createElement('p');
    textSummary.className = "projectDescription";

    let hyperLink = document.createElement('a');
    hyperLink.textContent = "Check it Out";
    hyperLink.className = "projectLink";
    hyperLink.setAttribute('href',link);
    hyperLink.setAttribute('target', '_blank');

    textSummary.textContent = description;
    textSummary.appendChild(hyperLink);

    let photos = createGallery(images,wrapNum);
    
    projectDiv.appendChild(photos);
    projectDiv.appendChild(textSummary);
    projectDiv.appendChild(backToTopBut);

    return projectDiv;
}

function createGallery(images,wrapIndex){
    let galleryContainer = document.createElement('div');
    galleryContainer.className = "galleryContainer";

    let galleryDiv = document.createElement('div');
    galleryDiv.className = "galleryWrap";

    let prevButton = document.createElement('button');
    prevButton.className = "galleryButton";
    prevButton.setAttribute('onclick',`moveSlide(-1,${wrapIndex})`)

    let nextButton = document.createElement('button');
    nextButton.className = "galleryButton";
    nextButton.setAttribute('onclick',`moveSlide(1,${wrapIndex})`);

    galleryContainer.appendChild(prevButton);

    for(const element of images){
        let tmpImage = document.createElement('img');
        tmpImage.className = "galleryImage";
        tmpImage.src = element;

        galleryDiv.appendChild(tmpImage);
    }

    galleryContainer.appendChild(galleryDiv)
    galleryContainer.appendChild(nextButton)

    return galleryContainer;
}

function initializeGallerys() {
    const galleries = document.querySelectorAll('.galleryContainer');
    galleries.forEach((galleryWrap, index) => {wrapIndexes[index] = 0;});
}

function moveSlide(direction,wrapIndex){

    const slides = document.querySelectorAll(`.galleryContainer:nth-of-type(${wrapIndex + 1}) .galleryWrap .galleryImage`);
    const totalSlides = slides.length;

    wrapIndexes[wrapIndex] += direction;


    if (wrapIndexes[wrapIndex] < 0) {
        wrapIndexes[wrapIndex] = totalSlides - 1;
    } 
    else if (wrapIndexes[wrapIndex] >= totalSlides) {
        wrapIndexes[wrapIndex] = 0;
    }

    const galleryWrap = document.querySelector(`.galleryContainer:nth-of-type(${wrapIndex + 1}) .galleryWrap`);
    galleryWrap.style.transform = `translateX(-${wrapIndexes[wrapIndex] * 100}%)`;
}

function createPosts(title,date,images,description){
    let postArticle = document.createElement('article');
    postArticle.className = "postContainer";

    let postDiv = document.createElement('div');
    postDiv.className = "postOuterFrame";

    let postDate = document.createElement('p');
    postDate.className = "postDate";
    postDate.textContent = date;

    let text = document.createElement('p');
    text.className = "postText";
    text.textContent = description;

    let image = document.createElement('img');
    image.className = "PostPhotos";
    image.src = images[0];

    postDiv.appendChild(postDate);
    postDiv.appendChild(image);
    postDiv.appendChild(text);
    postArticle.appendChild(postDiv);
    
    return postArticle;
}

function createPostSection(){
    let main = document.createElement('main');

    let verticalLine = document.createElement('section');
    verticalLine.className = "lineSection";

    let timeLine = document.createElement('div');
    timeLine.className = "VerticalTimeline";
    verticalLine.appendChild(timeLine);

    let postSection = document.createElement('section');
    postSection.className = "posts";

    for(const element of homePosts){
        var post = createPosts(element.title,element.date,element.images,element.description);
        postSection.appendChild(post);
    }

    main.appendChild(verticalLine);
    main.appendChild(postSection);

    let footer = document.getElementById('footer');
    document.body.insertBefore(main,footer);
}

