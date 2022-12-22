import './MusicSeek.css'

function MusicSeek(){

    return(

        <div className='seek__container'>

            <input type='range'  min='0' max='100'  className='seek-slider' />
        </div>

    );

}

export default MusicSeek;