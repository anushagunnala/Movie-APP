// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { data } from "../data"; // subscribing the store by removing data from datastore
import { addMovies } from "../Action";

// i.e... we render data from movie store
//  for this
//  1=> comment data import
// 2---> pass store as props in index.js file  inside App
//  3-->  we pass movies insie APP.js --> const movies=props.store.getState()
// and we iterate with "movies" and also pass "props" inside App(props)
//  4--> comment all dispatch


import Navbar from "./Navbar";
import MovieCard from "./MovieCard";


//  in general we make API call inside ComponentDismount() ==> so we are using class component instaed of functional comp

// function App(props) {   //
class App extends React.Component {

  componentDidMount(){
    //  we call API here --> to get movies list
    //  when movies called we dispatch the action to add these movies into store
    // i..e dispatch action  

    // 1==>
    const {store} =this.props //we use desturcturing here

    store.dispatch(addMovies(data));  // addMovies(data) return -->  obj{type.......}

    // store.dispatch({
    //   type: 'ADD_MOVIES',
    //   movies:data
    // });
    
    // 2==>
    // in store we have subscribe method so, we use this method to subscripbe our state changes
    // whenever dispatcher dispatches action the subscribe called then state called lately

    // this.props.store.subscribe(()=>{ 
    store.subscribe(()=>{ // subscribe method takes function as arrument
      console.log("UPDATing...(subscribe)");
      this.forceUpdate() // we are forceble uppdate the app
    })

    // 3==>
    console.log('STATE' , this.props.store.getState()); // we have all data inside console but our app is not re-rendering
    // bez we not do anthing when state is changes ==>so,  we perform subscribe to store changes
  }

  // ------

  render() {
    // const movies =this.props.store.getState();  //our state=[] // we can get state in our store we 
    //our state=[] but now state={list:[],fav:[]}  ,, we use destructuring

    const {list} =this.props.store.getState();  //our state=[] // we can get state in our store we 
    console.log('RENDER', this.props.store.getState());
    return (
      <div className="App">
        <Navbar />

        <div className="main">
          <div className="tabs">
            <div className="tab"> Movies 🤖 </div>
            <div className="tab"> Favourites😍 </div>
          </div>

          <div className="list">
            {list.map( (movie,index  ) => ( // map have >1 arruguments
                <MovieCard  movie={movie} key={`movies-${index}`} /> // here  movie is each obj in data.js
                // `movies-${index}` ===> we use this pattern to make it unique
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;


//  in class ==> 
// in redux We cannot change state dirctly  we can express to intension of changing data
// .. so the store share data to UI and UI basically trige the action and action go to reducer , the reducer send new-state
// and new state merged in this state of store




/////////////////------------------------------------

// import React from "react";
// import { data } from "../data";

// import Navbar from "./Navbar";
// import MovieCard from "./MovieCard";

// class App extends React.Component{
//   componentDidMount(){
//     const {store}=this.props;
//     //1=>
//     store.dispatch({
//       type:'ADD_MOVIE',
//       movies:data
//     })
//     //2 ===>
//     store.subscribe(()=>{
//       console.log('updating-subscribe');
//       this.forceUpdate()
//     })

//     //3==> 
//     console.log("state" , this.props.store.getState());

//   }

//   render(){
//     const [movies]=this.props.store.getState()
//     console.log('RENDER');

//     return(
//       <div  className="APP">
       // <Navbar/>

//       <div className="main">
//         
//         <div className="tabs">
//           <div className="tab" > MOVIES list </div>
//           <div className="tab" >MY FAV MOVIES </div>
//         </div>

//         <div className="list" >
//           {
//             movies.map((movie , index)=>(
//               <MovieCard  movie={movie} key={index} />
//             ))
//           }

//         </div>
    
//       </div>
//       </div>
//     )

//   }
// }

// export default App;