import { ReactNode } from 'react';

type GlobalNavigationProps = {
  children: ReactNode;
  logo: ReactNode;
  expandable: boolean;
};

export function GlobalNavigation({
  children,
  logo,
  expandable,
}: GlobalNavigationProps) {
  const TRANSITION_OPTION = 'transition-all ease-in-out duration-1000';

  return (
    <header
      className={`h-[67px] bg-blue-100 px-2 py-4 fixed top-0 right-0 ${TRANSITION_OPTION} ${expandable ? 'w-calc-width' : 'w-full'}`}
    >
      <nav className='flex justify-between items-center'>
        {logo}
        {children}
      </nav>
    </header>
  );
}
