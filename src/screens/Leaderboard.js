import React from 'react';
import { Table } from 'antd';

const Leaderboard = ({ data }) => {
    const columns = [
        {
            title: 'Hạng',
            dataIndex: 'ranking',
            key: 'ranking',
        },
        {
            title: 'Thành viên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số km',
            dataIndex: 'distance',
            key: 'distance',
        },
    ];

    return (
        <div>
            <Table
                dataSource={data}
                columns={columns}
                scroll={{ x: 'max-content' }}
            />
        </div>
    );
};

export default Leaderboard;
