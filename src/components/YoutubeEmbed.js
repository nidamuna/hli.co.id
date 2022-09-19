import React from 'react';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({ embedId }) => (
  <div className="overflow-hidden pb-[56%] relative">
    <iframe
      className="left-0 top-0 h-[100%] w-[100%] absolute"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
