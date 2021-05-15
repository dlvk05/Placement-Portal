import React from "react";
import a from "./LearningVideosFeed.module.css";
import { Form, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class LearningVideosFeed extends React.Component {
  state = {
    videoList: [
      {
        VideoModuleTitle: "Kpop Music Videos",
        VideoModuleTopic: "Kpop",
        TotalVideos: 5,
        VideoModuleDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem eaque placeat!",
        VideoLinks: [
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/mAKsZ26SabQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>,
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
      },
    ],
    videoListLoaded: false,
    Search: "",
    SortBy: null,
  };

  componentDidMount() {
    // console.log("component did mount");
    axios
      .get("/api/student/learningModules/getAllModules")
      .then((res) => {
        console.log("modules loaded");
        console.log(res.data);
        this.setState({
          videoList: res.data.modules,
          videoListLoaded: true,
        });
      })
      .catch((err) => {
        console.log(
          "error ocurred at /api/student/learningModules/getAllModules"
        );
        console.log(err);
      });
  }

  handlePageChange = (id) => {
    this.props.history.push("/LearningVideoModule/" + id);
  };

  inputChangeHandler = (event, inputIdentifier) => {
    console.log(inputIdentifier);
    console.log(event.target.value);
    this.setState({
      ...this.state,
      [inputIdentifier]: event.target.value,
    });
  };

  filterArray = (modules) => {
    if (modules.length > 0) {
      if (this.state.Search != "") {
        return modules.filter((LearningModule) => {
          if (
            LearningModule.VideoModuleTitle.toLowerCase().includes(
              this.state.Search.toLowerCase()
            ) ||
            LearningModule.VideoModuleTopic.toLowerCase().includes(
              this.state.Search.toLowerCase()
            )
          ) {
            return true;
          }
          return false;
        });
      } else {
        return modules;
      }
    } else {
      return modules;
    }
  };

  sortArray = (modules) => {
    if (modules.length <= 0 || this.state.SortBy == null) {
      return modules.reverse();
    } else {
      if (
        this.state.SortBy === "VideoModuleTitle" ||
        this.state.SortBy === "VideoModuleTopic" ||
        this.state.SortBy === "TotalVideos"
      ) {
        modules.sort((a, b) => {
          let fa = a[this.state.SortBy],
            fb = b[this.state.SortBy];

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      } else if (this.state.SortBy === "DateOfCreation") {
        modules.sort((a, b) => {
          let fa = new Date(a[this.state.SortBy]),
            fb = new Date(b[this.state.SortBy]);

          return fa - fb;
        });
      }
      return modules;
    }
  };

  render() {
    let filteredModules = [];
    console.log(this.state.videoList);
    filteredModules = this.filterArray(this.state.videoList);
    this.sortArray(filteredModules);
    let list;
    list =
      filteredModules.length === 0 ? (
        <div>Nothing to Show</div>
      ) : (
        filteredModules.map((currentVid, i) => (
          <tr key={i}>
            <td>
              <Link onClick={() => this.handlePageChange(currentVid._id)}>
                {currentVid.VideoModuleTitle}
              </Link>
            </td>
            <td>{currentVid.VideoModuleTopic}</td>
            <td>{currentVid.TotalVideos}</td>
            {/* <td>Unwatched</td> */}
          </tr>
        ))
      );

    return (
      <div className={a.wrapper}>
        <div className={a.container}>
          <h3>Learning Video Modules</h3>
          <hr />
          <div>
            <Form inline>
              <div>
                <Form.Group as={Col} controlId="SearchQuizes">
                  <Form.Row>
                    <Form.Label column="sm">
                      <i class="fas fa-search"></i> Search{" "}
                    </Form.Label>
                    <Form.Control
                      type="QuizSearch"
                      placeholder="Type Here"
                      required
                      size="sm"
                      onChange={(event, string) => {
                        this.inputChangeHandler(event, "Search");
                      }}
                    />
                  </Form.Row>
                </Form.Group>
              </div>
              <div>
                <Form.Group controlId="exampleForm.SelectCustom" as={Col}>
                  <Form.Row>
                    <Form.Label column="sm">Sort By</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      size="sm"
                      onChange={(event, string) => {
                        this.inputChangeHandler(event, "SortBy");
                        console.log("drop down is being read");
                      }}
                    >
                      <option eventkey="none" selected disabled hidden>
                        Please Select an Option
                      </option>
                      <option value="DateOfCreation" eventkey="1">
                        Created Date
                      </option>
                      <option value="VideoModuleTitle" eventkey="2">
                        Module Title
                      </option>
                      <option value="VideoModuleTopic" eventkey="3">
                        Module Topic
                      </option>
                      <option value="TotalVideos" eventkey="4">
                        Number of Videos
                      </option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </div>
            </Form>
            <hr />
            <br />
            <br />
            <Table>
              <thead>
                <tr>
                  <td>
                    <b>Module Title</b>
                  </td>
                  <td>
                    <b>Module Topic</b>
                  </td>
                  <td>
                    <b>Number of Videos</b>
                  </td>
                  {/* <td><b>Status</b></td> */}
                </tr>
              </thead>
              {list}
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default LearningVideosFeed;
