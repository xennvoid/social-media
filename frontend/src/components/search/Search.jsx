import React, { useRef } from 'react'
import styles from './search.module.css'
import { BiSearch } from 'react-icons/bi'

const Search = ({ value, setValue, placeholder }) => {

    const ref = useRef(null)

    return (
        <div className={styles.container} onClick={() => ref.current.focus()}>
            <BiSearch size={24} className={styles.icon} />
            <input
                type="text"
                className={styles.input}
                ref={ref}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default Search