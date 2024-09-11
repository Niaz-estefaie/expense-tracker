import { useEffect, useState } from 'react';

export const useWindowSize = () => {
    const [size, setSize] = useState([0, 0])

    const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight])
    };

    useEffect(() => {
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return {
        width: size[0],
        height: size[1]
    }
}