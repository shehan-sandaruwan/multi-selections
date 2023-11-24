import React from "react";
import { MarketOutcome } from "../MarketDataTypes/marketOutcome.type";
import SingleOutcomeBtn from "./SingleOutcomeBtn";

interface SingleOutcmePropTypes {
  outcomes: Array<MarketOutcome> | [];
  marketName: string;
  onSelectoutcome: (outcome: MarketOutcome, isSelected: boolean) => void;
}

const SingleOutcomeContent = (props: SingleOutcmePropTypes) => {
  const { outcomes, marketName, onSelectoutcome } = props;
  return (
    <div className="outcomes-container">
      <h3>{marketName}</h3>
      {outcomes.map((outcome) => {
        return (
          <SingleOutcomeBtn
            key={outcome.outcome_id}
            outcome={outcome}
            onSelectoutcome={onSelectoutcome}
          />
        );
      })}
    </div>
  );
};

export default SingleOutcomeContent;
