import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension";
import { balanceReducer } from './balanceSlice';
import { localeReducer } from './localeSlice'

const rootReducer = combineReducers({
    balance: balanceReducer,
    locale: localeReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());




// const rootReducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'balance/deposit':
//             return {
//                 ...state,
//                 balance: {
//                     ...state.balance,
//                     value: state.balance.value + action.payload,
//                 },
//             };
//         case 'balance/withdraw':
//             return {
//                 ...state,
//                 balance: {
//                     ...state.balance,
//                     value: state.balance.value - action.payload,
//                 },
//             };
//         case 'locale/changeLang':
//             return {
//                 ...state,
//                 locale: {
//                     ...state.locale,
//                     lang: action.payload,
//                 }
//             }
//         default:
//             return state;   
//     }
// };