import React from "react";

class MovieCard extends React.Component{
    render(){
        const {movie}=this.props
        return(
            <div  className="movie-card">
                <div className="left" >
                    <img alt="error" src={movie.Poster} /> 
                    {/* .Poster from data.js file */}
                </div>
                <div className="right" >
                    <div className="title" >{movie.Title} </div>
                    <div className="plot" >{movie.Plot} </div>
                    <div className="footer" >
                        <div className="rating" > {movie.imdbRating} </div>
                        <button className="favourite-btn" >  Add to Favourites😍</button>

                    </div>
                    
                    
                </div>

            </div>
        )
    }
}
export default MovieCard