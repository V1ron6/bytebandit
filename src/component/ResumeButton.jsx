import React from 'react';

export default function ResumeButton() {
  return (
    <div style={{margin: '2em 0', textAlign: 'center'}}>
      <a 
        href="/resume.pdf" 
        download="Resume_V1ron6.pdf" 
        style={{
          padding: '0.7em 1.5em',
          background: '#007bff',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 500,
          boxShadow: '0 1px 6px rgba(0,0,0,0.07)'
        }}
      >
        Download Resume
      </a>
    </div>
  );
}