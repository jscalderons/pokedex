import React from 'react';

export default function Layout(props) {
    return (
        <div style={styles.layout}>
            <header>
                Pokedex
            </header>
            <main style={styles.main}>
                {props.children}
            </main>
            <footer>
                Jhonathan Calderon
            </footer>
        </div>
    )
}

const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    main: {
        flex: 1,
    }
}