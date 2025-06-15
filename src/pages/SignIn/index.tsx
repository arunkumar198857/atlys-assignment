import React, { useState } from 'react'
import SignInPopup from '../../components/SignInPopup';
import './styles.scss';
import SignUpPopup from '../../components/SignUpPopup';
import { PopupTypes } from '../../util/enums';

const SignInPage = () => {

  const [currentPopup, setCurrentPopup] = useState<PopupTypes>(PopupTypes.SIGN_IN);

  return (
    <div className='popup-container'>
      {currentPopup === PopupTypes.SIGN_IN ? (
        <SignInPopup onSignUpClickCallback={() => setCurrentPopup(PopupTypes.SIGN_UP)} />
      ) : (
        <SignUpPopup onSignInClickCallback={() => setCurrentPopup(PopupTypes.SIGN_IN)} />
      )}
    </div>
  )
}

export default SignInPage;