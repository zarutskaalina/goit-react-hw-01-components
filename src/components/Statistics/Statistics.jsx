import style from './Statistics.module.css';

export const Statistics = ({ title = false, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      {stats.map(stat => (
        <ul className={style.statList}>
          <li className="item">
            <span className="label">{stat.label} </span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        </ul>
      ))}
    </section>
  );
};
