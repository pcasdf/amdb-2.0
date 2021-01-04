import {useState, useEffect} from 'react';

import {fetchTrending} from '../../api';
import {TRENDING_TYPES, CATEGORIES} from '../../constants';
import {Category} from '../../types';

import './Trending.scss';

const {MOVIE, TV} = CATEGORIES;
interface TrendingProps {
  className: string;
  type: Category;
}

const Trending = (props: TrendingProps) => {
  const {className, type} = props;
  const [trending, setTrending] = useState<{} | null>(null);
  
  useEffect(() => {
    fetchTrending(type).then(response => {
      if (response?.status === 200) {
        setTrending(response.data)
      }
    });
  }, [type]);

  return (
    <div className={className}>
      <h3 className="trending-header">
        Trending {TRENDING_TYPES[type]}
      </h3>
    </div>
  );
};

export default Trending;
