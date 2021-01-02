import {CATEGORIES} from '../../constants';

import Trending from '../../components/Trending';
import './Main.scss';

const {MOVIES, TV_SERIES} = CATEGORIES;

const Main = () => {
  return (
    <div className="main">
      <Trending className="trending-movies" type={MOVIES}/>
      <Trending className="trending-movies" type={TV_SERIES}/>
    </div>
  );
};

export default Main;
