import React from 'react';

const ProblemSolutionSection = () => {
  const problemPoints = [
    "Wasting time on formatting quirks (ePub vs. Mobi?)",
    "Losing sales with blurry covers or broken layouts",
    "Feeling stuck between Scrivener, Vellum, and KDP guidelines",
    "Delaying launches because \"tech stuff\" overwhelms you"
  ];

  const solutionTaglines = [
    "The Done-For-You eBook Revolution Starts Here",
    "From Chaos to Bestseller: Your eBook, Mastered",
    "eBook Creation, Uncomplicated: Writing, Design & Publishing in One Place",
    "Where Great Ideas Become Polished eBooks—Fast"
  ];

  return (
    <section className="ebookps-problem-solution-section">
      <div className="ebookps-container">
        {/* Main Heading */}
        <div className="ebookps-main-heading">
          <h1 className="ebookps-title">
            Lost in the eBook Maze? 
            <span className="ebookps-highlight"> We're Your Exit.</span>
          </h1>
        </div>

        <div className="ebookps-content-wrapper">
          {/* Problem Section */}
          <div className="ebookps-problem-section">
            <div className="ebookps-problem-card">
              <div className="ebookps-problem-header">
                <div className="ebookps-problem-icon">
                  <span className="ebookps-cross">✘</span>
                </div>
                <h2 className="ebookps-section-title">The Problem You Solve</h2>
              </div>
              
              <h3 className="ebookps-problem-subtitle">
                Creating an eBook Shouldn't Feel Like Rocket Science
              </h3>
              
              <div className="ebookps-problem-list">
                {problemPoints.map((point, index) => (
                  <div key={index} className="ebookps-problem-item">
                    <span className="ebookps-problem-cross">✘</span>
                    <span className="ebookps-problem-text">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow Connector */}
          <div className="ebookps-arrow-connector">
            <div className="ebookps-arrow">
              <span>→</span>
            </div>
          </div>

          {/* Solution Section */}
          <div className="ebookps-solution-section">
            <div className="ebookps-solution-card">
              <div className="ebookps-solution-header">
                <div className="ebookps-solution-icon">
                  <div className="ebookps-lightbulb">
                    <span>💡</span>
                  </div>
                </div>
                <h2 className="ebookps-section-title ebookps-solution-title">Your Solution</h2>
              </div>
              
              <h3 className="ebookps-solution-subtitle">
                Full-Service eBook Creation: From Blank Page to Bestseller
              </h3>
              
              <div className="ebookps-solution-taglines">
                {solutionTaglines.map((tagline, index) => (
                  <div key={index} className="ebookps-solution-tagline">
                    <span className="ebookps-solution-check">✓</span>
                    <span className="ebookps-solution-text">"{tagline}"</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;