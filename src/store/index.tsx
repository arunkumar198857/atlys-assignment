// src/context/AppDataContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import FeedOneThumb from '../assets/feed-1-thumb.svg';
import FeedTwoThumb from '../assets/feed-2-thumb.svg';
import FeedThreeThumb from '../assets/feed-3-thumb.svg';
import { DEFAULT_FEED_STATE, USER_DATA } from '../util/constants';
import { AppPages } from '../util/enums';
import { IFeedTileProps, IUserCredentials } from '../util/interfaces';

// Define types for your data
type AppData = {
    feedData: Array<IFeedTileProps>;
    setFeedData?: (data: Array<IFeedTileProps> | any) => void;
    isUserAuthenticated: boolean;
    setIsUserAuthenticated: (isAuthenticated: boolean) => void;
    isSignUpPopupOpen?: boolean;
    setIsSignUpPopupOpen?: (isOpen: boolean) => void;
    isSignInPopupOpen?: boolean;
    setIsSignInPopupOpen?: (isOpen: boolean) => void;
    currentPage: AppPages;
    setCurrentPage?: (page: AppPages) => void;
    userEmail: string;
    setUserEmail: (userEmail: string) => void;
    userPassword: string;
    setUserPassword: (userPassword: string) => void;
    checkIfUserExists: () => boolean;
    handleInteraction: () => void;
};

// Create context with default empty values
const AppDataContext = createContext<AppData | undefined>(undefined);

// Provider component
export const AppDataProvider = ({ children }: { children: ReactNode }) => {
    const [feedData, setFeedData] = useState<Array<IFeedTileProps>>(DEFAULT_FEED_STATE);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false);
    const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState<boolean>(false);
    const [isSignInPopupOpen, setIsSignInPopupOpen] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<AppPages>(AppPages.FEED);
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const checkIfUserExists = () => {
        const user: IUserCredentials | null = USER_DATA?.find((item: IUserCredentials) => item?.username === userEmail) || null;
        if(user){
            if(user.password === userPassword){
                return true;
            }
        }
        return false
    }

    const handleInteraction = () => {
        if(!isUserAuthenticated) {
            setIsSignInPopupOpen(true);
        } else {
            alert('function not implemented!');
        }
    }

    const stateToReturn: AppData = {
        feedData,
        setFeedData,
        isUserAuthenticated,
        setIsUserAuthenticated,
        isSignInPopupOpen,
        setIsSignInPopupOpen,
        isSignUpPopupOpen,
        setIsSignUpPopupOpen,
        currentPage,
        setCurrentPage,
        userEmail,
        userPassword,
        setUserEmail,
        setUserPassword,
        checkIfUserExists,
        handleInteraction
    }

    return (
        <AppDataContext.Provider value={stateToReturn}>
            {children}
        </AppDataContext.Provider>
    );
};

// Custom hook for convenience
export const useAppData = () => {
    const context = useContext(AppDataContext);
    if (!context) throw new Error("useAppData must be used within AppDataProvider");
    return context;
};
