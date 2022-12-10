import Playlist from '../Playlist/Playlist.jsx';
import Controls from '../Controls/Controls.jsx';
import './Player.css'

function Player () {

    return (

        <div className='player-container'>

            <Playlist />
            <Controls />
            
        </div>
        

    );


}

export default Player;