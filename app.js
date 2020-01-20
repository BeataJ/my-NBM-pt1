const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false
    }
  }
];

const makeChart = games => {
  const ulParent = document.createElement("ul");
  for (let game of games) {
    const { awayTeam, homeTeam } = game;

    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreLine(game);

    const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;
    gameLi.classList.add(warriors.isWinner ? "win" : "loss");

    gameLi.innerHTML = `${teamNames} ${scoreLine}`;
    ulParent.append(gameLi);
  }
  return ulParent;
};

const getScoreLine = () => {
  const { team: hTeam, points: hPoints } = homeTeam;

  const { team: aTeam, points: aPoints } = awayTeam;

  const teamNames = `${aTeam} @ ${hTeam}`;

  let scoreLine;
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }
};

const chart1 = makeChart(warriorsGames);
document.body.prepend(chart1);
