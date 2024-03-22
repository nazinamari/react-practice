import { createSlice } from '@reduxjs/toolkit';

// const slice = createSlice({
//     name: 'locale',
//     initialState: {
//         lang: "uk",
//     },
//     reducers: {
//         changeLang(state, action) {
//             state.lang = action.payload;
//         }
//     },
// });

const timestamp = Date.now();
const currentDate = new Date(timestamp);
// const usualTimeString = currentDate.toString();
const formattedDate = currentDate.toISOString().slice(0, 10);
const formattedTime = currentDate.toTimeString().slice(0, 5);
const usualDateTimeString = `${formattedDate} ${formattedTime}`;

//* Prepare Якщо нам потібно змінити payload і передати туди якись об'єкт з налаштуваннями

const slice = createSlice({
    name: 'locale',
    initialState: {
        lang: "uk",
        updatedAt: usualDateTimeString,
    },
    reducers: {
        changeLang: {
            reducer: (state, action) => {
                state.lang = action.payload.value;
                state.updatedAt = action.payload.time;
            },
            prepare: (value) => {
                return {
                    payload: {
                        value,
                        time: usualDateTimeString,
                    }
                }
            }
        },
    }
});

export const { changeLang } = slice.actions;

export default slice.reducer;

export const selectLang = (state) => state.locale.lang;
export const selectUpdated = (state) => state.locale.updatedAt;

// export const localeReducer = ( state = {lang: "uk"}, action) => {
//     switch(action.type) {
//         case 'locale/changeLang': {
//             return{
//                 ...state,
//                 lang: action.payload,
//             }
//         }
//         default:
//             return state;
//     }
// }

// export const changeLang = newLang => {
//     return {
//         type: 'locale/changeLang',
//         payload: newLang,
//     }
// };

// export const selectLang = (state) => state.locale.lang;