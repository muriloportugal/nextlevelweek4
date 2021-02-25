import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
    chieldren: ReactNode
}

export function ChallengesProvider(props:ChallengesProviderProps) {
    const [level, setLevel] = useState(1);

    function levelUp() {
        setLevel(level + 1);
    }
    return (
        <ChallengesContext.Provider value={{level, levelUp}}>
            {props.chieldren}
        </ChallengesContext.Provider>
    )
}