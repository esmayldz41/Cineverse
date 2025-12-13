import React from 'react'
import movies from '../../data/movies.json'
import { useState } from 'react'
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import './Navbar.css'

function FilmOner() {
    const rastgeleSecim = () => {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const chosenMovie = movies[randomIndex];
        
        window.location.href = `/movie/${chosenMovie.id}`;
    }

    return (
        <div className='Navbar'>
            <button onClick={rastgeleSecim}>
                Film Öner
                <GiPerspectiveDiceSixFacesRandom className='random'/>
            </button>
        </div>
    )
}

export default FilmOner