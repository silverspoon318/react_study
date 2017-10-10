import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  /*
    react liftCycle : 컴포넌트는 여러 기능들을 정해진 순서대로 실행하는 데 그걸 배우겠다는 뜻
   */
  // Render : componentWillMount() -> render() -> componentDidMount()

  /* 
    UpdatecomponentWillReceiveProps() -> 컴포넌트가 새로운 props 를 받겠다라는 뜻
    shouldComponentUpdate() -> 리액트는 새로운 props, old props를 살펴본 후 다르면 업데이틑 == 'true' 라고 생각한다.
    componentWillUpdate() -> 컴포넌트가 업데이틀 할꺼야 단계(ex. 어플리케이션에 뱅글뱅글 돌아가는 spinner를 붙일 수 있다)
    render() -> 
    componentDidUpdate() 돌고 있던 '로딩중'메세지나 아이콘을 숨기면 된다. 
  */

  /*
    state 는 리액트 컴포넌틑 안에 있는 오브젝트다.
    function 처럼 이건 모든 리액트 컴포넌틑 안에 포함되어 있다.
    state가 바뀔 때마다 컴포넌트는 다시 render 한다. 
   */

  // state를 만드는 방법
  /*
    state.. 는 컴포넌트를 로드하는 방법이고, 디폴트 state 와 함께
   */
  state = {
  }

  // 사이클이 시작되었음을 알게되고, 
  componentWillMount() {
    // Movie App을 보면 will mount 일때 api 에 작업을 요청한다.
    console.log('will Mount');

  }

  // 이제 성공적으로 리액트 세계에 컴포넌트가 자리잡았음을 알게된다.
  componentDidMount() {
    console.log('did Mount');
    setTimeout(()=>{
      this.setState({
        movies: [
          {
            title : "Matrix",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
          },
          {
            title : "Old Boy",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title : "Star Wars",
            poster : "http://img.lum.dolimg.com/v1/images/starwars_551c43f4.jpeg"
          },
          {
            title: "Transpotting",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
          }
        ]
      })
    }, 5000)
  }

  //리액트 자체에 기능이 많이 때문에 _ 를 붙임.
  _renderMovie = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title = { movie.title } poster = { movie.poster } key = { index } />
    })
    return movies
  }

  // 이제 컴포넌트가 리액트 세계에 '존재'하게 되었을 알게되고,
  render() {
    console.log('did Render');
    return (
      <div className="App">
        {this.state.movies ? this._renderMovie() : 'Loding'}

        {/* <Movie title={ movieTitles [0]} poster = { movieImages[0] } />
        <Movie title={ movieTitles [1]} poster = { movieImages[1] } />
        <Movie title={ movieTitles [2]} poster = { movieImages[2] } /> */}
      </div>
    );
  }
}

export default App;
