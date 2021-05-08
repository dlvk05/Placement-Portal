import React from "react";
import {Form, Button, Col} from 'react-bootstrap';
import readXlsxFile from 'read-excel-file';

const styles={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aliceblue",
    height: "100vh"
}

const innerDiv={
    border: "solid 2px silver",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5",
    padding: "20px"
}

class PracticeContainer extends React.Component{
  state={
    selectedFile: null,
  }

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  onSubmitHandler=event=>{
    // let SelectedRegNos=[];
    // readXlsxFile(this.state.selectedFile)
    // .then(rows=>{
    //   let index=rows[0].indexOf('RegNo');
    //   let i;
    //   for(i=1;i<rows.length;i++){
    //     SelectedRegNos.push(rows[i][index]);
    //   }
    //   console.log(rows)
    //   console.log(SelectedRegNos)
    // })
    
    let quizData=[];
    readXlsxFile(this.state.selectedFile)
    .then(rows=>{
      let temp={
        question:null,
        option1:null,
        option2:null,
        option3:null,
        option4:null,
        correctOption:null,
      }
      let i;
      for(i=1;i<rows.length;i++){
        temp.question=rows[i][0];
        temp.option1=rows[i][1];
        temp.option2=rows[i][2];
        temp.option3=rows[i][3];
        temp.option4=rows[i][4];
        temp.correctOption=rows[i][5];
        quizData.push(temp);
      }
      console.log(rows)
      console.log(quizData)
    })

    console.log(this.state.selectedFile)
  }

  render(){
    return(
      <div style={styles}>
          <div style={innerDiv}>
              <h3>here you go</h3>
              <hr />
              <div>
              <Form.Group as={Col}>
                <Form.Row>
                  <Form.Label column="sm">Upload Document</Form.Label>
                  <Form.File Placeholder="Upload Doc" size="sm" onChange={this.onFileChange} />
                </Form.Row>
              </Form.Group>
              </div>
              <Button onClick={this.onSubmitHandler} >Click Me!!</Button>
          </div>
      </div>
    );
  }
}

export default PracticeContainer;