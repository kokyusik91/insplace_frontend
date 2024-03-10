import CategoryButtonList from '@/entities/category/ui/CategoryButtonList';
import { getAllPlaces, getHotPlaces } from '@/entities/places/api';
import HotPlaceCard from '@/entities/places/ui/HotPlaceCard';
import { getTodaysWeather } from '@/entities/weather/api';
import ReactLogo from '@assets/react.svg';
import { Placeitem } from '@repo/ui/components';
import { GlobalNavigation, MainContents } from '@repo/ui/components/layout';
import { useQuery } from '@tanstack/react-query';
import { ChevronsLeft, Key, Sparkles, UserRound } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SIDEBAR_WIDTH = 280;
const TRANSITION_OPTION = 'transition-all ease-in-out duration-1000';

function Main() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [categoryId, setCategoryId] = useState(1);

  const { data: places } = useQuery({
    queryKey: ['places', 'all'],
    queryFn: getAllPlaces,
  });

  const { data: todayWeather } = useQuery({
    queryKey: ['weather'],
    queryFn: getTodaysWeather,
  });

  console.log(todayWeather);

  const { data: hotPlaces } = useQuery({
    queryKey: ['places', 'hot'],
    queryFn: getHotPlaces,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const toggleClick = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  const handleClickCategoryButton = (id: number) => {
    setCategoryId(id);
  };

  return (
    <div className='flex'>
      <aside
        className={`w-[300px] z-40 h-full px-10 py-5 fixed top-0 left-0 bg-orange-300 ${TRANSITION_OPTION} ${isSideBarOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}
      >
        <h1 className='text-2xl text-center text-gray-800 font-bold mb-8'>
          핫플 🔥
        </h1>
        <button
          onClick={toggleClick}
          className='w-10 h-10 bg-orange-300 rounded-r-xl	flex justify-center items-center absolute right-[-40px] top-20'
        >
          {isSideBarOpen ? (
            <ChevronsLeft className='text-white' />
          ) : (
            <Sparkles className='text-white' />
          )}
        </button>
        <ul>
          {hotPlaces?.map((item) => (
            <HotPlaceCard key={item.id} place={item} />
          ))}
        </ul>
      </aside>
      <div className={`flex-1`}>
        <GlobalNavigation
          expandable={isSideBarOpen}
          logo={
            <img
              className='animate-spin'
              src={ReactLogo}
              alt='react-logo'
              width={35}
              height={35}
            />
          }
        >
          <div className='flex gap-4 items-center'>
            <div className='flex items-center gap-4 mr-4'>
              <h1 className='text-4xl'>☀️</h1>
              <div>
                <h1 className='text-sm text-gray-600 font-bold'>
                  {todayWeather?.temperature}°C
                </h1>
                <h2 className='text-sm text-gray-500 font-medium'>
                  {todayWeather?.label}
                </h2>
              </div>
            </div>
            <Link to='/login'>
              <Key />
            </Link>
            <Link to='/signup'>
              <UserRound />
            </Link>
          </div>
        </GlobalNavigation>
        <MainContents expandable={isSideBarOpen}>
          <h1 className='text-3xl text-gray-800 font-bold mb-4'>
            모든 장소 👀
          </h1>
          <CategoryButtonList
            handleClick={handleClickCategoryButton}
            categoryId={categoryId}
          />
          <ul className='flex flex-wrap gap-12 '>
            {places?.map((item) => <Placeitem key={item.id} place={item} />)}
          </ul>
        </MainContents>
      </div>
    </div>
  );
}

export default Main;
