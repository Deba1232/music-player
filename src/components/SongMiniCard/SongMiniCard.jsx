import './SongMiniCard.css'

function SongMiniCard() {

    return(

        <div className='song-mini-card'>
                <img 

                    className='albumImage'
                    src='https://vignette.wikia.nocookie.net/linkinpark/images/8/8d/Hybrid-Theory.jpg/revision/latest?cb=20180725161404'
                    alt="Album Image" 

                  />
                  
                  <div className='song-name__container'>
                    <h4 className='song-name'>song names</h4>
                  </div>

                  <div className='song-timer__container'>
                    <span className='song-timer'>0:00 / 4:00</span>
                  </div>
                  

        </div>

    );

}

export default SongMiniCard;