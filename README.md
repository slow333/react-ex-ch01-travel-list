# Getting Started with Create React App

## travel list 관련 App
* state에 관련된 연습

## state
* 데이터를 변경하지 않으면 그냥 변수로.
* 기존 state/props를 다시 사용가능하면 state를 호출해서 사용(parent component에서 props로 전달받음)

* 화면에 영향을 주지 않고 값만 변경하는 것이면 useRef
* 화면에도 영향을 주고, 값도 변경해야 하면 state를 생성

+ 해당 컴포넌트에서만 사용되면 거기에 생성해서 사용
+ child components에서 사용되면 props로 전달해줌

+ sibling components에서 사용해야 하면 상위(parent) component로 lift up
+ 또는 global state로 정의함(useContext, Redux 사용)