import casePhoto2 from '../../../Assets/cases-img-2.png'
import styles from './section-2.module.css'


const SectionTwo = () => {
    return <div className={styles['content-about__us']}>
        <div className={styles.section}>
            <img src={casePhoto2} className={styles.avatar}></img>
            <div>
                <h1>Криптовалюта це - 'Мильний пузир' ?</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Excepturi quaerat vel consectetur rem nobis harum magni autem,
                    omnis, asperiores suscipit debitis cumque nemo temporibus vitae,
                    assumenda consequuntur modi alias ipsa!
                </p>
            </div>
        </div>
    </div>
}

export default SectionTwo