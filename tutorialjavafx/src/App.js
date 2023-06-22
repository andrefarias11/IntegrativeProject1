import "./styles.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

// import de imagens
import ImagemTutorial1 from "./images/img1.png";
import ImagemTutorial2 from "./images/img2.png";
import ImagemTutorial3 from "./images/img3.png";
import ImagemTutorial4 from "./images/img4.png";
import ImagemTutorial5 from "./images/img5.png";
import ImagemTutorial6 from "./images/img6.png";
import ImagemTutorial7 from "./images/img7.png";
import ImagemTutorial8 from "./images/img8.png";
import ImagemTutorial9 from "./images/img9.png";
import ImagemTutorial10 from "./images/img10.png";
import ImagemTutorial11 from "./images/img11.png";
import ImagemTutorial12 from "./images/img12.png";
import ImagemTutorial13 from "./images/img13.png";
import ImagemTutorial14 from "./images/img14.png";
import ImagemTutorial15 from "./images/img15.png";
import ImagemTutorial16 from "./images/img16.png";
import ImagemTutorial17 from "./images/img17.png";
import ImagemTutorial18 from "./images/img18.png";
import ImagemTutorial19 from "./images/img19.png";
import ImagemTutorial20 from "./images/img20.png";
import ImagemTutorial21 from "./images/img21.png";
import ImagemTutorial22 from "./images/img22.png";
import ImagemTutorial23 from "./images/img23.png";


const tutorialListDataPart1 = [
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

const tutorialListDataPart2 = [
  {
    url: "https://www.example.com/tutorial4",
    imageurl: ImagemTutorial4,
    alt: "Imagem do Tutorial 4",
  },
  {
    url: "https://www.example.com/tutorial5",
    imageurl: ImagemTutorial5,
    alt: "Imagem do Tutorial 5",
  },
  {
    url: "https://www.example.com/tutorial6",
    imageurl: ImagemTutorial6,
    alt: "Imagem do Tutorial 6",
  },
];

const tutorialListDataPart3 = [
  {
    url: "https://www.example.com/tutorial7",
    imageurl: ImagemTutorial7,
    alt: "Imagem do Tutorial 7",
  },
  {
    url: "https://www.example.com/tutorial8",
    imageurl: ImagemTutorial8,
    alt: "Imagem do Tutorial 8",
  },
  {
    url: "https://www.example.com/tutorial9",
    imageurl: ImagemTutorial9,
    alt: "Imagem do Tutorial 9",
  },
];

const tutorialListDataPart4 = [
  {
    url: "https://www.example.com/tutorial10",
    imageurl: ImagemTutorial10,
    alt: "Imagem do Tutorial 10",
  },
  {
    url: "https://www.example.com/tutorial11",
    imageurl: ImagemTutorial11,
    alt: "Imagem do Tutorial 11",
  },
  {
    url: "https://www.example.com/tutorial12",
    imageurl: ImagemTutorial12,
    alt: "Imagem do Tutorial 12",
  },
];

const tutorialListDataPart5 = [
  {
    url: "https://www.example.com/tutorial13",
    imageurl: ImagemTutorial13,
    alt: "Imagem do Tutorial 13",
  },
  {
    url: "https://www.example.com/tutorial14",
    imageurl: ImagemTutorial14,
    alt: "Imagem do Tutorial 14",
  },
  {
    url: "https://www.example.com/tutorial15",
    imageurl: ImagemTutorial15,
    alt: "Imagem do Tutorial 15",
  },
];

const tutorialListDataPart6 = [
  {
    url: "https://www.example.com/tutorial16",
    imageurl: ImagemTutorial16,
    alt: "Imagem do Tutorial 16",
  },
  {
    url: "https://www.example.com/tutorial17",
    imageurl: ImagemTutorial17,
    alt: "Imagem do Tutorial 17",
  },
  {
    url: "https://www.example.com/tutorial18",
    imageurl: ImagemTutorial18,
    alt: "Imagem do Tutorial 18",
  },
];

const tutorialListDataPart7 = [
  {
    url: "https://www.example.com/tutorial19",
    imageurl: ImagemTutorial19,
    alt: "Imagem do Tutorial 19",
  },
  {
    url: "https://www.example.com/tutorial20",
    imageurl: ImagemTutorial20,
    alt: "Imagem do Tutorial 20",
  },
  {
    url: "https://www.example.com/tutorial21",
    imageurl: ImagemTutorial21,
    alt: "Imagem do Tutorial 21",
  },
];

const tutorialListDataPart8 = [
  {
    url: "https://www.example.com/tutorial22",
    imageurl: ImagemTutorial22,
    alt: "Imagem do Tutorial 22",
  },
  {
    url: "https://www.example.com/tutorial23",
    imageurl: ImagemTutorial23,
    alt: "Imagem do Tutorial 23",
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
          subtitle="Confira esses tutoriais incríveis de instalação e utilização de Label e Button no JavaFX"
          className="tutorial-list"
        >
          {tutorialListDataPart1.map(function (item) {
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
          title="Tutoriais - Parte 2 (Input, Checkbox, Combobox)"
          subtitle="Confira esses tutoriais incríveis utilizando input fields, checkbox e combobox no JavaFX"
          className="tutorial-list"
        >
          {tutorialListDataPart2.map(function (item) {
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
          title="Tutoriais - Parte 3 (Radio Button, Slider e Spinner)"
          subtitle="Confira esses tutoriais incríveis utilizando Radio Button, Slider e Spinner no JavaFX"
          className="tutorial-list"
        >
          {tutorialListDataPart3.map(function (item) {
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
          title="Tutoriais - Parte 4 (Toggle, Imagem e Tabs)"
          subtitle="Confira esses tutoriais incríveis utilizando Toggle, Imagem e Tabs no JavaFX"
          className="tutorial-list"
        >
          {tutorialListDataPart4.map(function (item) {
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
          title="Tutoriais - Parte 5 (List View, Barra de Progresso e Picker)"
          subtitle="Confira esses tutoriais incríveis utilizando List View, Barra de Progresso e Picker no JavaFX"
          className="tutorial-list"
        >
          {tutorialListDataPart5.map(function (item) {
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
          title="Tutoriais - Parte 6 (Separadores, Scroll e Menu)"
          subtitle="Confira esses tutoriais incríveis utilizando Separadores, Scroll e Menu no JavaFX"
          className="tutorial-list"
        >
          {tutorialListDataPart6.map(function (item) {
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
          title="Tutoriais - Parte 7 (Tabela com reordernação das linhas, Janela de Diálogo e Drag and Drop)"
          subtitle="Confira esses tutoriais incríveis utilizando Tabela com reordernação das linhas, Janela de Diálogo e Drag and Drop no JavaFX"
          className="tutorial-list"
        >
          {tutorialListDataPart7.map(function (item) {
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
          title="Tutoriais - Parte 8 (Gráficos e Fade In/Fade Out)"
          subtitle="Confira esses tutoriais incríveis utilizando Gráficos e animações Fade In/Fade Out no JavaFX"
          className="tutorial-list"
        >
          {tutorialListDataPart8.map(function (item) {
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