import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import HomePage from './pages/HomePage'
import Predictpage from './pages/Predictpage'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' Component={HomePage} />
                <Route path='/Predictpage' Component={Predictpage} />
            </Routes>
        </Router>
    )
}

export default App