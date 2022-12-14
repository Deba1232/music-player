import { useRef, useState } from 'react';
import './Playlist.css';
import SongCard from '../SongCard/SongCard.jsx';
import leftPlaylistButton from '../../assets/buttons/left_playlist_button.svg'
import rightPlaylistButton from '../../assets/buttons/right_playlist_button.svg'


function Playlist() {

    const [playlistStyle,setPlaylistStyle] = useState({})
    const playlistRef = useRef();


    function playlistScroll(event,direction){

        const offsetDir = direction === 'left' ? -1 : 1;
        const cardWidth = playlistRef.current.lastChild.getBoundingClientRect().width;
        const playlistWidth = playlistRef.current.getBoundingClientRect().width;
        const distanceToScroll = Math.floor(playlistWidth/cardWidth)*cardWidth * offsetDir;

        event.target.parentNode.parentNode.scrollBy({
            top:0,
            left:distanceToScroll,
            behavior:'smooth'
        });


        console.log('clicked: '+ distanceToScroll);
    }
    
    return(

        <div ref={playlistRef} style={playlistStyle} className='playlist-overlay'>

            <span className='playlist-left-button' >
                <img onClick={(event) => playlistScroll(event,'left')} src={leftPlaylistButton} alt='left button' />
            </span>
            <span className='playlist-right-button' >
                <img onClick={(event) => playlistScroll(event,'right')} src={rightPlaylistButton} alt='right button' />
            </span>

            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            

        </div>




    );


}

export default Playlist;