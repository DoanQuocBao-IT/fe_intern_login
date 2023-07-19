import React from 'react'
import { Button, Row, Col} from 'antd';

const Community = ({events}) => {
  return (
    <div>
      <h2>Community</h2>
      <Row gutter={[16, 16]}>
        <Col span={12} lg={6} md={12} sm={24}>
        {events.slice(0,2).map((event, index) => (
            <button key={index} style={{marginBottom: '10px', width: '100%', textAlign: 'left' }}>
                <img src={event.image} alt={event.title} style={{ maxWidth: '100%', height: 'auto' }} />
            </button>
        ))}
        </Col>
        <Col span={12} lg={6} md={12} sm={24}>
        {events.slice(2,4).map((event, index) => (
            <button key={index} style={{marginBottom: '10px' , width: '100%', textAlign: 'left' }}>
                <img src={event.image} alt={event.title} style={{ maxWidth: '100%', height: 'auto' }} />
            </button>
        ))}
        </Col>
      </Row>
    </div>
  )
}

export default Community