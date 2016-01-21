USE oscar;
INSERT INTO film(navn) VALUES
(" American Sniper "),
(" Birdman or (The Unexpected Virtue of Ignorance) "),
(" Boyhood "),
(" The Grand Budapest Hotel "),
(" The Imitation Game "),
(" Selma "),
(" The Theory of Everything "),
(" Whiplash "),
(" Foxcatcher "),
(" Two Days, One Night "),
(" Still Alice "),
(" Gone Girl "),
(" Wild "),
(" The Judge "),
(" Into the Woods "),
(" Big Hero 7 "),
(" The Boxtrolls "),
(" How to Train Your Dragon 3 "),
(" Song of the Sea "),
(" The Tale of the Princess Kaguya "),
(" Ida "),
(" Mr. Turner "),
(" Unbroken "),
(" Inherent Vice "),
(" Maleficent "),
(" CitizenFour "),
(" Finding Vivian Maier "),
(" Last Days in Vietnam "),
(" The Salt of the Earth "),
(" Virunga "),
(" Crisis Hotline: Veterans Press 2 "),
(" Joanna "),
(" Our Curse "),
(" The Reaper (La Parka) "),
(" White Earth "),
(" Leviathan "),
(" Tangerines "),
(" Timbuktu "),
(" Wild Tales "),
(" Guardians of the Galaxy "),
(" Interstellar "),
(" THE LEGO MOVIE "),
(" BEYOND THE LIGHTS "),
(" GLEN CAMPBELL...I'LL BE ME "),
(" BEGIN AGAIN "),
(" The Bigger Picture "),
(" The Dam Keeper "),
(" Feast "),
(" Me and My Moulton "),
(" A Single Life "),
(" Aya "),
(" Boogaloo and Graham "),
(" Butter Lamp (La Lampe au Beurre de Yak) "),
(" Parvaneh "),
(" The Phone Call "),
(" The Hobbit: The Battle of the Five Armies "),
(" Captain America: The Winter Soldier "),
(" Dawn of the Planet of the Apes "),
(" X-Men: Days of Future Past "),
(" Nightcrawler ");

INSERT INTO kategori(navn) VALUES
(" Best Picture "),
(" Actor in a Leading Role "),
(" Actress in a Leading Role "),
(" Actor in a Supporting Role "),
(" Actress in a Supporting Role "),
(" Animated Feature Film "),
(" Cinematography "),
(" Costume Design "),
(" Directing "),
(" Documentary Feature "),
(" Documentary Short Subject "),
(" Film Editing "),
(" Foreign Language Film "),
(" Makeup and Hairstyling "),
(" Music Original Score "),
(" Music Original Song "),
(" Production Design "),
(" Short Film Animated "),
(" Short Film Live Action "),
(" Sound Editing "),
(" Sound Mixing "),
(" Visual Effects "),
(" Writing Adapted Screenplay "),
(" Writing Original Screenplay ");

