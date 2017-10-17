import React from 'react';
import {Link} from 'react-router';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {connect} from 'dva';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
import './home-layout.less';

class HomeLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sub1s: [],
    };
  }

  componentDidMount() {
    // this.setState({
    //   sub1s:['option1','option2','option3','option6']
    // })
    // this.props.dispatch({
    //   type: 'homes/querySuccess',
    // });
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{background: '#fff'}}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{height: '100%', borderRight: 0}}
            >
              <SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
                {this.props.homes.sub1s.map((item, index) =>
                  <Menu.Item key={index}>{item}</Menu.Item>
                )}

              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{padding: '0 24px 24px'}}>
            <Breadcrumb style={{margin: '12px 0'}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>);
  }
}
function mapStateToProps(homes) {
  return homes;
}
export default connect(mapStateToProps)(HomeLayout);

