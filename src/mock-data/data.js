export const sports = [
  {
    sport: "Football",
    events: [
      {
        event_id: "1",
        teams: ["Team A", "Team B"],
        markets: [
          {
            market_id: "1",
            market_name: "Match Winner",
            outcomes: [
              { outcome_id: "1", outcome_name: "Team A", odds: 2.5 },
              { outcome_id: "2", outcome_name: "Team B", odds: 1.8 },
              { outcome_id: "3", outcome_name: "Draw", odds: 3.0 },
            ],
          },
          {
            market_id: "2",
            market_name: "Total Goals",
            outcomes: [
              { outcome_id: "4", outcome_name: "Over 2.5", odds: 2.0 },
              { outcome_id: "5", outcome_name: "Under 2.5", odds: 1.7 },
            ],
          },
        ],
      },
      {
        event_id: "2",
        teams: ["Team C", "Team D"],
        markets: [
          {
            market_id: "3",
            market_name: "Match Winner",
            outcomes: [
              { outcome_id: "6", outcome_name: "Team C", odds: 1.9 },
              { outcome_id: "7", outcome_name: "Team D", odds: 2.2 },
            ],
          },
          {
            market_id: "4",
            market_name: "Total Goals",
            outcomes: [
              { outcome_id: "8", outcome_name: "Over 2.5", odds: 2.1 },
              { outcome_id: "9", outcome_name: "Under 2.5", odds: 1.8 },
            ],
          },
        ],
      },
    ],
  },
  {
    sport: "Basketball",
    events: [
      {
        event_id: "3",
        teams: ["Team E", "Team F"],
        markets: [
          {
            market_id: "5",
            market_name: "Moneyline",
            outcomes: [
              { outcome_id: "10", outcome_name: "Team E", odds: 1.7 },
              { outcome_id: "11", outcome_name: "Team F", odds: 2.0 },
            ],
          },
          {
            market_id: "6",
            market_name: "Total Points",
            outcomes: [
              { outcome_id: "12", outcome_name: "Over 200.5", odds: 2.2 },
              { outcome_id: "13", outcome_name: "Under 200.5", odds: 1.9 },
            ],
          },
        ],
      },
      {
        event_id: "4",
        teams: ["Team G", "Team H"],
        markets: [
          {
            market_id: "7",
            market_name: "Moneyline",
            outcomes: [
              { outcome_id: "14", outcome_name: "Team G", odds: 1.8 },
              { outcome_id: "15", outcome_name: "Team H", odds: 2.1 },
            ],
          },
          {
            market_id: "8",
            market_name: "Total Points",
            outcomes: [
              { outcome_id: "16", outcome_name: "Over 205.5", odds: 2.0 },
              { outcome_id: "17", outcome_name: "Under 205.5", odds: 1.7 },
            ],
          },
        ],
      },
    ],
  },
  {
    sport: "Tennis",
    events: [
      {
        event_id: "5",
        players: ["Player X", "Player Y"],
        markets: [
          {
            market_id: "9",
            market_name: "Match Winner",
            outcomes: [
              { outcome_id: "18", outcome_name: "Player X", odds: 1.5 },
              { outcome_id: "19", outcome_name: "Player Y", odds: 2.0 },
            ],
          },
          {
            market_id: "10",
            market_name: "Total Games",
            outcomes: [
              { outcome_id: "20", outcome_name: "Over 20.5", odds: 1.8 },
              { outcome_id: "21", outcome_name: "Under 20.5", odds: 2.2 },
            ],
          },
        ],
      },
      {
        event_id: "6",
        players: ["Player Z", "Player W"],
        markets: [
          {
            market_id: "11",
            market_name: "Match Winner",
            outcomes: [
              { outcome_id: "22", outcome_name: "Player Z", odds: 1.7 },
              { outcome_id: "23", outcome_name: "Player W", odds: 2.1 },
            ],
          },
          {
            market_id: "12",
            market_name: "Total Games",
            outcomes: [
              { outcome_id: "24", outcome_name: "Over 22.5", odds: 1.9 },
              { outcome_id: "25", outcome_name: "Under 22.5", odds: 2.0 },
            ],
          },
        ],
      },
    ],
  },
  {
    sport: "Golf",
    events: [
      {
        event_id: "7",
        players: ["Player A", "Player B"],
        markets: [
          {
            market_id: "13",
            market_name: "Tournament Winner",
            outcomes: [
              { outcome_id: "26", outcome_name: "Player A", odds: 3.0 },
              { outcome_id: "27", outcome_name: "Player B", odds: 2.5 },
            ],
          },
          {
            market_id: "14",
            market_name: "Top 10 Finish",
            outcomes: [
              { outcome_id: "28", outcome_name: "Yes", odds: 1.7 },
              { outcome_id: "29", outcome_name: "No", odds: 2.0 },
            ],
          },
        ],
      },
      {
        event_id: "8",
        players: ["Player C", "Player D"],
        markets: [
          {
            market_id: "15",
            market_name: "Tournament Winner",
            outcomes: [
              { outcome_id: "30", outcome_name: "Player C", odds: 2.8 },
              { outcome_id: "31", outcome_name: "Player D", odds: 1.9 },
            ],
          },
          {
            market_id: "16",
            market_name: "Top 10 Finish",
            outcomes: [
              { outcome_id: "32", outcome_name: "Yes", odds: 2.2 },
              { outcome_id: "33", outcome_name: "No", odds: 1.8 },
            ],
          },
        ],
      },
    ],
  },
  {
    sport: "Soccer",
    events: [
      {
        event_id: "9",
        teams: ["Team P", "Team Q"],
        markets: [
          {
            market_id: "17",
            market_name: "Match Winner",
            outcomes: [
              { outcome_id: "34", outcome_name: "Team P", odds: 2.2 },
              { outcome_id: "35", outcome_name: "Team Q", odds: 1.6 },
              { outcome_id: "36", outcome_name: "Draw", odds: 2.8 },
            ],
          },
          {
            market_id: "18",
            market_name: "Total Corners",
            outcomes: [
              { outcome_id: "37", outcome_name: "Over 10.5", odds: 1.9 },
              { outcome_id: "38", outcome_name: "Under 10.5", odds: 2.1 },
            ],
          },
        ],
      },
      {
        event_id: "10",
        teams: ["Team R", "Team S"],
        markets: [
          {
            market_id: "19",
            market_name: "Match Winner",
            outcomes: [
              { outcome_id: "39", outcome_name: "Team R", odds: 1.8 },
              { outcome_id: "40", outcome_name: "Team S", odds: 2.0 },
              { outcome_id: "41", outcome_name: "Draw", odds: 2.5 },
            ],
          },
          {
            market_id: "20",
            market_name: "Total Goals",
            outcomes: [
              { outcome_id: "42", outcome_name: "Over 3.5", odds: 2.2 },
              { outcome_id: "43", outcome_name: "Under 3.5", odds: 1.7 },
            ],
          },
        ],
      },
    ],
  },
];
