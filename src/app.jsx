import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]); //1. 처음에는 텅 빈 state를 설정한다.
  const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API;
  useEffect(() => {
    const requestOptions = {
      //fetch를 쓸 때 옵션을 전달하는 부분.
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${YOUTUBE_API}`,
      requestOptions
    )
      // .then((response) => response.text())
      //fetch가 정상적으로 받아지면 반응을 텍스트로 변환, 그러나 JSON으로 변환하는게 더 작업하기 쉽다.
      .then((response) => response.json())
      // .then((result) => console.log(result)) //변환된 텍스트를 콘솔에 출력한다.
      .then((result) => setVideos(result.items)) //result안에 있는 items를 state에 저장한다.
      .catch((error) => console.log('error', error)); //만약 Error가 발생하면 이를 console에 출력한다.
  }, []); //2. mount가 되었을 때 만 useEffect의 함수가 호출이 된다.
  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
