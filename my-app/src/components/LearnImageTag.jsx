import Image from "next/image";
import tom from "../../public/images/tom.jpg";
const LearnImageTag = () => {
  return (
    <div>
      <Image src={tom} width={800} alt="Tom & Jerry" />
      {/* this Image is optimized from next js */}
    </div>
  );
};

export default LearnImageTag;
