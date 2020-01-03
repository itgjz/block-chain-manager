import React from 'react';
import { NavLink } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import menus from '../../utils/menus'
const { Header, Content, Footer, Sider } = Layout;

export default ({ app, layout, dispatch, children }) => {
    const { collapsed } = layout

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={() => { dispatch({ type: 'layout/onCollapse' }); }}>
                <div className="logo" style={{
                    height: '32px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    margin: '16px',
                }} />
                <Menu theme="dark" mode="inline">
                    {menus.map(menu => {
                        return (
                            <Menu.Item key={menu.path}>
                                <Icon type={menu.icon} />
                                <span>{menu.title}</span>
                                <NavLink to={menu.path}><span>{menu.title}</span></NavLink>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>留言管理</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>哲涵信息科技</Footer>
            </Layout>
        </Layout>
    );
}