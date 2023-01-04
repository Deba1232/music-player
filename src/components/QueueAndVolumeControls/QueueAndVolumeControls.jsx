import { useState } from 'react'

import './QueueAndVolumeControls.css'

import playListButton from '../../assets/buttons/playlist_button.svg'
import volumeIcon from '../../assets/buttons/volume_icon.svg'
import muteIcon from '../../assets/buttons/mute_icon.svg'

function QueueAndVolumeControls(){

    const [volumeSliderStyle,setVolumeSliderStyle] = useState({});
    
    
    
    function volumeSlider(){
        setVolumeSliderStyle({display:'block'});
    }
    
    return(

        <div className='queue-and-volume-controls'>
            <img className='playlist' src={playListButton} alt='playlist'title='Song Queue'></img>

            <div className='volume-controls'>
                <img className='volume' src={volumeIcon} alt='volume'></img>
                <img className='mute' src={muteIcon} alt='mute'></img>
                <div className='volume-slider__container'>
                    <input type="range" className='volume-slider'/>
                </div>
                
            </div>

        </div>

    );

}

export default QueueAndVolumeControls;