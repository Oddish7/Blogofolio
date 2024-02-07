import { ThunkAction, configureStore } from "@reduxjs/toolkit"
import { Action, combineReducers } from "redux"
import { searchReducer } from "./search/reducer"
import { themeReducer } from "./theme/reducer"
import { burgerReducer } from "./burgerMenu/reducer"
import { authReducer } from "./auth/reducer"
import { signUpReducer } from "./signUp/reducer"
import { activationReducer } from "./activation/reducer"
import { addPostReducer } from "./addPost/reducer"
import { addToFavsReducer } from "./favs/reducer"
import { postReducer } from "./posts/reducer"
import { likeReducer } from "./likes/reducer"
import { moreReducer } from "./more/reducer"
import { imageReducer } from "./postImage/reducer"
import { editPostReducer } from "./edit/reducer"

const rootReducer = combineReducers({
    theme: themeReducer,
    menu: burgerReducer,
    auth: authReducer,
    search: searchReducer,
    signUp: signUpReducer,
    activation: activationReducer,
    addPost: addPostReducer,
    favs: addToFavsReducer,
    posts: postReducer,
    like: likeReducer,
    more: moreReducer,
    openPostImage: imageReducer,
    edit: editPostReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()//add concat to use other features
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export {
    store as appStore
}