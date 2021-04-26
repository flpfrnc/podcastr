import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../contexts/PlayerContext'
import { HeaderContextProvider, useNightMode } from '../contexts/HeaderContext';



function MyApp({ Component, pageProps }) {
  const { isNightMode } = useNightMode();

  console.log(isNightMode);
  return (
    <HeaderContextProvider>
      <PlayerContextProvider>
        <div className={isNightMode ? styles.wrapperNight : styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerContextProvider>
    </HeaderContextProvider>
  )
}

export default MyApp
