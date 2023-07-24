import React from 'react'
import styles from './Main.module.css'
import Greeting from "./Greeting"
import SectionOne from "./ContentForMain/section-1"
import SectionTwo from "./ContentForMain/section-2"
import useIntersection from '../../hooks/useIntersectionObserver'

const Main = () => {

    const { ref: ref1, visibleContent: visibleForOne } = useIntersection()
    const { ref: ref2, visibleContent: visibleForSecond } = useIntersection()

    return <React.Fragment>
        <Greeting />
        <div className={styles.content}>
            <div ref={ref1}>
                {visibleForOne && <SectionOne />}
            </div>
            <div ref={ref2}>
                {visibleForSecond && <SectionTwo />}
            </div>
        </div>
    </React.Fragment >
}

export default Main