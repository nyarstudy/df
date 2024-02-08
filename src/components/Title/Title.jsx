import s from './Title.module.css';

const Title = () => {
  return (
    <h1 className={s.title}>
      Властивість <span className='dotted'>display</span>:{' '}
      <span className='underline'>block</span> |{' '}
      <span className='underline'>inline</span> |{' '}
      <span className='underline'>inline-block</span> |{' '}
      <span className='underline'>flex</span>;
    </h1>
  );
};

export default Title;
