import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    
  }
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/contents/" + data[i].id}
            data-id={data[i].id}
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }}
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
