import Link from 'next/link';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/digi-angler' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/digiangler/' },
  { icon: <FaTwitter />, path: 'https://x.com/digiangler' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/digiangler/' },
  {
    icon: <FaYoutube />,
    path: 'https://www.youtube.com/channel/UCAlLW_0NrcdzUKdnt9tqLOQ',
  },
];

const Social = () => {
  return <div>Socials</div>;
};
/* TODO: 59:48からYouTune再生 */
export default Social;
