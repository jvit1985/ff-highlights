const draftBtn = document.querySelector("#draft");
const select = document.querySelector("#dropdown");

let players = [
    "Jonathan Taylor",
    "Christian McCaffrey",
    "Derrick Henry",
    "Dalvin Cook",
    "Austin Ekeler",
    "Joe Mixon",
    "Najee Harris",
    "Nick Chubb",
    "Justin Jefferson",
    "Cooper Kupp",
    "Ja'Marr Chase",
    "Travis Kelce",
    "D'Andre Swift",
    "Stefon Diggs",
    "Mark Andrews",
    "Davante Adams",
    "Saquon Barkley",
    "Alvin Kamara",
    "Deebo Samuel",
    "CeeDee Lamb",
    "Aaron Jones",
    "Javonte Williams",
    "Leonard Fournette",
    "Mike Evans",
    "Tyreek Hill",
    "James Conner",
    "A.J. Brown",
    "Ezekiel Elliott",
    "Tee Higgins",
    "Kyle Pitts",
    "Josh Allen",
    "Michael Pittman Jr.",
    "Keenan Allen",
    "Cam Akers",
    "Mike Williams",
    "DJ Moore",
    "Terry McLaurin",
    "David Montgomery",
    "Courtland Sutton",
    "Breece Hall",
    "George Kittle",
    "Diontae Johnson",
    "Elijah Mitchell",
    "DK Metcalf",
    "Justin Herbert",
    "Jaylen Waddle",
    "Antonio Gibson",
    "J.K. Dobbins",
    "Travis Etienne Jr.",
    "Brandin Cooks",
    "Darren Waller",
    "Patrick Mahomes II",
    "Lamar Jackson",
    "Marquise Brown",
    "Gabriel Davis",
    "Allen Robinson II",
    "Josh Jacobs",
    "Jerry Jeudy",
    "Amari Cooper",
    "AJ Dillon",
    "Darnell Mooney",
    "Kyler Murray",
    "Damien Harris",
    "Rashod Bateman",
    "Jalen Hurts",
    "Elijah Moore",
    "Chris Godwin",
    "Dalton Schultz",
    "Miles Sanders",
    "Michael Thomas",
    "Adam Thielen",
    "Joe Burrow",
    "Dallas Goedert",
    "Juju Smith-Schuster",
    "T.J. Hockenson",
    "Rashaad Penny",
    "Amon-Ra St. Brown",
    "Clyde Edwards-Helaire",
    "DeVonta Smith",
    "Tom Brady",
    "Brandon Aiyuk",
    "Kareem Hunt",
    "Dak Prescott",
    "Russell Wilson",
    "Chase Edmonds",
    "Devin Singletary",
    "Tony Pollard",
    "Allen Lazard",
    "Tyler Lockett",
    "Melvin Gordon III",
    "Drake London",
    "DeAndre Hopkins",
    "Dawson Knox",
    "Rhamondre Stevenson",
    "Ken Walker III",
    "Zach Ertz",
    "Christian Kirk",
    "Cordarrelle Patterson",
    "Trey Lance",
    "Hunter Renfrow",
    "Matthew Stafford",
    "Treylon Burks",
    "Robert Woods",
    "Aaron Rodgers",
    "Chase Claypool",
    "Kadarius Toney",
    "Kirk Cousins",
    "Derek Carr",
    "Hunter Henry",
    "Chris Olave",
    "James Cook",
    "Pat Freiermuth",
    "Garrett Wilson",
    "Darrell Henderson Jr.",
    "James Robinson",
    "Ronald Jones II",
    "Cole Kmet",
    "Michael Carter",
    "Tua Tagovailoa",
    "Russell Gage",
    "Mike Gesicki",
    "Justin Fields",
    "Alexander Mattison",
    "Skyy Moore",
    "Marquez Valdes-Scantling",
    "Tyler Boyd",
    "Trevor Lawrence",
    "Dameon Pierce",
    "Isaiah Spiller",
    "Kenny Golladay",
    "Noah Fant",
    "Irv Smith Jr.",
    "Raheem Mostert",
    "Michael Gallup",
    "Jarvis Landry",
    "DeVante Parker",
    "Jakobi Meyers",
    "Kenneth Gainwell",
    "Albert Okwuegbunam",
    "Robert Tonyan",
    "Jameis Winston",
    "Jamaal Williams",
    "David Njoku",
    "DJ Chark Jr.",
    "Tyler Higbee",
    "Matt Ryan",
    "Gus Edwards",
    "Gerald Everett",
    "Ryan Tannehill",
    "Tyler Allgeier",
    "Nyheim Hines",
    "Khalil Herbert",
    "Buffalo Bills DST",
    "Rondale Moore",
    "Marlon Mack",
    "Daniel Jones",
    "Tampa Bay Buccaneers DST",
    "Evan Engram",
    "Mac Jones",
    "Sony Michel",
    "Julio Jones",
    "Rachaad White",
    "Zach Wilson",
    "J.D. McKissic",
    "Logan Thomas",
    "San Francisco 49ers DST",
    "Corey Davis",
    "Jahan Dotson",
    "Austin Hooper",
    "Indianapolis Colts DST",
    "Carson Wentz",
    "Mecole Hardman",
    "Van Jefferson",
    "Jameson Williams",
    "Darrel Williams",
    "Mark Ingram II",
    "D'Onta Foreman",
    "Robbie Anderson",
    "Justin Tucker",
    "Denver Broncos DST",
    "New England Patriots DST",
    "Nico Collins",
    "New Orleans Saints DST",
    "Jared Goff",
    "Los Angeles Rams DST",
    "Christian Watson",
    "Hayden Hurst",
    "Deshaun Watson",
    "Tyler Bass",
    "Marvin Jones Jr.",
    "Brian Robinson Jr.",
    "K.J. Osborn",
    "Joshua Palmer",
    "George Pickens",
    "Matt Gay",
    "Davis Mills",
    "Dallas Cowboys DST",
    "Kendrick Bourne",
    "Baker Mayfield",
    "Daniel Carlson",
    "Donovan Peoples-Jones",
    "Zamir White",
    "Evan McPherson",
    "Los Angeles Chargers DST",
    "Jamison Crowder",
    "Jalen Tolbert",
    "Miami Dolphins DST",
    "Boston Scott",
    "Green Bay Packers DST",
    "Curtis Samuel",
    "Kansas City Chiefs DST",
    "KJ Hamler",
    "Kenyan Drake",
    "Parris Campbell",
    "Ryan Succop",
    "Harrison Butker",
    "A.J. Green",
    "Matt Prater",
    "Cleveland Browns DST",
    "Tyrion Davis-Price",
    "Brevin Jordan",
    "Baltimore Ravens DST",
    "Chubba Hubbard",
    "Philadelphia Eagles DST",
    "David Bell",
    "Pittsburgh Steelers DST",
    "Wan'Dale Robinson",
    "Sterling Shepard",
    "Rodrigo Blankenship",
    "Younghoe Koo",
    "Marcus Mariota",
    "Jonnu Smith",
    "Alec Pierce",
    "Laviska Shenault Jr.",
    "Jason Sanders",
    "Damien Williams",
    "Brandon McManus",
    "Nick Folk",
    "Arizona Cardinals DST",
    "D'Ernest Johnson",
    "Adam Trautman",
    "Trey Sermon",
    "Samaje Perine",
    "Mitch Trubisky",
    "Terrace Marshall Jr.",
    "Robbie Gould",
    "Jake Elliott",
    "Mo Alie-Cox",
    "Byron Pringle",
    "Cincinnati Bengals DST",
    "Jeff Wilson Jr.",
    "Tennessee Titans DST",
    "Myles Gaskin",
    "Dan Arnold",
    "William Fuller V",
    "Bryan Edwards",
    "Dustin Hopkins",
    "Jerick McKinnon",
    "Carolina Panthers DST",
    "Braxton Berrios",
    "Isaiah McKenzie",
    "Rex Burkhead",
    "Greg Zuerlein",
    "Zack Moss",
    "Zay Jones",
    "Will Lutz",
    "Marquez Callaway",
    "Odell Beckham Jr.",
    "C.J. Uzomah",
    "Minnesota Vikings DST",
    "Chris Boswell",
    "Randall Cobb",
    "Mike Davis",
    "Sammy Watkins",
    "Cameron Brate",
    "Matt Breida",
    "Chicago Bears DST",
    "Mason Crosby",
    "Cedrick Wilson Jr.",
    "Romeo Doubs",
    "Hassan Haskins",
    "O.J. Howard",
    "Phillip Lindsay",
    "Trey McBride",
    "Graham Gano",
    "Washington Commanders DST",
    "Nelson Agholor",
    "Jason Myers",
    "Greg Joseph",
    "New York Giants DST",
    "Eno Benjamin",
    "Ke'Shawn Vaughn",
    "Cairo Santos",
    "Seattle Seahawks DST",
    "New York Jets DST",
    "Tre'Quan Smith",
    "Randy Bullock",
    "Ka'imi Fairbairn",
    "Drew Lock",
    "Josh Reynolds",
    "Jimmy Garoppolo",
    "Jacksonville Jaguars DST",
    "Kenny Pickett",
    "Darius Slayton",
    "Quez Watkins",
    "Pierre Strong Jr.",
    "Kyle Rudolph",
    "Dyami Brown",
    "Kyren Williams",
    "Emmanuel Sanders",
    "Chris Evans",
    "Isiah Pacheco",
    "Ty Johnson",
    "Jalen Reagor",
    "Justin Jackson",
    "Quintez Cephus",
    "Joshua Kelley",
    "Velus Jones Jr.",
    "Duke Johnson Jr.",
    "Geno Smith",
    "Greg Dulcich",
    "Chase McLaughlin",
    "Darrynton Evans",
    "Devin Duvernay",
    "Tyler Badie",
    "Cole Beasley",
    "Jacoby Brissett",
    "Josh Lambo",
    "Sam Darnold",
    "Nick Westbrook-Ikhine",
    "Giovani Bernard",
    "Harrison Bryant",
    "Jared Cook",
    "Tevin Coleman",
    "Salvon Ahmed",
    "Tyler Conklin",
    "Daniel Bellinger",
    "Ricky Seals-Jones",
    "Snoop Conner",
    "Jaret Patterson",
    "Jerome Ford",
    "Tommy Tremble",
    "Desmond Ridder",
    "David Johnson",
    "Tyquan Thornton",
    "T.Y. Hilton",
    "Donald Parham Jr.",
    "Anthony Firkser",
    "Malcolm Brown",
    "Jalen Guyton",
    "Dontrell Hilliard",
    "James Washington",
    "Latavius Murray",
    "James Proche II",
    "John Metchie III",
    "Las Vegas Raiders DST",
    "Jelani Woods",
    "Devontae Booker",
    "Foster Moreau",
    "Demarcus Robinson",
    "Atlanta Falcons DST",
    "Keaontay Ingram",
    "Devonta Freeman",
    "Amari Rodgers",
    "Detroit Lions DST",
    "Cade Otton",
    "Cade York",
    "Kyle Philips",
    "Khalil Shakir",
    "Wayne Gallman Jr.",
    "Jonathan Garibay",
    "John Bates",
    "Olamide Zaccheaus",
    "Benny Snell Jr.",
    "Anthony Schwartz",
    "Kylen Granson",
    "Calvin Austin III",
    "Taysom Hill",
    "Dee Eskridge",
    "Teddy Bridgewater",
    "Houston Texans DST",
    "Malik Willis",
    "Jauan Jennings",
    "Laquon Treadwell",
    "Rashard Higgins",
    "Kene Nwangwu",
    "Danny Gray",
    "Joey Slye",
    "Tristan Vizcaino",
    "Austin Seibert",
    "Antonio Brown",
    "Zane Gonzalez",
    "Ryan Santoso",
    "Riley Patterson",
    "Brett Maher",
    "Lirim Hajrullahu",
    "Carlos Martinez",
    "Eddy Pineiro",
    "Andrew Jacas"
]

//append player list to options in dropdown
function displayPlayers() {
    let playerLength = players.length;

    for (let i = 0; i < playerLength; i++) {
        var optn = players[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.append(el);
    }
}

function draftPlayer() {
    console.log("button clicked");
}

draftBtn.addEventListener("click", draftPlayer);

//run on load
displayPlayers();