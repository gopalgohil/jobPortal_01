import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-2 border-t border-gray-300 shadow-sm">
      <img src={assets.logo} alt="" />
      {/* <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @gopalgohel.dev | All right reserved.
      </p> */}
      <div className="flex gap-2.5">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <img src={assets.facebook_icon} alt="Facebook" width={38} />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img src={assets.twitter_icon} alt="Twitter" width={38} />
  </a>

  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <img src={assets.instagram_icon} alt="Instagram" width={38} />
  </a>
</div>
    </div>
  );
};

export default Footer;
