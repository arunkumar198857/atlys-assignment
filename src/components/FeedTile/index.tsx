import React from 'react'
import './styles.scss'
import { useAppData } from '../../store'
import { FEED_TILE_FOOTER_ACTIONS } from '../../util/constants';
import { IFeedTileProps, InputAction } from '../../util/interfaces';

const FeedTile: React.FC<IFeedTileProps> = ({
    userThumbnail,
    username,
    statusUpdatedAt,
    statusEmoticon,
    textContent,
}): React.ReactElement => {

    const { handleInteraction } = useAppData();

    return (
        <div className="feed-tile-container">
            <div className="feed-tile-content">

                <div className="user-info">
                    <div className="user-thumb-container">
                        <img src={userThumbnail} alt="Chevron icon" />
                    </div>
                    <div className="user-text-container">
                        <div className="user-name">{username}</div>
                        <div className="user-updated-at">{statusUpdatedAt}</div>
                    </div>
                </div>

                <div className="status-desc">
                    <div className="status-emoticon">
                        {statusEmoticon}
                    </div>
                    <div className="status-text-content">
                        {textContent}
                    </div>
                </div>
            </div>

            <div className="feed-tile-footer">
                {FEED_TILE_FOOTER_ACTIONS.map((action: InputAction) => {
                    return (
                        <div key={action.id} className={`footer-action`} onClick={handleInteraction}>
                            <img src={action.icon} alt={action.title} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FeedTile