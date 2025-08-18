const TrackList = (props) => {

    return (
        <div className="track-list">
            <h2>Track List</h2>
            <div className="tracks">
                {!props.tracks.length ? <h3>No tracks yet!</h3> : (
                    props.tracks.map((track, index) => (
                        <div key={index} className="track">
                            <p>{track.title} by <span className="artist">{track.artist}</span></p>
                            <div className="button-container">
                                <button className="track-button" onClick={() => props.handleSelect(track)}>Play</button>
                                <button className="track-button" onClick={() => { props.handleFormView(track); props.handleSelect(track) }}>Edit</button>
                                <button className="track-button" onClick={() => props.handleDeleteTrack(track._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div> 
        </div>
    )
}

export default TrackList;