import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';
import { Button } from 'antd';

function Users({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <UsersComponent />
      </div>
    </MainLayout>
  );
}
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        Click me
      </Button>
    );
  }
}

export { LoggingButton };
export default connect()(Users);