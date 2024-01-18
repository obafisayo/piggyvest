import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

function useContextState() {
    const location = useLocation();
    const path = location.pathname
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return {path, scroll}
}
export default useContextState;