import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp
} from "react-icons/fa"

const BotLogo = () => {

  const socials = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/share/1ESuKWPsv3/"
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/x__ayushraj__x?igsh=MXUxczBocXN3bXp0cg=="
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/ayush-raj-81bb87325/"
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/D3ath-Walker"
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/919102768394"
  }
]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-5 bg-[rgba(10,25,60,0.6)] border border-[rgba(50,120,255,0.2)] rounded-full px-8 py-3 backdrop-blur-md">
      {socials.map((social, index) => (
        <div key={index} className="flex items-center gap-5">

          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[rgba(50,130,255,0.5)] flex items-center justify-center text-[#4a9eff] text-[1.1rem] no-underline bg-[rgba(10,30,70,0.4)] transition-all duration-300 hover:border-[#4a9eff] hover:bg-[rgba(50,130,255,0.15)] hover:shadow-[0_0_15px_rgba(50,130,255,0.4)] hover:text-white hover:-translate-y-[3px]"
          >
            {social.icon}
          </a>

          {index < socials.length - 1 && (
            <span className="w-px h-[30px] bg-[rgba(50,130,255,0.3)]"></span>
          )}

        </div>
      ))}

    </div>
  )
}

export default BotLogo