import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./components/store/store";
import SportsMarket from "./components/SportsMarket";
import {
  addToSelection,
  replaceSelection,
} from "./components/store/outcomeSelectorSlice";
import { addToSelectionHistory } from "./components/store/outcomeHistorySelectorSlice";
import {
  outcome1,
  outcome2,
  queryKey1,
  queryKey2,
  queryKey3,
  selection1,
  selection2,
  selection3,
} from "./mock-data/test.mock.data";

const queryClient = new QueryClient();

describe("Sports Game Multi Selection Rendering Tests", () => {
  test("Sports Game Multi Selection renders based on selection array", async () => {
    const outcome1 = { outcome_id: "1", outcome_name: "Team A", odds: 2.5 };
    const outcome2 = { outcome_id: "4", outcome_name: "Over 2.5", odds: 2.0 };

    // Act: Render the UI
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SportsMarket />
        </QueryClientProvider>
      </Provider>
    );

    await waitFor(() => screen.findByText("Football"));

    //state update
    act(() => {
      store.dispatch(addToSelection(outcome1));
      store.dispatch(addToSelection(outcome2));
    });

    // Assert: Validate UI components
    const testId1 = `${outcome1.outcome_name}-${outcome1.outcome_id}`;
    const selectedOutcome1 = screen.getByTestId(testId1);
    expect(selectedOutcome1).toHaveClass("active");

    const testId2 = `${outcome2.outcome_name}-${outcome2.outcome_id}`;
    const selectedOutcome2 = screen.getByTestId(testId2);
    expect(selectedOutcome2).toHaveClass("active");
  });

  test("Sports Game Multi Selection falls back to latest success selection on invalid selection", async () => {
    // Arrange: Simulate an invalid selection

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SportsMarket />
        </QueryClientProvider>
      </Provider>
    );

    await waitFor(() => screen.findByText("Football"));
    // Act: Trigger UI update
    act(() => {
      store.dispatch(
        addToSelectionHistory({
          queryKey: queryKey1,
          selection: selection1,
        })
      );
      queryClient.setQueryData(queryKey1, { isValid: true });
      store.dispatch(
        addToSelectionHistory({
          queryKey: queryKey2,
          selection: selection2,
        })
      );

      store.dispatch(
        addToSelectionHistory({
          queryKey: queryKey3,
          selection: selection3,
        })
      );

      queryClient.setQueryData(queryKey3, { isValid: false });
    });

    // Assert: Confirm UI displays the latest successful selection
    const testId1 = `${outcome1.outcome_name}-${outcome1.outcome_id}`;
    const selectedOutcome1 = screen.getByTestId(testId1);
    expect(selectedOutcome1).toHaveClass("active");

    const testId2 = `${outcome2.outcome_name}-${outcome2.outcome_id}`;
    const selectedOutcome2 = screen.getByTestId(testId2);
    expect(selectedOutcome2).toHaveClass("active");
  });

  test("Sports Game Multi Selection does not update for non-latest errors in selection history", async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SportsMarket />
        </QueryClientProvider>
      </Provider>
    );

    await waitFor(() => screen.findByText("Football"));

    // Act: Trigger UI update
    act(() => {
      store.dispatch(
        addToSelectionHistory({
          queryKey: queryKey1,
          selection: selection1,
        })
      );
      queryClient.setQueryData(queryKey1, { isValid: true });
      store.dispatch(
        addToSelectionHistory({
          queryKey: queryKey2,
          selection: selection2,
        })
      );
      store.dispatch(
        addToSelectionHistory({
          queryKey: queryKey3,
          selection: selection3,
        })
      );
      store.dispatch(replaceSelection(selection3));

      // make non latest history item not success.
      queryClient.setQueryData(queryKey2, { isValid: false });
    });

    // Assert: Confirm UI displays the latest successful selection
    const testId1 = `${outcome1.outcome_name}-${outcome1.outcome_id}`;
    const selectedOutcome1 = screen.getByTestId(testId1);
    expect(selectedOutcome1).not.toHaveClass("active");
  });
});
