import './App.css'
import Icon from '@mdi/react';
import { mdiTranslate, mdiSafetyGoggles, mdiBed, mdiIsland, mdiArrowRightDropCircleOutline, mdiEmail,
   mdiArrowLeftDropCircleOutline, mdiRun, mdiClockOutline, mdiSailBoat, mdiSwim, mdiPhone, mdiMapMarker } from '@mdi/js';

const App = () => {

  const clickedAct = (e) => {
    switch (e.target.id) {
      case 'act1':
        document.getElementById('act1').classList.add('selectedActvitiy')
        document.getElementById('act2').classList.remove('selectedActvitiy')
        document.getElementById('act3').classList.remove('selectedActvitiy')
        break
      case 'act2':
        document.getElementById('act1').classList.remove('selectedActvitiy')
        document.getElementById('act2').classList.add('selectedActvitiy')
        document.getElementById('act3').classList.remove('selectedActvitiy')
        break
      case 'act3':
        document.getElementById('act1').classList.remove('selectedActvitiy')
        document.getElementById('act2').classList.remove('selectedActvitiy')
        document.getElementById('act3').classList.add('selectedActvitiy')
        break
      default:
        break
    }

  }
  return (
    <>
      <header>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/aquila-web-hosting.appspot.com/o/Logos%20Others%2FBlue_and_Yellow_Illustrative_Travel_Agency_Logo-removebg-preview.png?alt=media&token=b509143d-a047-4601-b26e-f50730bb2b5f" alt="logo" />
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="">About Us</a>
          <a href="">Offers</a>
          <a href="">Contact</a>
        </nav>
        <Icon path={mdiTranslate} size={1.3}></Icon>
      </header>
      <main>

        <div className='artworkContainer'>
          <div className='artworkFilterPurple'></div>
          <img className='artworkCity' src="https://www.visitcinqueterre.eu/wp-content/uploads/elementor/thumbs/70C58BBD-3250-4912-853D-CA28E318206C-1-p68q13ojknqiye6tf5lu568pcstgdo8foj7up7cksg.jpeg" alt="artwork city" />
          <div className='artworkTextContainer'>
            <img className='artowrkText' src="https://firebasestorage.googleapis.com/v0/b/aquila-web-hosting.appspot.com/o/artwork%20others%2FMay%2025%2C%202025%2C%2009_47_03%20PM.png?alt=media&token=f8f654b5-ff67-41aa-ac13-f59a1038d38d" alt="artwotrk text" />
          </div>
        </div>

        <div className='activitiesNav'>
          <div className='selectedActvitiy' id='act1' onClick={(e) => clickedAct(e)}>
            <Icon path={mdiIsland} size={1.5} />
            TRIPS
          </div>

          <div id='act2' onClick={(e) => clickedAct(e)}>
            <Icon path={mdiBed} size={1} />
            HOTELS
          </div>

          <div id='act3' onClick={(e) => clickedAct(e)}>
            <Icon path={mdiSafetyGoggles} size={1} />
            ACTIVITIES
          </div>
        </div>

        <div className='calculator'>
          <form>
            <div>
              <label htmlFor="destination">Destination</label><br />
              <select name="destination" id="destination"></select>
            </div>
            <div>
              <label htmlFor="hotel">Hotel</label><br />
              <select name="hotel" id="hotel"></select>
            </div>
            <div>
              <label htmlFor="duration">Duration</label><br />
              <select name="duration" id="duration"></select>
            </div>
            <div>
              <label htmlFor="adults">Adults</label><br />
              <select name="adults" id="adults"></select>
            </div>
            <div>
              <label htmlFor="children">Children</label><br />
              <select name="children" id="children"></select>
            </div>
            <button>Calculate</button>
          </form>
        </div>

        <div className='bestOffers'>
          <div className='textOffers'>
            <h1>The best we offer</h1>
            <p><i>Take a look at the best offers we have to offer, for your enjoynment and comoddition only!</i></p>
          </div>
          <div className='cityOffers'>
            <div>
              <img src="https://euronews.al/en/wp-content/uploads/2024/07/Porti-i-Durresit-1125-1068x635.jpg" alt="offer1" />
              <div>
                <span className='offerDate'>April 15th - April 20th</span>
                <h1>Durres</h1>
                <span className='offerPrice'>from $650</span>
                <div className="rating" style={{display: 'block', width: 'auto'}}>
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input checked="" type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                </div>

              </div>
            </div>
             <div>
              <img src="https://images.blacktomato.com/2024/11/Maldives-property.jpg?auto=compress%2Cformat&fit=crop&h=1260&ixlib=php-3.3.1&q=82&w=2050&s=0d247c9c285f8fd3111a246a56c527ad" alt="offer2" />
              <div>
                <span className='offerDate'>May 28th - June 1st</span>
                <h1>Maldives</h1>
                <span className='offerPrice'>from $1900</span>
                <div className="rating" style={{display: 'block', width: 'auto'}}>
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input checked="" type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                </div>

              </div>
            </div>
             <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Historical_peninsula_and_modern_skyline_of_Istanbul.jpg/960px-Historical_peninsula_and_modern_skyline_of_Istanbul.jpg" alt="offer3" />
              <div>
                <span className='offerDate'>April 15th - April 25th</span>
                <h1>Istanbul</h1>
                <span className='offerPrice'>from $990</span>
                <div className="rating" style={{display: 'block', width: 'auto'}}>
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input checked="" type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                    style={{fill: '#e4e4e4'}}
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className='packages'>
          <div className='artworkFilterPurple'></div>
          <div className='pckTextContainer'>
            <h2>Durres premium package</h2>
            <div className="rating" style={{display: 'block', width: 'auto'}}>
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input checked="" type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text"
                  ><svg
                    viewBox="0 0 576 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-solid"
                  >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path></svg
                    ></label>
            </div>
            <p>Get the best offer and book now to enjoy every offert at minimum price! The package includes the hotel, private beach, eating, traveling through albania and touring, 
              different activities such as swiming, boat traveling, diving, morning runs etc. Do not hesitate to get your hands on this offer... BOOK NOW!</p>
            <button>Book</button>
          </div>
          <Icon path={mdiArrowRightDropCircleOutline} size={1.8} className='icons right'/>
          <Icon path={mdiArrowLeftDropCircleOutline} size={1.8} className='icons left'/>
        </div>

        <div className='otherOffers'>
          <h1>Other Offers</h1>
          <div className='othrOffrsCont'>
            <div className='othrOffrsContainer'>
              <div className='otherOffrsImgCont'>
                <img src="https://www.earthtrekkers.com/wp-content/uploads/2021/01/Santorini.jpg.webp" alt="santorini" />
                <span>SANTORINI</span>
              </div>
              <div className='otherOffrsTextCont'>
                <div>
                  <span className='price'>$70</span>
                  <span>per night</span>
                </div>
                <div className="rating" style={{display: 'block', width: 'auto'}}>
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input checked="" type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                </div>
                <p>The island of Santorini is the remnants of an ancient volcano. What remains is the rim of the caldera and perched along this rim are some of the most photogenic towns in Europe.</p>
                <div className='otherOffrsIcons'>
                  <Icon path={mdiSailBoat} size={1.5} />
                  <Icon path={mdiClockOutline} size={1.5} />
                  <Icon path={mdiRun} size={1.5} />
                  <Icon path={mdiSwim} size={1.5} />
                </div>
              </div>
            </div>
            <div className='othrOffrsContainer'>
              <div className='otherOffrsImgCont'>
                <img src="https://www.earthtrekkers.com/wp-content/uploads/2021/01/Paris-France.jpg.webp" alt="santorini" />
                <span>PARIS</span>
              </div>
              <div className='otherOffrsTextCont'>
                <div>
                  <span className='price'>$95</span>
                  <span>per night</span>
                </div>
                <div className="rating" style={{display: 'block', width: 'auto'}}>
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input checked="" type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                </div>
                <p>The island of Santorini is the remnants of an ancient volcano. What remains is the rim of the caldera and perched along this rim are some of the most photogenic towns in Europe.</p>
                <div className='otherOffrsIcons'>
                  <Icon path={mdiSailBoat} size={1.5} />
                  <Icon path={mdiClockOutline} size={1.5} />
                  <Icon path={mdiRun} size={1.5} />
                  <Icon path={mdiSwim} size={1.5} />
                </div>
              </div>
            </div>
            <div className='othrOffrsContainer'>
              <div className='otherOffrsImgCont'>
                <img src="https://www.earthtrekkers.com/wp-content/uploads/2021/01/Prague.jpg.webp" alt="santorini" />
                <span>PRAGUE</span>
              </div>
              <div className='otherOffrsTextCont'>
                <div>
                  <span className='price'>$55</span>
                  <span>per night</span>
                </div>
                <div className="rating" style={{display: 'block', width: 'auto'}}>
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input checked="" type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                </div>
                <p>The island of Santorini is the remnants of an ancient volcano. What remains is the rim of the caldera and perched along this rim are some of the most photogenic towns in Europe.</p>
                <div className='otherOffrsIcons'>
                  <Icon path={mdiSailBoat} size={1.5} />
                  <Icon path={mdiClockOutline} size={1.5} />
                  <Icon path={mdiRun} size={1.5} />
                  <Icon path={mdiSwim} size={1.5} />
                </div>
              </div>
            </div>
            <div className='othrOffrsContainer'>
              <div className='otherOffrsImgCont'>
                <img src="https://www.earthtrekkers.com/wp-content/uploads/2021/01/Rakotzbrucke.jpg.webp" alt="santorini" />
                <span>RakotzbrüKE</span>
              </div>
              <div className='otherOffrsTextCont'>
                <div>
                  <span className='price'>$140</span>
                  <span>per night</span>
                </div>
                <div className="rating" style={{display: 'block', width: 'auto'}}>
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input checked="" type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text"
                    ><svg
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-solid"
                    >
                        <path
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path></svg
                      ></label>
                </div>
                <p>The island of Santorini is the remnants of an ancient volcano. What remains is the rim of the caldera and perched along this rim are some of the most photogenic towns in Europe.</p>
                <div className='otherOffrsIcons'>
                  <Icon path={mdiSailBoat} size={1.5} />
                  <Icon path={mdiClockOutline} size={1.5} />
                  <Icon path={mdiRun} size={1.5} />
                  <Icon path={mdiSwim} size={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
          <img src="https://firebasestorage.googleapis.com/v0/b/aquila-web-hosting.appspot.com/o/Logos%20Others%2FBlue_and_Yellow_Illustrative_Travel_Agency_Logo-removebg-preview.png?alt=media&token=b509143d-a047-4601-b26e-f50730bb2b5f" alt="logo" />
          <div className='tags'>
            <h3>TAGS</h3>
            <span>#TOUR</span>
            <span>#TRAVEL</span>
            <span>#PARTY</span>
            <br /><br /><br />
            <span>#SUMMER</span>
            <span>#HOLYDAYS</span>
          </div>
          <div className='contacts'>
            <h3>CONTACTS</h3>
            <div>
              <div>
                <Icon path={mdiPhone} size={1}/> 
                +389 71 234 567
              </div>
              <div>
                <Icon path={mdiMapMarker} size={1}/> 
                Ilindeska 20394, Tetovo
              </div>
              <div>
                <Icon path={mdiEmail} size={1}/> 
                aquila1912@gmail.com
              </div>

            </div>
          </div>
      </footer>
    </>
  )
}

export default App