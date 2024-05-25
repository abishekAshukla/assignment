import { useState, useRef, useEffect } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownRef} style={styles.dropdown} className="border-r ml-2">
      <div className="flex justify-center items-center bg-white h-full p-2 text-xs">
        <button onClick={toggleDropdown} style={styles.dropdownToggle}>
          All
        </button>
        <div>
          <TiArrowSortedDown />
        </div>
      </div>
      {isOpen && (
        <ul style={styles.dropdownMenu}>
          <li style={styles.dropdownItem}>Item 1</li>
          <li style={styles.dropdownItem}>Item 2</li>
          <li style={styles.dropdownItem}>Item 3</li>
        </ul>
      )}
    </div>
  )
}

const styles = {
  dropdown: {
    position: 'relative',
    display: 'inline-block',
  },
  dropdownToggle: {
    // backgroundColor: '#4CAF50',
    // color: 'white',
    // padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  },
  dropdownMenu: {
    display: 'block',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  dropdownItem: {
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
    cursor: 'pointer',
  },
  dropdownItemHover: {
    backgroundColor: '#f1f1f1',
  },
}

export default Dropdown
