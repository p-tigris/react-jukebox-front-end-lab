const NowPlaying = (props) => {
    if (props.selected) {
        return (
            <div className="now-playing">
                <h2>Now Playing:</h2>
                <p><span className="properties">Title:</span> {props.selected.title}</p>
                <p><span className="properties">Artist:</span> {props.selected.artist}</p>
            </div>
        )
    }
}

export default NowPlaying;