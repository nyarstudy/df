import s from './DFC.module.css';

const DFC = () => {
  return (
    <div className={s.dbc}>
      <h2>display: flex;</h2>
      <div className={s.desc}>
        <b>Flex-контейнер</b> - це "коробка", у якій зберігаються flex-елементи
        (flex item). Щоб перетворити елемент на flex-контейнер, потрібно
        встановити йому властивість display: flex
      </div>
      <code className={s.code}>
        style="display:flex;"
      </code>
      <div style={{marginTop: '20px'}}><b>Flex-контейнер:</b></div>
      <div className={s.flex}>
        <div className={s.example}>Це є flex елемент(flex-item) 1</div>
        <div className={s.example}>Це є flex елемент(flex-item) 2</div>
        <div className={s.example}>Це є flex елемент(flex-item) 3</div>
      </div>
    </div>
  );
};

export default DFC;
