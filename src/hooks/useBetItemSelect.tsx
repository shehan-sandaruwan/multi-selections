import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../components/store/hooks";
import { replaceSelection } from "../components/store/outcomeSelecterSlice";
import {
  addToSelectionHistory,
  editSelectionHistoryItemState,
  removeFromSelectionHistory,
} from "../components/store/outcomeHistorySelecterSlice";
import { verifySelection } from "../market-services/marketOutcome.service";
import { useQuery } from "react-query";

const useBetItemSelect = () => {
  const dispatch = useAppDispatch();
  const selectionHistory = useAppSelector(
    (state) => state.selectionHistory.selectionHistory
  );
  const historySelections = useAppSelector(
    (state) => state.selectionHistory.selectionHistory
  );

  const selections = useAppSelector((state) => state.selection.selections);

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
      if (!data.isValid && amITheLast) {
        const reversedHistoryArray = [...selectionHistory].reverse();
        const successSelection = reversedHistoryArray.find(
          (item) => item.state === "success"
        );

        if (successSelection) {
          dispatch(removeFromSelectionHistory(successSelection.queryKey));
          dispatch(replaceSelection(successSelection.selection));
        } else {
          dispatch(replaceSelection([]));
        }
      } else if (data) {
        dispatch(editSelectionHistoryItemState(queryKey));
      }
    },
  });
};

export default useBetItemSelect;
