import {CATEGORIES} from '../../constants';

import Trending from '../../components/Trending';
import './Main.scss';

const {MOVIE, TV} = CATEGORIES;

const Main = () => {
  return (
    <div className="main">
      <Trending className="trending-movies" type={MOVIE}/>
      <Trending className="trending-movies" type={TV}/>
    </div>
  );
};

export default Main;
