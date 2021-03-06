USE oscar;

INSERT INTO film(navn) VALUES 
('12 Years a Slave'),
('20 Feet from Stardom'),
('All Is Lost'),
('American Hustle'),
('Aquel No Era Yo (That Wasn’t Me)'),
('August: Osage County'),
('Avant Que De Tout Perdre (Just before Losing Everything)'),
('Before Midnight'),
('Blue Jasmine'),
('Captain Phillips'),
('CaveDigger'),
('Cutie and the Boxer'),
('Dallas Buyers Club'),
('Despicable Me 2'),
('Dirty Wars'),
('Ernest and Celestine'),
('Facing Fear'),
('Feral'),
('Frozen'),
('Get a Horse!'),
('Gravity'),
('Happy'),
('Helium'),
('Her'),
('Inside Llewyn Davis'),
('Iron Man 3'),
('Jackass Presents: Bad Grandpa'),
('Karama Has No Walls'),
('Let It Go'),
('Lone Survivor'),
('Mandela: Long Walk to Freedom'),
('Mr. Hublot'),
('Nebraska'),
('Omar'),
('Ordinary Love'),
('Philomena'),
('Pitääkö Mun  Kaikki Hoitaa? (Do I Have to Take Care of Everything?)'),
('Possessions'),
('Prison Terminal: The Last Days of Private Jack Hall'),
('Prisoners'),
('Room on the Broom'),
('Saving Mr. Banks'),
('Star Trek Into Darkness'),
('The Act of Killing'),
('The Book Thief'),
('The Broken Circle Breakdown'),
('The Croods'),
('The Grandmaster'),
('The Great Beauty'),
('The Great Gatsby'),
('The Hobbit: The Desolation of Smaug'),
('The Hunt'),
('The Invisible Woman'),
('The Lady in Number 6: Music Saved My Life'),
('The Lone Ranger'),
('The Missing Picture'),
('The Moon Song'),
('The Square'),
('The Voorman Problem'),
('The Wind Rises'),
('The Wolf of Wall Street');

INSERT INTO kategori(navn) VALUES 
('Best Actor'),
('Best Actress'),
('Best Animated Feature Film'),
('Best Animated Short Film'),
('Best Cinematography'),
('Best Costume Design'),
('Best Dcumentary - Feature'),
('Best Director'),
('Best Documentary - Short Subject'),
('Best Film Editing'),
('Best Foreign Langauge Film'),
('Best Live Action Short Film'),
('Best Makeup and Hairstyling'),
('Best Original Score'),
('Best Original Song'),
('Best Picture'),
('Best Production Design'),
('Best Sound Editing'),
('Best Sound Mixing'),
('Best Supporting Actor'),
('Best Supporting Actress'),
('Best Visual Effects'),
('Best Writing - Adapted Screenplay'),
('Best Writing - Original Screenplay');

INSERT INTO nominering(film,kategori,note) VALUES 
(4,1,'Christian Bale'),
(33,1,'Bruce Dern'),
(61,1,'Leonardo DiCaprio'),
(1,1,'Chiwetel Ejiofor'),
(13,1,'Matthew McConaughey'),

(4,2,'Amy Adams'),
(9,2,'Cate Blanchett'),
(21,2,'Sandra Bullock'),
(36,2,'Judi Dench'),
(6,2,'Meryl Streep'),

(47,3,'Chris Sanders, Kirk DeMicco and Kristine Belson'),
(14,3,'Chris Renaud, Pierre Coffin and Chris Meledandri'),
(16,3,'Benjamin Renner and Didier Brunner'),
(19,3,'Chris Buck, Jennifer Lee and Peter Del Vecho'),
(60,3,'Hayao Miyazaki and Toshio Suzuki'),

(18,4,'Daniel Sousa and Dan Golden'),
(20,4,'Lauren MacMullan and Dorothy McKim'),
(32,4,'Laurent Witz and Alexandre Espigares'),
(38,4,'Shuhei Morita'),
(41,4,'Max Lang and Jan Lachauer'),

(48,5,'Philippe Le Sourd'),
(21,5,'Emmanuel Lubezki'),
(25,5,'Bruno Delbonnel'),
(33,5,'Phedon Papamichael'),
(40,5,'Roger A. Deakins'),

(4,6,'Michael Wilkinson'),
(48,6,'William Chang Suk Ping'),
(50,6,'Catherine Martin'),
(53,6,'Michael O´Connor'),
(1,6,'Patricia Norris'),

(44,7,'Joshua Oppenheimer and Signe Byrger Sørensen'),
(12,7,'Zachary Heinzerling and Lydia Dean Pilcher'),
(15,7,'Richard Rowley and Jeremy Scahill'),
(58,7,'Jehane Noujaim and Karim Amer'),
(2,7,'Morgan Neville, Gil Friesen and Caitrin Rogers'),

(4,8,'David O. Russell'),
(21,8,'Alfonso Cuarón'),
(33,8,'Alexander Payne'),
(1,8,'Steve McQueen'),
(61,8,'Martin Scorsese'),

