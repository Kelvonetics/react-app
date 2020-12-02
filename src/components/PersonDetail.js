import React, { Component } from 'react'
import { personDetail } from '../action';
import { connect } from 'react-redux';
import PersonDetailAlbum, { personDetailAlbum } from './PersonDetailAlbum';

export class PersonDetail extends Component
{

    componentDidMount()
    {
        this.props.personDetail(this.props.match.params.name)
    }


    render()
    {
        return (
            <div>
                {
                    this.props.person && this.props.person.map(p => {
                        return (
                            <div key={p.id}>
                                <div className="detailContainer">
                                    <div className="detailProfilePicContainer">
                                        <img src={`/Albums/${p.name}/${p.profile_pic}.jpeg`} className="detailProfilePic" alt="" />
                                    </div>

                                    <div className="detailRightSide">
                                        <div className="nameAndFollower">
                                            <h1>{p.profile_name}</h1>
                                            <button className="button">Follow</button>
                                            <button className="button">Message</button>
                                        </div>

                                        <div className="followerAndFollowing">
                                            <h1>{p.followers} <span>Follower</span></h1>
                                            <h1>{p.following} <span>Following</span></h1>
                                        </div>

                                        <div className="bio">
                                            <h1><span>About</span></h1>
                                            <p>{p.bio}</p>
                                        </div>                                       
                                        
                                    </div>
                                </div>   
                                
                                <div className="">
                                    <PersonDetailAlbum photos={p.albums} name={p.name}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        person : state.people.personDetail
    }
}

export default connect (mapStateToProps, {personDetail})(PersonDetail)
