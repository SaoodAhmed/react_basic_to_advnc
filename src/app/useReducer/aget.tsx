// import { useReducer } from 'react';

// function reducer(state:any, action:any) {
//   switch (action.type) {
//     case 'incremented_age': {
//       return {
//         name: state.name,
//         age: state.age + 1
//       };
//     }
//     case 'changed_name': {
//       return {
//         name: action.nextName,
//         age: state.age
//       };
//     }
//   }
//   throw Error('Unknown action: ' + action.type);
// }

// const initialState = { name: 'Taylor', age: 42 };

// export default function Form() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function handleButtonClick() {
//     dispatch({ type: 'incremented_age' });
//   }

//   function handleInputChange(e:any) {
//     dispatch({
//       type: 'changed_name',
//       nextName: e.target.value
//     }); 
//   }

//   return (
//     <>
//       <input
//         value={state.name}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleButtonClick}>
//         Increment age
//       </button>
//       <p>Hello, {state.name}. You are {state.age}.</p>
//     </>
//   );
// }

"use client"


function reducer(state:any, action:any){
    switch(action.type){
        case 'increment_age' : {
            return {
                age:state.age+1,
                name:state.name
            }
        }

        case 'change_name':{
            return {
                age:state.age,
                name:action.nextName
            }
        }
    }

    throw Error("Unknown action"+action.type)
}



import React, { useReducer } from 'react'



const initialState = { name: 'Taylor', age: 42 };

const Age = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
  return (
    <div>
        <input value={state.name}  onChange={(e:any)=>dispatch({type:'change_name', nextName:e.target.value})}/>
        <button onClick={()=>dispatch({type:'increment_age'})}>
            Increment Age
        </button>
        <p>
        Hello, {state.name}. You are {state.age}.
        </p>
    </div>
  )
}

export default Age