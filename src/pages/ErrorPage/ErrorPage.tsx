import { BackToHome } from '../../components/Buttons/BackToHome/BackToHome'
import { Footer } from '../../components/Footer/Footer'
import image from './error.jpg'
import styles from './ErrorPage.styles.module.scss'

export const ErrorPage = () => {
    return (
        <>
        <div className={styles.error}>
            <BackToHome/>
            <div className={styles.error_image_box}>
                <img src={image} alt="Error image" />
            </div>
            <Footer/>
        </div>
        </>
    )
}