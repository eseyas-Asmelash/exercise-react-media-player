import { ReactElement } from 'react';
import MediaItem from './MediaItem';
import { MediaSelected, mediaList} from '../data';
import './MediaPlayer.css';

export function MediaPlayer() : ReactElement {
  return (

    <div className="media-player">
      <div className="media-list">
        {mediaList.map((media) => (
          <MediaItem key={media.id} media={media} />
        ))}
      </div>
      <div className="media-selected">
        <img src={MediaSelected.image} alt="" />
        <div className='title'>
          <button className="play-button">
            <span className="material-symbols-outlined"> add_circle </span>
          </button>
          <h4>{MediaSelected.title}</h4>
          <button className="play-button">
            <span className="material-symbols-outlined"> favorite </span>
          </button>
        </div>
        <img src="../src/assets/timeline.png" alt="button" />
        <div className='play'>
          <button className="play-button">
            <span className="material-symbols-outlined"> repeat</span>
          </button>
          <button className="play-button">
            <span className="material-symbols-outlined"> fast_rewind </span>
          </button>
          <button className="play-button">
            <span className="material-symbols-outlined"> play_arrow </span>
          </button>
          <button className="play-button">
            <span className="material-symbols-outlined"> fast_forward </span>
          </button>
          <button className="play-button">
            <span className="material-symbols-outlined"> shuffle </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
