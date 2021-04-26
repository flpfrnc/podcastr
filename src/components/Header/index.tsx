import { FaSun, FaMoon } from 'react-icons/fa'
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';
import { useNightMode } from '../../contexts/HeaderContext';

export function Header() {
    const {
        isNightMode,
        toggleNightMode
    } = useNightMode();

    console.log(isNightMode);

    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    return (
        <header className={isNightMode ? styles.nightContainer : styles.headerContainer}>
            <img src="/logo.svg" alt="Poscastr" />

            <p>O melhor para você ouvir, sempre</p>
            <span className={styles.subContainer}>
                <span>{currentDate}</span>
                <button type="button"
                    onClick={toggleNightMode}>
                    {
                        isNightMode
                            ? <FaSun />
                            : <FaMoon />
                    }
                </button>
            </span>
        </header>
    );
}