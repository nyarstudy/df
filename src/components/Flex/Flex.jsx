import s from './Flex.module.css';

const Flex = () => {
  const htmlCode = `
  <div class="container">
      <div class="item">Flex Item 1</div>
      <div class="item">Flex Item 2</div>
      <div class="item">Flex Item 3</div>
      <div class="item">Flex Item 4</div>
  </div>
  `;

  const cssCode = `
  .container {
    display: flex;
    gap: 10px; // відстань між елементами
  }
  `;

  return (
    <div className={s.flex}>
      {/* HTML код */}
      <div className={s.html}>
        <h3>HTML код:</h3>
        <pre className={s.code}>
          <code>{htmlCode}</code>
        </pre>
      </div>
      {/* CSS код */}
      <div className={s.css}>
        <h3>Стилі: можна записувати в CSS або в атрибут style</h3>
        <pre className={s.code}>
          <code>{cssCode}</code>
        </pre>
      </div>

      {/* display: flex */}
      <div className={s.df}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
          <div class={s.item}>Flex Item 4</div>
        </div>
      </div>

      {/* Block коду flex-direction:row; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: flex-direction:row;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    flex-direction: row;
  }
  `}</code>
        </pre>
      </div>
      <div className={s.fdr}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
          <div class={s.item}>Flex Item 4</div>
        </div>
      </div>

      {/* Block коду flex-direction:column; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: flex-direction:column;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    flex-direction: column;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.fdc}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
          <div class={s.item}>Flex Item 4</div>
        </div>
      </div>

      {/* Block коду flex-direction:row-reverse; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: flex-direction:row-reverse;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    flex-direction: row-reverse;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.fdrr}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
          <div class={s.item}>Flex Item 4</div>
        </div>
      </div>

      {/* Block коду flex-direction:column-reverse; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: flex-direction:column-reverse;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    flex-direction: column-reverse;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.fdcr}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
          <div class={s.item}>Flex Item 4</div>
        </div>
      </div>

      {/* Block коду justify-content: flex-start; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: justify-content: flex-start;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.fjcfs}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
          <div class={s.item}>Flex Item 4</div>
        </div>
      </div>

      {/* Block коду justify-content: flex-end; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: justify-content: flex-end;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.fjcfe}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
          <div class={s.item}>Flex Item 4</div>
        </div>
      </div>

      {/* Block коду justify-content: center; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: justify-content: center;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.fjcc}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
          <div class={s.item}>Flex Item 4</div>
        </div>
      </div>

      {/* Block коду justify-content: space-between; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: justify-content: space-between;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.fjsb}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
        </div>
      </div>

      {/* Block коду justify-content: space-around; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: justify-content: space-around;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.fjsa}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
        </div>
      </div>

      {/* Block коду justify-content: space-evenly; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: justify-content: space-evenly;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.fjse}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
        </div>
      </div>

      {/* Block коду align-items: center; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: align-items: center;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    align-items: center;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.faic}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
          <div class={s.item}>Flex Item 4</div>
        </div>
      </div>
      {/* Block коду  align-items: flex-end; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: align-items: flex-end;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    align-items: flex-end;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.faife}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
          <div class={s.item}>Flex Item 4</div>
        </div>
      </div>
      {/* Block коду  align-items: flex-start; */}
      <div className={s.css}>
        <h3 className={s.subtitle}>Css стилі: align-items: flex-start;</h3>
        <pre>
          <code>{`
  .container {
    display: flex;
    align-items: flex-start;
  }
  `}</code>
        </pre>
      </div>

      <div className={s.faifs}>
        <div class={s.container}>
          <div class={s.item}>Flex Item 1</div>
          <div class={s.item}>Flex Item 2</div>
          <div class={s.item}>Flex Item 3</div>
          <div class={s.item}>Flex Item 4</div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
