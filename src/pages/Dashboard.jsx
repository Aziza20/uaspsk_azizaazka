// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';
import NewsList from '../components/NewsDisaster/NewsList';
import NewsForm from '../components/NewsDisaster/NewsForm';
import VolcanoInformation from '../components/MountMerapiDashboard/VolcanoInformation';

const Dashboard = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1>Mount Merapi Dashboard</h1>
      <VolcanoInformation />
      <NewsForm />
      <NewsList news={news} />
    </div>
  );
};

export default Dashboard;