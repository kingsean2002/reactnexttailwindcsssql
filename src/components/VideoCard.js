function VideoCard({ video }) {

    const thumbnail = video?.snippet?.thumbnails?.medium;
    const title = video?.snippet?.title;
    const views = video?.statistics?.viewCount;
    const likes = video?.statistics?.likeCount;

    return (
        <div className="flex flex-col items-center p-4 bg-gradient-to-tr from-purple-600 via-blue-500 to-indigo-600 rounded-md shadow-lg text-white">
            <img src={thumbnail?.url} alt={title} className="rounded-md shadow-md" />
            <h3 className="mt-4 text-lg font-semibold text-center">{title}</h3>
            <div className="flex mt-2 space-x-4 text-sm font-medium">
                <div>{views ? Number(views).toLocaleString() : "N/A"} views</div>
                <div>{likes ? Number(likes).toLocaleString() : "N/A"} likes</div>
            </div>
        </div>
    );
}

export default VideoCard;
