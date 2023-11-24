import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../components/store/hooks";
import { replaceSelection } from "../components/store/outcomeSelectorSlice";
import {
  addToSelectionHistory,
  editSelectionHistoryItemState,
  removeFromSelectionHistory,
} from "../components/store/outcomeHistorySelectorSlice";
import { verifySelection } from "../market-services/marketOutcome.service";
import { useQuery } from "react-query";

// custom hook for real time UI Update, selection verification and update UI based on the verification
const useBetItemSelect = () => {
  const dispatch = useAppDispatch();
  const selectionHistory = useAppSelector(
    (state) => state.selectionHistory.selectionHistory
  );
  const historySelections = useAppSelector(
    (state) => state.selectionHistory.selectionHistory
  );

  const selections = useAppSelector((state) => state.selection.selections);

  // create dynamic queryKey based on the selection
  const queryKey = useMemo(() => {
    return selections.map((item) => item.outcome_id).join(",");
  }, [selections]);

  useEffect(() => {
    if (queryKey && selections.length) {
      dispatch(
        addToSelectionHistory({
          queryKey: queryKey,
          selection: selections,
        })
      );
    }
  }, [queryKey, selections, dispatch]);

  const { data } = useQuery(queryKey, verifySelection, {
    enabled: selections.length > 0 && queryKey !== "",
    onSettled: (data) => {
      const amITheLast =
        historySelections[historySelections.length - 1].queryKey === queryKey;
      //if the failed selection is the latest selection on UI we need to replace with latest success selection
      if (!data.isValid && amITheLast) {
        const reversedHistoryArray = [...selectionHistory].reverse();
        const successSelection = reversedHistoryArray.find(
          (item) => item.state === "success"
        );

        if (successSelection) {
          // remove all other pending selection
          dispatch(removeFromSelectionHistory(successSelection.queryKey));

          //replace the UI with latest success selection
          dispatch(replaceSelection(successSelection.selection));
        } else {
          dispatch(replaceSelection([]));
        }
      } else if (data) {
        // up on success response selection history status will be updated
        dispatch(editSelectionHistoryItemState(queryKey));
      }
    },
  });
};

export default useBetItemSelect;
