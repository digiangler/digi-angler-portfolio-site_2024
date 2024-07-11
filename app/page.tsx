import Social from '@/components/Social';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{' '}
              <span className="text-accent">Digi-Angler</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">
              私はエレガントなデジタル体験を作り出すことに優れており、さまざまなプログラミング言語とテクノロジーに精通しています。
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
