# ODC

**React로의 변환**

0. > npm install react-router-dom

1. Header & Footer

2. (JSX) `class` -> `className`

    (--> 후에 `styled-components`, `withRouter` 사용하여 메뉴 언더바)

3. (JSX) `img` 태그 닫아주고, `src={ importedImg }`

4. React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 **addEventListener를 호출할 필요가 없다.** 
    
    대신, 엘리먼트가 처음 렌더링될 때 **JSX를 사용하여 리스너를 제공**하면 된다. (ex> onClick={toggling})

5. 버튼을 통한 장르 설명 출력 -> `Router`, `Link` 태그를 통한 url 변경으로 컴포넌트를 출력한다.

    `/aboutus`와 `/aboutus/house`를 함께 렌더링하기 위해서는 Router exact를 해제해주어야 한다.

**해야 할 것**

1. styled-component로 옮기기

2. Helmet