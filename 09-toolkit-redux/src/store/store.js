import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './api/todosApi'
import { counterSlice } from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    // RTK Query
    [todosApi.reducerPath]: todosApi.reducer,
  },
  // RTK Query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().
  concat(todosApi.middleware)
})