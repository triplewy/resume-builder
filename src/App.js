import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import marked from 'marked';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }
  }
  exportPDF = () => {
    this.resume.save()
  }

  render() {
    return (
      <div className="App">
        <div>
          <button className='exportPDF' onClick={this.exportPDF}>Export as PDF</button>
          <PDFExport paperSize={'Letter'}
            fileName={`Alex Yu Resume ${new Date().toISOString().split('T')[0]}.pdf`}
            title=""
            subject=""
            keywords=""
            ref={(r) => this.resume = r}
          >
            <div className='wrapper'>
              <div className='header'>
                <div className='logo'>
                  <p>A</p>
                  <p>Y</p>
                </div>
                <div className='header-text'>
                  <h1>ALEXANDER YU</h1>
                  <h2>alexander_yu@brown.edu</h2>
                  <h2>617-777-0615</h2>
                </div>
              </div>
              <div className='about'>
                <p>Full Stack Developer</p>
                <p>Needham, MA</p>
                <p>Highly motivated, decisive, and results-oriented individual seeking a 2019 Summer Intership</p>
              </div>
              <div className='section skills' id='skills'>
                <h3>Skills</h3>
                <div>
                  <div>React</div>
                  <div>React-Native</div>
                  <div>Vue</div>
                  <div>Node.js</div>
                  <div>Go</div>
                  <div>MySQL</div>
                  <div>MongoDB</div>
                  <div>AWS</div>
                  <div>Azure</div>
                </div>
              </div>
              <div className='section'>
                <h3>Education</h3>
                <h2>Brown University</h2>
                <h4>Bachelor of Science : Computer Science - Economics | 2016 - 2020</h4>
              </div>
              <div className='section' id='coursework'>
                <h3>Relevant Coursework</h3>
                <div>
                  <h2>CS 1380: Distributed Systems <span>(Spring 2019)</span></h2>
                  <ul>
                    <li>Completing cumulative projects on distributed computing mechanisms (e.g., naming, replication, security, load balancing, etc.)</li>
                  </ul>
                </div>
                <div className='second'>
                  <h2>CS 0220: Discrete Structures and Probability <span>(Spring 2018)</span></h2>
                  <ul>
                    <li>Wrote proofs on computational theory using discrete structures in weekly homework assignments</li>
                  </ul>
                </div>
              </div>
              <div className='section'>
                <h3>Work Experience</h3>
                <div>
                  <h2>Brown University TA</h2>
                  <h4>TA for CS132: Creating Modern Web Apps | Jan 2019, Current</h4>
                  <ul>
                    <li>Redesigned HTML/CSS and React assignments for 120+ students</li>
                    <li>Gave guest lecture on how to get started with React-Native</li>
                  </ul>
                </div>
                <div className='second'>
                  <h2>Unibit.ai</h2>
                  <h4>Front End Internship | Nov 2018, Current</h4>
                  {/* <p>One of two front end developers for an event-based financial analytics startup. </p> */}
                  <ul>
                    <li>Led front-end development in Vue for the entire paid section of the website</li>
                    <li>Used many 3rd party APIs to fetch financial graph data to display using Plotly.js</li>
                  </ul>
                </div>
                {/* <div>
                  <h2>Beijing Institute of Automation</h2>
                  <h4>Deep Learning Internship | Jun 2018, Sep 2018</h4>
                  <p>One of two front end developers for an event-based financial analytics startup. </p>
                  <ul>
                    <li>Learned Vue from scratch in less than a week</li>
                    <li>Led the way in development for the entire paid section of the website</li>
                    <li>Used many 3rd party APIs to fetch graph data that I displayed using Plotly.js </li>
                  </ul>
                </div> */}
              </div>
              <div className='section'>
                <h3>Projects</h3>
                  <div>
                    <h2>Streamline Analytica</h2>
                    <h4>Co-Founder | Oct 2018, Jan 2019</h4>
                    <ul>
                      <li>Created mobile App and website to improve efficiency at 1 manufacturing facility</li>
                      <li>Responsible for entire tech infrastructure which includes React frontend, Node.js backend, and AWS services such as S3, Cloudfront, EC2, RDS, API Gateway, and Elasticache</li>
                    </ul>
                  </div>
              </div>
            </div>
         </PDFExport>
        </div>
        <div className='right'>
          <h1>Input HTML</h1>
          <div>
            <div dangerouslySetInnerHTML={{__html: this.state.input}} />
            {/* <div dangerouslySetInnerHTML={{__html: marked(this.state.input, {sanitize: true})}} /> */}
            <textarea value={this.state.input} rows={10} onChange={(e) => this.setState({ input: e.target.value })} />
          </div>
          <h1>CSS</h1>
          <div>
            <textarea value={this.state.input} rows={10} onChange={(e) => this.setState({ input: e.target.value })} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
