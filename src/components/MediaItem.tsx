import { ReactElement } from 'react';
import { MediaItemProps } from '../interfaces';
import './MediaItem.css';

export function MediaItem({ media }: MediaItemProps): ReactElement {
  return (
    <div className="media-item">
      <img src={media.image} alt={media.title} />
      <div className="media-info">
        <h3>{media.title}</h3>
        <p>{media.artist}</p>
      </div>
      <button className="play-button">
        <span className="material-symbols-outlined"> play_arrow </span>
      </button>
    </div>
  );
};

export default MediaItem;
