# react-Netflix-clone
<br>

## 최종 결과물
### Home
<img width="640" alt="Home" src="https://user-images.githubusercontent.com/93115007/165537514-f07616e2-a6c2-4547-975e-be0ff8a6e1c1.png">

### Tv Show
<img width="640" alt="Home" src="https://user-images.githubusercontent.com/93115007/165537837-2ed9e6ad-08d2-4726-9f38-ba27ccfdec84.png">

### Sliders
<img width="640" alt="Home" src="https://user-images.githubusercontent.com/93115007/165537918-80f41f7b-8988-4d3a-8918-5330844b6752.png">

### Modal
<img width="640" alt="Home" src="https://user-images.githubusercontent.com/93115007/165537908-1649b091-6f30-4411-8541-021b84010ae8.png">


<br>

## 소개
리액트 기초 마스터 강의를 수강 후 이제껏 배운 리액트 훅 또는 라이브러리 등을 사용하여<br>
파이널 프로젝트를 제작 하였습니다.

<br>

## 구현 기능
  - The Movie Database API를 호출하여 Movie 와 Tv Show 카테고리를 카테고리별로 컨텐츠들을 시각적으로 구성하였습니다.
  - 카테고리를 슬라이드 형식으로 구성하였습니다.
  - Banner에 now playing 컨텐츠의 첫 번째 오브젝트에 대한 정보를 보여주도록하였습니다. Detail 버튼을 눌렀을 시 모달 창이 뜹니다.
  - 각 카테고리별 컨텐츠를 클릭하면 모달창이 뜹니다.
  - 스크롤을 하면 header의 배경이 생겨납니다.
  - 돋보기 아이콘을 누르면 input이 나타나며, 2자 이상 keyword를 검색하면 해당 keyword에 대한 결과물들이 보여집니다.
  - 해당 페이지에 있을 시 Navigator의 하단에 붉은 점이 보여집니다.

<br>

## 사용 기능
  ### React
  - useState, useMatch, useNavigate, Router
  ### styled-component
  - JSX에 직접 style을 설정하지 않고, styled-component를 이용하여 JSX의 하위 테그도 함께 style을 적용하였습니다.
  ### Typescript
  ### Framer Motion
  - 스크롤 시 Header에 배경이 생겨나는 animation을 적용하였습니다.
  - 컨텐츠 호버 시 컨텐츠 scale이 변경되고, title이 보이도록 하였습니다.
  - `layoutId`를 사용하여 컨텐츠 클릭 시 모달창이 부드럽게 뜨도록 하였습니다.
  - Slider의 Next, Back 버튼을 클릭 시 컨텐츠들이 옆으로 넘어가고 다른 컨텐츠들이 보이도록 하였습니다.
  ### React Query
  - The Movie Database API를 호출하였습니다.
  ### React Hook Form
  - Input을 keyword를 입력 시 submit하고, keyword 전송 후 input 내용을 리셋시키도록 하였습니다.

<br>

## 업데이트 예정
  - [ ] 2자 이하 검색 시 SearchResult 페이지에 오류 메시지 띄우기.
  - [ ] Banner에 영화나 시리즈 정보를 api의 첫번째 오브젝트로 고정하지 않고,<br>
  rerendering될 때마다 랜덤으로 새로운 데이터를 보여주도록 한다.
  - [ ] Banner화면에 해당 영화에 대한 영상을 재생하도록한다.
  - [ ] 미디어 쿼리 적용.

<br>

## 문제 사항
  - [ ] Search에서 검색 시 나온 결과에서 ResultsBox를 클릭하면 모달창이 뜨지 않고, Home화면으로 돌아간다.
  - [ ] Slide의 back(왼쪽)버튼을 클릭 시 animation 방향이 next(오른쪽)버튼 클릭한 것과 같이 실행된다.

<br>

## 개발 환경
  - 개발도구: VSCode, Github
  - 사용언어: ReactJS

  <br>

## 레퍼런스
  - [Nomadcoder](https://nomadcoders.co)
  - [The Movie Database API](https://www.themoviedb.org)