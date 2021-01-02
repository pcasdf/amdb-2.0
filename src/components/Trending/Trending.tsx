import {useEffect} from 'react';
import {CATEGORIES, CategoryType} from '../../constants';

import './Trending.scss';

const {MOVIES, TV_SERIES} = CATEGORIES;
const TRENDING_TYPES = {
  [MOVIES]: 'Movies',
  [TV_SERIES]: 'TV Series'
};

interface TrendingProps {
  className: string;
  type: CategoryType;
}

const Trending = (props: TrendingProps) => {
  const {className, type} = props;

  useEffect(() => {
  }, []);

  return (
    <div className={className}>
      <h3 className="trending-header">
        Trending {TRENDING_TYPES[type]}
      </h3>
    </div>
  );
};

export default Trending;
