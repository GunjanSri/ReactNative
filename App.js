import React from 'react';
import {createStackNavigator} from 'react-navigation'
import Courses from './components/Courses'
import Modules from './components/Modules'
import Lessons from './components/Lessons'
import Topics from './components/Topics'
import Widgets from './components/Widgets'

const App = createStackNavigator({
    Courses,
    Modules,
    Lessons,
    Topics,
    Widgets
})
export default App


