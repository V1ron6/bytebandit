import React from 'react';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'CSS', level: 80 },
  { name: 'Node.js', level: 70 }
  // Add more skills as needed
];

export default function Skill() {
  return (
    <section style={{padding:'2em 1em', maxWidth:600, margin:'0 auto'}}>
      <h2 style={{textAlign:'center'}}>Skills</h2>
      <div>
        {skills.map(skill => (
          <div key={skill.name} style={{margin: '1em 0'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skills-bar" style={{
              background: '#eee',
              borderRadius: '10px',
              overflow: 'hidden',
              height: '12px'
            }}>
              <div style={{
                width: skill.level + '%',
                background: '#007bff',
                height: '100%',
                transition: 'width 0.7s'
              }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}