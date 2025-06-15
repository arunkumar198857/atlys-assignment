import React, { useMemo, useState } from 'react';
import './styles.scss';
import LoginIconSVG from '../../assets/login-icon.svg'
import { AppPages, useAppData } from '../../store';

interface ISignInPopupProps {
    onSignInClickCallback: () => void;
}

const SignUpPopup: React.FC<ISignInPopupProps> = ({ onSignInClickCallback }): React.ReactElement => {

    const { currentPage, userEmail, setUserEmail, userPassword, setUserPassword, setIsUserAuthenticated, setCurrentPage, setIsSignUpPopupOpen } = useAppData();
    const isLoginCurrentPage = useMemo(() => currentPage === AppPages.LOGIN, [currentPage]);
    const [repeatedPassword, setRepeatedPassword] = useState<string>('');

    const onSignupHandler = () => {
        if(userEmail?.length === 0) {
            alert('Please enter username/email')
        } else if(userPassword?.length === 0){
            alert('Please enter password')
        } else if(repeatedPassword?.length === 0){
            alert('Please enter repeated password')
        } else if(userPassword === repeatedPassword){
            setIsUserAuthenticated(true);
            setCurrentPage?.(AppPages.FEED);
            setIsSignUpPopupOpen?.(false);
        } else {
            alert('passwords do not match!')
        }
    };

    const popupContent = (
        <div className="signup-card">
            <div className="white-content">
                <div className="signup-icon">
                    <img src={LoginIconSVG} alt='Login-Icon' />
                </div>
                <h2 className="title">Create an account to continue</h2>
                <p className="subtitle">
                    Create an account to access all the features on this app
                </p>

                <form className="signup-form">
                    <label>Email or username</label>
                    <input value={userEmail} onChange={(e) => setUserEmail(e?.target?.value)} type="text" placeholder="Enter your email or username" />

                    <label>Password</label>
                    <input value={userPassword} onChange={(e) => setUserPassword(e?.target?.value)} type="password" placeholder="Enter your password" />

                    <label>Repeat password</label>
                    <input type="password" value={repeatedPassword} onChange={(e) => setRepeatedPassword(e?.target?.value)} placeholder="Enter your password again" />

                    <button onClick={(e) => {
                        e?.preventDefault();
                        onSignupHandler();
                    }} className="sign-up-btn">Sign Up</button>
                </form>
            </div>

            <p className="signin-text" onClick={onSignInClickCallback}>
                Already have an account? <a>Sign In</a>
            </p>
        </div>
    )

    return isLoginCurrentPage ? popupContent : (
        <div className="signup-container">
            {popupContent}
        </div>
    );
};

export default SignUpPopup;
