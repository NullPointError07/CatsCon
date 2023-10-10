import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#034690] text-white flex justify-around items-baseline py-4 px-2 ">
      <div className="space-y-2">
        <div className="flex items-end">
          <Image src="/CatsIcon.png" alt="CatsIcon" width={75} height={25} />
          <h1 className=" text-2xl">CatsCon</h1>
        </div>
        <h1>Cats Con Pte Ltd</h1>
        <p>UEN: 202126955R</p>
        <p>Registered address</p>
        <p>
          22-03A International Plaza,
          <br />
          10 Anson Road, Singapore 079903
        </p>
        <p>Available on iOS and Android</p>
        <div className="flex space-x-3">
          <Image
            src="/googleplaystoreIcon.png"
            alt="playstore-icon"
            width={128}
            height={28}
          />
          <Image
            src="/AppStore.png"
            alt="appstore-icon"
            width={128}
            height={28}
          />
        </div>
      </div>
      <div className="space-y-5">
        <h1>General Enquiries</h1>
        <p className="flex items-center gap-2">
          <AiOutlineMail />
          support@realezy.com
        </p>
        <div className="flex space-x-2">
          <Link href={"https://www.facebook.com/"}>
            <BsFacebook size={40} />
          </Link>
          <Link href={"https://www.instagram.com/"}>
            <BsInstagram size={40} />
          </Link>
        </div>
      </div>
      <div className="space-y-5">
        <h1>Site Map</h1>
        <ul className="space-y-2">
          <li>About Us</li>
          <li>Benefits</li>
          <li>Help & Support</li>
        </ul>
      </div>
      <div className="space-y-5">
        <h1>Catagories</h1>
        <ul className="space-y-2">
          <li>HBD</li>
          <li>Condos</li>
          <li>Landed</li>
          <li>Whole Unit</li>
          <li>Room</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
