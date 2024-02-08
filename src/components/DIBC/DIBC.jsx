import s from './DIBC.module.css';

const DIBC = () => {
  return (
    <div className={s.dbc}>
      <h2>display: inline-block;</h2>
      <div className={s.desc}>
        Рядково-блочний містить властивлсті як блочного так і рядкового
        елемента. Їх ширина і висота або задається через стилі або визначається
        контентом, як і рядкові елементи вони слідують один за одним.
      </div>
      <div className={s.example}>Це є рядково-блочний елемент 1</div>
      <div className={`${s.example}  ${s.h}`}>
        Це є рядково-блочний елемент 2
      </div>
      <div className={`${s.example}  ${s.w}`}>
        Це є рядково-блочний елемент 3
      </div>
      <div className={`${s.example} ${s.hw}`}>
        Це є рядково-блочний елемент 4
      </div>
    </div>
  );
};

export default DIBC;
