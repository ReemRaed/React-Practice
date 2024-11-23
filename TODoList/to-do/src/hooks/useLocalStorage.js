import { useEffect, useState } from "react";

function useLocalStorage(initialState, key) {

    const [state, setState] = useState(function () {
        const storedState = localStorage.getItem(key);
        return JSON.parse(storedState) ?? initialState;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];

}


export default useLocalStorage;