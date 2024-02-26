import styles from './page.module.css';
import { Counter } from '@final/counter';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome app1 👋
            </h1>
          </div>
          <Counter name="app1 " step={4} />
        </div>
      </div>
    </div>
  );
}
