export interface Marketoutcome {
  outcome_id: string;
  odds: number;
  outcome_name: string;
}

export interface MarketDto {
  market_id: string;
  marketName: string;
  outcomes: Array<Marketoutcome>;
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
