import React, { useState } from 'react'
import { Dashboard } from '../components/Dashboard'
import { Form } from '../components/Form'

const Main = () => {

    const [refreshState, SetRefreshState] = useState(false)


    const refresh = () => {
        SetRefreshState(!refreshState)
    }

    return (
        <div>
           
                
                <Dashboard refresh={refresh} refreshState={refreshState} />
            
        </div>
    )
}

export default Main