import { FormEvent, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { useNavigate } from 'react-router-dom'
import { useAddPostState } from '../../store/addPost/selector'
import { useAuthState } from '../../store/auth/selector'
import { cancelErrors, resetPost, setDescriptionAction, setImageAction, setTitleAction } from '../../store/addPost/action'
import { Input } from '../SignForm/Input/Input'
import { AddImageInput } from '../AddImageInput/AddImageInput'
import { ButtonSecondary } from '../Buttons/ButtonSecondary/ButtonSecondary'
import { useEditPostState } from '../../store/edit/selector'
import baseStyle from '../../pages/SignInPage.styles.module.scss'
import formStyles from '../SignForm/SignForm.styles.module.scss'
import styles from './AddPostForm.styles.module.scss'

type Props = {
    pageTitle: string
    isDeletePostBlocked: boolean

    isEdit?: boolean
    addPost?: (e: FormEvent<HTMLFormElement>) => void
    deletePost?: (e: FormEvent<HTMLInputElement>) => void
}

export const AddPostForm = ({pageTitle, isDeletePostBlocked=false, addPost, deletePost, isEdit}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const addPostData = useAddPostState()
    const editPostData = useEditPostState()
    const authData = useAuthState()

    useEffect(() => {
        inputRef.current?.focus()
    }, [])


    useEffect(() => {
        if(addPostData.isPostAdded){
            navigate('/')
        }
        dispatch(resetPost())
        dispatch(cancelErrors())
    }, [addPostData.isPostAdded])

    useEffect(() => {
        if(!authData.isLoged){
            navigate('/auth')
        }
    }, [authData.isLoged])


    const cancelPost = () => {
        navigate('/')
        dispatch(cancelErrors())
    }

    const usedPageTitle = pageTitle
                        .toLowerCase()
                        .replace(pageTitle[0].toLowerCase(), pageTitle[0].toUpperCase())


    return (
        <div className={baseStyle.wrapper}>
            <div className={baseStyle.page}>
                <div className={styles.add_post_backline}>
                    <p onClick={() => cancelPost()}>Home</p>
                    <span>|</span>
                    <p>{usedPageTitle}</p>
                </div>
                <h1 className={styles.add_post_header}>{usedPageTitle}</h1>
                <form onSubmit={addPost}>
                    <Input onChange={(text: string) => {
                                dispatch(setTitleAction(text))
                            }} 
                            value={isEdit ? editPostData.title : addPostData.title || ''}
                            reference={inputRef} index={0} 
                            type="text" 
                            label="Title" 
                            placeholder="Post title..." 
                            errorType="title"
                            errorsData={addPostData}/>
                    {addPostData.isPostAdded === false && addPostData.errors?.title && (
                        <p className={formStyles.error_fields}>
                            {JSON.stringify(addPostData.errors.title).replace(/^\["(.+)"\]$/, '$1')}
                        </p>
                    )}
                    <div className={styles.add_post_image_container}>
                        <Input value="" type="text" label="Lesson number" placeholder="Lesson number..." />
                        <AddImageInput value={isEdit ? editPostData.image : addPostData.image || ''} onInput={(text: string) => {
                                dispatch(setImageAction(text))
                        }}
                        errorType="image"
                        errorsData={addPostData}/>
                        {addPostData.isPostAdded === false && addPostData.errors?.image && (
                            <p className={`${formStyles.error_fields} ${formStyles.error_field_side}`}>
                                {JSON.stringify(addPostData.errors.image).replace(/^\["(.+)"\]$/, '$1')}
                            </p>
                        )}
                    </div>
                    <div className={styles.textarea_container}>
                        <Input onChange={(text: string) => {
                                dispatch(setDescriptionAction(text))
                            }}
                            value={isEdit ? editPostData.description : addPostData.description || ''}
                            isTextArea={true} 
                            label="Description"
                            placeholder="Add your text"
                            errorType="description"
                            errorsData={addPostData}/>
                        {addPostData.isPostAdded === false && addPostData.errors?.description && (
                            <p className={`${formStyles.error_fields} ${formStyles.error_field_side}`}>
                                {JSON.stringify(addPostData.errors.description).replace(/^\["(.+)"\]$/, '$1')}
                            </p>
                        )}
                        <Input value="" isTextArea={true} label="Text" placeholder="Add your text"/>
                    </div>
                    <div className={styles.buttons_block}>
                        <input onClick={deletePost} type='button' value='Delete post' disabled={isDeletePostBlocked}/>
                        <div>
                            <ButtonSecondary onClick={cancelPost} buttonType="button" name="Cancel" classType="button_secondary_add_post_cancel"/>
                            <ButtonSecondary buttonType="submit" name={usedPageTitle} classType="button_secondary_add_post"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}