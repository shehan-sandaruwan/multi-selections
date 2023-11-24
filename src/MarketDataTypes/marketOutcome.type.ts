export interface MarketOutcome {
  outcome_id: string;
  odds: number;
  outcome_name: string;
}

export interface MarketDto {
  market_id: string;
  marketName: string;
  outcomes: Array<MarketOutcome>;
}

export interface EventDto {
  event_id: string;
  teams: Array<string> | undefined;
  markets: Array<MarketDto>;
}

export interface SportsDto {
  sport: string;
  events: Array<EventDto>;
}
