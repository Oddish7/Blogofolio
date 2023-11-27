import styles from './BigPost.styles.module.scss'
import bigPost from '../../../../images/Posts/BigPost.png'
import { LikeButton } from '../PostButtons/LikeButton/LikeButton'
import { DislikeButton } from '../PostButtons/DislikeButton/DislikeButton'
import { BookMarkButton } from '../PostButtons/BookMarkButton/BookMarkButton'
import { MoreButton } from '../PostButtons/MoreButton/MoreButton'

export const BigPost = () => {
    return (
        <div className={styles.bigPost}>
            <div>
                <h3 className={styles.date}>April 20, 2021</h3>
                <h2 className={styles.postTitle}>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h2>
                <p className={styles.postText}>Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.</p>
            </div>
            <div>
                <img src={bigPost} alt="space" />
            </div >
            <div className={styles.buttons}>
                <LikeButton/>
                <DislikeButton/>
            </div>
            <div className={styles.buttons}>
                <BookMarkButton/>
                <MoreButton/>
            </div>
        </div>
    )
}