import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }

  render() {
    let _title = null;
    let _desc = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        i = i + 1;
      }
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        />
        <TOC
          data={this.state.contents}
          onChangePage={function () {
            this.setState({
              mode: "read",
            });
          }.bind(this)}
        />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
