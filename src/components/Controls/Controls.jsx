import './Controls.css'

import playButton from '../../assets/buttons/play_button.svg'
import pauseButton from '../../assets/buttons/pause_button.svg'
import nextButton from '../../assets/buttons/next_button.svg'
import prevButton from '../../assets/buttons/previous_button.svg'
import repeatButton from '../../assets/buttons/repeat_button.svg'
import shuffleButton from '../../assets/buttons/shuffle_button.svg'
import playListButton from '../../assets/buttons/playlist_button.svg'
import volumeIcon from '../../assets/buttons/volume_icon.svg'
import muteIcon from '../../assets/buttons/mute_icon.svg'

function Controls () {

    return(

        <div className='controls'>
            <div className='left'>
                <img 

                    className='albumImage'
                    src='https://vignette.wikia.nocookie.net/linkinpark/images/8/8d/Hybrid-Theory.jpg/revision/latest?cb=20180725161404'
                    alt="Album Image" 

                  />
                  
                  <div className='song-name__container'>
                    <h4 className='song-name'>song names</h4>
                  </div>

            </div>

            <div className='center'>
                <img className='shuffle' src={shuffleButton} alt='shuffle' title='Enable Shuffle'></img>
                <img className='previous' src={prevButton} alt='previous' title='Previous Song'></img>
                <img className='play' src={playButton} alt='play' title='Play'></img>
                <img className='pause' src={pauseButton} alt='pause' title='Pause'></img>
                <img className='next' src={nextButton} alt='next' title='Next Song'></img>
                <img className='repeat' src={repeatButton} alt='repeat' title='Enable Repeat'></img>
            </div>

            <div className='right'>
            <img className='playlist' src={playListButton} alt='playlist'title='Song Queue'></img>
            <img className='volume' src={volumeIcon} alt='volume'></img>
            <img className='mute' src={muteIcon} alt='mute'></img>
            </div>

        </div>



    );


}

export default Controls;