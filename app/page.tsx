import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* NOTE: 自己紹介 ヘッドコピー */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{' '}
              <span className="text-accent">Digi-Angler</span>
            </h1>
            {/* REVIEW: ヘッドコピーを修正 */}
            <p className="max-w-[500px] mb-9 text-white">
              フルスタック開発のエキスパートとして、洗練されたデジタル体験をトータルでサポートします。
            </p>
            {/* NOTE: ダウンロードボタンとソーシャルリンク */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                {/* TODO: ダウンロードボタンのテキストを修正 */}
                <span>ダウンロード</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles={'flex gap-6'}
                  iconStyles={
                    'w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                  }
                />
              </div>
            </div>
          </div>
          {/* プロフィール写真 */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
