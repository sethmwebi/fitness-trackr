import { useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
import { useActivity } from '../Hooks/useActivitStore'
import { useNavigate } from 'react-router-dom'
function ActivityTracker() {
    const navigate = useNavigate()
    const [actionModal, setActionModal] = useState(false)
    const {Activity, setActivity} = useActivity((state)=>({
        Activity:state.Activity,
        setActivity:state.setActivity
    }))
    const handleActivity = (activiy) => {
        setActivity(activiy)
        navigate('/distance')
    }
  return (
    <div className="activity-page">
        <div className="tab-button" onClick={()=>{actionModal?setActionModal(false):setActionModal(true)}}>
            <Icon.Plus/>
        </div>
        {
            actionModal?(<div className='actions'>
            <div className='single-action' onClick={()=>handleActivity('cycling')}>
                <Icon.Bicycle/>
                <p>Cycling</p>
            </div>
            <div className='single-action' onClick={()=>handleActivity('running')} >
                <Icon.Person/>
                <p>Running</p>
            </div>
            <div className='single-action' onClick={()=>handleActivity('walking')}>
                <Icon.PersonWalking/>
                <p>Walking</p>
            </div>
        </div>):''
        }
    </div>
  )
}

export default ActivityTracker