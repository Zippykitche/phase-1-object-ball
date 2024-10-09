function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          Alan_Anderson: {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          Reggie_Evans: {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          Brook_Lopez: {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          Mason_Plumlee: {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          Jason_Terry: {
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
          Jeff_Adrien: {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          Bismak_Biyombo: {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          DeSagna_Diop: {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          Ben_Gordon: {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          Brendan_Haywood: {
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
  
  
  console.log(gameObject());
  
  function numPointsScored(name) {
    const game = gameObject();
    for (const player in game.home.players) {
      if (player === name) {
        return game.home.players[player].points;
      }
    }
    for (const player in game.away.players) {
      if (player === name) {
        return game.away.players[player].points;
      }
    }
    return "Player not found";
  }

  function shoeSize(name) {
    const game = gameObject();
    for (const player in game.home.players) {
      if (player === name) {
        return game.home.players[player].shoe;
      }
    }
    for (const player in game.away.players) {
      if (player === name) {
        return game.away.players[player].shoe;
      }
    }
    return "Player not found";
  }
  function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
      return game.home.colors;
    }
    if (game.away.teamName === teamName) {
      return game.away.colors;
    }
    return "Team not found";
  }
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  function playerNumbers(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
      return Object.values(game.home.players).map(player => player.number);
    }
    if (game.away.teamName === teamName) {
      return Object.values(game.away.players).map(player => player.number);
    }
    return "Team not found";
  }
  function playerStats(playerName) {
    const game = gameObject();
    if (game.home.players[playerName]) {
      return game.home.players[playerName];
    }
    if (game.away.players[playerName]) {
      return game.away.players[playerName];
    }
    return "Player not found";
  }
  function bigShoeRebounds() {
    const game = gameObject();
  
    let largestShoeSize = 0;
    let rebounds = 0;

    for (const player in game.home.players) {
      if (game.home.players[player].shoe > largestShoeSize) {
        largestShoeSize = game.home.players[player].shoe;
        rebounds = game.home.players[player].rebounds;
      }
    }
  
    for (const player in game.away.players) {
      if (game.away.players[player].shoe > largestShoeSize) {
        largestShoeSize = game.away.players[player].shoe;
        rebounds = game.away.players[player].rebounds;
      }
    }
  
    return rebounds;
  }
  function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let topScorer = "";
  
    for (const player in game.home.players) {
      if (game.home.players[player].points > mostPoints) {
        mostPoints = game.home.players[player].points;
        topScorer = player;
      }
    }
  
    for (const player in game.away.players) {
      if (game.away.players[player].points > mostPoints) {
        mostPoints = game.away.players[player].points;
        topScorer = player;
      }
    }
  
    return topScorer;
  }

  function winningTeam() {
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    for (const player in game.home.players) {
      homeTeamPoints += game.home.players[player].points;
    }
  
    for (const player in game.away.players) {
      awayTeamPoints += game.away.players[player].points;
    }
  
    return homeTeamPoints > awayTeamPoints ? game.home.teamName : game.away.teamName;
  }

  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (const player in game.home.players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  
    for (const player in game.away.players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  
    return longestName;
  }

  function doesLongNameStealATon() {
    const game = gameObject();
    
    const longestNamePlayer = playerWithLongestName();

    let mostSteals = 0;
    let playerWithMostSteals = "";
  
    for (const player in game.home.players) {
      if (game.home.players[player].steals > mostSteals) {
        mostSteals = game.home.players[player].steals;
        playerWithMostSteals = player;
      }
    }
  
    for (const player in game.away.players) {
      if (game.away.players[player].steals > mostSteals) {
        mostSteals = game.away.players[player].steals;
        playerWithMostSteals = player;
      }
    }
  
    return longestNamePlayer === playerWithMostSteals;
  }
  
  
  
  
  
  
  
  
  
  