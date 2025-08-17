import * as trackService from './services/trackService.js';
import { useState, useEffect } from 'react';
import TrackList from "./components/TrackList/TrackList";
import TrackForm from './components/TrackForm/TrackForm.jsx';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [addButtonClicked, setAddButtonClicked] = useState(false);

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

  const handleFormView = () => {
    setAddButtonClicked(!addButtonClicked);
  }

  const handleNewTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData);

      if (newTrack.error) {
        throw new Error(newTrack.error);
      }

      setTracks([...tracks, newTrack]);
      setAddButtonClicked(false);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <main>
      <button onClick={handleFormView}>Add New Track</button>
      {addButtonClicked ? (
        <TrackForm handleNewTrack={handleNewTrack}/>
        ) : ''
      }
      <TrackList tracks={tracks}/>
    </main>
  )
};

export default App;

