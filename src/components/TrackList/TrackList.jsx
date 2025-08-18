const TrackList = (props) => {

    return (
        !props.tracks.length ? <h3>No tracks yet!</h3> : (
            <ul>
            {props.tracks.map((track, index) => (
                <div key={index}>
                <li>{track.title} by {track.artist}</li>
                <button onClick={() => props.handleSelect(track)}>Play</button>
                <button onClick={() => { props.handleFormView(track); props.handleSelect(track) }}>Edit</button>
                <button onClick={() => props.handleDeleteTrack(track._id)}>Delete</button>
                </div>
            ))}
            </ul> ) 
    )

}

export default TrackList;