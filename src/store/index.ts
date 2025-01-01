import { createSlice, configureStore } from '@reduxjs/toolkit'

interface SocketState {
  sendMessage: (data: object) => void
}

const initialState: SocketState = {
  sendMessage: () => { },
}

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setMessageFunction: (state, { payload }) => {
      state.sendMessage = payload
    }
  }
})

export const { setMessageFunction } = socketSlice.actions

export const store = configureStore({
  reducer: socketSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})
