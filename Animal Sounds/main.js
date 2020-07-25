console.log("Ooh, a easter egg in the console?");
console.log("https://animalsounds.netlify.app/HELL_unknown_sound.mp3");
console.log("https://animalsounds.netlify.app/HELL_come_closer.mp3");
console.log("I fear no man, but that.. thing... (link above) it scares me.");
console.log("Still here? How did you find the developer console anyway?");
console.log("Must be lost, anyway type play_all_sounds() then enter it");

function playsound(Animal_Name)
{
	switch (Animal_Name)
	{
		case "Cow":
			var cowsound = new Audio("cow.mp3");
			cowsound.play();
			break;
		case "Chicken":
			var chickensound = new Audio("https://www.google.com/logos/fnbx/animal_sounds/chicken.mp3");
			chickensound.play();
			break;
		case "Dog":
			var dogsound = new Audio("https://www.google.com/logos/fnbx/animal_sounds/dog.mp3");
			dogsound.play();
			break;
		case "Bird":
			var birdsound = new Audio("https://www.google.com/logos/fnbx/animal_sounds/dove.mp3");
			birdsound.play();
			break;
		case "Pig":
			var pigsound = new Audio("pig.mp3");
			pigsound.play();
			break;
		case "Cat":
			var catsound = new Audio("https://www.google.com/logos/fnbx/animal_sounds/cat.mp3");
			catsound.play();
			break;
		case "Horse":
			var horsesound = new Audio("https://www.google.com/logos/fnbx/animal_sounds/horse.mp3");
			horsesound.play()
			break;
		case "Bee":
			var beesound = new Audio("https://www.google.com/logos/fnbx/animal_sounds/bee.mp3");
			beesound.play();
			break;
		case "Duck":
			var ducksound = new Audio("https://www.google.com/logos/fnbx/animal_sounds/duck.mp3");
			ducksound.play();
			break;
		case "Tiger":
			var tigersound = new Audio("https://www.google.com/logos/fnbx/animal_sounds/tiger.mp3");
			tigersound.play();
			break;
		case "Sheep":
			var sheepsound = new Audio("https://www.google.com/logos/fnbx/animal_sounds/sheep.mp3");
			sheepsound.play();
			break;
		case "Crow":
			var crowsound = new Audio("https://www.google.com/logos/fnbx/animal_sounds/crow.mp3");
			crowsound.play();
			break;
		case "UNKNOWN SOUND":
			var cursedsound = new Audio("HELL_come_closer.mp3");
			cursedsound.play();
			break;
		default:
			var cursedsound = new Audio("HELL_unknown_sound.mp3");
			cursedsound.play();
			break;
	}
}
function click_handler()
{
	var Animal_Name = document.getElementById("animal_name").value;
	var Animal_Sound = document.getElementById("animal_sound");
	switch (Animal_Name)
	{
		case "Cow":
			Animal_Sound.innerHTML = "Moo";
			playsound(Animal_Name);
			break;
		case "Chicken":
			Animal_Sound.innerHTML = "Bawk";
			playsound(Animal_Name);
			break;
		case "Dog":
			Animal_Sound.innerHTML = "Woof";
			playsound(Animal_Name);
			break;
		case "Bird":
			Animal_Sound.innerHTML = "Chirp";
			playsound(Animal_Name);
			break;
		case "Pig":
			Animal_Sound.innerHTML = "Oink";
			playsound(Animal_Name);
			break;
		case "Cat":
			Animal_Sound.innerHTML = "Meow";
			playsound(Animal_Name);
			break;
		case "Horse":
			Animal_Sound.innerHTML = "Neigh";
			playsound(Animal_Name);
			break;
		case "Bee":
			Animal_Sound.innerHTML = "Buzzz";
			playsound(Animal_Name);
			break;
		case "Duck":
			Animal_Sound.innerHTML = "Quack";
			playsound(Animal_Name);
			break;
		case "Tiger":
			Animal_Sound.innerHTML = "Roar";
			playsound(Animal_Name);
			break;
		case "Sheep":
			Animal_Sound.innerHTML = "Baa";
			playsound(Animal_Name);
			break;
		case "Crow":
			Animal_Sound.innerHTML = "AH AH AH";
			playsound(Animal_Name);
			break;
		case "UNKNOWN SOUND":
			Animal_Sound.innerHTML = "???????......";
			playsound(Animal_Name);
			break;
		default:
			Animal_Sound.innerHTML = "Unknown Sound";
			playsound(Animal_Name);
			break;
	}
}

function play_all_sounds()
{
	playsound("Cow");
	playsound("Chicken");
	playsound("Dog");
	playsound("Bird");
	playsound("Pig");
	playsound("Cat");
	playsound("Horse");
	playsound("Bee");
	playsound("Duck");
	playsound("Tiger");
	playsound("Sheep");
	playsound("");
	playsound("UNKNOWN SOUND");
}