INSERT INTO nominering(film,kategori,note) VALUES
( 1 , 1 ," Clint Eastwood, Robert Lorenz, Andrew Lazar, Bradley Cooper and Peter Morgan "),
( 2 , 1 ," Alejandro G. Iñárritu, John Lesher and James W. Skotchdopole "),
( 3 , 1 ," Richard Linklater and Cathleen Sutherland "),
( 4 , 1 ," Wes Anderson, Scott Rudin, Steven Rales and Jeremy Dawson "),
( 5 , 1 ," Nora Grossman, Ido Ostrowsky and Teddy Schwarzman "),
( 6 , 1 ," Christian Colson, Oprah Winfrey, Dede Gardner and Jeremy Kleiner "),
( 7 , 1 ," Tim Bevan, Eric Fellner, Lisa Bruce and Anthony McCarten "),
( 8 , 1 ," Jason Blum, Helen Estabrook and David Lancaster "),
( 9 , 2 ," Steve Carell "),
( 1 , 2 ," Bradley Cooper "),
( 5 , 2 ," Benedict Cumberbatch "),
( 2 , 2 ," Michael Keaton "),
( 7 , 2 ," Eddie Redmayne "),
( 10 , 3 ," Marion Cotillard "),
( 7 , 3 ," Felicity Jones "),
( 11 , 3 ," Julianne Moore "),
( 12 , 3 ," Rosamund Pike "),
( 13 , 3 ," Reese Witherspoon "),
( 14 , 4 ," Robert Duvall "),
( 3 , 4 ," Ethan Hawke "),
( 2 , 4 ," Edward Norton "),
( 9 , 4 ," Mark Ruffalo "),
( 8 , 4 ," J.K. Simmons "),
( 3 , 5 ," Patricia Arquette "),
( 13 , 5 ," Laura Dern "),
( 5 , 5 ," Keira Knightley "),
( 2 , 5 ," Emma Stone "),
( 15 , 5 ," Meryl Streep "),
( 16 , 6 ," Don Hall, Chris Williams and Roy Conli "),
( 17 , 6 ," Anthony Stacchi, Graham Annable and Travis Knight "),
( 18 , 6 ," Dean DeBlois and Bonnie Arnold "),
( 19 , 6 ," Tomm Moore and Paul Young "),
( 20 , 6 ," Isao Takahata and Yoshiaki Nishimura "),
( 2 , 7 ," Emmanuel Lubezki "),
( 4 , 7 ," Robert Yeoman "),
( 21 , 7 ," Lukasz Zal and Ryszard Lenczewski "),
( 22 , 7 ," Dick Pope "),
( 23 , 7 ," Roger Deakins "),
( 4 , 8 ," Milena Canonero "),
( 24 , 8 ," Mark Bridges "),
( 15 , 8 ," Colleen Atwood "),
( 25 , 8 ," Anna B. Sheppard and Jane Clive "),
( 22 , 8 ," Jacqueline Durran "),
( 2 , 9 ," Alejandro G. Iñárritu "),
( 3 , 9 ," Richard Linklater "),
( 9 , 9 ," Bennett Miller "),
( 4 , 9 ," Wes Anderson "),
( 5 , 9 ," Morten Tyldum "),
( 26 , 10 ," Laura Poitras, Mathilde Bonnefoy and Dirk Wilutzky "),
( 27 , 10 ," John Maloof and Charlie Siskel "),
( 28 , 10 ," Rory Kennedy and Keven McAlester "),
( 29 , 10 ," Wim Wenders, Juliano Ribeiro Salgado and David Rosier "),
( 30 , 10 ," Orlando von Einsiedel and Joanna Natasegara "),
( 31 , 11 ," Ellen Goosenberg Kent and Dana Perry "),
( 32 , 11 ," Aneta Kopacz "),
( 33 , 11 ," Tomasz &Sacute;liwi&nacute;ski and Maciej &Sacute;lesicki "),
( 34 , 11 ," Gabriel Serra Arguello "),
( 35 , 11 ," J. Christian Jensen "),
( 1 , 12 ," Joel Cox and Gary D. Roach "),
( 3 , 12 ," Sandra Adair "),
( 4 , 12 ," Barney Pilling "),
( 5 , 12 ," William Goldenberg "),
( 8 , 12 ," Tom Cross "),
( 21 , 13 ," Poland; Directed by Pawel Pawlikowski "),
( 36 , 13 ," Russia; Directed by Andrey Zvyagintsev "),
( 37 , 13 ," Estonia; Directed by Zaza Urushadze "),
( 38 , 13 ," Mauritania; Directed by Abderrahmane Sissako "),
( 39 , 13 ," Argentina; Directed by Damián Szifron "),
( 9 , 14 ," Bill Corso and Dennis Liddiard "),
( 4 , 14 ," Frances Hannon and Mark Coulier "),
( 40 , 14 ," Elizabeth Yianni-Georgiou and David White "),
( 4 , 15 ," Alexandre Desplat "),
( 5 , 15 ," Alexandre Desplat "),
( 41 , 15 ," Hans Zimmer "),
( 22 , 15 ," Gary Yershon "),
( 7 , 15 ," Jóhann Jóhannsson "),
( 42 , 16 ," Everything Is Awesome - Music and Lyric by Shawn Patterson "),
( 6 , 16 ," Glory - Music and Lyric by John Stephens and Lonnie Lynn "),
( 43 , 16 ," Grateful - Music and Lyric by Diane Warren "),
( 44 , 16 ," I'm Not Gonna Miss You - Music and Lyric by Glen Campbell and Julian Raymond "),
( 45 , 16 ," Lost Stars - Music and Lyric by Gregg Alexander and Danielle Brisebois "),
( 4 , 17 ," Adam Stockhausen (Production Design); Anna Pinnock (Set Decoration) "),
( 5 , 17 ," Maria Djurkovic (Production Design); Tatiana Macdonald (Set Decoration) "),
( 41 , 17 ," Nathan Crowley (Production Design); Gary Fettis (Set Decoration) "),
( 15 , 17 ," Dennis Gassner (Production Design); Anna Pinnock (Set Decoration) "),
( 22 , 17 ," Suzie Davies (Production Design); Charlotte Watts (Set Decoration) "),
( 46 , 18 ," Daisy Jacobs and Christopher Hees "),
( 47 , 18 ," Robert Kondo and Dice Tsutsumi "),
( 48 , 18 ," Patrick Osborne and Kristina Reed "),
( 49 , 18 ," Torill Kove "),
( 50 , 18 ," Joris Oprins "),
( 51 , 19 ," Oded Binnun and Mihal Brezis "),
( 52 , 19 ," Michael Lennox and Ronan Blaney "),
( 53 , 19 ," Hu Wei and Julien Féret "),
( 54 , 19 ," Talkhon Hamzavi and Stefan Eichenberger "),
( 55 , 19 ," Mat Kirkby and James Lucas "),
( 1 , 20 ," Alan Robert Murray and Bub Asman "),
( 2 , 20 ," Martin Hernández and Aaron Glascock "),
( 56 , 20 ," Brent Burge and Jason Canovas "),
( 41 , 20 ," Richard King "),
( 23 , 20 ," Becky Sullivan and Andrew DeCristofaro "),
( 1 , 21 ," John Reitz, Gregg Rudloff and Walt Martin "),
( 2 , 21 ," Jon Taylor, Frank A. Montaño and Thomas Varga "),
( 41 , 21 ," Gary A. Rizzo, Gregg Landaker and Mark Weingarten "),
( 23 , 21 ," Jon Taylor, Frank A. Montaño and David Lee "),
( 8 , 21 ," Craig Mann, Ben Wilkins and Thomas Curley "),
( 57 , 22 ," Dan DeLeeuw, Russell Earl, Bryan Grill and Dan Sudick "),
( 58 , 22 ," Joe Letteri, Dan Lemmon, Daniel Barrett and Erik Winquist "),
( 40 , 22 ," Stephane Ceretti, Nicolas Aithadi, Jonathan Fawkner and Paul Corbould "),
( 41 , 22 ," Paul Franklin, Andrew Lockley, Ian Hunter and Scott Fisher "),
( 59 , 22 ," Richard Stammers, Lou Pecora, Tim Crosbie and Cameron Waldbauer "),
( 1 , 23 ," Written by Jason Hall "),
( 5 , 23 ," Written by Graham Moore "),
( 24 , 23 ," Written for the screen by Paul Thomas Anderson "),
( 7 , 23 ," Screenplay by Anthony McCarten "),
( 8 , 23 ," Written by Damien Chazelle "),
( 2 , 24 ," Written by Alejandro G. Iñárritu, Nicolás Giacobone, Alexander Dinelaris, Jr. & Armando Bo "),
( 3 , 24 ," Written by Richard Linklater "),
( 9 , 24 ," Written by E. Max Frye and Dan Futterman "),
( 4 , 24 ," Screenplay by Wes Anderson; Story by Wes Anderson & Hugo Guinness "),
( 60 , 24 ," Written by Dan Gilroy ");