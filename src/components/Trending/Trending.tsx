import {useEffect} from 'react';
import {TRENDING_TYPES} from '../../constants';
import {Category} from '../../types';

import './Trending.scss';
interface TrendingProps {
  className: string;
  type: Category;
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
