import './App.css';
import Filter from "./components/Filter";
import VideoDisplay from "./components/VideoDisplay";
import Search from "./components/Search";
import img1 from "./img/img_avatar.png";
import img2 from "./img/img_avatar2.png";

function App() {

  const videos = [
    {
    id: 1,
    image : img1,
    title: "Loading data from catalog",
    description: "This is some description text...",
    product: "Qlik catalog",
    version: "November 2021"
  },
  {
    id: 2,
    image : img1,
    title: "Get to know the loop block",
    description: "This is some description text...",
    product: "Qlik catalog",
    version: "November 2021"
  },
  {
    id: 3,
    image : img2,
    title: "This is another TITLE!!!",
    description: "This is some description text...",
    product: "QlikView",
    version: "December 2021"
  },
  {
    id: 4,
    image : img2,
    title: "Another title",
    description: "This is some description text.",
    product: "Alerting",
    version: "October 2021"
  }
]

  return (
    <div className="App">
      <Search />
      <Filter videos={videos}/>
      <VideoDisplay videos={videos}/>
    </div>
  );
}

export default App;
