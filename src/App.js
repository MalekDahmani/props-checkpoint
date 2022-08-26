import FullName from "./profile/fullName";
import Bio from "./profile/bio";
import Profession from "./profile/profession";
import Image from "./profile/image";
import Img from "./images/Photo.jpg"
import HandleName from "./profile/handleName";


function App() {
  const alertMyInput = name => alert(name);
  return (
    <div>
      <FullName/>
      <Bio/>  
      <Profession/>
      <Image>{Img}</Image>
      <HandleName alertMyInput={alertMyInput} />

    </div>
  )
}

export default App;
