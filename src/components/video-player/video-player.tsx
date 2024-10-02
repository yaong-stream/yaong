'use client';

import { FC, useEffect, useRef } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";


export type VideoPlayerProps = {
    options: typeof videojs.options;
    onReady?: (player: Player) => void;
}

export type VideojsPlayer = Player;

const VideoPlayer: FC<VideoPlayerProps> = ({ options, onReady }) => {

    const videoRef = useRef<HTMLDivElement | null>(null);
    const playerRef = useRef<Player | null>(null);

    useEffect(() => {

        if (!playerRef.current) {
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoRef?.current?.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady?.(player);
            });
        } else {
            const player = playerRef.current;
            player.autoplay(options?.autoplay);
            player.src(options?.sources);
        }
    }, [options, onReady]);

    useEffect(() => {

        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }

        };
    }, [playerRef]);

    return (
        <div data-vjs-player style={{ width: "100%" }}>
            <div ref={videoRef} />
        </div>
    );
};


export { VideoPlayer };


