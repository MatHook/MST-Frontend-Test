import { configureStore } from '@reduxjs/toolkit'

import contentReducer from '../content/contentSlice'

export default configureStore({
  reducer: {
    content: contentReducer,
  },
})