import React, { useMemo } from 'react'
import FooRumIcon from '../../assets/foo-rum-icon.svg'
import LoginIcon from '../../assets/login-icon.svg'
import { useAppData } from '../../store'
import './styles.scss'
import { AppPages } from '../../util/enums'

const AppHeader = () => {

    const { currentPage, setCurrentPage } = useAppData();

    const headerCta = useMemo(() => {
        const isFeedCurrentPage = currentPage === AppPages.FEED;
        return (
            <React.Fragment>
                <div className="login-action">
                    {isFeedCurrentPage ? 'Login' : 'Back to home'}
                </div>
                {isFeedCurrentPage ? <img src={LoginIcon} alt="Logo" /> : null}
            </React.Fragment>
        )
    }, [currentPage]);


    const handleCta = () => {
        if (currentPage === AppPages.FEED) {
            setCurrentPage?.(AppPages.LOGIN);
        } else {
            setCurrentPage?.(AppPages.FEED);
        }
    }

    return (
        <div className="app-header">
            <div className="app-header__left">
                <img src={FooRumIcon} alt="Foo Rum Logo" />
                <div className="app-title">
                    foo-rum
                </div>
            </div>
            <div className="app-header__right" onClick={handleCta}>
                {headerCta}
            </div>
        </div>
    )
}

export default AppHeader