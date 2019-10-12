/* eslint-disable no-console */
/*
    {
        "points": [
            {
                "game": "gameName",
                "time": "2019-10-10T09:33:00.000Z",
                "viewerCount": 219424
            }
        ]
    }
    {
        games: [
            {
                name: "gameName"
                points: [219424]
            }
        ]
    }
    times: []
*/

export const computeGamesData = points => {
  const times = new Set();
  const games = [];
  points.forEach(point => {
    times.add(point.time);
    if (!games.find(game => game.name === point.game)) {
      games.push({
        name: point.game,
        points: []
      });
    }
    if (point.viewerCount > 0) {
      games
        .find(game => game.name === point.game)
        .points.push(point.viewerCount);
    }
  });
  return { games, times };
};
