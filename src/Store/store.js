import { configureStore } from "@reduxjs/toolkit";
import slicedata from "../Actions/adddata";

export default configureStore({
    reducer:{
        Slice:slicedata
    }
})