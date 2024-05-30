// create context and export it 
// make a provider  
"use client"

import { useState, createContext, Dispatch, SetStateAction, ReactNode, useContext } from 'react';
import { SectionName } from '@/lib/types'

export const ActiveSectionContext = createContext<{
    activeSection: SectionName;
    setActiveSection: Dispatch<SetStateAction<SectionName>>;
} | null>(null);

export function ActiveSectionContextProvider({
    children,
}: { children: ReactNode }) {

    const [activeSection, setActiveSection] = useState('home');

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (!context) {
        throw new Error("Active section context not within active section provider")
    }

    return context;
}

