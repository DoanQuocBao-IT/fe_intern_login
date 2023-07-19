import React from 'react'
import { Button, Row, Col, Card, Image} from 'antd';

const Enterprise = ({events}) => {
  return (
    <div>
      <h2>Giải nội bộ doanh nghiệp</h2>
      <Row gutter={[16, 16]}>
        <Col span={12} lg={6} md={12} sm={24}>
        {events.slice(0,3).map((event, index) => (
            <button key={index} style={{ marginBottom: '10px' }}>
                <img src={event.image} alt={event.title} style={{ maxWidth: '100%', height: 'auto' }} />
            </button>
        ))}
        </Col>
        <Col span={12} lg={6} md={12} sm={24}>
        {events.slice(3,6).map((event, index) => (
            <button key={index} style={{ marginBottom: '10px' }}>
                <img src={event.image} alt={event.title} style={{ maxWidth: '100%', height: 'auto' }} />
            </button>
        ))}
        </Col>
      </Row>
    </div>
  )
}

export default Enterprise