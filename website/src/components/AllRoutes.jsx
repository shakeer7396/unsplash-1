import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Arcitecture from '../pages/Arcitecture'
import Business from '../pages/Business'
import CurrentEvents from '../pages/CurrentEvents'
import Editorial from '../pages/Editorial'
import Experimental from '../pages/Experimental'
import Fashion from '../pages/Fashion'
import Film from '../pages/Film'
import Food from '../pages/Food'
import Health from '../pages/Health'
import Interiors from '../pages/Interiors'
import Nature from '../pages/Nature'
import People from '../pages/People'
import Renders from '../pages/Renders'
import Textures from '../pages/Textures'
import Wallpapers from '../pages/Wallpapers'

import Signup from './Signup'
import Home from '../pages/Home';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={'/Editorial'} element={<Editorial/>}></Route>
            
            <Route path={'/Signup'} element={<Signup/>}></Route>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/CurrentEvents'} element={<CurrentEvents/>}></Route>
            <Route path={'/Wallpapers'} element={<Wallpapers/>}></Route>
            <Route path={'/Renders'} element={<Renders/>}></Route>
            <Route path={'/Textures'} element={<Textures/>}></Route>
            <Route path={'/Experimental'} element={<Experimental/>}></Route>
            <Route path={'/Arcitecture'} element={<Arcitecture/>}></Route>
            <Route path={'/Nature'} element={<Nature/>}></Route>
            <Route path={'/Business'} element={<Business/>}></Route>
            <Route path={'/Fashion'} element={<Fashion/>}></Route>
            <Route path={'/Film'} element={<Film/>}></Route>
            <Route path={'/Food'} element={<Food/>}></Route>
            <Route path={'/Health'} element={<Health/>}></Route>
            <Route path={'/People'} element={<People/>}></Route>
            <Route path={'/Interiors'} element={<Interiors/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes