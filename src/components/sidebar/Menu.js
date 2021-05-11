import React from "react"
import { Menu } from 'antd';
import {BorderLeftOutlined, ContactsOutlined, FileProtectOutlined, FormOutlined, HomeOutlined, IdcardOutlined, PicCenterOutlined, PicLeftOutlined, PlusSquareOutlined, SlidersOutlined, SwapOutlined, TeamOutlined, UnorderedListOutlined, UserAddOutlined, UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import MenuItem from "antd/lib/menu/MenuItem";
import {Link} from "react-router-dom"


const { SubMenu } = Menu;


const SideMenu = ()=> {
    const menudata = [
        {
            title:"Dashboard",
            icon:<HomeOutlined  style={{fontSize:20}}/>,
            key:"/",
        },
        {
          title:"Products",
          icon:<BorderLeftOutlined style={{fontSize:20}} /> ,
          key:"products",
        //   subItems:[
        //       {
        //         subTitle:'available products',
        //         key:'products'
        //       },
        //       {
        //         subTitle:'Add Product',
        //         key:'addProduct'
        //       },
        //       {
        //         subTitle:'Edit Product',
        //         key:'Product'
        //       }
        //     ]
        },
        {
            title:"Brands",
            icon:<IdcardOutlined  style={{fontSize:20}}/>,
            key:"brands",
        },
        {
            title:"Coupuns",
            icon:<TeamOutlined  style={{fontSize:20}}/>,
            key:"coupons",
        },
        {
            title:"Reviews",
            icon:<PicCenterOutlined style={{fontSize:20}} />,
            key:"reviews",
        },
        {
            title:"Variations",
            icon:<SwapOutlined style={{fontSize:20}} />,
            key:"variations",
        },
        {
            title:"All clients",
            icon:<SlidersOutlined style={{fontSize:20}} />,
            key:"clients",
        },
        {
            title:"Categories",
            icon:<FileProtectOutlined style={{fontSize:20}}  />,
            key:"categories",
        },
        {
            title:"Blogs",
            icon:<SwapOutlined style={{fontSize:20}} />,
            key:"blogs",
        },
        {
            title:"Orders",
            icon:<ContactsOutlined style={{fontSize:20}} />,
            key:"orders",
        },
        {
            title:"User Profile",
            icon:<UserOutlined  style={{fontSize:20}}/>,
            key:"sub4",
            subItems:[
                {
                    subTitle:"Account",
                    key:"/profile",
                },
                {
                    subTitle:"Setting",
                    key:"/setting",
                },
            ]
        }
    ]

    return(
        <Menu mode="inline" defaultSelectedKeys={['/']} onClick={(e)=>console.log(e.domEvent)}>
           { menudata.map(menu => {
               const {key, title, icon, subItems}  = menu
               return(
                   subItems? 
                    <SubMenu key={key} icon={icon} title={title}  className="submenu-list list-unstyled">  
                    {subItems.map( submenu => 
                    {const {subTitle,icon, key} = submenu;
                    return(
                        <MenuItem key={key} className="submenu-item" icon={icon} ><Link to={`/${key}`}>{subTitle}</Link></MenuItem>
                    )}

                    )}
                    </SubMenu>
                     :
                <Menu.Item key={key} icon={icon} className="nav-item" ><Link to={`/${key}`}>{title}</Link></Menu.Item>
                    
               )}
           )}
    </Menu>
    )
}
export default SideMenu