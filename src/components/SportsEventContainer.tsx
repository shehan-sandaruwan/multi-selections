import React from "react";
import { EventDto, Marketoutcome } from "../MarketDataTypes/marketOutcome.type";
import SportsMarketContent from "./SportsMarketContent";

interface SportsEventCOntainerPropType {
  sportName: string;
  events: Array<EventDto>;
  onSelectoutcome: (outcome: Marketoutcome, isSelected: boolean) => void;
}

const SportsEventContainer = (props: SportsEventCOntainerPropType) => {
  const { sportName, events, onSelectoutcome } = props;
  return (
    <div className="event-container">
      <h1>{sportName}</h1>
      {events.map((event) => {
        return (
          <SportsMarketContent
            markets={event.markets}
            key={event.event_id}
            onSelectoutcome={onSelectoutcome}
          />
        );
      })}
    </div>
  );
};

export default SportsEventContainer;
