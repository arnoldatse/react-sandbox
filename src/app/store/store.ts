import { configureStore } from '@reduxjs/toolkit'
import accountSlice from './account/accountSlice'
import thunk from 'redux-thunk';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'reduxjs-toolkit-persist'
import projectsSlice from './projects/projectsSlice';


const persistConfigAccount = {
  key: 'account',
  storage,
  // storage: storageSession,
  middleware: [thunk]
}

const persistConfigProjects = {
  key: 'projects',
  storage,
  // storage: storageSession,
  middleware: [thunk]
}

const persistedReducerAccount = persistReducer(persistConfigAccount, accountSlice)
const persistedReducerProject = persistReducer(persistConfigProjects, projectsSlice)

const store = configureStore({
  reducer: {
    userAuthenticated: persistedReducerAccount,
    projects: persistedReducerProject,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store