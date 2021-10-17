import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getTrendingResults} from '../../redux/selectors/trendingSelectors';
import { RootState } from '../../redux/reducers';
import {fetchTrending} from '../../redux/slices/trendingSlice';
import {TRENDING_TYPES, CATEGORIES, LOADING_STATUSES} from '../../constants';
import {Category, Result} from '../../types';

import LeftArrow from '../../assets/icons/left-arrow.svg';
import RightArrow from '../../assets/icons/right-arrow.svg';
import './Trending.scss';

const {MOVIE, TV} = CATEGORIES;
const {NOT_LOADED} = LOADING_STATUSES;
const MAX_ITEMS_DISPLAYED = 5;

interface TrendingProps {
  className: string;
  type: Category;
}

const Trending = (props: TrendingProps) => {
  const {className, type} = props;
  const [carouselPosition, setCarouselPosition] = useState(0);
  const dispatch = useDispatch();
  const trendingData = useSelector((state: RootState) => getTrendingResults(state, type));
  const leftCarouselEnabled = carouselPosition > 0;
  const rightCarouselEnabled = carouselPosition < trendingData.results.length - MAX_ITEMS_DISPLAYED;

  useEffect(() => {
    if (trendingData.loadingStatus === NOT_LOADED) {
      dispatch(fetchTrending({type}));
    }
  }, [trendingData, type, dispatch]);

  return (
    <div className={`${className} trending-container`}>
      <h3 className="trending-header">
        Trending {TRENDING_TYPES[type]}
      </h3>
      <div className="trending-carousel">
        {
          leftCarouselEnabled && (
            <div className="carousel-left-arrow">
              <img src={LeftArrow} className="left-arrow-icon" alt="left"/>
            </div>
          )
        }
        <div className="trending-carousel-items">
          {
            trendingData.results.slice(carouselPosition, carouselPosition + MAX_ITEMS_DISPLAYED).map((movie: Result) => { 
              const {title, poster_path} = movie;
              return (
                <div key={title} className="carousel-item">
                  <img className="carousel-image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                </div>
              );
            })
          }
        </div>
        {
          rightCarouselEnabled && (
            <div className="carousel-right-arrow">
              <img src={RightArrow} className="right-arrow-icon" alt="left"/>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Trending;
