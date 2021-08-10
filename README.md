# ODC

0. > npm install react-router-dom

1. Header & Footer

2. (JSX) `class` -> `className`

    (--> 후에 `styled-components`, `withRouter` 사용하여 메뉴 언더바)

3. React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 **addEventListener를 호출할 필요가 없다.** 
    
    대신, 엘리먼트가 처음 렌더링될 때 **JSX를 사용하여 리스너를 제공 (ex> onClick={toggling})**하면 된다.