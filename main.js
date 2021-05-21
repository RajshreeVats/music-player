let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "How you like that workout remix",
     path: "music/1.mp3",
     img: "image/img1.jpg",
     singer: "BlackPink"
   },
   {
     name: "Believer",
     path: "music/2.mp3",
     img: "image/img2.jpg",
     singer: "Imagine Dragons"
   },
   {
     name: "Let me love you",
     path: "music/3.mp3",
     img: "image/img3.jpg",
     singer: "Justin Bieber"
   },
   {
     name: "How you like that",
     path: "music/4.mp3",
     img: "image/img4.jpg",
     singer: "Blackpink"
   },
   {
     name: "Faded",
     path: "music/5.mp3",
     img: "image/img5.jpg",
     singer: "Alan Walker"
   },
   {
	name: "Hall of fame",
	path: "music/6.mp3",
	img: "image/img6.jpg",
	singer: "The Script"
  },
  {
	name: "yummy",
	path: "music/7.mp3",
	img: "image/img7.jpg",
	singer: "Justin Bieber"
  },
  {
	name: "sugar",
	path: "music/8.mp3",
	img: "image/img8.jpg",
	singer: "Maroon 5"
  },
  {
	name: "Taki Taki",
	path: "music/9.mp3",
	img: "image/img9.jpg",
	singer: "Dj Snake"
  },
  {
	name: "Call me by your Name",
	path: "music/10.mp3",
	img: "image/img10.jpg",
	singer: "Montero"
  },
  {
	name: "Without Me",
	path: "music/11.mp3",
	img: "image/img11.jpg",
	singer: "Eminem"
  },
  {
	name: "Love the way you Lie",
	path: "music/12.mp3",
	img: "image/img12.jpg",
	singer: "Eminem"
  },
  {
	name: "Instrumental",
	path: "music/13.mp3",
	img: "image/img13.jpg",
	singer: "Happy, calm"
  },
  {
	name: "Instrumental",
	path: "music/14.mp3",
	img: "image/img14.jpg",
	singer: "Happy, Rock"
  },
  {
	name: "Instrumental",
	path: "music/15.mp3",
	img: "image/img15.jpg",
	singer: "Nature, Chill"
  },
  {
	name: "Instrumental",
	path: "music/16.mp3",
	img: "image/img16.jpg",
	singer: "Acoustic"
  }
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }