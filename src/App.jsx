import * as trackService from './services/trackService.js';
import { useState, useEffect } from 'react';
import TrackList from "./components/TrackList/TrackList";

const App = () => {
  const [tracks, setTracks] = useState([]);

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

  
  return (
    <TrackList tracks={tracks}/>
  )
};

export default App;

