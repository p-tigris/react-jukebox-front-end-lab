const TrackList = (props) => {

    return (
        <ul>
        {props.tracks.map((track, index) => (
            <div key={index}>
            <li>{track.title} by {track.artist}</li>
            <button onClick={() => { props.handleFormView(track); props.handleSelect(track) }}>Edit</button>
            <button onClick={() => props.handleDeleteTrack(track._id)}>Delete</button>
            </div>
        ))}
        </ul>
    )

}

export default TrackList;