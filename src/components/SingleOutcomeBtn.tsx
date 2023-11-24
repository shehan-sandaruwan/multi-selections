import React, { useEffect, useState } from "react";
import { MarketOutcome } from "../MarketDataTypes/marketOutcome.type";
import { useAppSelector } from "./store/hooks";

interface SingleOutcomeBtnPropType {
  outcome: MarketOutcome;
  onSelectoutcome: (outcome: MarketOutcome, isSelected: boolean) => void;
}

const SingleOutcomeBtn = (props: SingleOutcomeBtnPropType) => {
  const { outcome, onSelectoutcome } = props;
  const [isSelected, setIsSelected] = useState(false);
  const selections = useAppSelector((state) => state.selection.selections);

  const onbetButtonClick = () => {
    onSelectoutcome(outcome, isSelected);
  };

  useEffect(() => {
    if (selections.length) {
      const itemIndex = selections.findIndex(
        (item) => item.outcome_id === outcome.outcome_id
      );

      if (itemIndex > -1) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    }
  }, [selections, outcome]);

  return (
    <div
      onClick={onbetButtonClick}
      className={`outcome-btn ${isSelected ? "active" : ""}`}
      data-testid={`${outcome.outcome_name}-${outcome.outcome_id}`}
    >
      <label>{outcome.outcome_name}</label>
      <label>{outcome.odds}</label>
    </div>
  );
};

export default SingleOutcomeBtn;
