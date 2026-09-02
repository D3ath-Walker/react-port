import profile from "../../assets/img/me.jpeg"

const LeftImg = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <img
          src={profile}
          alt="Ayush Raj"
          className="w-95 h-95 object-cover rounded-full border-2 border-[#3a7fff] shadow-[0_0_40px_rgba(58,127,255,0.25)]"
        />
      </div>
    </div>
  )
}

export default LeftImg