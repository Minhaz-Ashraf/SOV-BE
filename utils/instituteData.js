// Sample institute data as an array of objects
const baseData = [
  {
    "instituteName": "Anglia Ruskin University (Cambridge)",
    "country": "UK"
  },
  {
    "instituteName": "BIMM University (Bristol)",
    "country": "UK"
  },
  {
    "instituteName": "Edinburgh Napier University (Edinburgh)",
    "country": "UK"
  },
  {
    "instituteName": "University of Exeter (Exeter)",
    "country": "UK"
  },
  {
    "instituteName": "The Engineering & Design Institute London (TEDI-London)",
    "country": "UK"
  },
  {
    "instituteName": "Leeds Arts University (Leeds)",
    "country": "UK"
  },
  {
    "instituteName": "CRIC Cambridge Ruskin International College - Anglia Ruskin University (Cambridge)",
    "country": "UK"
  },
  {
    "instituteName": "University of Kent International College (UKIC) (Canterbury)",
    "country": "UK"
  },
  {
    "instituteName": "University of Portsmouth (Portsmouth)",
    "country": "UK"
  },
  {
    "instituteName": "University of Suffolk (England)",
    "country": "UK"
  },
  {
    "instituteName": "Bath Spa University, RAK, (Ras Al Khaimah)",
    "country": "UAE"
  },
  {
    "instituteName": "EIT Urban Mobility Master School",
    "country": "Finland"
  },
  {
    "instituteName": "EM Strasbourg Business School",
    "country": "France"
  },
  {
    "instituteName": "Atelier De Sevres (Applied Arts School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "ELIJE (Business School) (Montpellier)",
    "country": "France"
  },
  {
    "instituteName": "New York Film Academy (NYFA), France",
    "country": "France"
  },
  {
    "instituteName": "Institut Superieur De Marketing Du Luxe (Sup De Lux), France",
    "country": "France"
  },
  {
    "instituteName": "SAS (SMS), France",
    "country": "France"
  },
  {
    "instituteName": "South Champagne Business School (Troyes)",
    "country": "France"
  },
  {
    "instituteName": "Arden University (Berlin)",
    "country": "Germany"
  },
  {
    "instituteName": "Birkbeck, University of London (London)",
    "country": "UK"
  },
  {
    "instituteName": "Birmingham City University (BCU) (Birmingham)",
    "country": "UK"
  },
  {
    "instituteName": "London South Bank University (London)",
    "country": "UK"
  },
  {
    "instituteName": "Edge Hill University (Liverpool)",
    "country": "UK"
  },
  {
    "instituteName": "Falmouth University",
    "country": "UK"
  },
  {
    "instituteName": "University of East Anglia (Norwich)",
    "country": "UK"
  },
  {
    "instituteName": "University of Liverpool",
    "country": "UK"
  },
  {
    "instituteName": "University of Nottingham International College at University of Nottingham (Nottingham)",
    "country": "UK"
  },
  {
    "instituteName": "UPIC - University of Plymouth International College - University of Plymouth (Plymouth)",
    "country": "UK"
  },
  {
    "instituteName": "Bangor University International College (BUIC) (Bangor)",
    "country": "UK"
  },
  {
    "instituteName": "Bangor University International College (BUIC) (Wales)",
    "country": "UK"
  },
  {
    "instituteName": "University of Sheffield (Sheffield)",
    "country": "UK"
  },
  {
    "instituteName": "University of Surrey (Birmingham)",
    "country": "UK"
  },
  {
    "instituteName": "University of Hull (Hull)",
    "country": "UK"
  },
  {
    "instituteName": "University of Kent (Canterbury)",
    "country": "UK"
  },
  {
    "instituteName": "University of Portsmouth (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Sussex (Brighton)",
    "country": "UK"
  },
  {
    "instituteName": "University of The West of England (UWE) (Bristol)",
    "country": "UK"
  },
  {
    "instituteName": "Symbiosis International University, (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "The Emirates Academy of Hospitality Management (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "University of West Bohemia (Plze?)",
    "country": "Czech Republic"
  },
  {
    "instituteName": "Hanken School of Economics",
    "country": "Finland"
  },
  {
    "instituteName": "Burgundy School of Business (Dijon)",
    "country": "France"
  },
  {
    "instituteName": "Epitech (Paris)",
    "country": "France"
  },
  {
    "instituteName": "ELIJE (Business School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Rouen)",
    "country": "France"
  },
  {
    "instituteName": "HETIC (Business School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Ecole De Management Applique (EMA) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Groupe IGS (Lyonn)",
    "country": "France"
  },
  {
    "instituteName": "Ipag Business School (Nice)",
    "country": "France"
  },
  {
    "instituteName": "ISC Paris Business School (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Istituto Marangoni (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Wes-Sup Business School, France",
    "country": "France"
  },
  {
    "instituteName": "ISL Sprachschule (Koblenz)",
    "country": "Germany"
  },
  {
    "instituteName": "Brunel University (London)",
    "country": "UK"
  },
  {
    "instituteName": "De Montfort University (Leicester)",
    "country": "UK"
  },
  {
    "instituteName": "Durham University (Durham)",
    "country": "UK"
  },
  {
    "instituteName": "Heriot Watt University (Edinburgh)",
    "country": "UK"
  },
  {
    "instituteName": "HULT International Business School (London)",
    "country": "UK"
  },
  {
    "instituteName": "Glasgow Intl College at University of Glasgow (Glasgow)",
    "country": "UK"
  },
  {
    "instituteName": "Leeds Conservatoire (England)",
    "country": "UK"
  },
  {
    "instituteName": "MetFilm School (London)",
    "country": "UK"
  },
  {
    "instituteName": "Hertfordshire International College University of Hertfordshire (Herts)",
    "country": "UK"
  },
  {
    "instituteName": "UK-TCSU - The College, Swansea University - Swansea University (Swansea)",
    "country": "UK"
  },
  {
    "instituteName": "Nottingham Trent University (Nottingham)",
    "country": "UK"
  },
  {
    "instituteName": "Royal Agricultural University (Gloucestershire)",
    "country": "UK"
  },
  {
    "instituteName": "SOAS University of London (London)",
    "country": "UK"
  },
  {
    "instituteName": "Staffordshire University (Staffordshire)",
    "country": "UK"
  },
  {
    "instituteName": "University of Brighton (Brighton)",
    "country": "UK"
  },
  {
    "instituteName": "University of Greenwich (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Suffolk (Suffolk)",
    "country": "UK"
  },
  {
    "instituteName": "University of The West of Scotland (Glasgow)",
    "country": "UK"
  },
  {
    "instituteName": "English Path, (Duabi)",
    "country": "UAE"
  },
  {
    "instituteName": "SAE Institute (Duabi)",
    "country": "UAE"
  },
  {
    "instituteName": "University of Stirling (UAE)",
    "country": "UAE"
  },
  {
    "instituteName": "Anglo-American University, Czech Republic",
    "country": "Czech Republic"
  },
  {
    "instituteName": "Lab University of Applied Sciences (Lappeenranta)",
    "country": "Finland"
  },
  {
    "instituteName": "Tampere University",
    "country": "Finland"
  },
  {
    "instituteName": "Ecole Superieure Du Digital, France",
    "country": "France"
  },
  {
    "instituteName": "Ecole Superieure Du Parfum, France",
    "country": "France"
  },
  {
    "instituteName": "IHECF (Accounting & Finance from B1 to M2), France",
    "country": "France"
  },
  {
    "instituteName": "Institut Mines-Telecom Business School",
    "country": "France"
  },
  {
    "instituteName": "Merkure Business School (Business School) (Aix-en-Provence)",
    "country": "France"
  },
  {
    "instituteName": "Le Cordon Bleu (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Mediadesign Hochschule (MDH University of Applied Sciences",
    "country": "Germany"
  },
  {
    "instituteName": "Bangor University (Bangor)",
    "country": "UK"
  },
  {
    "instituteName": "University of Hull (London)",
    "country": "UK"
  },
  {
    "instituteName": "UCLAN (Preston)",
    "country": "UK"
  },
  {
    "instituteName": "EF International Academy Ltd. (Trading as - EF Academy) (England)",
    "country": "UK"
  },
  {
    "instituteName": "English Path (London)",
    "country": "UK"
  },
  {
    "instituteName": "Keele University (Keele)",
    "country": "UK"
  },
  {
    "instituteName": "Leeds Conservatoire (Leeds)",
    "country": "UK"
  },
  {
    "instituteName": "Norwich University of the Arts (Norwich)",
    "country": "UK"
  },
  {
    "instituteName": "Edinburgh Napier University International College (ENUIC) (Scotland)",
    "country": "UK"
  },
  {
    "instituteName": "International College of Dundee (ICD) (Scotland)",
    "country": "UK"
  },
  {
    "instituteName": "University of Bradford International College (UBIC) (Bradford)",
    "country": "UK"
  },
  {
    "instituteName": "Ravensbourne University London (London)",
    "country": "UK"
  },
  {
    "instituteName": "Royal Holloway, University of London (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Sussex (Sussex)",
    "country": "UK"
  },
  {
    "instituteName": "The Robert Gordon University (RGU) (Scotland)",
    "country": "UK"
  },
  {
    "instituteName": "University of Chichester (Chichester)",
    "country": "UK"
  },
  {
    "instituteName": "University of the Arts London (UAL) (London)",
    "country": "UK"
  },
  {
    "instituteName": "Ajman University - (Ajman)",
    "country": "UAE"
  },
  {
    "instituteName": "Ajman University  (UAE)",
    "country": "UAE"
  },
  {
    "instituteName": "University of Wollongong - (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "Prague Film Institute (Prague)",
    "country": "Czech Republic"
  },
  {
    "instituteName": "Ecole Superieure De Publicite, France",
    "country": "France"
  },
  {
    "instituteName": "ESARC Evolution (Business School) (Rennes)",
    "country": "France"
  },
  {
    "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Montpellier)",
    "country": "France"
  },
  {
    "instituteName": "lesa Arts & Culture (Applied Arts School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "LISAA (Applied Arts School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "MBA ESG (Business School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Strate Ecole De Design (Applied Arts School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "EFAP, School of Communication (Paris)",
    "country": "France"
  },
  {
    "instituteName": "NEOMA Business School (Rouen)",
    "country": "France"
  },
  {
    "instituteName": "NEOMA Business School (Reims)",
    "country": "France"
  },
  {
    "instituteName": "ESLSCA Business School (ESLSCA BS), France",
    "country": "France"
  },
  {
    "instituteName": "ISM International School of Management, Germany",
    "country": "Germany"
  },
  {
    "instituteName": "Schiller International University (Global Education Holding)",
    "country": "Germany"
  },
  {
    "instituteName": "BIMM University (Manchester)",
    "country": "UK"
  },
  {
    "instituteName": "London at Royal Veterinary College (London)",
    "country": "UK"
  },
  {
    "instituteName": "Cranfield University (Cranfield)",
    "country": "UK"
  },
  {
    "instituteName": "Queen's Mary University of London (KICL)",
    "country": "UK"
  },
  {
    "instituteName": "Leeds Trinity University (Leeds)",
    "country": "UK"
  },
  {
    "instituteName": "Loughborough University (Loughborough)",
    "country": "UK"
  },
  {
    "instituteName": "Loughborough University (London)",
    "country": "UK"
  },
  {
    "instituteName": "Queen's University, (Belfast)",
    "country": "UK"
  },
  {
    "instituteName": "Sheffield Hallam University (Sheffield)",
    "country": "UK"
  },
  {
    "instituteName": "SOAS University of London (England)",
    "country": "UK"
  },
  {
    "instituteName": "Cardiff University (Cardiff)",
    "country": "UK"
  },
  {
    "instituteName": "University of Strathclyde (Glasgow)",
    "country": "UK"
  },
  {
    "instituteName": "Ulster University (Londonerry)",
    "country": "UK"
  },
  {
    "instituteName": "University of Buckingham (Buckingham)",
    "country": "UK"
  },
  {
    "instituteName": "University of Essex (Colchester)",
    "country": "UK"
  },
  {
    "instituteName": "University of Liverpool (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Sunderland",
    "country": "UK"
  },
  {
    "instituteName": "University of Winchester",
    "country": "UK"
  },
  {
    "instituteName": "Wrexham University (Formerly Wrexham Glyndwr University)",
    "country": "UK"
  },
  {
    "instituteName": "Glyndwr University Wrexham",
    "country": "UK"
  },
  {
    "instituteName": "Manchester Metropolitan University",
    "country": "UK"
  },
  {
    "instituteName": "GBS (Global Business Studies) - (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "HULT International Business School (Duabi)",
    "country": "UAE"
  },
  {
    "instituteName": "LUT University (Lappeenranta)",
    "country": "Finland"
  },
  {
    "instituteName": "ESARC Evolution (Business School) (Bordeaux)",
    "country": "France"
  },
  {
    "instituteName": "ESARC Evolution (Business School) (Toulouse)",
    "country": "France"
  },
  {
    "instituteName": "Audencia Business School",
    "country": "France"
  },
  {
    "instituteName": "LISAA Province (Applied Arts School) (Toulouse)",
    "country": "France"
  },
  {
    "instituteName": "ICART, School of Cultural & Art Management",
    "country": "France"
  },
  {
    "instituteName": "ISC Paris Business School (Orleans)",
    "country": "France"
  },
  {
    "instituteName": "ECE (Engineering School)",
    "country": "France"
  },
  {
    "instituteName": "INSEEC (Management School) France",
    "country": "France"
  },
  {
    "instituteName": "Vatel Bordeaux, France Hotel & Tourism Business School (Cedex)",
    "country": "France"
  },
  {
    "instituteName": "Ecole Superieure de Tourisme (Troyes)",
    "country": "France"
  },
  {
    "instituteName": "Rheinisches Studienkolleg in Berlin",
    "country": "Germany"
  },
  {
    "instituteName": "Dresden International University",
    "country": "Germany"
  },
  {
    "instituteName": "Abertay University (Dundee)",
    "country": "UK"
  },
  {
    "instituteName": "BIMM University, (London)",
    "country": "UK"
  },
  {
    "instituteName": "City University (London)",
    "country": "UK"
  },
  {
    "instituteName": "Coventry University (London)",
    "country": "UK"
  },
  {
    "instituteName": "University For The Creative Arts (UCA)",
    "country": "UK"
  },
  {
    "instituteName": "Newcastle University (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Stirling (London)",
    "country": "UK"
  },
  {
    "instituteName": "KIC Bournemouth at Bournemouth University (Bournemouth)",
    "country": "UK"
  },
  {
    "instituteName": "KIC London (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Westminster (London)",
    "country": "UK"
  },
  {
    "instituteName": "Leeds Arts University (West Yorkshire)",
    "country": "UK"
  },
  {
    "instituteName": "Oxford Brookes University (Oxford)",
    "country": "UK"
  },
  {
    "instituteName": "University of Bradford International College (UBIC) (England)",
    "country": "UK"
  },
  {
    "instituteName": "University of Greenwich International College (UGIC) (London)",
    "country": "UK"
  },
  {
    "instituteName": "Paris Dauphine International, London (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Leeds (Leeds)",
    "country": "UK"
  },
  {
    "instituteName": "The Glasgow School of Art (Scotland)",
    "country": "UK"
  },
  {
    "instituteName": "University of Bedfordshire (Luton)",
    "country": "UK"
  },
  {
    "instituteName": "University of South Wales (Pontypridd)",
    "country": "UK"
  },
  {
    "instituteName": "University of York (Heslington)",
    "country": "UK"
  },
  {
    "instituteName": "Curtin University - (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "De Montfort University - (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "Rochester Institute of Technology of Dubai (RIT UAE)",
    "country": "UAE"
  },
  {
    "instituteName": "University of Bolton (Ras Al Khaimah)",
    "country": "UAE"
  },
  {
    "instituteName": "CEG France - OnCampus Kedge Business School (Toulon)",
    "country": "France"
  },
  {
    "instituteName": "IPAC Bachelor Factory (Bachelors in Business & Management from B1 to B3), France",
    "country": "France"
  },
  {
    "instituteName": "ESARC Evolution (Business School) (Aix)",
    "country": "France"
  },
  {
    "instituteName": "Strate Ecole De Design (Applied Arts School) (Lyon)",
    "country": "France"
  },
  {
    "instituteName": "ISTEC, Paris",
    "country": "France"
  },
  {
    "instituteName": "Association Nouvelle EDC (EDC Paris Business School), France",
    "country": "France"
  },
  {
    "instituteName": "Anglia Ruskin University (Chelmsford)",
    "country": "UK"
  },
  {
    "instituteName": "Aston University (Birmingham)",
    "country": "UK"
  },
  {
    "instituteName": "Bishop Grosseteste University (Lincoln)",
    "country": "UK"
  },
  {
    "instituteName": "University of Hull (England)",
    "country": "UK"
  },
  {
    "instituteName": "London at Royal Holloway (London)",
    "country": "UK"
  },
  {
    "instituteName": "Glasgow Caledonian University (Glasgow)",
    "country": "UK"
  },
  {
    "instituteName": "English Path (Brimingham)",
    "country": "UK"
  },
  {
    "instituteName": "Arden University",
    "country": "UK"
  },
  {
    "instituteName": "Lancaster University",
    "country": "UK"
  },
  {
    "instituteName": "University of Essex",
    "country": "UK"
  },
  {
    "instituteName": "University of Bristol (FC Only- KICL and On-Campus)",
    "country": "UK"
  },
  {
    "instituteName": "Kingston University (Magee Londonderry)",
    "country": "UK"
  },
  {
    "instituteName": "Le Cordon Bleu (London)",
    "country": "UK"
  },
  {
    "instituteName": "MetFilm School (Leeds)",
    "country": "UK"
  },
  {
    "instituteName": "Hertfordshire International College University of Hertfordshire (Hatfield)",
    "country": "UK"
  },
  {
    "instituteName": "Northeastern University (London)",
    "country": "UK"
  },
  {
    "instituteName": "Queen Margaret University (Edinburgh)",
    "country": "UK"
  },
  {
    "instituteName": "Teesside University (Middles- Borough )",
    "country": "UK"
  },
  {
    "instituteName": "University College Birmingham (Birmingham)",
    "country": "UK"
  },
  {
    "instituteName": "University of Bolton",
    "country": "UK"
  },
  {
    "instituteName": "University of Bradford (Bradford)",
    "country": "UK"
  },
  {
    "instituteName": "University of Derby (Derby)",
    "country": "UK"
  },
  {
    "instituteName": "University of Salford (Manchester)",
    "country": "UK"
  },
  {
    "instituteName": "University of Bath",
    "country": "UK"
  },
  {
    "instituteName": "University of Europe for Applied Sciences, (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "Ecole De Conde, France",
    "country": "France"
  },
  {
    "instituteName": "Institut National De Gemmologie, France",
    "country": "France"
  },
  {
    "instituteName": "College De Paris - Ecema Business School (Lyon)",
    "country": "France"
  },
  {
    "instituteName": "CY Cergy Paris University (CY Tech)",
    "country": "France"
  },
  {
    "instituteName": "Digital Campus (Business School) (Toulouse)",
    "country": "France"
  },
  {
    "instituteName": "LISAA Province (Applied Arts School) (Nantes)",
    "country": "France"
  },
  {
    "instituteName": "ICN International College (Paris)",
    "country": "France"
  },
  {
    "instituteName": "IUM (International University of Monaco) (Management School)",
    "country": "France"
  },
  {
    "instituteName": "Munich Business School (Munich)",
    "country": "Germany"
  },
  {
    "instituteName": "Arts University Bournemouth (Dorset)",
    "country": "UK"
  },
  {
    "instituteName": "BIMM University (Brighton)",
    "country": "UK"
  },
  {
    "instituteName": "London at Birkbeck (London)",
    "country": "UK"
  },
  {
    "instituteName": "London at Goldsmiths (London)",
    "country": "UK"
  },
  {
    "instituteName": "Loughborough",
    "country": "UK"
  },
  {
    "instituteName": "University of Southampton",
    "country": "UK"
  },
  {
    "instituteName": "EC English (Cambridge)",
    "country": "UK"
  },
  {
    "instituteName": "EC English (Manchester)",
    "country": "UK"
  },
  {
    "instituteName": "University of Stirling (Stirling)",
    "country": "UK"
  },
  {
    "instituteName": "Liverpool John Moores University (LJMU) (Liverpool)",
    "country": "UK"
  },
  {
    "instituteName": "LGSC - Leicester Global Study Centre University of Leicester (Aberdeen)",
    "country": "UK"
  },
  {
    "instituteName": "UNIC - University of Northampton International College - University of Northampton (Northampton)",
    "country": "UK"
  },
  {
    "instituteName": "Kingston University (London)",
    "country": "UK"
  },
  {
    "instituteName": "The University of Sheffield ()",
    "country": "UK"
  },
  {
    "instituteName": "London College of Communication (LCC) (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Liverpool (Liverpool)",
    "country": "UK"
  },
  {
    "instituteName": "Modul University (Vienna)",
    "country": "Austria"
  },
  {
    "instituteName": "CEG France - OnCampus Kedge Business School (Bordeaux)",
    "country": "France"
  },
  {
    "instituteName": "TUNON (Tourism and Hotel Management School from B1 to M2), France",
    "country": "France"
  },
  {
    "instituteName": "ESIGELEC, France",
    "country": "France"
  },
  {
    "instituteName": "Digital Campus (Business School) (Bordeaux)",
    "country": "France"
  },
  {
    "instituteName": "ESARC Evolution (Business School) (Montpellier)",
    "country": "France"
  },
  {
    "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Tours)",
    "country": "France"
  },
  {
    "instituteName": "HEIP (Political Science & International Relations School)",
    "country": "France"
  },
  {
    "instituteName": "Alte University (Tbilisi)",
    "country": "Georgia"
  },
  {
    "instituteName": "SRH International College (Heidelberg)",
    "country": "Germany"
  },
  {
    "instituteName": "Queen Mary University of London - QMUL (London)",
    "country": "UK"
  },
  {
    "instituteName": "Glasgow Caledonian University (London)",
    "country": "UK"
  },
  {
    "instituteName": "English Path (Leeds)",
    "country": "UK"
  },
  {
    "instituteName": "University of Manchester (Manchester)",
    "country": "UK"
  },
  {
    "instituteName": "York Intl College at University of York (Heslington)",
    "country": "UK"
  },
  {
    "instituteName": "Leeds Beckett University (Leeds)",
    "country": "UK"
  },
  {
    "instituteName": "London Metropolitan University (London)",
    "country": "UK"
  },
  {
    "instituteName": "SAE Institute",
    "country": "UK"
  },
  {
    "instituteName": "University of Wales Trinity Saint David (Birmingham)",
    "country": "UK"
  },
  {
    "instituteName": "SKEMA Business School (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "Thomas More - University of Applied Sciences (Geel & Mechelen)",
    "country": "Belgium"
  },
  {
    "instituteName": "Algebra University College (Zagreb)",
    "country": "Croatia"
  },
  {
    "instituteName": "Ecole 89, (Ferrieres-en- Brie)",
    "country": "France"
  },
  {
    "instituteName": "CLCF (Applied Arts School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Toulouse)",
    "country": "France"
  },
  {
    "instituteName": "Emlyon business school",
    "country": "France"
  },
  {
    "instituteName": "Narratiiv (Business School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "CBS International Business School",
    "country": "Germany"
  },
  {
    "instituteName": "Kuhne Logistics University (Humburg)",
    "country": "Germany"
  },
  {
    "instituteName": "SRH Berlin University of Applied Sciences, SRH Hochschulen Berlin GmbH",
    "country": "Germany"
  },
  {
    "instituteName": "Lancaster University Leipzig",
    "country": "Germany"
  },
  {
    "instituteName": "EC English ( Brighton)",
    "country": "UK"
  },
  {
    "instituteName": "University of Gloucestershire",
    "country": "UK"
  },
  {
    "instituteName": "University of London (England)",
    "country": "UK"
  },
  {
    "instituteName": "University of The West of England, Bristol's Intl College (Bristol)",
    "country": "UK"
  },
  {
    "instituteName": "Brunel University London Pathway College (BULPC) (London)",
    "country": "UK"
  },
  {
    "instituteName": "BPP University",
    "country": "UK"
  },
  {
    "instituteName": "Edinburgh Napier University International College (ENUIC) (Edinburgh)",
    "country": "UK"
  },
  {
    "instituteName": "University of Huddersfield (Huddersfield)",
    "country": "UK"
  },
  {
    "instituteName": "Ulster University (Coleraine)",
    "country": "UK"
  },
  {
    "instituteName": "University of Birmingham",
    "country": "UK"
  },
  {
    "instituteName": "University of Central Lancashire (UCLAN) (Preston)",
    "country": "UK"
  },
  {
    "instituteName": "Global Banking School",
    "country": "UK"
  },
  {
    "instituteName": "University of Birmingham (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "University of Bolton - UAE",
    "country": "UAE"
  },
  {
    "instituteName": "South-Eastern Finland University of Applied Sciences",
    "country": "Finland"
  },
  {
    "instituteName": "VAMK - Vaasa University of Applied Sciences (Vaasa)",
    "country": "Finland"
  },
  {
    "instituteName": "Ecole Eac, France",
    "country": "France"
  },
  {
    "instituteName": "Brest Business School (Brest)",
    "country": "France"
  },
  {
    "instituteName": "College de Paris",
    "country": "France"
  },
  {
    "instituteName": "European Business School (EBS-Paris), (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Atelier Chardon Savard (Applied Arts School) (Nantes)",
    "country": "France"
  },
  {
    "instituteName": "Cours Florent (Applied Arts School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Bordeaux)",
    "country": "France"
  },
  {
    "instituteName": "Grenoble Ecole de Management",
    "country": "France"
  },
  {
    "instituteName": "ESG Ecoles De Commerce (Business School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "EU Business School (Old Name - European University) (Munich )",
    "country": "Germany"
  },
  {
    "instituteName": "FOM Hochschule",
    "country": "Germany"
  },
  {
    "instituteName": "GISMA University of Applied Sciences, Germany",
    "country": "Germany"
  },
  {
    "instituteName": "Aston University",
    "country": "UK"
  },
  {
    "instituteName": "Newcastle University (Newcastle)",
    "country": "UK"
  },
  {
    "instituteName": "City University of London (London)",
    "country": "UK"
  },
  {
    "instituteName": "Cranfield Intl College at Cranfield University (Cranfield)",
    "country": "UK"
  },
  {
    "instituteName": "Liverpool Intl College at University of Liverpool (Liverpool)",
    "country": "UK"
  },
  {
    "instituteName": "York Intl College at University of York (York)",
    "country": "UK"
  },
  {
    "instituteName": "Middlesex University (London)",
    "country": "UK"
  },
  {
    "instituteName": "ICP - International College Portsmouth - University of Portsmouth (Portsmouth)",
    "country": "UK"
  },
  {
    "instituteName": "Oxford International Pathway College (OIPC)",
    "country": "UK"
  },
  {
    "instituteName": "Regent's University London (London)",
    "country": "UK"
  },
  {
    "instituteName": "The Robert Gordon University (RGU) (Aberdeen)",
    "country": "UK"
  },
  {
    "instituteName": "Camberwell College of Arts (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Wolverhampton (Wolverhampton)",
    "country": "UK"
  },
  {
    "instituteName": "UWIC - University of Worcester International College (UG/PG Pathway)",
    "country": "UK"
  },
  {
    "instituteName": "Bangor University and ELCOS",
    "country": "UK"
  },
  {
    "instituteName": "Heriot Watt University (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "Rochester Institute of Technology of Dubai (RIT Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "Cyprus West University (Famagusta)",
    "country": "Cyprus"
  },
  {
    "instituteName": "MBWAY (Management School from B3 to M2), France",
    "country": "France"
  },
  {
    "instituteName": "ITM (Applied Arts School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "LISAA Province (Applied Arts School) (Strasbourg)",
    "country": "France"
  },
  {
    "instituteName": "CESINE, School of Design & Business (Spain)",
    "country": "France"
  },
  {
    "instituteName": "ICN Business School (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Sup'Biotech (Villejuif)",
    "country": "France"
  },
  {
    "instituteName": "Constructor University (Jacobs University) )Bremen)",
    "country": "Germany"
  },
  {
    "instituteName": "EU Business School (Old Name - European University) (Freiburg)",
    "country": "Germany"
  },
  {
    "instituteName": "Berlin School of Business and Innovation (BSBI) (Berlin)",
    "country": "Germany"
  },
  {
    "instituteName": "IGC International Graduate Center - Hochschule (Bremen)",
    "country": "Germany"
  },
  {
    "instituteName": "Northern Institute of Technology Management (NIT) (Hamburg)",
    "country": "Germany"
  },
  {
    "instituteName": "Bath Spa University (Bath)",
    "country": "UK"
  },
  {
    "instituteName": "EC English (Bristol)",
    "country": "UK"
  },
  {
    "instituteName": "The University of Law",
    "country": "UK"
  },
  {
    "instituteName": "Queen's University (Northern Ireland)",
    "country": "UK"
  },
  {
    "instituteName": "University of Essex (UIEC)",
    "country": "UK"
  },
  {
    "instituteName": "Leeds Trinity University (England)",
    "country": "UK"
  },
  {
    "instituteName": "International College Robert Gordon University - Robert Gordon University (Aberdeen",
    "country": "UK"
  },
  {
    "instituteName": "UA92 Global - University Academy 92 Global (Manchester)",
    "country": "UK"
  },
  {
    "instituteName": "International College of Dundee (ICD) (Dundee)",
    "country": "UK"
  },
  {
    "instituteName": "Solent University (Southampton)",
    "country": "UK"
  },
  {
    "instituteName": "St Mary's University (Twickenham)",
    "country": "UK"
  },
  {
    "instituteName": "University of Aberdeen (Aberdeen)",
    "country": "UK"
  },
  {
    "instituteName": "Teesside University (London)",
    "country": "UK"
  },
  {
    "instituteName": "Ulster University (Belfast)",
    "country": "UK"
  },
  {
    "instituteName": "University of Bristol (Bristol)",
    "country": "UK"
  },
  {
    "instituteName": "University of South Wales (Cardiff)",
    "country": "UK"
  },
  {
    "instituteName": "University of Southampton (Southampton)",
    "country": "UK"
  },
  {
    "instituteName": "University of West London (UWL) (London)",
    "country": "UK"
  },
  {
    "instituteName": "Murdoch University (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "Planeta Formacion Y Universidades - Universitat De Carlemany (UCMA), Andorra",
    "country": "Andorra"
  },
  {
    "instituteName": "University of Nicosia (Nicosia)",
    "country": "Cyprus"
  },
  {
    "instituteName": "Prague Film School (Prague)",
    "country": "Czech Republic"
  },
  {
    "instituteName": "Ecole De Communication Visuelle (ECV), France",
    "country": "France"
  },
  {
    "instituteName": "Digital Campus (Business School) (Strasbourg)",
    "country": "France"
  },
  {
    "instituteName": "ESARC Evolution (Business School) (Nantes)",
    "country": "France"
  },
  {
    "instituteName": "ESARC Evolution (Business School) (Rouen)",
    "country": "France"
  },
  {
    "instituteName": "University of Europe for Applied Sciences",
    "country": "France"
  },
  {
    "instituteName": "ICN Business School (Nancy)",
    "country": "France"
  },
  {
    "instituteName": "KEYCE Business School",
    "country": "France"
  },
  {
    "instituteName": "ESILV, Engineering School). France",
    "country": "France"
  },
  {
    "instituteName": "SUP DE PUB (Communication & Creation School)",
    "country": "France"
  },
  {
    "instituteName": "Paris School of Business (PSB) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "SKEMA Business School (Grand Paris)",
    "country": "France"
  },
  {
    "instituteName": "Sup'Biotech (Paris)",
    "country": "France"
  },
  {
    "instituteName": "IU International University of Applied Sciences (IUBH)",
    "country": "Germany"
  },
  {
    "instituteName": "Karlshochschule International University (Karlsruhe)",
    "country": "Germany"
  },
  {
    "instituteName": "Anglia Ruskin University (London)",
    "country": "UK"
  },
  {
    "instituteName": "Anglia Ruskin University (Writtle)",
    "country": "UK"
  },
  {
    "instituteName": "BIMM University (Essex)",
    "country": "UK"
  },
  {
    "instituteName": "Bournemouth University (Bournemouth)",
    "country": "UK"
  },
  {
    "instituteName": "Coventry University (Coventry)",
    "country": "UK"
  },
  {
    "instituteName": "University of London (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Gloucestershire (Cheltenham)",
    "country": "UK"
  },
  {
    "instituteName": "Istituto Marangoni (London)",
    "country": "UK"
  },
  {
    "instituteName": "JCA-London Fashion Academy (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Roehampton (London)",
    "country": "UK"
  },
  {
    "instituteName": "St Mary's University (London)",
    "country": "UK"
  },
  {
    "instituteName": "Swansea University (Swansea)",
    "country": "UK"
  },
  {
    "instituteName": "London College of Fashion (LCF) (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Dundee (Dundee)",
    "country": "UK"
  },
  {
    "instituteName": "University of Lincoln (Lincoln)",
    "country": "UK"
  },
  {
    "instituteName": "University of Plymouth (Plymouth)",
    "country": "UK"
  },
  {
    "instituteName": "University of South Wales (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of the Arts London (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Abertay",
    "country": "UK"
  },
  {
    "instituteName": "Middlesex University - (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "Ferrieres (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Digital Campus (Business School) (Aix)",
    "country": "France"
  },
  {
    "instituteName": "Digital Campus (Business School) (Lyon)",
    "country": "France"
  },
  {
    "instituteName": "ELIJE (Business School) (Toulouse)",
    "country": "France"
  },
  {
    "instituteName": "Berlin School of Business and Innovation (BSBI) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Institut Superieur D'Electronique De Paris (ISEP) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "NEOMA Business School (Paris)",
    "country": "France"
  },
  {
    "instituteName": "EBS Universitat (Oestrich-Winkel)",
    "country": "Germany"
  },
  {
    "instituteName": "GISMA Business School",
    "country": "Germany"
  },
  {
    "instituteName": "ICN Business School (Berlin)",
    "country": "Germany"
  },
  {
    "instituteName": "Lancaster University - Leipzig College (LULC) (Leipzig)",
    "country": "Germany"
  },
  {
    "instituteName": "Bangor University London)",
    "country": "UK"
  },
  {
    "instituteName": "BIMM University (Birmingham)",
    "country": "UK"
  },
  {
    "instituteName": "London Metropolitan University (London)",
    "country": "UK"
  },
  {
    "instituteName": "English Path (Manchester)",
    "country": "UK"
  },
  {
    "instituteName": "Queen's University (Belfast)",
    "country": "UK"
  },
  {
    "instituteName": "Brighton Intl College at University of Brighton (Brighton)",
    "country": "UK"
  },
  {
    "instituteName": "De Montfort University International College (DMUIC) (Leicester)",
    "country": "UK"
  },
  {
    "instituteName": "Oxford International Digital Institute (OIDI)",
    "country": "UK"
  },
  {
    "instituteName": "University of Greenwich International College (UGIC) (Greenwich)",
    "country": "UK"
  },
  {
    "instituteName": "University of Surrey (Guildford)",
    "country": "UK"
  },
  {
    "instituteName": "Central Saint Martins College (CSM) (London)",
    "country": "UK"
  },
  {
    "instituteName": "Ulster University (Jordanstown)",
    "country": "UK"
  },
  {
    "instituteName": "University of East London (UEL) (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Hertfordshire (Hatfieldf)",
    "country": "UK"
  },
  {
    "instituteName": "University of Hertfordshire  (Hertfordshire)",
    "country": "UK"
  },
  {
    "instituteName": "St. Mary's University",
    "country": "UK"
  },
  {
    "instituteName": "Manipal Education, (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "Rochester Institute of Technology (RIT) (Dubrovnik)",
    "country": "Croatia"
  },
  {
    "instituteName": "Frederick University (Nicosia)",
    "country": "Cyprus"
  },
  {
    "instituteName": "CEG France - OnCampus Kedge Business School (Paris)",
    "country": "France"
  },
  {
    "instituteName": "College De Paris - Top Tech College (Paris)",
    "country": "France"
  },
  {
    "instituteName": "MDS (My Digital School from B1 to M1), France",
    "country": "France"
  },
  {
    "instituteName": "ESSCA School of Management, France",
    "country": "France"
  },
  {
    "instituteName": "Digital Campus (Business School) (Nantes)",
    "country": "France"
  },
  {
    "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Nantes)",
    "country": "France"
  },
  {
    "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Rennes)",
    "country": "France"
  },
  {
    "instituteName": "Groupe IGS (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Groupe IGS (Toulouse)",
    "country": "France"
  },
  {
    "instituteName": "Ipag Business School (Paris)",
    "country": "France"
  },
  {
    "instituteName": "EMLV, Management School), France",
    "country": "France"
  },
  {
    "instituteName": "CREA (Communication & Creation School)",
    "country": "France"
  },
  {
    "instituteName": "Ecole De Guerre Economique (EGE), France",
    "country": "France"
  },
  {
    "instituteName": "Sports Management School (SMS), France",
    "country": "France"
  },
  {
    "instituteName": "EBS Universitet fer Wirtschaft und Recht GmbH (SRH)",
    "country": "Germany"
  },
  {
    "instituteName": "Fresenius University of Applied Sciences (Idstein)",
    "country": "Germany"
  },
  {
    "instituteName": "University of Europe for Applied Sciences",
    "country": "Germany"
  },
  {
    "instituteName": "New European College",
    "country": "Germany"
  },
  {
    "instituteName": "PFH Private University of Applied Sciences (Gettingen)",
    "country": "Germany"
  },
  {
    "instituteName": "Aberystwyth University (Aberystwyth)",
    "country": "UK"
  },
  {
    "instituteName": "European School of Economics (ESE) (London)",
    "country": "UK"
  },
  {
    "instituteName": "Birmingham Intl College at University of Birmingham (Birmingham)",
    "country": "UK"
  },
  {
    "instituteName": "Kings Education",
    "country": "UK"
  },
  {
    "instituteName": "BCUIC - Birmingham City University International College - Birmingham City University (Birmingham)",
    "country": "UK"
  },
  {
    "instituteName": "Teesside University",
    "country": "UK"
  },
  {
    "instituteName": "Chelsea College of Arts (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of South Wales (Newport",
    "country": "UK"
  },
  {
    "instituteName": "University of Sunderland (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Wales Trinity Saint David (Swansea)",
    "country": "UK"
  },
  {
    "instituteName": "Heriot-Watt University",
    "country": "UK"
  },
  {
    "instituteName": "American University of Ras Al Khaimah (AURAK) (UAE)",
    "country": "UAE"
  },
  {
    "instituteName": "Metropolia University of Applied Sciences (Helsinki)",
    "country": "Finland"
  },
  {
    "instituteName": "University of Vaasa (Vaasa)",
    "country": "Finland"
  },
  {
    "instituteName": "Autograf Design School, France",
    "country": "France"
  },
  {
    "instituteName": "CEG France - OnCampus Kedge Business School (Marseille)",
    "country": "France"
  },
  {
    "instituteName": "CY Tech Cergy Paris University",
    "country": "France"
  },
  {
    "instituteName": "ISCOM (Communications and Advertising School from B1 to M2), France",
    "country": "France"
  },
  {
    "instituteName": "Atelier Chardon Savard (Applied Arts School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Strasbourg)",
    "country": "France"
  },
  {
    "instituteName": "LISAA Province (Applied Arts School) (Rennes)",
    "country": "France"
  },
  {
    "instituteName": "PST&B (Business School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Groupe ESC Clermont",
    "country": "France"
  },
  {
    "instituteName": "Institut Superieur De Gestion (ISG)",
    "country": "France"
  },
  {
    "instituteName": "Montpellier Business School",
    "country": "France"
  },
  {
    "instituteName": "SKEMA Business School (Lille and Sophia Antipolis)",
    "country": "France"
  },
  {
    "instituteName": "David Tvildiani Medical University (Tbilisi)",
    "country": "Georgia"
  },
  {
    "instituteName": "Macromedia University of Applied Sciences (Munich)",
    "country": "Germany"
  },
  {
    "instituteName": "Rheinisches Studienkolleg in Bonn",
    "country": "Germany"
  },
  {
    "instituteName": "Schiller Language School, Germany",
    "country": "Germany"
  },
  {
    "instituteName": "Schiller Language School (Berlin)",
    "country": "Germany"
  },
  {
    "instituteName": "Arts University Plymouth (Plymouth)",
    "country": "UK"
  },
  {
    "instituteName": "Arts University Plymouth, (England)",
    "country": "UK"
  },
  {
    "instituteName": "Cardiff Metropolitan University (Cardiff)",
    "country": "UK"
  },
  {
    "instituteName": "University of Hull",
    "country": "UK"
  },
  {
    "instituteName": "EC English (London)",
    "country": "UK"
  },
  {
    "instituteName": "EF International Academy Ltd. (Trading as - EF Academy) (Oxford)",
    "country": "UK"
  },
  {
    "instituteName": "Canterbury Christ Church University",
    "country": "UK"
  },
  {
    "instituteName": "Nottingham Trent Intl College at Nottingham Trent University (Nottingham)",
    "country": "UK"
  },
  {
    "instituteName": "Northumbria University (Newcastle)",
    "country": "UK"
  },
  {
    "instituteName": "Paris Dauphine International, London",
    "country": "UK"
  },
  {
    "instituteName": "The University of Reading (Reading)",
    "country": "UK"
  },
  {
    "instituteName": "Wimbledon College of Arts (London)",
    "country": "UK"
  },
  {
    "instituteName": "Ulster University (Magee)",
    "country": "UK"
  },
  {
    "instituteName": "University of Chester (Chester)",
    "country": "UK"
  },
  {
    "instituteName": "University of Nottingham (Nottingham)",
    "country": "UK"
  },
  {
    "instituteName": "University of Roehampton (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of Wales Trinity Saint David (London)",
    "country": "UK"
  },
  {
    "instituteName": "University of York (York)",
    "country": "UK"
  },
  {
    "instituteName": "University of Ulster",
    "country": "UK"
  },
  {
    "instituteName": "Istituto Marangoni, (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "SP Jain School of Global Management (Dubai)",
    "country": "UAE"
  },
  {
    "instituteName": "Cyprus West University, (North Cyprus)",
    "country": "Cyprus"
  },
  {
    "instituteName": "Arcada University of Applied Sciences",
    "country": "Finland"
  },
  {
    "instituteName": "ESDES Lyon Business School (Lyon)",
    "country": "France"
  },
  {
    "instituteName": "Digital Campus (Business School) (Rennes)",
    "country": "France"
  },
  {
    "instituteName": "ELIJE (Business School) (Lyon)",
    "country": "France"
  },
  {
    "instituteName": "ESARC Evolution (Business School) (Paris)",
    "country": "France"
  },
  {
    "instituteName": "ESARC Evolution (Business School) (Lyon)",
    "country": "France"
  },
  {
    "instituteName": "ICN International College Paris",
    "country": "France"
  },
  {
    "instituteName": "Institut Culinaire De France (Applied Arts School) (Bordeaux)",
    "country": "France"
  },
  {
    "instituteName": "LISAA Province (Applied Arts School) (Bordeaux)",
    "country": "France"
  },
  {
    "instituteName": "CESINE, School of Design & Business (Santander)",
    "country": "France"
  },
  {
    "instituteName": "Montpellier Business School (Montpellier)",
    "country": "France"
  },
  {
    "instituteName": "ESCE (Management School)",
    "country": "France"
  },
  {
    "instituteName": "Toulouse Business School (Paris)",
    "country": "France"
  },
  {
    "instituteName": "Toulouse Business School (Toulouse)",
    "country": "France"
  },
  {
    "instituteName": "Vatel Bordeaux, France Hotel & Tourism Business School (Bordeaux)",
    "country": "France"
  },
  {
    "instituteName": "Ecole Superieure de Design (Troyes)",
    "country": "France"
  },
  {
    "instituteName": "BIMM University (Berlin)",
    "country": "Germany"
  },
  {
    "instituteName": "Berlin School of Business and Innovation (BSBI) (Humburg)",
    "country": "Germany"
  },
  {
    "instituteName": "Rushford Business School (Berlin)",
    "country": "Germany"
  },
  {
    "instituteName": "University of Debrecen  (Debrecen)",
    "country": "Hungary"
  },
  {
    "instituteName": "American University of Malta",
    "country": "Malta"
  },
  {
    "instituteName": "Mediterian University of Valetta",
    "country": "Malta"
  },
  {
    "instituteName": "The Hague Pathway College - The Hague University of Applied Sciences",
    "country": "Netherlands"
  },
  {
    "instituteName": "Berlin School of Business and Innovation (BSBI) (Barcelona)",
    "country": "Spain"
  },
  {
    "instituteName": "HIM Business School (Hotel Institute Montreux) (Montreux)",
    "country": "Switzerland"
  },
  {
    "instituteName": "Amity Global Institute",
    "country": "Singapore"
  },
  {
    "instituteName": "At-Sunrice GlobalChef Academy",
    "country": "Singapore"
  },
  {
    "instituteName": "Nanyang Institute of Management (NIM)",
    "country": "Singapore"
  },
  {
    "instituteName": "NorQuest College",
    "country": "Canada"
  },
  {
    "instituteName": "ULethbridge International College Calgary",
    "country": "Canada"
  },
  {
    "instituteName": "Selkirk College",
    "country": "Canada"
  },
  {
    "instituteName": "Kudan Institute of Japanese Language & Culture (Tokyo)",
    "country": "Japan"
  },
  {
    "instituteName": "University of Wollongong (UOW) (George Town)",
    "country": "Malaysia"
  },
  {
    "instituteName": "La Trobe College to La Trobe University, Melbourne",
    "country": "Australia"
  },
  {
    "instituteName": "James Cook University",
    "country": "Australia"
  },
  {
    "instituteName": "Wellington Institute of Technology (WELTEC) (Wellington)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Victoria University of Wellington (Wellington)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Concordia Saint Paul University",
    "country": "USA"
  },
  {
    "instituteName": "Nichols College",
    "country": "USA"
  },
  {
    "instituteName": "Radford University",
    "country": "USA"
  },
  {
    "instituteName": "Stevens Institute of Technology (SIT)",
    "country": "USA"
  },
  {
    "instituteName": "Cerritos College",
    "country": "USA"
  },
  {
    "instituteName": "Genesee Community College (SUNY)",
    "country": "USA"
  },
  {
    "instituteName": "Mt. San Antonio College",
    "country": "USA"
  },
  {
    "instituteName": "Sacred Heart University",
    "country": "USA"
  },
  {
    "instituteName": "Universität Bayreuth",
    "country": "Germany"
  },
  {
    "instituteName": "Universität Bielefeld",
    "country": "Germany"
  },
  {
    "instituteName": "IBAT College Dublin",
    "country": "Ireland"
  },
  {
    "instituteName": "Bologna Business School (Bologna)",
    "country": "Italy"
  },
  {
    "instituteName": "Planeta Formacion Y Universidades - Rome Business School, S.R.L. (RBS), Italy",
    "country": "Italy"
  },
  {
    "instituteName": "Scuola Politecnica Di Design (Milan)",
    "country": "Italy"
  },
  {
    "instituteName": "Polimi Graduate School of Management (Also known as MIP Politechnico Di Milano) (Milan)",
    "country": "Italy"
  },
  {
    "instituteName": "PSB Academy Pte Ltd",
    "country": "Singapore"
  },
  {
    "instituteName": "William Angliss Institute",
    "country": "Singapore"
  },
  {
    "instituteName": "Sir Wilfrid Laurier School Board",
    "country": "Canada"
  },
  {
    "instituteName": "Bow Valley College",
    "country": "Canada"
  },
  {
    "instituteName": "Conestoga College Institute of Technology and Advanced Learning",
    "country": "Canada"
  },
  {
    "instituteName": "DEA Canadian College",
    "country": "Canada"
  },
  {
    "instituteName": "Justice Institute of British Columbia",
    "country": "Canada"
  },
  {
    "instituteName": "Lakeland College",
    "country": "Canada"
  },
  {
    "instituteName": "Nipissing University",
    "country": "Canada"
  },
  {
    "instituteName": "Fleming College Toronto",
    "country": "Canada"
  },
  {
    "instituteName": "Le Cordon Bleu, Malaysia",
    "country": "Malaysia"
  },
  {
    "instituteName": "New Zealand School of Education (NZSEG) (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Professional Business and Restaurant School (PBRS) (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Ara Institute of Canterbury (Christchurch)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Universal College of Learning (UCOL) (Palmerston North)",
    "country": "New Zealand"
  },
  {
    "instituteName": "The International Travel College of New Zealand (ITC)",
    "country": "New Zealand"
  },
  {
    "instituteName": "New Zealand School of Tourism (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Senior College",
    "country": "New Zealand"
  },
  {
    "instituteName": "Yoobee Colleges (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Marquette University",
    "country": "USA"
  },
  {
    "instituteName": "Seattle Pacific University (SPU)",
    "country": "USA"
  },
  {
    "instituteName": "Texas A&M University Corpus Christi",
    "country": "USA"
  },
  {
    "instituteName": "College of the Canyons",
    "country": "USA"
  },
  {
    "instituteName": "Los Medanos College (CCCCD)",
    "country": "USA"
  },
  {
    "instituteName": "Miami University Ohio Regionals (Middletown & Hamilton)",
    "country": "USA"
  },
  {
    "instituteName": "Eotvos Lorand University (ELTE University) (Budapest)",
    "country": "Hungary"
  },
  {
    "instituteName": "Munster Technological University (Cork)",
    "country": "Ireland"
  },
  {
    "instituteName": "Shannon College of Hotel Management (Clare)",
    "country": "Ireland"
  },
  {
    "instituteName": "Trinity College, (Dublin)",
    "country": "Ireland"
  },
  {
    "instituteName": "University College Dublin (UCD), Ireland, (Territory - UAE) (Dublin)",
    "country": "Ireland"
  },
  {
    "instituteName": "IAAD. Istituto DI Arte Applicata e Design Italy",
    "country": "Italy"
  },
  {
    "instituteName": "IEP Italy",
    "country": "Italy"
  },
  {
    "instituteName": "Saint Louis Music Center - College of Music (Rome)",
    "country": "Italy"
  },
  {
    "instituteName": "ESLSCA Rabat, Morocco",
    "country": "Morocco"
  },
  {
    "instituteName": "IC University of Applied Sciences (Amsterdam)",
    "country": "Netherlands"
  },
  {
    "instituteName": "Tio University of Applied Sciences (TIO Business School), Netherlands",
    "country": "Netherlands"
  },
  {
    "instituteName": "Lazarski University (warsaw)",
    "country": "Poland"
  },
  {
    "instituteName": "Fundacio Universitat Autonoma De Barcelona and UAB Languages (Barcelona)",
    "country": "Spain"
  },
  {
    "instituteName": "EAE Business School (Campus Barcelona Y Madrid), Spain",
    "country": "Spain"
  },
  {
    "instituteName": "Cambrian College",
    "country": "Canada"
  },
  {
    "instituteName": "Capilano University",
    "country": "Canada"
  },
  {
    "instituteName": "Loyalist College",
    "country": "Canada"
  },
  {
    "instituteName": "Olds College of Agriculture and Technology",
    "country": "Canada"
  },
  {
    "instituteName": "Thompson Rivers University",
    "country": "Canada"
  },
  {
    "instituteName": "Aviron Quebec Technical College",
    "country": "Canada"
  },
  {
    "instituteName": "Cegep Marie-Victorin",
    "country": "Canada"
  },
  {
    "instituteName": "University of Victoria",
    "country": "Canada"
  },
  {
    "instituteName": "Alexander College",
    "country": "Canada"
  },
  {
    "instituteName": "University of Tasmania, Melbourne Campus",
    "country": "Australia"
  },
  {
    "instituteName": "Computer Power Plus (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "NZ Fashion Tech (Wellington)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Unitec Institute of Technology (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Elite School of Beauty & Spa",
    "country": "New Zealand"
  },
  {
    "instituteName": "New Zealand International College",
    "country": "New Zealand"
  },
  {
    "instituteName": "American Collegiate Washington DC",
    "country": "USA"
  },
  {
    "instituteName": "Clarks University",
    "country": "USA"
  },
  {
    "instituteName": "Herzing University",
    "country": "USA"
  },
  {
    "instituteName": "West New England University",
    "country": "USA"
  },
  {
    "instituteName": "Thomas College",
    "country": "USA"
  },
  {
    "instituteName": "University of Idaho",
    "country": "USA"
  },
  {
    "instituteName": "University of Vermont",
    "country": "USA"
  },
  {
    "instituteName": "Webster University",
    "country": "USA"
  },
  {
    "instituteName": "Trine University",
    "country": "USA"
  },
  {
    "instituteName": "Budapest Metropolitan University (Budapest)",
    "country": "Hungary"
  },
  {
    "instituteName": "Wekerle Business School (Budapest)",
    "country": "Hungary"
  },
  {
    "instituteName": "SETU",
    "country": "Ireland"
  },
  {
    "instituteName": "Munster Technological University (Kerry)",
    "country": "Ireland"
  },
  {
    "instituteName": "Study Group Ireland ISC University College Dublin (Dublin)",
    "country": "Ireland"
  },
  {
    "instituteName": "Istituto Superiore di Design (Napoli)",
    "country": "Italy"
  },
  {
    "instituteName": "EKA University of Applied Sciences (Riga)",
    "country": "Latvia"
  },
  {
    "instituteName": "EKA University of Applied Sciences, Latvia",
    "country": "Latvia"
  },
  {
    "instituteName": "Institute of Tourism Studies",
    "country": "Malta"
  },
  {
    "instituteName": "Vistula University, Poland",
    "country": "Poland"
  },
  {
    "instituteName": "Algonquin College",
    "country": "Canada"
  },
  {
    "instituteName": "Douglas College",
    "country": "Canada"
  },
  {
    "instituteName": "Humber College",
    "country": "Canada"
  },
  {
    "instituteName": "Kings University College @ University of Western Ontario",
    "country": "Canada"
  },
  {
    "instituteName": "Ontario Tech University",
    "country": "Canada"
  },
  {
    "instituteName": "Columbia College",
    "country": "Canada"
  },
  {
    "instituteName": "Pacific Coast Community College",
    "country": "Canada"
  },
  {
    "instituteName": "North West College",
    "country": "Canada"
  },
  {
    "instituteName": "McKenzie College",
    "country": "Canada"
  },
  {
    "instituteName": "Raffles American School (Iskander)",
    "country": "Malaysia"
  },
  {
    "instituteName": "La Trobe College to La Trobe University Sydney",
    "country": "Australia"
  },
  {
    "instituteName": "Victoria University",
    "country": "Australia"
  },
  {
    "instituteName": "Lincoln University (Christchurch)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Manukau Institute of Technology (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Otago Polytechnic (Dunedin)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Western Institute of Technology (WITT) (New Plymouth)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Whitireia Community Polytech (Wellington)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Norton College",
    "country": "New Zealand"
  },
  {
    "instituteName": "Central Michigan University",
    "country": "USA"
  },
  {
    "instituteName": "Drake University",
    "country": "USA"
  },
  {
    "instituteName": "The Culinary Institute of America",
    "country": "USA"
  },
  {
    "instituteName": "University of Charleston",
    "country": "USA"
  },
  {
    "instituteName": "Academy of Art University",
    "country": "USA"
  },
  {
    "instituteName": "Concordia University St. Paul",
    "country": "USA"
  },
  {
    "instituteName": "Diablo Valley College (CCCCD)",
    "country": "USA"
  },
  {
    "instituteName": "St Patrick's Pontifical University",
    "country": "Ireland"
  },
  {
    "instituteName": "EC English (Dublin)",
    "country": "Ireland"
  },
  {
    "instituteName": "National College of Ireland (NCIRL) (Dublin)",
    "country": "Ireland"
  },
  {
    "instituteName": "European School of Economics (ESE) (Florence)",
    "country": "Italy"
  },
  {
    "instituteName": "International European University",
    "country": "Malta"
  },
  {
    "instituteName": "SMS Rabat, Morocco",
    "country": "Morocco"
  },
  {
    "instituteName": "Coventry University (Wroclaw)",
    "country": "Poland"
  },
  {
    "instituteName": "Olsztyn University",
    "country": "Poland"
  },
  {
    "instituteName": "Romanian American University (Bucharest)",
    "country": "Romania"
  },
  {
    "instituteName": "Linnaeus University (Except India, Bangladesh, Pakistan and China)",
    "country": "Sweden"
  },
  {
    "instituteName": "University of Skovde",
    "country": "Sweden"
  },
  {
    "instituteName": "BHMS - Business & Hotel Management School (Luzern)",
    "country": "Switzerland"
  },
  {
    "instituteName": "EU Business School (Old Name - European University) (Montreux)",
    "country": "Switzerland"
  },
  {
    "instituteName": "Raffles College of Higher Education",
    "country": "Singapore"
  },
  {
    "instituteName": "College of Rockies",
    "country": "Canada"
  },
  {
    "instituteName": "Lakehead University",
    "country": "Canada"
  },
  {
    "instituteName": "Queen's University",
    "country": "Canada"
  },
  {
    "instituteName": "Southern Alberta Institute of Technology (SAIT)",
    "country": "Canada"
  },
  {
    "instituteName": "St. Lawrence College - Alpha College of Business & Technology",
    "country": "Canada"
  },
  {
    "instituteName": "University of Niagara Falls",
    "country": "Canada"
  },
  {
    "instituteName": "University of Northern British Columbia (UNBC)",
    "country": "Canada"
  },
  {
    "instituteName": "Matrix College Of Management Technology And Healthcare",
    "country": "Canada"
  },
  {
    "instituteName": "Mount Saint Vincent University",
    "country": "Canada"
  },
  {
    "instituteName": "University Canada West",
    "country": "Canada"
  },
  {
    "instituteName": "Canadian College",
    "country": "Canada"
  },
  {
    "instituteName": "North Island College",
    "country": "Canada"
  },
  {
    "instituteName": "ATMC (Australian Technical & Management Colleges) - Federation University",
    "country": "Australia"
  },
  {
    "instituteName": "Charles Sturt University Sydney",
    "country": "Australia"
  },
  {
    "instituteName": "University of Canberra International College to University of Canberra",
    "country": "Australia"
  },
  {
    "instituteName": "Curtin University",
    "country": "Australia"
  },
  {
    "instituteName": "Future Skills Academy (Royal Oak)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Le Cordon Bleu, New Zealand",
    "country": "New Zealand"
  },
  {
    "instituteName": "Pacific International Hotel Management School (PIHMS) (New Plymouth)",
    "country": "New Zealand"
  },
  {
    "instituteName": "New Zealand Tertiary College (NZTC) (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Tauranga",
    "country": "New Zealand"
  },
  {
    "instituteName": "Whitecliffe College of Arts & Design (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Capital University",
    "country": "USA"
  },
  {
    "instituteName": "Seattle Colleges - South Seattle College",
    "country": "USA"
  },
  {
    "instituteName": "University Targu Mures Medical (Hamburg)",
    "country": "Germany"
  },
  {
    "instituteName": "Griffith College (Dublin)",
    "country": "Ireland"
  },
  {
    "instituteName": "Accademia Del Lusso (Rome and Milan)",
    "country": "Italy"
  },
  {
    "instituteName": "ADE Italy Schools - Accademia Italiana - Florence and Rome, Italy",
    "country": "Italy"
  },
  {
    "instituteName": "Global College Malta (Smartcity)",
    "country": "Malta"
  },
  {
    "instituteName": "Warsaw University of Humanities",
    "country": "Poland"
  },
  {
    "instituteName": "Universidad Internacional De Valencia (VIU), Spain",
    "country": "Spain"
  },
  {
    "instituteName": "University of Waterloo",
    "country": "Canada"
  },
  {
    "instituteName": "Ascent College Of Technology",
    "country": "Canada"
  },
  {
    "instituteName": "Sheridan College Institute of Technology and Advanced Learning",
    "country": "Canada"
  },
  {
    "instituteName": "Sprott Shaw College",
    "country": "Canada"
  },
  {
    "instituteName": "University of Wollongong (UOW) (Batu Kawan)",
    "country": "Malaysia"
  },
  {
    "instituteName": "Eynesbury College to UNISA or University of",
    "country": "Australia"
  },
  {
    "instituteName": "Swinburne University of Technology",
    "country": "Australia"
  },
  {
    "instituteName": "ATMC (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Computer Power Plus (Wellington)",
    "country": "New Zealand"
  },
  {
    "instituteName": "NZ Fashion Tech (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Eastern Institute of Technology (EIT) (Napier)",
    "country": "New Zealand"
  },
  {
    "instituteName": "University of Auckland (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Worldwide School of English (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "DePaul University",
    "country": "USA"
  },
  {
    "instituteName": "Middle Tennessee State University",
    "country": "USA"
  },
  {
    "instituteName": "University of Mississippi",
    "country": "USA"
  },
  {
    "instituteName": "Cascadia College",
    "country": "USA"
  },
  {
    "instituteName": "Miami University Ohio (Oxford)",
    "country": "USA"
  },
  {
    "instituteName": "New York Institute of Technology (University)",
    "country": "USA"
  },
  {
    "instituteName": "Steinbis University",
    "country": "Germany"
  },
  {
    "instituteName": "Budapest International College (Budapest)",
    "country": "Hungary"
  },
  {
    "instituteName": "Dublin City University (DCU) (Glasnevin)",
    "country": "Ireland"
  },
  {
    "instituteName": "South East Technological University (Formerly Waterford Institute of Technology) (Waterford)",
    "country": "Ireland"
  },
  {
    "instituteName": "European School of Economics (ESE) (Rome)",
    "country": "Italy"
  },
  {
    "instituteName": "Istituto Marangoni (Firenze)",
    "country": "Italy"
  },
  {
    "instituteName": "EIT InnoEnergy Master School, Netherlands",
    "country": "Netherlands"
  },
  {
    "instituteName": "University WSB Merito In Poznan (Pozna? and Chorzew)",
    "country": "Poland"
  },
  {
    "instituteName": "IHMGS - International Hotel Management & Gastronomy School",
    "country": "Spain"
  },
  {
    "instituteName": "Escuela Superior De Diseeo De Barcelona (ESDESIGN), Spain",
    "country": "Spain"
  },
  {
    "instituteName": "Universidad Europea (Spain)",
    "country": "Spain"
  },
  {
    "instituteName": "Universidad Europea De Madrid, Spain (UEM)",
    "country": "Spain"
  },
  {
    "instituteName": "EU Business School (Old Name - European University) (Geneva)",
    "country": "Switzerland"
  },
  {
    "instituteName": "KAPLAN Higher Education Academy",
    "country": "Singapore"
  },
  {
    "instituteName": "Saskatchewan Polytechnic",
    "country": "Canada"
  },
  {
    "instituteName": "Seneca College",
    "country": "Canada"
  },
  {
    "instituteName": "Cambrian @ Hanson",
    "country": "Canada"
  },
  {
    "instituteName": "Georgian College of Applied Arts and Technology",
    "country": "Canada"
  },
  {
    "instituteName": "Wilfrid Laurier International College",
    "country": "Canada"
  },
  {
    "instituteName": "Heriot Watt University (Putrajaya)",
    "country": "Malaysia"
  },
  {
    "instituteName": "Charles Darwin University",
    "country": "Australia"
  },
  {
    "instituteName": "Auckland University of Technology (AUT University) (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Otago Polytechnic (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "The University of Otago (Dunedin)",
    "country": "New Zealand"
  },
  {
    "instituteName": "UP Education (previously ACG Education)",
    "country": "New Zealand"
  },
  {
    "instituteName": "University of Missouri-St. Louis",
    "country": "USA"
  },
  {
    "instituteName": "University of Nebraska",
    "country": "USA"
  },
  {
    "instituteName": "Southwest Minnesotta State University",
    "country": "USA"
  },
  {
    "instituteName": "Berlin International University of Applied Sciences",
    "country": "Germany"
  },
  {
    "instituteName": "Dublin Business School (DBS) (Dublin)",
    "country": "Ireland"
  },
  {
    "instituteName": "University of Galway (Formely National University of Ireland, Galway)  (Galway)",
    "country": "Ireland"
  },
  {
    "instituteName": "New York Film Academy (NYFA), Italy",
    "country": "Italy"
  },
  {
    "instituteName": "GBS (Global Business Studies)",
    "country": "Malta"
  },
  {
    "instituteName": "CEG Netherlands (Amsterdam)",
    "country": "Netherlands"
  },
  {
    "instituteName": "Linnaeus University   (Only India) (Vaxjo and Kalmar)",
    "country": "Sweden"
  },
  {
    "instituteName": "Adler University",
    "country": "Canada"
  },
  {
    "instituteName": "International College of Manitoba (ICM) to University of Manitoba",
    "country": "Canada"
  },
  {
    "instituteName": "Sheridan College",
    "country": "Canada"
  },
  {
    "instituteName": "Fleming College, Toronto",
    "country": "Canada"
  },
  {
    "instituteName": "University of New Brunswick",
    "country": "Canada"
  },
  {
    "instituteName": "Fraser International College",
    "country": "Canada"
  },
  {
    "instituteName": "International College of Manitoba",
    "country": "Canada"
  },
  {
    "instituteName": "Trebas Institute",
    "country": "Canada"
  },
  {
    "instituteName": "Southern Cross University",
    "country": "Australia"
  },
  {
    "instituteName": "Computer Power Plus (Christchurch)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Yoobee Colleges (Christchurch)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Marconi International University",
    "country": "USA"
  },
  {
    "instituteName": "Kent State University",
    "country": "USA"
  },
  {
    "instituteName": "Purdue University Northwes",
    "country": "USA"
  },
  {
    "instituteName": "ADE Italy Schools - Accademia Italiana - (Florence and Rome)",
    "country": "Italy"
  },
  {
    "instituteName": "European School of Economics (ESE) (Milan)",
    "country": "Italy"
  },
  {
    "instituteName": "Istituto Marangoni (Milano)",
    "country": "Italy"
  },
  {
    "instituteName": "Link Campus University (Rome)",
    "country": "Italy"
  },
  {
    "instituteName": "Rome University of Fine Arts (Rome)",
    "country": "Italy"
  },
  {
    "instituteName": "Ascencia Malta",
    "country": "Malta"
  },
  {
    "instituteName": "EC English, Malta",
    "country": "Malta"
  },
  {
    "instituteName": "IDEA Academy, Malta",
    "country": "Malta"
  },
  {
    "instituteName": "MCAST General Courses",
    "country": "Malta"
  },
  {
    "instituteName": "TPC - Twente Pathway College University of Twente",
    "country": "Netherlands"
  },
  {
    "instituteName": "Campus Spain (Vigo)",
    "country": "Spain"
  },
  {
    "instituteName": "Three Points, Spain",
    "country": "Spain"
  },
  {
    "instituteName": "Universidad Europea De Valencia, Spain (UEV)",
    "country": "Spain"
  },
  {
    "instituteName": "Culinary Arts Academy",
    "country": "Switzerland"
  },
  {
    "instituteName": "Toronto Metropolitan University International College (Formerly, Ryerson University International College) to Toronto Metropolitan University",
    "country": "Canada"
  },
  {
    "instituteName": "Suncrest College",
    "country": "Canada"
  },
  {
    "instituteName": "University of Manitoba",
    "country": "Canada"
  },
  {
    "instituteName": "Wilfrid Laurier International College to Wilfrid Laurier University",
    "country": "Canada"
  },
  {
    "instituteName": "University of Regina",
    "country": "Canada"
  },
  {
    "instituteName": "University of the Fraser Valley",
    "country": "Canada"
  },
  {
    "instituteName": "Toronto Metropolitan University International College",
    "country": "Canada"
  },
  {
    "instituteName": "Great Plains College",
    "country": "Canada"
  },
  {
    "instituteName": "St. Thomas University",
    "country": "Canada"
  },
  {
    "instituteName": "University of Windsor",
    "country": "Canada"
  },
  {
    "instituteName": "Future Skills Academy (Takapuna)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Toi Ohomai",
    "country": "New Zealand"
  },
  {
    "instituteName": "Southern Institute of Technology (SIT) (Invercargill)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Concordia University",
    "country": "USA"
  },
  {
    "instituteName": "Johnson and Wales University",
    "country": "USA"
  },
  {
    "instituteName": "Paul Smith’s College",
    "country": "USA"
  },
  {
    "instituteName": "SRH Hochschule Heidelberg GmbH",
    "country": "Germany"
  },
  {
    "instituteName": "Holmes Institute Dublin",
    "country": "Ireland"
  },
  {
    "instituteName": "Munster Technological University",
    "country": "Ireland"
  },
  {
    "instituteName": "Dublin City University (DCU) (Dublin)",
    "country": "Ireland"
  },
  {
    "instituteName": "Technological University Dublin (TU Dublin - TUD) (Old name: Dublin Inst. of Tech. (DIT)) (Dublin)",
    "country": "Ireland"
  },
  {
    "instituteName": "Domus Academy, Italy",
    "country": "Italy"
  },
  {
    "instituteName": "Ferrari Fashion School (Milan)",
    "country": "Italy"
  },
  {
    "instituteName": "Wittenborg University of Applied Sciences, Netherlands",
    "country": "Netherlands"
  },
  {
    "instituteName": "Uniba Centro Universitario Internacional De Barcelona, Spain",
    "country": "Spain"
  },
  {
    "instituteName": "British Columbia Institute of Technology (BCIT)",
    "country": "Canada"
  },
  {
    "instituteName": "Cape Breton University (CBU)",
    "country": "Canada"
  },
  {
    "instituteName": "University of Alberta",
    "country": "Canada"
  },
  {
    "instituteName": "University of Northern British Columbia",
    "country": "Canada"
  },
  {
    "instituteName": "Niagara College Toronto",
    "country": "Canada"
  },
  {
    "instituteName": "Vancouver Community College",
    "country": "Canada"
  },
  {
    "instituteName": "Edith Cowan College to Edith Cowan University",
    "country": "Australia"
  },
  {
    "instituteName": "IPU New Zealand Tertiary Institute (Palmerston North)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Massey University (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "The University of Waikato (Hamilton)",
    "country": "New Zealand"
  },
  {
    "instituteName": "New Zealand Institute of Sport (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Duke University",
    "country": "USA"
  },
  {
    "instituteName": "Endicott College",
    "country": "USA"
  },
  {
    "instituteName": "European School of Management and Technology",
    "country": "Germany"
  },
  {
    "instituteName": "Universität Erfurt",
    "country": "Germany"
  },
  {
    "instituteName": "Universität Stuttgart",
    "country": "Germany"
  },
  {
    "instituteName": "SRH Hochschule Nordrhein-Westfalen GmbH",
    "country": "Germany"
  },
  {
    "instituteName": "Dundalk Institute of Technology (DkIT)",
    "country": "Ireland"
  },
  {
    "instituteName": "Galway Business School (Galway)",
    "country": "Ireland"
  },
  {
    "instituteName": "University of Limerick (Limerick)",
    "country": "Ireland"
  },
  {
    "instituteName": "IAAD. Istituto DI Arte Applicata e Design - (Turin & Bologna)",
    "country": "Italy"
  },
  {
    "instituteName": "International Institute by Malta",
    "country": "Malta"
  },
  {
    "instituteName": "London School of Commerce, Malta",
    "country": "Malta"
  },
  {
    "instituteName": "ISCTE Executive Education (Lisboa)",
    "country": "Portugal"
  },
  {
    "instituteName": "OBS Business School, Spain",
    "country": "Spain"
  },
  {
    "instituteName": "The Ostelea, School of Tourism & Hospitality (Ostelea Campus Barcelona Y Madrid), Spain Spain",
    "country": "Spain"
  },
  {
    "instituteName": "Jenkeping University (Jenkeping)",
    "country": "Sweden"
  },
  {
    "instituteName": "Dalarna University",
    "country": "Sweden"
  },
  {
    "instituteName": "Management Development Institute of Singapore (MDIS)",
    "country": "Singapore"
  },
  {
    "instituteName": "Conestoga College",
    "country": "Canada"
  },
  {
    "instituteName": "Kwantlen Polytechnic University",
    "country": "Canada"
  },
  {
    "instituteName": "Trent University",
    "country": "Canada"
  },
  {
    "instituteName": "University of Guelph",
    "country": "Canada"
  },
  {
    "instituteName": "New York Institute of Technology - Vancouver",
    "country": "Canada"
  },
  {
    "instituteName": "St. Francis Xavier University",
    "country": "Canada"
  },
  {
    "instituteName": "Vancouver Film School",
    "country": "Canada"
  },
  {
    "instituteName": "University of Niagara Falls Canada",
    "country": "Canada"
  },
  {
    "instituteName": "Acadia University",
    "country": "Canada"
  },
  {
    "instituteName": "Northern Lights College",
    "country": "Canada"
  },
  {
    "instituteName": "Vancouver Island University",
    "country": "Canada"
  },
  {
    "instituteName": "Le Cordon Bleu (Tokyo)",
    "country": "Japan"
  },
  {
    "instituteName": "University of Sunshine Coast",
    "country": "Australia"
  },
  {
    "instituteName": "Te Pukenga (NZIST) - North Tec",
    "country": "New Zealand"
  },
  {
    "instituteName": "Florida Atlantic University",
    "country": "USA"
  },
  {
    "instituteName": "Edgewood College",
    "country": "USA"
  },
  {
    "instituteName": "University of St. Thomas",
    "country": "USA"
  },
  {
    "instituteName": "Virginia Wesleyan University",
    "country": "USA"
  },
  {
    "instituteName": "City University of Seattle",
    "country": "USA"
  },
  {
    "instituteName": "Gannon University",
    "country": "USA"
  },
  {
    "instituteName": "International Psychoanalytic University",
    "country": "Germany"
  },
  {
    "instituteName": "Steinbeis University School of Management and Innovation",
    "country": "Germany"
  },
  {
    "instituteName": "CCT College (Dublin)",
    "country": "Ireland"
  },
  {
    "instituteName": "Dundalk Institute of Technology (DkIT) (Dundalk)",
    "country": "Ireland"
  },
  {
    "instituteName": "Griffith College (Cork)",
    "country": "Ireland"
  },
  {
    "instituteName": "English Domain, Malta",
    "country": "Malta"
  },
  {
    "instituteName": "Global Education (GEDU) - English Path, Malta",
    "country": "Malta"
  },
  {
    "instituteName": "Kozminski University (Warsaw)",
    "country": "Poland"
  },
  {
    "instituteName": "Warsaw University of Economics (Warsaw)",
    "country": "Poland"
  },
  {
    "instituteName": "Ascencia",
    "country": "Spain"
  },
  {
    "instituteName": "European School of Economics (ESE) (Madrid)",
    "country": "Spain"
  },
  {
    "instituteName": "IFP Innovacien En Formacien Profesional (IFP), Spain",
    "country": "Spain"
  },
  {
    "instituteName": "BHMS - Business & Hotel Management School (Switz)",
    "country": "Switzerland"
  },
  {
    "instituteName": "Swiss Hotel Management School (SHMS)",
    "country": "Switzerland"
  },
  {
    "instituteName": "Amity Global Business School",
    "country": "Singapore"
  },
  {
    "instituteName": "George Brown College",
    "country": "Canada"
  },
  {
    "instituteName": "Mount Allison University",
    "country": "Canada"
  },
  {
    "instituteName": "Academy of Learning Career College, Scarborough",
    "country": "Canada"
  },
  {
    "instituteName": "Pacific Link College",
    "country": "Canada"
  },
  {
    "instituteName": "St. Lawrence College",
    "country": "Canada"
  },
  {
    "instituteName": "Coquitlam College",
    "country": "Canada"
  },
  {
    "instituteName": "Trinity Western University",
    "country": "Canada"
  },
  {
    "instituteName": "Raffles Design Institute (Jakarta)",
    "country": "Indonesia"
  },
  {
    "instituteName": "Raffles University (Iskandar Puteri)",
    "country": "Malaysia"
  },
  {
    "instituteName": "SAIBT (South Australian Institute of Business and Technology) to UNISA (University of South Australia)",
    "country": "Australia"
  },
  {
    "instituteName": "Western Sydney University International College to Western Sydney University",
    "country": "Australia"
  },
  {
    "instituteName": "University of Tasmania",
    "country": "Australia"
  },
  {
    "instituteName": "Massey University (Palmerston North)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Waikato Institute of Technology (WINTEC) (Hamilton)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Cut Above Academy",
    "country": "New Zealand"
  },
  {
    "instituteName": "New Zealand Institute of Sport (Wellington)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Duquesne University",
    "country": "USA"
  },
  {
    "instituteName": "Florida Polytechnic University",
    "country": "USA"
  },
  {
    "instituteName": "University of Massachusetts Boston",
    "country": "USA"
  },
  {
    "instituteName": "Hult International Business School",
    "country": "USA"
  },
  {
    "instituteName": "State University of New York - Plattsburgh",
    "country": "USA"
  },
  {
    "instituteName": "Bucerius Law School",
    "country": "Germany"
  },
  {
    "instituteName": "ACT-The American College of Thessaloniki (Thessaloniki)",
    "country": "Greece"
  },
  {
    "instituteName": "Budapest Business University (Formerly Budapest Business School) (Budapest)",
    "country": "Hungary"
  },
  {
    "instituteName": "Maynooth University",
    "country": "Ireland"
  },
  {
    "instituteName": "Technological University of the Shannon (TUS): (Midlands Midwest)",
    "country": "Ireland"
  },
  {
    "instituteName": "Malita International College",
    "country": "Malta"
  },
  {
    "instituteName": "University of Technology and Arts (Warsaw)",
    "country": "Poland"
  },
  {
    "instituteName": "Warsaw University of Business",
    "country": "Poland"
  },
  {
    "instituteName": "CEDEU - Centro de Estudios Universitarios",
    "country": "Spain"
  },
  {
    "instituteName": "EU Business School (Old Name - European University) (Barcelona)",
    "country": "Spain"
  },
  {
    "instituteName": "Marbella International University Centre (MIUC) (Malaga)",
    "country": "Spain"
  },
  {
    "instituteName": "Toulouse Business School (Barcelona)",
    "country": "Spain"
  },
  {
    "instituteName": "University West, (Trollhettan)",
    "country": "Sweden"
  },
  {
    "instituteName": "James Cook University (JCU)",
    "country": "Singapore"
  },
  {
    "instituteName": "Acsenda College",
    "country": "Canada"
  },
  {
    "instituteName": "Durham College",
    "country": "Canada"
  },
  {
    "instituteName": "Cegep de la Gaspesie et des Iles",
    "country": "Canada"
  },
  {
    "instituteName": "Kwantlen Polytechnic Universit",
    "country": "Canada"
  },
  {
    "instituteName": "LaSalle College",
    "country": "Canada"
  },
  {
    "instituteName": "Niagara College",
    "country": "Canada"
  },
  {
    "instituteName": "Future Skills Academy (Manukau)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Massey University (Wellington)",
    "country": "New Zealand"
  },
  {
    "instituteName": "University of Canterbury (Christchurch)",
    "country": "New Zealand"
  },
  {
    "instituteName": "New Zealand Management Academies",
    "country": "New Zealand"
  },
  {
    "instituteName": "Auburn University at Montgomery",
    "country": "USA"
  },
  {
    "instituteName": "Hilbert College",
    "country": "USA"
  },
  {
    "instituteName": "California Lutheran University",
    "country": "USA"
  },
  {
    "instituteName": "Seattle Colleges - North Seattle College",
    "country": "USA"
  },
  {
    "instituteName": "Southern Illinois University - Carbondale",
    "country": "USA"
  },
  {
    "instituteName": "John von Neumann University",
    "country": "Hungary"
  },
  {
    "instituteName": "Atlantic Technological University (ATU)",
    "country": "Ireland"
  },
  {
    "instituteName": "Bologna Business School, Italy",
    "country": "Italy"
  },
  {
    "instituteName": "NABA (Nuova Accademia di Belle Arti), Italy",
    "country": "Italy"
  },
  {
    "instituteName": "SAE Institute (Milan)",
    "country": "Italy"
  },
  {
    "instituteName": "SAE Institute - Milan, Italy",
    "country": "Italy"
  },
  {
    "instituteName": "European College of Innovation, Malta",
    "country": "Malta"
  },
  {
    "instituteName": "Learnkey Training Institute (Birkirkara)",
    "country": "Malta"
  },
  {
    "instituteName": "University of Malta",
    "country": "Malta"
  },
  {
    "instituteName": "Ostelea Rabat, Morocco",
    "country": "Morocco"
  },
  {
    "instituteName": "SRH Haarlem University of Applied Sciences (Formerly Haarlem Campus, Institute for Higher Education) ( Amsterdam)",
    "country": "Netherlands"
  },
  {
    "instituteName": "Wroclaw Business University of Applied Sciences",
    "country": "Poland"
  },
  {
    "instituteName": "Universidad Europea De Canarias, Spain (UEC)",
    "country": "Spain"
  },
  {
    "instituteName": "Rushford Business School (Lucerne)",
    "country": "Switzerland"
  },
  {
    "instituteName": "Curtin University",
    "country": "Singapore"
  },
  {
    "instituteName": "SP Jain School of Global Management",
    "country": "Singapore"
  },
  {
    "instituteName": "Insignia College",
    "country": "Canada"
  },
  {
    "instituteName": "The King's University",
    "country": "Canada"
  },
  {
    "instituteName": "Northeastern University",
    "country": "Canada"
  },
  {
    "instituteName": "University of Lethbridge",
    "country": "Canada"
  },
  {
    "instituteName": "Crandall University",
    "country": "Canada"
  },
  {
    "instituteName": "Loyalist College of Applied Arts and Technology",
    "country": "Canada"
  },
  {
    "instituteName": "SIBT (Sydney Institute of Business and Technology) to Western Sydney University",
    "country": "Australia"
  },
  {
    "instituteName": "University of Sydney",
    "country": "Australia"
  },
  {
    "instituteName": "New Zealand Institute of Skills and Technology (NZIST)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Whitireia Community Polytech (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "New Zealand Institute of Sport (Manukau)",
    "country": "New Zealand"
  },
  {
    "instituteName": "New Zealand Institute of Sport (Christchurch)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Strathallan",
    "country": "New Zealand"
  },
  {
    "instituteName": "University of Otago (Pathway and Language Centre)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Montana State University Billings(MSUB)",
    "country": "USA"
  },
  {
    "instituteName": "UMBC (University of Maryland Baltimore County)",
    "country": "USA"
  },
  {
    "instituteName": "Troy University",
    "country": "USA"
  },
  {
    "instituteName": "HKA - Karlsruhe University of Applied Sciences",
    "country": "Germany"
  },
  {
    "instituteName": "Universität Greifswald",
    "country": "Germany"
  },
  {
    "instituteName": "Touro College Berlin",
    "country": "Germany"
  },
  {
    "instituteName": "BIMM University, Ireland (Dublin)",
    "country": "Ireland"
  },
  {
    "instituteName": "Dublin City University",
    "country": "Ireland"
  },
  {
    "instituteName": "English Path (Dublin )",
    "country": "Ireland"
  },
  {
    "instituteName": "Griffith College (Limerick)",
    "country": "Ireland"
  },
  {
    "instituteName": "Raffles Milano (Milano)",
    "country": "Italy"
  },
  {
    "instituteName": "The American University of Rome, (Rome)",
    "country": "Italy"
  },
  {
    "instituteName": "University of Economics and Human Sciences in Warsaw",
    "country": "Poland"
  },
  {
    "instituteName": "ENAE International Business School (Murcia)",
    "country": "Spain"
  },
  {
    "instituteName": "Marbella International University Centre (MIUC) (Marbella)",
    "country": "Spain"
  },
  {
    "instituteName": "EF International Academy Ltd., Switzerland (Zurich)",
    "country": "Switzerland"
  },
  {
    "instituteName": "Cesar Ritz Colleges (Brig)",
    "country": "Switzerland"
  },
  {
    "instituteName": "Fanshawe College",
    "country": "Canada"
  },
  {
    "instituteName": "Toronto Metropolitan University (Formerly; Ryerson University)",
    "country": "Canada"
  },
  {
    "instituteName": "University of Prince Edward Island",
    "country": "Canada"
  },
  {
    "instituteName": "Deakin College to Deakin University",
    "country": "Australia"
  },
  {
    "instituteName": "Queensland University of Technology",
    "country": "Australia"
  },
  {
    "instituteName": "Auckland Institute of Studies (AIS) (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Future Skills Academy (Auckland)",
    "country": "New Zealand"
  },
  {
    "instituteName": "UCIC at University of Canterbury (Christchurch)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Nelson Marlborough Institute of Technology (NMIT) (Blenheim)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Parnell College",
    "country": "New Zealand"
  },
  {
    "instituteName": "University of Massachusetts",
    "country": "USA"
  },
  {
    "instituteName": "Atlantis University",
    "country": "USA"
  },
  {
    "instituteName": "Community College of Spokane",
    "country": "USA"
  },
  {
    "instituteName": "Hillsboro Aero Academy",
    "country": "USA"
  },
  {
    "instituteName": "Lipscomb University",
    "country": "USA"
  },
  {
    "instituteName": "Lynn University",
    "country": "USA"
  },
  {
    "instituteName": "Fulton-Montgomery Community College - SUNY",
    "country": "USA"
  },
  {
    "instituteName": "New York Film Academy",
    "country": "USA"
  },
  {
    "instituteName": "Texas State University",
    "country": "USA"
  },
  {
    "instituteName": "Texas Wesleyan University",
    "country": "USA"
  },
  {
    "instituteName": "University of Mannheim",
    "country": "Germany"
  },
  {
    "instituteName": "SRH University",
    "country": "Germany"
  },
  {
    "instituteName": "SRH Wilhelm Lehe Hochschule GmbH",
    "country": "Germany"
  },
  {
    "instituteName": "Touro University Berlin (Berlin)",
    "country": "Germany"
  },
  {
    "instituteName": "John von Neumann University (Izseki et 10)",
    "country": "Hungary"
  },
  {
    "instituteName": "Galway Cultural Institute (Galway)",
    "country": "Ireland"
  },
  {
    "instituteName": "MCAST Bespoke",
    "country": "Malta"
  },
  {
    "instituteName": "Middlesex University - Mauritius",
    "country": "Mauritius"
  },
  {
    "instituteName": "EGE Rabat, Morocco",
    "country": "Morocco"
  },
  {
    "instituteName": "Sports Management School (SMS Barcelona), Spain",
    "country": "Spain"
  },
  {
    "instituteName": "SBS Swiss Business School Barcelona (Barcelona)",
    "country": "Spain"
  },
  {
    "instituteName": "Universidad Catolica San Antonio De Murcia (UCAM) (Murcia)",
    "country": "Spain"
  },
  {
    "instituteName": "Halmstad University",
    "country": "Sweden"
  },
  {
    "instituteName": "EF International Academy Ltd., Switzerland",
    "country": "Switzerland"
  },
  {
    "instituteName": "Brock University",
    "country": "Canada"
  },
  {
    "instituteName": "Cape Breton University",
    "country": "Canada"
  },
  {
    "instituteName": "St. Clair College of Applied Arts and Technology",
    "country": "Canada"
  },
  {
    "instituteName": "Braemar College",
    "country": "Canada"
  },
  {
    "instituteName": "Raffles College of Higher Education (Kuala Lumpur)",
    "country": "Malaysia"
  },
  {
    "instituteName": "University of Nottingham",
    "country": "Malaysia"
  },
  {
    "instituteName": "University of Wollongong (UOW) (Glenmarie)",
    "country": "Malaysia"
  },
  {
    "instituteName": "Bond University",
    "country": "Australia"
  },
  {
    "instituteName": "Griffith College to Griffith University",
    "country": "Australia"
  },
  {
    "instituteName": "Flinders University",
    "country": "Australia"
  },
  {
    "instituteName": "Crown Institute of Studies",
    "country": "New Zealand"
  },
  {
    "instituteName": "Eastern Institute of Technology (EIT) (Hawkes Bay)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Universal College of Learning (UCOL) (Wanganui)",
    "country": "New Zealand"
  },
  {
    "instituteName": "Sunderland",
    "country": "New Zealand"
  },
  {
    "instituteName": "The Culinary Collective",
    "country": "New Zealand"
  },
  {
    "instituteName": "Alvernia University",
    "country": "USA"
  },
  {
    "instituteName": "American Collegiate Los Angeles",
    "country": "USA"
  },
  {
    "instituteName": "North Park University",
    "country": "USA"
  },
  {
    "instituteName": "Clarkson University",
    "country": "USA"
  },
  {
    "instituteName": "Contra Costa College (CCCCD)",
    "country": "USA"
  },
  {
    "instituteName": "Seattle Colleges - Seattle Central College",
    "country": "USA"
  },
  {
    "instituteName": "University of North Carolina at Greensboro",
    "country": "USA"
  },
  {
    "instituteName": "Long Island University Brooklyn",
    "country": "USA"
  },
  {
    "instituteName": "Long Island University Post",
    "country": "USA"
  },
  {
    "instituteName": "Suffolk University",
    "country": "USA"
  },
  {
    "instituteName": "University of Illinois at Springfield",
    "country": "USA"
  },
  {
    "instituteName": "University of Utah",
    "country": "USA"
  },
  {
    "instituteName": "Irvine Valley College",
    "country": "USA"
  },
  {
    "instituteName": "Marshall University",
    "country": "USA"
  },
  {
    "instituteName": "Thomas Jefferson University",
    "country": "USA"
  },
  {
    "instituteName": "American University",
    "country": "USA"
  },
  {
    "instituteName": "Auburn University",
    "country": "USA"
  },
  {
    "instituteName": "Western Washington University",
    "country": "USA"
  },
  {
    "instituteName": "Hartwick College",
    "country": "USA"
  },
  {
    "instituteName": "Monroe College",
    "country": "USA"
  },
  {
    "instituteName": "American National University",
    "country": "USA"
  },
  {
    "instituteName": "Oregon State University",
    "country": "USA"
  },
  {
    "instituteName": "Adelphi University",
    "country": "USA"
  },
  {
    "instituteName": "COE College",
    "country": "USA"
  },
  {
    "instituteName": "Keck Graduate Institute",
    "country": "USA"
  },
  {
    "instituteName": "San Mateo Colleges of Silicon valley",
    "country": "USA"
  },
  {
    "instituteName": "University of California, Irvine - Division of Continuing Education",
    "country": "USA"
  },
  {
    "instituteName": "University of La Verne",
    "country": "USA"
  },
  {
    "instituteName": "Westcliff University",
    "country": "USA"
  },
  {
    "instituteName": "George Mason University",
    "country": "USA"
  },
  {
    "instituteName": "Western New England University",
    "country": "USA"
  },
  {
    "instituteName": "James Madison University",
    "country": "USA"
  },
  {
    "instituteName": "Pacific Lutheran University",
    "country": "USA"
  },
  {
    "instituteName": "Pacific States University",
    "country": "USA"
  },
  {
    "instituteName": "Cleveland State University",
    "country": "USA"
  },
  {
    "instituteName": "Texas A&M Corpus Christi",
    "country": "USA"
  },
  {
    "instituteName": "University of North Carolina Wilmington",
    "country": "USA"
  },
  {
    "instituteName": "Wichita State University",
    "country": "USA"
  },
  {
    "instituteName": "Drew University",
    "country": "USA"
  },
  {
    "instituteName": "University of Massachusetts, Boston",
    "country": "USA"
  },
  {
    "instituteName": "University of Hartford",
    "country": "USA"
  },
  {
    "instituteName": "American International College",
    "country": "USA"
  },
  {
    "instituteName": "University of West Alabama",
    "country": "USA"
  },
  {
    "instituteName": "Colorado State University",
    "country": "USA"
  },
  {
    "instituteName": "Fisher College",
    "country": "USA"
  },
  {
    "instituteName": "Illinois State University",
    "country": "USA"
  },
  {
    "instituteName": "Tulane University",
    "country": "USA"
  },
  {
    "instituteName": "University of California, Los Angeles (UCLA)",
    "country": "USA"
  },
  {
    "instituteName": "Greensboro College",
    "country": "USA"
  },
  {
    "instituteName": "Washington State University",
    "country": "USA"
  },
  {
    "instituteName": "Pace University",
    "country": "USA"
  },
  {
    "instituteName": "UMass Boston",
    "country": "USA"
  },
  {
    "instituteName": "Baylor University",
    "country": "USA"
  },
  {
    "instituteName": "Shoreline Community College",
    "country": "USA"
  },
  {
    "instituteName": "Westminster College",
    "country": "USA"
  },
  {
    "instituteName": "Graceland University",
    "country": "USA"
  },
  {
    "instituteName": "Concordia University Chicago",
    "country": "USA"
  },
  {
    "instituteName": "New England College",
    "country": "USA"
  },
  {
    "instituteName": "Florida International University",
    "country": "USA"
  },
  {
    "instituteName": "Missouri University of Science and Technology",
    "country": "USA"
  },
  {
    "instituteName": "University of Massachusetts, Amherst",
    "country": "USA"
  },
  {
    "instituteName": "College of San Mateo",
    "country": "USA"
  },
  {
    "instituteName": "East Tennessee State University",
    "country": "USA"
  },
  {
    "instituteName": "Hanover College",
    "country": "USA"
  },
  {
    "instituteName": "Mentora College",
    "country": "USA"
  },
  {
    "instituteName": "Mount Saint Mary's University",
    "country": "USA"
  },
  {
    "instituteName": "Colorado Mesa University",
    "country": "USA"
  },
  {
    "instituteName": "Richard Bland College Of William & Mary",
    "country": "USA"
  },
  {
    "instituteName": "University of Illinois at Chicago",
    "country": "USA"
  },
  {
    "instituteName": "University of Kansas",
    "country": "USA"
  },
  {
    "instituteName": "University of Wyoming",
    "country": "USA"
  },
  {
    "instituteName": "Piedmont Virginia Community College",
    "country": "USA"
  },
  {
    "instituteName": "Montana State University Billings",
    "country": "USA"
  },
  {
    "instituteName": "Arizona State University",
    "country": "USA"
  },
  {
    "instituteName": "Queens College",
    "country": "USA"
  },
  {
    "instituteName": "University of the Pacific",
    "country": "USA"
  },
  {
    "instituteName": "California State University - San Marcos",
    "country": "USA"
  },
  {
    "instituteName": "Fox Valley Technical college",
    "country": "USA"
  },
  {
    "instituteName": "Whitworth University",
    "country": "USA"
  },
  {
    "instituteName": "University of South Carolina",
    "country": "USA"
  },
  {
    "instituteName": "Long Island University",
    "country": "USA"
  },
  {
    "instituteName": "Towson University",
    "country": "USA"
  },
  {
    "instituteName": "Bay Atlantic University",
    "country": "USA"
  },
  {
    "instituteName": "Hawaii Pacific University",
    "country": "USA"
  },
  {
    "instituteName": "University at Albany (SUNY)",
    "country": "USA"
  },
  {
    "instituteName": "Xavier University",
    "country": "USA"
  },
  {
    "instituteName": "Avila University",
    "country": "USA"
  },
  {
    "instituteName": "Mercy University",
    "country": "USA"
  },
  {
    "instituteName": "San Francisco State University",
    "country": "USA"
  },
  {
    "instituteName": "Gonzaga University",
    "country": "USA"
  },
  {
    "instituteName": "Louisiana State University",
    "country": "USA"
  },
  {
    "instituteName": "University of Nevada, Reno",
    "country": "USA"
  },
  {
    "instituteName": "Hofstra University",
    "country": "USA"
  },
  {
    "instituteName": "University of Alabama, Birmingham",
    "country": "USA"
  },
  {
    "instituteName": "Simmons University",
    "country": "USA"
  },
  {
    "instituteName": "University of Dayton",
    "country": "USA"
  },
  {
    "instituteName": "Community College of Philadelphia",
    "country": "USA"
  },
  {
    "instituteName": "University of Colorado Denver",
    "country": "USA"
  },
  {
    "instituteName": "University of North Texas",
    "country": "USA"
  },
  {
    "instituteName": "Montclair State University",
    "country": "USA"
  },
  {
    "instituteName": "University of Nebraska at Omaha",
    "country": "USA"
  },
  {
    "instituteName": "Valencia College",
    "country": "USA"
  },
  {
    "instituteName": "Webster",
    "country": "USA"
  },
  {
    "instituteName": "Glasgow Caledonian New York College",
    "country": "USA"
  },
  {
    "instituteName": "Saint Louis University",
    "country": "USA"
  },
  {
    "instituteName": "University of Arizona",
    "country": "USA"
  },
  {
    "instituteName": "University of Connecticut",
    "country": "USA"
  },
  {
    "instituteName": "University of Central Florida",
    "country": "USA"
  },
  {
    "instituteName": "College of Marin",
    "country": "USA"
  },
  {
    "instituteName": "Santa Monica College",
    "country": "USA"
  },
    {
      "country": "USA",
      "instituteName": "Adelphi University"
    },
    {
      "country": "USA",
      "instituteName": "Anderson university"
    },
    {
      "country": "USA",
      "instituteName": "Cumberland University"
    },
    {
      "country": "USA",
      "instituteName": "Wittenberg University"
    },
    {
      "country": "USA",
      "instituteName": "Golden Gate University"
    },
    {
      "country": "USA",
      "instituteName": "Central Michigan University"
    },
    {
      "country": "USA",
      "instituteName": "Faulkner University"
    },
    {
      "country": "USA",
      "instituteName": "Wayland Baptist University"
    },
    {
      "country": "USA",
      "instituteName": "University of the Cumberlands"
    },
    {
      "country": "USA",
      "instituteName": "Campbellsville University"
    },
    {
      "country": "USA",
      "instituteName": "St. Francis College"
    },
    {
      "country": "USA",
      "instituteName": "Baptist University Of Florida"
    },
    {
      "country": "USA",
      "instituteName": "Murray State University"
    },
    {
      "country": "USA",
      "instituteName": "University of Louisville - Public University"
    },
    {
      "country": "USA",
      "instituteName": "Purdue Northwest University( Public University)"
    },
    {
      "country": "USA",
      "instituteName": "Bay Atlantic University"
    },
    {
      "country": "USA",
      "instituteName": "Community College of Philadelphia"
    }
  
]




const websiteData =[
  [
    {
      "instituteName": "Abertay University (Dundee)",
      "country": "UK",
      "websiteUrl": "abertay.ac.uk"
    },
    {
      "instituteName": "Aberystwyth University (Aberystwyth)",
      "country": "UK",
      "websiteUrl": "aber.ac.uk"
    },
    {
      "instituteName": "Anglia Ruskin University (London)",
      "country": "UK",
      "websiteUrl": "anglia.ac.uk"
    },
    {
      "instituteName": "Anglia Ruskin University (Chelmsford)",
      "country": "UK",
      "websiteUrl": "anglia.ac.uk"
    },
    {
      "instituteName": "Anglia Ruskin University (Cambridge)",
      "country": "UK",
      "websiteUrl": "anglia.ac.uk"
    },
    {
      "instituteName": "Anglia Ruskin University (Writtle)",
      "country": "UK",
      "websiteUrl": "anglia.ac.uk"
    },
    {
      "instituteName": "Arts University Bournemouth (Dorset)",
      "country": "UK",
      "websiteUrl": "aub.ac.uk"
    },
    {
      "instituteName": "Arts University Plymouth (Plymouth)",
      "country": "UK",
      "websiteUrl": "aup.ac.uk"
    },
    {
      "instituteName": "Arts University Plymouth, (England)",
      "country": "UK",
      "websiteUrl": "aup.ac.uk"
    },
    {
      "instituteName": "Aston University (Birmingham)",
      "country": "UK",
      "websiteUrl": "aston.ac.uk"
    },
    {
      "instituteName": "Bangor University (Bangor)",
      "country": "UK",
      "websiteUrl": "bangor.ac.uk"
    },
    {
      "instituteName": "Bangor University London)",
      "country": "UK",
      "websiteUrl": "bangor.ac.uk"
    },
    {
      "instituteName": "Bath Spa University (Bath)",
      "country": "UK",
      "websiteUrl": "bathspa.ac.uk"
    },
    {
      "instituteName": "BIMM University, (London)",
      "country": "UK",
      "websiteUrl": "bimm.ac.uk"
    },
    {
      "instituteName": "BIMM University (Birmingham)",
      "country": "UK",
      "websiteUrl": "bimm.ac.uk"
    },
    {
      "instituteName": "BIMM University (Brighton)",
      "country": "UK",
      "websiteUrl": "bimm.ac.uk"
    },
    {
      "instituteName": "BIMM University (Essex)",
      "country": "UK",
      "websiteUrl": "bimm.ac.uk"
    },
    {
      "instituteName": "BIMM University (Manchester)",
      "country": "UK",
      "websiteUrl": "bimm.ac.uk"
    },
    {
      "instituteName": "BIMM University (Bristol)",
      "country": "UK",
      "websiteUrl": "bimm.ac.uk"
    },
    {
      "instituteName": "Birkbeck, University of London (London)",
      "country": "UK",
      "websiteUrl": "birkbeck.ac.uk"
    },
    {
      "instituteName": "Birmingham City University (BCU) (Birmingham)",
      "country": "UK",
      "websiteUrl": "bcu.ac.uk"
    },
    {
      "instituteName": "Bishop Grosseteste University (Lincoln)",
      "country": "UK",
      "websiteUrl": "bishopg.ac.uk"
    },
    {
      "instituteName": "Bournemouth University (Bournemouth)",
      "country": "UK",
      "websiteUrl": "bournemouth.ac.uk"
    },
    {
      "instituteName": "Brunel University (London)",
      "country": "UK",
      "websiteUrl": "brunel.ac.uk"
    },
    {
      "instituteName": "Cardiff Metropolitan University (Cardiff)",
      "country": "UK",
      "websiteUrl": "cardiffmet.ac.uk"
    },
    {
      "instituteName": "University of Hull (England)",
      "country": "UK",
      "websiteUrl": "hull.ac.uk"
    },
    {
      "instituteName": "University of Hull (London)",
      "country": "UK",
      "websiteUrl": "hull.ac.uk"
    },
    {
      "instituteName": "Aston University",
      "country": "UK",
      "websiteUrl": "aston.ac.uk"
    },
    {
      "instituteName": "London at Birkbeck (London)",
      "country": "UK",
      "websiteUrl": "birkbeck.ac.uk"
    },
    {
      "instituteName": "London at Goldsmiths (London)",
      "country": "UK",
      "websiteUrl": "gold.ac.uk"
    },
    {
      "instituteName": "London at Royal Holloway (London)",
      "country": "UK",
      "websiteUrl": "royalholloway.ac.uk"
    },
    {
      "instituteName": "London at Royal Veterinary College (London)",
      "country": "UK",
      "websiteUrl": "rvc.ac.uk"
    },
    {
      "instituteName": "London South Bank University (London)",
      "country": "UK",
      "websiteUrl": "lsbu.ac.uk"
    },
    {
      "instituteName": "Loughborough",
      "country": "UK",
      "websiteUrl": "lboro.ac.uk"
    },
    {
      "instituteName": "Queen Mary University of London - QMUL (London)",
      "country": "UK",
      "websiteUrl": "qmul.ac.uk"
    },
    {
      "instituteName": "UCLAN (Preston)",
      "country": "UK",
      "websiteUrl": "uclan.ac.uk"
    },
    {
      "instituteName": "University of Hull",
      "country": "UK",
      "websiteUrl": "hull.ac.uk"
    },
    {
      "instituteName": "University of Southampton",
      "country": "UK",
      "websiteUrl": "southampton.ac.uk"
    },
    {
      "instituteName": "City University (London)",
      "country": "UK",
      "websiteUrl": "city.ac.uk"
    },
    {
      "instituteName": "Coventry University (London)",
      "country": "UK",
      "websiteUrl": "coventry.ac.uk"
    },
    {
      "instituteName": "Coventry University (Coventry)",
      "country": "UK",
      "websiteUrl": "coventry.ac.uk"
    },
    {
      "instituteName": "Cranfield University (Cranfield)",
      "country": "UK",
      "websiteUrl": "cranfield.ac.uk"
    },
    {
      "instituteName": "De Montfort University (Leicester)",
      "country": "UK",
      "websiteUrl": "dmu.ac.uk"
    },
    {
      "instituteName": "Durham University (Durham)",
      "country": "UK",
      "websiteUrl": "dur.ac.uk"
    },
    {
      "instituteName": "EC English (London)",
      "country": "UK",
      "websiteUrl": "ecenglish.com"
    },
    {
      "instituteName": "EC English (Cambridge)",
      "country": "UK",
      "websiteUrl": "ecenglish.com"
    },
    {
      "instituteName": "EC English (Manchester)",
      "country": "UK",
      "websiteUrl": "ecenglish.com"
    },
    {
      "instituteName": "EC English ( Brighton)",
      "country": "UK",
      "websiteUrl": "ecenglish.com"
    },
    {
      "instituteName": "EC English (Bristol)",
      "country": "UK",
      "websiteUrl": "ecenglish.com"
    },
    {
      "instituteName": "Edge Hill University (Liverpool)",
      "country": "UK",
      "websiteUrl": "edgehill.ac.uk"
    },
    {
      "instituteName": "Edinburgh Napier University (Edinburgh)",
      "country": "UK",
      "websiteUrl": "napier.ac.uk"
    },
    {
      "instituteName": "London Metropolitan University (London)",
      "country": "UK",
      "websiteUrl": "londonmet.ac.uk"
    },
    {
      "instituteName": "EF International Academy Ltd. (Trading as - EF Academy) (England)",
      "country": "UK",
      "websiteUrl": "efacademy.org"
    },
    {
      "instituteName": "EF International Academy Ltd. (Trading as - EF Academy) (Oxford)",
      "country": "UK",
      "websiteUrl": "efacademy.org"
    },
    {
      "instituteName": "European School of Economics (ESE) (London)",
      "country": "UK",
      "websiteUrl": "ese-europe.com"
    },
    {
      "instituteName": "Falmouth University",
      "country": "UK",
      "websiteUrl": "falmouth.ac.uk"
    },
    {
      "instituteName": "Glasgow Caledonian University (Glasgow)",
      "country": "UK",
      "websiteUrl": "gcu.ac.uk"
    },
    {
      "instituteName": "Glasgow Caledonian University (London)",
      "country": "UK",
      "websiteUrl": "gcu.ac.uk"
    },
    {
      "instituteName": "English Path (London)",
      "country": "UK",
      "websiteUrl": "englishpath.com"
    },
    {
      "instituteName": "English Path (Manchester)",
      "country": "UK",
      "websiteUrl": "englishpath.com"
    },
    {
      "instituteName": "English Path (Brimingham)",
      "country": "UK",
      "websiteUrl": "englishpath.com"
    },
    {
      "instituteName": "English Path (Leeds)",
      "country": "UK",
      "websiteUrl": "englishpath.com"
    },
    {
      "instituteName": "Arden University",
      "country": "UK",
      "websiteUrl": "arden.ac.uk"
    },
    {
      "instituteName": "Canterbury Christ Church University",
      "country": "UK",
      "websiteUrl": "canterbury.ac.uk"
    },
    {
      "instituteName": "The University of Law",
      "country": "UK",
      "websiteUrl": "law.ac.uk"
    },
    {
      "instituteName": "University For The Creative Arts (UCA)",
      "country": "UK",
      "websiteUrl": "uca.ac.uk"
    },
    {
      "instituteName": "University of Gloucestershire",
      "country": "UK",
      "websiteUrl": "glos.ac.uk"
    },
    {
      "instituteName": "University of London (London)",
      "country": "UK",
      "websiteUrl": "london.ac.uk"
    },
    {
      "instituteName": "University of London (England)",
      "country": "UK",
      "websiteUrl": "london.ac.uk"
    },
    {
      "instituteName": "Heriot Watt University (Edinburgh)",
      "country": "UK",
      "websiteUrl": "heriotwatt.ac.uk"
    },
    {
      "instituteName": "HULT International Business School (London)",
      "country": "UK",
      "websiteUrl": "hult.edu"
    },
    {
      "instituteName": "Lancaster University",
      "country": "UK",
      "websiteUrl": "lancaster.ac.uk"
    },
    {
      "instituteName": "Newcastle University (London)",
      "country": "UK",
      "websiteUrl": "ncl.ac.uk"
    },
    {
      "instituteName": "Newcastle University (Newcastle)",
      "country": "UK",
      "websiteUrl": "ncl.ac.uk"
    },
    {
      "instituteName": "Queen's University (Belfast)",
      "country": "UK",
      "websiteUrl": "qub.ac.uk"
    },
    {
      "instituteName": "Queen's University (Northern Ireland)",
      "country": "UK",
      "websiteUrl": "qub.ac.uk"
    },
    {
      "instituteName": "University of East Anglia (Norwich)",
      "country": "UK",
      "websiteUrl": "uea.ac.uk"
    },
    {
      "instituteName": "University of Exeter (Exeter)",
      "country": "UK",
      "websiteUrl": "exeter.ac.uk"
    },
    {
      "instituteName": "University of Gloucestershire (Cheltenham)",
      "country": "UK",
      "websiteUrl": "glos.ac.uk"
    },
    {
      "instituteName": "University of Manchester (Manchester)",
      "country": "UK",
      "websiteUrl": "manchester.ac.uk"
    },
    {
      "instituteName": "University of Stirling (London)",
      "country": "UK",
      "websiteUrl": "stir.ac.uk"
    },
    {
      "instituteName": "University of Stirling (Stirling)",
      "country": "UK",
      "websiteUrl": "stir.ac.uk"
    },
    {
      "instituteName": "Istituto Marangoni (London)",
      "country": "UK",
      "websiteUrl": "istitutomarangoni.com"
    },
    {
      "instituteName": "JCA-London Fashion Academy (London)",
      "country": "UK",
      "websiteUrl": "jca.london"
    },
    {
      "instituteName": "University of Essex",
      "country": "UK",
      "websiteUrl": "essex.ac.uk"
    },
    {
      "instituteName": "University of Liverpool",
      "country": "UK",
      "websiteUrl": "liverpool.ac.uk"
    },
    {
      "instituteName": "Birmingham Intl College at University of Birmingham (Birmingham)",
      "country": "UK",
      "websiteUrl": "bcu.ac.uk"
    },
    {
      "instituteName": "Brighton Intl College at University of Brighton (Brighton)",
      "country": "UK",
      "websiteUrl": "brighton.ac.uk"
    },
    {
      "instituteName": "City University of London (London)",
      "country": "UK",
      "websiteUrl": "city.ac.uk"
    },
    {
      "instituteName": "Cranfield Intl College at Cranfield University (Cranfield)",
      "country": "UK",
      "websiteUrl": "cranfield.ac.uk"
    },
    {
      "instituteName": "Glasgow Intl College at University of Glasgow (Glasgow)",
      "country": "UK",
      "websiteUrl": "glasgow.ac.uk"
    },
    {
      "instituteName": "KIC Bournemouth at Bournemouth University (Bournemouth)",
      "country": "UK",
      "websiteUrl": "bournemouth.ac.uk"
    },
    {
      "instituteName": "KIC London (London)",
      "country": "UK",
      "websiteUrl": "london.ac.uk"
    },
    {
      "instituteName": "Liverpool Intl College at University of Liverpool (Liverpool)",
      "country": "UK",
      "websiteUrl": "liverpool.ac.uk"
    },
    {
      "instituteName": "Nottingham Trent Intl College at Nottingham Trent University (Nottingham)",
      "country": "UK",
      "websiteUrl": "ntu.ac.uk"
    },
    {
      "instituteName": "Queen's Mary University of London (KICL)",
      "country": "UK",
      "websiteUrl": "qmul.ac.uk"
    },
    {
      "instituteName": "The Engineering & Design Institute London (TEDI-London)",
      "country": "UK",
      "websiteUrl": "tedi.london"
    },
    {
      "instituteName": "University of Bristol (FC Only- KICL and On-Campus)",
      "country": "UK",
      "websiteUrl": "bristol.ac.uk"
    },
    {
      "instituteName": "University of Essex (UIEC)",
      "country": "UK",
      "websiteUrl": "essex.ac.uk"
    },
    {
      "instituteName": "University of Nottingham International College at University of Nottingham (Nottingham)",
      "country": "UK",
      "websiteUrl": "nottingham.ac.uk"
    },
    {
      "instituteName": "University of The West of England, Bristol's Intl College (Bristol)",
      "country": "UK",
      "websiteUrl": "uwe.ac.uk"
    },
    {
      "instituteName": "University of Westminster (London)",
      "country": "UK",
      "websiteUrl": "westminster.ac.uk"
    },
    {
      "instituteName": "York Intl College at University of York (York)",
      "country": "UK",
      "websiteUrl": "york.ac.uk"
    },
    {
      "instituteName": "York Intl College at University of York (Heslington)",
      "country": "UK",
      "websiteUrl": "york.ac.uk"
    },
    {
      "instituteName": "Keele University (Keele)",
      "country": "UK",
      "websiteUrl": "keele.ac.uk"
    },
    {
      "instituteName": "Kings Education",
      "country": "UK",
      "websiteUrl": "kingseducation.com"
    },
    {
      "instituteName": "Kingston University (Magee Londonderry)",
      "country": "UK",
      "websiteUrl": "kingston.ac.uk"
    },
    {
      "instituteName": "Le Cordon Bleu (London)",
      "country": "UK",
      "websiteUrl": "cordonbleu.edu"
    },
    {
      "instituteName": "Leeds Arts University (Leeds)",
      "country": "UK",
      "websiteUrl": "leeds-art.ac.uk"
    },
    {
      "instituteName": "Leeds Arts University (West Yorkshire)",
      "country": "UK",
      "websiteUrl": "leeds-art.ac.uk"
    },
    {
      "instituteName": "Leeds Beckett University (Leeds)",
      "country": "UK",
      "websiteUrl": "leedsbeckett.ac.uk"
    },
    {
      "instituteName": "Leeds Conservatoire (Leeds)",
      "country": "UK",
      "websiteUrl": "leedsconservatoire.ac.uk"
    },
    {
      "instituteName": "Leeds Conservatoire (England)",
      "country": "UK",
      "websiteUrl": "leedsconservatoire.ac.uk"
    },
    {
      "instituteName": "Leeds Trinity University (Leeds)",
      "country": "UK",
      "websiteUrl": "leedstrinity.ac.uk"
    },
    {
      "instituteName": "Leeds Trinity University (England)",
      "country": "UK",
      "websiteUrl": "leedstrinity.ac.uk"
    },
    {
      "instituteName": "Liverpool John Moores University (LJMU) (Liverpool)",
      "country": "UK",
      "websiteUrl": "ljmu.ac.uk"
    },
    {
      "instituteName": "London Metropolitan University (London)",
      "country": "UK",
      "websiteUrl": "londonmet.ac.uk"
    },
    {
      "instituteName": "Loughborough University (Loughborough)",
      "country": "UK",
      "websiteUrl": "lboro.ac.uk"
    },
    {
      "instituteName": "Loughborough University (London)",
      "country": "UK",
      "websiteUrl": "lboro.ac.uk"
    },
    {
      "instituteName": "MetFilm School (London)",
      "country": "UK",
      "websiteUrl": "metfilmschool.ac.uk"
    },
    {
      "instituteName": "MetFilm School (Leeds)",
      "country": "UK",
      "websiteUrl": "metfilmschool.ac.uk"
    },
    {
      "instituteName": "Middlesex University (London)",
      "country": "UK",
      "websiteUrl": "mdx.ac.uk"
    },
    {
      "instituteName": "BCUIC - Birmingham City University International College - Birmingham City University (Birmingham)",
      "country": "UK",
      "websiteUrl": "bcu.ac.uk"
    },
    {
      "instituteName": "Brunel University London Pathway College (BULPC) (London)",
      "country": "UK",
      "websiteUrl": "brunel.ac.uk"
    },
    {
      "instituteName": "CRIC Cambridge Ruskin International College - Anglia Ruskin University (Cambridge)",
      "country": "UK",
      "websiteUrl": "anglia.ac.uk"
    },
    {
      "instituteName": "Hertfordshire International College University of Hertfordshire (Hatfield)",
      "country": "UK",
      "websiteUrl": "herts.ac.uk"
    },
    {
      "instituteName": "Hertfordshire International College University of Hertfordshire (Herts)",
      "country": "UK",
      "websiteUrl": "herts.ac.uk"
    },
    {
      "instituteName": "ICP - International College Portsmouth - University of Portsmouth (Portsmouth)",
      "country": "UK",
      "websiteUrl": "port.ac.uk"
    },
    {
      "instituteName": "International College Robert Gordon University - Robert Gordon University (Aberdeen",
      "country": "UK",
      "websiteUrl": "rgu.ac.uk"
    },
    {
      "instituteName": "LGSC - Leicester Global Study Centre University of Leicester (Aberdeen)",
      "country": "UK",
      "websiteUrl": "le.ac.uk"
    },
    {
      "instituteName": "UK-TCSU - The College, Swansea University - Swansea University (Swansea)",
      "country": "UK",
      "websiteUrl": "swansea.ac.uk"
    },
    {
      "instituteName": "UA92 Global - University Academy 92 Global (Manchester)",
      "country": "UK",
      "websiteUrl": "ua92.ac.uk"
    },
    {
      "instituteName": "UNIC - University of Northampton International College - University of Northampton (Northampton)",
      "country": "UK",
      "websiteUrl": "northampton.ac.uk"
    },
    {
      "instituteName": "UPIC - University of Plymouth International College - University of Plymouth (Plymouth)",
      "country": "UK",
      "websiteUrl": "plymouth.ac.uk"
    },
    {
      "instituteName": "Northeastern University (London)",
      "country": "UK",
      "websiteUrl": "northeastern.edu"
    },
    {
      "instituteName": "Northumbria University (Newcastle)",
      "country": "UK",
      "websiteUrl": "northumbria.ac.uk"
    },
    {
      "instituteName": "Norwich University of the Arts (Norwich)",
      "country": "UK",
      "websiteUrl": "nua.ac.uk"
    },
    {
      "instituteName": "Nottingham Trent University (Nottingham)",
      "country": "UK",
      "websiteUrl": "ntu.ac.uk"
    },
    {
      "instituteName": "Oxford Brookes University (Oxford)",
      "country": "UK",
      "websiteUrl": "brookes.ac.uk"
    },
    {
      "instituteName": "Bangor University International College (BUIC) (Bangor)",
      "country": "UK",
      "websiteUrl": "bangor.ac.uk"
    },
    {
      "instituteName": "Bangor University International College (BUIC) (Wales)",
      "country": "UK",
      "websiteUrl": "bangor.ac.uk"
    },
    {
      "instituteName": "BPP University",
      "country": "UK",
      "websiteUrl": "bpp.com"
    },
    {
      "instituteName": "De Montfort University International College (DMUIC) (Leicester)",
      "country": "UK",
      "websiteUrl": "dmu.ac.uk"
    },
    {
      "instituteName": "Edinburgh Napier University International College (ENUIC) (Edinburgh)",
      "country": "UK",
      "websiteUrl": "napier.ac.uk"
    },
    {
      "instituteName": "Edinburgh Napier University International College (ENUIC) (Scotland)",
      "country": "UK",
      "websiteUrl": "napier.ac.uk"
    },
    {
      "instituteName": "International College of Dundee (ICD) (Scotland)",
      "country": "UK",
      "websiteUrl": "dundee.ac.uk"
    },
    {
      "instituteName": "International College of Dundee (ICD) (Dundee)",
      "country": "UK",
      "websiteUrl": "dundee.ac.uk"
    },
    {
      "instituteName": "Oxford International Digital Institute (OIDI)",
      "country": "UK",
      "websiteUrl": "oxfordinternationaleducation.com"
    },
    {
      "instituteName": "Oxford International Pathway College (OIPC)",
      "country": "UK",
      "websiteUrl": "oxfordinternational.com"
    },
    {
      "instituteName": "University of Bradford International College (UBIC) (Bradford)",
      "country": "UK",
      "websiteUrl": "bradford.ac.uk"
    },
    {
      "instituteName": "University of Bradford International College (UBIC) (England)",
      "country": "UK",
      "websiteUrl": "bradford.ac.uk"
    },
    {
      "instituteName": "University of Greenwich International College (UGIC) (Greenwich)",
      "country": "UK",
      "websiteUrl": "gre.ac.uk"
    },
    {
      "instituteName": "University of Greenwich International College (UGIC) (London)",
      "country": "UK",
      "websiteUrl": "gre.ac.uk"
    },
    {
      "instituteName": "University of Kent International College (UKIC) (Canterbury)",
      "country": "UK",
      "websiteUrl": "kent.ac.uk"
    },
    {
      "instituteName": "University of Roehampton (London)",
      "country": "UK",
      "websiteUrl": "roehampton.ac.uk"
    },
    {
      "instituteName": "Paris Dauphine International, London",
      "country": "UK",
      "websiteUrl": "dauphine.paris"
    },
    {
      "instituteName": "Paris Dauphine International, London (London)",
      "country": "UK",
      "websiteUrl": "dauphine.paris"
    },
    {
      "instituteName": "Queen Margaret University (Edinburgh)",
      "country": "UK",
      "websiteUrl": "qmu.ac.uk"
    },
    {
      "instituteName": "Queen's University, (Belfast)",
      "country": "UK",
      "websiteUrl": "qub.ac.uk"
    },
    {
      "instituteName": "Ravensbourne University London (London)",
      "country": "UK",
      "websiteUrl": "ravensbourne.ac.uk"
    },
    {
      "instituteName": "Regent's University London (London)",
      "country": "UK",
      "websiteUrl": "regents.ac.uk"
    },
    {
      "instituteName": "Royal Agricultural University (Gloucestershire)",
      "country": "UK",
      "websiteUrl": "royalagricultural.ac.uk"
    },
    {
      "instituteName": "SAE Institute",
      "country": "UK",
      "websiteUrl": "sae.edu"
    },
    {
      "instituteName": "Sheffield Hallam University (Sheffield)",
      "country": "UK",
      "websiteUrl": "shu.ac.uk"
    },
    {
      "instituteName": "SOAS University of London (London)",
      "country": "UK",
      "websiteUrl": "soas.ac.uk"
    },
    {
      "instituteName": "SOAS University of London (England)",
      "country": "UK",
      "websiteUrl": "soas.ac.uk"
    },
    {
      "instituteName": "Solent University (Southampton)",
      "country": "UK",
      "websiteUrl": "solent.ac.uk"
    },
    {
      "instituteName": "St Mary's University (Twickenham)",
      "country": "UK",
      "websiteUrl": "stmarys.ac.uk"
    },
    {
      "instituteName": "St Mary's University (London)",
      "country": "UK",
      "websiteUrl": "stmarys.ac.uk"
    },
    {
      "instituteName": "Staffordshire University (Staffordshire)",
      "country": "UK",
      "websiteUrl": "staffs.ac.uk"
    },
    {
      "instituteName": "Cardiff University (Cardiff)",
      "country": "UK",
      "websiteUrl": "cardiff.ac.uk"
    },
    {
      "instituteName": "Kingston University (London)",
      "country": "UK",
      "websiteUrl": "kingston.ac.uk"
    },
    {
      "instituteName": "Royal Holloway, University of London (London)",
      "country": "UK",
      "websiteUrl": "rhul.ac.uk"
    },
    {
      "instituteName": "Teesside University",
      "country": "UK",
      "websiteUrl": "tees.ac.uk"
    },
    {
      "instituteName": "University of Aberdeen (Aberdeen)",
      "country": "UK",
      "websiteUrl": "abdn.ac.uk"
    },
    {
      "instituteName": "University of Huddersfield (Huddersfield)",
      "country": "UK",
      "websiteUrl": "hud.ac.uk"
    },
    {
      "instituteName": "University of Leeds (Leeds)",
      "country": "UK",
      "websiteUrl": "leeds.ac.uk"
    },
    {
      "instituteName": "University of Sheffield (Sheffield)",
      "country": "UK",
      "websiteUrl": "sheffield.ac.uk"
    },
    {
      "instituteName": "University of Strathclyde (Glasgow)",
      "country": "UK",
      "websiteUrl": "strath.ac.uk"
    },
    {
      "instituteName": "University of Surrey (Birmingham)",
      "country": "UK",
      "websiteUrl": "surrey.ac.uk"
    },
    {
      "instituteName": "University of Surrey (Guildford)",
      "country": "UK",
      "websiteUrl": "surrey.ac.uk"
    },
    {
      "instituteName": "University of Sussex (Sussex)",
      "country": "UK",
      "websiteUrl": "sussex.ac.uk"
    },
    {
      "instituteName": "Swansea University (Swansea)",
      "country": "UK",
      "websiteUrl": "swansea.ac.uk"
    },
    {
      "instituteName": "Teesside University (Middles- Borough )",
      "country": "UK",
      "websiteUrl": "tees.ac.uk"
    },
    {
      "instituteName": "Teesside University (London)",
      "country": "UK",
      "websiteUrl": "tees.ac.uk"
    },
    {
      "instituteName": "The Glasgow School of Art (Scotland)",
      "country": "UK",
      "websiteUrl": "gsa.ac.uk"
    },
    {
      "instituteName": "The Robert Gordon University (RGU) (Aberdeen)",
      "country": "UK",
      "websiteUrl": "rgu.ac.uk"
    },
    {
      "instituteName": "The Robert Gordon University (RGU) (Scotland)",
      "country": "UK",
      "websiteUrl": "rgu.ac.uk"
    },
    {
      "instituteName": "The University of Reading (Reading)",
      "country": "UK",
      "websiteUrl": "reading.ac.uk"
    },
    {
      "instituteName": "The University of Sheffield ()",
      "country": "UK",
      "websiteUrl": "sheffield.ac.uk"
    },
    {
      "instituteName": "Camberwell College of Arts (London)",
      "country": "UK",
      "websiteUrl": "arts.ac.uk"
    },
    {
      "instituteName": "Central Saint Martins College (CSM) (London)",
      "country": "UK",
      "websiteUrl": "arts.ac.uk"
    },
    {
      "instituteName": "Chelsea College of Arts (London)",
      "country": "UK",
      "websiteUrl": "arts.ac.uk"
    },
    {
      "instituteName": "London College of Communication (LCC) (London)",
      "country": "UK",
      "websiteUrl": "arts.ac.uk"
    },
    {
      "instituteName": "London College of Fashion (LCF) (London)",
      "country": "UK",
      "websiteUrl": "arts.ac.uk"
    },
    {
      "instituteName": "Wimbledon College of Arts (London)",
      "country": "UK",
      "websiteUrl": "arts.ac.uk"
    },
    {
      "instituteName": "Ulster University (Belfast)",
      "country": "UK",
      "websiteUrl": "ulster.ac.uk"
    },
    {
      "instituteName": "Ulster University (Coleraine)",
      "country": "UK",
      "websiteUrl": "ulster.ac.uk"
    },
    {
      "instituteName": "Ulster University (Jordanstown)",
      "country": "UK",
      "websiteUrl": "ulster.ac.uk"
    },
    {
      "instituteName": "Ulster University (Magee)",
      "country": "UK",
      "websiteUrl": "ulster.ac.uk"
    },
    {
      "instituteName": "Ulster University (Londonerry)",
      "country": "UK",
      "websiteUrl": "ulster.ac.uk"
    },
    {
      "instituteName": "University College Birmingham (Birmingham)",
      "country": "UK",
      "websiteUrl": "ucb.ac.uk"
    },
    {
      "instituteName": "University of Bedfordshire (Luton)",
      "country": "UK",
      "websiteUrl": "beds.ac.uk"
    },
    {
      "instituteName": "University of Birmingham",
      "country": "UK",
      "websiteUrl": "birmingham.ac.uk"
    },
    {
      "instituteName": "University of Bolton",
      "country": "UK",
      "websiteUrl": "bolton.ac.uk"
    },
    {
      "instituteName": "University of Bradford (Bradford)",
      "country": "UK",
      "websiteUrl": "bradford.ac.uk"
    },
    {
      "instituteName": "University of Brighton (Brighton)",
      "country": "UK",
      "websiteUrl": "brighton.ac.uk"
    },
    {
      "instituteName": "University of Bristol (Bristol)",
      "country": "UK",
      "websiteUrl": "bristol.ac.uk"
    },
    {
      "instituteName": "University of Buckingham (Buckingham)",
      "country": "UK",
      "websiteUrl": "buckingham.ac.uk"
    },
    {
      "instituteName": "University of Central Lancashire (UCLAN) (Preston)",
      "country": "UK",
      "websiteUrl": "uclan.ac.uk"
    },
    {
      "instituteName": "University of Chester (Chester)",
      "country": "UK",
      "websiteUrl": "chester.ac.uk"
    },
    {
      "instituteName": "University of Chichester (Chichester)",
      "country": "UK",
      "websiteUrl": "chi.ac.uk"
    },
    {
      "instituteName": "University of Derby (Derby)",
      "country": "UK",
      "websiteUrl": "derby.ac.uk"
    },
    {
      "instituteName": "University of Dundee (Dundee)",
      "country": "UK",
      "websiteUrl": "dundee.ac.uk"
    },
    {
      "instituteName": "University of East London (UEL) (London)",
      "country": "UK",
      "websiteUrl": "uel.ac.uk"
    },
    {
      "instituteName": "University of Essex (Colchester)",
      "country": "UK",
      "websiteUrl": "essex.ac.uk"
    },
    {
      "instituteName": "University of Greenwich (London)",
      "country": "UK",
      "websiteUrl": "gre.ac.uk"
    },
    {
      "instituteName": "University of Hertfordshire (Hatfieldf)",
      "country": "UK",
      "websiteUrl": "herts.ac.uk"
    },
    {
      "instituteName": "University of Hertfordshire (Hertfordshire)",
      "country": "UK",
      "websiteUrl": "herts.ac.uk"
    },
    {
      "instituteName": "University of Hull (Hull)",
      "country": "UK",
      "websiteUrl": "hull.ac.uk"
    },
    {
      "instituteName": "University of Kent (Canterbury)",
      "country": "UK",
      "websiteUrl": "kent.ac.uk"
    },
    {
      "instituteName": "University of Lincoln (Lincoln)",
      "country": "UK",
      "websiteUrl": "lincoln.ac.uk"
    },
    {
      "instituteName": "University of Liverpool (Liverpool)",
      "country": "UK",
      "websiteUrl": "liverpool.ac.uk"
    },
    {
      "instituteName": "University of Liverpool (London)",
      "country": "UK",
      "websiteUrl": "liverpool.ac.uk"
    },
    {
      "instituteName": "University of Nottingham (Nottingham)",
      "country": "UK",
      "websiteUrl": "nottingham.ac.uk"
    },
    {
      "instituteName": "University of Plymouth (Plymouth)",
      "country": "UK",
      "websiteUrl": "plymouth.ac.uk"
    },
    {
      "instituteName": "University of Portsmouth (Portsmouth)",
      "country": "UK",
      "websiteUrl": "port.ac.uk"
    },
    {
      "instituteName": "University of Portsmouth (London)",
      "country": "UK",
      "websiteUrl": "port.ac.uk"
    },
    {
      "instituteName": "University of Roehampton (London)",
      "country": "UK",
      "websiteUrl": "roehampton.ac.uk"
    },
    {
      "instituteName": "University of Salford (Manchester)",
      "country": "UK",
      "websiteUrl": "salford.ac.uk"
    },
    {
      "instituteName": "University of South Wales (Pontypridd)",
      "country": "UK",
      "websiteUrl": "southwales.ac.uk"
    },
    {
      "instituteName": "University of South Wales (Cardiff)",
      "country": "UK",
      "websiteUrl": "southwales.ac.uk"
    },
    {
      "instituteName": "University of South Wales (Newport",
      "country": "UK",
      "websiteUrl": "southwales.ac.uk"
    },
    {
      "instituteName": "University of South Wales (London)",
      "country": "UK",
      "websiteUrl": "southwales.ac.uk"
    },
    {
      "instituteName": "University of Southampton (Southampton)",
      "country": "UK",
      "websiteUrl": "southampton.ac.uk"
    },
    {
      "instituteName": "University of Suffolk (Suffolk)",
      "country": "UK",
      "websiteUrl": "uos.ac.uk"
    },
    {
      "instituteName": "University of Suffolk (England)",
      "country": "UK",
      "websiteUrl": "uos.ac.uk"
    },
    {
      "instituteName": "University of Sunderland",
      "country": "UK",
      "websiteUrl": "sunderland.ac.uk"
    },
    {
      "instituteName": "University of Sunderland (London)",
      "country": "UK",
      "websiteUrl": "sunderland.ac.uk"
    },
    {
      "instituteName": "University of Sussex (Brighton)",
      "country": "UK",
      "websiteUrl": "sussex.ac.uk"
    },
    {
      "instituteName": "University of the Arts London (London)",
      "country": "UK",
      "websiteUrl": "arts.ac.uk"
    },
    {
      "instituteName": "University of the Arts London (UAL) (London)",
      "country": "UK",
      "websiteUrl": "arts.ac.uk"
    },
    {
      "instituteName": "University of The West of England (UWE) (Bristol)",
      "country": "UK",
      "websiteUrl": "uwe.ac.uk"
    },
    {
      "instituteName": "University of The West of Scotland (Glasgow)",
      "country": "UK",
      "websiteUrl": "uws.ac.uk"
    },
    {
      "instituteName": "University of Wales Trinity Saint David (Birmingham)",
      "country": "UK",
      "websiteUrl": "uwtsd.ac.uk"
    },
    {
      "instituteName": "University of Wales Trinity Saint David (Swansea)",
      "country": "UK",
      "websiteUrl": "uwtsd.ac.uk"
    },
    {
      "instituteName": "University of Wales Trinity Saint David (London)",
      "country": "UK",
      "websiteUrl": "uwtsd.ac.uk"
    },
    {
      "instituteName": "University of West London (UWL) (London)",
      "country": "UK",
      "websiteUrl": "uwl.ac.uk"
    },
    {
      "instituteName": "University of Winchester",
      "country": "UK",
      "websiteUrl": "winchester.ac.uk"
    },
    {
      "instituteName": "University of Wolverhampton (Wolverhampton)",
      "country": "UK",
      "websiteUrl": "wlv.ac.uk"
    },
    {
      "instituteName": "University of York (Heslington)",
      "country": "UK",
      "websiteUrl": "york.ac.uk"
    },
    {
      "instituteName": "University of York (York)",
      "country": "UK",
      "websiteUrl": "york.ac.uk"
    },
    {
      "instituteName": "Wrexham University (Formerly Wrexham Glyndwr University)",
      "country": "UK",
      "websiteUrl": "glyndwr.ac.uk"
    },
    {
      "instituteName": "St. Mary's University",
      "country": "UK",
      "websiteUrl": "stmarys.ac.uk"
    },
    {
      "instituteName": "UWIC - University of Worcester International College (UG/PG Pathway)",
      "country": "UK",
      "websiteUrl": "worc.ac.uk"
    },
    {
      "instituteName": "University of Abertay",
      "country": "UK",
      "websiteUrl": "abertay.ac.uk"
    },
    {
      "instituteName": "Bangor University and ELCOS",
      "country": "UK",
      "websiteUrl": "bangor.ac.uk"
    },
    {
      "instituteName": "University of Bath",
      "country": "UK",
      "websiteUrl": "bath.ac.uk"
    },
    {
      "instituteName": "Global Banking School",
      "country": "UK",
      "websiteUrl": "globalbankingschool.ac.uk"
    },
    {
      "instituteName": "Glyndwr University Wrexham",
      "country": "UK",
      "websiteUrl": "glyndwr.ac.uk"
    },
    {
      "instituteName": "Heriot-Watt University",
      "country": "UK",
      "websiteUrl": "heriot-watt.ac.uk"
    },
    {
      "instituteName": "Manchester Metropolitan University",
      "country": "UK",
      "websiteUrl": "mmu.ac.uk"
    },
    {
      "instituteName": "University of Ulster",
      "country": "UK",
      "websiteUrl": "ulster.ac.uk"
    },
    {
      "instituteName": "Ajman University - (Ajman)",
      "country": "UAE",
      "websiteUrl": "ajman.ac.ae"
    },
    {
      "instituteName": "Ajman University (UAE)",
      "country": "UAE",
      "websiteUrl": "ajman.ac.ae"
    },
    {
      "instituteName": "American University of Ras Al Khaimah (AURAK) (UAE)",
      "country": "UAE",
      "websiteUrl": "aurak.ac.ae"
    },
    {
      "instituteName": "Bath Spa University, RAK, (Ras Al Khaimah)",
      "country": "UAE",
      "websiteUrl": "bathspa.ac.uk"
    },
    {
      "instituteName": "Curtin University - (Dubai)",
      "country": "UAE",
      "websiteUrl": "curtin.edu"
    },
    {
      "instituteName": "De Montfort University - (Dubai)",
      "country": "UAE",
      "websiteUrl": "dmu.ac.uk"
    },
    {
      "instituteName": "GBS (Global Business Studies) - (Dubai)",
      "country": "UAE",
      "websiteUrl": "gbs.ac"
    },
    {
      "instituteName": "English Path, (Duabi)",
      "country": "UAE",
      "websiteUrl": "englishpath.com"
    },
    {
      "instituteName": "University of Europe for Applied Sciences, (Dubai)",
      "country": "UAE",
      "websiteUrl": "ue-germany.com"
    },
    {
      "instituteName": "Heriot Watt University (Dubai)",
      "country": "UAE",
      "websiteUrl": "heriot-watt.ac.uk"
    },
    {
      "instituteName": "HULT International Business School (Duabi)",
      "country": "UAE",
      "websiteUrl": "hult.edu"
    },
    {
      "instituteName": "Istituto Marangoni, (Dubai)",
      "country": "UAE",
      "websiteUrl": "istitutomarangoni.com"
    },
    {
      "instituteName": "Manipal Education, (Dubai)",
      "country": "UAE",
      "websiteUrl": "manipaldubai.com"
    },
    {
      "instituteName": "Middlesex University - (Dubai)",
      "country": "UAE",
      "websiteUrl": "mdx.ac.uk"
    },
    {
      "instituteName": "Murdoch University (Dubai)",
      "country": "UAE",
      "websiteUrl": "murdoch.edu.au"
    },
    {
      "instituteName": "Rochester Institute of Technology of Dubai (RIT Dubai)",
      "country": "UAE",
      "websiteUrl": "rit.edu"
    },
    {
      "instituteName": "Rochester Institute of Technology of Dubai (RIT UAE)",
      "country": "UAE",
      "websiteUrl": "rit.edu"
    },
    {
      "instituteName": "SP Jain School of Global Management (Dubai)",
      "country": "UAE",
      "websiteUrl": "spjain.org"
    },
    {
      "instituteName": "SAE Institute (Duabi)",
      "country": "UAE",
      "websiteUrl": "sae.edu"
    },
    {
      "instituteName": "SKEMA Business School (Dubai)",
      "country": "UAE",
      "websiteUrl": "skema.edu"
    },
    {
      "instituteName": "Symbiosis International University, (Dubai)",
      "country": "UAE",
      "websiteUrl": "symbiosis.edu"
    },
    {
      "instituteName": "The Emirates Academy of Hospitality Management (Dubai)",
      "country": "UAE",
      "websiteUrl": "emiratesacademy.edu"
    },
    {
      "instituteName": "University of Birmingham (Dubai)",
      "country": "UAE",
      "websiteUrl": "birmingham.ac.uk"
    },
    {
      "instituteName": "University of Bolton (Ras Al Khaimah)",
      "country": "UAE",
      "websiteUrl": "bolton.ac.uk"
    },
    {
      "instituteName": "University of Bolton - UAE",
      "country": "UAE",
      "websiteUrl": "bolton.ac.uk"
    },
    {
      "instituteName": "University of Stirling (UAE)",
      "country": "UAE",
      "websiteUrl": "stir.ac.uk"
    },
    {
      "instituteName": "University of Wollongong - (Dubai)",
      "country": "UAE",
      "websiteUrl": "uow.edu.au"
    },
    {
      "instituteName": "Planeta Formacion Y Universidades - Universitat De Carlemany (UCMA), Andorra",
      "country": "Andorra",
      "websiteUrl": "ucma.edu"
    },
    {
      "instituteName": "Modul University (Vienna)",
      "country": "Austria",
      "websiteUrl": "modul.ac.at"
    },
    {
      "instituteName": "Thomas More - University of Applied Sciences (Geel & Mechelen)",
      "country": "Belgium",
      "websiteUrl": "thomasmore.be"
    },
    {
      "instituteName": "Algebra University College (Zagreb)",
      "country": "Croatia",
      "websiteUrl": "algebra.university"
    },
    {
      "instituteName": "Rochester Institute of Technology (RIT) (Dubrovnik)",
      "country": "Croatia",
      "websiteUrl": "rit.edu"
    },
    {
      "instituteName": "Cyprus West University (Famagusta)",
      "country": "Cyprus",
      "websiteUrl": "cypruswest.edu.tr"
    },
    {
      "instituteName": "Cyprus West University, (North Cyprus)",
      "country": "Cyprus",
      "websiteUrl": "cypruswest.edu.tr"
    },
    {
      "instituteName": "Frederick University (Nicosia)",
      "country": "Cyprus",
      "websiteUrl": "frederick.ac.cy"
    },
    {
      "instituteName": "University of Nicosia (Nicosia)",
      "country": "Cyprus",
      "websiteUrl": "unic.ac.cy"
    },
    {
      "instituteName": "Anglo-American University, Czech Republic",
      "country": "Czech Republic",
      "websiteUrl": "aauni.edu"
    },
    {
      "instituteName": "Prague Film Institute (Prague)",
      "country": "Czech Republic",
      "websiteUrl": "praguefilminstitute.cz"
    },
    {
      "instituteName": "Prague Film School (Prague)",
      "country": "Czech Republic",
      "websiteUrl": "praguefilmschool.cz"
    },
    {
      "instituteName": "University of West Bohemia (Plzeň)",
      "country": "Czech Republic",
      "websiteUrl": "zcu.cz"
    },
    {
      "instituteName": "Lab University of Applied Sciences (Lappeenranta)",
      "country": "Finland",
      "websiteUrl": "lab.fi"
    },
    {
      "instituteName": "Tampere University",
      "country": "Finland",
      "websiteUrl": "tuni.fi"
    },
    {
      "instituteName": "EIT Urban Mobility Master School",
      "country": "Finland",
      "websiteUrl": "eitum.eu"
    },
    {
      "instituteName": "Arcada University of Applied Sciences",
      "country": "Finland",
      "websiteUrl": "arcada.fi"
    },
    {
      "instituteName": "Hanken School of Economics",
      "country": "Finland",
      "websiteUrl": "hanken.fi"
    },
    {
      "instituteName": "LUT University (Lappeenranta)",
      "country": "Finland",
      "websiteUrl": "lut.fi"
    },
    {
      "instituteName": "Metropolia University of Applied Sciences (Helsinki)",
      "country": "Finland",
      "websiteUrl": "metropolia.fi"
    },
    {
      "instituteName": "South-Eastern Finland University of Applied Sciences",
      "country": "Finland",
      "websiteUrl": "xamk.fi"
    },
    {
      "instituteName": "University of Vaasa (Vaasa)",
      "country": "Finland",
      "websiteUrl": "uva.fi"
    },
    {
      "instituteName": "VAMK - Vaasa University of Applied Sciences (Vaasa)",
      "country": "Finland",
      "websiteUrl": "vamk.fi"
    },
    {
      "instituteName": "Ecole De Communication Visuelle (ECV), France",
      "country": "France",
      "websiteUrl": "ecv.fr"
    },
    {
      "instituteName": "Ecole De Conde, France",
      "country": "France",
      "websiteUrl": "ecoledeconde.com"
    },
    {
      "instituteName": "Ecole Eac, France",
      "country": "France",
      "websiteUrl": "eac-fr.com"
    },
    {
      "instituteName": "Ecole Superieure De Publicite, France",
      "country": "France",
      "websiteUrl": "esp.fr"
    },
    {
      "instituteName": "Ecole Superieure Du Digital, France",
      "country": "France",
      "websiteUrl": "esdigital.fr"
    },
    {
      "instituteName": "Ecole Superieure Du Parfum, France",
      "country": "France",
      "websiteUrl": "ecoleduparfum.com"
    },
    {
      "instituteName": "Institut National De Gemmologie, France",
      "country": "France",
      "websiteUrl": "gemmologie.fr"
    },
    {
      "instituteName": "Autograf Design School, France",
      "country": "France",
      "websiteUrl": "autograf.fr"
    },
    {
      "instituteName": "Brest Business School (Brest)",
      "country": "France",
      "websiteUrl": "brest-bs.com"
    },
    {
      "instituteName": "Burgundy School of Business (Dijon)",
      "country": "France",
      "websiteUrl": "bsb-education.com"
    },
    {
      "instituteName": "CEG France - OnCampus Kedge Business School (Marseille)",
      "country": "France",
      "websiteUrl": "kedge.edu"
    },
    {
      "instituteName": "CEG France - OnCampus Kedge Business School (Paris)",
      "country": "France",
      "websiteUrl": "kedge.edu"
    },
    {
      "instituteName": "CEG France - OnCampus Kedge Business School (Bordeaux)",
      "country": "France",
      "websiteUrl": "kedge.edu"
    },
    {
      "instituteName": "CEG France - OnCampus Kedge Business School (Toulon)",
      "country": "France",
      "websiteUrl": "kedge.edu"
    },
    {
      "instituteName": "College De Paris - Ecema Business School (Lyon)",
      "country": "France",
      "websiteUrl": "college-de-paris.org"
    },
    {
      "instituteName": "College De Paris - Top Tech College (Paris)",
      "country": "France",
      "websiteUrl": "college-de-paris.org"
    },
    {
      "instituteName": "College de Paris",
      "country": "France",
      "websiteUrl": "college-de-paris.org"
    },
    {
      "instituteName": "CY Cergy Paris University (CY Tech)",
      "country": "France",
      "websiteUrl": "cyu.fr"
    },
    {
      "instituteName": "CY Tech Cergy Paris University",
      "country": "France",
      "websiteUrl": "cyu.fr"
    },
    {
      "instituteName": "IHECF (Accounting & Finance from B1 to M2), France",
      "country": "France",
      "websiteUrl": "ihecf.com"
    },
    {
      "instituteName": "IPAC Bachelor Factory (Bachelors in Business & Management from B1 to B3), France",
      "country": "France",
      "websiteUrl": "ipacbachelorfactory.com"
    },
    {
      "instituteName": "ISCOM (Communications and Advertising School from B1 to M2), France",
      "country": "France",
      "websiteUrl": "iscom.fr"
    },
    {
      "instituteName": "MBWAY (Management School from B3 to M2), France",
      "country": "France",
      "websiteUrl": "mbway.com"
    },
    {
      "instituteName": "MDS (My Digital School from B1 to M1), France",
      "country": "France",
      "websiteUrl": "mydigitalschool.com"
    },
    {
      "instituteName": "TUNON (Tourism and Hotel Management School from B1 to M2), France",
      "country": "France",
      "websiteUrl": "ecole-tunon.com"
    },
    {
      "instituteName": "EM Strasbourg Business School",
      "country": "France",
      "websiteUrl": "em-strasbourg.com"
    },
    {
      "instituteName": "Epitech (Paris)",
      "country": "France",
      "websiteUrl": "epitech.eu"
    },
    {
      "instituteName": "ESDES Lyon Business School (Lyon)",
      "country": "France",
      "websiteUrl": "esdes.fr"
    },
    {
      "instituteName": "ESIGELEC, France",
      "country": "France",
      "websiteUrl": "esigelec.fr"
    },
    {
      "instituteName": "ESSCA School of Management, France",
      "country": "France",
      "websiteUrl": "essca.fr"
    },
    {
      "instituteName": "Ecole 89, (Ferrières-en- Brie)",
      "country": "France",
      "websiteUrl": "ecole89.fr"
    },
    {
      "instituteName": "European Business School (EBS-Paris), (Paris)",
      "country": "France",
      "websiteUrl": "ebs-paris.com"
    },
    {
      "instituteName": "Ferrieres (Paris)",
      "country": "France",
      "websiteUrl": "ecoleferrieres.com"
    },
    {
      "instituteName": "Atelier Chardon Savard (Applied Arts School) (Paris)",
      "country": "France",
      "websiteUrl": "chardon-savard.com"
    },
    {
      "instituteName": "Atelier Chardon Savard (Applied Arts School) (Nantes)",
      "country": "France",
      "websiteUrl": "chardon-savard.com"
    },
    {
      "instituteName": "Atelier De Sevres (Applied Arts School) (Paris)",
      "country": "France",
      "websiteUrl": "atelierdesevres.com"
    },
    {
      "instituteName": "CLCF (Applied Arts School) (Paris)",
      "country": "France",
      "websiteUrl": "clcf.com"
    },
    {
      "instituteName": "Cours Florent (Applied Arts School) (Paris)",
      "country": "France",
      "websiteUrl": "coursflorent.fr"
    },
    {
      "instituteName": "Digital Campus (Business School) (Aix)",
      "country": "France",
      "websiteUrl": "digital-campus.fr"
    },
    {
      "instituteName": "Digital Campus (Business School) (Bordeaux)",
      "country": "France",
      "websiteUrl": "digital-campus.fr"
    },
    {
      "instituteName": "Digital Campus (Business School) (Lyon)",
      "country": "France",
      "websiteUrl": "digital-campus.fr"
    },
    {
      "instituteName": "Digital Campus (Business School) (Nantes)",
      "country": "France",
      "websiteUrl": "digital-campus.fr"
    },
    {
      "instituteName": "Digital Campus (Business School) (Rennes)",
      "country": "France",
      "websiteUrl": "digital-campus.fr"
    },
    {
      "instituteName": "Digital Campus (Business School) (Toulouse)",
      "country": "France",
      "websiteUrl": "digital-campus.fr"
    },
    {
      "instituteName": "Digital Campus (Business School) (Strasbourg)",
      "country": "France",
      "websiteUrl": "digital-campus.fr"
    },
    {
      "instituteName": "ELIJE (Business School) (Paris)",
      "country": "France",
      "websiteUrl": "elije.fr"
    },
    {
      "instituteName": "ELIJE (Business School) (Montpellier)",
      "country": "France",
      "websiteUrl": "elije.fr"
    },
    {
      "instituteName": "ELIJE (Business School) (Lyon)",
      "country": "France",
      "websiteUrl": "elije.fr"
    },
    {
      "instituteName": "ELIJE (Business School) (Toulouse)",
      "country": "France",
      "websiteUrl": "elije.fr"
    },
    {
      "instituteName": "ESARC Evolution (Business School) (Aix)",
      "country": "France",
      "websiteUrl": "esarc-evolution.com"
    },
    {
      "instituteName": "ESARC Evolution (Business School) (Bordeaux)",
      "country": "France",
      "websiteUrl": "esarc-evolution.com"
    },
    {
      "instituteName": "ESARC Evolution (Business School) (Toulouse)",
      "country": "France",
      "websiteUrl": "esarc-evolution.com"
    },
    {
      "instituteName": "ESARC Evolution (Business School) (Paris)",
      "country": "France",
      "websiteUrl": "esarc-evolution.com"
    },
    {
      "instituteName": "ESARC Evolution (Business School) (Lyon)",
      "country": "France",
      "websiteUrl": "esarc-evolution.com"
    },
    {
      "instituteName": "ESARC Evolution (Business School) (Montpellier)",
      "country": "France",
      "websiteUrl": "esarc-evolution.com"
    },
    {
      "instituteName": "ESARC Evolution (Business School) (Rennes)",
      "country": "France",
      "websiteUrl": "esarc-evolution.com"
    },
    {
      "instituteName": "ESARC Evolution (Business School) (Nantes)",
      "country": "France",
      "websiteUrl": "esarc-evolution.com"
    },
    {
      "instituteName": "ESARC Evolution (Business School) (Rouen)",
      "country": "France",
      "websiteUrl": "esarc-evolution.com"
    },
    {
      "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Rouen)",
      "country": "France",
      "websiteUrl": "esg.fr"
    },
    {
      "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Strasbourg)",
      "country": "France",
      "websiteUrl": "esg.fr"
    },
    {
      "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Nantes)",
      "country": "France",
      "websiteUrl": "esg.fr"
    },
    {
      "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Montpellier)",
      "country": "France",
      "websiteUrl": "esg.fr"
    },
    {
      "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Toulouse)",
      "country": "France",
      "websiteUrl": "esg.fr"
    },
    {
      "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Tours)",
      "country": "France",
      "websiteUrl": "esg.fr"
    },
    {
      "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Bordeaux)",
      "country": "France",
      "websiteUrl": "esg.fr"
    },
    {
      "instituteName": "ICN International College Paris",
      "country": "France",
      "websiteUrl": "icn-paris.com"
    },
    {
      "instituteName": "Audencia Business School",
      "country": "France",
      "websiteUrl": "audencia.com"
    },
    {
      "instituteName": "Institut Mines-Telecom Business School",
      "country": "France",
      "websiteUrl": "imt-bs.eu"
    },
    {
      "instituteName": "Emlyon business school",
      "country": "France",
      "websiteUrl": "em-lyon.com"
    },
    {
      "instituteName": "Grenoble Ecole de Management",
      "country": "France",
      "websiteUrl": "grenoble-em.com"
    },
    {
      "instituteName": "ESG Ecoles De Commerce - Province (Business School) (Rennes)",
      "country": "France",
      "websiteUrl": "esg.fr"
    },
    {
      "instituteName": "ESG Ecoles De Commerce (Business School) (Paris)",
      "country": "France",
      "websiteUrl": "esg.fr"
    },
    {
      "instituteName": "HETIC (Business School) (Paris)",
      "country": "France",
      "websiteUrl": "hetic.net"
    },
    {
      "instituteName": "lesa Arts & Culture (Applied Arts School) (Paris)",
      "country": "France",
      "websiteUrl": "lesarts-culture.com"
    },
    {
      "instituteName": "Institut Culinaire De France (Applied Arts School) (Bordeaux)",
      "country": "France",
      "websiteUrl": "icf-bordeaux.com"
    },
    {
      "instituteName": "ITM (Applied Arts School) (Paris)",
      "country": "France",
      "websiteUrl": "itmparis.com"
    },
    {
      "instituteName": "LISAA (Applied Arts School) (Paris)",
      "country": "France",
      "websiteUrl": "lisaa.com"
    },
    {
      "instituteName": "LISAA Province (Applied Arts School) (Bordeaux)",
      "country": "France",
      "websiteUrl": "lisaa.com"
    },
    {
      "instituteName": "LISAA Province (Applied Arts School) (Nantes)",
      "country": "France",
      "websiteUrl": "lisaa.com"
    },
    {
      "instituteName": "LISAA Province (Applied Arts School) (Rennes)",
      "country": "France",
      "websiteUrl": "lisaa.com"
    },
    {
      "instituteName": "LISAA Province (Applied Arts School) (Strasbourg)",
      "country": "France",
      "websiteUrl": "lisaa.com"
    },
    {
      "instituteName": "LISAA Province (Applied Arts School) (Toulouse)",
      "country": "France",
      "websiteUrl": "lisaa.com"
    },
    {
      "instituteName": "MBA ESG (Business School) (Paris)",
      "country": "France",
      "websiteUrl": "mba-esg.com"
    },
    {
      "instituteName": "Merkure Business School (Business School) (Aix-en-Provence)",
      "country": "France",
      "websiteUrl": "merkure.com"
    },
    {
      "instituteName": "Narratiiv (Business School) (Paris)",
      "country": "France",
      "websiteUrl": "narratiiv.com"
    },
    {
      "instituteName": "PST&B (Business School) (Paris)",
      "country": "France",
      "websiteUrl": "pstb-paris.com"
    },
    {
      "instituteName": "Strate Ecole De Design (Applied Arts School) (Paris)",
      "country": "France",
      "websiteUrl": "stratedesign.edu"
    },
    {
      "instituteName": "Strate Ecole De Design (Applied Arts School) (Lyon)",
      "country": "France",
      "websiteUrl": "stratedesign.edu"
    },
    {
      "instituteName": "Ecole De Management Applique (EMA) (Paris)",
      "country": "France",
      "websiteUrl": "ema-esc.fr"
    },
    {
      "instituteName": "Berlin School of Business and Innovation (BSBI) (Paris)",
      "country": "France",
      "websiteUrl": "bsbi-paris.com"
    },
    {
      "instituteName": "University of Europe for Applied Sciences",
      "country": "France",
      "websiteUrl": "ue-germany.com"
    },
    {
      "instituteName": "CESINE, School of Design & Business (Santander)",
      "country": "France",
      "websiteUrl": "cesine.com"
    },
    {
      "instituteName": "CESINE, School of Design & Business (Spain)",
      "country": "France",
      "websiteUrl": "cesine.com"
    },
    {
      "instituteName": "EFAP, School of Communication (Paris)",
      "country": "France",
      "websiteUrl": "efap.com"
    },
    {
      "instituteName": "ICART, School of Cultural & Art Management",
      "country": "France",
      "websiteUrl": "icart.fr"
    },
    {
      "instituteName": "Groupe ESC Clermont",
      "country": "France",
      "websiteUrl": "esc-clermont.fr"
    },
    {
      "instituteName": "Groupe IGS (Paris)",
      "country": "France",
      "websiteUrl": "groupeigs.fr"
    },
    {
      "instituteName": "Groupe IGS (Lyonn)",
      "country": "France",
      "websiteUrl": "groupeigs.fr"
    },
    {
      "instituteName": "Groupe IGS (Toulouse)",
      "country": "France",
      "websiteUrl": "groupeigs.fr"
    },
    {
      "instituteName": "ICN Business School (Paris)",
      "country": "France",
      "websiteUrl": "icn-artem.com"
    },
    {
      "instituteName": "ICN Business School (Nancy)",
      "country": "France",
      "websiteUrl": "icn-artem.com"
    },
    {
      "instituteName": "Institut Superieur De Gestion (ISG)",
      "country": "France",
      "websiteUrl": "isg.fr"
    },
    {
      "instituteName": "Institut Superieur D'Electronique De Paris (ISEP) (Paris)",
      "country": "France",
      "websiteUrl": "isep.fr"
    },
    {
      "instituteName": "Ipag Business School (Paris)",
      "country": "France",
      "websiteUrl": "ipag.edu"
    },
    {
      "instituteName": "Ipag Business School (Nice)",
      "country": "France",
      "websiteUrl": "ipag.edu"
    },
    {
      "instituteName": "ISC Paris Business School (Paris)",
      "country": "France",
      "websiteUrl": "iscparis.com"
    },
    {
      "instituteName": "ISC Paris Business School (Orleans)",
      "country": "France",
      "websiteUrl": "iscparis.com"
    },
    {
      "instituteName": "ISTEC, Paris",
      "country": "France",
      "websiteUrl": "istec.fr"
    },
    {
      "instituteName": "Istituto Marangoni (Paris)",
      "country": "France",
      "websiteUrl": "istitutomarangoni.com"
    },
    {
      "instituteName": "KEYCE Business School",
      "country": "France",
      "websiteUrl": "keyce-bs.com"
    },
    {
      "instituteName": "Le Cordon Bleu (Paris)",
      "country": "France",
      "websiteUrl": "cordonbleu.edu"
    },
    {
      "instituteName": "EMLV, Management School), France",
      "country": "France",
      "websiteUrl": "emlv.fr"
    },
    {
      "instituteName": "ESILV, Engineering School). France",
      "country": "France",
      "websiteUrl": "esilv.fr"
    },
    {
      "instituteName": "Montpellier Business School",
      "country": "France",
      "websiteUrl": "montpellier-bs.com"
    },
    {
      "instituteName": "Montpellier Business School (Montpellier)",
      "country": "France",
      "websiteUrl": "montpellier-bs.com"
    },
    {
      "instituteName": "ICN International College (Paris)",
      "country": "France",
      "websiteUrl": "icn-artem.com"
    },
    {
      "instituteName": "NEOMA Business School (Rouen)",
      "country": "France",
      "websiteUrl": "neoma-bs.fr"
    },
    {
      "instituteName": "NEOMA Business School (Paris)",
      "country": "France",
      "websiteUrl": "neoma-bs.fr"
    },
    {
      "instituteName": "NEOMA Business School (Reims)",
      "country": "France",
      "websiteUrl": "neoma-bs.fr"
    },
    {
      "instituteName": "New York Film Academy (NYFA), France",
      "country": "France",
      "websiteUrl": "nyfa.edu"
    },
    {
      "instituteName": "CREA (Communication & Creation School)",
      "country": "France",
      "websiteUrl": "crea.fr"
    },
    {
      "instituteName": "ECE (Engineering School)",
      "country": "France",
      "websiteUrl": "ece.fr"
    },
    {
      "instituteName": "ESCE (Management School)",
      "country": "France",
      "websiteUrl": "esce.fr"
    },
    {
      "instituteName": "HEIP (Political Science & International Relations School)",
      "country": "France",
      "websiteUrl": "heip.fr"
    },
    {
      "instituteName": "INSEEC (Management School) France",
      "country": "France",
      "websiteUrl": "inseec.com"
    },
    {
      "instituteName": "IUM (International University of Monaco) (Management School)",
      "country": "France",
      "websiteUrl": "iumonaco.org"
    },
    {
      "instituteName": "SUP DE PUB (Communication & Creation School)",
      "country": "France",
      "websiteUrl": "supdepub.com"
    },
    {
      "instituteName": "Paris School of Business (PSB) (Paris)",
      "country": "France",
      "websiteUrl": "psb.edu"
    },
    {
      "instituteName": "Association Nouvelle EDC (EDC Paris Business School), France",
      "country": "France",
      "websiteUrl": "edcparis.edu"
    },
    {
      "instituteName": "Ecole De Guerre Economique (EGE), France",
      "country": "France",
      "websiteUrl": "ege.fr"
    },
    {
      "instituteName": "ESLSCA Business School (ESLSCA BS), France",
      "country": "France",
      "websiteUrl": "eslsca.fr"
    },
    {
      "instituteName": "Institut Superieur De Marketing Du Luxe (Sup De Lux), France",
      "country": "France",
      "websiteUrl": "supdelux.com"
    },
    {
      "instituteName": "SAS (SMS), France",
      "country": "France",
      "websiteUrl": "sportsmanagementschool.fr"
    },
    {
      "instituteName": "Sports Management School (SMS), France",
      "country": "France",
      "websiteUrl": "sportsmanagementschool.fr"
    },
    {
      "instituteName": "SKEMA Business School (Grand Paris)",
      "country": "France",
      "websiteUrl": "skema.edu"
    },
    {
      "instituteName": "SKEMA Business School (Lille and Sophia Antipolis)",
      "country": "France",
      "websiteUrl": "skema.edu"
    },
    {
      "instituteName": "Sup'Biotech (Villejuif)",
      "country": "France",
      "websiteUrl": "supbiotech.fr"
    },
    {
      "instituteName": "Sup'Biotech (Paris)",
      "country": "France",
      "websiteUrl": "supbiotech.fr"
    },
    {
      "instituteName": "Toulouse Business School (Paris)",
      "country": "France",
      "websiteUrl": "tbs-education.fr"
    },
    {
      "instituteName": "Toulouse Business School (Toulouse)",
      "country": "France",
      "websiteUrl": "tbs-education.fr"
    },
    {
      "instituteName": "Vatel Bordeaux, France Hotel & Tourism Business School (Cedex)",
      "country": "France",
      "websiteUrl": "vatel.fr"
    },
    {
      "instituteName": "Vatel Bordeaux, France Hotel & Tourism Business School (Bordeaux)",
      "country": "France",
      "websiteUrl": "vatel.fr"
    },
    {
      "instituteName": "Wes-Sup Business School, France",
      "country": "France",
      "websiteUrl": "wes-sup.com"
    },
    {
      "instituteName": "Ecole Supérieure de Design (Troyes)",
      "country": "France",
      "websiteUrl": "esdesign.fr"
    },
    {
      "instituteName": "Ecole Supérieure de Tourisme (Troyes)",
      "country": "France",
      "websiteUrl": "estt.fr"
    },
    {
      "instituteName": "South Champagne Business School (Troyes)",
      "country": "France",
      "websiteUrl": "scbs.fr"
    },
    {
      "instituteName": "Alte University (Tbilisi)",
      "country": "Georgia",
      "websiteUrl": "alte.edu.ge"
    },
    {
      "instituteName": "David Tvildiani Medical University (Tbilisi)",
      "country": "Georgia",
      "websiteUrl": "dtmu.edu.ge"
    },
    {
      "instituteName": "BIMM University (Berlin)",
      "country": "Germany",
      "websiteUrl": "bimm.com"
    },
    {
      "instituteName": "CBS International Business School",
      "country": "Germany",
      "websiteUrl": "cbs.de"
    },
    {
      "instituteName": "Constructor University (Jacobs University) )Bremen)",
      "country": "Germany",
      "websiteUrl": "constructor.university"
    },
    {
      "instituteName": "EBS Universität für Wirtschaft und Recht GmbH (SRH)",
      "country": "Germany",
      "websiteUrl": "ebs.edu"
    },
    {
      "instituteName": "EBS Universitat (Oestrich-Winkel)",
      "country": "Germany",
      "websiteUrl": "ebs.edu"
    },
    {
      "instituteName": "EU Business School (Old Name - European University) (Freiburg)",
      "country": "Germany",
      "websiteUrl": "eu-business-school.com"
    },
    {
      "instituteName": "EU Business School (Old Name - European University) (Munich )",
      "country": "Germany",
      "websiteUrl": "eu-business-school.com"
    },
    {
      "instituteName": "FOM Hochschule",
      "country": "Germany",
      "websiteUrl": "fom.de"
    },
    {
      "instituteName": "Fresenius University of Applied Sciences (Idstein)",
      "country": "Germany",
      "websiteUrl": "fresenius-university.com"
    },
    {
      "instituteName": "Arden University (Berlin)",
      "country": "Germany",
      "websiteUrl": "arden.ac.uk"
    },
    {
      "instituteName": "Berlin School of Business and Innovation (BSBI) (Berlin)",
      "country": "Germany",
      "websiteUrl": "bsbi.de"
    },
    {
      "instituteName": "Berlin School of Business and Innovation (BSBI) (Humburg)",
      "country": "Germany",
      "websiteUrl": "bsbi.de"
    },
    {
      "instituteName": "GISMA Business School",
      "country": "Germany",
      "websiteUrl": "gisma.com"
    },
    {
      "instituteName": "GISMA University of Applied Sciences, Germany",
      "country": "Germany",
      "websiteUrl": "gisma.com"
    },
    {
      "instituteName": "University of Europe for Applied Sciences",
      "country": "Germany",
      "websiteUrl": "ue-germany.com"
    },
    {
      "instituteName": "ICN Business School (Berlin)",
      "country": "Germany",
      "websiteUrl": "icn-artem.com"
    },
    {
      "instituteName": "IGC International Graduate Center - Hochschule (Bremen)",
      "country": "Germany",
      "websiteUrl": "igs-bremen.de"
    },
    {
      "instituteName": "ISL Sprachschule (Koblenz)",
      "country": "Germany",
      "websiteUrl": "isl.de"
    },
    {
      "instituteName": "ISM International School of Management, Germany",
      "country": "Germany",
      "websiteUrl": "ism.de"
    },
    {
      "instituteName": "IU International University of Applied Sciences (IUBH)",
      "country": "Germany",
      "websiteUrl": "iu.org"
    },
    {
      "instituteName": "Karlshochschule International University (Karlsruhe)",
      "country": "Germany",
      "websiteUrl": "karlshochschule.de"
    },
    {
      "instituteName": "Kuhne Logistics University (Humburg)",
      "country": "Germany",
      "websiteUrl": "kuehne-logistics-university.com"
    },
    {
      "instituteName": "Macromedia University of Applied Sciences (Munich)",
      "country": "Germany",
      "websiteUrl": "macromedia.de"
    },
    {
      "instituteName": "Mediadesign Hochschule (MDH University of Applied Sciences",
      "country": "Germany",
      "websiteUrl": "mdh.de"
    },
    {
      "instituteName": "Munich Business School (Munich)",
      "country": "Germany",
      "websiteUrl": "munich-business-school.de"
    },
    {
      "instituteName": "Lancaster University - Leipzig College (LULC) (Leipzig)",
      "country": "Germany",
      "websiteUrl": "lancaster.ac.uk"
    },
    {
      "instituteName": "SRH International College (Heidelberg)",
      "country": "Germany",
      "websiteUrl": "srh-hochschule-heidelberg.de"
    },
    {
      "instituteName": "New European College",
      "country": "Germany",
      "websiteUrl": "neueuropeancollege.de"
    },
    {
      "instituteName": "Northern Institute of Technology Management (NIT) (Hamburg)",
      "country": "Germany",
      "websiteUrl": "nit.edu"
    },
    {
      "instituteName": "PFH Private University of Applied Sciences (Göttingen)",
      "country": "Germany",
      "websiteUrl": "pfh.de"
    },
    {
      "instituteName": "Rheinisches Studienkolleg in Berlin",
      "country": "Germany",
      "websiteUrl": "studienkolleg-berlin.de"
    },
    {
      "instituteName": "Rheinisches Studienkolleg in Bonn",
      "country": "Germany",
      "websiteUrl": "studienkolleg-bonn.de"
    },
    {
      "instituteName": "Rushford Business School (Berlin)",
      "country": "Germany",
      "websiteUrl": "rushford.com"
    },
    {
      "instituteName": "Schiller Language School, Germany",
      "country": "Germany",
      "websiteUrl": "schillerlanguage.com"
    },
    {
      "instituteName": "Schiller Language School (Berlin)",
      "country": "Germany",
      "websiteUrl": "schillerlanguage.com"
    },
    {
      "instituteName": "SRH Berlin University of Applied Sciences, SRH Hochschulen Berlin GmbH",
      "country": "Germany",
      "websiteUrl": "srh-hochschule-berlin.de"
    },
    {
      "instituteName": "Lancaster University Leipzig",
      "country": "Germany",
      "websiteUrl": "lancaster.ac.uk"
    },
    {
      "instituteName": "Schiller International University (Global Education Holding)",
      "country": "Germany",
      "websiteUrl": "schiller.edu"
    },
    {
      "instituteName": "Dresden International University",
      "country": "Germany",
      "websiteUrl": "diu-education.com"
    },
    {
      "instituteName": "Steinbis University",
      "country": "Germany",
      "websiteUrl": "steinbeis-hochschule.de"
    },
    {
      "instituteName": "HKA - Karlsruhe University of Applied Sciences",
      "country": "Germany",
      "websiteUrl": "h-ka.de"
    },
    {
      "instituteName": "Bucerius Law School",
      "country": "Germany",
      "websiteUrl": "bucerius.edu"
    },
    {
      "instituteName": "European School of Management and Technology",
      "country": "Germany",
      "websiteUrl": "esmt.org"
    },
    {
      "instituteName": "University of Mannheim",
      "country": "Germany",
      "websiteUrl": "uni-mannheim.de"
    },
    {
      "instituteName": "SRH University",
      "country": "Germany",
      "websiteUrl": "srh-hochschule.de"
    },
    {
      "instituteName": "UniversitÃ¤t Bayreuth",
      "country": "Germany",
      "websiteUrl": "uni-bayreuth.de"
    },
    {
      "instituteName": "International Psychoanalytic University",
      "country": "Germany",
      "websiteUrl": "ipu-berlin.de"
    },
    {
      "instituteName": "UniversitÃ¤t Bielefeld",
      "country": "Germany",
      "websiteUrl": "uni-bielefeld.de"
    },
    {
      "instituteName": "UniversitÃ¤t Erfurt",
      "country": "Germany",
      "websiteUrl": "uni-erfurt.de"
    },
    {
      "instituteName": "UniversitÃ¤t Greifswald",
      "country": "Germany",
      "websiteUrl": "uni-greifswald.de"
    },
    {
      "instituteName": "UniversitÃ¤t Stuttgart",
      "country": "Germany",
      "websiteUrl": "uni-stuttgart.de"
    },
    {
      "instituteName": "Berlin International University of Applied Sciences",
      "country": "Germany",
      "websiteUrl": "biuas.de"
    },
    {
      "instituteName": "Touro College Berlin",
      "country": "Germany",
      "websiteUrl": "touro.de"
    },
    {
      "instituteName": "SRH Hochschule Heidelberg GmbH",
      "country": "Germany",
      "websiteUrl": "srh-hochschule-heidelberg.de"
    },
    {
      "instituteName": "SRH Hochschule Nordrhein-Westfalen GmbH",
      "country": "Germany",
      "websiteUrl": "srh-hochschule-nrw.de"
    },
    {
      "instituteName": "SRH Wilhelm Löhe Hochschule GmbH",
      "country": "Germany",
      "websiteUrl": "srh-wlh.de"
    },
    {
      "instituteName": "Steinbeis University School of Management and Innovation",
      "country": "Germany",
      "websiteUrl": "steinbeis-summerschool.de"
    },
    {
      "instituteName": "Touro University Berlin (Berlin)",
      "country": "Germany",
      "websiteUrl": "touro-berlin.de"
    },
    {
      "instituteName": "University Targu Mures Medical (Hamburg)",
      "country": "Germany",
      "websiteUrl": "umfst.ro"
    },
    {
      "instituteName": "ACT-The American College of Thessaloniki (Thessaloniki)",
      "country": "Greece",
      "websiteUrl": "act.edu"
    },
    {
      "instituteName": "Budapest Business University (Formerly Budapest Business School) (Budapest)",
      "country": "Hungary",
      "websiteUrl": "uni-bge.hu"
    },
    {
      "instituteName": "Budapest International College (Budapest)",
      "country": "Hungary",
      "websiteUrl": "bic.hu"
    },
    {
      "instituteName": "Budapest Metropolitan University (Budapest)",
      "country": "Hungary",
      "websiteUrl": "metropolitan.hu"
    },
    {
      "instituteName": "Eotvos Lorand University (ELTE University) (Budapest)",
      "country": "Hungary",
      "websiteUrl": "elte.hu"
    },
    {
      "instituteName": "John von Neumann University (Izsáki út 10)",
      "country": "Hungary",
      "websiteUrl": "jnu.edu.hu"
    },
    {
      "instituteName": "John von Neumann University",
      "country": "Hungary",
      "websiteUrl": "jnu.edu.hu"
    },
    {
      "instituteName": "University of Debrecen (Debrecen)",
      "country": "Hungary",
      "websiteUrl": "unideb.hu"
    },
    {
      "instituteName": "Wekerle Business School (Budapest)",
      "country": "Hungary",
      "websiteUrl": "wekerle.edu.hu"
    },
    {
      "instituteName": "Atlantic Technological University (ATU)",
      "country": "Ireland",
      "websiteUrl": "atu.ie"
    },
    {
      "instituteName": "BIMM University, Ireland (Dublin)",
      "country": "Ireland",
      "websiteUrl": "bimm.ie"
    },
    {
      "instituteName": "CCT College (Dublin)",
      "country": "Ireland",
      "websiteUrl": "cct.ie"
    },
    {
      "instituteName": "Dublin City University",
      "country": "Ireland",
      "websiteUrl": "dcu.ie"
    },
    {
      "instituteName": "Holmes Institute Dublin",
      "country": "Ireland",
      "websiteUrl": "holmes.edu"
    },
    {
      "instituteName": "Maynooth University",
      "country": "Ireland",
      "websiteUrl": "mu.ie"
    },
    {
      "instituteName": "Munster Technological University",
      "country": "Ireland",
      "websiteUrl": "mtu.ie"
    },
    {
      "instituteName": "SETU",
      "country": "Ireland",
      "websiteUrl": "setu.ie"
    },
    {
      "instituteName": "St Patrick's Pontifical University",
      "country": "Ireland",
      "websiteUrl": "stpats.ie"
    },
    {
      "instituteName": "Dublin Business School (DBS) (Dublin)",
      "country": "Ireland",
      "websiteUrl": "dbs.ie"
    },
    {
      "instituteName": "Dublin City University (DCU) (Glasnevin)",
      "country": "Ireland",
      "websiteUrl": "dcu.ie"
    },
    {
      "instituteName": "Dublin City University (DCU) (Dublin)",
      "country": "Ireland",
      "websiteUrl": "dcu.ie"
    },
    {
      "instituteName": "Dundalk Institute of Technology (DkIT) (Dundalk)",
      "country": "Ireland",
      "websiteUrl": "dkit.ie"
    },
    {
      "instituteName": "Dundalk Institute of Technology (DkIT)",
      "country": "Ireland",
      "websiteUrl": "dkit.ie"
    },
    {
      "instituteName": "EC English (Dublin)",
      "country": "Ireland",
      "websiteUrl": "ecenglish.com"
    },
    {
      "instituteName": "Technological University Dublin (TU Dublin - TUD) (Old name: Dublin Inst. of Tech. (DIT)) (Dublin)",
      "country": "Ireland",
      "websiteUrl": "tudublin.ie"
    },
    {
      "instituteName": "Galway Business School (Galway)",
      "country": "Ireland",
      "websiteUrl": "galwaybusinessschool.ie"
    },
    {
      "instituteName": "Galway Cultural Institute (Galway)",
      "country": "Ireland",
      "websiteUrl": "galwayculturalinstitute.ie"
    },
    {
      "instituteName": "English Path (Dublin )",
      "country": "Ireland",
      "websiteUrl": "englishpath.com"
    },
    {
      "instituteName": "IBAT College Dublin",
      "country": "Ireland",
      "websiteUrl": "ibat.ie"
    },
    {
      "instituteName": "Griffith College (Dublin)",
      "country": "Ireland",
      "websiteUrl": "griffith.ie"
    },
    {
      "instituteName": "Griffith College (Limerick)",
      "country": "Ireland",
      "websiteUrl": "griffith.ie"
    },
    {
      "instituteName": "Griffith College (Cork)",
      "country": "Ireland",
      "websiteUrl": "griffith.ie"
    },
    {
      "instituteName": "Munster Technological University (Cork)",
      "country": "Ireland",
      "websiteUrl": "mtu.ie"
    },
    {
      "instituteName": "Munster Technological University (Kerry)",
      "country": "Ireland",
      "websiteUrl": "mtu.ie"
    },
    {
      "instituteName": "National College of Ireland (NCIRL) (Dublin)",
      "country": "Ireland",
      "websiteUrl": "ncirl.ie"
    },
    {
      "instituteName": "Shannon College of Hotel Management (Clare)",
      "country": "Ireland",
      "websiteUrl": "shannoncollege.com"
    },
    {
      "instituteName": "South East Technological University (Formerly Waterford Institute of Technology) (Waterford)",
      "country": "Ireland",
      "websiteUrl": "setu.ie"
    },
    {
      "instituteName": "Study Group Ireland ISC University College Dublin (Dublin)",
      "country": "Ireland",
      "websiteUrl": "studygroup.com"
    },
    {
      "instituteName": "Technological University of the Shannon (TUS): (Midlands Midwest)",
      "country": "Ireland",
      "websiteUrl": "tus.ie"
    },
    {
      "instituteName": "Trinity College, (Dublin)",
      "country": "Ireland",
      "websiteUrl": "tcd.ie"
    },
    {
      "instituteName": "University College Dublin (UCD), Ireland, (Territory - UAE) (Dublin)",
      "country": "Ireland",
      "websiteUrl": "ucd.ie"
    },
    {
      "instituteName": "University of Galway (Formely National University of Ireland, Galway) (Galway)",
      "country": "Ireland",
      "websiteUrl": "universityofgalway.ie"
    },
    {
      "instituteName": "University of Limerick (Limerick)",
      "country": "Ireland",
      "websiteUrl": "ul.ie"
    },
    {
      "instituteName": "Accademia Del Lusso (Rome and Milan)",
      "country": "Italy",
      "websiteUrl": "accademiadellusso.com"
    },
    {
      "instituteName": "ADE Italy Schools - Accademia Italiana - (Florence and Rome)",
      "country": "Italy",
      "websiteUrl": "accademiaitaliana.it"
    },
    {
      "instituteName": "ADE Italy Schools - Accademia Italiana - Florence and Rome, Italy",
      "country": "Italy",
      "websiteUrl": "https://www.accademiaitaliana.it"
    },
    {
      "instituteName": "IAAD. Istituto DI Arte Applicata e Design - (Turin & Bologna)",
      "country": "Italy",
      "websiteUrl": "iaad.it"
    },
    {
      "instituteName": "IAAD. Istituto DI Arte Applicata e Design Italy",
      "country": "Italy",
      "websiteUrl": "https://www.iaad.it"
    },
    {
      "instituteName": "Bologna Business School (Bologna)",
      "country": "Italy",
      "websiteUrl": "bbs.unibo.it"
    },
    {
      "instituteName": "Bologna Business School, Italy",
      "country": "Italy",
      "websiteUrl": "https://www.bbs.unibo.it"
    },
    {
      "instituteName": "Domus Academy, Italy",
      "country": "Italy",
      "websiteUrl": "domusacademy.com"
    },
    {
      "instituteName": "European School of Economics (ESE) (Rome)",
      "country": "Italy",
      "websiteUrl": "ese.edu"
    },
    {
      "instituteName": "European School of Economics (ESE) (Florence)",
      "country": "Italy",
      "websiteUrl": "ese.edu"
    },
    {
      "instituteName": "European School of Economics (ESE) (Milan)",
      "country": "Italy",
      "websiteUrl": "ese.edu"
    },
    {
      "instituteName": "IEP Italy",
      "country": "Italy",
      "websiteUrl": "iep.edu"
    },
    {
      "instituteName": "Istituto Marangoni (Milano)",
      "country": "Italy",
      "websiteUrl": "istitutomarangoni.com"
    },
    {
      "instituteName": "Istituto Marangoni (Firenze)",
      "country": "Italy",
      "websiteUrl": "istitutomarangoni.com"
    },
    {
      "instituteName": "Istituto Superiore di Design (Napoli)",
      "country": "Italy",
      "websiteUrl": "isdnapoli.it"
    },
    {
      "instituteName": "Link Campus University (Rome)",
      "country": "Italy",
      "websiteUrl": "linkcampusuniversita.it"
    },
    {
      "instituteName": "NABA (Nuova Accademia di Belle Arti), Italy",
      "country": "Italy",
      "websiteUrl": "naba.it"
    },
    {
      "instituteName": "New York Film Academy (NYFA), Italy",
      "country": "Italy",
      "websiteUrl": "nyfa.edu"
    },
    {
      "instituteName": "Planeta Formacion Y Universidades - Rome Business School, S.R.L. (RBS), Italy",
      "country": "Italy",
      "websiteUrl": "rbs.org"
    },
    {
      "instituteName": "Ferrari Fashion School (Milan)",
      "country": "Italy",
      "websiteUrl": "ferrarifashion.com"
    },
    {
      "instituteName": "Rome University of Fine Arts (Rome)",
      "country": "Italy",
      "websiteUrl": "rufresearch.org"
    },
    {
      "instituteName": "Saint Louis Music Center - College of Music (Rome)",
      "country": "Italy",
      "websiteUrl": "slmc.edu"
    },
    {
      "instituteName": "Scuola Politecnica Di Design (Milan)",
      "country": "Italy",
      "websiteUrl": "spd.luiss.it"
    },
    {
      "instituteName": "Polimi Graduate School of Management (Also known as MIP Politechnico Di Milano) (Milan)",
      "country": "Italy",
      "websiteUrl": "mip.polimi.it"
    },
    {
      "instituteName": "Raffles Milano (Milano)",
      "country": "Italy",
      "websiteUrl": "raffles-milano.it"
    },
    {
      "instituteName": "SAE Institute (Milan)",
      "country": "Italy",
      "websiteUrl": "sae.edu"
    },
    {
      "instituteName": "SAE Institute - Milan, Italy",
      "country": "Italy",
      "websiteUrl": "sae.edu"
    },
    {
      "instituteName": "The American University of Rome, (Rome)",
      "country": "Italy",
      "websiteUrl": "aur.edu"
    },
    {
      "instituteName": "EKA University of Applied Sciences (Riga)",
      "country": "Latvia",
      "websiteUrl": "eka.edu.lv"
    },
    {
      "instituteName": "EKA University of Applied Sciences, Latvia",
      "country": "Latvia",
      "websiteUrl": "eka.edu.lv"
    },
    {
      "instituteName": "American University of Malta",
      "country": "Malta",
      "websiteUrl": "aum.edu.mt"
    },
    {
      "instituteName": "Ascencia Malta",
      "country": "Malta",
      "websiteUrl": "ascencia.edu.mt"
    },
    {
      "instituteName": "EC English, Malta",
      "country": "Malta",
      "websiteUrl": "ecenglish.com"
    },
    {
      "instituteName": "English Domain, Malta",
      "country": "Malta",
      "websiteUrl": "englishdomain.com.mt"
    },
    {
      "instituteName": "European College of Innovation, Malta",
      "country": "Malta",
      "websiteUrl": "europeancollege.edu.mt"
    },
    {
      "instituteName": "GBS (Global Business Studies)",
      "country": "Malta",
      "websiteUrl": "gbs.edu.mt"
    },
    {
      "instituteName": "Global College Malta (Smartcity)",
      "country": "Malta",
      "websiteUrl": "global.edu.mt"
    },
    {
      "instituteName": "Global Education (GEDU) - English Path, Malta",
      "country": "Malta",
      "websiteUrl": "gedu.edu.mt"
    },
    {
      "instituteName": "IDEA Academy, Malta",
      "country": "Malta",
      "websiteUrl": "idea.edu.mt"
    },
    {
      "instituteName": "International Institute by Malta",
      "country": "Malta",
      "websiteUrl": "iim.edu.mt"
    },
    {
      "instituteName": "Institute of Tourism Studies",
      "country": "Malta",
      "websiteUrl": "its.edu.mt"
    },
    {
      "instituteName": "International European University",
      "country": "Malta",
      "websiteUrl": "ieumalta.org"
    },
    {
      "instituteName": "Learnkey Training Institute (Birkirkara)",
      "country": "Malta",
      "websiteUrl": "learnkey.edu.mt"
    },
    {
      "instituteName": "London School of Commerce, Malta",
      "country": "Malta",
      "websiteUrl": "lscmalta.com"
    },
    {
      "instituteName": "Malita International College",
      "country": "Malta",
      "websiteUrl": "malitacollege.com"
    },
    {
      "instituteName": "MCAST Bespoke",
      "country": "Malta",
      "websiteUrl": "mcast.edu.mt"
    },
    {
      "instituteName": "MCAST General Courses",
      "country": "Malta",
      "websiteUrl": "mcast.edu.mt"
    },
    {
      "instituteName": "Mediterian University of Valetta",
      "country": "Malta",
      "websiteUrl": "um.edu.mt"
    },
    {
      "instituteName": "University of Malta",
      "country": "Malta",
      "websiteUrl": "um.edu.mt"
    },
    {
      "instituteName": "Middlesex University - Mauritius",
      "country": "Mauritius",
      "websiteUrl": "mdx.ac.uk"
    },
    {
      "instituteName": "EGE Rabat, Morocco",
      "country": "Morocco",
      "websiteUrl": "ege.ma"
    },
    {
      "instituteName": "ESLSCA Rabat, Morocco",
      "country": "Morocco",
      "websiteUrl": "eslsca.ac.ma"
    },
    {
      "instituteName": "Ostelea Rabat, Morocco",
      "country": "Morocco",
      "websiteUrl": "ostelea.ma"
    },
    {
      "instituteName": "SMS Rabat, Morocco",
      "country": "Morocco",
      "websiteUrl": "sms.ma"
    },
    {
      "instituteName": "CEG Netherlands (Amsterdam)",
      "country": "Netherlands",
      "websiteUrl": "ceg.nl"
    },
    {
      "instituteName": "EIT InnoEnergy Master School, Netherlands",
      "country": "Netherlands",
      "websiteUrl": "innoenergy.com"
    },
    {
      "instituteName": "IC University of Applied Sciences (Amsterdam)",
      "country": "Netherlands",
      "websiteUrl": "ic.edu"
    },
    {
      "instituteName": "The Hague Pathway College - The Hague University of Applied Sciences",
      "country": "Netherlands",
      "websiteUrl": "thehagueuniversity.com"
    },
    {
      "instituteName": "TPC - Twente Pathway College University of Twente",
      "country": "Netherlands",
      "websiteUrl": "utwente.nl"
    },
    {
      "instituteName": "SRH Haarlem University of Applied Sciences (Formerly Haarlem Campus, Institute for Higher Education) ( Amsterdam)",
      "country": "Netherlands",
      "websiteUrl": "srh-campus.de"
    },
    {
      "instituteName": "Tio University of Applied Sciences (TIO Business School), Netherlands",
      "country": "Netherlands",
      "websiteUrl": "tio.nl"
    },
    {
      "instituteName": "Wittenborg University of Applied Sciences, Netherlands",
      "country": "Netherlands",
      "websiteUrl": "wittenborg.eu"
    },
    {
      "instituteName": "Coventry University (Wroclaw)",
      "country": "Poland",
      "websiteUrl": "coventry.pl"
    },
    {
      "instituteName": "Kozminski University (Warsaw)",
      "country": "Poland",
      "websiteUrl": "kozminski.edu.pl"
    },
    {
      "instituteName": "Lazarski University (warsaw)",
      "country": "Poland",
      "websiteUrl": "lazarski.pl"
    },
    {
      "instituteName": "Olsztyn University",
      "country": "Poland",
      "websiteUrl": "uwm.edu.pl"
    },
    {
      "instituteName": "University of Economics and Human Sciences in Warsaw",
      "country": "Poland",
      "websiteUrl": "ue.waw.pl"
    },
    {
      "instituteName": "University of Technology and Arts (Warsaw)",
      "country": "Poland",
      "websiteUrl": "wszia.edu.pl"
    },
    {
      "instituteName": "University WSB Merito In Poznan (Poznań and Chorzów)",
      "country": "Poland",
      "websiteUrl": "wsb.pl"
    },
    {
      "instituteName": "Vistula University, Poland",
      "country": "Poland",
      "websiteUrl": "vistula.edu.pl"
    },
    {
      "instituteName": "Warsaw University of Business",
      "country": "Poland",
      "websiteUrl": "wse.edu.pl"
    },
    {
      "instituteName": "Warsaw University of Economics (Warsaw)",
      "country": "Poland",
      "websiteUrl": "wse.edu.pl"
    },
    {
      "instituteName": "Warsaw University of Humanities",
      "country": "Poland",
      "websiteUrl": "wsh.edu.pl"
    },
    {
      "instituteName": "Wroclaw Business University of Applied Sciences",
      "country": "Poland",
      "websiteUrl": "wbw.edu.pl"
    },
    {
      "instituteName": "ISCTE Executive Education (Lisboa)",
      "country": "Portugal",
      "websiteUrl": "iscte.pt"
    },
    {
      "instituteName": "Romanian American University (Bucharest)",
      "country": "Romania",
      "websiteUrl": "rau.ro"
    },
    {
      "instituteName": "Ascencia",
      "country": "Spain",
      "websiteUrl": "ascencia.education"
    },
    {
      "instituteName": "Campus Spain (Vigo)",
      "country": "Spain",
      "websiteUrl": "campusspain.com"
    },
    {
      "instituteName": "CEDEU - Centro de Estudios Universitarios",
      "country": "Spain",
      "websiteUrl": "cedeu.es"
    },
    {
      "instituteName": "ENAE International Business School (Murcia)",
      "country": "Spain",
      "websiteUrl": "enae.es"
    },
    {
      "instituteName": "EU Business School (Old Name - European University) (Barcelona)",
      "country": "Spain",
      "websiteUrl": "euruni.edu"
    },
    {
      "instituteName": "European School of Economics (ESE) (Madrid)",
      "country": "Spain",
      "websiteUrl": "ese.eu"
    },
    {
      "instituteName": "Fundacio Universitat Autonoma De Barcelona and UAB Languages (Barcelona)",
      "country": "Spain",
      "websiteUrl": "uab.cat"
    },
    {
      "instituteName": "Berlin School of Business and Innovation (BSBI) (Barcelona)",
      "country": "Spain",
      "websiteUrl": "bsbi.edu"
    },
    {
      "instituteName": "IHMGS - International Hotel Management & Gastronomy School",
      "country": "Spain",
      "websiteUrl": "ihmgs.es"
    },
    {
      "instituteName": "Marbella International University Centre (MIUC) (Marbella)",
      "country": "Spain",
      "websiteUrl": "miuc.org"
    },
    {
      "instituteName": "Marbella International University Centre (MIUC) (Malaga)",
      "country": "Spain",
      "websiteUrl": "miuc.org"
    },
    {
      "instituteName": "EAE Business School (Campus Barcelona Y Madrid), Spain",
      "country": "Spain",
      "websiteUrl": "eae.es"
    },
    {
      "instituteName": "Escuela Superior De Diseño De Barcelona (ESDESIGN), Spain",
      "country": "Spain",
      "websiteUrl": "esdesignbarcelona.com"
    },
    {
      "instituteName": "IFP Innovación En Formación Profesional (IFP), Spain",
      "country": "Spain",
      "websiteUrl": "ifp.es"
    },
    {
      "instituteName": "OBS Business School, Spain",
      "country": "Spain",
      "websiteUrl": "obs.edu.es"
    },
    {
      "instituteName": "Sports Management School (SMS Barcelona), Spain",
      "country": "Spain",
      "websiteUrl": "sms.edu"
    },
    {
      "instituteName": "The Ostelea, School of Tourism & Hospitality (Ostelea Campus Barcelona Y Madrid), Spain Spain",
      "country": "Spain",
      "websiteUrl": "ostelea.com"
    },
    {
      "instituteName": "Three Points, Spain",
      "country": "Spain",
      "websiteUrl": "threepoints.com"
    },
    {
      "instituteName": "Uniba Centro Universitario Internacional De Barcelona, Spain",
      "country": "Spain",
      "websiteUrl": "uniba.es"
    },
    {
      "instituteName": "Universidad Internacional De Valencia (VIU), Spain",
      "country": "Spain",
      "websiteUrl": "viu.es"
    },
    {
      "instituteName": "SBS Swiss Business School Barcelona (Barcelona)",
      "country": "Spain",
      "websiteUrl": "sbs.edu"
    },
    {
      "instituteName": "Toulouse Business School (Barcelona)",
      "country": "Spain",
      "websiteUrl": "tbs-education.es"
    },
    {
      "instituteName": "Universidad Catolica San Antonio De Murcia (UCAM) (Murcia)",
      "country": "Spain",
      "websiteUrl": "ucam.edu"
    },
    {
      "instituteName": "Universidad Europea (Spain)",
      "country": "Spain",
      "websiteUrl": "universidadeuropea.com"
    },
    {
      "instituteName": "Universidad Europea De Canarias, Spain (UEC)",
      "country": "Spain",
      "websiteUrl": "universidadeuropea.com"
    },
    {
      "instituteName": "Universidad Europea De Madrid, Spain (UEM)",
      "country": "Spain",
      "websiteUrl": "uem.es"
    },
    {
      "instituteName": "Universidad Europea De Valencia, Spain (UEV)",
      "country": "Spain",
      "websiteUrl": "uev.edu"
    },
    {
      "instituteName": "Jönköping University (Jönköping)",
      "country": "Sweden",
      "websiteUrl": "ju.se"
    },
    {
      "instituteName": "Linnaeus University (Only India) (Vaxjo and Kalmar)",
      "country": "Sweden",
      "websiteUrl": "lnu.se"
    },
    {
      "instituteName": "Dalarna University",
      "country": "Sweden",
      "websiteUrl": "du.se"
    },
    {
      "instituteName": "Halmstad University",
      "country": "Sweden",
      "websiteUrl": "hh.se"
    },
    {
      "instituteName": "Linnaeus University (Except India, Bangladesh, Pakistan and China)",
      "country": "Sweden",
      "websiteUrl": "lnu.se"
    },
    {
      "instituteName": "University of Skovde",
      "country": "Sweden",
      "websiteUrl": "hkr.se"
    },
    {
      "instituteName": "University West, (Trollhättan)",
      "country": "Sweden",
      "websiteUrl": "hv.se"
    },
    {
      "instituteName": "BHMS - Business & Hotel Management School (Luzern)",
      "country": "Switzerland",
      "websiteUrl": "bhms.ch"
    },
    {
      "instituteName": "BHMS - Business & Hotel Management School (Switz)",
      "country": "Switzerland",
      "websiteUrl": "bhms.ch"
    },
    {
      "instituteName": "EF International Academy Ltd., Switzerland (Zurich)",
      "country": "Switzerland",
      "websiteUrl": "ef.com"
    },
    {
      "instituteName": "EF International Academy Ltd., Switzerland",
      "country": "Switzerland",
      "websiteUrl": "ef.com"
    },
    {
      "instituteName": "EU Business School (Old Name - European University) (Geneva)",
      "country": "Switzerland",
      "websiteUrl": "euruni.edu"
    },
    {
      "instituteName": "EU Business School (Old Name - European University) (Montreux)",
      "country": "Switzerland",
      "websiteUrl": "euruni.edu"
    },
    {
      "instituteName": "Rushford Business School (Lucerne)",
      "country": "Switzerland",
      "websiteUrl": "rushford.ch"
    },
    {
      "instituteName": "Cesar Ritz Colleges (Brig)",
      "country": "Switzerland",
      "websiteUrl": "cesarritzcolleges.edu"
    },
    {
      "instituteName": "Culinary Arts Academy",
      "country": "Switzerland",
      "websiteUrl": "culinaryarts.ch"
    },
    {
      "instituteName": "HIM Business School (Hotel Institute Montreux) (Montreux)",
      "country": "Switzerland",
      "websiteUrl": "him.ch"
    },
    {
      "instituteName": "Swiss Hotel Management School (SHMS)",
      "country": "Switzerland",
      "websiteUrl": "shms.ch"
    },
    {
      "instituteName": "Amity Global Business School",
      "country": "Singapore",
      "websiteUrl": "amity.edu.sg"
    },
    {
      "instituteName": "Amity Global Institute",
      "country": "Singapore",
      "websiteUrl": "amity.edu.sg"
    },
    {
      "instituteName": "At-Sunrice GlobalChef Academy",
      "country": "Singapore",
      "websiteUrl": "atsunrice.edu.sg"
    },
    {
      "instituteName": "James Cook University (JCU)",
      "country": "Singapore",
      "websiteUrl": "jcu.edu.au"
    },
    {
      "instituteName": "KAPLAN Higher Education Academy",
      "country": "Singapore",
      "websiteUrl": "kaplan.com.sg"
    },
    {
      "instituteName": "Management Development Institute of Singapore (MDIS)",
      "country": "Singapore",
      "websiteUrl": "mdis.edu.sg"
    },
    {
      "instituteName": "Nanyang Institute of Management (NIM)",
      "country": "Singapore",
      "websiteUrl": "nim.edu.sg"
    },
    {
      "instituteName": "Curtin University",
      "country": "Singapore",
      "websiteUrl": "curtin.edu.au"
    },
    {
      "instituteName": "PSB Academy Pte Ltd",
      "country": "Singapore",
      "websiteUrl": "psbacademy.edu.sg"
    },
    {
      "instituteName": "Raffles College of Higher Education",
      "country": "Singapore",
      "websiteUrl": "raffles.edu.sg"
    },
    {
      "instituteName": "SP Jain School of Global Management",
      "country": "Singapore",
      "websiteUrl": "spjain.org"
    },
    {
      "instituteName": "William Angliss Institute",
      "country": "Singapore",
      "websiteUrl": "angliss.edu.au"
    },
    {
      "instituteName": "Acsenda College",
      "country": "Canada",
      "websiteUrl": "https://www.acsenda.com"
    },
    {
      "instituteName": "Adler University",
      "country": "Canada",
      "websiteUrl": "https://www.adler.edu"
    },
    {
      "instituteName": "Algonquin College",
      "country": "Canada",
      "websiteUrl": "https://www.algonquincollege.com"
    },
    {
      "instituteName": "British Columbia Institute of Technology (BCIT)",
      "country": "Canada",
      "websiteUrl": "https://www.bcit.ca"
    },
    {
      "instituteName": "Brock University",
      "country": "Canada",
      "websiteUrl": "https://brocku.ca"
    },
    {
      "instituteName": "Cambrian College",
      "country": "Canada",
      "websiteUrl": "https://cambriancollege.ca"
    },
    {
      "instituteName": "Cape Breton University (CBU)",
      "country": "Canada",
      "websiteUrl": "https://www.cbu.ca"
    },
    {
      "instituteName": "Capilano University",
      "country": "Canada",
      "websiteUrl": "https://capilanou.ca"
    },
    {
      "instituteName": "College of Rockies",
      "country": "Canada",
      "websiteUrl": "https://cotr.bc.ca"
    },
    {
      "instituteName": "Conestoga College",
      "country": "Canada",
      "websiteUrl": "https://www.conestogac.on.ca"
    },
    {
      "instituteName": "Douglas College",
      "country": "Canada",
      "websiteUrl": "https://www.douglascollege.ca"
    },
    {
      "instituteName": "Durham College",
      "country": "Canada",
      "websiteUrl": "https://durhamcollege.ca"
    },
    {
      "instituteName": "Fanshawe College",
      "country": "Canada",
      "websiteUrl": "https://www.fanshawec.ca"
    },
    {
      "instituteName": "George Brown College",
      "country": "Canada",
      "websiteUrl": "https://www.georgebrown.ca"
    },
    {
      "instituteName": "Humber College",
      "country": "Canada",
      "websiteUrl": "https://humber.ca"
    },
    {
      "instituteName": "Insignia College",
      "country": "Canada",
      "websiteUrl": "https://insigniacollege.com"
    },
    {
      "instituteName": "International College of Manitoba (ICM) to University of Manitoba",
      "country": "Canada",
      "websiteUrl": "https://www.icmanitoba.ca"
    },
    {
      "instituteName": "Kings University College @ University of Western Ontario",
      "country": "Canada",
      "websiteUrl": "https://www.kings.uwo.ca"
    },
    {
      "instituteName": "Kwantlen Polytechnic University",
      "country": "Canada",
      "websiteUrl": "https://www.kpu.ca"
    },
    {
      "instituteName": "The King's University",
      "country": "Canada",
      "websiteUrl": "https://www.kingsu.ca"
    },
    {
      "instituteName": "Lakehead University",
      "country": "Canada",
      "websiteUrl": "https://www.lakeheadu.ca"
    },
    {
      "instituteName": "Loyalist College",
      "country": "Canada",
      "websiteUrl": "https://www.loyalistcollege.com"
    },
    {
      "instituteName": "Mount Allison University",
      "country": "Canada",
      "websiteUrl": "https://www.mta.ca"
    },
    {
      "instituteName": "Northeastern University",
      "country": "Canada",
      "websiteUrl": "https://www.northeastern.edu"
    },
    {
      "instituteName": "NorQuest College",
      "country": "Canada",
      "websiteUrl": "https://www.norquest.ca"
    },
    {
      "instituteName": "Olds College of Agriculture and Technology",
      "country": "Canada",
      "websiteUrl": "https://www.oldscollege.ca"
    },
    {
      "instituteName": "Ontario Tech University",
      "country": "Canada",
      "websiteUrl": "https://ontariotechu.ca"
    },
    {
      "instituteName": "Queen's University",
      "country": "Canada",
      "websiteUrl": "https://www.queensu.ca"
    },
    {
      "instituteName": "Toronto Metropolitan University (Formerly; Ryerson University)",
      "country": "Canada",
      "websiteUrl": "https://www.torontomu.ca"
    },
    {
      "instituteName": "Toronto Metropolitan University International College (Formerly, Ryerson University International College) to Toronto Metropolitan University",
      "country": "Canada",
      "websiteUrl": "https://www.torontomuic.ca"
    },
    {
      "instituteName": "Saskatchewan Polytechnic",
      "country": "Canada",
      "websiteUrl": "https://saskpolytech.ca"
    },
    {
      "instituteName": "Seneca College",
      "country": "Canada",
      "websiteUrl": "https://www.senecacollege.ca"
    },
    {
      "instituteName": "Sheridan College",
      "country": "Canada",
      "websiteUrl": "https://www.sheridancollege.ca"
    },
    {
      "instituteName": "Southern Alberta Institute of Technology (SAIT)",
      "country": "Canada",
      "websiteUrl": "https://www.sait.ca"
    },
    {
      "instituteName": "Suncrest College",
      "country": "Canada",
      "websiteUrl": "https://www.suncrestcollege.ca"
    },
    {
      "instituteName": "Sir Wilfrid Laurier School Board",
      "country": "Canada",
      "websiteUrl": "https://www.swlauriersb.qc.ca"
    },
    {
      "instituteName": "St. Lawrence College - Alpha College of Business & Technology",
      "country": "Canada",
      "websiteUrl": "https://www.alphacollege.ca"
    },
    {
      "instituteName": "Thompson Rivers University",
      "country": "Canada",
      "websiteUrl": "https://www.tru.ca"
    },
    {
      "instituteName": "Fleming College, Toronto",
      "country": "Canada",
      "websiteUrl": "https://flemingcollege.ca"
    },
    {
      "instituteName": "Trent University",
      "country": "Canada",
      "websiteUrl": "https://www.trentu.ca"
    },
    {
      "instituteName": "University of Alberta",
      "country": "Canada",
      "websiteUrl": "https://www.ualberta.ca"
    },
    {
      "instituteName": "University of Guelph",
      "country": "Canada",
      "websiteUrl": "https://www.uoguelph.ca"
    },
    {
      "instituteName": "University of Lethbridge",
      "country": "Canada",
      "websiteUrl": "https://www.uleth.ca"
    },
    {
      "instituteName": "University of Manitoba",
      "country": "Canada",
      "websiteUrl": "https://umanitoba.ca"
    },
    {
      "instituteName": "University of Niagara Falls",
      "country": "Canada",
      "websiteUrl": "https://unfcanada.ca"
    },
    {
      "instituteName": "University of New Brunswick",
      "country": "Canada",
      "websiteUrl": "https://www.unb.ca"
    },
    {
      "instituteName": "University of Northern British Columbia (UNBC)",
      "country": "Canada",
      "websiteUrl": "https://www.unbc.ca"
    },
    {
      "instituteName": "University of Waterloo",
      "country": "Canada",
      "websiteUrl": "https://uwaterloo.ca"
    },
    {
      "instituteName": "Wilfrid Laurier International College to Wilfrid Laurier University",
      "country": "Canada",
      "websiteUrl": "https://laurieric.ca"
    },
    {
      "instituteName": "Academy of Learning Career College, Scarborough",
      "country": "Canada",
      "websiteUrl": "https://www.academyoflearning.com"
    },
    {
      "instituteName": "Ascent College Of Technology",
      "country": "Canada",
      "websiteUrl": "https://www.ascentcollege.ca"
    },
    {
      "instituteName": "Aviron Quebec Technical College",
      "country": "Canada",
      "websiteUrl": "https://www.avirontech.com"
    },
    {
      "instituteName": "Bow Valley College",
      "country": "Canada",
      "websiteUrl": "https://bowvalleycollege.ca"
    },
    {
      "instituteName": "Cambrian @ Hanson",
      "country": "Canada",
      "websiteUrl": "https://cambriancollege.ca"
    },
    {
      "instituteName": "Cape Breton University",
      "country": "Canada",
      "websiteUrl": "https://www.cbu.ca"
    },
    {
      "instituteName": "Cégep de la Gaspésie et des Îles",
      "country": "Canada",
      "websiteUrl": "https://cegepgim.ca"
    },
    {
      "instituteName": "Cégep Marie-Victorin",
      "country": "Canada",
      "websiteUrl": "https://www.collegemv.qc.ca"
    },
    {
      "instituteName": "Columbia College",
      "country": "Canada",
      "websiteUrl": "https://www.columbiacollege.ca"
    },
    {
      "instituteName": "Conestoga College Institute of Technology and Advanced Learning",
      "country": "Canada",
      "websiteUrl": "https://www.conestogac.on.ca"
    },
    {
      "instituteName": "Crandall University",
      "country": "Canada",
      "websiteUrl": "https://www.crandallu.ca"
    },
    {
      "instituteName": "DEA Canadian College",
      "country": "Canada",
      "websiteUrl": "https://www.deacollege.ca"
    },
    {
      "instituteName": "Georgian College of Applied Arts and Technology",
      "country": "Canada",
      "websiteUrl": "https://www.georgiancollege.ca"
    },
    {
      "instituteName": "Justice Institute of British Columbia",
      "country": "Canada",
      "websiteUrl": "https://www.jibc.ca"
    },
    {
      "instituteName": "Kwantlen Polytechnic Universit",
      "country": "Canada",
      "websiteUrl": "https://www.kpu.ca"
    },
    {
      "instituteName": "LaSalle College",
      "country": "Canada",
      "websiteUrl": "https://www.lasallecollege.com"
    },
    {
      "instituteName": "Matrix College Of Management Technology And Healthcare",
      "country": "Canada",
      "websiteUrl": "https://www.matrixcollege.ca"
    },
    {
      "instituteName": "Mount Saint Vincent University",
      "country": "Canada",
      "websiteUrl": "https://www.msvu.ca"
    },
    {
      "instituteName": "New York Institute of Technology - Vancouver",
      "country": "Canada",
      "websiteUrl": "https://www.nyit.edu/vancouver"
    },
    {
      "instituteName": "Niagara College",
      "country": "Canada",
      "websiteUrl": "https://www.niagaracollege.ca"
    },
    {
      "instituteName": "Pacific Coast Community College",
      "country": "Canada",
      "websiteUrl": "https://www.pacificcoastcommunitycollege.com"
    },
    {
      "instituteName": "Pacific Link College",
      "country": "Canada",
      "websiteUrl": "https://www.plvan.com"
    },
    {
      "instituteName": "St. Clair College of Applied Arts and Technology",
      "country": "Canada",
      "websiteUrl": "https://www.stclaircollege.ca"
    },
    {
      "instituteName": "St. Francis Xavier University",
      "country": "Canada",
      "websiteUrl": "https://www.stfx.ca"
    },
    {
      "instituteName": "St. Lawrence College",
      "country": "Canada",
      "websiteUrl": "https://www.stlawrencecollege.ca"
    },
    {
      "instituteName": "University Canada West",
      "country": "Canada",
      "websiteUrl": "https://www.ucanwest.ca"
    },
    {
      "instituteName": "University of Northern British Columbia",
      "country": "Canada",
      "websiteUrl": "https://www.unbc.ca"
    },
    {
      "instituteName": "University of Prince Edward Island",
      "country": "Canada",
      "websiteUrl": "https://www.upei.ca"
    },
    {
      "instituteName": "University of Regina",
      "country": "Canada",
      "websiteUrl": "https://www.uregina.ca"
    },
    {
      "instituteName": "University of the Fraser Valley",
      "country": "Canada",
      "websiteUrl": "https://www.ufv.ca"
    },
    {
      "instituteName": "Vancouver Film School",
      "country": "Canada",
      "websiteUrl": "https://vfs.edu"
    },
    {
      "instituteName": "University of Niagara Falls Canada",
      "country": "Canada",
      "websiteUrl": "https://unfcanada.ca"
    },
    {
      "instituteName": "University of Victoria",
      "country": "Canada",
      "websiteUrl": "https://www.uvic.ca"
    },
    {
      "instituteName": "Fraser International College",
      "country": "Canada",
      "websiteUrl": "https://www.fraseric.ca"
    },
    {
      "instituteName": "International College of Manitoba",
      "country": "Canada",
      "websiteUrl": "https://www.icmanitoba.ca"
    },
    {
      "instituteName": "Toronto Metropolitan University International College",
      "country": "Canada",
      "websiteUrl": "https://www.torontomuic.ca"
    },
    {
      "instituteName": "ULethbridge International College Calgary",
      "country": "Canada",
      "websiteUrl": "https://www.ulethbridge.ca"
    },
    {
      "instituteName": "Wilfrid Laurier International College",
      "country": "Canada",
      "websiteUrl": "https://www.laurieric.ca"
    },
    {
      "instituteName": "Acadia University",
      "country": "Canada",
      "websiteUrl": "https://www2.acadiau.ca"
    },
    {
      "instituteName": "Great Plains College",
      "country": "Canada",
      "websiteUrl": "https://www.greatplainscollege.ca"
    },
    {
      "instituteName": "Lakeland College",
      "country": "Canada",
      "websiteUrl": "https://www.lakelandcollege.ca"
    },
    {
      "instituteName": "Nipissing University",
      "country": "Canada",
      "websiteUrl": "https://www.nipissingu.ca"
    },
    {
      "instituteName": "North West College",
      "country": "Canada",
      "websiteUrl": "https://www.northwestcollege.ca"
    },
    {
      "instituteName": "Northern Lights College",
      "country": "Canada",
      "websiteUrl": "https://www.nlc.bc.ca"
    },
    {
      "instituteName": "Selkirk College",
      "country": "Canada",
      "websiteUrl": "https://selkirk.ca"
    },
    {
      "instituteName": "St. Thomas University",
      "country": "Canada",
      "websiteUrl": "https://www.stu.ca"
    },
    {
      "instituteName": "Alexander College",
      "country": "Canada",
      "websiteUrl": "https://alexandercollege.ca"
    },
    {
      "instituteName": "Braemar College",
      "country": "Canada",
      "websiteUrl": "https://www.braemarcollege.com"
    },
    {
      "instituteName": "Canadian College",
      "country": "Canada",
      "websiteUrl": "https://www.canadiancollege.com"
    },
    {
      "instituteName": "Coquitlam College",
      "country": "Canada",
      "websiteUrl": "https://www.coquitlamcollege.com"
    },
    {
      "instituteName": "Fleming College Toronto",
      "country": "Canada",
      "websiteUrl": "https://flemingcollege.ca"
    },
    {
      "instituteName": "Loyalist College of Applied Arts and Technology",
      "country": "Canada",
      "websiteUrl": "https://www.loyalistcollege.com"
    },
    {
      "instituteName": "McKenzie College",
      "country": "Canada",
      "websiteUrl": "https://mckenzie.edu.au"
    },
    {
      "instituteName": "Niagara College Toronto",
      "country": "Canada",
      "websiteUrl": "https://www.niagaracollegetoronto.ca"
    },
    {
      "instituteName": "North Island College",
      "country": "Canada",
      "websiteUrl": "https://www.nic.bc.ca"
    },
    {
      "instituteName": "Sheridan College Institute of Technology and Advanced Learning",
      "country": "Canada",
      "websiteUrl": "https://www.sheridancollege.ca"
    },
    {
      "instituteName": "Sprott Shaw College",
      "country": "Canada",
      "websiteUrl": "https://sprottshaw.com"
    },
    {
      "instituteName": "Trebas Institute",
      "country": "Canada",
      "websiteUrl": "https://www.trebas.com"
    },
    {
      "instituteName": "Trinity Western University",
      "country": "Canada",
      "websiteUrl": "https://www.twu.ca"
    },
    {
      "instituteName": "University of Windsor",
      "country": "Canada",
      "websiteUrl": "https://www.uwindsor.ca"
    },
    {
      "instituteName": "Vancouver Community College",
      "country": "Canada",
      "websiteUrl": "https://www.vcc.ca"
    },
    {
      "instituteName": "Vancouver Island University",
      "country": "Canada",
      "websiteUrl": "https://www.viu.ca"
    },
    {
      "instituteName": "Raffles Design Institute (Jakarta)",
      "country": "Indonesia",
      "websiteUrl": ""
    },
    {
      "instituteName": "Kudan Institute of Japanese Language & Culture (Tokyo)",
      "country": "Japan",
      "websiteUrl": ""
    },
    {
      "instituteName": "Le Cordon Bleu (Tokyo)",
      "country": "Japan",
      "websiteUrl": ""
    },
    {
      "instituteName": "Heriot Watt University (Putrajaya)",
      "country": "Malaysia",
      "websiteUrl": "https://www.hw.ac.uk/malaysia"
    },
    {
      "instituteName": "Le Cordon Bleu, Malaysia",
      "country": "Malaysia",
      "websiteUrl": "https://www.cordonbleu.edu/malaysia"
    },
    {
      "instituteName": "Raffles American School (Iskander)",
      "country": "Malaysia",
      "websiteUrl": "https://raffles-american-school.edu.my"
    },
    {
      "instituteName": "Raffles College of Higher Education (Kuala Lumpur)",
      "country": "Malaysia",
      "websiteUrl": "https://www.raffles.edu.my"
    },
    {
      "instituteName": "Raffles University (Iskandar Puteri)",
      "country": "Malaysia",
      "websiteUrl": "https://raffles-university.edu.my"
    },
    {
      "instituteName": "University of Nottingham",
      "country": "Malaysia",
      "websiteUrl": "https://www.nottingham.edu.my"
    },
    {
      "instituteName": "University of Wollongong (UOW) (Glenmarie)",
      "country": "Malaysia",
      "websiteUrl": "https://www.uow.edu.my"
    },
    {
      "instituteName": "University of Wollongong (UOW) (George Town)",
      "country": "Malaysia",
      "websiteUrl": "https://www.uow.edu.my"
    },
    {
      "instituteName": "University of Wollongong (UOW) (Batu Kawan)",
      "country": "Malaysia",
      "websiteUrl": "https://www.uow.edu.my"
    },
    {
      "instituteName": "ATMC (Australian Technical & Management Colleges) - Federation University",
      "country": "Australia",
      "websiteUrl": "https://atmc.edu.au"
    },
    {
      "instituteName": "Bond University",
      "country": "Australia",
      "websiteUrl": "https://bond.edu.au"
    },
    {
      "instituteName": "Charles Sturt University Sydney",
      "country": "Australia",
      "websiteUrl": "https://www.csu.edu.au"
    },
    {
      "instituteName": "Deakin College to Deakin University",
      "country": "Australia",
      "websiteUrl": "https://www.deakincollege.edu.au"
    },
    {
      "instituteName": "Edith Cowan College to Edith Cowan University",
      "country": "Australia",
      "websiteUrl": "https://www.edithcowancollege.edu.au"
    },
    {
      "instituteName": "Eynesbury College to UNISA or University of",
      "country": "Australia",
      "websiteUrl": "https://www.eynesbury.navitas.com"
    },
    {
      "instituteName": "Griffith College to Griffith University",
      "country": "Australia",
      "websiteUrl": "https://www.griffithcollege.edu.au"
    },
    {
      "instituteName": "La Trobe College to La Trobe University, Melbourne",
      "country": "Australia",
      "websiteUrl": "https://www.latrobecollege.edu.au"
    },
    {
      "instituteName": "La Trobe College to La Trobe University Sydney",
      "country": "Australia",
      "websiteUrl": "https://www.latrobecollege.edu.au"
    },
    {
      "instituteName": "SAIBT (South Australian Institute of Business and Technology) to UNISA (University of South Australia)",
      "country": "Australia",
      "websiteUrl": "https://www.saibt.sa.edu.au"
    },
    {
      "instituteName": "SIBT (Sydney Institute of Business and Technology) to Western Sydney University",
      "country": "Australia",
      "websiteUrl": "https://www.sibt.nsw.edu.au"
    },
    {
      "instituteName": "University of Canberra International College to University of Canberra",
      "country": "Australia",
      "websiteUrl": "https://www.canberra.edu.au"
    },
    {
      "instituteName": "Western Sydney University International College to Western Sydney University",
      "country": "Australia",
      "websiteUrl": "https://www.westernsydney.edu.au"
    },
    {
      "instituteName": "Charles Darwin University",
      "country": "Australia",
      "websiteUrl": "https://www.cdu.edu.au"
    },
    {
      "instituteName": "University of Tasmania",
      "country": "Australia",
      "websiteUrl": "https://www.utas.edu.au"
    },
    {
      "instituteName": "University of Tasmania, Melbourne Campus",
      "country": "Australia",
      "websiteUrl": "https://www.utas.edu.au"
    },
    {
      "instituteName": "Swinburne University of Technology",
      "country": "Australia",
      "websiteUrl": "https://www.swinburne.edu.au"
    },
    {
      "instituteName": "Curtin University",
      "country": "Australia",
      "websiteUrl": "https://www.curtin.edu.au"
    },
    {
      "instituteName": "Flinders University",
      "country": "Australia",
      "websiteUrl": "https://www.flinders.edu.au"
    },
    {
      "instituteName": "James Cook University",
      "country": "Australia",
      "websiteUrl": "https://www.jcu.edu.au"
    },
    {
      "instituteName": "Queensland University of Technology",
      "country": "Australia",
      "websiteUrl": "https://www.qut.edu.au"
    },
    {
      "instituteName": "University of Sunshine Coast",
      "country": "Australia",
      "websiteUrl": "https://www.usc.edu.au"
    },
    {
      "instituteName": "University of Sydney",
      "country": "Australia",
      "websiteUrl": "https://www.sydney.edu.au"
    },
    {
      "instituteName": "Victoria University",
      "country": "Australia",
      "websiteUrl": "https://www.vu.edu.au"
    },
    {
      "instituteName": "Southern Cross University",
      "country": "Australia",
      "websiteUrl": "https://www.scu.edu.au"
    },
    {
      "instituteName": "ATMC (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.atmc.edu.au"
    },
    {
      "instituteName": "Auckland Institute of Studies (AIS) (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://ais.ac.nz"
    },
    {
      "instituteName": "Auckland University of Technology (AUT University) (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.aut.ac.nz"
    },
    {
      "instituteName": "Computer Power Plus (Wellington)",
      "country": "New Zealand",
      "websiteUrl": "https://www.computerpower.ac.nz"
    },
    {
      "instituteName": "Computer Power Plus (Christchurch)",
      "country": "New Zealand",
      "websiteUrl": "https://www.computerpower.ac.nz"
    },
    {
      "instituteName": "Computer Power Plus (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.computerpower.ac.nz"
    },
    {
      "instituteName": "Crown Institute of Studies",
      "country": "New Zealand",
      "websiteUrl": "https://www.crown.ac.nz"
    },
    {
      "instituteName": "Future Skills Academy (Manukau)",
      "country": "New Zealand",
      "websiteUrl": "https://www.futureskills.ac.nz"
    },
    {
      "instituteName": "Future Skills Academy (Royal Oak)",
      "country": "New Zealand",
      "websiteUrl": "https://www.futureskills.ac.nz"
    },
    {
      "instituteName": "Future Skills Academy (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.futureskills.ac.nz"
    },
    {
      "instituteName": "Future Skills Academy (Takapuna)",
      "country": "New Zealand",
      "websiteUrl": "https://www.futureskills.ac.nz"
    },
    {
      "instituteName": "IPU New Zealand Tertiary Institute (Palmerston North)",
      "country": "New Zealand",
      "websiteUrl": "https://ipu.ac.nz"
    },
    {
      "instituteName": "Massey University (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.massey.ac.nz"
    },
    {
      "instituteName": "Massey University (Palmerston North)",
      "country": "New Zealand",
      "websiteUrl": "https://www.massey.ac.nz"
    },
    {
      "instituteName": "Massey University (Wellington)",
      "country": "New Zealand",
      "websiteUrl": "https://www.massey.ac.nz"
    },
    {
      "instituteName": "Le Cordon Bleu, New Zealand",
      "country": "New Zealand",
      "websiteUrl": "https://www.cordonbleu.edu/new-zealand"
    },
    {
      "instituteName": "Lincoln University (Christchurch)",
      "country": "New Zealand",
      "websiteUrl": "https://www.lincoln.ac.nz"
    },
    {
      "instituteName": "UCIC at University of Canterbury (Christchurch)",
      "country": "New Zealand",
      "websiteUrl": "https://www.ucic.ac.nz"
    },
    {
      "instituteName": "New Zealand School of Education (NZSEG) (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.nzseg.ac.nz"
    },
    {
      "instituteName": "NZ Fashion Tech (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.nzfashiontech.ac.nz"
    },
    {
      "instituteName": "NZ Fashion Tech (Wellington)",
      "country": "New Zealand",
      "websiteUrl": "https://www.nzfashiontech.ac.nz"
    },
    {
      "instituteName": "Pacific International Hotel Management School (PIHMS) (New Plymouth)",
      "country": "New Zealand",
      "websiteUrl": "https://www.pihms.ac.nz"
    },
    {
      "instituteName": "Professional Business and Restaurant School (PBRS) (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.pbrs.ac.nz"
    },
    {
      "instituteName": "New Zealand Institute of Skills and Technology (NZIST)",
      "country": "New Zealand",
      "websiteUrl": "https://www.nzist.ac.nz"
    },
    {
      "instituteName": "Manukau Institute of Technology (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.manukau.ac.nz"
    },
    {
      "instituteName": "Te Pukenga (NZIST) - North Tec",
      "country": "New Zealand",
      "websiteUrl": "https://www.northtec.ac.nz"
    },
    {
      "instituteName": "Otago Polytechnic (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.op.ac.nz"
    },
    {
      "instituteName": "Otago Polytechnic (Dunedin)",
      "country": "New Zealand",
      "websiteUrl": "https://www.op.ac.nz"
    },
    {
      "instituteName": "Toi Ohomai",
      "country": "New Zealand",
      "websiteUrl": "https://www.toiohomai.ac.nz"
    },
    {
      "instituteName": "Ara Institute of Canterbury (Christchurch)",
      "country": "New Zealand",
      "websiteUrl": "https://www.ara.ac.nz"
    },
    {
      "instituteName": "Eastern Institute of Technology (EIT) (Hawkes Bay)",
      "country": "New Zealand",
      "websiteUrl": "https://www.eit.ac.nz"
    },
    {
      "instituteName": "Eastern Institute of Technology (EIT) (Napier)",
      "country": "New Zealand",
      "websiteUrl": "https://www.eit.ac.nz"
    },
    {
      "instituteName": "Nelson Marlborough Institute of Technology (NMIT) (Blenheim)",
      "country": "New Zealand",
      "websiteUrl": "https://www.nmit.ac.nz"
    },
    {
      "instituteName": "Southern Institute of Technology (SIT) (Invercargill)",
      "country": "New Zealand",
      "websiteUrl": "https://www.sit.ac.nz"
    },
    {
      "instituteName": "Unitec Institute of Technology (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.unitec.ac.nz"
    },
    {
      "instituteName": "Universal College of Learning (UCOL) (Wanganui)",
      "country": "New Zealand",
      "websiteUrl": "https://www.ucol.ac.nz"
    },
    {
      "instituteName": "Universal College of Learning (UCOL) (Palmerston North)",
      "country": "New Zealand",
      "websiteUrl": "https://www.ucol.ac.nz"
    },
    {
      "instituteName": "Waikato Institute of Technology (WINTEC) (Hamilton)",
      "country": "New Zealand",
      "websiteUrl": "https://www.wintec.ac.nz"
    },
    {
      "instituteName": "Wellington Institute of Technology (WELTEC) (Wellington)",
      "country": "New Zealand",
      "websiteUrl": "https://www.weltec.ac.nz"
    },
    {
      "instituteName": "Western Institute of Technology (WITT) (New Plymouth)",
      "country": "New Zealand",
      "websiteUrl": "https://www.witt.ac.nz"
    },
    {
      "instituteName": "Whitireia Community Polytech (Wellington)",
      "country": "New Zealand",
      "websiteUrl": "https://www.whitireia.ac.nz"
    },
    {
      "instituteName": "Whitireia Community Polytech (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.whitireia.ac.nz"
    },
    {
      "instituteName": "The International Travel College of New Zealand (ITC)",
      "country": "New Zealand",
      "websiteUrl": "https://www.itc.co.nz"
    },
    {
      "instituteName": "The University of Otago (Dunedin)",
      "country": "New Zealand",
      "websiteUrl": "https://www.otago.ac.nz"
    },
    {
      "instituteName": "The University of Waikato (Hamilton)",
      "country": "New Zealand",
      "websiteUrl": "https://www.waikato.ac.nz"
    },
    {
      "instituteName": "University of Auckland (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.auckland.ac.nz"
    },
    {
      "instituteName": "University of Canterbury (Christchurch)",
      "country": "New Zealand",
      "websiteUrl": "https://www.canterbury.ac.nz"
    },
    {
      "instituteName": "Cut Above Academy",
      "country": "New Zealand",
      "websiteUrl": "https://www.cutabove.ac.nz"
    },
    {
      "instituteName": "Elite School of Beauty & Spa",
      "country": "New Zealand",
      "websiteUrl": "https://www.elite.ac.nz"
    },
    {
      "instituteName": "New Zealand Institute of Sport (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.nzism.ac.nz"
    },
    {
      "instituteName": "New Zealand Institute of Sport (Manukau)",
      "country": "New Zealand",
      "websiteUrl": "https://www.nzism.ac.nz"
    },
    {
      "instituteName": "New Zealand Institute of Sport (Wellington)",
      "country": "New Zealand",
      "websiteUrl": "https://www.nzism.ac.nz"
    },
    {
      "instituteName": "New Zealand Institute of Sport (Christchurch)",
      "country": "New Zealand",
      "websiteUrl": "https://www.nzism.ac.nz"
    },
    {
      "instituteName": "New Zealand International College",
      "country": "New Zealand",
      "websiteUrl": "https://www.nzic.ac.nz"
    },
    {
      "instituteName": "New Zealand Management Academies",
      "country": "New Zealand",
      "websiteUrl": "https://www.nzma.ac.nz"
    },
    {
      "instituteName": "New Zealand School of Tourism (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.tourism.ac.nz"
    },
    {
      "instituteName": "New Zealand Tertiary College (NZTC) (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.nztertiarycollege.ac.nz"
    },
    {
      "instituteName": "Norton College",
      "country": "New Zealand",
      "websiteUrl": "https://www.norton.ac.nz"
    },
    {
      "instituteName": "Parnell College",
      "country": "New Zealand",
      "websiteUrl": "https://www.parnell.ac.nz"
    },
    {
      "instituteName": "Senior College",
      "country": "New Zealand",
      "websiteUrl": "https://www.senior.ac.nz"
    },
    {
      "instituteName": "Strathallan",
      "country": "New Zealand",
      "websiteUrl": "https://www.strathallan.ac.nz"
    },
    {
      "instituteName": "Sunderland",
      "country": "New Zealand",
      "websiteUrl": "https://www.sunderland.ac.nz"
    },
    {
      "instituteName": "Tauranga",
      "country": "New Zealand",
      "websiteUrl": "https://www.tauranga.ac.nz"
    },
    {
      "instituteName": "The Culinary Collective",
      "country": "New Zealand",
      "websiteUrl": "https://www.culinary.ac.nz"
    },
    {
      "instituteName": "Yoobee Colleges (Auckland)",
      "country": "New Zealand",
      "websiteUrl": "https://www.yoobee.ac.nz"
    },
    {
      "instituteName": "Yoobee Colleges (Christchurch)",
      "country": "New Zealand",
      "websiteUrl": "https://www.yoobee.ac.nz"
    },
    {
      "instituteName": "Victoria University of Wellington (Wellington)",
      "country": "New Zealand",
      "websiteUrl": ""
    },
    {
      "instituteName": "Whitecliffe College of Arts & Design (Auckland)",
      "country": "New Zealand",
      "websiteUrl": ""
    },
    {
      "instituteName": "Worldwide School of English (Auckland)",
      "country": "New Zealand",
      "websiteUrl": ""
    },
    {
      "instituteName": "University of Otago (Pathway and Language Centre)",
      "country": "New Zealand",
      "websiteUrl": ""
    },
    {
      "instituteName": "UP Education (previously ACG Education)",
      "country": "New Zealand",
      "websiteUrl": ""
    },
    {
      "instituteName": "Florida Atlantic University",
      "country": "USA",
      "websiteUrl": "fau.edu"
    },
    {
      "instituteName": "University of Massachusetts",
      "country": "USA",
      "websiteUrl": "umass.edu"
    },
    {
      "instituteName": "Alvernia University",
      "country": "USA",
      "websiteUrl": "alvernia.edu"
    },
    {
      "instituteName": "American Collegiate Los Angeles",
      "country": "USA",
      "websiteUrl": "american.edu"
    },
    {
      "instituteName": "American Collegiate Washington DC",
      "country": "USA",
      "websiteUrl": "american.edu"
    },
    {
      "instituteName": "Atlantis University",
      "country": "USA",
      "websiteUrl": "atlantisuniversity.edu"
    },
    {
      "instituteName": "Auburn University at Montgomery",
      "country": "USA",
      "websiteUrl": "aum.edu"
    },
    {
      "instituteName": "Capital University",
      "country": "USA",
      "websiteUrl": "capital.edu"
    },
    {
      "instituteName": "Central Michigan University",
      "country": "USA",
      "websiteUrl": "cmich.edu"
    },
    {
      "instituteName": "Clarks University",
      "country": "USA",
      "websiteUrl": "clarku.edu"
    },
    {
      "instituteName": "Community College of Spokane",
      "country": "USA",
      "websiteUrl": "spokane.edu"
    },
    {
      "instituteName": "Concordia University",
      "country": "USA",
      "websiteUrl": "concordia.edu"
    },
    {
      "instituteName": "Concordia Saint Paul University",
      "country": "USA",
      "websiteUrl": "csp.edu"
    },
    {
      "instituteName": "DePaul University",
      "country": "USA",
      "websiteUrl": "depaul.edu"
    },
    {
      "instituteName": "Drake University",
      "country": "USA",
      "websiteUrl": "drake.edu"
    },
    {
      "instituteName": "Duke University",
      "country": "USA",
      "websiteUrl": "duke.edu"
    },
    {
      "instituteName": "Duquesne University",
      "country": "USA",
      "websiteUrl": "duq.edu"
    },
    {
      "instituteName": "Endicott College",
      "country": "USA",
      "websiteUrl": "endicott.edu"
    },
    {
      "instituteName": "Edgewood College",
      "country": "USA",
      "websiteUrl": "edgewood.edu"
    },
    {
      "instituteName": "Florida Polytechnic University",
      "country": "USA",
      "websiteUrl": "floridapoly.edu"
    },
    {
      "instituteName": "Herzing University",
      "country": "USA",
      "websiteUrl": "herzing.edu"
    },
    {
      "instituteName": "Hilbert College",
      "country": "USA",
      "websiteUrl": "hilbert.edu"
    },
    {
      "instituteName": "Hillsboro Aero Academy",
      "country": "USA",
      "websiteUrl": "hillsboroaviation.com"
    },
    {
      "instituteName": "Johnson and Wales University",
      "country": "USA",
      "websiteUrl": "jwu.edu"
    },
    {
      "instituteName": "Lipscomb University",
      "country": "USA",
      "websiteUrl": "lipscomb.edu"
    },
    {
      "instituteName": "Lynn University",
      "country": "USA",
      "websiteUrl": "lynn.edu"
    },
    {
      "instituteName": "Marconi International University",
      "country": "USA",
      "websiteUrl": "marconiu.edu"
    },
    {
      "instituteName": "Marquette University",
      "country": "USA",
      "websiteUrl": "marquette.edu"
    },
    {
      "instituteName": "Middle Tennessee State University",
      "country": "USA",
      "websiteUrl": "mtsu.edu"
    },
    {
      "instituteName": "Montana State University Billings(MSUB)",
      "country": "USA",
      "websiteUrl": "msubillings.edu"
    },
    {
      "instituteName": "West New England University",
      "country": "USA",
      "websiteUrl": "wne.edu"
    },
    {
      "instituteName": "Nichols College",
      "country": "USA",
      "websiteUrl": "nichols.edu"
    },
    {
      "instituteName": "North Park University",
      "country": "USA",
      "websiteUrl": "northpark.edu"
    },
    {
      "instituteName": "Paul Smithâ€™s College",
      "country": "USA",
      "websiteUrl": "paulsmiths.edu"
    },
    {
      "instituteName": "Radford University",
      "country": "USA",
      "websiteUrl": "radford.edu"
    },
    {
      "instituteName": "Seattle Pacific University (SPU)",
      "country": "USA",
      "websiteUrl": "spu.edu"
    },
    {
      "instituteName": "Stevens Institute of Technology (SIT)",
      "country": "USA",
      "websiteUrl": "stevens.edu"
    },
    {
      "instituteName": "Thomas College",
      "country": "USA",
      "websiteUrl": "thomas.edu"
    },
    {
      "instituteName": "Texas A&M University Corpus Christi",
      "country": "USA",
      "websiteUrl": "tamucc.edu"
    },
    {
      "instituteName": "The Culinary Institute of America",
      "country": "USA",
      "websiteUrl": "culinary.edu"
    },
    {
      "instituteName": "UMBC (University of Maryland Baltimore County)",
      "country": "USA",
      "websiteUrl": "umbc.edu"
    },
    {
      "instituteName": "University of Charleston",
      "country": "USA",
      "websiteUrl": "ucwv.edu"
    },
    {
      "instituteName": "University of Idaho",
      "country": "USA",
      "websiteUrl": "uidaho.edu"
    },
    {
      "instituteName": "University of Mississippi",
      "country": "USA",
      "websiteUrl": "olemiss.edu"
    },
    {
      "instituteName": "University of Massachusetts Boston",
      "country": "USA",
      "websiteUrl": "umb.edu"
    },
    {
      "instituteName": "University of Missouri-St. Louis",
      "country": "USA",
      "websiteUrl": "umsl.edu"
    },
    {
      "instituteName": "University of Nebraska",
      "country": "USA",
      "websiteUrl": "unl.edu"
    },
    {
      "instituteName": "University of St. Thomas",
      "country": "USA",
      "websiteUrl": "stthomas.edu"
    },
    {
      "instituteName": "University of Vermont",
      "country": "USA",
      "websiteUrl": "uvm.edu"
    },
    {
      "instituteName": "Virginia Wesleyan University",
      "country": "USA",
      "websiteUrl": "virginia.edu"
    },
    {
      "instituteName": "Webster University",
      "country": "USA",
      "websiteUrl": "webster.edu"
    },
    {
      "instituteName": "Academy of Art University",
      "country": "USA",
      "websiteUrl": "academyart.edu"
    },
    {
      "instituteName": "California Lutheran University",
      "country": "USA",
      "websiteUrl": "callutheran.edu"
    },
    {
      "instituteName": "Cascadia College",
      "country": "USA",
      "websiteUrl": "cascadia.edu"
    },
    {
      "instituteName": "Cerritos College",
      "country": "USA",
      "websiteUrl": "cerritos.edu"
    },
    {
      "instituteName": "City University of Seattle",
      "country": "USA",
      "websiteUrl": "cityu.edu"
    },
    {
      "instituteName": "Clarkson University",
      "country": "USA",
      "websiteUrl": "clarkson.edu"
    },
    {
      "instituteName": "College of the Canyons",
      "country": "USA",
      "websiteUrl": "canyons.edu"
    },
    {
      "instituteName": "Concordia University St. Paul",
      "country": "USA",
      "websiteUrl": "csp.edu"
    },
    {
      "instituteName": "Contra Costa College (CCCCD)",
      "country": "USA",
      "websiteUrl": "contracosta.edu"
    },
    {
      "instituteName": "Diablo Valley College (CCCCD)",
      "country": "USA",
      "websiteUrl": "diablovalley.edu"
    },
    {
      "instituteName": "Fulton-Montgomery Community College - SUNY",
      "country": "USA",
      "websiteUrl": "fmcc.edu"
    },
    {
      "instituteName": "Gannon University",
      "country": "USA",
      "websiteUrl": "gannon.edu"
    },
    {
      "instituteName": "Genesee Community College (SUNY)",
      "country": "USA",
      "websiteUrl": "genesee.edu"
    },
    {
      "instituteName": "Hult International Business School",
      "country": "USA",
      "websiteUrl": "hult.edu"
    },
    {
      "instituteName": "Kent State University",
      "country": "USA",
      "websiteUrl": "kent.edu"
    },
    {
      "instituteName": "Los Medanos College (CCCCD)",
      "country": "USA",
      "websiteUrl": "losmedanos.edu"
    },
    {
      "instituteName": "Miami University Ohio (Oxford)",
      "country": "USA",
      "websiteUrl": "miamioh.edu"
    },
    {
      "instituteName": "Miami University Ohio Regionals (Middletown & Hamilton)",
      "country": "USA",
      "websiteUrl": "miamioh.edu"
    },
    {
      "instituteName": "Mt. San Antonio College",
      "country": "USA",
      "websiteUrl": "mtsac.edu"
    },
    {
      "instituteName": "New York Film Academy",
      "country": "USA",
      "websiteUrl": "nyfa.edu"
    },
    {
      "instituteName": "New York Institute of Technology (University)",
      "country": "USA",
      "websiteUrl": "nyit.edu"
    },
    {
      "instituteName": "Purdue University Northwes",
      "country": "USA",
      "websiteUrl": "pnw.edu"
    },
    {
      "instituteName": "Sacred Heart University",
      "country": "USA",
      "websiteUrl": "sacredheart.edu"
    },
    {
      "instituteName": "Seattle Colleges - North Seattle College",
      "country": "USA",
      "websiteUrl": "seattlecolleges.edu"
    },
    {
      "instituteName": "Seattle Colleges - Seattle Central College",
      "country": "USA",
      "websiteUrl": "seattlecolleges.edu"
    },
    {
      "instituteName": "Seattle Colleges - South Seattle College",
      "country": "USA",
      "websiteUrl": "seattlecolleges.edu"
    },
    {
      "instituteName": "Southern Illinois University - Carbondale",
      "country": "USA",
      "websiteUrl": "siu.edu"
    },
    {
      "instituteName": "Southwest Minnesotta State University",
      "country": "USA",
      "websiteUrl": "smsu.edu"
    },
    {
      "instituteName": "State University of New York - Plattsburgh",
      "country": "USA",
      "websiteUrl": "plattsburgh.edu"
    },
    {
      "instituteName": "Texas State University",
      "country": "USA",
      "websiteUrl": "txstate.edu"
    },
    {
      "instituteName": "Texas Wesleyan University",
      "country": "USA",
      "websiteUrl": "txwes.edu"
    },
    {
      "instituteName": "Trine University",
      "country": "USA",
      "websiteUrl": "trine.edu"
    },
    {
      "instituteName": "Troy University",
      "country": "USA",
      "websiteUrl": "troy.edu"
    },
    {
      "instituteName": "University at Albany (SUNY)",
      "country": "USA",
      "websiteUrl": "albany.edu"
    },
    {
      "instituteName": "University of California, Irvine - Division of Continuing Education",
      "country": "USA",
      "websiteUrl": "ce.uci.edu"
    },
    {
      "instituteName": "University of Colorado Denver",
      "country": "USA",
      "websiteUrl": "ucdenver.edu"
    },
    {
      "instituteName": "University of La Verne",
      "country": "USA",
      "websiteUrl": "ulv.edu"
    },
    {
      "instituteName": "University of Nebraska at Omaha",
      "country": "USA",
      "websiteUrl": "unomaha.edu"
    },
    {
      "instituteName": "University of North Carolina at Greensboro",
      "country": "USA",
      "websiteUrl": "uncg.edu"
    },
    {
      "instituteName": "University of North Carolina Wilmington",
      "country": "USA",
      "websiteUrl": "uncw.edu"
    },
    {
      "instituteName": "University of North Texas",
      "country": "USA",
      "websiteUrl": "unt.edu"
    },
    {
      "instituteName": "University of West Alabama",
      "country": "USA",
      "websiteUrl": "uwa.edu"
    },
    {
      "instituteName": "Valencia College",
      "country": "USA",
      "websiteUrl": "valenciacollege.edu"
    },
    {
      "instituteName": "Washington State University",
      "country": "USA",
      "websiteUrl": "wsu.edu"
    },
    {
      "instituteName": "Westcliff University",
      "country": "USA",
      "websiteUrl": "westcliff.edu"
    },
    {
      "instituteName": "Wichita State University",
      "country": "USA",
      "websiteUrl": "wichita.edu"
    },
    {
      "instituteName": "Webster",
      "country": "USA",
      "websiteUrl": "webster.edu"
    },
    {
      "instituteName": "Xavier University",
      "country": "USA",
      "websiteUrl": "xavier.edu"
    },
    {
      "instituteName": "American National University",
      "country": "USA",
      "websiteUrl": "an.edu"
    },
    {
      "instituteName": "Graceland University",
      "country": "USA",
      "websiteUrl": "graceland.edu"
    },
    {
      "instituteName": "Colorado Mesa University",
      "country": "USA",
      "websiteUrl": "coloradomesa.edu"
    },
    {
      "instituteName": "Avila University",
      "country": "USA",
      "websiteUrl": "avila.edu"
    },
    {
      "instituteName": "Concordia University Chicago",
      "country": "USA",
      "websiteUrl": "cuw.edu"
    },
    {
      "instituteName": "Colorado State University",
      "country": "USA",
      "websiteUrl": "colostate.edu"
    },
    {
      "instituteName": "Drew University",
      "country": "USA",
      "websiteUrl": "drew.edu"
    },
    {
      "instituteName": "Fisher College",
      "country": "USA",
      "websiteUrl": "fisher.edu"
    },
    {
      "instituteName": "George Mason University",
      "country": "USA",
      "websiteUrl": "gmu.edu"
    },
    {
      "instituteName": "Glasgow Caledonian New York College",
      "country": "USA",
      "websiteUrl": "gcnye.org"
    },
    {
      "instituteName": "Hofstra University",
      "country": "USA",
      "websiteUrl": "hofstra.edu"
    },
    {
      "instituteName": "Illinois State University",
      "country": "USA",
      "websiteUrl": "ilstu.edu"
    },
    {
      "instituteName": "Long Island University Brooklyn",
      "country": "USA",
      "websiteUrl": "liu.edu"
    },
    {
      "instituteName": "Long Island University Post",
      "country": "USA",
      "websiteUrl": "liu.edu"
    },
    {
      "instituteName": "Marshall University",
      "country": "USA",
      "websiteUrl": "marshall.edu"
    },
    {
      "instituteName": "Montclair State University",
      "country": "USA",
      "websiteUrl": "montclair.edu"
    },
    {
      "instituteName": "New England College",
      "country": "USA",
      "websiteUrl": "nec.edu"
    },
    {
      "instituteName": "Oregon State University",
      "country": "USA",
      "websiteUrl": "oregonstate.edu"
    },
    {
      "instituteName": "Saint Louis University",
      "country": "USA",
      "websiteUrl": "slu.edu"
    },
    {
      "instituteName": "Suffolk University",
      "country": "USA",
      "websiteUrl": "suffolk.edu"
    },
    {
      "instituteName": "Thomas Jefferson University",
      "country": "USA",
      "websiteUrl": "jefferson.edu"
    },
    {
      "instituteName": "University of Alabama, Birmingham",
      "country": "USA",
      "websiteUrl": "uab.edu"
    },
    {
      "instituteName": "University of Arizona",
      "country": "USA",
      "websiteUrl": "arizona.edu"
    },
    {
      "instituteName": "Arizona State University",
      "country": "USA",
      "websiteUrl": "asu.edu"
    },
    {
      "instituteName": "Pace University",
      "country": "USA",
      "websiteUrl": "pace.edu"
    },
    {
      "instituteName": "Simmons University",
      "country": "USA",
      "websiteUrl": "simmons.edu"
    },
    {
      "instituteName": "University of Connecticut",
      "country": "USA",
      "websiteUrl": "uconn.edu"
    },
    {
      "instituteName": "Queens College",
      "country": "USA",
      "websiteUrl": "qc.cuny.edu"
    },
    {
      "instituteName": "UMass Boston",
      "country": "USA",
      "websiteUrl": "umb.edu"
    },
    {
      "instituteName": "Richard Bland College Of William & Mary",
      "country": "USA",
      "websiteUrl": "rbcollege.edu"
    },
    {
      "instituteName": "Mercy University",
      "country": "USA",
      "websiteUrl": "mercy.edu"
    },
    {
      "instituteName": "San Francisco State University",
      "country": "USA",
      "websiteUrl": "sfsu.edu"
    },
    {
      "instituteName": "Adelphi University",
      "country": "USA",
      "websiteUrl": "adelphi.edu"
    },
    {
      "instituteName": "American University",
      "country": "USA",
      "websiteUrl": "american.edu"
    },
    {
      "instituteName": "Auburn University",
      "country": "USA",
      "websiteUrl": "auburn.edu"
    },
    {
      "instituteName": "Cleveland State University",
      "country": "USA",
      "websiteUrl": "csuohio.edu"
    },
    {
      "instituteName": "Florida International University",
      "country": "USA",
      "websiteUrl": "fiu.edu"
    },
    {
      "instituteName": "Gonzaga University",
      "country": "USA",
      "websiteUrl": "gonzaga.edu"
    },
    {
      "instituteName": "Louisiana State University",
      "country": "USA",
      "websiteUrl": "lsu.edu"
    },
    {
      "instituteName": "Missouri University of Science and Technology",
      "country": "USA",
      "websiteUrl": "mst.edu"
    },
    {
      "instituteName": "Tulane University",
      "country": "USA",
      "websiteUrl": "tulane.edu"
    },
    {
      "instituteName": "University of California, Los Angeles (UCLA)",
      "country": "USA",
      "websiteUrl": "ucla.edu"
    },
    {
      "instituteName": "University of Central Florida",
      "country": "USA",
      "websiteUrl": "ucf.edu"
    },
    {
      "instituteName": "University of Dayton",
      "country": "USA",
      "websiteUrl": "udayton.edu"
    },
    {
      "instituteName": "University of Illinois at Chicago",
      "country": "USA",
      "websiteUrl": "uic.edu"
    },
    {
      "instituteName": "University of Illinois at Springfield",
      "country": "USA",
      "websiteUrl": "uis.edu"
    },
    {
      "instituteName": "University of Kansas",
      "country": "USA",
      "websiteUrl": "ku.edu"
    },
    {
      "instituteName": "University of Massachusetts, Amherst",
      "country": "USA",
      "websiteUrl": "umass.edu"
    },
    {
      "instituteName": "University of Massachusetts, Boston",
      "country": "USA",
      "websiteUrl": "umb.edu"
    },
    {
      "instituteName": "University of Nevada, Reno",
      "country": "USA",
      "websiteUrl": "unr.edu"
    },
    {
      "instituteName": "University of South Carolina",
      "country": "USA",
      "websiteUrl": "sc.edu"
    },
    {
      "instituteName": "University of the Pacific",
      "country": "USA",
      "websiteUrl": "pacific.edu"
    },
    {
      "instituteName": "University of Utah",
      "country": "USA",
      "websiteUrl": "utah.edu"
    },
    {
      "instituteName": "University of Wyoming",
      "country": "USA",
      "websiteUrl": "uwyo.edu"
    },
    {
      "instituteName": "Western New England University",
      "country": "USA",
      "websiteUrl": "wne.edu"
    },
    {
      "instituteName": "California State University - San Marcos",
      "country": "USA",
      "websiteUrl": "csusm.edu"
    },
    {
      "instituteName": "James Madison University",
      "country": "USA",
      "websiteUrl": "jmu.edu"
    },
    {
      "instituteName": "Long Island University",
      "country": "USA",
      "websiteUrl": "liu.edu"
    },
    {
      "instituteName": "Texas A&M Corpus Christi",
      "country": "USA",
      "websiteUrl": "tamucc.edu"
    },
    {
      "instituteName": "Towson University",
      "country": "USA",
      "websiteUrl": "towson.edu"
    },
    {
      "instituteName": "University of Hartford",
      "country": "USA",
      "websiteUrl": "hartford.edu"
    },
    {
      "instituteName": "Western Washington University",
      "country": "USA",
      "websiteUrl": "wwu.edu"
    },
    {
      "instituteName": "Baylor University",
      "country": "USA",
      "websiteUrl": "baylor.edu"
    },
    {
      "instituteName": "College of San Mateo",
      "country": "USA",
      "websiteUrl": "collegesanmateo.edu"
    },
    {
      "instituteName": "College of Marin",
      "country": "USA",
      "websiteUrl": "collegeofmarin.edu"
    },
    {
      "instituteName": "Irvine Valley College",
      "country": "USA",
      "websiteUrl": "ivc.edu"
    },
    {
      "instituteName": "Piedmont Virginia Community College",
      "country": "USA",
      "websiteUrl": "pvcc.edu"
    },
    {
      "instituteName": "Santa Monica College",
      "country": "USA",
      "websiteUrl": "smc.edu"
    },
    {
      "instituteName": "American International College",
      "country": "USA",
      "websiteUrl": "aic.edu"
    },
    {
      "instituteName": "Bay Atlantic University",
      "country": "USA",
      "websiteUrl": "bayatlantic.edu"
    },
    {
      "instituteName": "COE College",
      "country": "USA",
      "websiteUrl": "coe.edu"
    },
    {
      "instituteName": "Community College of Philadelphia",
      "country": "USA",
      "websiteUrl": "ccp.edu"
    },
    {
      "instituteName": "East Tennessee State University",
      "country": "USA",
      "websiteUrl": "etsu.edu"
    },
    {
      "instituteName": "Fox Valley Technical college",
      "country": "USA",
      "websiteUrl": "fvtc.edu"
    },
    {
      "instituteName": "Greensboro College",
      "country": "USA",
      "websiteUrl": "greensboro.edu"
    },
    {
      "instituteName": "Hanover College",
      "country": "USA",
      "websiteUrl": "hanover.edu"
    },
    {
      "instituteName": "Hartwick College",
      "country": "USA",
      "websiteUrl": "hartwick.edu"
    },
    {
      "instituteName": "Hawaii Pacific University",
      "country": "USA",
      "websiteUrl": "hpu.edu"
    },
    {
      "instituteName": "Keck Graduate Institute",
      "country": "USA",
      "websiteUrl": "kgi.edu"
    },
    {
      "instituteName": "Mentora College",
      "country": "USA",
      "websiteUrl": "mentoracollege.com"
    },
    {
      "instituteName": "Monroe College",
      "country": "USA",
      "websiteUrl": "monroecollege.edu"
    },
    {
      "instituteName": "Montana State University Billings",
      "country": "USA",
      "websiteUrl": "msubillings.edu"
    },
    {
      "instituteName": "Mount Saint Mary's University",
      "country": "USA",
      "websiteUrl": "msmary.edu"
    },
    {
      "instituteName": "Pacific Lutheran University",
      "country": "USA",
      "websiteUrl": "plu.edu"
    },
    {
      "instituteName": "Pacific States University",
      "country": "USA",
      "websiteUrl": "pacificstates.edu"
    },
    {
      "instituteName": "San Mateo Colleges of Silicon valley",
      "country": "USA",
      "websiteUrl": "smccd.edu"
    },
    {
      "instituteName": "Shoreline Community College",
      "country": "USA",
      "websiteUrl": "shoreline.edu"
    },
    {
      "instituteName": "Westminster College",
      "country": "USA",
      "websiteUrl": "westminstercollege.edu"
    },
    {
      "instituteName": "Whitworth University",
      "country": "USA",
      "websiteUrl": "whitworth.edu"
    }
  ]
]

const instituteData = [[
  {
    "location": "USA",
    "instituteName": "Adelphi University",
    "aboutCollegeOrInstitute": "Campus: Garden City, NY&Provide 50% Scholarship& Formal Education:15-16 Years",
    "keyHighlights": "GPA:3&IELTS:6.5&DUOLINGO:110&TOEFL:80&Official transcripts required. Should be submitted to the university within 30 days from the start date, either electronically or physical copies by the Indian University & Financials to be shown in Bank Statement : Sponsor - $45000$, \nSelf - $75000",
    "popularCourses": "Masters and MS in Computer Science - STEM&Duration 19Months/ 5Terms",
    "admissionAndFacilities": "TUTION FEE:44700USD&APPLICATION FEE:30USD&i20: 200USD&IEE: 145USD",
    "inTake": "MAY 2025&SEP 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Adelphi University",
    "aboutCollegeOrInstitute": "Campus: Garden City, NY&Provide 50% Scholarship& Formal Education:15-16 Years",
    "keyHighlights": "GPA:3&IELTS:6.5&DUOLINGO:110&TOEFL:80&Official transcripts required. Should be submitted to the university within 30 days from the start date, either electronically or physical copies by the Indian University & Financials to be shown in Bank Statement : Sponsor - $45000$, \nSelf - $75000",
    "popularCourses": "Masters and MS IN BUSINESS ANLYTICS-STEM&Duration 19Months/ 5Terms",
    "admissionAndFacilities": "TUTION FEE:43800USD&APPLICATION FEE:30USD&i20: 200USD&IEE: 145USD",
    "inTake": "MAY 2025&SEP 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Adelphi University",
    "aboutCollegeOrInstitute": "Campus: Garden City, NY&Provide 50% Scholarship& Formal Education:15-16 Years",
    "keyHighlights": "GPA:3&IELTS:6.5&DUOLINGO:110&TOEFL:80&Official transcripts required. Should be submitted to the university within 30 days from the start date, either electronically or physical copies by the Indian University & Financials to be shown in Bank Statement : Sponsor - $45000$, \nSelf - $75000",
    "popularCourses": "Masters and MS in Health Informatics - STEM&Duration: 22 Months/6 Terms",
    "admissionAndFacilities": "TUTION FEE:48960USD&APPLICATION FEE:30USD&i20: 200USD&IEE: 145USD",
    "inTake": "MAY 2025&SEP 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Adelphi University",
    "aboutCollegeOrInstitute": "Campus: Garden City, NY&Provide 50% Scholarship& Formal Education:15-16 Years",
    "keyHighlights": "GPA:3&IELTS:6.5&DUOLINGO:110&TOEFL:80&Official transcripts required. Should be submitted to the university within 30 days from the start date, either electronically or physical copies by the Indian University & Financials to be shown in Bank Statement : Sponsor - $45000$, \nSelf - $75000",
    "popularCourses": "Masters and MS in Supply Chain Management - STEM&Duration 19Months/ 5Terms",
    "admissionAndFacilities": "TUTION FEE:43800USD&APPLICATION FEE:30USD&i20: 200USD&IEE: 145USD",
    "inTake": "MAY 2025&SEP 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Anderson university",
    "aboutCollegeOrInstitute": "Campus: South Carolina&Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "GPA:2.5&Percentage: 60&IELTS:6&DUOLINGO:105&TOEFL:IBT-75/PBT 550&Official transcripts required. Should be submitted to the university within 30 days from the start date, either electronically or physical copies by the Indian University & Deadline :Transfer s - Till one week before the Registration. International - Dec 13th, April 16th, July 21st & Offer TAT: 10 days & i20: 15 working days & Financials to be shown in Bank Statement : 29000 $ Approx.",
    "popularCourses": "PG and Master Of Science In Business Analytics&Duration: 12-18 months",
    "admissionAndFacilities": "TUTION FEE:14250USD &APPLICATION FEE:40USD &Enrollment Deposit: 150USD",
    "inTake": "MAY 2025&SEP 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Anderson university",
    "aboutCollegeOrInstitute": "Campus: South Carolina&Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "GPA:2.5&Percentage: 60&IELTS:6&DUOLINGO:105&TOEFL:IBT-75/PBT 550&Official transcripts required. Should be submitted to the university within 30 days from the start date, either electronically or physical copies by the Indian University & Deadline :Transfer s - Till one week before the Registration. International - Dec 13th, April 16th, July 21st & Offer TAT: 10 days & i20: 15 working days & Financials to be shown in Bank Statement : 29000 $ Approx.",
    "popularCourses": "PG and Master Of Science in Computer Science& Duration : 12-18 Months",
    "admissionAndFacilities": "TUTION FEE:14725USD &APPLICATION FEE:40USD &Enrollment Deposit: 150USD",
    "inTake": "MAY 2025&SEP 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Anderson university",
    "aboutCollegeOrInstitute": "Campus: South Carolina&Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "GPA:2.5&Percentage: 60&IELTS:6&DUOLINGO:105&TOEFL:IBT-75/PBT 550&Official transcripts required. Should be submitted to the university within 30 days from the start date, either electronically or physical copies by the Indian University & Deadline :Transfer s - Till one week before the Registration. International - Dec 13th, April 16th, July 21st & Offer TAT: 10 days & i20: 15 working days & Financials to be shown in Bank Statement : 29000 $ Approx.",
    "popularCourses": "PG and Master Of Science in Cyber security Management& Duration : 12-18 Months",
    "admissionAndFacilities": "TUTION FEE:14725USD &APPLICATION FEE:40USD &Enrollment Deposit: 150USD",
    "inTake": "MAY 2025&SEP 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Anderson university",
    "aboutCollegeOrInstitute": "Campus: South Carolina&Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "GPA:2.5&Percentage: 60&IELTS:6&DUOLINGO:105&TOEFL:IBT-75/PBT 550&Official transcripts required. Should be submitted to the university within 30 days from the start date, either electronically or physical copies by the Indian University & Deadline :Transfer s - Till one week before the Registration. International - Dec 13th, April 16th, July 21st & Offer TAT: 10 days & i20: 15 working days & Financials to be shown in Bank Statement : 29000 $ Approx.",
    "popularCourses": "PG and Master Of Science in Information Technology& Duration : 12-18 Months",
    "admissionAndFacilities": "TUTION FEE:14725USD &APPLICATION FEE:40USD &Enrollment Deposit: 150USD",
    "inTake": "MAY 2025&SEP 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Anderson university",
    "aboutCollegeOrInstitute": "Campus: South Carolina&Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "GPA:2.5&Percentage: 60&IELTS:6&DUOLINGO:105&TOEFL:IBT-75/PBT 550&Official transcripts required. Should be submitted to the university within 30 days from the start date, either electronically or physical copies by the Indian University & Deadline :Transfer s - Till one week before the Registration. International - Dec 13th, April 16th, July 21st & Offer TAT: 10 days & i20: 15 working days & Financials to be shown in Bank Statement : 29000 $ Approx.",
    "popularCourses": "PG and Master of Science Professional Business Analytics& Duration : 12-18 Months",
    "admissionAndFacilities": "TUTION FEE:15675USD &APPLICATION FEE:40USD &Enrollment Deposit: 150USD",
    "inTake": "MAY 2025&SEP 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Cumberland University",
    "aboutCollegeOrInstitute": "Campus: 1 Cumberland Sq. Lebanon, Tennessee 37087 &Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "GPA:2.5&Percentage: 60&IELTS:5.5&DUOLINGO:100&TOEFL:65 &  India, Nepal & Pakistan - WES Not required (Offical Transcripts required from Bachelrs & Masters college) Rest of the countries WES is mandatory & Deadlines: Spring- 7th January Summer - 28th April Fall - 20th August & Offer TAT : 1 week & i20: 1 week & Financials to be shown in Bank Statement: 25000 $ Approx.",
    "popularCourses": "PG and Master Of Science In Information Technology Management (STEM) & Duration : 5 Semesters",
    "admissionAndFacilities": "TUTION FEE:17150USD &Enrollment Deposit: 150USD",
    "inTake": "MAY 2025 & SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Cumberland University",
    "aboutCollegeOrInstitute": "Campus: 1 Cumberland Sq. Lebanon, Tennessee 37087 &Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "GPA:2.5&Percentage: 60&IELTS:5.5&DUOLINGO:100&TOEFL:65 &  India, Nepal & Pakistan - WES Not required (Offical Transcripts required from Bachelrs & Masters college) Rest of the countries WES is mandatory & Deadlines: Spring- 7th January Summer - 28th April Fall - 20th August & Offer TAT : 1 week & i20: 1 week & Financials to be shown in Bank Statement: 25000 $ Approx.",
    "popularCourses": "PG and MS Engineering management(STEM) & Duration : 5 Semesters",
    "admissionAndFacilities": "TUTION FEE:17150USD &Enrollment Deposit: 150USD",
    "inTake": "MAY 2025&SEP 2025&JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Cumberland University",
    "aboutCollegeOrInstitute": "Campus: 1 Cumberland Sq. Lebanon, Tennessee 37087 &Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "GPA:2.5&Percentage: 60&IELTS:5.5&DUOLINGO:100&TOEFL:65 &  India, Nepal & Pakistan - WES Not required (Offical Transcripts required from Bachelrs & Masters college) Rest of the countries WES is mandatory & Deadlines: Spring- 7th January Summer - 28th April Fall - 20th August & Offer TAT : 1 week & i20: 1 week & Financials to be shown in Bank Statement: 25000 $ Approx.",
    "popularCourses": "PG and Master Of Science In Computer Science(STEM) & Duration : 5 Semesters",
    "admissionAndFacilities": "TUTION FEE:17150USD &Enrollment Deposit: 150USD",
    "inTake": "MAY 2025 & SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Wittenberg University",
    "aboutCollegeOrInstitute": "Campus: Springfield, Ohio",
    "keyHighlights": "GPA:3&Percentage: 65&IELTS:6 &DUOLINGO:110&TOEFL:79 & Internal evaluation & Deadline : Spring - Oct 15th,Summer - Feb 10th, Fall - June 1 & Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement :31000 $ Approx.",
    "popularCourses": "PG & MS Analytics & Duration : 16 Months",
    "admissionAndFacilities": "TUTION FEE:17655USD &Enrollment Deposit: 500USD",
    "inTake": "MAY 2025 & AUG 2025, JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Golden Gate University",
    "aboutCollegeOrInstitute": "Campus: Downtown San Francisco & Provide 40% Scholarship &Formal Education: 15 & 16 yrs accepted &",
    "keyHighlights": "GPA:3&Percentage: 65&IELTS:6.5&DUOLINGO:110&TOEFL:79 & PTE:57 & Internal evaluation & Deadline : July 7th, Nov 10th, march 9th &  Offer TAT: 10-15 working days & i20 : 1 week & Financials to be shown in Bank Statement : 37370$ Approx.",
    "popularCourses": "Professional MBA",
    "admissionAndFacilities": "TUTION FEE:19500 USD & i20 fee: 250USD",
    "inTake": "MAY 2025&SEP 2025&JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Golden Gate University",
    "aboutCollegeOrInstitute": "Campus: Downtown San Francisco & Provide 40% Scholarship &Formal Education: 15 & 16 yrs accepted &",
    "keyHighlights": "GPA:3&Percentage: 65&IELTS:6.5&DUOLINGO:110&TOEFL:79 & PTE:57 & Internal evaluation & Deadline : July 7th, Nov 10th, march 9th &  Offer TAT: 10-15 working days & i20 : 1 week & Financials to be shown in Bank Statement : 37370$ Approx.",
    "popularCourses": "Professional Master of Science in Data science",
    "admissionAndFacilities": "TUTION FEE:19500 USD & i20 fee: 250USD",
    "inTake": "MAY 2025&SEP 2025&JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Golden Gate University",
    "aboutCollegeOrInstitute": "Campus: Downtown San Francisco & Provide 40% Scholarship &Formal Education: 15 & 16 yrs accepted &",
    "keyHighlights": "GPA:3&Percentage: 65&IELTS:6.5&DUOLINGO:110&TOEFL:79 & PTE:57 & Internal evaluation & Deadline : July 7th, Nov 10th, march 9th &  Offer TAT: 10-15 working days & i20 : 1 week & Financials to be shown in Bank Statement : 37370$ Approx.",
    "popularCourses": "Professional Master of Science in Engineering Management",
    "admissionAndFacilities": "TUTION FEE:19500 USD & i20 fee: 250USD",
    "inTake": "MAY 2025&SEP 2025&JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Golden Gate University",
    "aboutCollegeOrInstitute": "Campus: Downtown San Francisco & Provide 40% Scholarship &Formal Education: 15 & 16 yrs accepted &",
    "keyHighlights": "GPA:3&Percentage: 65&IELTS:6.5&DUOLINGO:110&TOEFL:79 & PTE:57 & Internal evaluation & Deadline : July 7th, Nov 10th, march 9th &  Offer TAT: 10-15 working days & i20 : 1 week & Financials to be shown in Bank Statement : 37370$ Approx.",
    "popularCourses": "Professional Master of Science in Information Technology Management",
    "admissionAndFacilities": "TUTION FEE:19500 USD & i20 fee: 250USD",
    "inTake": "MAY 2025&SEP 2025&JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Golden Gate University",
    "aboutCollegeOrInstitute": "Campus: Downtown San Francisco & Provide 40% Scholarship &Formal Education: 15 & 16 yrs accepted &",
    "keyHighlights": "GPA:3&Percentage: 65&IELTS:6.5&DUOLINGO:110&TOEFL:79 & PTE:57 & Internal evaluation & Deadline : July 7th, Nov 10th, march 9th &  Offer TAT: 10-15 working days & i20 : 1 week & Financials to be shown in Bank Statement : 37370$ Approx.",
    "popularCourses": "Professional Master of Science in Computer science",
    "admissionAndFacilities": "TUTION FEE:19500 USD & i20 fee: 250USD",
    "inTake": "MAY 2025&SEP 2025&JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Campbellsville University",
    "aboutCollegeOrInstitute": "Campus: Kentucky (Louisville), and LA & Formal education: 15 & 16 years accepted & Orientation for new students entering the graduate business program is on our learning platform called Moodle.",
    "keyHighlights": "PG- 3.0 US GPA &IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE:53 &Deadlines: 3rd May, 21st june, 16th August, 11th October, 5th January, 8th March & Offer TAT : 1 week (Approximately). Varies according to the enrollment term applied for. & i20: 1 week (Approximately). Varies according to the enrollment term applied for. Financials to be shown in Bank Statement : At least $ 22,950 OR a monthly Direct deposit of $1912 from an employer",
    "popularCourses": "MS Information Technology Management - STEM",
    "admissionAndFacilities": "TUTION FEE:14850 USD & Enrollment Deposit: 125USD",
    "inTake": "MAR 2025 & MAY 2025& JUN 2025& AUG 2025& OCT 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Campbellsville University",
    "aboutCollegeOrInstitute": "Campus: Kentucky (Louisville), and LA & Formal education: 15 & 16 years accepted & Orientation for new students entering the graduate business program is on our learning platform called Moodle.",
    "keyHighlights": "PG- 3.0 US GPA &IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE:53 &Deadlines: 3rd May, 21st june, 16th August, 11th October, 5th January, 8th March & Offer TAT : 1 week (Approximately). Varies according to the enrollment term applied for. & i20: 1 week (Approximately). Varies according to the enrollment term applied for. Financials to be shown in Bank Statement : At least $ 22,950 OR a monthly Direct deposit of $1912 from an employer",
    "popularCourses": "MS Computer Science - STEM",
    "admissionAndFacilities": "TUTION FEE:14850 USD & Enrollment Deposit: 125USD",
    "inTake": "MAR 2025 & MAY 2025& JUN 2025& AUG 2025& OCT 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Campbellsville University",
    "aboutCollegeOrInstitute": "Campus: Kentucky (Louisville), and LA & Formal education: 15 & 16 years accepted & Orientation for new students entering the graduate business program is on our learning platform called Moodle.",
    "keyHighlights": "PG- 3.0 US GPA &IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE:53 &Deadlines: 3rd May, 21st june, 16th August, 11th October, 5th January, 8th March & Offer TAT : 1 week (Approximately). Varies according to the enrollment term applied for. & i20: 1 week (Approximately). Varies according to the enrollment term applied for. Financials to be shown in Bank Statement : At least $ 22,950 OR a monthly Direct deposit of $1912 from an employer",
    "popularCourses": "MS Data Science and Artificial Intelligence- STEM",
    "admissionAndFacilities": "TUTION FEE:17820 USD & Enrollment Deposit: 125USD",
    "inTake": "MAR 2025 & MAY 2025& JUN 2025& AUG 2025& OCT 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Campbellsville University",
    "aboutCollegeOrInstitute": "Campus: Kentucky (Louisville), and LA & Formal education: 15 & 16 years accepted & Orientation for new students entering the graduate business program is on our learning platform called Moodle.",
    "keyHighlights": "PG- 3.0 US GPA &IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE:53 &Deadlines: 3rd May, 21st june, 16th August, 11th October, 5th January, 8th March & Offer TAT : 1 week (Approximately). Varies according to the enrollment term applied for. & i20: 1 week (Approximately). Varies according to the enrollment term applied for. Financials to be shown in Bank Statement : At least $ 22,950 OR a monthly Direct deposit of $1912 from an employer",
    "popularCourses": "Master of Management and Leadership - Non STEM",
    "admissionAndFacilities": "TUTION FEE:14850 USD & Enrollment Deposit: 125USD",
    "inTake": "MAR 2025 & MAY 2025& JUN 2025& AUG 2025& OCT 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Campbellsville University",
    "aboutCollegeOrInstitute": "Campus: Kentucky (Louisville), and LA & Formal education: 15 & 16 years accepted & Orientation for new students entering the graduate business program is on our learning platform called Moodle.",
    "keyHighlights": "PG- 3.0 US GPA &IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE:53 &Deadlines: 3rd May, 21st june, 16th August, 11th October, 5th January, 8th March & Offer TAT : 1 week (Approximately). Varies according to the enrollment term applied for. & i20: 1 week (Approximately). Varies according to the enrollment term applied for. Financials to be shown in Bank Statement : At least $ 22,950 OR a monthly Direct deposit of $1912 from an employer",
    "popularCourses": "MS Cloud Computing - STEM",
    "admissionAndFacilities": "TUTION FEE:14850 USD & Enrollment Deposit: 125USD",
    "inTake": "MAR 2025 & MAY 2025& JUN 2025& AUG 2025& OCT 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Campbellsville University",
    "aboutCollegeOrInstitute": "Campus: Kentucky (Louisville), and LA & Formal education: 15 & 16 years accepted & Orientation for new students entering the graduate business program is on our learning platform called Moodle.",
    "keyHighlights": "PG- 3.0 US GPA &IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE:53 &Deadlines: 3rd May, 21st june, 16th August, 11th October, 5th January, 8th March & Offer TAT : 1 week (Approximately). Varies according to the enrollment term applied for. & i20: 1 week (Approximately). Varies according to the enrollment term applied for. Financials to be shown in Bank Statement : At least $ 22,950 OR a monthly Direct deposit of $1912 from an employer",
    "popularCourses": "Professional MBA - Non STEM",
    "admissionAndFacilities": "TUTION FEE:17820 USD & Enrollment Deposit: 250USD",
    "inTake": "MAR 2025 & MAY 2025& JUN 2025& AUG 2025& OCT 2025& JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS Project Management - STEM",
    "admissionAndFacilities": "TUTION FEE:15,675-16,625USD Approx.& i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS Information Technology Management - STEM",
    "admissionAndFacilities": "TUTION FEE:15,675-16,625USD Approx.& i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS Digital Marketing - STEM",
    "admissionAndFacilities": "TUTION FEE:15,675-16,625USD Approx.& i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS Computer Science - STEM",
    "admissionAndFacilities": "TUTION FEE:15,675-16,625USD Approx.& i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS Business Analytics - STEM",
    "admissionAndFacilities": "TUTION FEE:15,675-16,625USD Approx.& i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS Healthcare Management - STEM",
    "admissionAndFacilities": "TUTION FEE:15,675-16,625USD Approx.& i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS Business Management - STEM",
    "admissionAndFacilities": "TUTION FEE:15,675-16,625USD Approx.& i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "M.S.Management (Social Innovation & Entrepreneurship",
    "admissionAndFacilities": "TUITION FEE:16,235 - $ 18,050 Apporx & i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS Professional Accountancy",
    "admissionAndFacilities": "TUITION FEE:16,235 - $ 18,050 Apporx & i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS in Degree in Exercise Sports and Science",
    "admissionAndFacilities": "TUITION FEE: 19,950 Apporx & i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS in Public Health",
    "admissionAndFacilities": "TUITION FEE: 17,100 Apporx & i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MA in Psychology",
    "admissionAndFacilities": "TUITION FEE: 15,675-16,625 Apporx & i20 fee: 200USD",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS Information Technology - STEM",
    "admissionAndFacilities": "",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 6600 -$ 8000 for the entire pg program. Varies as per the course taken & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 &IELTS:6 &DUOLINGO:100 &TOEFL:80 & PTE:55 & Internal evaluation & Deadline: Fall A International App - August 1st, Transfer App - Sep 13th & Fall B International App - 28 Sep, Fall B Transfer App - 26 Oct. &  Offer TAT: 1 week & i20: 1 week & Financials to be shown in Bank Statement : Approx $ 30, 000",
    "popularCourses": "MS Computer Science{NEW PROGRAM)",
    "admissionAndFacilities": "",
    "inTake": "MAR 2025 & MAY 2025 & SEP 2025 & OCT 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 7000 for the entire ug program. Varies as per the course taken & Formal Education: High school mandatory.",
    "keyHighlights": "UG PROGRAMS & GPA:3 & Percentage : 60 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 55 & Financials to be shown in Bank Statement :$43,273 (non-STEM) and $44,273 (STEM).",
    "popularCourses": "BS in Biology-STEM",
    "admissionAndFacilities": "TUITION FEE: 16775 USD & Enrolment Deposit : 200 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 7000 for the entire ug program. Varies as per the course taken & Formal Education: High school mandatory.",
    "keyHighlights": "UG PROGRAMS & GPA:3 & Percentage : 60 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 55 & Financials to be shown in Bank Statement :$43,273 (non-STEM) and $44,273 (STEM).",
    "popularCourses": "BS in Biomedical Science- STEM",
    "admissionAndFacilities": "TUITION FEE: 20,273 USD Apporx & Enrollment Deposit : 200 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 7000 for the entire ug program. Varies as per the course taken & Formal Education: High school mandatory.",
    "keyHighlights": "UG PROGRAMS & GPA:3 & Percentage : 60 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 55 & Financials to be shown in Bank Statement :$43,273 (non-STEM) and $44,273 (STEM).",
    "popularCourses": "BS in Finance- Non STEM",
    "admissionAndFacilities": "TUITION FEE: 20,273 USD Apporx & Enrollment Deposit : 200 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 7000 for the entire ug program. Varies as per the course taken & Formal Education: High school mandatory.",
    "keyHighlights": "UG PROGRAMS & GPA:3 & Percentage : 60 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 55 & Financials to be shown in Bank Statement :$43,273 (non-STEM) and $44,273 (STEM).",
    "popularCourses": "BS in Information Technology- STEM",
    "admissionAndFacilities": "TUITION FEE: 20,273 USD Apporx & Enrollment Deposit : 200 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 7000 for the entire ug program. Varies as per the course taken & Formal Education: High school mandatory.",
    "keyHighlights": "UG PROGRAMS & GPA:3 & Percentage : 60 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 55 & Financials to be shown in Bank Statement :$43,273 (non-STEM) and $44,273 (STEM).",
    "popularCourses": "BS in Mathematics- STEM",
    "admissionAndFacilities": "TUITION FEE: 20,273 USD Apporx & Enrollment Deposit : 200 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 7000 for the entire ug program. Varies as per the course taken & Formal Education: High school mandatory.",
    "keyHighlights": "UG PROGRAMS & GPA:3 & Percentage : 60 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 55 & Financials to be shown in Bank Statement :$43,273 (non-STEM) and $44,273 (STEM).",
    "popularCourses": "BS in Medical Technology- STEM",
    "admissionAndFacilities": "TUITION FEE: 20,273 USD Apporx & Enrollment Deposit : 200 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 7000 for the entire ug program. Varies as per the course taken & Formal Education: High school mandatory.",
    "keyHighlights": "UG PROGRAMS & GPA:3 & Percentage : 60 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 55 & Financials to be shown in Bank Statement :$43,273 (non-STEM) and $44,273 (STEM).",
    "popularCourses": "BA in Economics - Non STEM",
    "admissionAndFacilities": "TUITION FEE: 20,273 USD Apporx & Enrollment Deposit : 200 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 7000 for the entire ug program. Varies as per the course taken & Formal Education: High school mandatory.",
    "keyHighlights": "UG PROGRAMS & GPA:3 & Percentage : 60 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 55 & Financials to be shown in Bank Statement :$43,273 (non-STEM) and $44,273 (STEM).",
    "popularCourses": "BA in Psychology- STEM",
    "admissionAndFacilities": "TUITION FEE: 20,273 USD Apporx & Enrollment Deposit : 200 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "St. Francis College",
    "aboutCollegeOrInstitute": "Campus: Brooklyn,New York & Provide scholarship $ 7000 for the entire ug program. Varies as per the course taken & Formal Education: High school mandatory.",
    "keyHighlights": "UG PROGRAMS & GPA:3 & Percentage : 60 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 55 & Financials to be shown in Bank Statement :$43,273 (non-STEM) and $44,273 (STEM).",
    "popularCourses": "BA in Communication Arts\n(Digital Media concentration only)- STEM",
    "admissionAndFacilities": "TUITION FEE: 20,273 USD Apporx & Enrollment Deposit : 200 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Applied Statistics & Analytics",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Biochemistry, Cell and Molecular Biology",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Biology",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Broadcast and Cinematic Arts(Electronic Media Studies\nElectronic Media Management\nElectronic Media Production)",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Chemistry",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Computer Science",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Economics",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Engineering",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Exercise Physiology",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Experimental Psychology",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Industrial / Organizational Psychology",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Information Systems",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Master of Science in Administration: MSA( Digital Management\nProject Management)",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Master of Business Administration:Business Data Analytics (MBA-BDA)",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Master of Business Administration:Cybersecurity (MBA-CYB)",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Master of Business Administration:Finance (MBA-FINEM)",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Master of Business Administration:Information Systems using SAP Software (MBA-MIS)",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Master of Business Administration:Logistics (MBA-LOG)",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Master of Business Administration:Project Management (MBA-PM)",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Mathematics",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Neuroscience",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Physics",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Central Michigan University",
    "aboutCollegeOrInstitute": "Campus : Mount Pleasant, Michigan & Provide scholarship on merit basis",
    "keyHighlights": "PG PROGRAMS & IELTS:6.5 & DUOLINGO:100 &TOEFL:79 & PTE: 53 & Offer TAT: 2 weeks & i20: 1 week",
    "popularCourses": "Public Health: MPH",
    "admissionAndFacilities": "TUITION FEE: 26000 USD Approx & Application fee: 65 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Faulkner University",
    "aboutCollegeOrInstitute": "Campus: Alabama(Montgomery) and Atlanta & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA : 2.5 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 60 & Offer TAT: 1 week & i20: 1 week &WES- No but if less GPA , more F's and im proper transcripts then required &Financials to be shown in Bank statement Approx. 30000 USD",
    "popularCourses": "Ms Management Emphasis with Business analytics - STEM",
    "admissionAndFacilities": "TUITION FEE: 17750 USD Approx.",
    "inTake": "JAN 2026 &MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Faulkner University",
    "aboutCollegeOrInstitute": "Campus: Alabama(Montgomery) and Atlanta & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA : 2.5 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 60 & Offer TAT: 1 week & i20: 1 week &WES- No but if less GPA , more F's and im proper transcripts then required &Financials to be shown in Bank statement Approx. 30000 USD",
    "popularCourses": "MS In Information Technology Management Emphasis",
    "admissionAndFacilities": "TUITION FEE: 17750 USD Approx.",
    "inTake": "JAN 2026 &MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Faulkner University",
    "aboutCollegeOrInstitute": "Campus: Alabama(Montgomery) and Atlanta & Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS & GPA : 2.5 & IELTS:6 & DUOLINGO:100 &TOEFL:70 & PTE: 60 & Offer TAT: 1 week & i20: 1 week &WES- No but if less GPA , more F's and im proper transcripts then required &Financials to be shown in Bank statement Approx. 30000 USD",
    "popularCourses": "MS Management Empahasis In Data Science",
    "admissionAndFacilities": "TUITION FEE: 17750 USD Approx.",
    "inTake": "JAN 2026 &MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Wayland Baptist University",
    "aboutCollegeOrInstitute": "Campus:San Antonio, Texas &  Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS  & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:61 & PTE: 50 & Offer TAT: 1 week & i20: 1 week &Financials to be shown in Bank statement Approx. 30000 - 40000 USD",
    "popularCourses": "MS in Information Technology (mngmt Info Systm and cyber security specializations)",
    "admissionAndFacilities": "TUITION FEE: 14250 USD Approx. & Enrollment fee: 150 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "Wayland Baptist University",
    "aboutCollegeOrInstitute": "Campus:San Antonio, Texas &  Formal Education: 15 & 16 yrs accepted",
    "keyHighlights": "PG PROGRAMS  & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:61 & PTE: 50 & Offer TAT: 1 week & i20: 1 week &Financials to be shown in Bank statement Approx. 30000 - 40000 USD",
    "popularCourses": "MS in Business Analytics",
    "admissionAndFacilities": "TUITION FEE: 14250 USD Approx. & Enrollment fee: 150 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Dallas, Texas",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "MBA - Non STEM",
    "admissionAndFacilities": "TUITION FEE:  21060 USD Approx. & Enrollment fee: 300 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Washington, D.C",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "MS in Artificial Intelligence in business - STEM",
    "admissionAndFacilities": "TUITION FEE:  21060 USD Approx. & Enrollment fee: 300 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Lincroft, New Jersey",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "MS in Finance - Non STEM",
    "admissionAndFacilities": "TUITION FEE:  21060 USD Approx. & Enrollment fee: 300 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Seattle, Washington",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "MS in Global Business with blockchain technology - STEM",
    "admissionAndFacilities": "TUITION FEE:  21060 USD Approx. & Enrollment fee: 300 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Ann Arbor, Michigan",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "MS in Project management - STEM",
    "admissionAndFacilities": "TUITION FEE:  21060 USD Approx. & Enrollment fee: 300 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Bay Area, California",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "MS in Strategic management - STEM",
    "admissionAndFacilities": "TUITION FEE:  21060 USD Approx. & Enrollment fee: 300 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Florence, Kentucky",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "MS in Cyber Engineering - STEM",
    "admissionAndFacilities": "TUITION FEE:  21060 USD Approx. & Enrollment fee: 300 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Florence, Kentucky",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "MS in Data science - STEM",
    "admissionAndFacilities": "TUITION FEE:  21060 USD Approx. & Enrollment fee: 300 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Florence, Kentucky",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "MS in Information systems security - STEM",
    "admissionAndFacilities": "TUITION FEE:  21060 USD Approx. & Enrollment fee: 300 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Florence, Kentucky",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "MS in Information technology - STEM",
    "admissionAndFacilities": "TUITION FEE:  21060 USD Approx. & Enrollment fee: 300 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Florence, Kentucky",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "MS in Organizational leadership - Non STEM",
    "admissionAndFacilities": "TUITION FEE:  21060 USD Approx. & Enrollment fee: 300 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Florence, Kentucky",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "PH.D in Business",
    "admissionAndFacilities": "TUITION FEE: 35,100 USD Apporx & & Enrollment fee: 250 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Florence, Kentucky",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "PH.D in Information technology",
    "admissionAndFacilities": "TUITION FEE: 35,100 USD Apporx & & Enrollment fee: 250 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Florence, Kentucky",
    "keyHighlights": "PG & PH,D PROGRAMS & GPA: 3 & IELTS:6 & DUOLINGO:100 & TOEFL:79 & PTE: 55 & Offer TAT: 1 week & i20: 10 Days &Financials to be shown in Bank statement Approx. 35000 USD for PG Approx. 50000 USD for Phd",
    "popularCourses": "PH.D in Leadership",
    "admissionAndFacilities": "TUITION FEE: 35,100 USD Apporx & & Enrollment fee: 250 USD",
    "inTake": "JAN 2026 & MAR 2025 & JUN 2025 & AUG 2025 & OCT 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of the Cumberlands",
    "aboutCollegeOrInstitute": "Campus: Florence, Kentucky",
    "keyHighlights": "",
    "popularCourses": "",
    "admissionAndFacilities": "",
    "inTake": ""
  },
  {
    "location": "USA",
    "instituteName": "Baptist University Of Florida",
    "aboutCollegeOrInstitute": "Campus: Hialeah",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 & IELTS:6.5 & DUOLINGO:110 &TOEFL:80 & GRE: 150",
    "popularCourses": "MBA",
    "admissionAndFacilities": "TUITION FEE: 16200 USD Approx.",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Baptist University Of Florida",
    "aboutCollegeOrInstitute": "Campus: Hialeah",
    "keyHighlights": "PG PROGRAMS & GPA:2.5 & IELTS:6.5 & DUOLINGO:110 &TOEFL:80 & GRE: 150",
    "popularCourses": "MBA-Data Analytics Concentration",
    "admissionAndFacilities": "TUITION FEE: 16200 USD Approx.",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Accounting",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Finance track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Finance planning track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Accounting minor",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "B.S in computer science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Computer Information System",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Game development track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Data Science track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Economics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "B.S in Economics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "B.A in Economics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Economics transfer path",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Finance",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "B.S.B",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "B.A.B",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "B.S.B in Finance/Commercial Banking",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "B.S.B in Finance/Financial Planning",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "B.A.B in Finance/Commercial Banking",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "B.A.B in Finance/Financial Planning",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Fincance Transfer Path",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Financial Planning Transfer Path",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Journalism and Mass Communication",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Organizational Communication and Leadership",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Major in Organizational Communication",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in Organizational Communication",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in Sports Communication",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Agriculture",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Agriculture System Technology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Agriscience",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Agricultural economics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Agriculture education",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Agdronomy",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Animal/Equine Science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Horticulture",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Pre-veterinary medicine",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "veterinary technology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "biology bachelor of science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Fisheries/Aquatic Biology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Biology/Secondary Certification",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Biomedical Sciences",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Pre-Pharmacy",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Pre-Physical Therapy",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Pre-Physician Assistant",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Wildlife and Conservation Biology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in biology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Chemistry",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Chemistry Area",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Chemistry Major",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Chemistry Major with Secondary Certification",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Chemistry Major for Pre-Med and Pre-Dental Students",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Chemistry Major for Pre-Pharmacy Students",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Pre-Health Professionals Web Page",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Chemistry Major with Biochemistry Option",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Chemistry Major with Forensics Option",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Chemistry Polymer and Materials Science Track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Chemistry Minor",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Earth Science Secondary Certificate (grades 8-12)",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Environmental Science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Geography and GIS",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Geology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minors",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Anthropology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Archaeology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Earth Science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Environmental Geology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Geographic Information Science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Globalization and Development",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Sustainability Studies",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "GIS Certificate",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Engineering",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Civil and Sustainability Engineering",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Construction Management and Architecture",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Cybersecurity and Network Management",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Design Engineering Technology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Electromechanical Engineering Technology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Engineering Physics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Aerospace Engineering Track/Electrical/Engineering Track/Mechanical EngineeringTrack/Advanced Physics Track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Manufacturing Engineering Technology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Physics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Mathematics and Statistics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Mathematics Major",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Mathematics/Secondary Certification Area",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Mathematics/Secondary Certification Major",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "MathematicsApplied Mathematics Area",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Mathematics/Data Science Area",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Mathematics/Pre-MBA Area",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Mathematics and Statistics Minors:-Actuarial Science Minor, Applied Statistics Minor, Mathematical Biology Minor, Mathematics Minor",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Cybersecurity and Network Management",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Occupational Safety and Health",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Occupational Safety and Health Track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Environmental Health an Safety Track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Art&Design",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Art Education",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Art History",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Ceramics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Drawing",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Graphic Design",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Metalsmithing&Jewelry",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Painting",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Photography",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Printmaking",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Sculpture",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Wood Working/ Furniture Design",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "English and Philosophy",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Majors:- Creative Writing, English Education, Literature, Philosophy, English Education/Teaching English to Speakers of other Languages",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minors:-Creative writing, English, English Education, Film Studies, Gender and Diversity Studies, Literature and Philosophy, Philosophy, Professional writing, Rhetoric",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "History",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Majors:- history, history with social studies certification(8-12),",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minors:- british studies, east asian studies, history,religious studies",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Double Degrees:- History Area in law(3+3)",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Accelerated BA/BS+MA program(4+1)",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Art history",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Music",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Theatre",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Liberal arts fields in humanities",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "English",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "French",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "German",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Japanese",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Philosophy",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Spanish",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "liberal arts fields in natural sciences/ mathematics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Biology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Chemistry",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Earth and Environmental science: Archaeology, Earth science, Geography, Environmental Geology, Social Science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Mathematics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Physical Science(physics)",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "liberal arts fields in social science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Economics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "History",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "International affairs",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Political science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Legal science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Psychology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "sociology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Religious studies",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "liberal arts interdisciplinary fields",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Gender and diversity studies",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Interdisciplinary studies(self-designed;discuss with program coordinator",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "sustainability studies",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "liberal arts field in theatre",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Music",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "global languages",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "chinese",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Major in culture and language studies/chinese track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "chinese studies minor",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "certificate in chinese language and culture",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "french",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "major in culture and language studies/french track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "french minor",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "certificate in french language and culture",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "japanese",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "major in global language/japanese track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "major in global language/ japanese translation and interpretation track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "major In global language/japanese teaching certification track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "japanese minor",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "certificate in japanese language and culture",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "portuguese",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "certificate in portuguese language and culture",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "spanish",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "major in global language/spanish track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "major in global language/spanish translation and interpretation track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "major in global language/spanish teaching certification track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "spanish minor",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "certification in spanish language and culture",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "music education instrumental emphasis",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "music education vocal emphasis",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "performance",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Musical theatre",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Music composition",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Keyboard studies",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Music business track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Music business with business administration minor",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Music minor",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Music theatre minor",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Political science and sociology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Major in political science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Major in political science with social studies certification(grades8-12)",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in political science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in social science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in social and behavioral sciences",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Sociology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Major in sociology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in sociology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in pop culture",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in social and behavioral sciences",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "International studies",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Major in international studies",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in international studies",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in peace studies",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in social and behavioral sciences",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Pre-law",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Area:- political science/pre-professional legal studies track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor in legal studies",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "3+3 accelerated law school program",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Psychology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Theatre",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Majors:- theare/film track, musical theatre track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minors:-theatre, theatre design/technical (minor), theatre performance(minor), musical theatre(minor)",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Bachelor of Science in nursing",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Occupational therapy",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Exercise science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Nutrition&Dietetics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Public and Community health track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Tracks:-Healthcare administration track, health education and promotion track, health informatics adminstration track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Minor:- public and community health minor",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "MBA in Accounting",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "M.S in Information System",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Business Analytics Concentration",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Informational Security Concentration",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Cybersecurity Management",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "M.S in Economics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "M.S in EconomicDevelopment",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "MA in Journalism and Mass Communication",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Management, Marketing and Business Administration",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "MA in Organizational Communication",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "MS in Organizational Communication",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Certificate in Organizational Dynamics",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Certificate in Health Communication",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "MS IN Agricultural Thesis",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "MS in Agricultural Non-Thesis",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "M.S in Biology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "M.S in Watershed Science Concentration",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Master of Science in Chemistry",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "M.S in Earth and Environmental Sciences-Thesis Option",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "M.S in Earth and Environmental Sciences-Non Thesis Option",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "M.S in Sustainability Development",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "VeterinaryTechnology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "M.A. in Teaching",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Master of Science in Cybersecurity Management",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Safety Management Concentration",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Industrial Hygiene Concentration",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Environmental Concentration",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Watershed Studies Program",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Master in Watershed science",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Master in Watershed science- Thesis Track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Master in Watershed science-Non Thesis Track",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Doctors of Arts in english Pedagogy",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "MA in English",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "MA in Teaching English to Speakers of other Languages",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Certificate Programs",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "MA in History",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Graduate Assistant Application",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Master of Music Education",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Master of Public Administration",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Psychology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Masters in Clinical Psychology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Masters in General Experimental Psychology",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Graduate Certificate in Research Design and Analysis",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Psychology Masters Alumni Testimonials",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Education",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Occupational therapy",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Speech-Language Pathology(CDI)",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Applied Engineering and Technology Management(AETM)",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Business Administration",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Mass Communication(concentration in public relations)",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Information systems(concentratio in Business Analytics)",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Murray State University",
    "aboutCollegeOrInstitute": "Campus: Kentucky",
    "keyHighlights": "UG/ PG PROGRAMS & GPA:3 & IELTS:6 & DUOLINGO:105 &TOEFL:75 & GRE: 315 & Offer TAT : 2 weeks & i20: 45 working days & Deadlines: June 28, Oct 15",
    "popularCourses": "Public Administration",
    "admissionAndFacilities": "TUITION FEE: 20000 USD Aprrox. & Application fee: 50USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of Louisville - Public University",
    "aboutCollegeOrInstitute": "Campus:Louisville & Formal Education : 16 if Bsc same background & NACES Required,",
    "keyHighlights": "PG PROGRAMS & GPA:3.5 & IELTS:6.5 & DUOLINGO:105 &TOEFL:79 & GRE: NA & PTE: NA & Offer TAT : 5-12 weeks & i20: 10 working days & Deadlines: Spring - Nov 1st, Summer - April 1st, Fall - May 1st",
    "popularCourses": "Engineering programs",
    "admissionAndFacilities": "Tuition fee: 13,800 USD /year\nSince it's Two year Programme & Application fee: 65 USD",
    "inTake": "JAN 2026 & MAY 2025 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of Louisville - Public University",
    "aboutCollegeOrInstitute": "Campus:Louisville & Formal Education : 16 if Bsc same background & NACES Required,",
    "keyHighlights": "PG PROGRAMS & GPA:3.5 & IELTS:6.5 & DUOLINGO:105 &TOEFL:79 & GRE: NA & PTE: NA & Offer TAT : 5-12 weeks & i20: 10 working days & Deadlines: Spring - Nov 1st, Summer - April 1st, Fall - May 1st",
    "popularCourses": "MSBA - STEM",
    "admissionAndFacilities": "Tuition fee: 34500USD Approx. & Application fee: 65 USD",
    "inTake": "JAN 2026 & MAY 2025 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of Louisville - Public University",
    "aboutCollegeOrInstitute": "Campus:Louisville & Formal Education : 16 if Bsc same background & NACES Required,",
    "keyHighlights": "PG PROGRAMS & GPA:3.5 & IELTS:6.5 & DUOLINGO:105 &TOEFL:79 & GRE: NA & PTE: NA & Offer TAT : 5-12 weeks & i20: 10 working days & Deadlines: Spring - Nov 1st, Summer - April 1st, Fall - May 1st",
    "popularCourses": "MBA - NON STEM",
    "admissionAndFacilities": "Tuition fee: 38500 USD  Approx.& Application fee: 65 USD",
    "inTake": "JAN 2026 & MAY 2025 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of Louisville - Public University",
    "aboutCollegeOrInstitute": "Campus:Louisville & Formal Education : 16 if Bsc same background & NACES Required,",
    "keyHighlights": "PG PROGRAMS & GPA:3.5 & IELTS:6.5 & DUOLINGO:105 &TOEFL:79 & GRE: NA & PTE: NA & Offer TAT : 5-12 weeks & i20: 10 working days & Deadlines: Spring - Nov 1st, Summer - April 1st, Fall - May 1st",
    "popularCourses": "MS Accounting - STEM",
    "admissionAndFacilities": "Tuition fee: 28000 USD Approx.& Application fee: 65 USD",
    "inTake": "JAN 2026 & MAY 2025 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "University of Louisville - Public University",
    "aboutCollegeOrInstitute": "Campus:Louisville & Formal Education : 16 if Bsc same background & NACES Required,",
    "keyHighlights": "PG PROGRAMS & GPA:3.5 & IELTS:6.5 & DUOLINGO:105 &TOEFL:79 & GRE: NA & PTE: NA & Offer TAT : 5-12 weeks & i20: 10 working days & Deadlines: Spring - Nov 1st, Summer - April 1st, Fall - May 1st",
    "popularCourses": "PhD",
    "admissionAndFacilities": "",
    "inTake": "JAN 2026 & MAY 2025 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Purdue Northwest University( Public University)",
    "aboutCollegeOrInstitute": "Campus : Hommand, West Ville & Formal Education : 16 if Bsc same background",
    "keyHighlights": "PG PROGRAMS & GPA:3 -4  & IELTS:6.5 & DUOLINGO:115 &TOEFL:80 & GRE: Waiver & PTE: NA & Offer TAT : 1 week & i20: 10-15working days & Deadlines: Spring:Oct 07 ,Fall:May 15",
    "popularCourses": "Biology",
    "admissionAndFacilities": "Tuition fee: 21810USD Approx.& Application fee: 75 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Purdue Northwest University( Public University)",
    "aboutCollegeOrInstitute": "Campus : Hommand, West Ville & Formal Education : 16 if Bsc same background",
    "keyHighlights": "PG PROGRAMS & GPA:3 -4  & IELTS:6.5 & DUOLINGO:115 &TOEFL:80 & GRE: Waiver & PTE: NA & Offer TAT : 1 week & i20: 10-15working days & Deadlines: Spring:Oct 07 ,Fall:May 15",
    "popularCourses": "Computer Science",
    "admissionAndFacilities": "Tuition fee: 21810USD Approx.& Application fee: 75 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Purdue Northwest University( Public University)",
    "aboutCollegeOrInstitute": "Campus : Hommand, West Ville & Formal Education : 16 if Bsc same background",
    "keyHighlights": "PG PROGRAMS & GPA:3 -4  & IELTS:6.5 & DUOLINGO:115 &TOEFL:80 & GRE: Waiver & PTE: NA & Offer TAT : 1 week & i20: 10-15working days & Deadlines: Spring:Oct 07 ,Fall:May 15",
    "popularCourses": "Electrical and Computer Engineering",
    "admissionAndFacilities": "Tuition fee: 21810USD Approx.& Application fee: 75 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Purdue Northwest University( Public University)",
    "aboutCollegeOrInstitute": "Campus : Hommand, West Ville & Formal Education : 16 if Bsc same background",
    "keyHighlights": "PG PROGRAMS & GPA:3 -4  & IELTS:6.5 & DUOLINGO:115 &TOEFL:80 & GRE: Waiver & PTE: NA & Offer TAT : 1 week & i20: 10-15working days & Deadlines: Spring:Oct 07 ,Fall:May 15",
    "popularCourses": "Mechanical Engineering",
    "admissionAndFacilities": "Tuition fee: 21810USD Approx.& Application fee: 75 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Purdue Northwest University( Public University)",
    "aboutCollegeOrInstitute": "Campus : Hommand, West Ville & Formal Education : 16 if Bsc same background",
    "keyHighlights": "PG PROGRAMS & GPA:3 -4  & IELTS:6.5 & DUOLINGO:115 &TOEFL:80 & GRE: Waiver & PTE: NA & Offer TAT : 1 week & i20: 10-15working days & Deadlines: Spring:Oct 07 ,Fall:May 15",
    "popularCourses": "Computer Engineering Technology",
    "admissionAndFacilities": "Tuition fee: 21810USD Approx.& Application fee: 75 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Purdue Northwest University( Public University)",
    "aboutCollegeOrInstitute": "Campus : Hommand, West Ville & Formal Education : 16 if Bsc same background",
    "keyHighlights": "PG PROGRAMS & GPA:3 -4  & IELTS:6.5 & DUOLINGO:115 &TOEFL:80 & GRE: Waiver & PTE: NA & Offer TAT : 1 week & i20: 10-15working days & Deadlines: Spring:Oct 07 ,Fall:May 15",
    "popularCourses": "Industrial Engineering Technology",
    "admissionAndFacilities": "Tuition fee: 21810USD Approx.& Application fee: 75 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Purdue Northwest University( Public University)",
    "aboutCollegeOrInstitute": "Campus : Hommand, West Ville & Formal Education : 16 if Bsc same background",
    "keyHighlights": "PG PROGRAMS & GPA:3 -4  & IELTS:6.5 & DUOLINGO:115 &TOEFL:80 & GRE: Waiver & PTE: NA & Offer TAT : 1 week & i20: 10-15working days & Deadlines: Spring:Oct 07 ,Fall:May 15",
    "popularCourses": "Mechanical Engineering Technology",
    "admissionAndFacilities": "Tuition fee: 21810USD Approx.& Application fee: 75 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Purdue Northwest University( Public University)",
    "aboutCollegeOrInstitute": "Campus : Hommand, West Ville & Formal Education : 16 if Bsc same background",
    "keyHighlights": "PG PROGRAMS & GPA:3 -4  & IELTS:6.5 & DUOLINGO:115 &TOEFL:80 & GRE: Waiver & PTE: NA & Offer TAT : 1 week & i20: 10-15working days & Deadlines: Spring:Oct 07 ,Fall:May 15",
    "popularCourses": "Technology Leadership and Management",
    "admissionAndFacilities": "Tuition fee: 21810USD Approx.& Application fee: 75 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Purdue Northwest University( Public University)",
    "aboutCollegeOrInstitute": "Campus : Hommand, West Ville & Formal Education : 16 if Bsc same background",
    "keyHighlights": "PG PROGRAMS & GPA:3 -4  & IELTS:6.5 & DUOLINGO:115 &TOEFL:80 & GRE: Waiver & PTE: NA & Offer TAT : 1 week & i20: 10-15working days & Deadlines: Spring:Oct 07 ,Fall:May 15",
    "popularCourses": "Master Business Administration(NON STEM)",
    "admissionAndFacilities": "Tuition fee: 21810USD Approx.& Application fee: 75 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Purdue Northwest University( Public University)",
    "aboutCollegeOrInstitute": "Campus : Hommand, West Ville & Formal Education : 16 if Bsc same background",
    "keyHighlights": "PG PROGRAMS & GPA:3 -4  & IELTS:6.5 & DUOLINGO:115 &TOEFL:80 & GRE: Waiver & PTE: NA & Offer TAT : 1 week & i20: 10-15working days & Deadlines: Spring:Oct 07 ,Fall:May 15",
    "popularCourses": "Masters in Business Analytics and Information Management",
    "admissionAndFacilities": "Tuition fee: 56700USD Approx. & Application fee: 75 USD",
    "inTake": "JAN 2026 & SEP 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Bachelor of Arts in Business Administration & Management",
    "admissionAndFacilities": "Tuition fee: 19050USD Approx. & i20 fee: 200USD & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Bachelor of Arts in Economics & Finance",
    "admissionAndFacilities": "Tuition fee: 19050USD Approx. & i20 fee: 200USD & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Bachelor of Arts in Political Science & International Relations",
    "admissionAndFacilities": "Tuition fee: 19050USD Approx. & i20 fee: 200USD & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Bachelor of Science in Information Technology",
    "admissionAndFacilities": "Tuition fee: 19050USD Approx. & i20 fee: 200USD & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Bachelor of Science in Software Engineering",
    "admissionAndFacilities": "Tuition fee: 19050USD Approx. & i20 fee: 200USD & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Master of Business Administration and Management",
    "admissionAndFacilities": "Tuition fee: 22230USD Approx. & i20 fee: 200USD  & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Master of Science in AI",
    "admissionAndFacilities": "Tuition fee: 22230USD Approx. & i20 fee: 200USD  & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Master of Science in Big Data Analytics",
    "admissionAndFacilities": "Tuition fee: 22230USD Approx. & i20 fee: 200USD  & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Master of Science in Cyber Security",
    "admissionAndFacilities": "Tuition fee: 22230USD Approx. & i20 fee: 200USD  & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Master of Science in Cloud Computing Engineering",
    "admissionAndFacilities": "Tuition fee: 22230USD Approx. & i20 fee: 200USD  & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Master of Science in Software Engineering",
    "admissionAndFacilities": "Tuition fee: 22230USD Approx. & i20 fee: 200USD  & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Bay Atlantic University",
    "aboutCollegeOrInstitute": "Campus: Washington, DC & Formal Education: Bachelors/12th grade/High school",
    "keyHighlights": "UG/PG PROGRAMS & GPA:3 -4  & IELTS:5.5 - 8 & DUOLINGO:75 - 90 &TOEFL:70-80 & GRE: Waiver & PTE: 48-53 & Offer TAT : 15 Days & i20: 10 working days & Deadlines: 1 month before the course start date",
    "popularCourses": "Double degree MBA",
    "admissionAndFacilities": "Tuition fee: 22230USD Approx. & i20 fee: 200USD  & Application fee: 45USD",
    "inTake": "JAN 2026 & MAY 2025 & AUG 2025"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate of Arts degree in Architecture",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts Art and Design",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts Degree in Biological Sciences",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts degree in Black Studies",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts in Business � Accelerated",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts in Business - General",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts in Communication Studies",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts Degree in Education: Early Childhood (Birth-4th grade)",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts degree Education - Middle and Secondary Level",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts degree in English",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts in Health Care Studies",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts in Health services Management",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts degree in Interior Design",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts degree in International Studies",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate of Arts for liberal arts",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate of Arts for liberal arts - Honors",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate of Arts Liberal Arts � Social/Behavioral Science",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts degree Mass Media",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate of Arts in Music Performance",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts degree in Psychology",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts in Public Health",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Arts in Theater",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in ArtsTourism and Hospitality Management",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate of Science in Biology",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate of Science in Chemistry",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Science in Computer Degree",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Science in Engineering Science",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Associate in Science in Mathematics",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Accounting",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "American Sign Language/English Interpreting (INT)",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Applied Engineering Technology",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Automotive Technology",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Behavioral Health/Human Services",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Biomedical Equipment Technology",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Business Leadership",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Computer Information Systems � Information Technology",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Construction Management",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Criminal Justice",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Culinary Arts",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Cybersecurity",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Dental Hygiene",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Diagnostic Medical Imaging",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Digital Video Production",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Facilities Management",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Fashion Merchandising & Marketing",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Fire Science",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Individualized Studies",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Medical Laboratory Technician",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Medium and Heavy Truck Technology",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Network Administration",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Nursing",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Paralegal Studies",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Photography",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Respiratory Care Technology",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Sound Recording and Music Technology",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Toyota T-TEN",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  },
  {
    "location": "USA",
    "instituteName": "Community College of Philadelphia",
    "aboutCollegeOrInstitute": "Campus: Main",
    "keyHighlights": "UG PROGRAMS & GPA:3 -4  & IELTS:6 - 8 & DUOLINGO:NA &TOEFL:77 & PTE: NA & Offer TAT : 15 Days & i20: 10-15 working days & Deadlines: 1 July 2025",
    "popularCourses": "Web and Mobile Application Development",
    "admissionAndFacilities": "Tuition fee: 6500USD per semester & Application fee: 45USD",
    "inTake": "SEP 2025 & JAN 2026"
  }
]]

const CanadaAllData = [ {
  "instituteName": "Acsenda College",
  "country": "Canada",
  "websiteUrl": "https://www.acsenda.com"
},
{
  "instituteName": "Adler University",
  "country": "Canada",
  "websiteUrl": "https://www.adler.edu"
},
{
  "instituteName": "Algonquin College",
  "country": "Canada",
  "websiteUrl": "https://www.algonquincollege.com"
},
{
  "instituteName": "British Columbia Institute of Technology (BCIT)",
  "country": "Canada",
  "websiteUrl": "https://www.bcit.ca"
},
{
  "instituteName": "Brock University",
  "country": "Canada",
  "websiteUrl": "https://brocku.ca"
},
{
  "instituteName": "Cambrian College",
  "country": "Canada",
  "websiteUrl": "https://cambriancollege.ca"
},
{
  "instituteName": "Cape Breton University (CBU)",
  "country": "Canada",
  "websiteUrl": "https://www.cbu.ca"
},
{
  "instituteName": "Capilano University",
  "country": "Canada",
  "websiteUrl": "https://capilanou.ca"
},
{
  "instituteName": "College of Rockies",
  "country": "Canada",
  "websiteUrl": "https://cotr.bc.ca"
},
{
  "instituteName": "Conestoga College",
  "country": "Canada",
  "websiteUrl": "https://www.conestogac.on.ca"
},
{
  "instituteName": "Douglas College",
  "country": "Canada",
  "websiteUrl": "https://www.douglascollege.ca"
},
{
  "instituteName": "Durham College",
  "country": "Canada",
  "websiteUrl": "https://durhamcollege.ca"
},
{
  "instituteName": "Fanshawe College",
  "country": "Canada",
  "websiteUrl": "https://www.fanshawec.ca"
},
{
  "instituteName": "George Brown College",
  "country": "Canada",
  "websiteUrl": "https://www.georgebrown.ca"
},
{
  "instituteName": "Humber College",
  "country": "Canada",
  "websiteUrl": "https://humber.ca"
},
{
  "instituteName": "Insignia College",
  "country": "Canada",
  "websiteUrl": "https://insigniacollege.com"
},
{
  "instituteName": "International College of Manitoba (ICM) to University of Manitoba",
  "country": "Canada",
  "websiteUrl": "https://www.icmanitoba.ca"
},
{
  "instituteName": "Kings University College @ University of Western Ontario",
  "country": "Canada",
  "websiteUrl": "https://www.kings.uwo.ca"
},
{
  "instituteName": "Kwantlen Polytechnic University",
  "country": "Canada",
  "websiteUrl": "https://www.kpu.ca"
},
{
  "instituteName": "The King's University",
  "country": "Canada",
  "websiteUrl": "https://www.kingsu.ca"
},
{
  "instituteName": "Lakehead University",
  "country": "Canada",
  "websiteUrl": "https://www.lakeheadu.ca"
},
{
  "instituteName": "Loyalist College",
  "country": "Canada",
  "websiteUrl": "https://www.loyalistcollege.com"
},
{
  "instituteName": "Mount Allison University",
  "country": "Canada",
  "websiteUrl": "https://www.mta.ca"
},
{
  "instituteName": "Northeastern University",
  "country": "Canada",
  "websiteUrl": "https://www.northeastern.edu"
},
{
  "instituteName": "NorQuest College",
  "country": "Canada",
  "websiteUrl": "https://www.norquest.ca"
},
{
  "instituteName": "Olds College of Agriculture and Technology",
  "country": "Canada",
  "websiteUrl": "https://www.oldscollege.ca"
},
{
  "instituteName": "Ontario Tech University",
  "country": "Canada",
  "websiteUrl": "https://ontariotechu.ca"
},
{
  "instituteName": "Queen's University",
  "country": "Canada",
  "websiteUrl": "https://www.queensu.ca"
},
{
  "instituteName": "Toronto Metropolitan University (Formerly; Ryerson University)",
  "country": "Canada",
  "websiteUrl": "https://www.torontomu.ca"
},
{
  "instituteName": "Toronto Metropolitan University International College (Formerly, Ryerson University International College) to Toronto Metropolitan University",
  "country": "Canada",
  "websiteUrl": "https://www.torontomuic.ca"
},
{
  "instituteName": "Saskatchewan Polytechnic",
  "country": "Canada",
  "websiteUrl": "https://saskpolytech.ca"
},
{
  "instituteName": "Seneca College",
  "country": "Canada",
  "websiteUrl": "https://www.senecacollege.ca"
},
{
  "instituteName": "Sheridan College",
  "country": "Canada",
  "websiteUrl": "https://www.sheridancollege.ca"
},
{
  "instituteName": "Southern Alberta Institute of Technology (SAIT)",
  "country": "Canada",
  "websiteUrl": "https://www.sait.ca"
},
{
  "instituteName": "Suncrest College",
  "country": "Canada",
  "websiteUrl": "https://www.suncrestcollege.ca"
},
{
  "instituteName": "Sir Wilfrid Laurier School Board",
  "country": "Canada",
  "websiteUrl": "https://www.swlauriersb.qc.ca"
},
{
  "instituteName": "St. Lawrence College - Alpha College of Business & Technology",
  "country": "Canada",
  "websiteUrl": "https://www.alphacollege.ca"
},
{
  "instituteName": "Thompson Rivers University",
  "country": "Canada",
  "websiteUrl": "https://www.tru.ca"
},
{
  "instituteName": "Fleming College, Toronto",
  "country": "Canada",
  "websiteUrl": "https://flemingcollege.ca"
},
{
  "instituteName": "Trent University",
  "country": "Canada",
  "websiteUrl": "https://www.trentu.ca"
},
{
  "instituteName": "University of Alberta",
  "country": "Canada",
  "websiteUrl": "https://www.ualberta.ca"
},
{
  "instituteName": "University of Guelph",
  "country": "Canada",
  "websiteUrl": "https://www.uoguelph.ca"
},
{
  "instituteName": "University of Lethbridge",
  "country": "Canada",
  "websiteUrl": "https://www.uleth.ca"
},
{
  "instituteName": "University of Manitoba",
  "country": "Canada",
  "websiteUrl": "https://umanitoba.ca"
},
{
  "instituteName": "University of Niagara Falls",
  "country": "Canada",
  "websiteUrl": "https://unfcanada.ca"
},
{
  "instituteName": "University of New Brunswick",
  "country": "Canada",
  "websiteUrl": "https://www.unb.ca"
},
{
  "instituteName": "University of Northern British Columbia (UNBC)",
  "country": "Canada",
  "websiteUrl": "https://www.unbc.ca"
},
{
  "instituteName": "University of Waterloo",
  "country": "Canada",
  "websiteUrl": "https://uwaterloo.ca"
},
{
  "instituteName": "Wilfrid Laurier International College to Wilfrid Laurier University",
  "country": "Canada",
  "websiteUrl": "https://laurieric.ca"
},
{
  "instituteName": "Academy of Learning Career College, Scarborough",
  "country": "Canada",
  "websiteUrl": "https://www.academyoflearning.com"
},
{
  "instituteName": "Ascent College Of Technology",
  "country": "Canada",
  "websiteUrl": "https://www.ascentcollege.ca"
},
{
  "instituteName": "Aviron Quebec Technical College",
  "country": "Canada",
  "websiteUrl": "https://www.avirontech.com"
},
{
  "instituteName": "Bow Valley College",
  "country": "Canada",
  "websiteUrl": "https://bowvalleycollege.ca"
},
{
  "instituteName": "Cambrian @ Hanson",
  "country": "Canada",
  "websiteUrl": "https://cambriancollege.ca"
},
{
  "instituteName": "Cape Breton University",
  "country": "Canada",
  "websiteUrl": "https://www.cbu.ca"
},
{
  "instituteName": "Cégep de la Gaspésie et des Îles",
  "country": "Canada",
  "websiteUrl": "https://cegepgim.ca"
},
{
  "instituteName": "Cégep Marie-Victorin",
  "country": "Canada",
  "websiteUrl": "https://www.collegemv.qc.ca"
},
{
  "instituteName": "Columbia College",
  "country": "Canada",
  "websiteUrl": "https://www.columbiacollege.ca"
},
{
  "instituteName": "Conestoga College Institute of Technology and Advanced Learning",
  "country": "Canada",
  "websiteUrl": "https://www.conestogac.on.ca"
},
{
  "instituteName": "Crandall University",
  "country": "Canada",
  "websiteUrl": "https://www.crandallu.ca"
},
{
  "instituteName": "DEA Canadian College",
  "country": "Canada",
  "websiteUrl": "https://www.deacollege.ca"
},
{
  "instituteName": "Georgian College of Applied Arts and Technology",
  "country": "Canada",
  "websiteUrl": "https://www.georgiancollege.ca"
},
{
  "instituteName": "Justice Institute of British Columbia",
  "country": "Canada",
  "websiteUrl": "https://www.jibc.ca"
},
{
  "instituteName": "Kwantlen Polytechnic Universit",
  "country": "Canada",
  "websiteUrl": "https://www.kpu.ca"
},
{
  "instituteName": "LaSalle College",
  "country": "Canada",
  "websiteUrl": "https://www.lasallecollege.com"
},
{
  "instituteName": "Matrix College Of Management Technology And Healthcare",
  "country": "Canada",
  "websiteUrl": "https://www.matrixcollege.ca"
},
{
  "instituteName": "Mount Saint Vincent University",
  "country": "Canada",
  "websiteUrl": "https://www.msvu.ca"
},
{
  "instituteName": "New York Institute of Technology - Vancouver",
  "country": "Canada",
  "websiteUrl": "https://www.nyit.edu/vancouver"
},
{
  "instituteName": "Niagara College",
  "country": "Canada",
  "websiteUrl": "https://www.niagaracollege.ca"
},
{
  "instituteName": "Pacific Coast Community College",
  "country": "Canada",
  "websiteUrl": "https://www.pacificcoastcommunitycollege.com"
},
{
  "instituteName": "Pacific Link College",
  "country": "Canada",
  "websiteUrl": "https://www.plvan.com"
},
{
  "instituteName": "St. Clair College of Applied Arts and Technology",
  "country": "Canada",
  "websiteUrl": "https://www.stclaircollege.ca"
},
{
  "instituteName": "St. Francis Xavier University",
  "country": "Canada",
  "websiteUrl": "https://www.stfx.ca"
},
{
  "instituteName": "St. Lawrence College",
  "country": "Canada",
  "websiteUrl": "https://www.stlawrencecollege.ca"
},
{
  "instituteName": "University Canada West",
  "country": "Canada",
  "websiteUrl": "https://www.ucanwest.ca"
},
{
  "instituteName": "University of Northern British Columbia",
  "country": "Canada",
  "websiteUrl": "https://www.unbc.ca"
},
{
  "instituteName": "University of Prince Edward Island",
  "country": "Canada",
  "websiteUrl": "https://www.upei.ca"
},
{
  "instituteName": "University of Regina",
  "country": "Canada",
  "websiteUrl": "https://www.uregina.ca"
},
{
  "instituteName": "University of the Fraser Valley",
  "country": "Canada",
  "websiteUrl": "https://www.ufv.ca"
},
{
  "instituteName": "Vancouver Film School",
  "country": "Canada",
  "websiteUrl": "https://vfs.edu"
},
{
  "instituteName": "University of Niagara Falls Canada",
  "country": "Canada",
  "websiteUrl": "https://unfcanada.ca"
},
{
  "instituteName": "University of Victoria",
  "country": "Canada",
  "websiteUrl": "https://www.uvic.ca"
},
{
  "instituteName": "Fraser International College",
  "country": "Canada",
  "websiteUrl": "https://www.fraseric.ca"
},
{
  "instituteName": "International College of Manitoba",
  "country": "Canada",
  "websiteUrl": "https://www.icmanitoba.ca"
},
{
  "instituteName": "Toronto Metropolitan University International College",
  "country": "Canada",
  "websiteUrl": "https://www.torontomuic.ca"
},
{
  "instituteName": "ULethbridge International College Calgary",
  "country": "Canada",
  "websiteUrl": "https://www.ulethbridge.ca"
},
{
  "instituteName": "Wilfrid Laurier International College",
  "country": "Canada",
  "websiteUrl": "https://www.laurieric.ca"
},
{
  "instituteName": "Acadia University",
  "country": "Canada",
  "websiteUrl": "https://www2.acadiau.ca"
},
{
  "instituteName": "Great Plains College",
  "country": "Canada",
  "websiteUrl": "https://www.greatplainscollege.ca"
},
{
  "instituteName": "Lakeland College",
  "country": "Canada",
  "websiteUrl": "https://www.lakelandcollege.ca"
},
{
  "instituteName": "Nipissing University",
  "country": "Canada",
  "websiteUrl": "https://www.nipissingu.ca"
},
{
  "instituteName": "North West College",
  "country": "Canada",
  "websiteUrl": "https://www.northwestcollege.ca"
},
{
  "instituteName": "Northern Lights College",
  "country": "Canada",
  "websiteUrl": "https://www.nlc.bc.ca"
},
{
  "instituteName": "Selkirk College",
  "country": "Canada",
  "websiteUrl": "https://selkirk.ca"
},
{
  "instituteName": "St. Thomas University",
  "country": "Canada",
  "websiteUrl": "https://www.stu.ca"
},
{
  "instituteName": "Alexander College",
  "country": "Canada",
  "websiteUrl": "https://alexandercollege.ca"
},
{
  "instituteName": "Braemar College",
  "country": "Canada",
  "websiteUrl": "https://www.braemarcollege.com"
},
{
  "instituteName": "Canadian College",
  "country": "Canada",
  "websiteUrl": "https://www.canadiancollege.com"
},
{
  "instituteName": "Coquitlam College",
  "country": "Canada",
  "websiteUrl": "https://www.coquitlamcollege.com"
},
{
  "instituteName": "Fleming College Toronto",
  "country": "Canada",
  "websiteUrl": "https://flemingcollege.ca"
},
{
  "instituteName": "Loyalist College of Applied Arts and Technology",
  "country": "Canada",
  "websiteUrl": "https://www.loyalistcollege.com"
},
{
  "instituteName": "McKenzie College",
  "country": "Canada",
  "websiteUrl": "https://mckenzie.edu.au"
},
{
  "instituteName": "Niagara College Toronto",
  "country": "Canada",
  "websiteUrl": "https://www.niagaracollegetoronto.ca"
},
{
  "instituteName": "North Island College",
  "country": "Canada",
  "websiteUrl": "https://www.nic.bc.ca"
},
{
  "instituteName": "Sheridan College Institute of Technology and Advanced Learning",
  "country": "Canada",
  "websiteUrl": "https://www.sheridancollege.ca"
},
{
  "instituteName": "Sprott Shaw College",
  "country": "Canada",
  "websiteUrl": "https://sprottshaw.com"
},
{
  "instituteName": "Trebas Institute",
  "country": "Canada",
  "websiteUrl": "https://www.trebas.com"
},
{
  "instituteName": "Trinity Western University",
  "country": "Canada",
  "websiteUrl": "https://www.twu.ca"
},
{
  "instituteName": "University of Windsor",
  "country": "Canada",
  "websiteUrl": "https://www.uwindsor.ca"
},
{
  "instituteName": "Vancouver Community College",
  "country": "Canada",
  "websiteUrl": "https://www.vcc.ca"
},
{
  "instituteName": "Vancouver Island University",
  "country": "Canada",
  "websiteUrl": "https://www.viu.ca"
}]

export { instituteData, baseData, websiteData, CanadaAllData};
