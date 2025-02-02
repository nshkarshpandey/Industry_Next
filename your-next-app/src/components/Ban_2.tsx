import Image from "next/image";

export default function Ban_2() {
  return (
    <div className="ban-2"> 
      <Image
        src="/images/home-img-1.png"
       alt=""
              layout="responsive"
              width={16}
              height={9}
              id="home-img-1"
       style={{
                position : "relative",
                left: '-51px',
                width: "100%",
                maxWidth: "500px",
                alignSelf: "left",
                marginTop: "80px",
                height: "auto",
              }}
      />
    </div>
  );
}
