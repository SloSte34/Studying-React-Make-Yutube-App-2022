class Youtube {
  constructor(key) {
    this.key = key;
    //받아온 key를 저장한다.
    this.getRequestOptions = {
      //반복적으로 쓰이는 부분
      method: 'GET',
      redirect: 'follow',
    };
  }

  mostPopular() {
    //가장 인기 있는 것을 보여주는 부분
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${YOUTUBE_API}`,
      this.getRequestOptions
      //위에서 처리한 것을 사용
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${YOUTUBE_API}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}

export default Youtube;
//export를 하지 않으면 auto import가 발생하지 않는다.
