import React from "react";
import { Button } from "react-bootstrap";
import a from "./LearningVideoModule.module.css";

class LearningVideoModule extends React.Component {
  state = {
    VideoModuleTitle: "Kpop Music Videos",
    VideoModuleTopic: "Kpop",
    TotalVideos: 5,
    VideoModuleDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem eaque placeat!",
    VideoLinks: [
      <div>
        <div>Title</div>
        <br />
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/mAKsZ26SabQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>,
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/IHNzOHi8sJs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>,
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/bwmSjveL3Lc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>,
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/jeI992mvlEY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>,
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/wxDHQT0iBKM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>,
    ],
    currentVid: 0,
    videoList: [],
  };


  render() {
    return (
      <div className={a.wrapper}>
        <div className={a.container}>
          <div className={a.sideNav}>
            <h6>
              <center>Video Navigation</center>
            </h6>
            <hr /> {/* below is how the navigation links are mapped */}
            {this.state.VideoLinks.map((currentVid, i) => (
              <center>
                <a
                  href="#blank"
                  onClick={() => this.setState({ currentVid: i })}
                >
                  {this.state.currentVid === i ? (
                    <i class="fas fa-arrow-alt-circle-right"></i>
                  ) : (
                    ""
                  )}{" "}
                  Video Number {i + 1} <br />
                </a>
              </center>
            ))}
          </div>
          <h3>{this.state.VideoModuleTitle}</h3>
          <hr />
          <h5>Module Topic: {this.state.VideoModuleTopic}</h5>
          <h5>
            Total Number of Videos in this Module: {this.state.TotalVideos}
          </h5>
          <div>
              <h5>Module Description:</h5> {this.state.VideoModuleDescription}
          </div>
          <hr />
          <div>
            Video Number: {this.state.currentVid + 1} / {this.state.TotalVideos}
          </div>
          <br />
          <div>{this.state.VideoLinks[this.state.currentVid]}</div>
          <br /> {/* below is how the next and previous buttons rendered */}
          {this.state.currentVid > 0 ? (
            <span>
              {" "}
              <Button
                onClick={() =>
                  this.setState({ currentVid: this.state.currentVid - 1 })
                }
              >
                Previous Video
              </Button>
            </span>
          ) : (
            ""
          )}

          {this.state.currentVid < this.state.TotalVideos - 1 ? (
            <span className={a.nextButton}>
              <Button
                onClick={() =>
                  this.setState({ currentVid: this.state.currentVid + 1 })
                }
              >
                Next Video
              </Button>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default LearningVideoModule;

//the new way we'll render this page
/* state={
  videolist:[{
    videoTitle:"somevideo",
    iframeTag:"<iframe ...></iframe>"
  }]
}

createVideoLinks=()=>{
  let VideoLinks=this.state.videolist.map(video=>{
    return(
      <div>
        <div>video.videoTitle</div>
        <br/>
        {this.returnIframe(iframeTag)}
      </div>
    )
  })
  return VideoLinks;
}

render(){
  VideoLinks=this.createVideoLinks();
} */