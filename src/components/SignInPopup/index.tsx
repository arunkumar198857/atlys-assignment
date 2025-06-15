import React, { useMemo } from 'react';
import LoginIcon from '../../assets/login-icon.svg'
import { useAppData, AppPages } from '../../store';
import './styles.scss';

interface ISignInPopupProps {
    onSignUpClickCallback: () => void;
}

const SignInPopup: React.FC<ISignInPopupProps> = ({ onSignUpClickCallback }): React.ReactElement => {

    const { currentPage, userEmail, setUserEmail, userPassword, setUserPassword, setIsUserAuthenticated, setCurrentPage, checkIfUserExists, setIsSignInPopupOpen } = useAppData();
    const isLoginCurrentPage = useMemo(() => currentPage === AppPages.LOGIN, [currentPage]);

    const onSignInHandler = () => {
        if(userEmail?.length === 0) {
            alert('Please enter username/email')
        }
        else if(userPassword?.length === 0){
            alert('Please enter password')
        } else if(checkIfUserExists()){
            setIsUserAuthenticated(true);
            setCurrentPage?.(AppPages.FEED);
            setIsSignInPopupOpen?.(false);
        } else {
            alert('Invalid credentials!')
        }
    };

    const popupContent = (
        <div className="login-card">
            <div className="white-content-sign-in">
                <div className="login-icon">
                    <img src={LoginIcon} alt="Login Icon" />
                </div>
                <h2 className="title">Sign in to continue</h2>
                <p className="subtitle">Sign in to access all the features on this app</p>

                <form className="login-form">
                    <label>Email or username</label>
                    <input value={userEmail} onChange={(e) => setUserEmail(e?.target?.value)} type="text" placeholder="Enter your email or username" />

                    <label>Password</label>
                    <input type="password" value={userPassword} onChange={(e) => setUserPassword(e?.target?.value)}  placeholder="Enter your password" />

                    <button onClick={(e) => {
                        e?.preventDefault();
                        onSignInHandler();
                    }} className="sign-in-btn">Sign In</button>
                </form>
            </div>

            <p className="signup-text" onClick={onSignUpClickCallback}>
                Do not have an account? <a>Sign Up</a>
            </p>
        </div>
    );

    return isLoginCurrentPage ? popupContent : (
        <div className="login-container">
            {popupContent}
        </div>
    );
};

export default SignInPopup;
