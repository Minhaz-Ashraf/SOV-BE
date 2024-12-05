// Sample institute data as an array of objects
const instituteData = [
  {
    instituteName: "University of Surrey",
    country: "UK",
  },
  {
    instituteName: "Solent University",
    country: "UK",
  },
  {
    instituteName: "University of Bedfordshire",
    country: "UK",
  },
  {
    instituteName: "University of West London",
    country: "UK",
  },
  {
    instituteName: "St. Mary's University",
    country: "UK",
  },
  {
    instituteName: "York St. John University",
    country: "UK",
  },
  {
    instituteName: "University of Chester",
    country: "UK",
  },
  {
    instituteName: "Leeds Becket University",
    country: "UK",
  },
  {
    instituteName: "University of Bradford",
    country: "UK",
  },
  {
    instituteName: "Anglia Ruskin University",
    country: "UK",
  },
  {
    instituteName: "Bath Spa University",
    country: "UK",
  },
  {
    instituteName: "Bishop Grosseteste University",
    country: "UK",
  },
  {
    instituteName: "SU to Swansea University",
    country: "UK",
  },
  {
    instituteName: "HIC to University of Herefordshire",
    country: "UK",
  },
  {
    instituteName: "UNIC to University of Northampton",
    country: "UK",
  },
  {
    instituteName: "UPIC to University of Plymouth",
    country: "UK",
  },
  {
    instituteName: "ICP to University of Portsmouth",
    country: "UK",
  },
  {
    instituteName: "Buckinghamshire New University",
    country: "UK",
  },
  {
    instituteName: "Durham University",
    country: "UK",
  },
  {
    instituteName: "London Metropoliton University",
    country: "UK",
  },
  {
    instituteName: "Leeds Beckett University",
    country: "UK",
  },
  {
    instituteName: "Liverpool John Moores University",
    country: "UK",
  },
  {
    instituteName: "Nottingham Trent University",
    country: "UK",
  },
  {
    instituteName: "Queen Mary University of London",
    country: "UK",
  },
  {
    instituteName: "Richmond University - The American University in London",
    country: "UK",
  },
  {
    instituteName: "University College Dublin",
    country: "UK",
  },
  {
    instituteName: "University of Aberdeen",
    country: "UK",
  },
  {
    instituteName: "University of Bristol",
    country: "UK",
  },
  {
    instituteName: "The University of Law",
    country: "UK",
  },
  {
    instituteName: "University College Birmingham",
    country: "UK",
  },
  {
    instituteName: "University for the Creative Arts (UG/PG Pathway)",
    country: "UK",
  },
  {
    instituteName: "University of Leeds",
    country: "UK",
  },
  {
    instituteName: "University of Roehampton",
    country: "UK",
  },
  {
    instituteName: "University of Sheffield",
    country: "UK",
  },
  {
    instituteName:
      "UWIC ‐ University of Worcester International College (UG/PG Pathway)",
    country: "UK",
  },
  {
    instituteName: "University of Westminster",
    country: "UK",
  },
  {
    instituteName: "University of the West of England",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF ABERTAY",
    country: "UK",
  },
  {
    instituteName: "ARTS UNIVERSITY BOURNEMOUTH",
    country: "UK",
  },
  {
    instituteName: "ASTON UNIVERSITY",
    country: "UK",
  },
  {
    instituteName: "Bangor University and ELCOS",
    country: "UK",
  },
  {
    instituteName: "University of Bath",
    country: "UK",
  },
  {
    instituteName: "University of Bedfordshire India contract",
    country: "UK",
  },
  {
    instituteName: "University of Bedfordshire Middle east, Uk and Thailand",
    country: "UK",
  },
  {
    instituteName: "University of Birmingham",
    country: "UK",
  },
  {
    instituteName: "BIRMINGHAM CITY UNIVERSITY",
    country: "UK",
  },
  {
    instituteName: "University of Bolton",
    country: "UK",
  },
  {
    instituteName: "Bournemouth University",
    country: "UK",
  },
  {
    instituteName: "BPP",
    country: "UK",
  },
  {
    instituteName: "University of Brighton",
    country: "UK",
  },
  {
    instituteName: "Brunel University",
    country: "UK",
  },
  {
    instituteName: "BUCKS NEW UNIVERSITY",
    country: "UK",
  },
  {
    instituteName: "Cardiff Metropolitan University",
    country: "UK",
  },
  {
    instituteName: "Cardiff University",
    country: "UK",
  },
  {
    instituteName: "City University of London",
    country: "UK",
  },
  {
    instituteName: "Coventry University",
    country: "UK",
  },
  {
    instituteName: "CRANFIELD UNIVERSITY",
    country: "UK",
  },
  {
    instituteName: "De Montfort University",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF DERBY",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF DUNDEE",
    country: "UK",
  },
  {
    instituteName: "University of East Anglia",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF EAST LONDON",
    country: "UK",
  },
  {
    instituteName: "Edinburgh Napier University",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF ESSEX",
    country: "UK",
  },
  {
    instituteName: "University of Exeter (UK/Saudi)",
    country: "UK",
  },
  {
    instituteName: "University of Exeter (Thailand)",
    country: "UK",
  },
  {
    instituteName: "University of Exeter (India/Nepal/Sri Lanka/Bangladesh)",
    country: "UK",
  },
  {
    instituteName: "Falmouth University",
    country: "UK",
  },
  {
    instituteName: "University of Glasgow",
    country: "UK",
  },
  {
    instituteName: "Glasgow Caledonian University",
    country: "UK",
  },
  {
    instituteName: "Global Banking School",
    country: "UK",
  },
  {
    instituteName: "GLYNDWR UNIVERSITY WREXHAM",
    country: "UK",
  },
  {
    instituteName: "University of Greenwich",
    country: "UK",
  },
  {
    instituteName: "Heriot-Watt University",
    country: "UK",
  },
  {
    instituteName: "University of Hertfordshire",
    country: "UK",
  },
  {
    instituteName: "University of Huddersfield",
    country: "UK",
  },
  {
    instituteName: "University of Hull",
    country: "UK",
  },
  {
    instituteName: "Keele University",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF KENT",
    country: "UK",
  },
  {
    instituteName: "Kingston University",
    country: "UK",
  },
  {
    instituteName: "Lancaster University",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF LAW",
    country: "UK",
  },
  {
    instituteName: "LEEDS BECKETT UNIVERSITY (Thailand/UK/India/Bangladesh)",
    country: "UK",
  },
  {
    instituteName: "LEEDS BECKETT UNIVERSITY (China)",
    country: "UK",
  },
  {
    instituteName: "LEEDS TRINITY UNIVERSITY",
    country: "UK",
  },
  {
    instituteName: "University of Leicester - UG",
    country: "UK",
  },
  {
    instituteName: "University of Leicester - PG",
    country: "UK",
  },
  {
    instituteName: "University of Lincoln",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF LIVERPOOL",
    country: "UK",
  },
  {
    instituteName: "London Metropolitan University",
    country: "UK",
  },
  {
    instituteName: "London South Bank University",
    country: "UK",
  },
  {
    instituteName: "LOUGHBOROUGH UNIVERSITY",
    country: "UK",
  },
  {
    instituteName: "Manchester Metropolitan University",
    country: "UK",
  },
  {
    instituteName: "Middlesex University",
    country: "UK",
  },
  {
    instituteName: "Newcastle University (via INTO)",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF NORTHAMPTON",
    country: "UK",
  },
  {
    instituteName: "University of Northumbria at Newcastle",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF NOTTINGHAM",
    country: "UK",
  },
  {
    instituteName: "Oxford Brookes University",
    country: "UK",
  },
  {
    instituteName: "University of Plymouth",
    country: "UK",
  },
  {
    instituteName: "University of Portsmouth",
    country: "UK",
  },
  {
    instituteName: "QUEEN'S UNIVERSITY BELFAST - UG",
    country: "UK",
  },
  {
    instituteName: "QUEEN'S UNIVERSITY BELFAST - PG",
    country: "UK",
  },
  {
    instituteName: "University of Reading",
    country: "UK",
  },
  {
    instituteName: "REGENT'S UNIVERSITY LONDON",
    country: "UK",
  },
  {
    instituteName: "Royal Holloway University of London",
    country: "UK",
  },
  {
    instituteName: "University of Salford",
    country: "UK",
  },
  {
    instituteName: "Sheffield Hallam University",
    country: "UK",
  },
  {
    instituteName: "SOAS University of London",
    country: "UK",
  },
  {
    instituteName: "University of South Wales",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF SOUTHAMPTON - UG",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF SOUTHAMPTON - PG",
    country: "UK",
  },
  {
    instituteName: "STAFFORDSHIRE UNIVERSITY",
    country: "UK",
  },
  {
    instituteName: "University of Stirling",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF STRATHCLYDE",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF SUNDERLAND",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF SUNDERLAND - China",
    country: "UK",
  },
  {
    instituteName: "University of Sussex",
    country: "UK",
  },
  {
    instituteName: "SWANSEA UNIVERSITY",
    country: "UK",
  },
  {
    instituteName: "TEESSIDE UNIVERSITY",
    country: "UK",
  },
  {
    instituteName: "UCLan (University of Central Lancashire)",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF ULSTER",
    country: "UK",
  },
  {
    instituteName: "UCA - University for the Creative Arts",
    country: "UK",
  },
  {
    instituteName: "University of the West of England (UWE Bristol)",
    country: "UK",
  },
  {
    instituteName: "UNIVERSITY OF WINCHESTER",
    country: "UK",
  },
  {
    instituteName: "University of Wolverhampton",
    country: "UK",
  },
  {
    instituteName: "University of the West of Scotland",
    country: "UK",
  },
  {
    instituteName: "Florida Atlantic University",
    country: "USA",
  },
  {
    instituteName: "University of Massachusetts",
    country: "USA",
  },
  {
    instituteName: "Alvernia University",
    country: "USA",
  },
  {
    instituteName: "American Collegiate Los Angeles",
    country: "USA",
  },
  {
    instituteName: "American Collegiate Washington DC",
    country: "USA",
  },
  {
    instituteName: "Atlantis University",
    country: "USA",
  },
  {
    instituteName: "Auburn University at Montgomery",
    country: "USA",
  },
  {
    instituteName: "Capital University",
    country: "USA",
  },
  {
    instituteName: "Central Michigan University",
    country: "USA",
  },
  {
    instituteName: "Clarks University",
    country: "USA",
  },
  {
    instituteName: "Community College of Spokane",
    country: "USA",
  },
  {
    instituteName: "Concordia University",
    country: "USA",
  },
  {
    instituteName: "Concordia Saint Paul University",
    country: "USA",
  },
  {
    instituteName: "DePaul University",
    country: "USA",
  },
  {
    instituteName: "Drake University",
    country: "USA",
  },
  {
    instituteName: "Duke University",
    country: "USA",
  },
  {
    instituteName: "Duquesne University",
    country: "USA",
  },
  {
    instituteName: "Endicott College",
    country: "USA",
  },
  {
    instituteName: "Edgewood College",
    country: "USA",
  },
  {
    instituteName: "Florida Polytechnic University",
    country: "USA",
  },
  {
    instituteName: "Herzing University",
    country: "USA",
  },
  {
    instituteName: "Hilbert College",
    country: "USA",
  },
  {
    instituteName: "Hillsboro Aero Academy",
    country: "USA",
  },
  {
    instituteName: "Johnson and Wales University",
    country: "USA",
  },
  {
    instituteName: "Lipscomb University",
    country: "USA",
  },
  {
    instituteName: "Lynn University",
    country: "USA",
  },
  {
    instituteName: "Marconi International University",
    country: "USA",
  },
  {
    instituteName: "Marquette University",
    country: "USA",
  },
  {
    instituteName: "Middle Tennessee State University",
    country: "USA",
  },
  {
    instituteName: "Montana State University Billings(MSUB)",
    country: "USA",
  },
  {
    instituteName: "West New England University",
    country: "USA",
  },
  {
    instituteName: "Nichols College",
    country: "USA",
  },
  {
    instituteName: "North Park University",
    country: "USA",
  },
  {
    instituteName: "Paul Smith’s College",
    country: "USA",
  },
  {
    instituteName: "Radford University",
    country: "USA",
  },
  {
    instituteName: "Seattle Pacific University (SPU)",
    country: "USA",
  },
  {
    instituteName: "Stevens Institute of Technology (SIT)",
    country: "USA",
  },
  {
    instituteName: "Thomas College",
    country: "USA",
  },
  {
    instituteName: "Texas A&M University Corpus Christi",
    country: "USA",
  },
  {
    instituteName: "The Culinary Institute of America",
    country: "USA",
  },
  {
    instituteName: "UMBC (University of Maryland Baltimore County)",
    country: "USA",
  },
  {
    instituteName: "University of Charleston",
    country: "USA",
  },
  {
    instituteName: "University of Idaho",
    country: "USA",
  },
  {
    instituteName: "University of Mississippi",
    country: "USA",
  },
  {
    instituteName: "University of Massachusetts Boston",
    country: "USA",
  },
  {
    instituteName: "University of Missouri-St. Louis",
    country: "USA",
  },
  {
    instituteName: "University of Nebraska",
    country: "USA",
  },
  {
    instituteName: "University of St. Thomas",
    country: "USA",
  },
  {
    instituteName: "University of Vermont",
    country: "USA",
  },
  {
    instituteName: "Virginia Wesleyan University",
    country: "USA",
  },
  {
    instituteName: "Webster University",
    country: "USA",
  },
  {
    instituteName: "Academy of Art University",
    country: "USA",
  },
  {
    instituteName: "California Lutheran University",
    country: "USA",
  },
  {
    instituteName: "Cascadia College",
    country: "USA",
  },
  {
    instituteName: "Cerritos College",
    country: "USA",
  },
  {
    instituteName: "City University of Seattle",
    country: "USA",
  },
  {
    instituteName: "Clarkson University",
    country: "USA",
  },
  {
    instituteName: "College of the Canyons",
    country: "USA",
  },
  {
    instituteName: "Concordia University St. Paul",
    country: "USA",
  },
  {
    instituteName: "Contra Costa College (CCCCD)",
    country: "USA",
  },
  {
    instituteName: "Diablo Valley College (CCCCD)",
    country: "USA",
  },
  {
    instituteName: "Fulton-Montgomery Community College - SUNY",
    country: "USA",
  },
  {
    instituteName: "Gannon University",
    country: "USA",
  },
  {
    instituteName: "Genesee Community College (SUNY)",
    country: "USA",
  },
  {
    instituteName: "Hult International Business School",
    country: "USA",
  },
  {
    instituteName: "Kent State University",
    country: "USA",
  },
  {
    instituteName: "Los Medanos College (CCCCD)",
    country: "USA",
  },
  {
    instituteName: "Miami University Ohio (Oxford)",
    country: "USA",
  },
  {
    instituteName: "Miami University Ohio Regionals (Middletown & Hamilton)",
    country: "USA",
  },
  {
    instituteName: "Mt. San Antonio College",
    country: "USA",
  },
  {
    instituteName: "New York Film Academy",
    country: "USA",
  },
  {
    instituteName: "New York Institute of Technology (University)",
    country: "USA",
  },
  {
    instituteName: "Purdue University Northwes",
    country: "USA",
  },
  {
    instituteName: "Sacred Heart University",
    country: "USA",
  },
  {
    instituteName: "Seattle Colleges - North Seattle College",
    country: "USA",
  },
  {
    instituteName: "Seattle Colleges - Seattle Central College",
    country: "USA",
  },
  {
    instituteName: "Seattle Colleges - South Seattle College",
    country: "USA",
  },
  {
    instituteName: "Southern Illinois University - Carbondale",
    country: "USA",
  },
  {
    instituteName: "Southwest Minnesotta State University",
    country: "USA",
  },
  {
    instituteName: "State University of New York - Plattsburgh",
    country: "USA",
  },
  {
    instituteName: "Texas State University",
    country: "USA",
  },
  {
    instituteName: "Texas Wesleyan University",
    country: "USA",
  },
  {
    instituteName: "Trine University",
    country: "USA",
  },
  {
    instituteName: "Troy University",
    country: "USA",
  },
  {
    instituteName: "University at Albany (SUNY)",
    country: "USA",
  },
  {
    instituteName:
      "University of California, Irvine - Division of Continuing Education",
    country: "USA",
  },
  {
    instituteName: "University of Colorado Denver",
    country: "USA",
  },
  {
    instituteName: "University of La Verne",
    country: "USA",
  },
  {
    instituteName: "University of Nebraska at Omaha",
    country: "USA",
  },
  {
    instituteName: "University of North Carolina at Greensboro",
    country: "USA",
  },
  {
    instituteName: "University of North Carolina Wilmington",
    country: "USA",
  },
  {
    instituteName: "University of North Texas",
    country: "USA",
  },
  {
    instituteName: "University of West Alabama",
    country: "USA",
  },
  {
    instituteName: "Valencia College",
    country: "USA",
  },
  {
    instituteName: "Washington State University",
    country: "USA",
  },
  {
    instituteName: "Westcliff University",
    country: "USA",
  },
  {
    instituteName: "Wichita State University",
    country: "USA",
  },
  {
    instituteName: "Webster",
    country: "USA",
  },
  {
    instituteName: "Xavier University",
    country: "USA",
  },
  {
    instituteName: "American National University",
    country: "USA",
  },
  {
    instituteName: "Graceland University",
    country: "USA",
  },
  {
    instituteName: "Colorado Mesa University",
    country: "USA",
  },
  {
    instituteName: "Avila University",
    country: "USA",
  },
  {
    instituteName: "Concordia University Chicago",
    country: "USA",
  },
  {
    instituteName: "Colorado State University",
    country: "USA",
  },
  {
    instituteName: "Drew University",
    country: "USA",
  },
  {
    instituteName: "Fisher College",
    country: "USA",
  },
  {
    instituteName: "George Mason University",
    country: "USA",
  },
  {
    instituteName: "Glasgow Caledonian New York College",
    country: "USA",
  },
  {
    instituteName: "Hofstra University",
    country: "USA",
  },
  {
    instituteName: "Illinois State University",
    country: "USA",
  },
  {
    instituteName: "Long Island University Brooklyn",
    country: "USA",
  },
  {
    instituteName: "Long Island University Post",
    country: "USA",
  },
  {
    instituteName: "Marshall University",
    country: "USA",
  },
  {
    instituteName: "Montclair State University",
    country: "USA",
  },
  {
    instituteName: "New England College",
    country: "USA",
  },
  {
    instituteName: "Oregon State University",
    country: "USA",
  },
  {
    instituteName: "Saint Louis University",
    country: "USA",
  },
  {
    instituteName: "Suffolk University",
    country: "USA",
  },
  {
    instituteName: "Thomas Jefferson University",
    country: "USA",
  },
  {
    instituteName: "University of Alabama, Birmingham",
    country: "USA",
  },
  {
    instituteName: "University of Arizona",
    country: "USA",
  },
  {
    instituteName: "Arizona State University",
    country: "USA",
  },
  {
    instituteName: "Pace University",
    country: "USA",
  },
  {
    instituteName: "Simmons University",
    country: "USA",
  },
  {
    instituteName: "University of Connecticut",
    country: "USA",
  },
  {
    instituteName: "Queens College",
    country: "USA",
  },
  {
    instituteName: "UMass Boston",
    country: "USA",
  },
  {
    instituteName: "Richard Bland College Of William & Mary",
    country: "USA",
  },
  {
    instituteName: "Mercy University",
    country: "USA",
  },
  {
    instituteName: "San Francisco State University",
    country: "USA",
  },
  {
    instituteName: "Adelphi University",
    country: "USA",
  },
  {
    instituteName: "American University",
    country: "USA",
  },
  {
    instituteName: "Auburn University",
    country: "USA",
  },
  {
    instituteName: "Cleveland State University",
    country: "USA",
  },
  {
    instituteName: "Florida International University",
    country: "USA",
  },
  {
    instituteName: "Gonzaga University",
    country: "USA",
  },
  {
    instituteName: "Louisiana State University",
    country: "USA",
  },
  {
    instituteName: "Missouri University of Science and Technology",
    country: "USA",
  },
  {
    instituteName: "Tulane University",
    country: "USA",
  },
  {
    instituteName: "University of California, Los Angeles (UCLA)",
    country: "USA",
  },
  {
    instituteName: "University of Central Florida",
    country: "USA",
  },
  {
    instituteName: "University of Dayton",
    country: "USA",
  },
  {
    instituteName: "University of Illinois at Chicago",
    country: "USA",
  },
  {
    instituteName: "University of Illinois at Springfield",
    country: "USA",
  },
  {
    instituteName: "University of Kansas",
    country: "USA",
  },
  {
    instituteName: "University of Massachusetts, Amherst",
    country: "USA",
  },
  {
    instituteName: "University of Massachusetts, Boston",
    country: "USA",
  },
  {
    instituteName: "University of Nevada, Reno",
    country: "USA",
  },
  {
    instituteName: "University of South Carolina",
    country: "USA",
  },
  {
    instituteName: "University of the Pacific",
    country: "USA",
  },
  {
    instituteName: "University of Utah",
    country: "USA",
  },
  {
    instituteName: "University of Wyoming",
    country: "USA",
  },
  {
    instituteName: "Western New England University",
    country: "USA",
  },
  {
    instituteName: "California State University - San Marcos",
    country: "USA",
  },
  {
    instituteName: "James Madison University",
    country: "USA",
  },
  {
    instituteName: "Long Island University",
    country: "USA",
  },
  {
    instituteName: "Texas A&M Corpus Christi",
    country: "USA",
  },
  {
    instituteName: "Towson University",
    country: "USA",
  },
  {
    instituteName: "University of Hartford",
    country: "USA",
  },
  {
    instituteName: "Western Washington University",
    country: "USA",
  },
  {
    instituteName: "Baylor University",
    country: "USA",
  },
  {
    instituteName: "College of San Mateo",
    country: "USA",
  },
  {
    instituteName: "College of Marin",
    country: "USA",
  },
  {
    instituteName: "Irvine Valley College",
    country: "USA",
  },
  {
    instituteName: "Piedmont Virginia Community College",
    country: "USA",
  },
  {
    instituteName: "Santa Monica College",
    country: "USA",
  },
  {
    instituteName: "American International College",
    country: "USA",
  },
  {
    instituteName: "Bay Atlantic University",
    country: "USA",
  },
  {
    instituteName: "COE College",
    country: "USA",
  },
  {
    instituteName: "Community College of Philadelphia",
    country: "USA",
  },
  {
    instituteName: "East Tennessee State University",
    country: "USA",
  },
  {
    instituteName: "Fox Valley Technical college",
    country: "USA",
  },
  {
    instituteName: "Greensboro College",
    country: "USA",
  },
  {
    instituteName: "Hanover College",
    country: "USA",
  },
  {
    instituteName: "Hartwick College",
    country: "USA",
  },
  {
    instituteName: "Hawaii Pacific University",
    country: "USA",
  },
  {
    instituteName: "Keck Graduate Institute",
    country: "USA",
  },
  {
    instituteName: "Mentora College",
    country: "USA",
  },
  {
    instituteName: "Monroe College",
    country: "USA",
  },
  {
    instituteName: "Montana State University Billings",
    country: "USA",
  },
  {
    instituteName: "Mount Saint Mary's University",
    country: "USA",
  },
  {
    instituteName: "Pacific Lutheran University",
    country: "USA",
  },
  {
    instituteName: "Pacific States University",
    country: "USA",
  },
  {
    instituteName: "San Mateo Colleges of Silicon valley",
    country: "USA",
  },
  {
    instituteName: "Shoreline Community College",
    country: "USA",
  },
  {
    instituteName: "Westminster College",
    country: "USA",
  },
  {
    instituteName: "Whitworth University",
    country: "USA",
  },
  {
    instituteName: "Lancaster University Leipzig",
    country: "Germany",
  },
  {
    instituteName:
      "Schiller International University (Global Education Holding)",
    country: "Germany",
  },
  {
    instituteName: "Dresden International University",
    country: "Germany",
  },
  {
    instituteName: "BSBI - Berlin School of Business and Innovation",
    country: "Germany",
  },
  {
    instituteName: "Arden University",
    country: "Germany",
  },
  {
    instituteName: "Steinbis University",
    country: "Germany",
  },
  {
    instituteName: "HKA - Karlsruhe University of Applied Sciences",
    country: "Germany",
  },
  {
    instituteName: "Bucerius Law School",
    country: "Germany",
  },
  {
    instituteName: "European School of Management and Technology",
    country: "Germany",
  },
  {
    instituteName: "Berlin School of Business and Innovation",
    country: "Germany",
  },
  {
    instituteName: "University of Mannheim",
    country: "Germany",
  },
  {
    instituteName: "SRH University",
    country: "Germany",
  },
  {
    instituteName: "Universität Bayreuth",
    country: "Germany",
  },
  {
    instituteName: "International Psychoanalytic University",
    country: "Germany",
  },
  {
    instituteName: "Universität Bielefeld",
    country: "Germany",
  },
  {
    instituteName: "Universität Erfurt",
    country: "Germany",
  },
  {
    instituteName: "Universität Greifswald",
    country: "Germany",
  },
  {
    instituteName: "Universität Stuttgart",
    country: "Germany",
  },
  {
    instituteName: "Berlin International University of Applied Sciences",
    country: "Germany",
  },
  {
    instituteName: "Touro College Berlin",
    country: "Germany",
  },
  {
    instituteName: "ICN International College Paris",
    country: "France",
  },
  {
    instituteName: "Audencia Business School",
    country: "France",
  },
  {
    instituteName: "Institut Mines-Telecom Business School",
    country: "France",
  },
  {
    instituteName: "NEOMA Business School",
    country: "France",
  },
  {
    instituteName: "Paris School of Business",
    country: "France",
  },
  {
    instituteName: "emlyon business school",
    country: "France",
  },
  {
    instituteName: "Montpellier Business School",
    country: "France",
  },
  {
    instituteName: "IPAG Business School",
    country: "France",
  },
  {
    instituteName: "Grenoble Ecole de Management",
    country: "France",
  },
  {
    instituteName: "TAMPERE UNIVERSITY",
    country: "Finland",
  },
  {
    instituteName: "EIT Urban Mobility Master School",
    country: "Finland",
  },
  {
    instituteName: "Arcada University of Applied Sciences",
    country: "Finland",
  },
  {
    instituteName: "Hanken School of Economics",
    country: "Finland",
  },
  {
    instituteName: "Maynooth University",
    country: "Italy",
  },
  {
    instituteName: "IBAT College Dublin",
    country: "Italy",
  },
  {
    instituteName: "University College Dublin",
    country: "Italy",
  },
  {
    instituteName:
      "ATMC (Australian Technical & Management Colleges) – Federation University",
    country: "Australia",
  },
  {
    instituteName: "Bond University",
    country: "Australia",
  },
  {
    instituteName: "Charles Sturt University Sydney",
    country: "Australia",
  },
  {
    instituteName: "Deakin College to Deakin University",
    country: "Australia",
  },
  {
    instituteName: "Edith Cowan College to Edith Cowan University",
    country: "Australia",
  },
  {
    instituteName: "Eynesbury College to UNISA or University of",
    country: "Australia",
  },
  {
    instituteName: "Griffith College to Griffith University",
    country: "Australia",
  },
  {
    instituteName: "La Trobe College to La Trobe University, Melbourne",
    country: "Australia",
  },
  {
    instituteName: "La Trobe College to La Trobe University Sydney",
    country: "Australia",
  },
  {
    instituteName:
      "SAIBT (South Australian Institute of Business and Technology) to UNISA (University of South Australia)",
    country: "Australia",
  },
  {
    instituteName:
      "SIBT (Sydney Institute of Business and Technology) to Western Sydney University",
    country: "Australia",
  },
  {
    instituteName:
      "University of Canberra International College to University of Canberra",
    country: "Australia",
  },
  {
    instituteName:
      "Western Sydney University International College to Western Sydney University",
    country: "Australia",
  },
  {
    instituteName: "Charles Darwin University",
    country: "Australia",
  },
  {
    instituteName: "University of Tasmania",
    country: "Australia",
  },
  {
    instituteName: "University of Tasmania, Melbourne Campus",
    country: "Australia",
  },
  {
    instituteName: "Swinburne University of Technology",
    country: "Australia",
  },
  {
    instituteName: "Curtin University",
    country: "Australia",
  },
  {
    instituteName: "Flinders University",
    country: "Australia",
  },
  {
    instituteName: "James Cook University",
    country: "Australia",
  },
  {
    instituteName: "Queensland University of Technology",
    country: "Australia",
  },
  {
    instituteName: "University of Sunshine Coast",
    country: "Australia",
  },
  {
    instituteName: "University of Sydney",
    country: "Australia",
  },
  {
    instituteName: "Victoria University",
    country: "Australia",
  },
  {
    instituteName: "Southern Cross University",
    country: "Australia",
  },
  {
    instituteName: "Acsenda College",
    country: "Canada",
  },
  {
    instituteName: "Adler University",
    country: "Canada",
  },
  {
    instituteName: "Algonquin College",
    country: "Canada",
  },
  {
    instituteName: "British Columbia Institute of Technology (BCIT)",
    country: "Canada",
  },
  {
    instituteName: "Brock University",
    country: "Canada",
  },
  {
    instituteName: "Cambrian College",
    country: "Canada",
  },
  {
    instituteName: "Cape Breton University (CBU)",
    country: "Canada",
  },
  {
    instituteName: "Capilano University",
    country: "Canada",
  },
  {
    instituteName: "College of Rockies",
    country: "Canada",
  },
  {
    instituteName: "Conestoga College",
    country: "Canada",
  },
  {
    instituteName: "Douglas College",
    country: "Canada",
  },
  {
    instituteName: "Durham College",
    country: "Canada",
  },
  {
    instituteName: "Fanshawe College",
    country: "Canada",
  },
  {
    instituteName: "George Brown College",
    country: "Canada",
  },
  {
    instituteName: "Humber College",
    country: "Canada",
  },
  {
    instituteName: "Insignia College",
    country: "Canada",
  },
  {
    instituteName:
      "International College of Manitoba (ICM) to University of Manitoba",
    country: "Canada",
  },
  {
    instituteName: "Kings University College @ University of Western Ontario",
    country: "Canada",
  },
  {
    instituteName: "Kwantlen Polytechnic University",
    country: "Canada",
  },
  {
    instituteName: "The King's University",
    country: "Canada",
  },
  {
    instituteName: "Lakehead University",
    country: "Canada",
  },
  {
    instituteName: "Loyalist College",
    country: "Canada",
  },
  {
    instituteName: "Mount Allison University",
    country: "Canada",
  },
  {
    instituteName: "Northeastern University",
    country: "Canada",
  },
  {
    instituteName: "NorQuest College",
    country: "Canada",
  },
  {
    instituteName: "Olds College of Agriculture and Technology",
    country: "Canada",
  },
  {
    instituteName: "Ontario Tech University",
    country: "Canada",
  },
  {
    instituteName: "Queen's University",
    country: "Canada",
  },
  {
    instituteName:
      "Toronto Metropolitan University (Formerly; Ryerson University)",
    country: "Canada",
  },
  {
    instituteName:
      "Toronto Metropolitan University International College (Formerly, Ryerson University International College) to Toronto Metropolitan University",
    country: "Canada",
  },
  {
    instituteName: "Saskatchewan Polytechnic",
    country: "Canada",
  },
  {
    instituteName: "Seneca College",
    country: "Canada",
  },
  {
    instituteName: "Sheridan College",
    country: "Canada",
  },
  {
    instituteName: "Southern Alberta Institute of Technology (SAIT)",
    country: "Canada",
  },
  {
    instituteName: "Suncrest College",
    country: "Canada",
  },
  {
    instituteName: "Sir Wilfrid Laurier School Board",
    country: "Canada",
  },
  {
    instituteName:
      "St. Lawrence College - Alpha College of Business & Technology",
    country: "Canada",
  },
  {
    instituteName: "Thompson Rivers University",
    country: "Canada",
  },
  {
    instituteName: "Fleming College, Toronto",
    country: "Canada",
  },
  {
    instituteName: "Trent University",
    country: "Canada",
  },
  {
    instituteName: "University of Alberta",
    country: "Canada",
  },
  {
    instituteName: "University of Guelph",
    country: "Canada",
  },
  {
    instituteName: "University of Lethbridge",
    country: "Canada",
  },
  {
    instituteName: "University of Manitoba",
    country: "Canada",
  },
  {
    instituteName: "University of Niagara Falls",
    country: "Canada",
  },
  {
    instituteName: "University of New Brunswick",
    country: "Canada",
  },
  {
    instituteName: "University of Northern British Columbia (UNBC)",
    country: "Canada",
  },
  {
    instituteName: "University of Waterloo",
    country: "Canada",
  },
  {
    instituteName:
      "Wilfrid Laurier International College to Wilfrid Laurier University",
    country: "Canada",
  },
  {
    instituteName: "Academy of Learning Career College, Scarborough",
    country: "Canada",
  },
  {
    instituteName: "Ascent College Of Technology",
    country: "Canada",
  },
  {
    instituteName: "Aviron Quebec Technical College",
    country: "Canada",
  },
  {
    instituteName: "Bow Valley College",
    country: "Canada",
  },
  {
    instituteName: "Cambrian @ Hanson",
    country: "Canada",
  },
  {
    instituteName: "Cape Breton University",
    country: "Canada",
  },
  {
    instituteName: "C�gep de la Gasp�sie et des �les",
    country: "Canada",
  },
  {
    instituteName: "C�gep Marie-Victorin",
    country: "Canada",
  },
  {
    instituteName: "Columbia College",
    country: "Canada",
  },
  {
    instituteName:
      "Conestoga College Institute of Technology and Advanced Learning",
    country: "Canada",
  },
  {
    instituteName: "Crandall University",
    country: "Canada",
  },
  {
    instituteName: "DEA Canadian College",
    country: "Canada",
  },
  {
    instituteName: "Georgian College of Applied Arts and Technology",
    country: "Canada",
  },
  {
    instituteName: "Justice Institute of British Columbia",
    country: "Canada",
  },
  {
    instituteName: "Kwantlen Polytechnic Universit",
    country: "Canada",
  },
  {
    instituteName: "LaSalle College",
    country: "Canada",
  },
  {
    instituteName: "Matrix College Of Management Technology And Healthcare",
    country: "Canada",
  },
  {
    instituteName: "Mount Saint Vincent University",
    country: "Canada",
  },
  {
    instituteName: "New York Institute of Technology - Vancouver",
    country: "Canada",
  },
  {
    instituteName: "Niagara College",
    country: "Canada",
  },
  {
    instituteName: "Pacific Coast Community College",
    country: "Canada",
  },
  {
    instituteName: "Pacific Link College",
    country: "Canada",
  },
  {
    instituteName: "St. Clair College of Applied Arts and Technology",
    country: "Canada",
  },
  {
    instituteName: "St. Francis Xavier University",
    country: "Canada",
  },
  {
    instituteName: "St. Lawrence College",
    country: "Canada",
  },
  {
    instituteName: "University Canada West",
    country: "Canada",
  },
  {
    instituteName: "University of Northern British Columbia",
    country: "Canada",
  },
  {
    instituteName: "University of Prince Edward Island",
    country: "Canada",
  },
  {
    instituteName: "University of Regina",
    country: "Canada",
  },
  {
    instituteName: "University of the Fraser Valley",
    country: "Canada",
  },
  {
    instituteName: "Vancouver Film School",
    country: "Canada",
  },
  {
    instituteName: "University of Niagara Falls Canada",
    country: "Canada",
  },
  {
    instituteName: "University of Victoria",
    country: "Canada",
  },
  {
    instituteName: "Fraser International College",
    country: "Canada",
  },
  {
    instituteName: "International College of Manitoba",
    country: "Canada",
  },
  {
    instituteName: "Toronto Metropolitan University International College",
    country: "Canada",
  },
  {
    instituteName: "ULethbridge International College Calgary",
    country: "Canada",
  },
  {
    instituteName: "Wilfrid Laurier International College",
    country: "Canada",
  },
  {
    instituteName: "Acadia University",
    country: "Canada",
  },
  {
    instituteName: "Great Plains College",
    country: "Canada",
  },
  {
    instituteName: "Lakeland College",
    country: "Canada",
  },
  {
    instituteName: "Nipissing University",
    country: "Canada",
  },
  {
    instituteName: "North West College",
    country: "Canada",
  },
  {
    instituteName: "Northern Lights College",
    country: "Canada",
  },
  {
    instituteName: "Selkirk College",
    country: "Canada",
  },
  {
    instituteName: "St. Thomas University",
    country: "Canada",
  },
  {
    instituteName: "Alexander College",
    country: "Canada",
  },
  {
    instituteName: "Braemar College",
    country: "Canada",
  },
  {
    instituteName: "Canadian College",
    country: "Canada",
  },
  {
    instituteName: "Coquitlam College",
    country: "Canada",
  },
  {
    instituteName: "Fleming College Toronto",
    country: "Canada",
  },
  {
    instituteName: "Loyalist College of Applied Arts and Technology",
    country: "Canada",
  },
  {
    instituteName: "McKenzie College",
    country: "Canada",
  },
  {
    instituteName: "Niagara College Toronto",
    country: "Canada",
  },
  {
    instituteName: "North Island College",
    country: "Canada",
  },
  {
    instituteName:
      "Sheridan College Institute of Technology and Advanced Learning",
    country: "Canada",
  },
  {
    instituteName: "Sprott Shaw College",
    country: "Canada",
  },
  {
    instituteName: "Trebas Institute",
    country: "Canada",
  },
  {
    instituteName: "Trinity Western University",
    country: "Canada",
  },
  {
    instituteName: "University of Windsor",
    country: "Canada",
  },
  {
    instituteName: "Vancouver Community College",
    country: "Canada",
  },
  {
    instituteName: "Vancouver Island University",
    country: "Canada",
  },
  {
    instituteName: "Dublin City University",
    country: "Ireland",
  },
  {
    instituteName: "University of Galway",
    country: "Ireland",
  },
  {
    instituteName: "University of Limerick - UG",
    country: "Ireland",
  },
  {
    instituteName: "University of Limerick - PG",
    country: "Ireland",
  },
  {
    instituteName: "SETU - SOUTH EAST TECHNOLOGICAL UNIVERSITY",
    country: "Ireland",
  },
  {
    instituteName: "Trinity College Dublin",
    country: "Ireland",
  },
  {
    instituteName: "University College Cork",
    country: "Ireland",
  },
  {
    instituteName: "Lincoln University",
    country: "New Zealand",
  },
  {
    instituteName: "Massey University (via Kaplan NZ)",
    country: "New Zealand",
  },
  {
    instituteName: "University of Otago",
    country: "New Zealand",
  },
  {
    instituteName: "University of Otago (Pathway and Language Centre)",
    country: "New Zealand",
  },
  {
    instituteName: "TE PUKENGA (previously Toi Ohomai Institute of Technology)",
    country: "New Zealand",
  },
  {
    instituteName: "UP EDUCATION (previously ACG Education)",
    country: "New Zealand",
  },
  {
    instituteName: "University of Waikato",
    country: "New Zealand",
  },
  {
    instituteName: "VICTORIA UNIVERSITY OF WELLINGTON",
    country: "New Zealand",
  },
  {
    instituteName: "Wittenborg - University of Applied Sciences",
    country: "Netherlands",
  },
  {
    instituteName: "Vincent Pol University in Lublin",
    country: "Poland",
  },
  {
    instituteName: "WARSAW UNIVERSITY OF BUSINESS HUMANITIES",
    country: "Poland",
  },
  {
    instituteName:
      "WARSAW UNIVERSITY OF ECONOMICS (Warszawska Uczelnia Ekonomiczna)",
    country: "Poland",
  },
  {
    instituteName:
      "Wy?sza Szko?a Przedsi?biorczo?ci i Administracji w Lublinie (The University College of Enterprise and Administration in Lublin)",
    country: "Poland",
  },
  {
    instituteName: "Geneva Business School (campuses in Switzerland and Spain)",
    country: "Spain",
  },
  {
    instituteName:
      "UNIVERSIDAD CAT�LICA SAN ANTONIO DE MURCIA- UCAM Catholic University of Murica",
    country: "Spain",
  },
  {
    instituteName: "Ivaen Education Admissions & Services Ltd",
    country: "Spain",
  },
  {
    instituteName: "Saint Louis University (Madrid)",
    country: "Spain",
  },
  {
    instituteName: "EU Business School",
    country: "Switzerland",
  },
  {
    instituteName: "HTMi (International Hotel and Tourism Institute",
    country: "Switzerland",
  },
  {
    instituteName: "University of EMUNI, The Euro- Mediterranean University",
    country: "Slovenia",
  },
  {
    instituteName: "DAVID TVILDIANI MEDICAL UNIVERSITY",
    country: "Georgia",
  },
];
export { instituteData };
