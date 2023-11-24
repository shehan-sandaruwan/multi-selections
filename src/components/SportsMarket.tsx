import React, { useCallback } from "react";
import { useQuery } from "react-query";
import { fetchmarketData } from "../market-services/marketOutcome.service";
import SportsEventContainer from "./SportsEventContainer";
import {
  MarketOutcome,
  SportsDto,
} from "../MarketDataTypes/marketOutcome.type";
import { useAppDispatch } from "./store/hooks";
import useBetItemSelect from "../hooks/useBetItemSelect";
import { removeSelection, addToSelection } from "./store/outcomeSelectorSlice";

const SportsMarket = () => {
  const querykey = ["marketOutcomes"];
  const { data, isLoading } = useQuery(querykey, fetchmarketData);
  const dispatch = useAppDispatch();

  useBetItemSelect();

  const onSelectoutcome = useCallback(
    (outcome: MarketOutcome, isSelected: boolean) => {
      if (isSelected) {
        dispatch(removeSelection(outcome.outcome_id));
      } else {
        dispatch(addToSelection(outcome));
      }
    },
    []
  );

  return (
    <div className="sports-container">
      {isLoading ? (
        <h3>Data Loading ....!</h3>
      ) : (
        <>
          {data.map((_sport: SportsDto, index: number) => {
            return (
              <SportsEventContainer
                key={index}
                events={_sport.events}
                sportName={_sport.sport}
                onSelectoutcome={onSelectoutcome}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default SportsMarket;
