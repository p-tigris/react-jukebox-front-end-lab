import { useState } from "react";

const TrackForm = (props) => {

    const initialState = {
        title: '',
        artist: '',
    }

    const [formData, setFormData] = useState(
        props.selected ? props.selected : initialState);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.selected) {
            props.handleUpdateTrack(formData, props.selected._id);
        } else {
            props.handleNewTrack(formData);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button className="form-button" type="submit">{props.selected ? 'Update' : 'Add New'} Track</button>
        </form>

    )

}

export default TrackForm;