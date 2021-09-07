# ODC

https://friendly-snyder-4bece3.netlify.app/#/

**React로의 변환**

0. > npm install react-router-dom

1. Header & Footer

2. (JSX) `class` -> `className`

4. `styled-components`, `withRouter` 사용하여 메뉴 언더바

    [`styled-components` 기본 개념서](https://styled-components.com/docs/basics)

5. (JSX) `img` 태그 닫아주고, `src={ importedImg }`

    (+ 이미지 파일은 `/public/image/` 디렉터리)

6. React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 **addEventListener를 호출할 필요가 없다.** 
    
    대신, 엘리먼트가 처음 렌더링될 때 **JSX를 사용하여 리스너를 제공**하면 된다. (ex> onClick={toggling})

7. 버튼을 통한 장르 설명 출력 -> `Router`, `Link` 태그를 통한 url 변경으로 컴포넌트를 출력한다.

    `/aboutus`와 `/aboutus/house`를 함께 렌더링하기 위해서는 Router exact를 해제해주어야 한다.

8. [onClick 이벤트 처리](https://ko.reactjs.org/docs/handling-events.html)

    ```javascript
    const prevImg = (num, e) => {
        const ImgElement = e.target.parentElement.firstElementChild;
        if(num > 1) {
            imgNum -= 1;
        } else {
            imgNum = Object.keys(wayImgs).length;
        }
        ImgElement.src = wayImgs[imgNum];
    };

    (    
        <PrevBtn onClick={ (e) => prevImg(imgNum, e) }>«</PrevBtn>
    )
    ```

9. > npm install react-helmet

    ```javascript
    import Helmet from "react-helmet";

    (
        <>
            <Helmet>
                <title>O.D.C</title>
            </Helmet>
            ~
        </>
    )
    ```

10. Netlify 배포

    - Site setting 메뉴 -> Build & Deploy -> Edit Setting -> Build Command에서 `CI=false yarn build` 혹은 `CI=false npm run build`로 업데이트

11. 반응형은 `styled-component`안 미디어 쿼리로 진행 (react-responsive 공부하기)
    
    + [react-responsive 참고1; 공식문서](https://www.npmjs.com/package/react-responsive)

    + [react-responsive 참고2; 블로그](https://eblee-repo.tistory.com/48?category=742647)

**해야 할 것**

0. 도메인

1. 이미지 처리 (skeleton / 리액트 쿼리)

2. 웹팩 / 바벨

3. AboutUs 장르 통합 코드