import React, { useState } from "react";
import Card from "./Card";

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "example.com",
      imageUrl: "url_to_your_image_1",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      website: "abc.com",
      imageUrl: "url_to_your_image_2",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "abc.com",
      imageUrl: "url_to_your_image_3",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      website: "xyz.com",
      imageUrl: "url_to_your_image_4",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      website: "example.com",
      imageUrl: "url_to_your_image_5",
    },
  ]);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="app">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          email={card.email}
          phone={card.phone}
          website={card.website}
          imageUrl={card.imageUrl}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;
