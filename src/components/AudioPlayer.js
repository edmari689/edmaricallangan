import { useRef, useState } from 'react';
import { tracks } from '../soundworks/tracks';

import DisplayTrack from "./audioplayer/DisplayTrack";
import Controls from "./audioplayer/Controls";
import ProgressBar from "./audioplayer/ProgressBar";

export default function AudioPlayer () {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

    // reference
    const audioRef = useRef();
    const progressBarRef = useRef();

    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleNext = () => {
      if (trackIndex >= tracks.length - 1) {
        setTrackIndex(0);
        setCurrentTrack(tracks[0]);
      } else {
        setTrackIndex((prev) => prev + 1);
        setCurrentTrack(tracks[trackIndex + 1]);
      }
    };

    return (
      <div className="audio-player">
        <div className="inner">
        <DisplayTrack
          {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext }}
        />
          <Controls
          {...{ audioRef, progressBarRef, duration, setTimeProgress,
         tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext }}
        />
          <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration }}
        />
        </div>
      </div>
    );
}