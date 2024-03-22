import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice';
import localeReducer from './localeSlice';
import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const balancePersistConfig = {
    key: 'balance',
    storage,
    whitelist: ['value'],
};

const persistedBalanceReducer = persistReducer(
    balancePersistConfig, 
    balanceReducer,
);

//* Persist для мови

const localePersistConfig = {
    key: 'locale',
    storage,
    whitelist: ['lang'],
    //збереже все, якщо не вказувати whitelist
}

const persistLocaleReducer = persistReducer(
    localePersistConfig,
    localeReducer,
)

export const store = configureStore({
    reducer: {
        balance: persistedBalanceReducer,
        locale: persistLocaleReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);