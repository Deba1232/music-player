import { useState,useEffect,useContext } from 'react'

import './PlayControls.css'

import playButton from '../../assets/buttons/play_button.svg'
import pauseButton from '../../assets/buttons/pause_button.svg'
import nextButton from '../../assets/buttons/next_button.svg'
import prevButton from '../../assets/buttons/previous_button.svg'
import repeatButton from '../../assets/buttons/repeat_button.svg'
import shuffleButton from '../../assets/buttons/shuffle_button.svg'

import { applicationContext } from '../../context/context'

function PlayControls(){

    let [playButtonStyle,setPlayButtonStyle] = useState({});
    let [pauseButtonStyle,setPauseButtonStyle] = useState({});
    let [playState,setPlayState] = useState('play');

    useEffect(() => {
        if(playState === 'play'){
            setPlayButtonStyle({display: 'block'});
            setPauseButtonStyle({display: 'none'});
        }

        else{
            setPlayButtonStyle({display: 'none'});
            setPauseButtonStyle({display: 'block'});
        }
    }, [playState]);

    const {playerState,setPlayerState} = useContext(applicationContext);

    function playPauseButtonState(){
        if(playState === 'play'){
            setPlayState('pause');
            setPlayerState((prevPlayerState) => {
                return {...prevPlayerState, playState: true};
            })
        }

        else{
            setPlayState('play');
            setPlayerState((prevPlayerState) => {
                return {...prevPlayerState, playState: false};
            });
        }
    }

    return(

        <div className='play-controls'>
                <img className='shuffle' src={shuffleButton} alt='shuffle' title='Enable Shuffle'></img>
                <img className='previous' src={prevButton} alt='previous' title='Previous Song'></img>
                <img className='play' src={playButton} alt='play' title='Play' style ={playButtonStyle} onClick={playPauseButtonState}></img>
                <img className='pause' src={pauseButton} alt='pause' title='Pause' style={pauseButtonStyle} onClick={playPauseButtonState}></img>
                <img className='next' src={nextButton} alt='next' title='Next Song'></img>
                <img className='repeat' src={repeatButton} alt='repeat' title='Enable Repeat'></img>
            </div>

    );

}

export default PlayControls;