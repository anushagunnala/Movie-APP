
// {
//     type:'ADD_MOVIES',
//     movies:data,
// }

//  we moved these variables into action bez these vari are action-type variables

//action types  -->as variables
 export const ADD_MOVIES= 'ADD_MOVIES'; //we do this to make dynamic --/.  if we want to change value we can change at one place

//  if we want to use multiple time of "dipatcher" we have to hard code again & again to avoid this 
// we use function


// these fun are called --> action creators ===> bez they returns a action
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies // we use shorthand
        // movies:movies
      }
}




// expalin action in redux
// ChatGPT

// In the context of Redux, an "action" is a plain JavaScript object that describes a change in the application's state. 
// Actions are the only source of information for the store, and they carry a payload of data from your application to 
//the store. Actions are dispatched by components or other parts of your application to signal that something has happened,
//  and they are handled by reducers.

// Here's the basic structure of a Redux action:

// javascript
// Copy code
// {
//   type: 'ACTION_TYPE',
//   payload: /* optional data payload */
// }
// type: A string that indicates the type of action being performed. It is typically defined as a constant and is 
// used by the reducers to determine how to update the state.

// payload: Optional data that provides additional information about the action. The payload can be of any type 
// (e.g., a number, string, object, etc.) and is used to carry data associated with the action.

// Here's an example of a Redux action:

// javascript
// Copy code
// // Action type constant
// const ADD_TODO = 'ADD_TODO';

// // Action creator function

// const addTodo = (text) => {
//   return {
//     type: ADD_TODO,
//     payload: {
//       text: text,
//       completed: false
//     }
//   };
// };

// // Dispatching the action
// dispatch(addTodo('Learn Redux'));
// In this example, the addTodo function is an action creator, which creates and returns a new action with 
// the specified type (ADD_TODO) and payload (an object containing the text of the todo and its completion status). '
// The action is then dispatched to the Redux store using the dispatch function.

// Reducers, on the other hand, are responsible for updating the state based on the dispatched actions. 
// They specify how the state should change in response to different action types.

// Actions, action creators, and reducers together form the core principles of the Redux pattern, providing
//  a predictable and centralized way to manage the state of an application.



//==================================================================================


// what is pure function in redux and basic principle expalin
// ChatGPT
// In the context of Redux, a "pure function" is a specific type of function that adheres to certain principles.
//  The key principles of a pure function are:

// Deterministic: A pure function should produce the same output for the same set of input parameters every time
//  it is called. There should be no randomness or side effects based on external factors.

// No Side Effects: A pure function should not modify any variables outside its own scope, and it should not have
//  any observable side effects, such as changing the state of the application, modifying global variables,
//   or making network requests.

// Pure functions are essential in Redux because they help ensure a predictable and consistent state management 
// system. In Redux, the state of the application is updated by pure functions called "reducers." Reducers take 
// the current state and an action as input and return a new state based on that information. Here's an 
// example of a simple pure reducer:

// javascript
// Copy code
// // A pure reducer function
// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };
// In this example, counterReducer is a pure function because:

// It takes the current state and an action as input parameters.
// It does not modify the original state. Instead, it returns a new state based on the action.
// It does not have any side effects, such as changing variables outside its scope.
// Redux relies on pure functions to update the state because this ensures that the state changes are predictable, 
// testable, and easy to reason about. Additionally, pure functions facilitate features like time-travel debugging, 
// where you can move backward and forward in the application's state changes. The predictability of pure functions 
// is a fundamental aspect of the Redux architecture.




