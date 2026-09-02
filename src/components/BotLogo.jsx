import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp
} from "react-icons/fa"

const BotLogo = () => {
  return (
    <div className="flex items-center justify-center gap-5 pt-40">
      <a
        href="https://www.facebook.com/share/1ESuKWPsv3/"
        target="_blank"
        className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[rgba(50,130,255,0.5)] flex items-center justify-center text-[#4a9eff] text-[1.1rem] no-underline bg-[rgba(10,30,70,0.4)] transition-all duration-300 hover:border-[#4a9eff] hover:bg-[rgba(50,130,255,0.15)] hover:shadow-[0_0_15px_rgba(50,130,255,0.4)] hover:text-white hover:-translate-y-[3px]"
      >
        <FaFacebookF />
      </a>

      <span className="w-px h-[30px] bg-[rgba(50,130,255,0.3)]"></span>

      <a
        href="https://www.instagram.com/x__ayushraj__x?igsh=MXUxczBocXN3bXp0cg=="
        target="_blank"
        className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[rgba(50,130,255,0.5)] flex items-center justify-center text-[#4a9eff] text-[1.1rem] no-underline bg-[rgba(10,30,70,0.4)] transition-all duration-300 hover:border-[#4a9eff] hover:bg-[rgba(50,130,255,0.15)] hover:shadow-[0_0_15px_rgba(50,130,255,0.4)] hover:text-white hover:-translate-y-[3px]"
      >
        <FaInstagram />
      </a>

      <span className="w-px h-[30px] bg-[rgba(50,130,255,0.3)]"></span>

      <a
        href="https://www.linkedin.com/in/ayush-raj-81bb87325/"
        target="_blank"
        className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[rgba(50,130,255,0.5)] flex items-center justify-center text-[#4a9eff] text-[1.1rem] no-underline bg-[rgba(10,30,70,0.4)] transition-all duration-300 hover:border-[#4a9eff] hover:bg-[rgba(50,130,255,0.15)] hover:shadow-[0_0_15px_rgba(50,130,255,0.4)] hover:text-white hover:-translate-y-[3px]"
      >
        <FaLinkedinIn />
      </a>

      <span className="w-px h-[30px] bg-[rgba(50,130,255,0.3)]"></span>

      <a
        href="https://github.com/D3ath-Walker"
        target="_blank"
        className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[rgba(50,130,255,0.5)] flex items-center justify-center text-[#4a9eff] text-[1.1rem] no-underline bg-[rgba(10,30,70,0.4)] transition-all duration-300 hover:border-[#4a9eff] hover:bg-[rgba(50,130,255,0.15)] hover:shadow-[0_0_15px_rgba(50,130,255,0.4)] hover:text-white hover:-translate-y-[3px]"
      >
        <FaGithub />
      </a>

      <span className="w-px h-[30px] bg-[rgba(50,130,255,0.3)]"></span>

      <a
        href="https://wa.me/919102768394"
        target="_blank"
        className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[rgba(50,130,255,0.5)] flex items-center justify-center text-[#4a9eff] text-[1.1rem] no-underline bg-[rgba(10,30,70,0.4)] transition-all duration-300 hover:border-[#4a9eff] hover:bg-[rgba(50,130,255,0.15)] hover:shadow-[0_0_15px_rgba(50,130,255,0.4)] hover:text-white hover:-translate-y-[3px]"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}

export default BotLogo