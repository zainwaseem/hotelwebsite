import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeNavigation from '../../HotalComponents/Home/HomeNavigation'
import HomeContent from '../../HotalComponents/Home/HomeItem'

function Home() {
    // const [showHome, setShowHome] = useState()
    // const [showContact, setShowContact] = useState(false)
    return (<>
        <HomeNavigation />
        <HomeContent />
    </>
    )
}

export default Home