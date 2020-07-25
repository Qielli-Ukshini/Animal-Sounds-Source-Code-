# Animal-Sounds-Source-Code-
Contains the source files for my https://animalsounds.netlify.app website. Work is under CC BY Attribution License.

Now everything that you can see is handled by index.html, and everything that makes this website actually function is in main.js. Its pretty simple.
main.js has three functions, playsound(), click_handler(), and play_all_sounds(). 

playsound():
Playsound is a function with a switch statement that checks if the specified animal sound is in the list, if it is it plays the animal sound specific to the animal.
If it does not find one it plays "HELL_unknown_sound.mp3" which is the sound file for unknown sounds.

click_handler():
Now this function is the main core of the website. When the 'Submit' button is pressed it creates the variables Animal_Name and Animal_Sound. Animal_Name is the div with the tag 'animal_name'
and Animal_Sound is the name of the animal in the textbox 'animal_sound', bit confusing I know. Now this function like the last has a switch statement which checks for specific
animal names as listed (to create new animal use 'case:' statement), next the function changes Animal_Name.innerHTML to whatever sound in TEXT (you know? like Moo or Meow or Baa).
Now the function plays the sound specific for the animal using playsound(Animal_Sound).

play_all_sounds():
This is a fun one. This function can only be used by typing it in the console as an easter egg, I put lots of easter eggs in the console.
What it does? Well, if you guessed it comprises of a stack of playsound("Whatever Animal Name Here"); then you are correct.
All the sounds overlap and its a fun mess. It even includes "HELL_unknown_sound.mp3" and "HELL_come_closer.mp3".

"HELL_come_closer.mp3":
This easter egg can only be activated by typing UNKNOWN SOUND into the textbox and entering it.
