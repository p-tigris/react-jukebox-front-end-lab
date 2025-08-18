import * as trackService from './services/trackService.js';
import { useState, useEffect } from 'react';
import TrackList from "./components/TrackList/TrackList";
import TrackForm from './components/TrackForm/TrackForm.jsx';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [formOpened, setFormOpened] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const allTracks = await trackService.index();

        if (fetchTracks.error) {
          throw new Error(fetchTracks.error);
        }

        setTracks(allTracks);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTracks();
  }, []);

  const handleFormView = (track) => {
    if (!track._id) setSelected(null);
    setFormOpened(!formOpened);
  }

  const handleNewTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData);

      if (newTrack.error) {
        throw new Error(newTrack.error);
      }

      setTracks([...tracks, newTrack]);
      setFormOpened(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSelect = (track) => {
    setSelected(track);
  }

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updatedTrack = await trackService.update(formData, trackId);
      if (updatedTrack.error) {
        throw new Error(updatedTrack.error);
      }
      setTracks([...tracks.map((track) => track._id === updatedTrack._id ? updatedTrack : track)]);
      setFormOpened(false);
      setSelected(updatedTrack);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteTrack = async (trackId) => {
    try {
      const deletedTrack = await trackService.deleteTrack(trackId);
      if (deletedTrack.error) {
        throw new Error(deletedTrack.error);
      }
      setTracks([...tracks.filter((track) => track._id !== deletedTrack._id)]);
      setSelected(null);
      setFormOpened(false);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <main>
      <button onClick={handleFormView}>Add New Track</button>
      {formOpened ? (
        <TrackForm 
          handleNewTrack={handleNewTrack} 
          handleUpdateTrack={handleUpdateTrack}
          selected={selected}
        />
        ) : ''
      }
      <TrackList 
        tracks={tracks}
        handleFormView={handleFormView}
        handleSelect={handleSelect}
        handleDeleteTrack={handleDeleteTrack}
      />
    </main>
  )
};

export default App;

