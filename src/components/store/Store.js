import {configureStore} from "@reduxjs/toolkit"
import AddMain from "./reducer/AddMain"

export default configureStore({
    reducer: {
        korzinkaSavat: AddMain,
    }
})