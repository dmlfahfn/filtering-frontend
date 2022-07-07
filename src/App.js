import './App.css';
import img1 from "./img/img_avatar.png";
import img2 from "./img/img_avatar2.png";

function App() {

  const videos = [
    {
    image : img1,
    title: "Loading data from catalog",
    description: "This is some description text...",
    product: "Qlik catalog",
    version: "November 2021"
  },
  {
    image : img1,
    title: "Get to know the lopp block",
    description: "This is some description text...",
    product: "Qlik catalog",
    version: "November 2021"
  },
  {
    image : img2,
    title: "This is another TITLE!!!",
    description: "This is some description text...",
    product: "QlikView",
    version: "November 2021"
  },
  {
    image : img2,
    title: "Another title",
    description: "This is some description text.",
    product: "Alerting",
    version: "November 2021"
  }
]

  return (
    <div className="App">
      {videos.map((video) => {
        return <img key={video.title} alt="Person" src={video.image} />
      })}
    </div>
  );
}

export default App;
