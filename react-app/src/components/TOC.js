import React, { Component } from "react";

class TOC extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/contents/" + data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return <ul>{lists}</ul>;
  }
}

export default TOC;
