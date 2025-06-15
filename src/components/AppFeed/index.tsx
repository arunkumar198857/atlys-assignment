import React from 'react'
import './styles.scss'
import StatusTile from '../StatusTile'
import FeedTile from '../FeedTile'
import { useAppData } from '../../store'

const AppFeed = () => {

  const { feedData }  = useAppData();

  return (
    <div className="app-feed">
        <StatusTile />
        {feedData?.length > 0 ? (
          feedData?.map((feedItem, index) => 
          <FeedTile 
            {...feedItem}
          />)
        ) : null}
    </div>
  )
}

export default AppFeed