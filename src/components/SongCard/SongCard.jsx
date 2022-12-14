import { useState } from 'react';
import './SongCard.css'
import song_cover from '../../public/song_cover.png';

export default function SongCard(){

    const [cardStyle,setCardStyle] = useState(
        {
            display: 'none'
        }
    );


    return (

    <div className='card-container'>

        <div className='card'

            onMouseEnter={()=>setCardStyle({display:'flex'})}
            onMouseLeave={()=>setCardStyle({display:'none'})}
        >
            <img className='song-cover-image' src={song_cover} alt="" />    
            <div style={cardStyle} className="card-overlay">
                <h1>How you like that</h1>
            </div>
        </div> 

        
    </div>

    )

}