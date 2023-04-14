import { useRef } from "react";
import VideoCard from "../../src/components/VideoCard";

function Carousel({ videos }) {
    console.log("Carousel videos:", videos); // DEBUGGGGGGG

    const carouselRef = useRef(null);

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                top: 0,
                left: -carouselRef.current.clientWidth,
                behavior: "smooth",
            });
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                top: 0,
                left: carouselRef.current.clientWidth,
                behavior: "smooth",
            });
        }
    };


    return (
        // UNCLOSED DIV
        <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-start">
                <button
                    className="text-5xl text-white hover:text-gray-300 z-0 focus:outline-none"
                    onClick={handlePrevClick}
                >
                    &#9664;
                </button>
            </div>
            <div ref={carouselRef} className="flex space-x-4 overflow-hidden">
                {videos.map((video, index) => (
                    <div
                        key={video.id}
                        className="w-full h-full flex-shrink-0"
                        style={{ perspective: "1000px" }}
                    >
                        <VideoCard video={video} />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-end">
                <button
                    className="text-5xl text-white hover:text-gray-300 focus:outline-none"
                    onClick={handleNextClick}
                >
                    &#9654;
                </button>
                <button
                    className="text-5xl text-white hover:text-gray-300 z-0 focus:outline-none"
                    onClick={handlePrevClick}
                >
                    &#9664;
                </button>
            </div>
        </div>
    );
}

export default Carousel;
