import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useIntersectionObserver = () => {

    const [visibleContent, setVisibleContent] = useState(false)

    const { ref, inView } = useInView({
        threshold: 0,
        root: null
    });
    useEffect(() => {
        if (inView) {
            setVisibleContent(true)
        }
    }, [inView])

    return {
        ref,
        visibleContent
    }

}

export default useIntersectionObserver