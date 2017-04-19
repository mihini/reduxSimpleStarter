import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/Video_details';

const API_KEY = 'AIzaSyAubJRAwimlWYowV7Rso1lizeg8v4vnc0g';

// INSTEAD OF CALLING IT LATER, WE WANT TO CALL I RIGHT AWAY SO WE CAN HAVE SOME VIDEOS ON THE SIDE
// YTSearch({key: API_KEY, term:'deft'}, function(data){
//   // console.log(data);
// });

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo: null

    };

    this.videoSearch('deft');
  }

//term will be the search term.
  videoSearch(term){
    YTSearch({key: API_KEY, term:term}, (videos) =>{
      // when key and value is the same, you can just write the name one time.
      // this.setState({videos:videos});
      this.setState({
        videos: videos,
        selectedVideo: videos[0]//the first video to show
      });
    });

  }

  render(){
    const videoSearch= _.debounce((term)=>{this.videoSearch(term)}, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        {/*sends onVideoSelect to videolist and it can send it to item*/}
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
 }
}

// const App = () => {
//   return (
//     <div>
//       <SearchBar/>
//     </div>
//   );
// }

// <App/></App>
// or <App/> if there is nothing inside

ReactDOM.render(<App/>, document.querySelector('.container'));
