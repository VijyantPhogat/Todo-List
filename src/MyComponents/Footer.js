import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "32vh",
    width: "100%"
  }
  return (
    <div className="bg-dark text-light py-3" style={footerStyle} >
     <p className="text-center">
       Copyright &copy; MyTodosList.com
       </p>
    </div>
  )
}

export default Footer
