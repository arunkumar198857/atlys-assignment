import React from 'react'
import AppHeader from '../../components/AppHeader'
import AppFeed from '../../components/AppFeed'
import './styles.scss'
import SignInPopup from '../../components/SignInPopup'
import SignUpPopup from '../../components/SignUpPopup'
import { AppPages, useAppData } from '../../store'
import SignInPage from '../SignIn'

const AppContainer = () => {

    const { currentPage, isSignInPopupOpen, isSignUpPopupOpen, setIsSignInPopupOpen, setIsSignUpPopupOpen } = useAppData();
    const isFeedCurrentPage = currentPage === AppPages.FEED;

    return (
        <React.Fragment>
            <div className='app-container'>
                <AppHeader />
                {isFeedCurrentPage ? <AppFeed /> : <SignInPage />}
            </div>
            {isSignInPopupOpen ? (
                <SignInPopup
                    onSignUpClickCallback={() => {
                        setIsSignInPopupOpen?.(false);
                        setIsSignUpPopupOpen?.(true);

                    }}
                />
            ) : null}
            {isSignUpPopupOpen ? <SignUpPopup onSignInClickCallback={() => {
                setIsSignUpPopupOpen?.(false);
                setIsSignInPopupOpen?.(true);

            }} /> : null}
        </React.Fragment>
    )
}

export default AppContainer