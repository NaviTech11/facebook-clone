import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            <Post 
                profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu-tMGiUa6ofUSuJRP761hkHy1Vp4BOatd7-SFSt=s32-c-mo"
                message="Great stuff"
                timestamp="Sept 27 2020"
                username="Ivan H"
                image="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <Post 
                profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu-tMGiUa6ofUSuJRP761hkHy1Vp4BOatd7-SFSt=s32-c-mo"
                message="Great stuff"
                timestamp="Sept 27 2020"
                username="Ivan H"
               
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
