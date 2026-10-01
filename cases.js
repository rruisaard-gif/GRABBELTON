// =====================================================================
//  MIEOW Grabbelton – casussen
//  Elke casus heeft dezelfde velden. Nieuwe casus toevoegen? Kopieer een
//  blok, geef het een nieuwe id (B16, C16, AI16, CB16, ...) en zet 'ton' op
//  "branding", "content", "ai" of "consumer". Alle bedrijven zijn fictief.
// =====================================================================

window.CASES = [

// ------------------------------ BRANDING ------------------------------

{
  id: "B01", ton: "branding",
  naam: "Uitvaart & IJs Verhoeven",
  plaats: "Goes",
  tagline: "Een uitvaartonderneming en een ijssalon. Eén pand. Eén voordeur.",
  wie: "Familiebedrijf in de derde generatie. Opa begon in 1984 met de uitvaartonderneming, oma begon in 1986 de ijssalon in de voorkamer 'omdat mensen na een afscheid toch iets wilden'. Kleindochter Femke (29) neemt het geheel over.",
  vraagstuk: "\"Ik wil één merk. Nu hebben we twee logo's, twee websites en mensen die twijfelen of ze binnen mogen lopen.\"",
  feiten: [
    "Circa 140 uitvaarten per jaar, vrijwel allemaal uit de regio",
    "IJssalon draait €310.000 omzet, 70% tussen april en september",
    "Beide bedrijven delen de voordeur; daarna splitst de gang links (ijs) en rechts (uitvaart)",
    "Google-reviews: uitvaart 4,9 ster, ijssalon 4,6 ster",
    "Klanten van de uitvaart komen opvallend vaak terug voor ijs, andersom zelden"
  ],
  eigenaardigheid: "De best verkopende ijssmaak heet 'Laatste Groet' (vanille met gezouten karamel). Hij werd ooit bedacht voor de uitvaart van een vaste klant en is nooit van de kaart gegaan.",
  beperking: "Femke's vader blijft mede-eigenaar en heeft één eis: er mag nergens een grap over de dood in staan.",
  geprobeerd: "Een gezamenlijke folder in 2022. Die werd vooral beschreven als 'verwarrend' en 'een beetje eng'.",
  uitdaging: "Durf het merk te bouwen óp de spanning in plaats van eromheen. Een oplossing die de twee bedrijven netjes uit elkaar trekt, is de makkelijke weg."
},

{
  id: "B02", ton: "branding",
  naam: "Oma Truus Breit",
  plaats: "Ede",
  tagline: "84 jaar, 120.000 volgers, en ze breit truien voor kippen.",
  wie: "Truus begon in de coronatijd met livestreamen op Twitch, op advies van haar kleinzoon. Ze breit kleine truien voor kippen die hun veren verliezen (bij legkippen die gered zijn uit de bio-industrie). Haar kleinzoon Mehmet (24) regelt de techniek.",
  vraagstuk: "\"Er komen bestellingen binnen uit Japan en Canada. Moeten we hier een merk van maken?\"",
  feiten: [
    "Twitch: 120.000 volgers, gemiddeld 3.400 live kijkers per stream, 3 avonden per week",
    "Een kippentrui kost nu €18, Truus breit er 12 per week",
    "Wachtlijst van 1.900 bestellingen",
    "62% van de kijkers is tussen 18 en 30 jaar en heeft zelf geen kip",
    "Er zijn al drie nep-webshops die 'Oma Truus' truien verkopen"
  ],
  eigenaardigheid: "Truus laat haar gezicht nooit zien. Kijkers zien alleen haar handen, de breinaalden en een kop thee met een lepeltje erin dat er al vier jaar in staat.",
  beperking: "Het gezicht blijft uit beeld, voor altijd. En Truus gaat niet sneller breien.",
  geprobeerd: "Mehmet maakte een logo met een kip met een brilletje. Truus vond het 'kinderachtig' en heeft het nooit gebruikt.",
  uitdaging: "Een merk rond een persoon die je niet mag laten zien en een product dat niet te schalen valt. Bouw iets dat groter wordt dan Truus' handen, zonder dat het nep voelt."
},

{
  id: "B03", ton: "branding",
  naam: "Klimhal De Hoop",
  plaats: "Zwolle",
  tagline: "Een kerk uit 1891, nu met 18 meter klimwanden. De dominee is gebleven.",
  wie: "Stichting De Hoop kocht in 2023 de leegstaande Hoopkerk en bouwde er een klimhal in. Bedrijfsleider is Jan-Willem (58), de laatste dominee van de kerk, die tijdens de verbouwing omschoolde tot klimtrainer.",
  vraagstuk: "\"We hebben genoeg klimmers voor de zaterdag, maar doordeweeks staat het halve gebouw leeg.\"",
  feiten: [
    "1.100 leden, gemiddelde leeftijd 31",
    "Doordeweeks overdag een bezetting van 14%",
    "Hoogste route gaat langs het oude roosvenster, 18 meter",
    "Twee concurrerende klimhallen binnen 15 minuten fietsen, allebei goedkoper",
    "Oud-kerkgangers komen nog steeds koffie drinken op zondagochtend, de koffie is gratis"
  ],
  eigenaardigheid: "Het kerkorgel werkt nog. Bij elke klimmer die de bovenste route haalt, speelt Jan-Willem een korte fanfare. Mensen filmen dat, maar niemand deelt het onder de naam van de hal.",
  beperking: "De naam 'De Hoop' ligt vast in de statuten van de stichting en mag niet veranderen. Religieuze symbolen mogen niet belachelijk gemaakt worden (afspraak met de oude gemeente).",
  geprobeerd: "Een nieuwe huisstijl met een bergsilhouet, net als de concurrenten. Leden noemden het 'een klimhal zoals alle andere'.",
  uitdaging: "Zoek naar de doordeweekse doelgroep waar niemand aan denkt. De voor de hand liggende jonge-klimmers-hoek is al bezet door twee goedkopere hallen."
},

{
  id: "B04", ton: "branding",
  naam: "Mol & Zn. Ongediertebestrijding",
  plaats: "Utrecht",
  tagline: "Klanten willen dat het busje twee straten verderop parkeert.",
  wie: "Opgericht in 1962 door Gerrit Mol. Kleindochter Ayla (33) leidt het bedrijf sinds 2024 en wil af van het imago van 'gif en schaamte'. Ze werkt bijna alleen nog diervriendelijk: vangen, verplaatsen, preventie.",
  vraagstuk: "\"We zijn de beste in de regio, maar mensen bellen ons pas als het echt uit de hand loopt. Dan is het duurder en vervelender voor iedereen.\"",
  feiten: [
    "2.600 klussen per jaar: 45% muizen, 25% wespen, 15% ratten, 15% overig",
    "60% van de klanten vraagt bij het bellen of het busje 'onopvallend' kan staan",
    "Preventie-abonnement (€9 per maand) heeft maar 140 abonnees",
    "Gemiddeld wachten klanten 5 weken voordat ze bellen",
    "Het logo is nu een rat met een kruis erdoor"
  ],
  eigenaardigheid: "Op kantoor staat een opgezette mol, Henk, van opa Gerrit. Klanten die langskomen vragen altijd naar hem. Ayla vindt Henk eigenlijk afschuwelijk.",
  beperking: "Busjes, werkkleding en het opzetten van een preventie-abonnement mogen anders, maar de naam 'Mol & Zn.' blijft. Dat is de wens van opa, die nog leeft.",
  geprobeerd: "Busjes zonder logo. Dat hielp de klanten, maar niemand wist meer wie Mol & Zn. was.",
  uitdaging: "Maak een merk waar mensen zich níet voor schamen. Bonuspunten als buren straks vragen 'is dat busje voor jullie?' in plaats van wegkijken."
},

{
  id: "B05", ton: "branding",
  naam: "Letterzetterij Ploeg",
  plaats: "Haarlem",
  tagline: "Drukt alles met de hand in lood. Heeft maar zes letters 'e' van het mooiste font.",
  wie: "Johanna Ploeg (46) drukt bruiloftsuitnodigingen, rouwkaarten en etiketten met een handpers uit 1921 en een verzameling loden letters. Ze heeft een vaste groep fans, maar haar naam kent bijna niemand buiten Haarlem.",
  vraagstuk: "\"Ik wil een merk dat mensen in heel Nederland kennen. Nu vinden ze me alleen via via.\"",
  feiten: [
    "Gemiddelde opdracht: €840, levertijd 4 weken",
    "180 opdrachten per jaar, ze kan er maximaal 260 aan",
    "80% van de klanten vond haar via een bruiloft waar ze een uitnodiging zagen",
    "Ze heeft 11 lettertypes in lood, waarvan één (de 'Haarlemse Antiqua') nergens anders meer bestaat",
    "Instagram heeft ze, maar ze post alleen foto's van papier op een witte tafel"
  ],
  eigenaardigheid: "Van de Haarlemse Antiqua zijn nog maar zes letters 'e' over. Elke tekst die in dat font gedrukt wordt, mag dus per regel maximaal zes e's bevatten. Klanten herschrijven er hun teksten voor.",
  beperking: "Alles wat het merk uitdraagt, ook de merknaam en een eventuele slogan, moet zelf met de hand gedrukt kunnen worden in de Haarlemse Antiqua. Dus: maximaal zes e's per regel.",
  geprobeerd: "Een webshop met standaardproducten. Ze verkocht er vier stuks in een jaar.",
  uitdaging: "Laat de beperking het merk zijn. Een merknaam en slogan bedenken met maximaal zes e's per regel is niet de straf, het is de opdracht."
},

{
  id: "B06", ton: "branding",
  naam: "Bakkerij Van Dongen",
  plaats: "Tilburg",
  tagline: "Een bakkerij die alleen 's nachts open is. Van 00:00 tot 05:00.",
  wie: "Rik van Dongen (37) nam de bakkerij van zijn vader over. Omdat hij toch 's nachts bakt, zette hij in 2022 de deur open. Sindsdien draait de bakkerij beter 's nachts dan overdag, en is de dagwinkel dicht.",
  vraagstuk: "\"Iedereen in Tilburg die 's nachts werkt kent ons. Maar ik wil dat het een merk wordt, misschien een tweede vestiging in Eindhoven.\"",
  feiten: [
    "Gemiddeld 210 klanten per nacht",
    "Pieken: 00:30 (uitgaanspubliek), 03:00 (taxichauffeurs en schoonmakers), 04:30 (verpleging en bakkers van elders)",
    "Bestseller: worstenbrood, maar ook opvallend veel volkorenbrood voor thuis",
    "Naam en logo zijn nog van zijn vader: een korenschoof in bruin",
    "Overdag weten veel Tilburgers niet dat de bakkerij bestaat"
  ],
  eigenaardigheid: "Elke nacht om 03:33 gaat het licht even uit en bakt Rik één brood dat hij weggeeft aan wie er dan in de winkel staat. Niemand weet meer wanneer dat begon.",
  beperking: "De naam 'Van Dongen' moet in het merk blijven, maar mag wel anders gebruikt worden. Het budget voor de rebranding is €4.000.",
  geprobeerd: "Een grappige Instagram-account met 'nachtbrakers'-memes. Rik vond het niet bij hem passen en stopte na twee weken.",
  uitdaging: "Bouw een merk dat werkt voor drie totaal verschillende nachtklanten tegelijk, en dat in Eindhoven niet als een kopie voelt."
},

{
  id: "B07", ton: "branding",
  naam: "Zwembad De Spetter",
  plaats: "Hoogeveen",
  tagline: "Een zwembad uit 1974 dat precies een halve meter te kort is.",
  wie: "Het gemeentelijke zwembad werd in 2025 verkocht aan Esther en Rob, twee oud-badmeesters. Het interieur is nog volledig origineel: oranje tegels, bruin hout, een glijbaan in de vorm van een olifant.",
  vraagstuk: "\"We willen er iets vintage van maken. Maar we weten niet of dat een merk is of gewoon een oud zwembad.\"",
  feiten: [
    "Het wedstrijdbad is 24,5 meter: officiële wedstrijden zijn er onmogelijk",
    "Bezoekers per jaar: 41.000, was in 2010 nog 78.000",
    "Grootste groepen: zwemles (kinderen), baantjes ochtend (65+), en sinds kort fotoshoots",
    "Een nieuw subtropisch zwemparadijs op 20 minuten rijden opende in 2024",
    "Het olifantenglijbaan heeft een eigen Facebook-groep van oud-Hoogeveners (2.300 leden)"
  ],
  eigenaardigheid: "Door de 24,5 meter zwemmen baantjeszwemmers elke 'kilometer' eigenlijk 980 meter. De vaste ochtendzwemmers noemen dat 'de Spetter-korting' en zijn er trots op.",
  beperking: "De oranje tegels zijn monumentaal beschermd en blijven. Er is geen geld om de olifant te vervangen, en hij mag ook niet weg.",
  geprobeerd: "Retro-zwemavonden met discomuziek. Druk bezocht, één keer. Daarna kwam er niemand meer.",
  uitdaging: "Vintage is te makkelijk als antwoord. Laat zien waarom dít bad een merk verdient, en niet alleen een nostalgisch avondje."
},

{
  id: "B08", ton: "branding",
  naam: "Zuivelboerderij Hiddema",
  plaats: "Wommels (Friesland)",
  tagline: "Kaas van koeien die de hele dag naar Bach luisteren.",
  wie: "Sjoerd Hiddema (52) draait al dertig jaar klassieke muziek in de stal. Hij begon ermee omdat zijn moeder dat ook deed. Zijn dochter Marrit (26) wil de boerenkaas buiten Friesland gaan verkopen, vooral in Amsterdam en Utrecht.",
  vraagstuk: "\"Iedereen hier kent onze kaas. Daarbuiten kent niemand ons, en een kaasboer met klassieke muziek klinkt als een marketingtrucje.\"",
  feiten: [
    "65 koeien, 38.000 kilo kaas per jaar",
    "Prijs €19,50 per kilo, boven het gemiddelde voor boerenkaas",
    "Twee kaasprijzen gewonnen (2019, 2023)",
    "Verkoop nu: 70% boerderijwinkel, 30% twee kaaswinkels in Leeuwarden",
    "Marrit heeft een lijst met 12 delicatessenwinkels in de Randstad die interesse hebben"
  ],
  eigenaardigheid: "Koe Hendrika loeit mee bij één specifiek stuk van Bach. Iemand zette dat ooit online en het filmpje kreeg 2 miljoen views, maar dan onder de titel 'Dutch cow sings' zonder dat iemand weet waar ze staat.",
  beperking: "Sjoerd weigert Engelse termen in alles wat met de kaas te maken heeft. En hij wil niet dat het 'een gimmick' wordt.",
  geprobeerd: "Een etiket met een vioolsleutel. Kaaswinkels vonden het kitsch.",
  uitdaging: "Maak van het muziekverhaal geen gimmick maar een overtuigend kwaliteitsbewijs. Een Randstedeling moet de kaas kopen omdat hij lekker is, niet omdat de koe zingt."
},

{
  id: "B09", ton: "branding",
  naam: "Rijschool Nooit Te Laat",
  plaats: "Arnhem",
  tagline: "Rijles voor mensen die al 65+ zijn en nog nooit hebben gereden.",
  wie: "Paul (61), oud-buschauffeur, begon de rijschool nadat zijn moeder op haar 79e haar rijbewijs wilde halen na het overlijden van zijn vader. Zijn klanten zijn vaak weduwen en weduwnaars die altijd zijn gereden.",
  vraagstuk: "\"Ik heb meer aanvragen dan ik aan kan, maar ik wil uitbreiden en een tweede instructeur aannemen. Dan moet het een echt merk worden.\"",
  feiten: [
    "Slagingspercentage eerste keer: 81% (landelijk gemiddelde rond de 50%)",
    "Gemiddeld 46 lessen nodig per leerling",
    "Leerlingen worden bijna altijd aangemeld door hun kinderen",
    "Wachtlijst: 7 maanden",
    "Wagenpark: drie Volvo's uit 2009, alle drie beige"
  ],
  eigenaardigheid: "Elke geslaagde leerling mag als eerste rit zelf een bestemming kiezen, en Paul rijdt mee als passagier. De lijst met eerste ritten hangt aan de muur. Bovenaan: 'naar de zee, voor het eerst zelf'.",
  beperking: "De beige Volvo's blijven (geen budget voor nieuwe auto's, en leerlingen vinden ze juist rustgevend). Geen enkele uiting mag ouderen neerzetten als zielig of onhandig.",
  geprobeerd: "Een advertentie in de huis-aan-huiskrant met 'Rijles voor senioren'. Er belde vooral niemand, want niemand voelt zich senior.",
  uitdaging: "Wie is eigenlijk de koper: de leerling of hun kind? Maak een merk dat beiden raakt, zonder dat het neerbuigend of zoetsappig wordt."
},

{
  id: "B10", ton: "branding",
  naam: "Loodgietersbedrijf Gerritsen",
  plaats: "Den Haag",
  tagline: "De loodgieter is een voormalig operazanger. En hij zingt tijdens het werk.",
  wie: "Martijn Gerritsen (49) zong twaalf jaar bij een operagezelschap, tot het gezelschap in 2015 werd opgeheven. Hij volgde een loodgietersopleiding en heeft nu een bedrijf met twee man personeel.",
  vraagstuk: "\"Ik wil serieus genomen worden als loodgieter. Mensen huren me in voor badkamers van €25.000, niet voor een liedje.\"",
  feiten: [
    "Omzet €480.000, 60% complete badkamerrenovaties",
    "Gemiddeld 4,8 sterren op 210 Google-reviews",
    "In 47% van de reviews staat iets over het zingen",
    "Concurrentie: drie grote installatiebedrijven die hard adverteren",
    "De meeste klanten zijn 45+ en wonen in Benoordenhout en Statenkwartier"
  ],
  eigenaardigheid: "Hij zingt alleen aria's, en klanten vragen nu om specifieke stukken. Eén klant gaf hem €200 fooi omdat hij in de badkamer, met de tegels als akoestiek, de 'Nessun dorma' zong.",
  beperking: "Martijn wil absoluut geen grappig merk en geen kostuum. Het zingen mag hooguit een bijzaak zijn.",
  geprobeerd: "Een advertentie in een lokaal blad met 'vakmanschap sinds 2016'. Geen enkele reactie.",
  uitdaging: "Martijn wil het zingen klein houden, terwijl klanten er juist om komen. Overtuig hem, of bewijs met een sterker merk dat hij gelijk heeft."
},

{
  id: "B11", ton: "branding",
  naam: "Wat Overblijft",
  plaats: "Venlo",
  tagline: "Een kringloopwinkel die alleen spullen verkoopt die na een scheiding zijn achtergelaten.",
  wie: "Noor (41) begon de winkel na haar eigen scheiding, toen ze een zolder vol spullen had waar geen van beiden naar wilde kijken. Inmiddels brengen mensen uit heel Limburg dozen.",
  vraagstuk: "\"Mensen vinden het een prachtig idee als ik het vertel, maar als ze voor de etalage staan lopen ze door. Het voelt verdrietig.\"",
  feiten: [
    "Gemiddeld 60 nieuwe items per week",
    "Elk item krijgt een kaartje met een kort, geanonimiseerd verhaal ('hij heeft deze lamp nooit mooi gevonden')",
    "Kopers die binnenkomen, kopen in 68% van de gevallen iets",
    "Gemiddelde besteding €34",
    "Een deel van de opbrengst gaat naar mediation voor stellen met kinderen"
  ],
  eigenaardigheid: "Er staat al twee jaar een trouwjurk in de winkel die niet te koop is. De vrouw die hem bracht wilde dat hij 'ergens hing waar hij gezien werd'.",
  beperking: "De verkopers blijven volledig anoniem. Er mag geen enkel verhaal herleidbaar zijn tot een persoon.",
  geprobeerd: "De naam veranderen naar 'Kringloop Venlo-Zuid'. De omzet steeg licht, maar Noor voelde dat het verhaal verdween.",
  uitdaging: "Draai het gevoel aan de etalage om: van verdrietig naar iets waar mensen naar binnen willen. Zonder dat je de pijn van de verkopers wegpoetst."
},

{
  id: "B12", ton: "branding",
  naam: "Gambiet",
  plaats: "Amsterdam",
  tagline: "Een energiedrank voor schakers die eigenlijk kalmerend is.",
  wie: "Twee schakers, Lev (27) en Ilse (30), ontwikkelden een drankje voor toernooien. Geen cafeïne, wel kamille, citroenmelisse en een beetje suiker. Het idee: concentratie komt van rust, niet van adrenaline.",
  vraagstuk: "\"Schakers vinden het geweldig. Maar de markt van schakers is klein. We willen breder, en we weten niet naar wie.\"",
  feiten: [
    "Verkocht op 22 schaaktoernooien, 9.000 blikjes in het eerste jaar",
    "Prijs: €2,90 per blikje",
    "Herhaalaankopen onder schakers: 54%",
    "Opvallend: de grootste losse bestelling kwam van een tandartspraktijk voor de wachtkamer",
    "Het blikje is zwart-wit geblokt, met een paard erop"
  ],
  eigenaardigheid: "In blinde smaaktests met studenten in tentamenweek scoorde Gambiet beter dan gewone energiedrank. Maar zodra ze 'kamille' op het blikje zagen, daalde de score.",
  beperking: "Het recept blijft precies zoals het is, inclusief de kamille, en de kamille moet op het etiket staan (regelgeving).",
  geprobeerd: "Een sponsordeal met een schaakstreamer. Veel views, verkoop alleen binnen de schaakwereld.",
  uitdaging: "Een energiedrank die geen energiedrank is. Durf het merk volledig los te maken van schaken als dat nodig is, of bewijs waarom schaken juist de sleutel is."
},

{
  id: "B13", ton: "branding",
  naam: "Taxi Tessel",
  plaats: "Texel",
  tagline: "Eén taxibus en één paard met huifkar. Het paard rijdt de meeste ritten.",
  wie: "Klaas (63) heeft al dertig jaar een taxibedrijf op Texel. Zijn schoonzoon Diego (35) kwam erbij en begon in 2021 voor de grap ritten met paard en huifkar. Inmiddels is dat de populairste dienst.",
  vraagstuk: "\"We zijn eigenlijk geen taxi meer. Maar wat zijn we dan wel? En we willen dat toeristen ons al vóór de boot kennen.\"",
  feiten: [
    "4.200 ritten per jaar, waarvan 40% met paard Bram",
    "Een huifkarrit kost €65, een taxirit gemiddeld €28",
    "Toeristen boeken vaak pas op het eiland, en dan zit alles vol",
    "In het hoogseizoen worden 30% van de huifkaraanvragen geweigerd",
    "Bewoners gebruiken vooral de taxi (ziekenhuisritten, boot)"
  ],
  eigenaardigheid: "Bram rijdt elke route op Texel zonder dat Diego hoeft te sturen. Hij weet ook precies waar de ijssalon is, en stopt daar altijd, ook als niemand ijs wil.",
  beperking: "Klaas wil de taxi voor eilandbewoners absoluut behouden, ook al is die minder winstgevend. Bram mag nooit meer dan 6 uur per dag werken.",
  geprobeerd: "Een flyer op de boot. Die werd vooral als kaartje gebruikt om te zien hoe ver het nog varen was.",
  uitdaging: "Twee diensten met twee totaal verschillende klanten onder één merk. Of juist niet. Beslis het, en verdedig het."
},

{
  id: "B14", ton: "branding",
  naam: "Zweet",
  plaats: "Rotterdam-Zuid",
  tagline: "Een sportschool zonder spiegels, voor mensen die sportscholen haten.",
  wie: "Oud-fysiotherapeut Kofi (39) zag dat veel van zijn patiënten na revalidatie stopten met sporten 'omdat de sportschool niks voor hen is'. Hij opende een zaal zonder spiegels, zonder harde muziek en zonder sportkledingverplichting.",
  vraagstuk: "\"Mijn leden blijven, maar nieuwe mensen vinden me niet. Iedereen denkt bij 'sportschool' meteen aan wat ze juist willen vermijden.\"",
  feiten: [
    "310 leden, opzegpercentage 9% per jaar (branchegemiddelde ligt rond de 30%)",
    "Gemiddelde leeftijd 47",
    "Contributie €34 per maand",
    "De meeste leden komen via de huisarts of fysiotherapeut",
    "Twee grote budgetketens binnen 1 kilometer, €20 per maand"
  ],
  eigenaardigheid: "Leden mogen sporten in hun gewone kleren. Er is één lid die al drie jaar in pak traint, voor zijn werk. Hij is de bekendste persoon van de sportschool.",
  beperking: "Geen voor-en-na-foto's, geen afgetrainde lichamen in beeld, geen woorden als 'resultaat' of 'shape'. De naam 'Zweet' mag wel veranderen.",
  geprobeerd: "Een advertentie met 'Sporten zonder oordeel'. Klonk volgens Kofi 'zoals elke sportschool die net hetzelfde zegt'.",
  uitdaging: "Laat zien waarom de naam blijft of verandert. En maak een merk dat iemand die sportscholen haat, het gevoel geeft dat dit níet een sportschool is."
},

{
  id: "B15", ton: "branding",
  naam: "Stilte Bert",
  plaats: "Amersfoort",
  tagline: "Een coach die bedrijven leert om één uur per dag niet te praten.",
  wie: "Bert (55) was jarenlang verkoopdirecteur. Na een burn-out ging hij een jaar in een klooster wonen. Nu geeft hij trainingen aan bedrijven: één uur per dag niemand praat, mailt of belt. Bedrijven die het proberen, blijven.",
  vraagstuk: "\"Mijn trainingen werken, maar ik verkoop een uur stilte. Dat klinkt als niets, en niemand wil betalen voor niets.\"",
  feiten: [
    "Heeft 14 bedrijven als klant, allemaal via mond-tot-mond",
    "Een traject kost €6.500 voor teams tot 30 mensen",
    "Gemeten bij klanten: 22% minder vergadertijd na drie maanden",
    "LinkedIn: 1.100 volgers, posts krijgen gemiddeld 8 likes",
    "Zijn bedrijf heet nu 'Bert Hoogland Consultancy'"
  ],
  eigenaardigheid: "Bert zegt in het eerste gesprek met een klant de eerste tien minuten niks. Hij schuift alleen een kaartje over tafel: 'Ik luister. Begin maar.' Meerdere klanten noemen dit de reden dat ze tekenden.",
  beperking: "Het merk mag niet zweverig of spiritueel overkomen. Bert verkoopt aan directeuren, niet aan yogastudio's.",
  geprobeerd: "Webinars over 'focus en productiviteit'. Bert vond het zelf de grootste ironie van zijn carrière: een uur praten over stilte.",
  uitdaging: "Bouw een merk voor een product dat letterlijk uit niets bestaat. Hoe maak je stilte voelbaar, zonder zelf te gaan schreeuwen?"
},

// ------------------------------ CONTENT -------------------------------

{
  id: "C01", ton: "content",
  naam: "Parkeergarage De Kolk",
  plaats: "Rotterdam",
  tagline: "De eigenaar wil dat mensen er graag parkeren. Gemiddelde review: 1,8 ster.",
  wie: "Familiebedrijf van Hans (66) en zijn dochter Linda (38). De garage is uit 1972, vijf verdiepingen, vlak bij het centrum. Linda wil laten zien dat parkeren niet stom hoeft te zijn.",
  vraagstuk: "\"Mensen kiezen voor de grote ketens met apps. Wij willen dat ze juist voor ons kiezen, omdat het hier anders is.\"",
  feiten: [
    "620 plekken, gemiddelde bezetting 54%",
    "Tarief: €3,20 per uur, goedkoper dan de concurrent om de hoek",
    "Google-reviews: 1,8 ster. Klachten: smalle rampen, donker, 'eng'",
    "Instagram: bestaat niet. Facebook: 89 volgers",
    "Content maken: Linda heeft 3 uur per week en een telefoon"
  ],
  eigenaardigheid: "Op niveau -2 staat een vleugelpiano. Niemand weet wie hem heeft neergezet, hij staat er sinds 2019. Hij is gestemd. Soms komt iemand spelen.",
  beperking: "Er is geen budget voor verbouwing of nieuwe verlichting. Het parkeerdek blijft zoals het is.",
  geprobeerd: "Een advertentie 'Goedkoop parkeren in het centrum' op Facebook. 40 kliks, geen meetbaar effect.",
  uitdaging: "Maak een parkeergarage interessant om te volgen. Je content moet ervoor zorgen dat iemand die 'eng' schreef in een review, nieuwsgierig wordt."
},

{
  id: "C02", ton: "content",
  naam: "Dixi Deluxe",
  plaats: "Barneveld",
  tagline: "Luxe toiletwagens voor bruiloften. Maar niemand fotografeert een wc.",
  wie: "Marco (41) en zijn zus Sanne verhuren vier luxe toiletwagens met marmer, verlichting en een parfumbar. Sinds 2021, vooral bruiloften en een paar bedrijfsfeesten.",
  vraagstuk: "\"We willen meer boekingen, maar Instagram doet niks.\"",
  feiten: [
    "38 boekingen per jaar, capaciteit is ruim 90",
    "Gemiddelde boeking €1.150",
    "Instagram: 640 volgers, laatste post 7 maanden geleden",
    "Weddingplanners boeken bijna nooit; de bruiloftsgasten zelf wél, vaak een jaar later voor hun eigen bruiloft",
    "Content: Sanne wil er 4 uur per week in steken"
  ],
  eigenaardigheid: "70% van de klanten boekt nadat ze de wagen ergens anders op een bruiloft zagen. Maar op geen enkele trouwfoto staat er één.",
  beperking: "Sanne weigert content waarin het woord 'wc' of een toiletpot voorkomt. 'We verkopen een beleving, geen pot.'",
  geprobeerd: "Facebook-advertenties (€300, twee aanvragen, geen boeking) en een stand op een trouwbeurs (veel gelach, geen klanten).",
  uitdaging: "Laat de bruiloftsgasten zelf de content maken, zonder dat het een wc-foto wordt. Hoe word je zichtbaar op een plek waar niemand een camera pakt?"
},

{
  id: "C03", ton: "content",
  naam: "Ingrid Telt",
  plaats: "Apeldoorn",
  tagline: "Een belastingadviseur voor creatieven, die kampioen limerick-schrijven is.",
  wie: "Ingrid (44) helpt alleen zzp'ers in de creatieve sector: fotografen, illustratoren, muzikanten. Ze is daarnaast regionaal kampioen limerick-schrijven. Ze wil meer klanten, maar heeft er weinig tijd voor.",
  vraagstuk: "\"Mijn klanten vinden me via via. Ik wil dat creatieven mij vinden voordat ze in de problemen komen met de Belastingdienst.\"",
  feiten: [
    "120 klanten, kan er 180 aan",
    "Gemiddelde klant betaalt €1.400 per jaar",
    "Piekmomenten: maart-april (aangifte) en januari (btw)",
    "De meest gestelde vraag van nieuwe klanten: 'Had ik dit eerder moeten weten?' (bijna altijd: ja)",
    "LinkedIn: 600 connecties, Instagram: niet aanwezig"
  ],
  eigenaardigheid: "Ingrid stuurt haar klanten elk jaar een limerick over hun eigen aangifte. Klanten bewaren ze en lijsten ze soms in.",
  beperking: "Ingrid heeft maximaal 2 uur per maand voor content. Ze wil niet op video.",
  geprobeerd: "Een nieuwsbrief met belastingtips. Openingspercentage 11%, na drie edities gestopt.",
  uitdaging: "Belasting is saai, limericks zijn het niet. Maar maak er geen gimmick van: de content moet een creatieveling écht helpen of waarschuwen."
},

{
  id: "C04", ton: "content",
  naam: "Tandartspraktijk De Molen",
  plaats: "Schiedam",
  tagline: "De tandarts wil alleen nog TikTok-dansjes. Het personeel weigert.",
  wie: "Tandarts Bas (51) zag een filmpje van een Amerikaanse tandartspraktijk die viral ging met dansjes. Hij wil hetzelfde. Zijn team van zes (assistenten, mondhygiënist, receptie) wil er niets mee te maken hebben.",
  vraagstuk: "\"We hebben jonge patiënten nodig. De praktijk vergrijst en er komt een nieuwe praktijk in de wijk.\"",
  feiten: [
    "2.900 patiënten, gemiddelde leeftijd 58",
    "Aantal patiënten onder de 30: 11%",
    "Nieuwe concurrent opent in maart, vlak bij het station",
    "Jongeren melden zich vaak pas bij pijn",
    "Bas heeft al een TikTok-account aangemaakt: 0 posts, 14 volgers"
  ],
  eigenaardigheid: "De praktijk zit in een oude molen. De behandelkamer op de bovenste verdieping heeft uitzicht over de hele stad. Patiënten noemen het 'de mooiste stoel van Schiedam'.",
  beperking: "Patiënten mogen nooit in beeld (privacy). Het team doet niet mee aan dansjes. Bas moet wel in de content zitten, dat is zijn voorwaarde.",
  geprobeerd: "Een Facebookpost over 'tanden poetsen is belangrijk'. 2 likes, beide van familie.",
  uitdaging: "Vind een vorm waar Bas zijn zin krijgt en het team zich niet schaamt. Hint: wat zit er tussen een dansje en niks?"
},

{
  id: "C05", ton: "content",
  naam: "RioolZicht",
  plaats: "Den Bosch",
  tagline: "Een rioolinspectiebedrijf met robotcamera's dat dringend personeel zoekt.",
  wie: "RioolZicht inspecteert riolen voor gemeenten met kleine robotcamera's. Het bedrijf groeit, maar vindt geen technici. Directeur Petra (47) wil content om mensen te werven.",
  vraagstuk: "\"Niemand wil in het riool werken. Terwijl je eigenlijk de hele dag drones bestuurt.\"",
  feiten: [
    "34 medewerkers, 9 vacatures open",
    "Startsalaris technicus: €3.200, met opleiding in-house",
    "De meeste huidige medewerkers kwamen uit de gamewereld of drone-hobby",
    "Ze hebben 14.000 uur rioolbeelden opgeslagen",
    "Website heeft een vacaturepagina die 300 keer per maand wordt bezocht, 2 sollicitaties"
  ],
  eigenaardigheid: "In de beelden zit van alles: een verloren trouwring die twee keer werd teruggevonden, een dichtgegroeide fiets, een paling van een meter. Medewerkers hebben een interne 'Top 10 Vondsten'.",
  beperking: "Klanten (gemeenten) moeten akkoord geven voordat beelden van hun riool openbaar worden. Content mag niet vies of goor overkomen; geen poep in beeld.",
  geprobeerd: "Een vacature-advertentie op Indeed met 'Uitdagende baan in de infra'. Een handvol reacties, niemand geschikt.",
  uitdaging: "Je doelgroep weet nog niet dat deze baan bestaat. Maak content die op hun pad komt, niet die op hun vacaturesite wacht."
},

{
  id: "C06", ton: "content",
  naam: "Het Loket",
  plaats: "Zuidbroek (Groningen)",
  tagline: "Bibliotheek, postpunt én kapper in één ruimte, in een dorp van 900 inwoners.",
  wie: "Toen de bieb, het postkantoor en de kapper allemaal dreigden te sluiten, besloten de drie eigenaren samen één ruimte te huren. Het wordt gerund door Wietske (34, kapper) en vrijwilligers.",
  vraagstuk: "\"De ouderen komen wel, de jongeren rijden naar de stad. Als zij niet komen, gaan we over vijf jaar alsnog dicht.\"",
  feiten: [
    "Gemiddeld 85 bezoekers per dag",
    "Bezoekers onder de 35: 9%",
    "Openingstijden: 4 dagen per week",
    "Het dorp heeft een actieve Facebookgroep met 1.200 leden (meer leden dan inwoners)",
    "Content maken: Wietske, tussen het knippen door"
  ],
  eigenaardigheid: "Wie zich laat knippen, mag tijdens het knippen een boek uitkiezen dat Wietske hardop voorleest. Er zijn klanten die een knipbeurt bij elkaar sparen om een boek uit te krijgen.",
  beperking: "Geen advertentiebudget. Alle content wordt gemaakt met één telefoon en de goede wil van vrijwilligers.",
  geprobeerd: "Een gameavond voor jongeren. Er kwamen vier jongeren, waarvan drie kinderen van vrijwilligers.",
  uitdaging: "Een dorp met meer Facebookleden dan inwoners: denk na over wie je eigenlijk wil bereiken. Misschien zitten de jongeren niet in het dorp."
},

{
  id: "C07", ton: "content",
  naam: "Glasblazerij Kerstmeijer",
  plaats: "Valkenburg",
  tagline: "Maakt kerstballen. Heeft elf maanden per jaar niks te vertellen.",
  wie: "Een van de laatste handgemaakte kerstballenfabrieken van Nederland. Vier glasblazers, eigenaar Theo (60). Het hele jaar wordt er gemaakt, maar alleen in december wordt er verkocht.",
  vraagstuk: "\"Iedereen wil ons in december. De rest van het jaar bestaan we niet, en dan is het in november te laat om op te vallen.\"",
  feiten: [
    "Productie: 40.000 kerstballen per jaar, 85% verkocht tussen 15 november en 20 december",
    "Prijs: €14 tot €45 per bal",
    "Werkplaats is open voor bezoek, maar in de zomer komen er nauwelijks mensen",
    "Instagram: 4.100 volgers, posts alleen in december",
    "De glasblazers maken in de zomer bij 32 graden kerstballen, in een werkplaats van 40 graden"
  ],
  eigenaardigheid: "Elk jaar maakt elke glasblazer één bal die nooit verkocht wordt, met een geheim ontwerp. Die gaan in een kist. De kist gaat pas open als Theo met pensioen gaat.",
  beperking: "Er mag geen korting of uitverkoop gecommuniceerd worden buiten december, dat schaadt het merk volgens Theo.",
  geprobeerd: "'Christmas in July' actie met 20% korting. Theo vond het goedkoop en stopte het na een week.",
  uitdaging: "Bouw een contentritme van januari tot november dat ervoor zorgt dat december vanzelf gaat. Zonder korting, en zonder dat het kerst is."
},

{
  id: "C08", ton: "content",
  naam: "Slotenmaker Ruben",
  plaats: "Amsterdam",
  tagline: "80% van zijn klussen: mensen die zichzelf 's nachts hebben buitengesloten.",
  wie: "Ruben (36) is zelfstandig slotenmaker. Hij werkt vooral 's nachts, voor mensen die hun sleutel kwijt zijn. Hij houdt van elke klus een logboek bij met de reden waarom mensen buitengesloten waren.",
  vraagstuk: "\"Ik wil van de nachtklussen af. Ik wil overdag sloten vervangen en woningen beveiligen. Maar mensen denken pas aan mij als ze in hun pyjama op de stoep staan.\"",
  feiten: [
    "2.300 nachtelijke klussen gelogd sinds 2019",
    "Top 3 redenen: 'deur viel dicht bij afval wegbrengen' (31%), 'sleutel in de jas van iemand anders' (18%), 'kat' (7%)",
    "Een nachtklus levert €180 op, een beveiligingsklus overdag €650",
    "Klanten van de nacht worden zelden klanten overdag",
    "Er zijn tientallen nep-slotenmakers in Amsterdam die online adverteren"
  ],
  eigenaardigheid: "Ruben heeft van zijn logboek een spreadsheet gemaakt met de vreemdste verhalen. Hij leest er soms uit voor op verjaardagen. Het populairste verhaal gaat over een man die buitengesloten werd door zijn eigen robotstofzuiger.",
  beperking: "Geen klant mag herkenbaar zijn. Geen angstzaaiende content over inbraken.",
  geprobeerd: "Google Ads op 'slotenmaker Amsterdam'. Duur, en concurreert met nepbedrijven met hogere biedingen.",
  uitdaging: "Ruben heeft een goudmijn aan verhalen. Maak content die de nacht-klant overdag laat terugkomen."
},

{
  id: "C09", ton: "content",
  naam: "Duikschool Groen Zicht",
  plaats: "Zierikzee",
  tagline: "Duiken in Zeeland: groen water en anderhalve meter zicht.",
  wie: "Kim (42) en Jeroen (45) runnen een duikschool aan de Oosterschelde. Mensen halen er hun brevet en gaan dan naar Egypte of Thailand duiken. Ze willen dat mensen in Nederland blijven duiken.",
  vraagstuk: "\"Iedereen ziet de Oosterschelde als oefenbad. Terwijl het een van de rijkste duikgebieden van Europa is.\"",
  feiten: [
    "450 cursisten per jaar, waarvan 80% daarna nooit meer in Nederland duikt",
    "Een duikcursus kost €495",
    "De Oosterschelde heeft zeepaardjes, zeekatten en naaktslakken in alle kleuren",
    "Zicht onder water: gemiddeld 1,5 tot 3 meter",
    "Watertemperatuur in mei: 13 graden"
  ],
  eigenaardigheid: "Jeroen heeft een catalogus van 140 soorten naaktslakken die hij zelf in de Oosterschelde heeft gefotografeerd. Sommige hebben nog geen Nederlandse naam. Hij heeft ze zelf namen gegeven.",
  beperking: "Content moet eerlijk zijn over het zicht en de kou. Geen bewerkte beelden die het water helderder maken.",
  geprobeerd: "Een promotievideo met drone-shots van de kust. Mooi, maar volgens Kim 'kun je dat van elke kust in Nederland maken'.",
  uitdaging: "Van groen water en kou een reden maken om te gaan. Hoe maak je het nadeel het verhaal?"
},

{
  id: "C10", ton: "content",
  naam: "Hoefsmederij Van Ommen",
  plaats: "Epe (Veluwe)",
  tagline: "Een hoefsmid zonder smartphone die een leerling zoekt.",
  wie: "Wim van Ommen (64) is hoefsmid en verzorgt meer dan duizend paarden op de Veluwe. Hij wil over drie jaar stoppen en zoekt een leerling die het vak wil leren en de zaak wil overnemen.",
  vraagstuk: "\"Er zijn bijna geen jonge hoefsmeden meer. Als ik stop, hebben 1.000 paarden geen smid.\"",
  feiten: [
    "Gemiddeld 6 paarden per dag, 5 dagen per week",
    "Wachtlijst bij nieuwe klanten: 4 maanden",
    "Een hoefsmid verdient gemiddeld €4.500 per maand netto als zelfstandige",
    "Opleiding duurt 3 jaar",
    "Hij heeft een Nokia uit 2008. Geen internet, geen camera"
  ],
  eigenaardigheid: "Wim schrijft van elk paard een kaartje met naam, hoefmaat en karakter. Hij heeft 30 schoenendozen vol, sinds 1983. Het paard met de meeste kaartjes heet Duimpje en is 34 jaar oud.",
  beperking: "Wim maakt zelf geen content en gaat ook niet leren hoe dat moet. Content moet zonder zijn telefoon en zonder dat hij meer dan een half uur per week kwijt is.",
  geprobeerd: "Een advertentie in een vakblad voor hoefsmeden. Geen reactie, want de mensen die dat lezen zijn al hoefsmid.",
  uitdaging: "De ideale leerling weet nog niet dat hij hoefsmid wil worden. Waar zit die persoon nu, en wat moet hij zien om te denken: dat ben ik?"
},

{
  id: "C11", ton: "content",
  naam: "Zeemeermin II",
  plaats: "Yerseke",
  tagline: "Een mosselvisser die direct aan de klant verkoopt. Vier dagen per week op zee, zonder wifi.",
  wie: "Daan (39) is de vijfde generatie mosselvisser. Hij is begonnen met mosselabonnementen: één keer per week een verse zak mosselen aan huis, in het seizoen. Zijn vrouw Fatima (37) doet de administratie.",
  vraagstuk: "\"We hebben 300 abonnees, we willen er 1.500. Maar ik ben vier dagen per week op zee en Fatima heeft een baan.\"",
  feiten: [
    "Mosselseizoen: juli tot april",
    "Abonnement: €12 per week voor 2 kilo",
    "Levering in Zeeland, Brabant en de regio Rotterdam",
    "Opzegpercentage: 4% per seizoen",
    "De boot heeft geen internet; alleen bij terugkomst in de haven"
  ],
  eigenaardigheid: "De boot heet Zeemeermin II. Niemand in de familie wil vertellen wat er met de Zeemeermin I is gebeurd. Vaste klanten vragen er elke keer naar.",
  beperking: "Content moet gemaakt kunnen worden zonder live verbinding met zee. Fatima heeft 2 uur per week.",
  geprobeerd: "Een Instagrampagina met foto's van de vangst. Mooi, maar alle mosselfoto's lijken op elkaar.",
  uitdaging: "Je hebt een mysterie, een zee en een seizoen. Maak content waardoor iemand in Rotterdam een mosselabonnement neemt zonder ooit een mossel te hebben gekookt."
},

{
  id: "C12", ton: "content",
  naam: "Hoorzaak Floris",
  plaats: "Nijmegen",
  tagline: "Een gehoorwinkel van een voormalig punkdrummer die doof is aan één oor.",
  wie: "Floris (52) drumde twintig jaar in een punkband zonder gehoorbescherming. Hij is aan zijn linkeroor doof. Nu heeft hij een audiciën-zaak en wil hij jongeren bereiken voordat het te laat is.",
  vraagstuk: "\"Mijn klanten zijn 70+. Ik wil de mensen van 20 bereiken, die nu nog geen gehoorschade hebben. Maar niemand van 20 komt in een gehoorwinkel.\"",
  feiten: [
    "1.400 klanten, gemiddelde leeftijd 71",
    "Op maat gemaakte festivaloordopjes kosten €149",
    "Hij verkocht vorig jaar 38 paar, bijna allemaal aan muzikanten",
    "Nijmegen heeft meer dan 40.000 studenten",
    "Floris speelt nog steeds drums, nu met oordopjes"
  ],
  eigenaardigheid: "In de winkel staat zijn oude drumstel. Klanten mogen erop spelen tijdens een gehoortest, om te horen wat er gebeurt met hun gehoor bij hoog volume. Studenten die per ongeluk binnenlopen, blijven hangen bij het drumstel.",
  beperking: "Geen medische claims of angstzaaierij ('je wordt doof'). Content moet aan de regels voor medische hulpmiddelen voldoen.",
  geprobeerd: "Een stand op een festival. Veel interesse, nauwelijks verkoop: 'ik kom wel eens langs'.",
  uitdaging: "Laat jongeren iets doen tegen een probleem dat ze nog niet hebben. Maak content waarin Floris' verhaal werkt, zonder dat het een preek wordt."
},

{
  id: "C13", ton: "content",
  naam: "Zwaar Werk Verhuizingen",
  plaats: "Wassenaar",
  tagline: "Verhuist piano's en kluizen. Heeft in 31 jaar bijna nooit iets laten vallen.",
  wie: "Ronald (58) en zijn team van acht verhuizen alleen extreem zware of kostbare spullen: vleugels, kluizen, kunst, antieke kasten. Klanten zijn vaak vermogend en willen discretie.",
  vraagstuk: "\"We willen meer opdrachten van musea en concertzalen. Die kennen ons niet, want onze particuliere klanten praten er niet over.\"",
  feiten: [
    "Gemiddelde opdracht: €3.800",
    "Grootste opdracht: een vleugel uit een penthouse via een kraan op 40 meter hoogte",
    "Verzekering: tot €2 miljoen per object",
    "90% particuliere klanten, 10% zakelijk",
    "Nul reviews online, omdat klanten niet willen dat bekend is wat ze bezitten"
  ],
  eigenaardigheid: "Er is één incident in 31 jaar: 'de Steinway van 1998'. Het team mag er nooit over praten, maar iedereen kent het verhaal. Het eindigde volgens Ronald 'beter dan je denkt'.",
  beperking: "Geen klanten, adressen of herkenbare interieurs in beeld. Het verhaal van de Steinway mag alleen verteld worden met toestemming van Ronald (die heb je niet, tenzij je hem overtuigt).",
  geprobeerd: "Een brochure 'Specialist in zware verhuizingen'. Werd volgens Ronald gelezen als 'een verhuisbedrijf met grote spierballen'.",
  uitdaging: "Maak content over een bedrijf dat niets mag laten zien. Discretie is hun belofte, dus hoe word je zichtbaar zonder die belofte te breken?"
},

{
  id: "C14", ton: "content",
  naam: "Kale Kees",
  plaats: "Breda",
  tagline: "Een barbershop voor mannen zonder haar.",
  wie: "Kees (44) werd op zijn 25e kaal en vond nergens een kapper die iets met hem kon. Hij opende een zaak voor kale mannen: scheren, hoofdhuidverzorging, baardonderhoud en zonbescherming voor de schedel.",
  vraagstuk: "\"Kale mannen denken dat ze geen kapper nodig hebben. Die wil ik juist hebben.\"",
  feiten: [
    "450 vaste klanten",
    "Gemiddelde behandeling: €32, gemiddeld om de 3 weken",
    "Ongeveer de helft van de Nederlandse mannen krijgt in de loop van zijn leven te maken met kaalheid",
    "Klanten zijn vaak in eerste instantie meegesleept door hun partner",
    "Instagram: 2.200 volgers, posts van glimmende hoofden scoren het best"
  ],
  eigenaardigheid: "Bij de deur hangt een bord met de 'Wall of Fame': polaroids van de eerste afspraak van elke klant, met de datum waarop ze voor het laatst haar hadden. De oudste datum is 1981.",
  beperking: "Geen grappen ten koste van kale mannen. Geen haargroeimiddelen of 'oplossingen voor kaalheid'.",
  geprobeerd: "Een advertentie 'Eindelijk een kapper voor de kale man'. Klonk volgens klanten alsof kaal zijn een probleem is.",
  uitdaging: "Spreek mannen aan die net kaal worden en zich daar nog ongemakkelijk over voelen. Maak content waar ze zich niet over hoeven te schamen om te liken."
},

{
  id: "C15", ton: "content",
  naam: "Stoomtrein De Snelle Gerrit",
  plaats: "Hoorn",
  tagline: "Een stoomtrein-stichting met vrijwilligers van gemiddeld 71 jaar. Topsnelheid: 35 km/u.",
  wie: "Stichting Stoomlijn Westfriesland rijdt met een historische stoomtrein tussen twee dorpen. Alles draait op 85 vrijwilligers. Zonder jongere vrijwilligers stopt de trein binnen tien jaar.",
  vraagstuk: "\"Passagiers hebben we genoeg. Machinisten, stokers en conducteurs niet.\"",
  feiten: [
    "85 vrijwilligers, gemiddelde leeftijd 71, jongste is 52",
    "38.000 passagiers per jaar, vooral gezinnen en dagjesmensen",
    "Opleiding tot machinist duurt 3 jaar, één dag per week",
    "De locomotief heet 'De Snelle Gerrit', bouwjaar 1914, topsnelheid 35 km/u",
    "Vrijwilligers die blijven, blijven gemiddeld 19 jaar"
  ],
  eigenaardigheid: "Elke nieuwe vrijwilliger krijgt na een jaar een eigen fluitsignaal dat alleen hij of zij mag geven. Er zijn er nog 23 vrij.",
  beperking: "Het bestuur moet alle content goedkeuren en vergadert één keer per maand. Er mogen geen passagiers herkenbaar in beeld.",
  geprobeerd: "Een oproep in de lokale krant 'Vrijwilligers gezocht'. Er meldden zich twee mensen, allebei 73.",
  uitdaging: "Je zoekt geen vrijwilligers, je zoekt mensen die een obsessie willen. Maak content voor de 30-jarige die nog niet weet dat hij machinist wil worden. En regel dat het bestuur je niet afremt."
},

// --------------------------- AI IN MARKETING --------------------------

{
  id: "AI01", ton: "ai",
  naam: "Madame Zora",
  plaats: "Scheveningen",
  tagline: "Een waarzegster met een wachtlijst van negen weken. Ze wil een AI-assistent.",
  wie: "Zora (61), echte naam Gerda, zit al 35 jaar in een klein huisje aan de boulevard met een glazen bol en een kat. Haar dochter Nadia (33) doet de boekingen en vindt dat het tijd is voor AI.",
  vraagstuk: "\"Ik word gek van de berichtjes. Iedereen wil vooraf weten of het wel klopt, wat het kost en of de kat er is.\"",
  feiten: [
    "Gemiddeld 410 berichten per week via WhatsApp, Instagram en telefoon",
    "Ze doet 30 consulten per week à €55, de wachtlijst is 9 weken",
    "40% van de vragen gaat over hetzelfde: prijs, duur, of je iemand mag meenemen",
    "Bij 35% van de consulten gaat de vraag over een huisdier",
    "Nadia besteedt 11 uur per week aan berichten beantwoorden"
  ],
  eigenaardigheid: "Kat Orakel ligt tijdens elk consult op tafel. Vaste klanten sturen haar kerstkaarten. Er bestaat een fanaccount van Orakel dat niet van Zora is.",
  beperking: "De AI mag nooit iets voorspellen of 'lezen'. Dat doet Zora, en alleen Zora. Klanten moeten weten wanneer ze met een AI praten (AI Act).",
  geprobeerd: "Nadia zette een standaardchatbot op de website. Klanten vroegen hem om hun toekomst te voorspellen, en hij deed het.",
  uitdaging: "Waar hoort AI wél en waar absoluut niet in een bedrijf dat draait op mysterie? Laat zien dat je de grens scherp kunt trekken, en maak het gedeelte waar AI mag zo goed dat het de magie versterkt."
},

{
  id: "AI02", ton: "ai",
  naam: "Spookhuis Makelaardij",
  plaats: "Leiden",
  tagline: "Een makelaar die alleen huizen verkoopt waar het spookt. Of waar mensen dat denken.",
  wie: "Annelies (47) was gewone makelaar tot ze in 2019 een huis niet verkocht kreeg 'omdat er 's nachts iemand de trap op loopt'. Ze verkocht het binnen een week aan een liefhebber. Nu doet ze niets anders.",
  vraagstuk: "\"Er zijn genoeg kopers die dit zoeken. Maar elke bezichtiging kost me een halve dag, en de helft komt alleen om te griezelen.\"",
  feiten: [
    "18 verkochte 'bijzondere woningen' per jaar, gemiddeld 9% boven de vraagprijs",
    "Op elke bezichtiging komen 6 kijkers, waarvan er gemiddeld 1 serieus is",
    "Van elk huis heeft ze een dossier met verhalen, krantenknipsels en meldingen van vorige bewoners",
    "Wachtlijst van kopers: 640 mensen, verspreid over Europa",
    "Verkopers schamen zich vaak en willen anoniem blijven"
  ],
  eigenaardigheid: "Bij één huis in Oegstgeest staat de piano 's ochtends altijd net iets anders dan de avond ervoor. Annelies heeft er een timelapse-camera neergezet. Ze heeft de beelden nooit bekeken: 'dan is het verhaal weg'.",
  beperking: "Annelies verkoopt verhalen, geen bewijs. Ze mag niets beloven of beweren wat niet klopt (consumentenrecht), en adressen blijven geheim tot een koper serieus is.",
  geprobeerd: "Een virtuele 360-gradentour. Kijkers vonden het 'te licht' en 'niet eng genoeg'.",
  uitdaging: "Dit is een bedrijf dat draait op wat je níet ziet. Hoe zet je AI in zonder het mysterie te verpesten, en zonder dat het nep wordt?"
},

{
  id: "AI03", ton: "ai",
  naam: "Sint & Co Bemiddeling",
  plaats: "Amersfoort",
  tagline: "Verhuurt Sinterklazen. Krijgt 2.000 aanvragen in drie weken.",
  wie: "Monique (48) bemiddelt al vijftien jaar tussen gezinnen, scholen en bedrijven en een netwerk van 60 Sinterklazen en 140 pieten. Alles gebeurt in de laatste weken van november.",
  vraagstuk: "\"Elf maanden is het stil, en dan verdrink ik. Ik mis aanvragen, plan dubbel, en dan staat er ergens een school zonder Sint.\"",
  feiten: [
    "2.000 aanvragen tussen 1 en 21 november, 1.400 boekingen",
    "Gemiddelde boeking €195 voor een huisbezoek, €450 voor een school",
    "Elke Sint heeft eigen voorkeuren: regio, kinderen of volwassenen, wel of niet bij honden",
    "Ouders sturen vooraf lijstjes met 'wat Sint moet weten' over hun kind",
    "Planning gebeurt nu in een Excel-bestand met 31 tabbladen"
  ],
  eigenaardigheid: "Sinterklaas nummer 23, Henk, heeft een fotografisch geheugen voor kinderen. Hij weet van kinderen die hij vorig jaar bezocht nog precies wat ze vroegen. Gezinnen boeken alleen hem, en hij is altijd als eerste vol.",
  beperking: "Een kind mag nooit een AI-Sinterklaas zien of horen. De informatie over kinderen is gevoelig en mag niet zomaar door een AI-tool.",
  geprobeerd: "Een online boekingsformulier. Ouders vulden het in en belden daarna toch om te checken of het goed was aangekomen.",
  uitdaging: "Je werkt met de gevoeligste data die er bestaat: wat kleine kinderen geloven. Laat zien hoe AI hier helpt zonder dat het ooit eng wordt, juridisch of emotioneel."
},

{
  id: "AI04", ton: "ai",
  naam: "Duivenpost Express",
  plaats: "Venray",
  tagline: "Bezorgt trouwringen per postduif. Op 30% van de bruiloften komt de duif te laat.",
  wie: "Jos (66) is al vijftig jaar duivenmelker. Sinds 2015 laat hij op bruiloften een duif de ringen naar het altaar brengen. Zijn kleinzoon Daan (24) doet de boekingen en wil er een echt bedrijf van maken.",
  vraagstuk: "\"Stellen vinden het prachtig. Tot de duif twintig minuten op het dak van de kerk gaat zitten. We willen groeien, maar dan moet het betrouwbaarder.\"",
  feiten: [
    "Boekingen: 85 bruiloften per jaar à €390",
    "Op 30% van de bruiloften landt de duif te laat; bij wind boven 4 Beaufort 60%",
    "Jos heeft 40 duiven en weet van elke duif hoe ze vliegt, eet en zich gedraagt",
    "Er wordt nu met een reserve-ring in de binnenzak van de getuige gewerkt",
    "Video's van de duif op bruiloften worden veel gedeeld, maar zonder vermelding"
  ],
  eigenaardigheid: "Duif nummer 17, Gerdientje, is nog nooit te laat geweest. Ze is gevraagd voor 140 bruiloften. Ze is 11 jaar en Jos wil haar niet meer laten vliegen.",
  beperking: "Er mag niets aan de duiven worden bevestigd behalve de ring. Jos heeft geen smartphone en vertrouwt geen 'computerdingen'.",
  geprobeerd: "Daan maakte een weer-app-checklist. Jos keek naar de lucht en zei 'dat klopt niet'.",
  uitdaging: "Jos' kennis van 40 duiven zit in zijn hoofd en hij wordt 66. Wat kan AI hier, van boekingen tot voorspellingen tot verhalen, zonder dat het magische moment er saaier van wordt?"
},

{
  id: "AI05", ton: "ai",
  naam: "Het Nationaal Kaasschaafmuseum",
  plaats: "Edam",
  tagline: "1.400 kaasschaven. Elf bezoekers per dag.",
  wie: "Oud-leraar Pieter (72) verzamelde zestig jaar lang kaasschaven en opende in 2020 een museum in zijn voormalige garage. Er zitten schaven tussen uit 1925, uit de Sovjet-Unie en een van goud. Zijn kleindochter Mila (22) runt de socials.",
  vraagstuk: "\"Het museum moet blijven bestaan als opa er niet meer is. Daarvoor hebben we bezoekers nodig, en vooral: een reden om te komen.\"",
  feiten: [
    "Bezoekers: 11 per dag, entree €6",
    "Bij elke schaaf heeft Pieter een handgeschreven kaartje met het verhaal",
    "80% van de bezoekers is toerist die per ongeluk binnenloopt",
    "Een TikTok van Mila over de gouden schaaf kreeg 1,2 miljoen views, maar niemand kwam daardoor",
    "Er komt elk jaar een Noorse delegatie op bezoek, omdat de kaasschaaf een Noorse uitvinding is"
  ],
  eigenaardigheid: "Pieter weet bij elke schaaf precies hoe dun hij schaaft, tot op de tiende millimeter. Hij laat bezoekers blind proeven en raden met welke schaaf de plak gesneden is. Niemand heeft er ooit meer dan twee goed.",
  beperking: "Er is geen geld voor verbouwing. Pieter wil dat het museum 'serieus' blijft; hij vindt het geen grap.",
  geprobeerd: "Een audiotour, ingesproken door Pieter. Hij praatte gemiddeld negen minuten per schaaf.",
  uitdaging: "Je hebt een man, 1.400 objecten en 1,2 miljoen views die niks opleverden. Laat AI het gat dichten tussen 'grappig online' en 'ik moet erheen'."
},

{
  id: "AI06", ton: "ai",
  naam: "Koor De Valse Noot",
  plaats: "Arnhem",
  tagline: "Een koor voor mensen die niet kunnen zingen. Boekbaar voor bedrijfsfeesten.",
  wie: "Dirigent Marloes (44) richtte in 2018 een koor op voor mensen die als kind te horen kregen dat ze niet konden zingen. Er zijn nu 60 leden. Bedrijven boeken ze voor feesten en teambuilding, omdat het 'zo bevrijdend' is.",
  vraagstuk: "\"We worden steeds vaker geboekt, maar we kunnen niet uitleggen wat we doen zonder dat het klinkt als een grap. En als je ons hoort, klinkt het ook als een grap.\"",
  feiten: [
    "Optredens: 34 per jaar, €1.800 per optreden",
    "Workshop 'Zing vals met je team': 22 per jaar, €2.400",
    "60 leden, wachtlijst van 90 mensen die ook willen meezingen",
    "Opnames van het koor worden door algoritmes van muziekplatforms vaak als 'fout' gemarkeerd",
    "Gemiddeld zingen leden 2,7 halve toon naast de melodie, en altijd dezelfde kant op"
  ],
  eigenaardigheid: "Bij hun bekendste nummer zingen 60 mensen zo consequent vals dat het samen bijna weer zuiver klinkt. Een muziekprofessor uit Utrecht heeft er een artikel over geschreven.",
  beperking: "Geen enkele AI mag hun stemmen 'corrigeren' of mooier maken. Leden mogen niet herkenbaar in beeld zonder toestemming.",
  geprobeerd: "Een promotievideo met het beste optreden. Bedrijven belden om te vragen of het een parodie was.",
  uitdaging: "AI is gebouwd om dingen beter, mooier en zuiverder te maken. Dit koor is het tegenovergestelde. Hoe zet je technologie in voor iets dat juist níet geoptimaliseerd mag worden?"
},

{
  id: "AI07", ton: "ai",
  naam: "Antiek & Ander Spul",
  plaats: "Deventer",
  tagline: "Een antiquair met 9.000 voorwerpen. Geen enkele heeft een beschrijving.",
  wie: "Joost (67) kocht veertig jaar lang alles wat hij mooi vond. Zijn pakhuis staat vol. Zijn nicht Lotte (28) wil online gaan verkopen, maar alles moet dan gefotografeerd en beschreven worden.",
  vraagstuk: "\"Online kopen mensen antiek alleen als ze precies weten wat het is. En dat weet alleen Joost, en die vertelt het alleen als je ernaast staat.\"",
  feiten: [
    "9.000 voorwerpen, waarvan Joost bij 7.000 het verhaal uit zijn hoofd weet",
    "Winkelverkoop: €140.000 per jaar, bezoekers vooral op zaterdag",
    "Een gemiddelde beschrijving schrijven kost Lotte 25 minuten",
    "Joost is 67 en wil over 3 jaar stoppen",
    "Kopers in de winkel noemen 'het verhaal van Joost' als reden om te kopen"
  ],
  eigenaardigheid: "Joost liegt soms een beetje. Niet over de waarde, maar over de herkomst. Zijn verhalen zijn net iets mooier dan de werkelijkheid, en hij geeft dat zelf grinnikend toe.",
  beperking: "Productbeschrijvingen online moeten feitelijk kloppen (consumentenrecht). Joost wil niet voor een camera, maar praat wel graag.",
  geprobeerd: "Lotte zette 50 voorwerpen op Marktplaats met AI-beschrijvingen. Ze verkochten er drie, en een koper klaagde dat een 'Franse empire-stoel' uit Hengelo kwam.",
  uitdaging: "Het echte kapitaal zit in Joosts hoofd, en dat gaat over drie jaar met pensioen. Gebruik AI om die kennis vast te leggen, en los op hoe je zijn mooie verhalen eerlijk houdt."
},

{
  id: "AI08", ton: "ai",
  naam: "Brouwerij Bijna",
  plaats: "Nijmegen",
  tagline: "Een brouwerij die elk nieuw bier vernoemt naar een klacht van een klant.",
  wie: "Drie vrienden begonnen in 2020 een brouwerij. Het eerste bier heette 'Te Bitter', naar de eerste review. Sindsdien krijgt elk nieuw bier de naam van een klacht. Ze lezen alle reviews.",
  vraagstuk: "\"We krijgen inmiddels zoveel feedback dat we het niet meer bij kunnen houden. En de leukste klachten gaan verloren.\"",
  feiten: [
    "Reviews per maand: 600+ op Untappd, Google, Instagram en via de mail",
    "26 bieren uitgebracht, waaronder 'Niet Koud Genoeg', 'Had Meer Verwacht' en 'Mijn Vader Vond Het Lekker'",
    "Verkoop: 180.000 liter per jaar, groei 30% per jaar",
    "Klanten schrijven inmiddels expres grappige klachten in de hoop een bier te krijgen",
    "Het team bestaat uit 3 brouwers en 1 parttime marketeer"
  ],
  eigenaardigheid: "Bier nummer 19 heet 'Dit Is Geen Bier'. De klant die die klacht schreef, is nu hun bestverkopende cafébaas.",
  beperking: "Het concept moet echt blijven: een bier mag alleen vernoemd worden naar een klacht die een echte klant echt heeft geschreven. Geen AI-gegenereerde klachten.",
  geprobeerd: "Een spreadsheet waar de marketeer klachten in kopieert. Ze is na 400 rijen gestopt.",
  uitdaging: "AI kan helpen kiezen, maar het concept staat of valt met echtheid. Hoe zet je AI in voor een merk dat drijft op menselijke chagrijn, zonder dat het nep wordt?"
},

{
  id: "AI09", ton: "ai",
  naam: "Knuffelboerderij De Grazige Weide",
  plaats: "Zeewolde",
  tagline: "Koeienknuffelen als wellness. De boer beantwoordt 300 berichten per week op zijn telefoon.",
  wie: "Boer Hendrik (55) en zijn vrouw Sanne (52) bieden sinds 2022 'koeknuffelsessies' aan: een uur tegen een rustende koe aanliggen. Het begon als grap en is nu de helft van hun inkomen.",
  vraagstuk: "\"Ik ben boer, geen receptie. Ik sta te melken en mijn telefoon blijft maar trillen.\"",
  feiten: [
    "Sessies: €45 per persoon per uur, 25 sessies per week",
    "300 berichten per week, meestal dezelfde vragen: stinkt het, is het veilig, mag ik huilen",
    "Klanten: 70% vrouwen tussen 25 en 45, veel uit Amsterdam en Utrecht",
    "Er zijn 6 knuffelkoeien, elk met een eigen karakter",
    "Herhaalbezoek: 41%"
  ],
  eigenaardigheid: "Koe Wilma gaat alleen liggen voor mensen die stil zijn. Wie praat, krijgt haar niet. Klanten zien dat als een test die ze willen halen.",
  beperking: "Er mogen geen AI-gegenereerde beelden van de koeien gebruikt worden. Hendrik wil niet dat klanten denken dat ze met hem appen als dat niet zo is.",
  geprobeerd: "Een FAQ-pagina op de website. Mensen lazen hem en appten daarna toch Hendrik.",
  uitdaging: "Waarom appen mensen de boer terwijl het antwoord op de website staat? Zoek uit wat ze eigenlijk zoeken in dat appje, en laat AI dát leveren in plaats van alleen antwoorden."
},

{
  id: "AI10", ton: "ai",
  naam: "Huur-een-Oma",
  plaats: "Groningen",
  tagline: "Verhuurt oma's aan studenten. Voor koken, kletsen en 'heb je wel een jas aan'.",
  wie: "Corrie (71) begon het als grap toen haar kleinzoon in Groningen ging studeren en zijn huisgenoten jaloers waren op haar bezoekjes. Nu werken er 38 oma's (en 4 opa's) voor €15 per uur. Ze koken, helpen met wasjes en vragen hoe het écht gaat.",
  vraagstuk: "\"Er zijn meer studenten die een oma willen dan oma's. En de planning doe ik op papier, aan de keukentafel.\"",
  feiten: [
    "38 oma's en 4 opa's, gemiddeld 70 jaar",
    "Boekingen: 160 per maand, wachtlijst 210 studentenhuizen",
    "Veel boekingen worden gedaan door ouders van studenten, niet door de studenten zelf",
    "Oma's hebben specialiteiten: stamppot, rouwverwerking, belastingaangifte, liefdesverdriet",
    "In de tentamenweken verdubbelt de vraag"
  ],
  eigenaardigheid: "Oma Truida (79) heeft een vaste groep van zes studentenhuizen die haar 'de Raad van Truida' noemen. Ze komt elke maandag bij één ervan eten, en de andere vijf komen dan ook.",
  beperking: "De oma's willen geen app. Persoonsgegevens van studenten en oma's mogen niet zomaar in een AI-tool. Het mag nooit een 'dienst' worden: het blijft persoonlijk.",
  geprobeerd: "Een online boekingssysteem. De oma's zeiden dat ze het 'een beetje koud' vonden, en Corrie plande alles weer op papier.",
  uitdaging: "De warmte van een oma is precies wat geen AI kan. Waar in dit bedrijf kan AI wél het verschil maken, zodat de oma's meer tijd hebben voor waar het om draait?"
},

{
  id: "AI11", ton: "ai",
  naam: "Het Gevonden Voorwerpen Veilinghuis",
  plaats: "Rotterdam",
  tagline: "Veilt 12.000 verloren voorwerpen per jaar. Waaronder een prothesebeen en een kist vol kunstgebitten.",
  wie: "Een veilinghuis dat de niet-opgehaalde gevonden voorwerpen van gemeenten, treinen en vliegvelden verkoopt. Veilingmeester Sandra (53) en twee medewerkers moeten alles fotograferen, beschrijven en in kavels verdelen.",
  vraagstuk: "\"Telefoons en fietsen verkopen we wel. Maar 60% van wat we krijgen is zo raar dat niemand weet dat hij het wil hebben.\"",
  feiten: [
    "12.000 voorwerpen per jaar, 4 veilingen",
    "Beschrijven en fotograferen kost 6 minuten per voorwerp",
    "Rare voorwerpen gaan nu in 'gemengde kavels' voor €5 tot €20",
    "Bekendste kavel ooit: een opgezette zwaan met een zonnebril, verkocht voor €1.150 na een tweet",
    "Kopers zijn vooral handelaren; particulieren weten niet dat de veiling bestaat"
  ],
  eigenaardigheid: "Bij sommige voorwerpen zit een briefje of een verhaal: een trouwalbum van een onbekend stel uit 1961, een koffer met 40 identieke truien, een urn (leeg, gelukkig). Sandra vraagt zich bij elk voorwerp af wie het mist.",
  beperking: "Er mogen geen persoonsgegevens van eigenaren zichtbaar zijn of herleid worden. Beschrijvingen moeten feitelijk kloppen: verzonnen verhalen bij echte voorwerpen mogen niet.",
  geprobeerd: "Een Instagram met 'het vreemdste voorwerp van de week'. Veel volgers, maar die kopen niets.",
  uitdaging: "Je hebt 12.000 raadsels per jaar. Laat AI van een berg rommel iets maken waar particulieren voor gaan bieden, en blijf daarbij eerlijk over wat je wél en niet weet."
},

{
  id: "AI12", ton: "ai",
  naam: "Pannenkoekenhuis Het Kraaiennest",
  plaats: "Bergen (NH)",
  tagline: "112 pannenkoeken op de kaart en reviews in negen talen.",
  wie: "Familierestaurant in de duinen, sinds 1968. Eigenaar Petra (50) heeft een kaart van zes pagina's, waarvan ze er niets uit durft te halen. De helft van de gasten is toerist.",
  vraagstuk: "\"Mensen bestellen allemaal spek of appel. Ik heb 110 andere pannenkoeken die bijna niemand neemt, en de keuken moet alles op voorraad hebben.\"",
  feiten: [
    "Gemiddeld 420 gasten per dag in het seizoen",
    "61% bestelt een van de top 5 pannenkoeken",
    "64 pannenkoeken op de kaart worden minder dan één keer per week besteld",
    "Google-reviews: 2.900, in negen talen, gemiddeld 4,3 ster",
    "Duitse gasten noemen het vaakst de pannenkoek met 'Holländische Soße' die niet op de kaart staat"
  ],
  eigenaardigheid: "Pannenkoek nummer 87, de 'Kraaiennest Speciaal' (met ham, ananas, kerrie en drop) wordt drie keer per jaar besteld. Elke keer door iemand die er een filmpje van maakt.",
  beperking: "Petra haalt geen pannenkoeken van de kaart. 'Mijn vader heeft ze allemaal bedacht.'",
  geprobeerd: "Een 'aanrader van de chef'-sticker op tien pannenkoeken. Gasten bestelden alsnog spek.",
  uitdaging: "Je hebt 2.900 reviews in negen talen en een kaart die niet korter mag. Laat AI uitzoeken wat gasten eigenlijk willen, en bedenk hoe je de kaart slimmer maakt zonder er iets van af te halen."
},

{
  id: "AI13", ton: "ai",
  naam: "De Speechfabriek",
  plaats: "Rotterdam",
  tagline: "Schrijft speeches voor bruiloften en verjaardagen. Sinds ChatGPT 60% minder opdrachten.",
  wie: "Kees (58) is oud-journalist en schrijft sinds 2010 speeches op bestelling: voor getuigen op bruiloften, voor vaders bij een 50e verjaardag, voor afscheidsrecepties. Zijn omzet halveerde in twee jaar.",
  vraagstuk: "\"Iedereen laat het nu door ChatGPT doen. Maar ik hoor die speeches op bruiloften, en ze zijn allemaal hetzelfde.\"",
  feiten: [
    "Was: 400 speeches per jaar à €185. Nu: 160",
    "Een speech kost hem 3 uur, inclusief telefonisch interview",
    "Klanten die toch komen, zijn bijna altijd mensen die een AI-speech probeerden en die 'niet goed voelde'",
    "Kees heeft een archief van 3.800 speeches",
    "Hij geeft ook workshops 'speechen voor bange mensen', die lopen wel goed"
  ],
  eigenaardigheid: "Kees bewaart van elke speech een bandje met de opname van het moment zelf. Hij heeft er 600, opgestuurd door blije klanten. Op bijna elk bandje wordt op dezelfde plek gelachen: bij een detail dat alleen familie kon weten.",
  beperking: "Kees wil zichzelf niet vervangen door een AI-tool en geen 'AI-speech-app' lanceren.",
  geprobeerd: "Een advertentie met 'Echte speeches, geschreven door een mens'. Mensen klikten, maar boekten niet.",
  uitdaging: "AI is hier de concurrent. Bouw een strategie waarin Kees AI gebruikt om te winnen van AI. Waar zit het verschil precies, en hoe maak je dat verkoopbaar?"
},

{
  id: "AI14", ton: "ai",
  naam: "Ballonvaart Hoog & Droog",
  plaats: "Barneveld",
  tagline: "Een ballonvaartbedrijf waarvan 70% van de vluchten wordt afgelast. De ballon heeft de vorm van een koe.",
  wie: "Rob (58) en Ingrid (55) hebben drie luchtballonnen, waaronder 'Bertha', een ballon in de vorm van een Fries-Hollandse koe. Ze verkopen vooral cadeaubonnen. Het weer is hun grootste vijand.",
  vraagstuk: "\"Mensen kopen een ballonvaart als cadeau en moeten dan vijf keer verzetten. Het wordt een frustratie in plaats van een cadeau.\"",
  feiten: [
    "Cadeaubonnen per jaar: 2.100 à €220",
    "70% van de geplande vluchten wordt afgelast (wind, regen, mist)",
    "Een afgelaste vlucht wordt gemiddeld 3,4 keer verzet",
    "Telefoontjes en mails over verzetten: 9.000 per jaar",
    "Bertha de koe wordt overal gefilmd, ook als ze niet vliegt maar alleen opgeblazen wordt"
  ],
  eigenaardigheid: "Op dagen dat het niet kan vliegen, blazen ze Bertha soms op in de wei. Er komen dan honderden mensen kijken. Die dagen leveren meer nieuwe boekingen op dan vliegdagen.",
  beperking: "Veiligheid gaat altijd voor; geen AI mag bepalen of er wel of niet gevlogen wordt, dat doet de piloot. Bonnen zijn 2 jaar geldig.",
  geprobeerd: "Een automatische sms bij afgelasting. Klanten voelden zich 'afgescheept door een robot'.",
  uitdaging: "Het product mislukt vaker dan het lukt. Laat AI van die mislukking iets maken wat mensen juist verder in het verhaal trekt, in plaats van ze te frustreren."
},

{
  id: "AI15", ton: "ai",
  naam: "Garage Bakker",
  plaats: "Assen",
  tagline: "Een monteur die een motorprobleem hoort aan het geluid. Hij heeft 3.000 opnames.",
  wie: "Gerard Bakker (63) runt een garage met zijn zoon Mike (34). Gerard luistert naar een motor en weet vaak meteen wat er mis is. Al vijftien jaar neemt hij het geluid op van elke auto die binnenkomt, 'voor later'.",
  vraagstuk: "\"Klanten komen voor mijn vader. Maar hij stopt over twee jaar. Wat blijft er dan over van ons verhaal?\"",
  feiten: [
    "3.000 geluidsopnames met daarbij de diagnose die Gerard stelde",
    "In 84% van de gevallen klopte zijn diagnose op het geluid",
    "Klanten komen van 50 kilometer ver voor 'de man die luistert'",
    "Werkplaats: 4 monteurs, 2.400 beurten per jaar",
    "Twee dealergarages in Assen bieden goedkopere onderhoudspakketten"
  ],
  eigenaardigheid: "Gerard heeft een eigen vocabulaire voor motorgeluiden: 'het gerammel van een kast vol theekopjes', 'een hoestende kat', 'een tikkende oma'. Mike heeft er een lijst van gemaakt van 140 omschrijvingen.",
  beperking: "Gerard wil niet dat er een app komt die zegt dat hij het niet meer hoeft te doen. Klanten mogen niet misleid worden over wie de diagnose stelt.",
  geprobeerd: "Een advertentie 'Vakmanschap sinds 1987'. Leverde niks op, want dat zegt elke garage.",
  uitdaging: "Je hebt een uniek datasetje en een man met een gouden oor die gaat stoppen. Gebruik AI om zijn kennis te bewaren én om er een merkverhaal van te maken dat na zijn pensioen overeind blijft."
},

// --------------------------- CONSUMER BEHAVIOR -------------------------

{
  id: "CB01", ton: "consumer",
  naam: "Muur van Mien",
  plaats: "Zaandam",
  tagline: "Een snackmuur waar 70% van de klanten een vakje op ooghoogte kiest, ook als het leeg is.",
  wie: "Mien (59) heeft een snackbar met een muur van 48 automatenvakjes. Haar zoon Dennis (31) houdt bij wat er verkocht wordt. Ze snappen niet waarom sommige snacks blijven liggen.",
  vraagstuk: "\"We gooien elke avond eten weg uit de onderste rijen, terwijl mensen bij de bovenste rij staan te wachten tot ik bijvul.\"",
  feiten: [
    "48 vakjes in 6 rijen, 600 snacks per dag",
    "70% van de verkoop komt uit de twee rijen op ooghoogte",
    "Klanten wachten gemiddeld 2 minuten tot een leeg vakje op ooghoogte wordt bijgevuld, ook als dezelfde snack lager ligt",
    "Weggegooid per week: €310 aan snacks",
    "Kinderen kiezen juist vaker uit de onderste rij"
  ],
  eigenaardigheid: "Er zit één vakje (rij 4, plek 7) dat altijd als eerste leeg is, wat er ook in ligt. Dennis heeft er drie weken lang kroketten, kaassoufflés en zelfs een gehaktbal in gelegd. Steeds als eerste weg.",
  beperking: "De muur kan niet verplaatst of verbouwd worden. De prijzen blijven gelijk.",
  geprobeerd: "Een bord met 'Ook onderin liggen ze vers!'. Klanten lazen het hardop voor en kozen alsnog bovenin.",
  uitdaging: "Zoek uit waarom vakje 4-7 wint. Je kunt hier iets over menselijk gedrag ontdekken dat veel groter is dan een snackbar. Onderbouw het, en zet het in."
},

{
  id: "CB02", ton: "consumer",
  naam: "Fietsenmaker Snel & Goed",
  plaats: "Groningen",
  tagline: "230 gerepareerde fietsen die nooit zijn opgehaald.",
  wie: "Ahmed (44) heeft een fietsenmakerij in de binnenstad. Studenten brengen hun fiets voor reparatie, maar een flink deel komt hem nooit meer halen. De fietsen staan op zolder, in de gang, tot in zijn badkamer.",
  vraagstuk: "\"Ik heb het werk gedaan, het onderdeel betaald, en ik krijg mijn geld niet. En ik heb geen ruimte meer.\"",
  feiten: [
    "Reparaties per jaar: 4.800, waarvan 5% niet wordt opgehaald",
    "Gemiddelde openstaande rekening per fiets: €64",
    "Klanten worden een sms gestuurd als de fiets klaar is; 40% reageert niet",
    "Niet-ophalers zijn vooral eerstejaars studenten",
    "Na 3 maanden mag Ahmed de fiets verkopen, maar hij voelt zich schuldig"
  ],
  eigenaardigheid: "Een klant kwam na 2,5 jaar zijn fiets ophalen en zei dat hij 'vergeten was dat hij een fiets had'. Hij was in de tussentijd vier fietsen kwijtgeraakt.",
  beperking: "Vooruitbetalen werkt niet: studenten lopen dan door naar de concurrent. Ahmed wil geen boetes of agressieve incasso.",
  geprobeerd: "Een tweede en derde sms. Reactiepercentage steeg nauwelijks.",
  uitdaging: "Waarom laat iemand iets van €200 staan voor een rekening van €64? Duik in het gedrag, niet in het systeem, en bedenk een oplossing waarbij studenten uit zichzelf komen."
},

{
  id: "CB03", ton: "consumer",
  naam: "Het Wachtrijbureau",
  plaats: "Amsterdam",
  tagline: "Verhuurt mensen die voor je in de rij staan. Steeds meer klanten willen zelf meewachten.",
  wie: "Jamal (28) begon met in de rij staan voor limited sneakers voor vrienden. Nu heeft hij 70 'wachters' die voor klanten in de rij staan bij sneakerdrops, concertkaartjes, bakkerijen met hypes en zelfs bij de gemeente.",
  vraagstuk: "\"Mijn bedrijf groeit, maar het rare is: klanten betalen ons en komen dan alsnog. Ze staan naast onze wachter in de rij.\"",
  feiten: [
    "Tarief: €18 per uur wachten",
    "Opdrachten per maand: 1.100, waarvan 60% sneakers en streetwear",
    "In 23% van de opdrachten komt de klant zelf ook en wacht mee",
    "Klanten die meewachten, geven vaker fooi en boeken vaker opnieuw",
    "Langste wachtopdracht ooit: 61 uur voor een sneaker van €190"
  ],
  eigenaardigheid: "Een vaste klant boekt elke maand een wachter voor de rij bij een bakkerij, haalt daarna zelf het brood en geeft de wachter het eerste croissantje. Ze zegt dat het wachten 'het lekkerste deel' is.",
  beperking: "Jamal wil geen 'voordringen' aanbieden. De wachters mogen geen kaartjes doorverkopen.",
  geprobeerd: "Een goedkoper tarief als de klant zelf meekomt. Niemand koos het.",
  uitdaging: "Mensen betalen om niet te hoeven wachten en wachten dan toch. Wat kopen ze hier eigenlijk? Gebruik jouw topic om dat te verklaren en er een groeiplan van te maken."
},

{
  id: "CB04", ton: "consumer",
  naam: "Sokkenfabriek Losse Eind",
  plaats: "Tilburg",
  tagline: "Eén op de vijf klanten koopt precies één sok.",
  wie: "Losse Eind verkoopt online vrolijke sokken. Ze begonnen met losse sokken als grap ('voor als je er één kwijt bent'), maar het werd een vast onderdeel van de webshop.",
  vraagstuk: "\"We willen meer verkopen per klant. Maar onze klanten kopen het minst mogelijke: één sok.\"",
  feiten: [
    "Gemiddelde orderwaarde: €14",
    "21% van de orders bestaat uit precies één losse sok (€6)",
    "Kopers van één sok komen opvallend vaak terug, gemiddeld 3,4 keer per jaar",
    "Meest gekochte losse sok: de linker",
    "Het abonnement (elke maand een paar) heeft 900 abonnees"
  ],
  eigenaardigheid: "Op de vraag 'waarom één sok?' in een enquête antwoordde 31%: 'om te combineren met een andere sok'. Er is een Instagram-account van klanten die alleen ongelijke sokken dragen, met 14.000 volgers. Losse Eind beheert hem niet.",
  beperking: "Losse sokken blijven verkrijgbaar, dat is het merk. Geen kortingsacties.",
  geprobeerd: "Een melding bij het afrekenen: 'Wil je er niet een paar van maken?'. De conversie daalde.",
  uitdaging: "Je klanten doen iets wat 'irrationeel' lijkt. Leg uit waarom het juist heel rationeel is, en bouw daar een groeistrategie op die met het gedrag meegaat in plaats van ertegenin."
},

{
  id: "CB05", ton: "consumer",
  naam: "Het Grote Gras Kijken",
  plaats: "Oirschot",
  tagline: "Een evenement waar mensen een middag kijken hoe gras groeit. Drie jaar op rij uitverkocht.",
  wie: "Wat begon als grap van een dorpsvereniging is uitgegroeid tot een jaarlijks evenement. 1.200 mensen zitten een middag op stoelen rond een veld en kijken naar gras. Er is geen programma. Er gebeurt niets.",
  vraagstuk: "\"We willen naar twee dagen, of naar meerdere locaties. Maar we weten niet waarom mensen komen, dus we durven niets te veranderen.\"",
  feiten: [
    "Kaarten: €24, 1.200 stuks, in 9 minuten uitverkocht",
    "Op de doorverkoopmarkt gaan kaarten voor €80+",
    "De gemiddelde bezoeker blijft 3 uur en 40 minuten",
    "Telefoons worden bij de ingang ingeleverd (vrijwillig: 74% doet het)",
    "Er is een 'gras-commentator' die af en toe fluistert wat er gebeurt"
  ],
  eigenaardigheid: "In 2025 viel er een bal uit de lucht (van een voetbalveldje ernaast). Het publiek stond op en applaudisseerde vier minuten. Het is het enige moment in de geschiedenis van het evenement dat er iets 'gebeurde'.",
  beperking: "Er mag niets aan het concept worden toegevoegd: geen muziek, geen sprekers, geen eten behalve wat je zelf meeneemt.",
  geprobeerd: "Een livestream voor wie geen kaartje had. 40 kijkers, die bijna allemaal binnen vijf minuten afhaakten.",
  uitdaging: "Een product waar letterlijk niets gebeurt, is drie jaar uitverkocht. Verklaar met jouw topic waarom, en durf te beslissen of opschalen het gedrag versterkt of kapotmaakt."
},

{
  id: "CB06", ton: "consumer",
  naam: "Milieustraat Oost",
  plaats: "Enschede",
  tagline: "Mensen komen op zaterdag naar de milieustraat om te ontspannen. Ze scheiden hun afval alleen slecht.",
  wie: "De gemeentelijke milieustraat wordt geleid door Roel (51). Op zaterdag staat er een file. Uit onderzoek blijkt dat veel bezoekers het uitje stiekem leuk vinden. Maar het afval komt in de verkeerde containers.",
  vraagstuk: "\"Twintig procent van het afval ligt in de verkeerde bak. Dat kost de gemeente een ton per jaar. Borden helpen niet.\"",
  feiten: [
    "Bezoekers op zaterdag: 1.100, gemiddeld 18 minuten op het terrein",
    "Foute scheiding: 20%, vooral hout, puin en elektronica",
    "Bezoekers die vaker komen, scheiden slechter dan nieuwe bezoekers",
    "Een medewerker die vriendelijk aanwijst, verlaagt foute scheiding tot 6%, maar er zijn maar 3 medewerkers",
    "De koffieautomaat bij de ingang is de best verkopende van alle gemeentelijke gebouwen"
  ],
  eigenaardigheid: "Er komt al vijf jaar elke zaterdag een man zonder afval. Hij kijkt, drinkt koffie en gaat weer weg. Medewerkers noemen hem 'de inspecteur'.",
  beperking: "Geen boetes en geen extra personeel. Het moet een plek blijven waar mensen graag komen.",
  geprobeerd: "Grotere borden met pictogrammen. Volgens camerabeelden kijkt minder dan 1 op de 10 bezoekers er überhaupt naar.",
  uitdaging: "Je hebt mensen die blij zijn, ontspannen en terugkomen, en toch het verkeerde doen. Gebruik dat gevoel, niet de borden. Wat zegt 'de inspecteur' over waarom mensen hier komen?"
},

{
  id: "CB07", ton: "consumer",
  naam: "Lege Doos",
  plaats: "Den Haag",
  tagline: "Een webshop die lege luxe verpakkingen verkoopt. Klanten zetten ze ongeopend in de kast.",
  wie: "Vera (34) werkte bij een verpakkingsfabriek en zag dat de mooiste dozen werden weggegooid na het uitpakken. Ze begon dozen te verkopen zonder inhoud. Het idee: je stopt er zelf iets in. Maar dat doet bijna niemand.",
  vraagstuk: "\"Ik verkoop dozen om iets in te geven. Maar de meeste klanten kopen ze voor zichzelf en doen er niets mee. Ik snap mijn eigen klanten niet.\"",
  feiten: [
    "Verkochte dozen per maand: 3.400, prijs €12 tot €65",
    "Uit een enquête: 61% van de dozen wordt nooit gevuld",
    "Klanten kopen gemiddeld 4,1 dozen per jaar",
    "Unboxing-video's van lege dozen krijgen meer views dan van gevulde",
    "De best verkopende doos is zwart, zwaar, met magneetsluiting en een papieren lintje"
  ],
  eigenaardigheid: "Er is een klant die 212 dozen heeft gekocht en ze op kleur in een kast heeft staan. Ze stuurt Vera elke maand een foto van de kast.",
  beperking: "Vera gaat geen inhoud verkopen. Duurzaamheid is een gevoelig punt: kritiek op 'verpakking zonder product' moet serieus genomen worden.",
  geprobeerd: "Een campagne 'Geef iets moois in een mooie doos'. De verkoop daalde.",
  uitdaging: "Mensen kopen niets, in een doos, en zijn er blij mee. Ontleed met jouw topic wat er in hun hoofd gebeurt, en bouw daar iets op dat ook de duurzaamheidskritiek overleeft."
},

{
  id: "CB08", ton: "consumer",
  naam: "Restaurant Geen Idee",
  plaats: "Utrecht",
  tagline: "Een restaurant zonder menukaart. Je weet pas wat je eet als het op tafel staat.",
  wie: "Chef Joris (39) kookt elke avond één menu dat hij die middag bedenkt op basis van wat er op de markt was. Gasten krijgen bij reservering twee vragen: 'Wat eet je absoluut niet?' en 'Wat was het lekkerste wat je ooit at?'",
  vraagstuk: "\"Wie één keer komt, is fan. Maar het is moeilijk om nieuwe mensen te laten reserveren voor iets waar ze niets over weten.\"",
  feiten: [
    "40 couverts, 5 avonden per week, €65 per persoon",
    "Bezetting: 78% vrijdag en zaterdag, 41% doordeweeks",
    "Herhaalbezoek: 52% komt binnen een jaar terug",
    "Bij reservering lezen 9 op de 10 mensen eerst alle reviews",
    "Reviews mogen van Joris niets over de gerechten verklappen; de meeste gasten houden zich eraan"
  ],
  eigenaardigheid: "Op de vraag 'wat was het lekkerste wat je ooit at' antwoordt een kwart van de gasten iets van hun oma. Joris probeert dan iets daarvan in hun gerecht te verwerken. Gasten huilen regelmatig aan tafel.",
  beperking: "Er komt geen menukaart, ook niet online achteraf. Het restaurant gaat niet goedkoper.",
  geprobeerd: "Een 'proefavond' met korting. Trok vooral mensen die op korting afkomen en niet terugkwamen.",
  uitdaging: "Onzekerheid houdt nieuwe gasten tegen en maakt bestaande gasten fan. Gebruik jouw topic om die drempel om te draaien tot de reden om te komen."
},

{
  id: "CB09", ton: "consumer",
  naam: "Boom te Huur",
  plaats: "Amersfoort",
  tagline: "Verhuurt levende kerstbomen. Klanten geven hun boom een naam en willen volgend jaar dezelfde terug.",
  wie: "Kweker Willem (49) verhuurt kerstbomen in een pot. Na de kerst komen ze terug naar zijn kwekerij en groeien ze verder. Hij begon voor de duurzaamheid, maar ontdekte iets anders.",
  vraagstuk: "\"Klanten willen hun eigen boom terug. Dat is lief, maar ik kan niet 4.000 bomen per naam bijhouden. En 30% brengt hem niet terug.\"",
  feiten: [
    "Verhuurde bomen: 4.000 per jaar, €45 per seizoen",
    "48% van de klanten vraagt om 'dezelfde boom als vorig jaar'",
    "30% van de bomen komt niet terug; de borg (€20) wordt dan ingehouden",
    "Bomen die terugkomen, groeien gemiddeld 25 cm per jaar",
    "Niet-terugbrengers zeggen vaak dat ze 'het niet over hun hart konden verkrijgen'"
  ],
  eigenaardigheid: "Er is een gezin dat al zeven jaar dezelfde boom huurt, 'Henk'. Henk is nu 2,40 meter en past niet meer in hun woonkamer. Ze hebben een gat in het plafond gezaagd.",
  beperking: "Willem gaat geen bomen verkopen. De bomen moeten na de kerst terug om te overleven.",
  geprobeerd: "Een hogere borg. Het percentage niet-terugbrengers bleef precies gelijk.",
  uitdaging: "Klanten hechten zich zo aan een boom dat ze hem niet terug willen geven, terwijl dat juist slecht is voor de boom. Draai dat gedrag om met jouw topic."
},

{
  id: "CB10", ton: "consumer",
  naam: "Plantje Post",
  plaats: "Utrecht",
  tagline: "Een plantenabonnement waar klanten opzeggen zodra een plant doodgaat. Uit schuldgevoel.",
  wie: "Plantje Post stuurt elke maand een kamerplant met verzorgingstips. Oprichters Sem (29) en Yara (30) ontdekten bij exitgesprekken dat klanten niet stoppen omdat ze het abonnement niet leuk vinden.",
  vraagstuk: "\"Klanten zijn dol op ons. Tot hun plant doodgaat. Dan schamen ze zich en zeggen ze op.\"",
  feiten: [
    "4.800 abonnees, €19 per maand",
    "Opzegpercentage per maand: 7%",
    "In exitgesprekken noemt 58% 'ik heb de vorige plant laten doodgaan'",
    "Gemiddeld gaat de eerste plant na 4,2 maanden dood",
    "Klanten die de eerste dode plant 'overleven', blijven gemiddeld 2,5 jaar"
  ],
  eigenaardigheid: "Een klant stuurde een dode monstera terug in de doos met een handgeschreven briefje: 'Sorry, het lag niet aan jullie'. Het briefje hangt op kantoor. Sindsdien kregen ze er nog 31.",
  beperking: "Geen 'onverwoestbare' nepplanten of alleen cactussen. Het blijft een abonnement op echte planten.",
  geprobeerd: "Een extra mail met verzorgingstips na een maand. Klanten die de mail openden, zeiden juist vaker op: ze zagen pas toen wat ze verkeerd deden.",
  uitdaging: "Je product veroorzaakt schaamte. Hoe draai je het moment van falen om naar een moment waarop klanten juist méér aan je gehecht raken?"
},

{
  id: "CB11", ton: "consumer",
  naam: "De Duurste Patat van Nederland",
  plaats: "Heerenveen",
  tagline: "Een frietkraam die €38 vraagt voor een patatje. Er staat elke dag een rij.",
  wie: "Rudy (42) verkocht jarenlang gewone friet. In 2023 zette hij uit frustratie een 'luxe patat' op het bord voor €38: met truffel, goud en een saus van zeewier. Hij dacht dat niemand het zou bestellen. Nu is het zijn halve omzet.",
  vraagstuk: "\"Ik weet niet of dit een hype is of een bedrijf. Moet ik doorgaan, duurder worden, of gaat het straks ineens weg?\"",
  feiten: [
    "Verkochte luxe patatjes: gemiddeld 60 per dag, alleen vrijdag en zaterdag",
    "Een gewone patat (€3,50) verkoopt hij 300 keer per dag",
    "84% van de luxe kopers deelt er een foto of video van",
    "Hij kan er maar 60 per dag maken, door het goudblad",
    "Klanten die een luxe patat kopen, kopen er bijna nooit een tweede"
  ],
  eigenaardigheid: "In een blinde smaaktest vonden 7 van de 10 mensen de gewone patat lekkerder. Rudy heeft het resultaat ingelijst en in de kraam gehangen. De luxe patat verkocht daarna béter.",
  beperking: "Rudy wil niet liegen over smaak of ingrediënten. De gewone friet blijft de basis van zijn zaak.",
  geprobeerd: "Een middelduur 'semi-luxe patatje' van €12. Niemand kocht het.",
  uitdaging: "Een product dat minder lekker is en duurder, verkoopt beter. Gebruik jouw topic om te verklaren wat mensen hier echt kopen, en of het blijvend kan zijn."
},

{
  id: "CB12", ton: "consumer",
  naam: "Bowling De Scheve Baan",
  plaats: "Joure",
  tagline: "Een bowlingcentrum met één baan die scheef ligt. Iedereen wil op die baan.",
  wie: "Familiebedrijf van Sietske (55) met acht bowlingbanen. Baan 6 is in 2009 verzakt en loopt licht naar links. Repareren kost €18.000. Sindsdien willen klanten alleen nog op baan 6.",
  vraagstuk: "\"Op vrijdag staan mensen te wachten op baan 6, terwijl er zeven rechte banen leeg zijn. En ik weet niet of ik hem moet repareren of moet koesteren.\"",
  feiten: [
    "Bezetting baan 6: 96%. Andere banen gemiddeld 44%",
    "Reserveringen voor baan 6: tot 5 weken van tevoren",
    "Gemiddelde score op baan 6 is 30% lager dan op de andere banen",
    "Er zijn vaste teams die 'alleen op 6' spelen",
    "Een verzekeraar heeft gevraagd of de baan wel veilig is (dat is hij)"
  ],
  eigenaardigheid: "Er hangt een bord met het record op baan 6: 147 punten. Op de rechte banen ligt het record op 289. Het 147-record wordt veel vaker gefotografeerd.",
  beperking: "Het bowlingcentrum kan niet groter. Er komen geen extra scheve banen bij (de verzekeraar).",
  geprobeerd: "Een toeslag van €5 op baan 6. Mensen betaalden het zonder te morren, en de rest bleef leeg.",
  uitdaging: "Een fout is het populairste product geworden. Leg met jouw topic uit waarom, en bedenk wat Sietske moet doen met de zeven 'perfecte' banen die niemand wil."
},

{
  id: "CB13", ton: "consumer",
  naam: "Bakkerij Mislukt",
  plaats: "Deventer",
  tagline: "De misbaksels zijn eerder uitverkocht dan de goede koekjes.",
  wie: "Bakker Hanneke (51) verkocht haar mislukte koekjes altijd voor €2 per zak, met een stickertje 'Mislukt'. Sinds een paar jaar is de zak met misbaksels om 10:00 op. De mooie koekjes blijven liggen.",
  vraagstuk: "\"Ik ga toch niet expres dingen laten mislukken? Maar mijn goede koekjes verkopen slechter dan mijn fouten.\"",
  feiten: [
    "Zakken 'Mislukt': 40 per dag, op om 10:00",
    "Er staat een rij voor de deur van 7:30 tot opening om 8:00",
    "Een doos goede koekjes (€8,50) verkoopt 25 keer per dag, er gaat 30% weg",
    "Klanten die een zak 'Mislukt' kopen, kopen opvallend vaak ook nog iets anders",
    "Ze kan niet meer misbaksels maken dan er 'vanzelf' mislukken: ongeveer 8% van de productie"
  ],
  eigenaardigheid: "Een klant vroeg of ze 'expres een beetje kon mislukken' voor zijn verjaardag. Hanneke weigerde. Hij kwam de volgende dag om 7:00 in de rij staan.",
  beperking: "Hanneke gaat niet expres slecht bakken. Eerlijk is eerlijk: mislukt moet echt mislukt zijn.",
  geprobeerd: "De goede koekjes in een zak met dezelfde sticker-stijl verkopen. Klanten zagen het meteen en voelden zich bedot.",
  uitdaging: "De goede producten verliezen van de foute. Gebruik jouw topic om te verklaren wat die zak 'Mislukt' heeft, en hoe Hanneke dat kan inzetten zonder ooit te liegen."
},

{
  id: "CB14", ton: "consumer",
  naam: "Dierenasiel Poot",
  plaats: "Breda",
  tagline: "Mensen komen voor een puppy en gaan naar huis met niks. Oude katten wachten 14 maanden.",
  wie: "Een dierenasiel met plek voor 60 katten en 30 honden, gerund door Esra (40) met 120 vrijwilligers. De adoptiepagina is goed bezocht, maar steeds dezelfde dieren blijven zitten.",
  vraagstuk: "\"Iedereen wil een jong dier. De oude, de schuwe en de zwarte katten blijven hier. Sommigen sterven in het asiel.\"",
  feiten: [
    "Adopties per jaar: 340",
    "Gemiddelde wachttijd kitten: 3 weken. Kat ouder dan 8 jaar: 14 maanden",
    "Zwarte katten blijven 2x zo lang als andere katten",
    "70% van de bezoekers komt binnen met een vast beeld van het dier dat ze zoeken",
    "Mensen die een oud dier adopteren, zijn er later het meest tevreden over"
  ],
  eigenaardigheid: "Kater Opa (13, zwart, één oog) zit er al twee jaar. Hij heeft een vaste bezoeker die elke dinsdag komt voorlezen, maar hem niet wil adopteren 'omdat het dan afgelopen is met de dinsdagen'.",
  beperking: "Geen zielige foto's of schuldgevoel. Elke adoptie moet een goede match blijven; het asiel wil dieren niet 'verkopen'.",
  geprobeerd: "Een 'zielige kat van de week' op Facebook. Veel likes en hartjes, geen enkele adoptie.",
  uitdaging: "Je strijdt tegen een vast beeld in iemands hoofd. Medelijden werkt niet. Wat doet het verhaal van Opa en zijn voorlezer met jouw kijk op wat mensen eigenlijk zoeken in een huisdier?"
},

{
  id: "CB15", ton: "consumer",
  naam: "Snoepwinkel Opa's Pot",
  plaats: "Hoorn",
  tagline: "Een snoepwinkel waar volwassenen meer uitgeven dan kinderen. En stiekem snoepen voor ze afrekenen.",
  wie: "Henny (63) verkoopt al 30 jaar snoep uit 180 grote glazen potten, per gram afgewogen. De winkel ziet eruit als in 1965. Haar klanten zijn steeds vaker dertigers en veertigers zonder kinderen.",
  vraagstuk: "\"Mijn klanten worden ouder, en ze komen voor een gevoel, niet voor snoep. Maar dat gevoel kan ik niet online verkopen, en de huur stijgt.\"",
  feiten: [
    "Gemiddelde besteding: kinderen €3,40, volwassenen €11,80",
    "65% van de volwassen klanten koopt snoep dat 'ze vroeger ook kochten'",
    "Volwassenen blijven gemiddeld 14 minuten in de winkel, kinderen 5",
    "Meer dan de helft van de volwassenen eet al een snoepje voordat ze betalen",
    "Toeristen kopen vooral drop, maar eten het zelden op"
  ],
  eigenaardigheid: "De weegschaal staat al dertig jaar drie gram in het voordeel van de klant. Henny weet het. Vaste klanten weten het ook. Niemand zegt er iets over.",
  beperking: "De winkel blijft er precies zo uitzien. Henny gaat niet bezorgen en wil geen 'retro-concept' worden.",
  geprobeerd: "Een webshop met 'snoep van vroeger'. Verkocht 30 zakken in een half jaar.",
  uitdaging: "Volwassenen gedragen zich hier als kinderen en kinderen als volwassenen. Gebruik jouw topic om te verklaren wat er in die 14 minuten gebeurt, en hoe die winkel daarop kan overleven."
}

];
