import React from "react";
import { Button, Row, Col, Card, Image } from "antd";

const Enterprise = ({ events }) => {
  return (
    <div>
      <h2>Giải nội bộ doanh nghiệp</h2>
      <Row>
        <Col lg={12} md={12} xs={24}>
          {events.slice(0, 3).map((event, index) => (
            <button className="button" key={index} style={{ marginBottom: "10px" }}>
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
          {events.slice(3, 6).map((event, index) => (
            <button className="button" key={index} style={{ marginBottom: "10px" }}>
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

export default Enterprise;
