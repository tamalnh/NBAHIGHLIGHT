import React, { Component } from 'react';

const TEAM_URL = 'http://localhost:4040/teams';

class Poll extends Component{
    constructor (props){
        super (props);
    
        this.state = {
          pollTeams: []
        }
    }

    fetchPoll () {
        fetch(`${TEAM_URL}?poll=true&_sort=count&_order=desc`, {
            method: 'GET',
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    pollTeams: data
                })
            })
            .catch(err => console.log(`Error Occured: ${err}`))
    }
    componentDidMount() {
        this.fetchPoll()
    }

    voteCountHandler = (id, count) => { 
        
            fetch(`${TEAM_URL}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Accecpt' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({count:count+1}) 
            }).then(() => {
                this.fetchPoll()
            })  
    } 
    

    renderPoll = () => {
        const position = ['1st', '2nd', '3rd']
            return this.state.pollTeams.map((item, index) => {
                return(
                    <div key={item.id} className="poll-item" onClick={() => this.voteCountHandler(item.id, item.count)}>
                        <img src={`/images/teams/${item.logo}`} alt={item.name} />
                        <h3>{position[index]}</h3>
                        <div>{item.count} Votes</div>
                    </div>
                )
            })
    }

    render() {
        return (
            <div className="home-poll">
                <h3>Who will be the next champion</h3>
                <div className="poll-container">
                    {this.renderPoll()}
                </div>
            </div>
        )
    }
}

export default Poll;