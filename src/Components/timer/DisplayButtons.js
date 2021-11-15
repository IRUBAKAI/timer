import React from 'react'

export default function DisplayButtons({start, stop, wait, reset, styles, disabled}) {
    return (
        <div className={styles.btns}>
            <button className={styles.btn} onClick={()=> start()}>Start</button>
            <button className={styles.btn} onClick={()=> stop()}>Stop</button>
            <button className={styles.btn} onClick={()=> wait()}>Wait</button>
            <button disabled={disabled === 'true' ? false : true} className={styles.btn} onClick={()=> reset()}>Reset</button>
        </div>
    )
}
