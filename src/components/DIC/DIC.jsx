import s from './DIC.module.css';

const DIC = () => {
  return (
    <div className={s.dbc}>
      <h2>display: inline;</h2>
      <div className={s.desc}>
        Рядковий елемент не починається з нового рядка і займає стільки ширини,
        скільки необхідно.
      </div>
      <div className={s.example}>Це є рядковий елемент 1</div>
      <div className={s.example}>Це є рядковий елемент 2</div>
      <div className={s.ex2}>
        Це <span className={s.textexample}>рядковий елемент всередині</span>{' '}
        параграфу.
      </div>
    </div>
  );
};

export default DIC;
