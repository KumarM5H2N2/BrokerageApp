
BEGIN;

INSERT INTO "clientfile"
  ("email", "firstname1", "lastname1", "datebirth1", "firstname2", "lastname2", "datebirth2","numberchild", "maritalstatus", "nationality", "residencestatus","address" )
VALUES
  ('maxime85@laposte.net', 'Maxime', 'LOYAL', '1985-05-21', 'Elsa', 'LOYAL', '1986-02-14', 2, 'marié', 'française', 'propriétaire', '2 chemin du port 14000 CAEN'),
  ('robert63@lycos.fr', 'Robert', 'VALDO', '1975-02-13', 'Jeanne', 'LIBET', '1975-01-28', 4, 'union libre', 'française', 'propriétaire', '15 rue du soleil 84000 AVIGNON'),
  ('julieparis75@gmail.com', 'Julie', 'DUPONT', '1990-03-15', 'Pierre', 'DUPONT', '1989-11-30', 1, 'marié', 'française', 'locataire', '10 avenue des Champs-Élysées 75008 PARIS'),
  ('alain56@free.fr', 'Alain', 'MARTIN', '1965-08-19', 'Sophie', 'MARTIN', '1967-07-22', 3, 'marié', 'française', 'propriétaire', '25 boulevard de la Liberté 59000 LILLE'),
  ('claire.nice@gmail.com', 'Claire', 'LEROY', '1982-01-10', 'Thomas', 'LEROY', '1981-12-05', 0, 'marié', 'française', 'locataire', '3 rue de la Paix 06000 NICE'),
  ('henri.toulouse@outlook.com', 'Henri', 'DURAND', '1978-05-25', 'Emilie', 'DURAND', '1980-04-14', 2, 'union libre', 'française', 'propriétaire', '18 rue des Roses 31000 TOULOUSE'),
  ('marie.rennes@wanadoo.fr', 'Marie', 'MOREAU', '1983-07-29', 'Jean', 'MOREAU', '1982-03-17', 1, 'marié', 'française', 'locataire', '7 place de Bretagne 35000 RENNES'),
  ('yann.lyon@laposte.net', 'Yann', 'PETIT', '1992-10-10', 'Laura', 'PETIT', '1993-06-21', 2, 'marié', 'française', 'propriétaire', '12 rue de la République 69002 LYON'),
  ('isabelle.bordeaux@gmail.com', 'Isabelle', 'ROUX', '1988-12-13', 'Antoine', 'ROUX', '1986-09-08', 3, 'marié', 'française', 'locataire', '9 rue Sainte-Catherine 33000 BORDEAUX'),
  ('philippe.nantes@hotmail.com', 'Philippe', 'VINCENT', '1972-04-05', 'Caroline', 'VINCENT', '1973-02-26', 4, 'marié', 'française', 'propriétaire', '14 rue de Strasbourg 44000 NANTES'),
  ('laurent.marseille@yahoo.fr', 'Laurent', 'GARCIA', '1984-11-12', 'Celine', 'GARCIA', '1985-03-03', 2, 'marié', 'française', 'locataire', '22 rue de la République 13001 MARSEILLE'),
  ('veronique.strasbourg@orange.fr', 'Véronique', 'BOUCHER', '1979-09-23', 'Marc', 'BOUCHER', '1980-05-15', 1, 'marié', 'française', 'propriétaire', '17 rue des Orfèvres 67000 STRASBOURG'),
  ('antoine.grenoble@laposte.net', 'Antoine', 'FONTAINE', '1986-04-17', 'Julie', 'FONTAINE', '1987-08-29', 3, 'marié', 'française', 'locataire', '8 rue du Lac 38000 GRENOBLE'),
  ('sophie.reims@gmail.com', 'Sophie', 'LAMARQUE', '1991-06-22', 'Nicolas', 'LAMARQUE', '1990-12-14', 2, 'marié', 'française', 'propriétaire', '5 place Drouet d''Erlon 51100 REIMS'),
  ('jeanluc.montpellier@hotmail.com', 'Jean-Luc', 'GIRARD', '1976-02-18', 'Anne', 'GIRARD', '1977-11-09', 2, 'marié', 'française', 'locataire', '3 rue Foch 34000 MONTPELLIER')
  ;




INSERT INTO "savingsdistribution" 
  (savingstype, holder, estimatedvalue, financialinstitute,clientfile_id)
VALUES
  ('Livret A', 'Maxime', 15000, 'banque BNP', 1),
  ('Assurance-vie', 'Elsa','16500', 'banque LCL', 1),
  ('Livret PEA', 'Robert','2300', 'banque populaire Rives de Paris', 2)
;





INSERT INTO "realestatedistribution" 
  (realestatetype, holder, estimatedvalue, dateaquisition,clientfile_id)
VALUES
  ('appartement T3', 'Maxime', 225000, '2010-06-01', 1),
  ('garage', 'Elsa','40000', '2011-04-03', 1),
  ('pavillon', 'Robert','430000', '1998-02-25', 2)
;


INSERT INTO "incomedistribution" 
  (incometype, holder, annualsum,clientfile_id)
VALUES
  ('salaire', 'Maxime', 33000, 1),
  ('auto-entrepreneur', 'Elsa','34500', 1),
  ('salaire', 'Robert','55000', 2)
;


INSERT INTO "expensesotherthancredit" 
  (nature, annualsum,clientfile_id)
VALUES
  ('aide familiale', '1300', 1),
  ('pension alimentaire','900', 2)
;


INSERT INTO "creditdistribution" 
  (credittype, holder, annualsum, remainingcapitaldue, creditorbank,clientfile_id)
VALUES
  ('credit auto', 'Maxime', 7000, '12000','cetelem', 1),
  ('credit travaux', 'Elsa','1500', '3400', 'cofinoga',1),
  ('credit rénovation', 'Robert','18000','37500', 'banque populaire Rives de Paris', 2)
;



INSERT INTO "useraccess" 
  (email, prenom, nom)
VALUES
  ('jeanleduc@boursorama.fr', 'Jean', 'Leduc'),
  ('isabellepleux@socgen.fr', 'Isabelle','Pleux'),
  ('Bob@brokerage.fr', 'Bob','Guipasse')
;


INSERT INTO "useraccess_has_clientfile" 
  (useraccess_id, clientfile_id) 
VALUES 
  (3, 1), -- Bob@brokerage.fr -- maxime85@laposte.net
  (2, 2) -- isabellepleux@socgen.fr -- robert63@lycos.fr
 
;















COMMIT;
