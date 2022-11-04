import React, { useRef,useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Singlemovie({singleData, setSingleStatus}) {
  const ref = useRef(null);

  function setWidth(){
    var score = Math.floor((((singleData.imdbRating / 10) * 100) / 110) * 100);
    const colorEl = ref.current;
    console.log(colorEl);
    colorEl.style.width = score+"px"
  };
  

  setTimeout(() => {
    if(!singleData.movieData){
      setWidth();
    }
  }, "1000")
  

  
  return (
      <div className="Singlemovie-content">
        <div className="Cross-btn"><CloseIcon onClick={() => setSingleStatus(false)} /></div>
        <div className="Img-wrap">
        <img src={singleData.Poster} alt="" />
        </div>
        <div className="Single-content">
          <div className="Title">{singleData.Title}</div>
         
          <div className="Score">
            <div className="Score-bar">
              <div className="Score-colorbar" ref={ref}></div>
            </div>
            <div className="Score-num">{singleData.imdbRating}/10</div>
          </div>
          <ul className="Single-List">
            <li>
              <div className="Tablename">Year:</div>
              <div className="Tablecontent">{singleData.Year}</div>
            </li>
            <li>
              <div className="Tablename">Running Time:</div>
              <div className="Tablecontent">{singleData.Runtime}</div>
            </li>
            <li>
              <div className="Tablename">Directed By:</div>
              <div className="Tablecontent">{singleData.Director}</div>
            </li>
            <li>
              <div className="Tablename">Language:</div>
              <div className="Tablecontent">{singleData.Language}</div>
            </li>
          </ul>
          <div className="Single-Description">{singleData.Plot}</div>
          <div className="Single-Btns">
             <a className="Play-Btns" href="#">Play Movie</a>
             <a className="Trailer-Btn" href="#">Watch Trailer</a>
          </div>
        </div>
    </div>
  );

}

export default Singlemovie;
