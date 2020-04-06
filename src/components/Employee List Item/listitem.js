import React from "react";
import Row from "../Row/index.js";
import Col from "../Col/index.js";
import "./style.css";

function ListItem(props) {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <Row>
            <Col size="md-3">{props.lastName}</Col>
            <Col size="md-3">{props.firstName}</Col>
            <Col size="md-2">{props.phone}</Col>
            <Col size="md-2">{props.email}</Col>
          </Row>
        </li>
      </ul>
    </div>
  );
}

export default ListItem;
