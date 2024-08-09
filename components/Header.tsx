import Link from 'next/link';
import MobileNav from './MobileNav';
import Nav from './Nav';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* ロゴ */}
        <Link href={'/'}>
          <h1 className="text-4xl font-semibold">
            D.A<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* デスクトップ・ナビゲーションと雇用ボタン */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* TODO: ボタンのテキストを修正 */}
          <Link href={'https://github.com/digiangler/curriculum_vitae'}>
            <Button>職務経歴</Button>
          </Link>
        </div>

        {/* モバイル・ナビゲーション（ハンバーガーメニュー） */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
