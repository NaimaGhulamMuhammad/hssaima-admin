import React from "react";
import {Layout} from "antd"
import Navbar from "./Navbar";
import logo from "../img/portal-logo.svg"
import {Link} from "react-router-dom"
import Routes from "../Routes";
import "./dashboard.css"
import SideMenu from "../components/sidebar/Menu";
export default function Dashboard() {

  const {Header, Sider,Content, Footer} = Layout
  const [width, setWidth] = React.useState(250)
  const [collapsed, setCollapsed] = React.useState(false)
  const handleClick = ()=>{
    setCollapsed(!collapsed)
    collapsed? setWidth(250) : setWidth(80)
    // console.log({collapsed,width})
  }
  return (
    <Layout>
    <Sider
      collapsible
      collapsed={collapsed}
      width={width}
      breakpoint="lg"
      collapsedWidth="80"
      onCollapse={handleClick}
      style={{position:"fixed",left:0,height:"100vh", borderRight:"2px solid #ebe8ef", boxShadow:"rgb(0 0 0 / 5%) 0px 8px 15px"}}
      theme="light"
    >
      <div className="logo"> Logo</div>
      <SideMenu />
    </Sider>
    <Layout style={{ marginLeft: `${width}px` }}>
      <Header className="site-layout-sub-header-background py-2 pl-5" style={{ padding: 0, backgroundColor:"#fff" }} >
      <Navbar collapsed={collapsed} handleClick={handleClick}/>
      </Header>
      <Content style={{backgroundColor:"#ececec" }} className=" pt-3 p-md-3 p-lg-4">
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <div class="container-xl"> 
        <Routes />
        </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ecommerce Store ©2021 </Footer>
    </Layout>
  </Layout>
      );
}
