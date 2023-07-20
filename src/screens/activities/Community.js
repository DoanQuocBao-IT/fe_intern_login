import React from "react";
import { Row, Col } from "antd";
import "../../App.css";

const Community = ({ events }) => {
  return (
    <div>
      <h2>Giải chạy cộng đồng</h2>
      <Row justify="space-around" align="middle">
        <Col lg={12} md={12} xs={24}>
          {events.slice(0, 2).map((event, index) => (
            <button
              className="button"
              key={index}
              style={{ marginBottom: "10px", width: "100%", textAlign: "left" }}>
              <img
                className="img"
                src={event.image}
                alt={event.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <span className="title">{event.title}</span>
            </button>
          ))}
        </Col>
        <Col lg={12} md={12} xs={24}>
          {events.slice(2, 4).map((event, index) => (
            <button
              className="button"
              key={index}
              style={{ marginBottom: "10px", width: "100%", textAlign: "left" }}>
              <img
                className="img"
                src={event.image}
                alt={event.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <span className="title">{event.title}</span>
            </button>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Community;
