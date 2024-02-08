import s from './DBC.module.css';

const DBC = () => {
  return (
    <div className={s.dbc}>
      <h2>display: block;</h2>
      <div className={s.desc}>
        Блочний елемент завжди починається з нового рядка й займає всю доступну
        ширину (розтягується вліво та вправо, наскільки це можливо).
      </div>
      <div className={s.example}>Це є блочний елемент</div>
      <div className={s.example}>Це є блочний елемент</div>
    </div>
  );
};

export default DBC;
