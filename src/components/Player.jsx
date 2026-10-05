import { useState } from "react";
import { content } from "../content";

// Floating music widget. It is only the UI: no sound plays.
// To add real audio, create an <audio> element and call play()/pause() in toggle().
export default function Player() {
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  return (
    <div className={`player ${playing ? "playing" : ""}`}>
      <div className="art">
        <div className="eq"><i /><i /><i /></div>
      </div>
      <div className="meta">
        <b>{content.track.title}</b>
        <small>{content.track.artist}</small>
      </div>
      <button onClick={toggle} aria-label="Play or pause">{playing ? "❚❚" : "▶"}</button>
    </div>
  );
}
