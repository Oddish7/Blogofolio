import {useEffect, useState} from 'react'
import { PrevAndNextButtons } from '../../../Buttons/PrevAndNextButtons/PrevAndNextButtons'
import styles from './PostImage.styles.module.scss'

type Posts = {
    title: string
    description: string
    image: string
    date: Date
    id: number
}

type Props = {
    closeImage: () => void
    idOfPost: number
    dataLength: number
}

export const PostImage = ({closeImage, idOfPost, dataLength}: Props) => {

    const [data, setData] = useState<Posts>()

    useEffect(() => {
        fetch(`https://65670f6864fcff8d730fa806.mockapi.io/posts/${idOfPost}`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [idOfPost])
    if (!data) {
        return null
    }
    return (
        <div className={styles.post_image_wrapper}>
            <div className={styles.post_image_block}>
                <button className={styles.button_close} onClick={closeImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10.7431 10L19.8461 0.897011C20.0513 0.691822 20.0513 0.359146 19.8461 0.153957C19.6409 -0.0512316 19.3082 -0.0512316 19.103 0.153957L10 9.25688L0.897058 0.153892C0.69187 -0.0512972 0.359194 -0.0512972 0.154006 0.153892C-0.0512479 0.35908 -0.0512479 0.691757 0.154006 0.896946L9.25691 10L0.15394 19.103C-0.0513135 19.3082 -0.0513135 19.6409 0.15394 19.8461C0.256535 19.9487 0.390984 20 0.525499 20C0.660015 20 0.794464 19.9487 0.897058 19.8461L10 10.7431L19.103 19.8461C19.2056 19.9487 19.34 20 19.4745 20C19.6091 20 19.7435 19.9487 19.8461 19.8461C20.0513 19.6409 20.0513 19.3082 19.8461 19.103L10.7431 10Z" fill="#14141F"/>
                    </svg>
                </button>
                <div className={styles.post_image_inner_content}>
                    <div className={styles.post_image_inner_content_image}>
                        <img src={data.image} alt={`post ${idOfPost} image`} />
                    </div>
                    <PrevAndNextButtons dataLength={dataLength}/>
                </div>
            </div>
        </div>
    )
}