"use client";

export const QUIZ_ID_LIST = [
  "d0aead72-5a53-4aa1-8643-06c3b94f2e25",
  "582d3f7c-ff9b-4b9a-af6b-87f37f52b4e4",
  "0d0fd76e-df2d-4d58-a2cf-55a43fe1c348",
  "8945eb61-0b92-4eae-b7e8-34644bcf9f24",
  "7f4fb715-d92a-4e23-aa61-84acdc9a78fd",
  "f3d1e11e-358b-474e-a9a1-2595151d2cf6",
  "0dc16ad1-015d-462b-845d-5a7d486d55f1",
  "21fe3f92-3726-4c5a-9db0-d8f2c0b5c2e2",
  "f8616dc5-82dc-4e77-b849-2f684b3c57bf",
  "a68dfc7f-3a04-4a2d-80f8-f10a328fb6fb"
] as const;

type QuizIdList = (typeof QUIZ_ID_LIST)[number];

import React, {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer
} from "react";

type State = {
  quiz: QuizIdList | null;
};

type Action = {
  type: "SET_QUIZ";
  value: QuizIdList | null;
};

const TripCSSStateContext = createContext<State | null>(null);
const TripCSSDispatchContext = createContext<Dispatch<Action> | null>(null);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_QUIZ": {
      return {
        ...state,
        quiz: action.value
      };
    }
  }
};

function TripCSSProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    quiz: null
  });

  return (
    <TripCSSDispatchContext.Provider value={dispatch}>
      <TripCSSStateContext.Provider value={state}>
        {children}
      </TripCSSStateContext.Provider>
    </TripCSSDispatchContext.Provider>
  );
}

function useTripCSSStateContext() {
  const state = useContext(TripCSSStateContext);
  if (!state) throw new Error("Cannot find TripCSSProvider");
  return state;
}

function useTripCSSDispatchContext() {
  const dispatch = useContext(TripCSSDispatchContext);
  if (!dispatch) throw new Error("Cannot find TripCSSProvider");
  return dispatch;
}

export { useTripCSSDispatchContext, useTripCSSStateContext };
export default TripCSSProvider;
