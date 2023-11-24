import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { MarketOutcome } from "../../MarketDataTypes/marketOutcome.type";

interface selectionsState {
  selections: Array<MarketOutcome>;
}

const initialState: selectionsState = {
  selections: [],
};

export const outcomeSelectionSlicer = createSlice({
  name: "selection",
  initialState,
  reducers: {
    addToSelection: (state, action: PayloadAction<MarketOutcome>) => {
      state.selections.push(action.payload);
    },
    removeSelection: (state, action: PayloadAction<string>) => {
      const itemToBeRemovedIndex = state.selections.findIndex(
        (item) => item.outcome_id === action.payload
      );

      if (itemToBeRemovedIndex > -1) {
        state.selections.splice(itemToBeRemovedIndex, 1);
      }
    },
    replaceSelection: (state, action: PayloadAction<Array<MarketOutcome>>) => {
      state.selections = action.payload;
    },
  },
});

export const { addToSelection, removeSelection, replaceSelection } =
  outcomeSelectionSlicer.actions;

export const selectCount = (state: RootState) => state.selection.selections;

export default outcomeSelectionSlicer.reducer;
