import logo from './logo-1.png';
import './App.css';
import geopossition from './geopossition.png';
import time from './time.png';
import vk from './vk-icon.png';
import insta from './insta-icon.png';
import youtube from './youtube-icon.png';
import search from './search-icon.png';
import telfone from './telf-1.png';
import geo from './geo.png';
import mail from "./mail.png";
import time1 from "./time-1.png";
import { YMaps, Map } from 'react-yandex-maps';
import form from './form.png';

function App() {
  return (
    <>
    <div className="NavBar">
      <img src={logo} alt="logo" className="Logo-1"/>
      <div className="Nav-menu">
      <ul className="Top-bar"> 
      
      <img src={geopossition} className="Geoposs" alt="gepo"/><li className="Address">г. Москва, ул. Вешних вод, 4с170</li>
      <img src={time} className="Time" alt="time"/><li className="Works">Пн-Вс 10.00 - 21.00</li>
     
        <ul className="Social">
          <li className="Social-li"><img src={insta} alt="insta"/></li>
          <li className="Social-li"><img src={vk} alt="vk"/></li>
          <li><img src={youtube} alt="youtube"/></li>
        </ul>
        <p className="Tel">8 (925) 700-94-38</p>
        </ul>
    </div>
    <div className="Bot-bar">
      <ul className="Bot-ul"> 
        <li className="Menu"><a href="# ">Главная</a></li>
        <li className="Menu"><a href="# ">О компании</a></li>
        <li className="Menu"><a href="# ">Услуги</a></li>
        <li className="Menu"><a href="# ">Цены</a></li>
        <li className="Menu"><a href="# ">Наши работы</a></li>
        <li className="Menu"><a href="# ">Отзывы</a></li>
        <li className="Menu"><a href="# ">Контакты</a></li>
        <li className="Menu"><a href="# ">Статьи</a></li>
        <li className="Menu"><img src={search} alt="search"/></li>
      </ul>
    </div>
    </div>

    <div className="Content">
      <h1>Контакты</h1>
        <div className="Content-nav">
            <span>Главная</span> / Контакты
        </div>
        <div className="Contacts-content">
          <div className="Contacs-bar">
              <div className="Icon-bar">
              <img src={telfone} alt="Telfone"/><p>Телефон</p>
              <span>8 (925) 700-94-38</span>
              </div>
            <div className="Icon-bar">
            <img src={geo} alt="geo"/><p>Адрес</p>
              <span>г. Москва, ул. Вешних вод, 4с170</span>
            </div>
            <div className="Icon-bar">
              <img src={mail} alt="mail"/><p>Email</p>
              <span>info@akpp-box.ru</span>
            </div>
            <div className="Icon-bar">
              <img src={time1} alt="time"/>
              <p>Режим работы</p>
              <span>Пн-Вс 10.00 - 21.00</span>
            </div>
          </div>
          <div className="Map-content">

<YMaps>

<Map className="Size-maps" defaultState={{ center: [55.75, 37.57], zoom: 15 }} />

</YMaps>
</div>
        <div className="Form-content">
          <div className="Form-content-left">
            <h2>напишите нам прямо сейчас</h2>
            <textarea placeholder="Текс сообщения">
            </textarea>
            <input placeholder="Ваше имя"></input>
            <input placeholder="Контактный телефон"></input>
            <button>отправить</button>
          </div>
          <div className="Form-content-right">
            <img src={form} alt="form"/>
          </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default App;
