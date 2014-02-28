USE oscar;

INSERT INTO film(navn) VALUES ('American Hustle'),('Nebraska'),('The Wolf of Wall Street'),('12 Years a Slave'),('Dallas Buyers Club');

INSERT INTO `guess` VALUES (1,1);

INSERT INTO kategori(navn) VALUES 
('Best Picture'),
('Best Director'),
('Best Actor'),
('Best Actress'),
('Best Supporting Actor'),
('Best Supporting Actress'),
('Best Writing - Original Screenplay'),
('Best Writing - Adapted Screenplay'),
('Best Animated Feature Film'),
('Best Foreign Langauge Film'),
('Best Dcumentary - Feature'),
('Best Documentary - Short Subject'),
('Best Live Action Short Film'),
('Best Animated Short Film'),
('Best Original Score'),
('Best Original Song'),
('Best Sound Editing'),
('Best Sound Mixing'),
('Best Production Design'),
('Best Cinematography'),
('Best Makeup and Hairstyling'),
('Best Costume Design'),
('Best Film Editing'),
('Best VIsual Effects');



INSERT INTO `nominering` VALUES (1,1,'Christian Bale','\0',1),(2,1,'Bruce Dern','\0',2),(3,1,'Leonardo DiCaprio','\0',3),(4,1,'Chiwetel Ejiofor','\0',4),(5,1,'Matthew McConaughey','\0',5);

INSERT INTO user(navn,hash) VALUES ('testbruger1','42');
