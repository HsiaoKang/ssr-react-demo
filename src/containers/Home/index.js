import React, { useEffect } from "react";
import { connect } from "react-redux";
import withStyles from 'isomorphic-style-loader/withStyles'

import { getHomeList } from "./store/actions";

import styles from "./style.css";
const Home = props => {
  useEffect(() => {
    // FIXME: 业务代码和项目SSR的架构耦合在了一起
    // 避免第一次加载页面后重复获取数据
    if (props.list.length) return;
    props.getHomeList();
  }, []);

  const getList = () => {
    const { list } = props;

    return list.map(item => <div key={item.id}>{item.name}</div>);
  };

  return (
    <div className={styles.home}>
      <p>home</p>
      <h1>{props.name}</h1>
      {getList()}
    </div>
  );
};

// 服务器渲染前加载需要的数据
Home.loadData = store => {
  return store.dispatch(getHomeList());
};

const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.list
});
const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
