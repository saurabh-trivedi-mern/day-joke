
const main_container = document.getElementById("main_container");
const heading = document.getElementById("heading");

const joke_url = "https://v2.jokeapi.dev/joke/Any?type=twopart";

async function generatejoke(url){
    const response = await fetch(url);
    const data = await response.json();
    let joke_line_1 = data.setup;
    let joke_line_2 = data.delivery;
    let joke_line = document.getElementById("joke_line");
    joke_line.innerText=joke_line_1 + " " + joke_line_2;
}

generatejoke(joke_url);

let next_joke = document.getElementById("next_joke");
next_joke.addEventListener("click", ()=>{
    generatejoke(joke_url);
})

let tweet_joke = document.getElementById("tweet_joke");

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + joke_line.innerText, "Tweet Window", height="300px", width="300px");
}

tweet_joke.addEventListener("click", ()=>{
    tweet();
})



mode_btn.addEventListener("click", function(e){
    if(main_container.classList.contains("dark")){
        main_container.classList.remove("dark");
        heading.classList.remove("dark");
        mode_btn.innerText = "Dark Mode";
        localStorage.setItem('isDarkMode', false);
    }
    else{
        main_container.classList.add("dark");
        heading.classList.remove("dark");
        mode_btn.innerText = "Light Mode";
        localStorage.setItem('isDarkMode', true);
    }
    }
);


if (localStorage.getItem('isDarkMode') === 'true') {
    main_container.classList.add('dark');
    mode_btn.innerText = "Light Mode";
} else {
    main_container.classList.remove("dark");
    mode_btn.innerText = "Dark Mode";
}