(11,9,'Jeffrey Karoff'),
(17,9,'Jason Cohen'),
(28,9,'Sara Ishaq'),
(54,9,'Malcolm Clarke and Nicholas Reed'),
(39,9,'Edgar Barens'),

(4,10,'Jay Cassidy, Crispin Struthers and Alan Baumgarten'),
(10,10,'Christopher Rouse'),
(13,10,'John Mac McMurphy and Martin Pensa'),
(21,10,'Alfonso Caurón and Mark Sanger'),
(1,10,'Joe Walker'),

(46,11,'Belgium'),
(49,11,'Italy'),
(52,11,'Denmark'),
(56,11,'Cambodia'),
(34,11,'Palestine'),

(5,12,'Esteban Crespo'),
(7,12,'Xavier Legrand and Alexandre Gavras'),
(23,12,'Anders Walter and Kim Magnusson'),
(37,12,'Selma Vilhunen and Kirsikka Saari'),
(59,12,'Mark Gill and Baldwin Li'),

(13,13,'Adruitha Lee and Robin Mathews'),
(27,13,'Stephen Prouty'),
(55,13,'Joel Harlow and Gloria Pasqua-Casny'),

(45,14,'John Williams'),
(21,14,'Steven Price'),
(24,14,'William Butler and Owen Pallett'),
(36,14,'Alexandre Desplat'),
(42,14,'Thomas Newman'),

(14,15,'Happy'),
(19,15,'Let It Go'),
(24,15,'The Moon Song'),
(31,15,'Ordinary Love'),

(4,16,'Charles Roven, Richard Suckle, Megan Ellison and Jonathan Gorden'),
(10,16,'Scott Rudin, Dana Brunetti and Michael De Luca'),
(13,16,'Robbie Brenner and Rachel Winter'),
(21,16,'Alfonso Caurón and David Heyman'),
(24,16,'Megan Ellison, Spike Jonze and Vincent Landay'),
(33,16,'Albert Berger and Ron Yerxa'),
(36,16,'Gabrielle Tana, Steve Coogan and Tracey Seaward'),
(1,16,'Brad Pitt, Dede Gardner, Jeremy Kleiner, Steve McQueen and Anthony Katagas'),
(61,16,'Martin Scorsese, Leonardo DiCaprio, Joey McFarland and Emma Tillinger Koskoff'),

(4,17,'Judy Becker and Heather Loeffler'),
(21,17,'Andy Nicholson, Rosie Goodwin and Joanne Woollard'),
(50,17,'Catherine Martin and Beverley Dunn'),
(24,17,'K.K. Barrett and Gene Serdena'),
(1,17,'Adam Stockhausen and Alice Baker'),

(3,18,'Steve Boeddeker and Richard Hymns'),
(10,18,'Oliver Tarney'),
(21,18,'Glenn Freemantle'),
(51,18,'Brent Burge'),
(30,18,'Wylie Stateman'),

(10,19,'Chris Burdon, Mark Taylor, Mike Prestwood Smith and Chris Munro'),
(21,19,'Skip Lievsay, Niv Adiri, Christopher Benstead and Chris Munro'),
(51,19,'Christopher Boyes, Michael Hedges, Michael Semanick and Tony Johnson'),
(25,19,'Skip Lievsay, Greg Orloff and Peter F. Kurland'),
(30,19,'Andy Koyama, Beau Borders and David Brownlow'),

(10,20,'Barkhad Abdi'),
(7,20,'Bradley Cooper'),
(1,20,'Michael Fassbender'),
(61,20,'Jonah Hill'),
(13,20,'Jared Leto'),

(9,21,'Sally Hawkins'),
(4,21,'Jennifer Lawrence'),
(1,21,'Lupita Nyong´o'),
(6,21,'Julia Roberts'),
(33,21,'June Squibb'),

(21,22,'Tim Webber, Chris Lawrence, Dave Shirk and Niel Corbould'),
(51,22,'Joe Letteri, Eric Saindon, David Clayton and Eric Reynolds'),
(26,22,'Christopher Townsend, Guy Williams, Erik Nash and Dan Sudick'),
(55,22,'Tim Alexander, Gary Brozenich, Edson Williams and John Frazier'),
(43,22,'Roger Guyett, Patrick Tubach, Ben Grossmann and Burt Dalton'),

(8,23,'Written by Richard Linklater, Julie Delpy and Ethan Hawke'),
(10,23,'Screenplay by Billy Ray'),
(36,23,'Screenplay by Steve Coogan and Jeff Pope'),
(1,23,'Screenplay by John Ridley'),
(61,23,'Screenplay by Terrence Winter'),

(4,24,'Written by Eric Warren Singer and David O. Rusell'),
(9,24,'Written by Woody Allen'),
(13,24,'Written by Craig Borten and Melisa Wallack'),
(24,24,'Written by Spike Jonze'),
(33,24,'Written by Bob Nelson');

INSERT INTO user(navn,hash) VALUES 
('Casper','1'),
('Kenn','2'),
('Nick','3');
