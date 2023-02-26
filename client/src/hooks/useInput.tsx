import React, {useState, useCallback} from "react";

export const useInput = (initialState: string) : [{value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}, () => void ] => {
    const [value, setValue] = useState(initialState);

    const handleChanges = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    return [
        {value, onChange: handleChanges},
        () => setValue(initialState),
    ];
};
