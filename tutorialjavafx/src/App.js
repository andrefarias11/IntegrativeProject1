import "./styles.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

// import de imagens
import ImagemTutorial1 from "./images/img1.png";
import ImagemTutorial2 from "./images/img2.png";
import ImagemTutorial3 from "./images/img3.png";
// import ImagemTutorial4 from "./images/img4.png";
// import ImagemTutorial5 from "./images/img5.png";
// import ImagemTutorial6 from "./images/img6.png";
// import ImagemTutorial7 from "./images/img7.png";
// import ImagemTutorial8 from "./images/img8.png";
// import ImagemTutorial9 from "./images/img9.png";
// import ImagemTutorial10 from "./images/img10.png";
// import ImagemTutorial11 from "./images/img11.png";
// import ImagemTutorial12 from "./images/img12.png";
// import ImagemTutorial13 from "./images/img13.png";
// import ImagemTutorial14 from "./images/img14.png";
// import ImagemTutorial15 from "./images/img15.png";
// import ImagemTutorial16 from "./images/img16.png";
// import ImagemTutorial17 from "./images/img17.png";
// import ImagemTutorial18 from "./images/img18.png";
// import ImagemTutorial19 from "./images/img19.png";
// import ImagemTutorial20 from "./images/img20.png";
// import ImagemTutorial21 from "./images/img21.png";
// import ImagemTutorial22 from "./images/img22.png";
// import ImagemTutorial23 from "./images/img23.png";

const tutorialListData = [
  {
    url: "https://www.example.com/tutorial1",
    imageurl: ImagemTutorial1,
    alt: "Imagem do Tutorial 1",
  },
  {
    url: "https://www.example.com/tutorial2",
    imageurl: ImagemTutorial2,
    alt: "Imagem do Tutorial 2",
  },
  {
    url: "https://www.example.com/tutorial3",
    imageurl: ImagemTutorial3,
    alt: "Imagem do Tutorial 3",
  },
];

const resourceListData = [
  {
    url: "https://www.example.com/resource1",
    imageurl: "resource1.jpg",
    alt: "Imagem do Recurso 1",
  },
  {
    url: "https://www.example.com/resource2",
    imageurl: "resource2.jpg",
    alt: "Imagem do Recurso 2",
  },
  {
    url: "https://www.example.com/resource3",
    imageurl: "resource3.jpg",
    alt: "Imagem do Recurso 3",
  },
];

const creatorsListData = [
  {
    url: "https://github.com/carlosedu757",
    imageurl: "https://avatars.githubusercontent.com/u/74271104?v=4",
    alt: "Imagem do Perfil GitHub 1",
  },
  {
    url: "https://github.com/carlosedu757",
    imageurl: "https://avatars.githubusercontent.com/u/74271104?v=4",
    alt: "Imagem do Perfil GitHub 2",
  },
  {
    url: "https://github.com/carlosedu757",
    imageurl: "https://avatars.githubusercontent.com/u/74271104?v=4",
    alt: "Imagem do Perfil GitHub 3",
  },
  {
    url: "https://github.com/carlosedu757",
    imageurl: "https://avatars.githubusercontent.com/u/74271104?v=4",
    alt: "Imagem do Perfil GitHub 4",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Tutoriais - Parte 1 (Instalação, Label e Button)"
          subtitle="Confira esses tutoriais incríveis de JavaFX"
          className="tutorial-list"
        >
          {tutorialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageurl={item.imageurl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Recursos"
          subtitle="Acesse esses recursos úteis para aprender JavaFX"
          className="resource-list"
        >
          {resourceListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageurl={item.imageurl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Desenvolvedores"
          subtitle="GitHub de cada um que esteve envolvido nesse projeto"
          className="creators-list"
        >
          {creatorsListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageurl={item.imageurl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        
      </main>
    </div>
  );
}