function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

let object = gameObject();
let awayTeamPlayers = object["away"].players;
let homeTeamPlayers = object["home"].players;
const players = { ...homeTeamPlayers, ...awayTeamPlayers };
const bothTeams = { ...object["home"], ...object["away"] };

function homeTeamName() {
  return object["home"]["teamName"];
}
// homeTeamName()

function homeTeamColor() {
  return object["home"].colors;
}
function homePlayers() {
  return object["home"].players;
}

function isKeyExists(obj, key) {
  return key in obj;
}

function numPointsScored(player) {
  return players[player].points;
}

// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName) {
  const teamColorsArray = [];
  let teamColor;
  teamName === object.away.teamName
    ? (teamColor = object.away.colors)
    : (teamColor = object.home.colors);
  for (const color of teamColor) {
    teamColorsArray.push(color);
  }

  return teamColorsArray;
}
// Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames(teams) {
  const teamArr = [];
  for (const key in teams) {
    teamArr.push(teams[key].teamName);
  }

  return teamArr;
}

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey
function playerNumbers(teamName) {
  const teamJerseyArr = [];
  let teamPlayerNumber;
  teamName === object.teamName
    ? (teamPlayerNumber = object.away.players)
    : (teamPlayerNumber = object.home.players);

  for (const number in teamPlayerNumber) {
    teamJerseyArr.push(teamPlayerNumber[number].number);
  }
  return teamJerseyArr;
}

// Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.
function playerStats(playerName) {
  return players[playerName];
}

// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
// First, find the player with the largest shoe size
// Then, return that player's number of rebounds
// Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.

function bigShoeRebounds() {
  // First, find the player with the largest shoe size
  playersArray = Object.values(players);
  let max = Math.max.apply(
    Math,
    playersArray.map(function (o) {
      return o.shoe;
    })
  );

  // return that player's number of rebounds
  for (const key in players) {
    if (max === players[key].shoe) {
      return console.log(players[key].rebounds);
    }
  }
}

bigShoeRebounds();
