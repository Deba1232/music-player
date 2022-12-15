import './QueueAndVolumeControls.css'

import playListButton from '../../assets/buttons/playlist_button.svg'
import volumeIcon from '../../assets/buttons/volume_icon.svg'
import muteIcon from '../../assets/buttons/mute_icon.svg'

function QueueAndVolumeControls(){

    return(

        <div className='right'>
            <img className='playlist' src={playListButton} alt='playlist'title='Song Queue'></img>
            <img className='volume' src={volumeIcon} alt='volume'></img>
            <img className='mute' src={muteIcon} alt='mute'></img>
        </div>

    );

}

export default QueueAndVolumeControls;