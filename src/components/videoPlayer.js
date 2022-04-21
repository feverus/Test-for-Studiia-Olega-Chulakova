import React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player'
import VisibilitySensor from "react-visibility-sensor";
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

function click(props, played)  {
    console.log(props);
    console.log(played);
    props.doStopAutoPlay();
    if (played) {
        props.doPlayPauseVideo("stop")
    } else {
        props.doPlayPauseVideo(props.id)
    }
}

class VideoPlayer_i extends React.Component  {
    render() {
        let played = (this.props.id===this.props.played)?true:false;
        let on = this.props.autoPlayOn;        
        let videoIndent = (window.screen.availHeight * 0.5) -300;   
        if (videoIndent<150) {videoIndent = 150}
        if (window.screen.availHeight<400) {videoIndent = 0}
        return (       
            <VisibilitySensor
                onChange={(isVisible) => {if (on) {this.props.doPlayPauseVideo(this.props.id)}}}
                intervalDelay={10}
                offset={{top:150, bottom:videoIndent}}>
                    <>
                   {(on)?
                        <span className='disable-autoplay'
                        onClick={()=>click(this.props, played)}>
                            &nbsp;
                        </span>:<></>                 
                   }                    
                   {(on)?
                        <ReactPlayer
                            url={this.props.src}
                            loop={true} width="100%" height="100%"
                            muted={true} playing={played} controls={false}
                        />
                    :   
                        <ReactPlayer
                            url={this.props.src}
                            loop={true} width="100%" height="100%"
                            muted={false} controls={true}
                        /> 
                   }
                    </> 
            </VisibilitySensor>
        )
    }
}

const VideoPlayer = connect(mapStateToProps("VideoPlayer"), mapDispatchToProps("VideoPlayer"))(VideoPlayer_i);
export default VideoPlayer;