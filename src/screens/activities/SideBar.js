import React from "react";
import { Table } from "antd";

const SideBar = ({ title, tableData, tableColumns }) => {
  return (
    <div>
      <h2> {title}</h2>
      <Table
        style={{ width: "100%" }}
        dataSource={tableData}
        columns={tableColumns}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15"],
        }}></Table>
    </div>
  );
};

export default SideBar;
