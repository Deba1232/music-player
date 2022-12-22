import './Player.css'

import Playlist from '../Playlist/Playlist';
import MusicSeek from './MusicSeek/MusicSeek';
import Controls from '../Controls/Controls';

function Player () {

    return (

        <div className='player-container'>

            <Playlist />
            <MusicSeek />
            <Controls />
            
        </div>
        

    );


}

export default Player;