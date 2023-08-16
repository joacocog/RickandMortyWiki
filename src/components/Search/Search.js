import React from 'react'
import Styles from './Search.module.scss'

const Search = ({setSearch, setPageNumber}) => {
  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'>
        <input onChange={e=>{
            setPageNumber(1);
            setSearch(e.target.value)
        }} placeholder='Search for Characters' type='text' className={Styles.input} />
        <button onClick={e=>{e.preventDefault()}} className={`btn btn-primary fs-5 ${Styles.btnSearch}`}>Search</button>
    </form>
  )
}

export default Search