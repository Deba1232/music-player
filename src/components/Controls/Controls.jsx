import './Controls.css'

import SongMiniCard from '../SongMiniCard/SongMiniCard'
import PlayControls from '../PlayControls/PlayControls'
import QueueAndVolumeControls from '../QueueAndVolumeControls/QueueAndVolumeControls';

function Controls () {

    return(

        <div className='controls'>
            <SongMiniCard/>
            <PlayControls/>
            <QueueAndVolumeControls />

        </div>



    );


}

export default Controls;