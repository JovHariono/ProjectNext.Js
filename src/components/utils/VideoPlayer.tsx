"use client";

import { XCircle } from "@phosphor-icons/react";
import * as React from "react";
import Youtube from "react-youtube";
import { useState } from "react";

interface IVideoPlayerProps {
  result: string;
}

const VideoPlayer: React.FunctionComponent<IVideoPlayerProps> = (props) => {
  const option = {
    width: "300",
    height: "250",
  };

  const [isOpen, setIsOpen] = useState(true);

  const handleCloseButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right bg-color-secondary px-3"
          onClick={handleCloseButton}
        >
          X
        </button>
        <Youtube videoId={props.result} opts={option} />
      </div>
    );
  };

  return isOpen ? <Player /> : null;
};

export default VideoPlayer;
