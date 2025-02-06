import { useEffect } from "react";
import { useState } from "react"

const UseDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearInterval(timer);
        };
    }, [value, delay])
    
    return debounceValue;
};

export default UseDebounce;