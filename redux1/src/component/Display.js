import React from 'react';

const Display = (props) => {
    const renderMovies = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div>{item.name}</div>
                )
            })
        }
    }

    return(
        <>
            <h3>Movies</h3>
            {renderMovies(props)}
        </>
    )
}

export default Display