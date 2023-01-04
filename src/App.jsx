import './App.css'
import Album from './components/Album/Album'
import Player from './components/Player/Player'

import { applicationContext } from './context/context'
import { initialPlayerState } from './context/PlayerState'

import { useState,useEffect,useRef } from 'react'

import { Howl, Howler } from "howler";
import song from './audio/Papercut.mp3'

function App() {

  const [playerState, setPlayerState] = useState(initialPlayerState);

  let soundConfig = {src: [song],
        autoplay: false,
        loop: true,
        volume: 0.5,};

  let soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Howl(soundConfig);
  },[]);

  useEffect(function (){
     playerState.playState ? soundRef.current.play():soundRef.current.pause();
  },[playerState.playState]);
  
  return (

    <applicationContext.Provider value = {{playerState,setPlayerState}}>
      <div className='app'>
        
        <Album/>
        <Player/>

      </div>
    </applicationContext.Provider>

  )

}

export default App