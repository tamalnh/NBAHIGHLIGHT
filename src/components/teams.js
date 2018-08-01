import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const TEAM_URL = 'http://localhost:4040/teams';



class Teams extends Component {
     constructor(props){
         super(props);

         this.state = {
             teams: [],
             filtered: [],
             keyword: ''
         }
     }


     componentDidMount(){
         fetch(TEAM_URL, {
             method: 'GET'
         }).then(res => res.json())
         .then(data => {
            // console.log(data)
                this.setState({
                    teams: data,
                    filtered: data
                })
            })
            .catch(err => console.log(`error occured: ${err}`))
     }


     renderList = ({filtered}) => {
        return filtered.map((item) => {
            return (
                <Link to={`/team/${item.name}`} key={item.id} className="team-item"> 
                    <img alt={item.name} src={`/images/teams/${item.logo}`} />
                </Link>
            ) 
        })
     }

     searchTeam = (event) => {
         const keyword = event.target.value;

         if(keyword !== ''){
            const list = this.state.teams.filter((item) => {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            })
            
            this.setState({
                filtered: list,
                keyword: keyword
            })
         }else{
             this.setState({
                 filtered: this.state.teams,
                 keyword: keyword
             })

         }
     }



     render() {
         return (
             <div className="team-component">
                 <div className="teams">
                    <input 
                    value = {this.state.keyword}
                    type="text" 
                    placeholder="search team....."
                    onChange={e => this.searchTeam(e)}/>
                 </div>

                 <div className="teams-container">
                    {this.renderList(this.state)}
                 </div>
             </div>
         );
     }
 }
 
 export default Teams;