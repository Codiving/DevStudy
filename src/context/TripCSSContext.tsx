"use client";

export const QUIZ_ID_LIST = [
  "d0aead72-5a53-4aa1-8643-06c3b94f2e25",
  "0d0fd76e-df2d-4d58-a2cf-55a43fe1c348",
  "582d3f7c-ff9b-4b9a-af6b-87f37f52b4e4",
  "8945eb61-0b92-4eae-b7e8-34644bcf9f24",
  "7f4fb715-d92a-4e23-aa61-84acdc9a78fd",
  "f3d1e11e-358b-474e-a9a1-2595151d2cf6",
  "0dc16ad1-015d-462b-845d-5a7d486d55f1",
  "21fe3f92-3726-4c5a-9db0-d8f2c0b5c2e2",
  "f8616dc5-82dc-4e77-b849-2f684b3c57bf",
  "a68dfc7f-3a04-4a2d-80f8-f10a328fb6fb"
] as const;

type QuizIdList = (typeof QUIZ_ID_LIST)[number];

type TripCSSQuiz = {
  [key in string]: {
    id: QuizIdList;
    title: string;
    description: string[];
    keywords: string[];
  };
};

export const TRIP_CSS_QUIZ: TripCSSQuiz = {
  margin_가운데_정렬: {
    id: "d0aead72-5a53-4aa1-8643-06c3b94f2e25",
    title: "자식 div를 부모 div의 가운데로 위치할 수 있는가?",
    description: [
      "화면을 개발하다보면 div를 가운데 정렬을 해야하는 경우가 많이 있습니다.",
      "주어진 markup 구조에서 구현해보세요."
    ],
    keywords: ["margin"]
  },
  flex_flexDirection_column: {
    id: "0d0fd76e-df2d-4d58-a2cf-55a43fe1c348",
    title: "flex를 이용하여 화면을 구현할 수 있는가?",
    description: [
      "화면을 개발하다보면 div를 가운데 정렬을 해야하는 경우가 많이 있습니다.",
      "주어진 markup 구조에서 구현해보세요."
    ],
    keywords: ["flex", "flex-direction"]
  },
  flex_margin_구조: {
    id: "582d3f7c-ff9b-4b9a-af6b-87f37f52b4e4",
    title: "flex를 이용하여 화면을 구현할 수 있는가?",
    description: [
      "웹 사이트를 이용하다보면 해당 구조로 개발되어 있는 사이트가 많이 있습니다.",
      "flex의 개념과 margin에 대한 개념이 있으면 쉽게 구현할 수 있습니다.",
      "주어진 markup 구조에서 구현해보세요."
    ],
    keywords: ["flex", "margin"]
  },
  flex_gap: {
    id: "8945eb61-0b92-4eae-b7e8-34644bcf9f24",
    title: "flex를 이용하여 화면을 구현할 수 있는가?",
    description: [
      "웹 사이트를 이용하다보면 동일한 간격으로 div가 띄워져 있는 경우가 있습니다.",
      "margin을 이용하여도 쉽게 구현할 수 있지만 마지막(or 처음) 요소에 추가적인 작업을 해주어야 합니다.",
      "flex를 이용하면 더 쉽게 구현할 수 있습니다.",
      "주어진 markup 구조에서 구현해보세요."
    ],
    keywords: ["flex", "gap"]
  },
  header_dropdown: {
    id: "7f4fb715-d92a-4e23-aa61-84acdc9a78fd",
    title: "Dropdown을 CSS로만 구현할 수 있는가?",
    description: [
      "웹 사이트 Header에 Dropdown이 구현되어 있는 경우가 많이 있습니다.",
      "JavaScript로 구현하면 쉽게 할 수 있습니다.",
      "그러나 CSS로만으로도 구현할 수 있습니다.",
      "주어진 markup 구조에서 구현해보세요."
    ],
    keywords: []
  }
};

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
