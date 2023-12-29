import { ADD_MOVIES } from "../Action";

//  our current state is--> state = [{M1},{M1},{M1},{M1},.................]
//  if we have  state={
// list :[{M1},{M1},{M1},{M1},....
// fav:[.....]
// }
//  in above pattern we can esaily add data and properties i..e we add "fav" , "foolow"......

//  for this we change our state=[] "arr to an obj "

const initialMovieState = {
  list: [],
  favorites: [],
};

// function movies (state=[], action){
// it is reducer function //here we make state=[] as default as initial state =[]
function movies(state = initialMovieState, action) {
  if (action.type === ADD_MOVIES) {
    // if action.type matches the ADD_MOVIES then return the action.movies from Action
    // return action.movies;  here we access movies inside [] but oue CS is {} so wehave to retuen new-obj
    return {
      ...state, //we copy all state property
      list: action.movies, //movies list inside the list []
    };
  }
  return state;
}

// const ADD_MOVIES= 'ADD_MOVIES'; //we do thi sto make dynamic --/.  if we want to change value we can change at one place
//  we moves above to action
export default movies;

// we make our function as pure-func
// movie reducr have 2 property --> 1--> cuurnt state , 2-->  reducer ,
//  we initialize with empty array =--=>  state=[]
// // note --> we cannot change state dirctly so we expresss an intension to change state i.e "action"

// redux calling movie reducers like this --> movies(undefine ,{})

//  here we passing an action of ADD_MOVIES =[M1, M2,......] with movie list but reducer alredy get CS=[] but
// reducer returns new state so instesd of changin CS we return new State [M1,M2,M3.....   ] and it autometically merge
// into CS currnt state inside store

// ================================

// const o1={a:1,b:2,c:4}

// const o2={...o1} // we use spread operater to copy all property

// // but o1 === o1 ==. false which reference to diff objs

// //  we want all property copy but change "b"

// const o3={...o1, b:100}
// console.log(o3); // we get modifies obj with copied all properties
