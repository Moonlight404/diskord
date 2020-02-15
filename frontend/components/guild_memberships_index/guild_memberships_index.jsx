import React from 'react';
import { Link } from 'react-router-dom';

class GuildMembershipsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {guilds: []}
  }

  componentDidMount(){
    const {fetchGuildMemberships, currentMemberId} = this.props;
    fetchGuildMemberships(currentMemberId)
  }

  handleGuildCreation(e){
    e.preventDefault();
  }
  
  render(){
    const { guilds } = this.props;
    return(
      <div className="guild_memberships_index">
        <Link to={`/channels/@me`}>Home</Link>
        {guilds.map(guild => <Link key={`guild-${guild.id}`} to={`/channels/${guild.id}/`}>{guild.name}</Link>)}}
        <a href="#/channels/@me">+</a>
      </div>
    )
  }
}

export default GuildMembershipsIndex;