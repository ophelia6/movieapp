import '../css/Movielist.css';
import React, { useRef,useState } from 'react';
import Singlemovie from './Singlemovie.js';

function Movielist({movieData}) {
    const ref = useRef(null);
    const [single,setSingle] = useState({movieData});
    const [singleActive,setSingleStatus] = useState(false);
    const [itemPerRow,setRowItemCount] = useState(false);

    function getDeviceItems(){
        const width = window.innerWidth;
        if(width <= 498){setRowItemCount(2)}
        else if((width > 498) && (width <=698)){setRowItemCount(3)}
        else{setRowItemCount(5)}
    }

    function showMovieInfo(movieInfo) {
        const el2 = ref.current;
        var elList = el2.getElementsByTagName("li")
        var totalLength = movieInfo.item.length;
        setSingle(movieInfo.item);
        var itemsPerRow = getDeviceItems(window.innerWidth);
        console.log(movieData.length,itemsPerRow);
        setSingleStatus(true);
        
    }

  return (
    <div className="Movielist">
      <div className="Movie-Data">
        {(movieData.length > 0) ?
            (<ul ref={ref} className="List-items">
            {singleActive && 
            <li className="Singlemovie"><Singlemovie singleData={single} setSingleStatus={setSingleStatus} /></li>
            }
              {
                movieData.map((item,index) => (
                  <li className="List-item" key={item.imdbID} onClick={() => showMovieInfo({item,index})}>
                    <div class="List-item-content">
                        <div class="Item-img-wrap">
                            <img src={item.Poster} alt="" />
                        </div>
                        <div class="Item-title">
                            {item.Title}
                        </div>
                        <div class="Item-icons">
                            <div class="Item-play">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM7.5 14.5L14.5 10L7.5 5.5V14.5Z" fill="#D4D7DD"/>
                                </svg>
                            </div>
                            <div class="Item-info">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 4H9V9H4V11H9V16H11V11H16V9H11V4Z" fill="#D4D7DD"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" fill="#D4D7DD"/>
                                </svg>
                            </div>
                        </div>
                      </div>
                  </li>

                ))
                }
            </ul>) : (<div>No results found for your search.</div>)
          } 

          </div>
    </div>
  );

}

export default Movielist;
