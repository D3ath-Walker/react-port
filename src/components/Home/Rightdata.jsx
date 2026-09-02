import './home.css'

const RightData = () => {
  return (
    <div className="max-w-[480px]">
      <p className="text-[1.3rem] text-[#8aa8cc] font-normal mb-[6px]">
        Hi, I'm
      </p>

      <h1 className="name-font text-[5rem] font-light text-[#4a9eff] leading-none mb-4 tracking-[-1px]">
        Ayush Raj
      </h1>

      <div className="w-[60px] h-[3px] bg-[#3a7fff] rounded-full mb-5"></div>

      <p className="text-base leading-[1.85] text-[#a0b8d0] font-light">
        A BCA student passionate about Web Development,
        <br />
        Programming, and Technology.
        <br />
        Currently completing a React.js
        <br />
        Internship at{" "}
        <a
          href="#"
          className="text-[#4a9eff] no-underline transition-colors duration-300 hover:text-[#80c0ff] hover:underline"
        >
          Chipi Technologies.
        </a>
        <br />
        Completed Frontend Development Internship
        <br />
        at{" "}
        <a
          href="#"
          className="text-[#4a9eff] no-underline transition-colors duration-300 hover:text-[#80c0ff] hover:underline"
        >
          Chipi Technologies.
        </a>
        <br />
        <a
          href="#"
          className="text-[#4a9eff] no-underline transition-colors duration-300 hover:text-[#80c0ff] hover:underline"
        >
          Impact College, Patna.
        </a>
      </p>
    </div>
  )
}

export default RightData