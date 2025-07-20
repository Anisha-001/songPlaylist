const songs = ['Song A ', 'Song B', 'Song C', 'Song D'];
let currentIndex = 0;

const playlistElement = document.getElementById("playlist");
const currentSongDisplay = document.getElementById("currentSongDisplay")


function renderPlaylist(){
    playlistElement.innerHTML = "";
    songs.forEach((song,index)=>{
        const li=document.createElement("li");
        li.textContent = song;
        if(index==currentIndex){
            li.classList.add("current");
        }
        li.onclick = ()=>{
            currentIndex = index;
            updateDisplay();
        };

        const delbtn =  document.createElement("span");
        delbtn.textContent = "<>";
        delbtn.className = 'delete-btn';
        delbtn.onclick = (e) =>{
            e.stopPropagation();

            removeSong(index);
        };
        li.appendChild(delbtn);
        playlistElement.appendChild(li);
    });
}

function updateDisplay(){
    if(songs.length===0){
        currentSongDisplay.textContent = "Current Song: None";

    }else{
        currentSongDisplay.textContent = `Current Song: ${songs[currentIndex]}`;
    }
    renderPlaylist();
}

function nextSong(){
    if(songs.length===0) return;

    currentIndex = (currentIndex+1)%songs.length;
    updateDisplay();
}

function previousSong(){
    if(songs.length===0) return;

    currentIndex = (currentIndex-1 + songs.length) % songs.length;
    updateDisplay();
}

function removeSong(index){
    songs.splice(index,1);
    if(index < currentIndex || currentIndex >= songs.length){
        currentIndex = Math.max(0,currentIndex-1);
    }
    updateDisplay();
}
updateDisplay();