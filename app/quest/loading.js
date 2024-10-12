import Image from "next/image";
const Homeload = () => {
  return (
    <div className="homeloading">
      <div className="loadimg">
        <Image
          src="/logo.png"
          width={500}
          height={500}
          priority={true}
          style={{ width: "100%", height: "100%" }}
          alt="contact_secondary"
        />
      </div>
      <div>Loading...</div>
    </div>
  );
};

export default Homeload;
