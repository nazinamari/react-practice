import {  createSlice } from '@reduxjs/toolkit';

// createAction, createReducer,

// бібліотека Immer
// export const deposit = createAction('balance/deposit');
// export const withdraw = createAction('balance/withdraw');

// export const balanceReducer = createReducer({value: 0}, (builder) => {
//     builder
//     .addCase(deposit, (state, action) => {
//         state.value += action.payload;

//         // return {
//         //     ...state,
//         //     value: state.value + action.payload,
//     })
//     .addCase(withdraw, (state, action) => {
//         state.value -= action.payload;
//     });
// });

//* Слайс за нас створює екшени

const slice = createSlice({
    name: 'balance',
    initialState: {
        value: 0,
    }, 
    reducers: {
        deposit(state, action) {
            state.value += action.payload;
        },
        withdraw(state, action) {
            state.value -= action.payload;
        },
    },
});

export const { deposit, withdraw } = slice.actions;

export default slice.reducer;

//* Раніше редьюсер

// export const balanceReducer = (state = {value: 0}, action) => {
//     switch (action.type) {
//         case 'balance/deposit':
//             return {
//                 ...state,
//                 value: state.value + action.payload,
//             };
//         case 'balance/withdraw':
//             return {
//                 ...state,
//                 value: state.value - action.payload,
//             };
//         default:
//             return state;
//     }
// };


//* Екшени

// export const deposit = (value) => {
//     return {
//         type: 'balance/deposit',
//         payload: value,
//     };
// };

// export const deposit = createAction('balance/deposit');
// console.log(deposit(5));

// export const withdraw = value => {
//     return {
//         type: 'balance/withdraw',
//         payload: value,
//     }
// };

// export const withdraw = createAction('balance/withdraw');