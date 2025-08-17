import { useState } from "react";

const TrackForm = (props) => {

    const initialState = {
        title: '',
        artist: '',
    }

    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleNewTrack(formData);
    }

    return (
        <form onClick={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input 
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <label htmlFor="title">Artist:</label>
            <input 
                name="artist"
                id="artist"
                value={formData.artist}
                onChange={handleChange}
                required
            />
            <button type="submit">Add New Track</button>
        </form>

    )

}

export default TrackForm;