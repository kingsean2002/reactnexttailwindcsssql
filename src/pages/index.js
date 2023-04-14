import { useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import Carousel from "../components/Carousel";

function App() {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (genre, year) => {
        setIsLoading(true);

        // FETCH THUMBNAILS
        const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/search",
            {
                params: {
                    key:
                        process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
                    part: "snippet",
                    type: "video",
                    q: `${genre} music ${year}`,
                    maxResults: 10,
                    order: "viewCount",
                    videoDefinition: "high",
                },
            }
        );

        // FUNCTION TO MAP ALL TO ID'S AND THUMBNAILS TO A LIST
        const items = response.data.items.map((item) => ({
            id: item.id.videoId,
            snippet: item.snippet,
        }));
        console.log("Videos:", items); // DEBUGGGGGGGGG


        const videoIds = items.map((item) => item.id).join(",");

        const videoStatsResponse = await axios.get(
            "https://www.googleapis.com/youtube/v3/videos",
            {
                params: {
                    key:
                        process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
                    part: "statistics",
                    id: videoIds,
                },
            }
        );

        const statsItems = videoStatsResponse.data.items;

        const videosWithStats = items.map((video, index) => ({
            ...video,
            statistics: statsItems[index].statistics,
        }));

        setVideos(videosWithStats);
        setIsLoading(false);

    };

// EVERYTHING PUT TOGETHER HERE
    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-purple-600 to-indigo-500">
            <div className="bg-gray-800 p-4 shadow-lg">

                <Search onSubmit={handleSubmit} />

            </div>
            <div className="flex-1">
            {isLoading ? (
                    <div className="text-center mt-4 text-gray-300 text-xl font-semibold">
                        Loading videos...
                    </div>

                ) : videos.length > 0 ? (

                    <Carousel videos={videos} />

                ) : (

                    <div className="text-center mt-4 text-gray-300 text-xl font-semibold">
                        <p>No videos found.</p>
                        <p className="mt-2">Try searching for a different genre.</p>
                    </div>
                    // PUT iFrame video player here pliz

                )}

            </div>
        </div>
    );
}

export default App;
