import React, { Component } from 'react'

//component
import Featured from './featured';
import Subscriptions from './subscriptions';
import Blocks from './blocks';
import Poll from './poll';

//BASE_URL
const BASE_URL = 'http://localhost:4040/home';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            home: ''
         };
    }


    componentDidMount(){
        fetch(BASE_URL, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                home: data
            })
        })
        .catch(err => console.log(`Error Occured: + ${err}`))
    }

    render() {
        return (
            <div>
                <Featured slides={this.state.home.slider}/>
                <Subscriptions />
                <Blocks blocks={this.state.home.blocks}/>
                <Poll />

            </div>
        );
    }
}

export default Home;