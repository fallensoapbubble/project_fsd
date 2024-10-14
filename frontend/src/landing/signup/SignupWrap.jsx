import React from 'react';

function SignupWrap() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    position: 'relative'
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    position: 'relative',
    zIndex: 1
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  // Animation container style
  const animationContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  };

  // Style for animation images
  const animationImageStyle = (src, animationName, position) => ({
    position: 'absolute',
    width: '150px',
    height: '150px',
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.3s ease',
    animation: `${animationName} 20s infinite linear`,
    ...position
  });

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          <button 
            type="submit" 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Sign Up
          </button>
        </form>
      </div>
      <div style={animationContainerStyle}>
        <div
          style={animationImageStyle('../../../public/images/pricing0.svg', 'rotate', { top: '10px', left: '10px' })}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
        <div
          style={animationImageStyle('../../../public/images/logo.svg', 'zoomIn', { bottom: '10px', right: '50px' })}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.5)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
        <div
          style={animationImageStyle('../../../public/images/pricing0.svg', 'rotate', { bottom: '10px', left: '10px' })}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
        <div
          style={animationImageStyle('../../../public/images/tijori.svg', 'zoomIn', { top: '10px', right: '10px' })}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
      </div>
      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes zoomIn {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}

export default SignupWrap;
