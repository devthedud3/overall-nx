import { FaXTwitter } from 'react-icons/fa6';
import {
  PiInstagramLogoDuotone,
  PiYoutubeLogoDuotone,
  PiDiscordLogoFill,
  PiCheckCircleFill,
  PiXCircleFill,
} from 'react-icons/pi';

export const IC: { [key: string]: any } = {
  twitter: <FaXTwitter size={20} />,
  instagram: <PiInstagramLogoDuotone size={20} />,
  youtube: <PiYoutubeLogoDuotone size={20} />,
  discord: <PiDiscordLogoFill size={20} />,
  check: <PiCheckCircleFill size={15} color="lime" />,
  notCheck: <PiXCircleFill size={15} color="pink" />,
};
