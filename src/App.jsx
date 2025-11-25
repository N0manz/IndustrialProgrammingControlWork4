import './App.css';
import Card from './components/Card';

const App = () => {
  const animals = [
    {
      id: 1,
      name: "Иван Обыкновенный",
      image: "/images/ivanus.jpg",
      latinName: "Ivannus invisibilis",
      description: "Редкий вид студентообразных млекопитающих. Обладает уникальной способностью к мимикрии - становится практически невидим для преподавательского взора. Период активности: сессионный. Питается исключительно надеждой на автомат.",
      habitat: "Дом, редко кабинет английского языка"
    },
    {
      id: 2,
      name: "Сергей Коричневатый",
      image: "/images/sergay.jpg",
      latinName: "Starbuckius chronicus",
      description: "Кофезависимый подвид Homo Academicus. Эволюционировал для жизни в условиях повышенной кофеиновой концентрации. Мигрирует между точками Starbucks по сложному маршруту, известному только особям его стаи.",
      habitat: "Кофейни, реже - учебные корпуса"
    },
    {
      id: 3,
      name: "Владислав Рачительный",
      image: "/images/vladius.jpg",
      latinName: "Domesticus maximus",
      description: "Домоседская форма интеллектуального примата. Обладает развитым инстинтом самосохранения, выражающимся в избегании учебных территорий. Строит сложные гнезда из одеял и подушек.",
      habitat: "Квартиры, кровати, зоны комфорта"
    }
  ];

  return (
    <div className="app">
      <h1>Кафедра Студентологии</h1>
      <div className="animals-container">
        {animals.map(animal => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default App;