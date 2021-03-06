"use strict";
let obj=[
  {
    "category": "Best Picture",
    "nominees": [
      {
        "nominee": "Clint Eastwood, Robert Lorenz, Andrew Lazar, Bradley Cooper and Peter Morgan",
        "film": "American Sniper"
      },
      {
        "nominee": "Alejandro G. Iñárritu, John Lesher and James W. Skotchdopole",
        "film": "Birdman or (The Unexpected Virtue of Ignorance)"
      },
      {
        "nominee": "Richard Linklater and Cathleen Sutherland",
        "film": "Boyhood"
      },
      {
        "nominee": "Wes Anderson, Scott Rudin, Steven Rales and Jeremy Dawson",
        "film": "The Grand Budapest Hotel"
      },
      {
        "nominee": "Nora Grossman, Ido Ostrowsky and Teddy Schwarzman",
        "film": "The Imitation Game"
      },
      {
        "nominee": "Christian Colson, Oprah Winfrey, Dede Gardner and Jeremy Kleiner",
        "film": "Selma"
      },
      {
        "nominee": "Tim Bevan, Eric Fellner, Lisa Bruce and Anthony McCarten",
        "film": "The Theory of Everything"
      },
      {
        "nominee": "Jason Blum, Helen Estabrook and David Lancaster",
        "film": "Whiplash"
      }
    ]
  },
  {
    "category": "Actor in a Leading Role",
    "nominees": [
      {
        "nominee": "Steve Carell",
        "film": "Foxcatcher"
      },
      {
        "nominee": "Bradley Cooper",
        "film": "American Sniper"
      },
      {
        "nominee": "Benedict Cumberbatch",
        "film": "The Imitation Game"
      },
      {
        "nominee": "Michael Keaton",
        "film": "Birdman or (The Unexpected Virtue of Ignorance)"
      },
      {
        "nominee": "Eddie Redmayne",
        "film": "The Theory of Everything"
      }
    ]
  },
  {
    "category": "Actress in a Leading Role",
    "nominees": [
      {
        "nominee": "Marion Cotillard",
        "film": "Two Days, One Night"
      },
      {
        "nominee": "Felicity Jones",
        "film": "The Theory of Everything"
      },
      {
        "nominee": "Julianne Moore",
        "film": "Still Alice"
      },
      {
        "nominee": "Rosamund Pike",
        "film": "Gone Girl"
      },
      {
        "nominee": "Reese Witherspoon",
        "film": "Wild"
      }
    ]
  },
  {
    "category": "Actor in a Supporting Role",
    "nominees": [
      {
        "nominee": "Robert Duvall",
        "film": "The Judge"
      },
      {
        "nominee": "Ethan Hawke",
        "film": "Boyhood"
      },
      {
        "nominee": "Edward Norton",
        "film": "Birdman or (The Unexpected Virtue of Ignorance)"
      },
      {
        "nominee": "Mark Ruffalo",
        "film": "Foxcatcher"
      },
      {
        "nominee": "J.K. Simmons",
        "film": "Whiplash"
      }
    ]
  },
  {
    "category": "Actress in a Supporting Role",
    "nominees": [
      {
        "nominee": "Patricia Arquette",
        "film": "Boyhood"
      },
      {
        "nominee": "Laura Dern",
        "film": "Wild"
      },
      {
        "nominee": "Keira Knightley",
        "film": "The Imitation Game"
      },
      {
        "nominee": "Emma Stone",
        "film": "Birdman or (The Unexpected Virtue of Ignorance)"
      },
      {
        "nominee": "Meryl Streep",
        "film": "Into the Woods"
      }
    ]
  },
  {
    "category": "Animated Feature Film",
    "nominees": [
      {
        "nominee": "Don Hall, Chris Williams and Roy Conli",
        "film": "Big Hero 6"
      },
      {
        "nominee": "Anthony Stacchi, Graham Annable and Travis Knight",
        "film": "The Boxtrolls"
      },
      {
        "nominee": "Dean DeBlois and Bonnie Arnold",
        "film": "How to Train Your Dragon 2"
      },
      {
        "nominee": "Tomm Moore and Paul Young",
        "film": "Song of the Sea"
      },
      {
        "nominee": "Isao Takahata and Yoshiaki Nishimura",
        "film": "The Tale of the Princess Kaguya"
      }
    ]
  },
  {
    "category": "Cinematography",
    "nominees": [
      {
        "nominee": "Emmanuel Lubezki",
        "film": "Birdman or (The Unexpected Virtue of Ignorance)"
      },
      {
        "nominee": "Robert Yeoman",
        "film": "The Grand Budapest Hotel"
      },
      {
        "nominee": "Lukasz Zal and Ryszard Lenczewski",
        "film": "Ida"
      },
      {
        "nominee": "Dick Pope",
        "film": "Mr. Turner"
      },
      {
        "nominee": "Roger Deakins",
        "film": "Unbroken"
      }
    ]
  },
  {
    "category": "Costume Design",
    "nominees": [
      {
        "nominee": "Milena Canonero",
        "film": "The Grand Budapest Hotel"
      },
      {
        "nominee": "Mark Bridges",
        "film": "Inherent Vice"
      },
      {
        "nominee": "Colleen Atwood",
        "film": "Into the Woods"
      },
      {
        "nominee": "Anna B. Sheppard and Jane Clive",
        "film": "Maleficent"
      },
      {
        "nominee": "Jacqueline Durran",
        "film": "Mr. Turner"
      }
    ]
  },
  {
    "category": "Directing",
    "nominees": [
      {
        "nominee": "Alejandro G. Iñárritu",
        "film": "Birdman or (The Unexpected Virtue of Ignorance)"
      },
      {
        "nominee": "Richard Linklater",
        "film": "Boyhood"
      },
      {
        "nominee": "Bennett Miller",
        "film": "Foxcatcher"
      },
      {
        "nominee": "Wes Anderson",
        "film": "The Grand Budapest Hotel"
      },
      {
        "nominee": "Morten Tyldum",
        "film": "The Imitation Game"
      }
    ]
  },
  {
    "category": "Documentary Feature",
    "nominees": [
      {
        "nominee": "Laura Poitras, Mathilde Bonnefoy and Dirk Wilutzky",
        "film": "CitizenFour"
      },
      {
        "nominee": "John Maloof and Charlie Siskel",
        "film": "Finding Vivian Maier"
      },
      {
        "nominee": "Rory Kennedy and Keven McAlester",
        "film": "Last Days in Vietnam"
      },
      {
        "nominee": "Wim Wenders, Juliano Ribeiro Salgado and David Rosier",
        "film": "The Salt of the Earth"
      },
      {
        "nominee": "Orlando von Einsiedel and Joanna Natasegara",
        "film": "Virunga"
      }
    ]
  },
  {
    "category": "Documentary Short Subject",
    "nominees": [
      {
        "nominee": "Ellen Goosenberg Kent and Dana Perry",
        "film": "Crisis Hotline: Veterans Press 1"
      },
      {
        "nominee": "Aneta Kopacz",
        "film": "Joanna"
      },
      {
        "nominee": "Tomasz &Sacute;liwi&nacute;ski and Maciej &Sacute;lesicki",
        "film": "Our Curse"
      },
      {
        "nominee": "Gabriel Serra Arguello",
        "film": "The Reaper (La Parka)"
      },
      {
        "nominee": "J. Christian Jensen",
        "film": "White Earth"
      }
    ]
  },
  {
    "category": "Film Editing",
    "nominees": [
      {
        "nominee": "Joel Cox and Gary D. Roach",
        "film": "American Sniper"
      },
      {
        "nominee": "Sandra Adair",
        "film": "Boyhood"
      },
      {
        "nominee": "Barney Pilling",
        "film": "The Grand Budapest Hotel"
      },
      {
        "nominee": "William Goldenberg",
        "film": "The Imitation Game"
      },
      {
        "nominee": "Tom Cross",
        "film": "Whiplash"
      }
    ]
  },
  {
    "category": "Foreign Language Film",
    "nominees": [
      {
        "nominee": "Poland; Directed by Pawel Pawlikowski",
        "film": "Ida"
      },
      {
        "nominee": "Russia; Directed by Andrey Zvyagintsev",
        "film": "Leviathan"
      },
      {
        "nominee": "Estonia; Directed by Zaza Urushadze",
        "film": "Tangerines"
      },
      {
        "nominee": "Mauritania; Directed by Abderrahmane Sissako",
        "film": "Timbuktu"
      },
      {
        "nominee": "Argentina; Directed by Damián Szifron",
        "film": "Wild Tales"
      }
    ]
  },
  {
    "category": "Makeup and Hairstyling",
    "nominees": [
      {
        "nominee": "Bill Corso and Dennis Liddiard",
        "film": "Foxcatcher"
      },
      {
        "nominee": "Frances Hannon and Mark Coulier",
        "film": "The Grand Budapest Hotel"
      },
      {
        "nominee": "Elizabeth Yianni-Georgiou and David White",
        "film": "Guardians of the Galaxy"
      }
    ]
  },
  {
    "category": "Music Original Score",
    "nominees": [
      {
        "nominee": "Alexandre Desplat",
        "film": "The Grand Budapest Hotel"
      },
      {
        "nominee": "Alexandre Desplat",
        "film": "The Imitation Game"
      },
      {
        "nominee": "Hans Zimmer",
        "film": "Interstellar"
      },
      {
        "nominee": "Gary Yershon",
        "film": "Mr. Turner"
      },
      {
        "nominee": "Jóhann Jóhannsson",
        "film": "The Theory of Everything"
      }
    ]
  },
  {
    "category": "Music Original Song",
    "nominees": [
      {
        "nominee": "Everything Is Awesome - Music and Lyric by Shawn Patterson",
        "film": "THE LEGO MOVIE"
      },
      {
        "nominee": "Glory - Music and Lyric by John Stephens and Lonnie Lynn",
        "film": "Selma"
      },
      {
        "nominee": "Grateful - Music and Lyric by Diane Warren",
        "film": "BEYOND THE LIGHTS"
      },
      {
        "nominee": "I'm Not Gonna Miss You - Music and Lyric by Glen Campbell and Julian Raymond",
        "film": "GLEN CAMPBELL...I'LL BE ME"
      },
      {
        "nominee": "Lost Stars - Music and Lyric by Gregg Alexander and Danielle Brisebois",
        "film": "BEGIN AGAIN"
      }
    ]
  },
  {
    "category": "Production Design",
    "nominees": [
      {
        "nominee": "Adam Stockhausen (Production Design); Anna Pinnock (Set Decoration)",
        "film": "The Grand Budapest Hotel"
      },
      {
        "nominee": "Maria Djurkovic (Production Design); Tatiana Macdonald (Set Decoration)",
        "film": "The Imitation Game"
      },
      {
        "nominee": "Nathan Crowley (Production Design); Gary Fettis (Set Decoration)",
        "film": "Interstellar"
      },
      {
        "nominee": "Dennis Gassner (Production Design); Anna Pinnock (Set Decoration)",
        "film": "Into the Woods"
      },
      {
        "nominee": "Suzie Davies (Production Design); Charlotte Watts (Set Decoration)",
        "film": "Mr. Turner"
      }
    ]
  },
  {
    "category": "Short Film Animated",
    "nominees": [
      {
        "nominee": "Daisy Jacobs and Christopher Hees",
        "film": "The Bigger Picture"
      },
      {
        "nominee": "Robert Kondo and Dice Tsutsumi",
        "film": "The Dam Keeper"
      },
      {
        "nominee": "Patrick Osborne and Kristina Reed",
        "film": "Feast"
      },
      {
        "nominee": "Torill Kove",
        "film": "Me and My Moulton"
      },
      {
        "nominee": "Joris Oprins",
        "film": "A Single Life"
      }
    ]
  },
  {
    "category": "Short Film Live Action",
    "nominees": [
      {
        "nominee": "Oded Binnun and Mihal Brezis",
        "film": "Aya"
      },
      {
        "nominee": "Michael Lennox and Ronan Blaney",
        "film": "Boogaloo and Graham"
      },
      {
        "nominee": "Hu Wei and Julien Féret",
        "film": "Butter Lamp (La Lampe au Beurre de Yak)"
      },
      {
        "nominee": "Talkhon Hamzavi and Stefan Eichenberger",
        "film": "Parvaneh"
      },
      {
        "nominee": "Mat Kirkby and James Lucas",
        "film": "The Phone Call"
      }
    ]
  },
  {
    "category": "Sound Editing",
    "nominees": [
      {
        "nominee": "Alan Robert Murray and Bub Asman",
        "film": "American Sniper"
      },
      {
        "nominee": "Martin Hernández and Aaron Glascock",
        "film": "Birdman or (The Unexpected Virtue of Ignorance)"
      },
      {
        "nominee": "Brent Burge and Jason Canovas",
        "film": "The Hobbit: The Battle of the Five Armies"
      },
      {
        "nominee": "Richard King",
        "film": "Interstellar"
      },
      {
        "nominee": "Becky Sullivan and Andrew DeCristofaro",
        "film": "Unbroken"
      }
    ]
  },
  {
    "category": "Sound Mixing",
    "nominees": [
      {
        "nominee": "John Reitz, Gregg Rudloff and Walt Martin",
        "film": "American Sniper"
      },
      {
        "nominee": "Jon Taylor, Frank A. Montaño and Thomas Varga",
        "film": "Birdman or (The Unexpected Virtue of Ignorance)"
      },
      {
        "nominee": "Gary A. Rizzo, Gregg Landaker and Mark Weingarten",
        "film": "Interstellar"
      },
      {
        "nominee": "Jon Taylor, Frank A. Montaño and David Lee",
        "film": "Unbroken"
      },
      {
        "nominee": "Craig Mann, Ben Wilkins and Thomas Curley",
        "film": "Whiplash"
      }
    ]
  },
  {
    "category": "Visual Effects",
    "nominees": [
      {
        "nominee": "Dan DeLeeuw, Russell Earl, Bryan Grill and Dan Sudick",
        "film": "Captain America: The Winter Soldier"
      },
      {
        "nominee": "Joe Letteri, Dan Lemmon, Daniel Barrett and Erik Winquist",
        "film": "Dawn of the Planet of the Apes"
      },
      {
        "nominee": "Stephane Ceretti, Nicolas Aithadi, Jonathan Fawkner and Paul Corbould",
        "film": "Guardians of the Galaxy"
      },
      {
        "nominee": "Paul Franklin, Andrew Lockley, Ian Hunter and Scott Fisher",
        "film": "Interstellar"
      },
      {
        "nominee": "Richard Stammers, Lou Pecora, Tim Crosbie and Cameron Waldbauer",
        "film": "X-Men: Days of Future Past"
      }
    ]
  },
  {
    "category": "Writing Adapted Screenplay",
    "nominees": [
      {
        "nominee": "Written by Jason Hall",
        "film": "American Sniper"
      },
      {
        "nominee": "Written by Graham Moore",
        "film": "The Imitation Game"
      },
      {
        "nominee": "Written for the screen by Paul Thomas Anderson",
        "film": "Inherent Vice"
      },
      {
        "nominee": "Screenplay by Anthony McCarten",
        "film": "The Theory of Everything"
      },
      {
        "nominee": "Written by Damien Chazelle",
        "film": "Whiplash"
      }
    ]
  },
  {
    "category": "Writing Original Screenplay",
    "nominees": [
      {
        "nominee": "Written by Alejandro G. Iñárritu, Nicolás Giacobone, Alexander Dinelaris, Jr. & Armando Bo",
        "film": "Birdman or (The Unexpected Virtue of Ignorance)"
      },
      {
        "nominee": "Written by Richard Linklater",
        "film": "Boyhood"
      },
      {
        "nominee": "Written by E. Max Frye and Dan Futterman",
        "film": "Foxcatcher"
      },
      {
        "nominee": "Screenplay by Wes Anderson; Story by Wes Anderson & Hugo Guinness",
        "film": "The Grand Budapest Hotel"
      },
      {
        "nominee": "Written by Dan Gilroy",
        "film": "Nightcrawler"
      }
    ]
  }
]

//Make array for each table
let filmArray= new Array();
let categoryArray= new Array();
let nominationArray= new Array();

//Run through all categories
for(let i=0;i<obj.length;i++){

	//Add the category name
	categoryArray.push(obj[i].category);

	//Get the list of nominees
	let current=obj[i].nominees;
	for(let j=0;j<current.length;j++){

		//Get each film in the category
		let film= current[j].film;

		//Check if we already got the film in the table
		let filmID= filmArray.indexOf(film);

		//if not add it, and set the film id
		if(filmID===-1){
			filmArray.push(film);
			filmID=filmArray.length-1;
		}

		//Add info to object...
		let nomination= {};	
		nomination.filmid=filmID;
		nomination.kategori=i;
		nomination.note=current[j].nominee;

		//... and add it to the nomination array
		nominationArray.push(nomination);
	}
}

//print the result to the terminal
for(let i=0;i<filmArray.length;i++) console.log("(\"",filmArray[i],"\"),");
for(let i=0;i<categoryArray.length;i++) console.log("(\"",categoryArray[i],"\"),");
for(let i=0;i<nominationArray.length;i++) console.log("(",nominationArray[i].filmid+1,",",nominationArray[i].kategori+1,",\"",nominationArray[i].note,"\"),");
