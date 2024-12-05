import React from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
const Header = () => {

  const handleOnClick=()=>{
    
  }

  return (
    <>
      <Navbar fluid rounded className='border-2 shadow-lg sticky top-0 '>
        <Navbar.Brand>
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-C0MMERCE</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <svg onClick={handleOnClick} xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="80" cy="204" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="184" cy="204" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Satya</span>
              <span className="block truncate text-sm font-medium">satya@gmail.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header