import React, { useState } from 'react'
import { useAppData } from '../../store'
import { getRandomElement } from '../../util/helper'
import './styles.scss'
import ChevronIcon from '../../assets/chevron-icon.svg'
import DeleteIcon from '../../assets/delete-icon.svg'
import EmoticonIcon from '../../assets/emoticon-icon.svg'
import SendIcon from '../../assets/send-icon.svg'
import { USER_THUMBNAILS, EMOTICONS_LIST, INPUT_ACTIONS, STATUS_TILE_FOOTER_ACTIONS } from '../../util/constants'
import { InputStatus, InputActions } from '../../util/enums'
import { IFeedTileProps, InputAction } from '../../util/interfaces'


const StatusTile = () => {

  const { setFeedData, userEmail, handleInteraction, isUserAuthenticated } = useAppData();

  const [textContent, setTextContent] = useState<string>('');

  const addStatusToFeed = (e: React.MouseEvent<HTMLDivElement>) => {

    if(!isUserAuthenticated){
      alert('Please signup/login to update status');
      return;
    }

    e?.stopPropagation();
    if (textContent?.length > 0) {
      const dataToSendToFeed = {
        userThumbnail: getRandomElement(USER_THUMBNAILS),
        username: userEmail?.split('@')?.[0] || "John Doe",
        statusUpdatedAt: "5 mins ago",
        statusEmoticon: getRandomElement(EMOTICONS_LIST),
        textContent: textContent
      }
      setTextContent('');
      setFeedData?.((feedData: Array<IFeedTileProps>) => [dataToSendToFeed, ...feedData])
    } else {
      alert('Please add some text in status!');
    }
  }

  return (
    <div className="status-tile-container">
      <div className="status-tile">
        <div className="status-tile__header">
          <div className="header-actions">

            <div className="paragraph-dd" onClick={handleInteraction}>
              <div className="title-container">
                <span>Paragraph</span>
              </div>
              <div className="icon-container">
                <img src={ChevronIcon} alt="Chevron icon" />
              </div>
            </div>

            <div className="input-actions">
              {INPUT_ACTIONS.map((action: InputAction) => {
                const isActiveAction = action.status === InputStatus.ACTIVE;
                if (action.action === InputActions.DIVIDER) {
                  return <div key={action.id} className="vertical-divider"></div>
                }

                return (
                  <div key={action.id} className={`input-action${isActiveAction ? ' active' : ' inactive'}`} onClick={handleInteraction}>
                    <img src={action.icon} alt={action.title} />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="delete-action" onClick={handleInteraction}>
            <img src={DeleteIcon} alt={`delete-icon`} />
          </div>
        </div>

        <div className="status-tile__input">
          <div className="icon-container" onClick={handleInteraction}>
            <img src={EmoticonIcon} alt={`emoticon-icon`} />
          </div>
          <div className="text-area-container">
            <textarea className='custom-text-area' placeholder='How are you feeling today?'
              onClick={(e) => e?.stopPropagation()}
              onChange={(e) => {
                e?.stopPropagation();
                setTextContent(e?.target?.value)
              }}>{textContent}</textarea>
          </div>
        </div>

        <div className="status-tile__footer">
          <div className="footer-actions">
            {STATUS_TILE_FOOTER_ACTIONS.map((action: InputAction) => {
              const isActiveAction = action.status === InputStatus.ACTIVE;
              return (
                <div key={action.id} className={`footer-action${isActiveAction ? ' active' : ' inactive'}`} onClick={handleInteraction}>
                  <img src={action.icon} alt={action.title} />
                </div>
              )
            })}
          </div>
          <div className="post-action" onClick={addStatusToFeed}>
            <img src={SendIcon} alt={`post-icon`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatusTile