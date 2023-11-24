import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { MarketOutcome } from "../../MarketDataTypes/marketOutcome.type";

type SelectionHistoryObjectType = {
  state: string;
  queryKey: string;
  selection: Array<MarketOutcome>;
};

interface selectionsHistoryState {
  selectionHistory: Array<SelectionHistoryObjectType>;
}

const initialState: selectionsHistoryState = {
  selectionHistory: [],
};

type AddItemType = {
  queryKey: string;
  selection: Array<MarketOutcome>;
};

export const outcomeHistorySelectorSlice = createSlice({
  name: "selectionHistory",
  initialState,
  reducers: {
    addToSelectionHistory: (state, action: PayloadAction<AddItemType>) => {
      const selectItem = {
        state: "pending",
        queryKey: action.payload.queryKey,
        selection: action.payload.selection,
      };
      state.selectionHistory.push(selectItem);
    },
    removeFromSelectionHistory: (state, action: PayloadAction<string>) => {
      const successItemIndex = state.selectionHistory.findIndex(
        (selection) => selection.queryKey === action.payload
      );

      if (successItemIndex > -1) {
        state.selectionHistory.splice(successItemIndex + 1);
      }
    },
    editSelectionHistoryItemState: (state, action: PayloadAction<string>) => {
      const itemIndex = state.selectionHistory.findIndex(
        (item) => item.queryKey === action.payload
      );

      if (itemIndex > -1) {
        state.selectionHistory[itemIndex].state = "success";
      }
    },
  },
});

export const {
  addToSelectionHistory,
  removeFromSelectionHistory,
  editSelectionHistoryItemState,
} = outcomeHistorySelectorSlice.actions;

export const selectHistorySelection = (state: RootState) =>
  state.selectionHistory.selectionHistory;

export default outcomeHistorySelectorSlice.reducer;
