import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{

    state={images:[]};

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos/',{
            params:{ query: term },
            headers: {
                Authorization: 'Client-ID ee26e696851b5f5ae1460b7717a3a6829bdb4b8d4c4b45ebf9b0c3fa4af83a17'
            }
        });
        this.setState({images: response.data.results});
    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
