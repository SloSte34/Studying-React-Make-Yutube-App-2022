import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  // const search = (query) => {
  //   const requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow',
  //   };

  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${YOUTUBE_API}`,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) =>
  //       result.items.map((item) => ({ ...item, id: item.id.videoId }))
  //     )
  //     .then((items) => setVideos(items))
  //     .catch((error) => console.log('error', error));
  // };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {selectedVideo && <VideoDetail video={selectedVideo} />}
      <VideoList videos={videos} onVideoClick={selectVideo} />
    </div>
  );
}

export default App;
