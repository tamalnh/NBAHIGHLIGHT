import React, { Component } from 'react'
const TEAM_URL = 'http://localhost:4040/teams';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         };
    }

    
    componentDidMount() {
        let id = this.props.match.params.id
            fetch(`${TEAM_URL}?name=${id}`, {
                method: 'GET'
            }).then(res => res.json())
                .then(data => {
                    this.setState({
                        data: data
                    })
                })
                .catch(err => console.log(`error occured: ${err}`))
            
        }

        //return squad
        renderSquad = (squad) => {
            return squad.map((item) => {
                return(
                    <div key={item.name} className="item player-wrapper">
                        <img src={`/images/avatar.png`} alt={item.name} />
                        <h4>{item.name}</h4>
                        <div className="node">
                            <span>PPG: </span>{item.PPG}
                        </div>
                        <div className="node">
                            <span>APG: </span>{item.APG}
                        </div>
                        <div className="node">
                            <span>RPG: </span>{item.RPG}
                        </div>
                    </div>
                )
            })
        }

        renderData = (data) => {
            return data.map((item) => {
                return (
                    <div key={item.id} className="team-data-wrapper">
                        <div className="left">
                            <img src={`/images/teams/${item.logo}`} alt={item.name}/>
                        </div>

                        <div className="right">
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>

                            <hr />

                            <div className="squad"> 
                                {this.renderSquad(item.squad)}
                            </div>
                        </div>
                    </div>
                )
            })
        }

        
        render() {
            console.log(this.props)
            return (
                <div className="team-data">
                    {this.renderData(this.state.data)}
                </div>
        );
    }
}

export default Team;