import _ from 'lodash';
import React, { Component } from 'react';
import  SearchBar  from './components/Search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/Video_list';
import VideoDetail from './components/Video_details';

import './App.css';



const API_KEY = 'AIzaSyC5yexewZaBvyXc3fJlMvffpz9lwQVFVZE';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Virunga national park');
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term},  (videos) => {
            //console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

  render() {
        const videoSearch = _.debounce((term) =>{ this.videoSearch(term)}, 300);
    return (
      <div className="">
          <SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}
          />
      </div>
    );
  }
}

export default App;
