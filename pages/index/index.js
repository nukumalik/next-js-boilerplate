import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../../layouts/Main';
import { getPosts } from '../../store/sample/actions';

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.sample);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return <Main>Hello{posts && posts.map((value) => <div key={value}>{value}</div>)}</Main>;
};

export default Home;
