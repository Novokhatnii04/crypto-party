import casePhoto1 from '../../../Assets/cases-img-1.png'
import styles from './section-1.module.css'


const SectionOne = () => {
    return <div className={styles['content-about__us']} >
        <div className={styles.section}>
            <h1>Чому ми найкраща Крипто-Команда ?</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi quaerat vel consectetur rem nobis harum magni autem,
                omnis, asperiores suscipit debitis cumque nemo temporibus vitae,
                assumenda consequuntur modi alias ipsa!
            </p>
        </div>
        <img src={casePhoto1} className={styles.avatar}></img>
    </div >
}

export default SectionOne