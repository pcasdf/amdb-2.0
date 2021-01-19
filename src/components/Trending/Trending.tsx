import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getTrendingResults} from '../../redux/selectors/trendingSelectors';
import { RootState } from '../../redux/reducers';
import {fetchTrending} from '../../redux/slices/trendingSlice';
import {TRENDING_TYPES, CATEGORIES, LOADING_STATUSES} from '../../constants';
import {Category} from '../../types';

import './Trending.scss';

const {MOVIE, TV} = CATEGORIES;
const {SUCCESS} = LOADING_STATUSES;

interface TrendingProps {
  className: string;
  type: Category;
}

const Trending = (props: TrendingProps) => {
  const {className, type} = props;
  const dispatch = useDispatch();
  const existingData = useSelector((state: RootState) => getTrendingResults(state, type));
  const [trending, setTrending] = useState<{} | null>(null);

  useEffect(() => {
    if (existingData.loadingStatus !== SUCCESS) {
      dispatch(fetchTrending(type));
    }
  }, [existingData, type, dispatch]);

  return (
    <div className={className}>
      <h3 className="trending-header">
        Trending {TRENDING_TYPES[type]}
      </h3>
    </div>
  );
};

export default Trending;
