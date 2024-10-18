import { configureStore } from '@reduxjs/toolkit'
import authResucer from '../store/auth-slice/index'

const store=configureStore({
    reducer:{
      auth:authResucer
    }
});
export default store;