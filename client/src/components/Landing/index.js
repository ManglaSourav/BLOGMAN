import React from 'react'
import styled from 'styled-components'
import './index.css'
import Navbar from '../common/Navbar'
import { withRouter } from 'react-router-dom'
// pink color: #eea9a9
// blue color: #c6e6e1
// const aStyle = {
//   //  text-decoration:'none';
//   color: "#eea9a9",
//   textDecoration: "none",
//   background: "#c6e6e1",
//   fontWeight: "bold"
// };

const Button = styled.a`
  color: #eea9a9;
  text-decoration: 'none';
  background: #c6e6e1;
  font-weight: 'bold';
`

function Landing(props) {
  return (
    <div>
      <header id='showcase'>
        <Navbar />
        <div id='setting-up'>
          <span className='item1'>
            <strong>Welcome to Blogman!</strong>
          </span>
          <div className='item2'>
            <div className='nitem1' />
            <span className='nitem2'>
              {' '}
              <p>Express Yourself and Share Your Passions.</p>
              <p>Make A Difference.</p>
              <p>Share Your Knowledge.</p>
              <p>Refine Your Writing Skills.</p>
              <p>Build Your Professional Network.</p>
              <p style={{ fontSize: '35px' }}>Starting A Blog Today.</p>
            </span>
          </div>
          <Button
            className='button is-medium item3'
            onClick={() => props.history.push('/register')}>
            {/* <a href=' ' style={aStyle} className='button is-medium item3'> */}
            <i className='fab fa-ravelry'> </i> &nbsp;Get started
            {/* </a> */}
          </Button>
        </div>
      </header>
    </div>
  )
}
export default withRouter(Landing)

// const [rightPanel, setPanel] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [pass2, setPass2] = useState("");
