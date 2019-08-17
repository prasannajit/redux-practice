import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

class App extends React.Component {
    render() {
        return (<div className="ui container grid">
            <div className="ui row">
                <div className="column wide eight">
                    <SongList></SongList>
                </div>
                <div className="column wide eight">
                    <SongDetail></SongDetail>
                </div>
            </div>
        </div>)
    }
}

export default App;