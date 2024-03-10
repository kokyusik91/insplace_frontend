import Image from 'next/image';

import TurboLogo from './favicon.ico';
import { GlobalNavigation } from '@repo/ui/components/layout';
import { Button } from '@repo/ui/components';

export default function Page(): JSX.Element {
  return (
    <main>
      <GlobalNavigation
        logo={<Image src={TurboLogo} alt='터보로고' width={35} height={35} />}
      >
        <div className='flex gap-4 items-center'>
          <div>오늘의 날씨</div>
          <Button appName='app' variants={{ variant: 'default', size: 'sm' }}>
            로그인
          </Button>
          <Button appName='app' variants={{ variant: 'default', size: 'sm' }}>
            회원가입
          </Button>
        </div>
      </GlobalNavigation>
    </main>
  );
}
