import React from 'react';
import { motion } from 'framer-motion';
import './Members.css';

const Members = () => {
  // Core Council Members
  const coreCouncil = [
    {
      id: 1,
      name: "Avishi",
      role: "President",
      description: "Vision, leadership, overall direction",
      image: "/api/placeholder/200/200",
      email: "avishi@luna.edu",
      achievements: ["Society Vision Leader", "Strategic Planning", "External Relations"]
    },
    {
      id: 2,
      name: "Gursheel",
      role: "Vice President",
      description: "Assists the President, internal coordination",
      image: "/api/placeholder/200/200",
      email: "gursheel@luna.edu",
      achievements: ["Internal Coordination", "Team Management", "Event Planning"]
    },
    {
      id: 3,
      name: "Harsh",
      role: "General Secretary",
      description: "Documentation, planning, inter-departmental communication",
      image: "/api/placeholder/200/200",
      email: "harsh@luna.edu",
      achievements: ["Documentation Expert", "Inter-dept Communication", "Planning Specialist"]
    },
    {
      id: 4,
      name: "Jiya",
      role: "Treasurer",
      description: "Budget, funds, and sponsorship coordination",
      image: "/api/placeholder/200/200",
      email: "jiya@luna.edu",
      achievements: ["Financial Management", "Sponsorship Coordination", "Budget Planning"]
    }
  ];

  // Departmental Core Leads
  const departmentalLeads = [
    {
      id: 5,
      name: "TBD",
      role: "Management Core Lead",
      description: "Leading management operations and strategy",
      image: "/api/placeholder/200/200",
      email: "management.lead@luna.edu",
      status: "Position Open"
    },
    {
      id: 6,
      name: "Sneha",
      role: "Technical Core Lead",
      description: "Leading technical development and innovation",
      image: "/api/placeholder/200/200",
      email: "sneha@luna.edu",
      achievements: ["Technical Innovation", "Development Leadership", "System Architecture"]
    },
    {
      id: 7,
      name: "TBD",
      role: "R&D Core Lead",
      description: "Leading research and development initiatives",
      image: "/api/placeholder/200/200",
      email: "rd.lead@luna.edu",
      status: "Position Open"
    },
    {
      id: 8,
      name: "TBD",
      role: "Robotics Core Lead",
      description: "Leading robotics projects and automation",
      image: "/api/placeholder/200/200",
      email: "robotics.lead@luna.edu",
      status: "Position Open"
    },
    {
      id: 9,
      name: "Harkirat",
      role: "Design Core Lead",
      description: "Leading design and visual communication",
      image: "/api/placeholder/200/200",
      email: "harkirat@luna.edu",
      achievements: ["Visual Design Expert", "Brand Management", "Creative Direction"]
    }
  ];

  const teams = [
    {
      id: 1,
      name: "Management Department",
      description: "Handles overall coordination, social media, and content management for the society.",
      lead: "Management Core Lead (TBD)",
      teams: [
        "Management Team (2 Team Leads - TBD)",
        "Social Media Team (2 Team Leads - TBD)", 
        "Content Team (2 Team Leads - TBD)"
      ],
      members: "15+",
      color: "linear-gradient(45deg, #00d4ff, #0066cc)"
    },
    {
      id: 2,
      name: "Technical Department",
      description: "Develops software solutions, manages digital platforms and technical infrastructure.",
      lead: "Sneha (Technical Core Lead)",
      teams: [
        "Technical Team (2 Team Leads - TBD)"
      ],
      members: "8+",
      color: "linear-gradient(45deg, #0066cc, #004499)"
    },
    {
      id: 3,
      name: "R&D Department",
      description: "Conducts research, explores new technologies and develops innovative solutions.",
      lead: "R&D Core Lead (TBD)",
      teams: [
        "Research Team (2 Team Leads - TBD)"
      ],
      members: "10+",
      color: "linear-gradient(45deg, #00a8e6, #0077b3)"
    },
    {
      id: 4,
      name: "Robotics Department",
      description: "Focuses on robotic projects, automation, and space technology applications.",
      lead: "Robotics Core Lead (TBD)",
      teams: [
        "Robotics Team (2 Team Leads - TBD)"
      ],
      members: "6+",
      color: "linear-gradient(45deg, #0088cc, #005fa3)"
    },
    {
      id: 5,
      name: "Design Department",
      description: "Handles visual design, branding, and creative communication for all society activities.",
      lead: "Harkirat (Design Core Lead)",
      teams: [
        "Design Team (2 Team Leads - TBD)"
      ],
      members: "8+",
      color: "linear-gradient(45deg, #00ccff, #0099cc)"
    }
  ];

  return (
    <div className="members-container">
      <motion.div 
        className="members-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>LUNA Society Team</h1>
        <p>Meet our dedicated team members leading the way in space exploration and astronomy</p>
      </motion.div>

      {/* Core Council */}
      <motion.section 
        className="leadership-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>🔺 Core Council</h2>
        <div className="members-grid">
          {coreCouncil.map((member, index) => (
            <motion.div 
              key={member.id} 
              className="member-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,212,255,0.2)" }}
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <p>{member.email}</p>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                {member.achievements && (
                  <div className="achievements">
                    <h4>Key Contributions:</h4>
                    <ul>
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Departmental Core Leads */}
      <motion.section 
        className="departmental-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>🪐 Departmental Core Leads</h2>
        <div className="members-grid">
          {departmentalLeads.map((member, index) => (
            <motion.div 
              key={member.id} 
              className={`member-card ${member.status === 'Position Open' ? 'position-open' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255,107,107,0.2)" }}
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <p>{member.email}</p>
                </div>
                {member.status === 'Position Open' && (
                  <div className="position-badge">Position Open</div>
                )}
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                {member.achievements && (
                  <div className="achievements">
                    <h4>Key Contributions:</h4>
                    <ul>
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Departments Section */}
      <motion.section 
        className="teams-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>🛰️ Departments & Teams</h2>
        <div className="teams-grid">
          {teams.map((team, index) => (
            <motion.div 
              key={team.id} 
              className="team-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className="team-header"
                style={{ background: team.color }}
              >
                <h3>{team.name}</h3>
                <div className="team-stats">
                  <span className="member-count">{team.members} Members</span>
                  <span className="team-lead">Led by {team.lead}</span>
                </div>
              </div>
              <div className="team-content">
                <p className="team-description">{team.description}</p>
                <div className="team-projects">
                  <h4>Team Structure:</h4>
                  <ul>
                    {team.teams.map((teamInfo, idx) => (
                      <li key={idx}>{teamInfo}</li>
                    ))}
                  </ul>
                </div>
                <div className="team-actions">
                  <button className="join-team-btn">View Department</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* General Members Info */}
      <motion.section 
        className="general-members-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="general-members-content">
          <h2>👥 General Members</h2>
          <div className="members-info-grid">
            <div className="info-card">
              <h3>Flexible Team Assignment</h3>
              <p>Members are assigned to teams based on their interests and skills, allowing for diverse participation across departments.</p>
            </div>
            <div className="info-card">
              <h3>Dynamic Movement</h3>
              <p>Members can move across teams during the year depending on projects, events, and evolving interests.</p>
            </div>
            <div className="info-card">
              <h3>Growth Opportunities</h3>
              <p>Active members have opportunities to advance to team lead positions and take on greater responsibilities.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Join Us Section */}
      <motion.section 
        className="join-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="join-content">
          <h2>Join Our Community</h2>
          <p>Ready to explore the cosmos with us? Whether you're a beginner or an expert, there's a place for you in LUNA Society.</p>
          <div className="join-buttons">
            <button className="primary-btn">Learn More</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Members;
