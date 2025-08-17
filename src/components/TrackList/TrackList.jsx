const TrackList = (props) => {

    return (
        <ul>
        {props.tracks.map((track, index) => (
            <li key={index}>{track.title} by {track.artist}</li>
        ))}
        </ul>
    )

}

export default TrackList;