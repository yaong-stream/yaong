'use client';

import { Badge } from "@/components/ui/badge";
import { VideojsPlayer, VideoPlayer } from "@/components/video-player/video-player";

const StremeliveViewer = () => {

    const options = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        experimentalSvgIcons: true,
        sources: [
            {
                src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
                type: 'application/x-mpegURL'
            },
        ],
    };

    const onReadyPlayer = (player: VideojsPlayer) => {

        player.on('waiting', () => {
            console.log('player is waiting');
        });

        player.on('playing', () => {
            console.log('player is going now');
        });

        player.on('dispose', () => {
            console.log('player will dispose');
        });

    }

    return (
        <div className="relative flex items-center justify-center bg-slate-100">
            <div className="absolute p-4 bg-slate-600 z-50 left-4 top-4">
                <Badge>오프라인</Badge>
            </div>
            <div className="w-full h-full">
                <VideoPlayer options={options} onReady={onReadyPlayer} />
            </div>
        </div>
    );
};


export { StremeliveViewer };