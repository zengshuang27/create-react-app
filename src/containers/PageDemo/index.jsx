import React, { useState, useEffect } from "react";
import { Layout, Table, Descriptions } from "antd";
import "./style.scss";
import img from "../../static/images/logo.png"

const { Header, Footer, Sider, Content } = Layout;

const PageDemo = () => {
  const [header,setHeader] = useState('注塑入库');
  const [footer,setFooter] = useState('快乐人生 吉利相伴');
  const [currentDate,setCurrentDate] = useState('');
  const [currentTime,setCurrentTime] = useState('');
  const [tableData, setTableData] = useState([
    {
      equipment: '注塑机1',
      type: '',
      productTap: '',
      targetNum: '',
      addNum: '',
      unqualifiedNum: '',
      moveEfficient: '',
    },
    {
      equipment: '注塑机2',
      type: '',
      productTap: '',
      targetNum: '',
      addNum: '',
      unqualifiedNum: '',
      moveEfficient: '',
    },
    {
      equipment: '注塑机3',
      type: '',
      productTap: '',
      targetNum: '',
      addNum: '',
      unqualifiedNum: '',
      moveEfficient: '',
    }
  ])
  const [des, setDes] = useState([
    {
      label: '当班计划',
      value: ''
    },
    {
      label: '理论产量',
      value: ''
    },
    {
      label: '实际产量',
      value: ''
    },
    {
      label: '不良产量',
      value: ''
    },
    {
      label: '作业时间',
      value: ''
    },
    {
      label: '停线时间',
      value: ''
    },
    {
      label: '稼动率',
      value: ''
    },
    {
      label: 'FTT',
      value: ''
    },
  ])

  const columns = [
    {
      title: '设备',
      dataIndex: 'equipment',
      key: 'equipment',
      className: 'table-td'
    },
    {
      title: '型号',
      dataIndex: 'type',
      key: 'type',
      className: 'table-td'
    },
    {
      title: '生产节拍',
      dataIndex: 'productTap',
      key: 'productTap',
      className: 'table-td'
    },
    {
      title: '目标件数',
      dataIndex: 'targetNum',
      key: 'targetNum',
      className: 'table-td'
    },
    {
      title: '加工数量',
      dataIndex: 'addNum',
      key: 'addNum',
      className: 'table-td'
    },
    {
      title: '不合格数量',
      dataIndex: 'unqualifiedNum',
      key: 'unqualifiedNum',
      className: 'table-td'
    },
    {
      title: '稼动率',
      dataIndex: 'moveEfficient',
      key: 'moveEfficient',
      className: 'table-td'
    },
  ]

  useEffect(() => {
    setInterval(function () {
      nowTime()
    }, 1)
  }, [])

  const nowTime = () => {
    let now = new Date();
    let _month = (10 > (now.getMonth() + 1)) ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
    let _day = (10 > now.getDate()) ? '0' + now.getDate() : now.getDate();
    let _hour = (10 > now.getHours()) ? '0' + now.getHours() : now.getHours();
    let _minute = (10 > now.getMinutes()) ? '0' + now.getMinutes() : now.getMinutes();
    let _second = (10 > now.getSeconds()) ? '0' + now.getSeconds() : now.getSeconds();
    let currentDate =  now.getFullYear() + '-' + _month + '-' + _day;
    let currentTime =  _hour + ':' + _minute + ':' + _second;
    setCurrentDate(currentDate)
    setCurrentTime(currentTime);
  }

  return (
    <div>
      <Layout className="layout-container">
        <Header className="bg">
          <div className="layout-header">
            <div className="left">
              <img src={img} alt="" />
            </div>
            <div className="center">{header}</div>
            <div className="right">
              <p>{currentDate}</p>
              <p>{currentTime}</p>
            </div>
          </div>
        </Header>

        <Content className="bg layout-content" style={{ borderTop: '3px solid #fff' }}>
          <div className="space-align-container">
            <div className="space-align-block"> 注塑机1</div>
            <div className="space-align-block yellow">注塑机2</div>
            <div className="space-align-block">注塑机3 </div>
          </div>

          <div className="layout-margin-top">
            <Table
              columns={columns}
              dataSource={tableData}
              pagination={false}
            />
            <div className="layout-margin-top">
              <Descriptions size="small" column={4}>
                {
                  des && des.map((item, i) => (
                    <Descriptions.Item label={item.label} key={item.label}>{item.value}</Descriptions.Item>
                  ))
                }
              </Descriptions>
            </div>
          </div>
        </Content>

        <Footer className="bg layout-footer">{footer}</Footer>
      </Layout>
    </div>
  )

}

export default PageDemo;