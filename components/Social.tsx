import Link from 'next/link';
import {
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaSquareThreads,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/digiangler' },
  { icon: <FaXTwitter />, path: 'https://x.com/digiangler' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/digi_angler' },
  { icon: <FaSquareThreads />, path: 'https://www.threads.net/@digi_angler' },
  {
    icon: <FaYoutube />,
    path: 'https://www.youtube.com/channel/UCAlLW_0NrcdzUKdnt9tqLOQ',
  },
  {
    icon: <FaSpotify />,
    path: 'https://open.spotify.com/user/7zkt2748z5boqwalbplgbmnbx',
  },
];

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
