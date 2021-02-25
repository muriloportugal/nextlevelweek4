import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/40072024?s=400&u=68a1f857c230ef27d4b83571e5878a66ed36dd16&v=4" alt="Murilo Portugal"/>
            <div>
                <strong>Murilo Portugal</strong>
                <p><img src="icons/level.svg" alt="Level"/>Level 1</p>
            </div>
        </div>
    );
}