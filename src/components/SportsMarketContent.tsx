import React from "react";
import SingleOutcomeContent from "./SingleOutcomeContent";
import {
  MarketDto,
  MarketOutcome,
} from "../MarketDataTypes/marketOutcome.type";

interface SportsMarketContentPropsType {
  markets: Array<MarketDto>;
  onSelectoutcome: (outcome: MarketOutcome, isSelected: boolean) => void;
}

const SportsMarketContent = (props: SportsMarketContentPropsType) => {
  const { markets, onSelectoutcome } = props;
  return (
    <>
      {markets.map((market) => {
        return (
          <SingleOutcomeContent
            key={market.market_id}
            outcomes={market.outcomes}
            marketName={market.marketName}
            onSelectoutcome={onSelectoutcome}
          />
        );
      })}
    </>
  );
};

export default SportsMarketContent;
