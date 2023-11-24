export const outcome1 = { outcome_id: "1", outcome_name: "Team A", odds: 2.5 };
export const outcome2 = {
  outcome_id: "4",
  outcome_name: "Over 2.5",
  odds: 2.0,
};
export const outcome3 = { outcome_id: "6", outcome_name: "Team C", odds: 1.9 };

export const selection1 = [outcome1, outcome2];
export const selection2 = [outcome1, outcome3];
export const selection3 = [outcome2, outcome3];

export const queryKey1 = selection1.map((item) => item.outcome_id).join(",");
export const queryKey2 = selection2.map((item) => item.outcome_id).join(",");
export const queryKey3 = selection3.map((item) => item.outcome_id).join(",");
