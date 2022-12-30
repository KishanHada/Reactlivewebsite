import React from 'react'

const Footer = () => {
    const d = new Date().toLocaleDateString();
    return (
    <>
        <footer className='bg-light text-center'>
            <p>Ⓒ {d} HadaTechnical. All Right Reserved | Terms and Conditions</p>
        </footer>
    </>
  )
}

export default Footer
