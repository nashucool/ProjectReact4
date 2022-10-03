import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {//fonction qui permet lorsque tu ouvres une page detre tjrs en haut
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])

    return null;
}