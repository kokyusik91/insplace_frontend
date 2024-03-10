import { getAllPlaces } from '@/entities/places/api';
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

  const { data: places } = useQuery({
    queryKey: ['places', 'all'],
    queryFn: getAllPlaces,
  });

  const toggleClick = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <div className='flex'>
      <aside
        className={`w-[260px] z-40 h-full px-10 py-5 fixed top-0 left:0 bg-orange-300 ${TRANSITION_OPTION} ${isSideBarOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}
      >
        <h1 className='text-2xl text-center text-white'>Place ⭐️</h1>
        <button
          onClick={toggleClick}
          className='w-10 h-10 bg-orange-300 rounded-r-xl	 flex justify-center items-center absolute right-[-40px] top-20'
        >
          {isSideBarOpen ? (
            <ChevronsLeft className='text-white' />
          ) : (
            <Sparkles className='text-white' />
          )}
        </button>
      </aside>
      <div className={`flex-1`}>
        <GlobalNavigation
          expandable={isSideBarOpen}
          logo={<img src={ReactLogo} alt='react-logo' width={35} height={35} />}
        >
          <div className='flex gap-4 items-center'>
            <h1 className='text-3xl'>☀️</h1>
            <Link to='/login'>
              <Key />
            </Link>
            <Link to='/signup'>
              <UserRound />
            </Link>
          </div>
        </GlobalNavigation>
        <MainContents expandable={isSideBarOpen}>
          <h1 className='text-3xl text-gray-800 font-bold mb-4'>모든 장소</h1>
          <ul className='flex flex-wrap gap-12 '>
            {places?.map((item) => <Placeitem key={item.id} place={item} />)}
          </ul>
        </MainContents>
      </div>
    </div>
  );
}

export default Main;
