import Link from "next/link";
import Image from "next/image"

const Intro = () => {
  return(
    <div className="intro">
   <Image src={`/blog.png`} alt=""  width={400}  height={300}/>
    </div>
  )
}

export default Intro