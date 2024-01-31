import { AddPostType, addPostActionType } from "./types";

export const addPostInitState: AddPostType = {
    isPostAdded: false,
    title: '',
    image: '',
    description: ''
}

export const addPostReducer = (state = addPostInitState, action: addPostActionType): AddPostType => {
    switch (action.type){
        case 'ADD_POST_SUCCESS':
            return {
                ...state,
                isPostAdded: true
            }
        case 'ADD_POST_FAILED':
            return {
                ...state,
                isPostAdded: false,
                errors: action.errors
            }
        case 'SET_TITLE':
            return {
                ...state,
                title: action.title!
            }
        case 'SET_IMAGE':
            return {
                ...state,
                image: action.image!
            }
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.description
            }
        default:
            return state
    }
}