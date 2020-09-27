import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            profileSrc= "https://lh3.googleusercontent.com/ogw/ADGmqu-tMGiUa6ofUSuJRP761hkHy1Vp4BOatd7-SFSt=s32-c-mo"
            title="Ivan Hernandez"   
            />
            <Story image="https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            profileSrc= "https://lh3.googleusercontent.com/-20KRdi98tlg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnQ15iroprPcheP31422eXD80zcVA/s48-c/photo.jpg"
            title="John Ashburn"   
            />
            <Story image="https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            profileSrc= "https://images.unsplash.com/profile-1466918414579-55949450abeb?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            title="Trent Ovell"   
            />
            <Story image="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            profileSrc= "https://images.unsplash.com/profile-fb-1463158455-a8bc962daa0f.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            title="Anton D."   
            />
            <Story image="https://images.unsplash.com/photo-1504731083966-70c4cb10e1ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            profileSrc= "https://images.unsplash.com/profile-1531112521400-3a8700c7470e?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            title="Helen Rumo"   
            />
            
        </div>
    )
}

export default StoryReel
