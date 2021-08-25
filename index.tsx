import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  ChatboxOutline,
  ChevronDownOutline,
  HelpCircleOutline,
  LogOutOutline,
  PersonOutline,
  SettingsOutline
} from 'react-ionicons';
import './style.css';

interface AppProps {}
interface AppState {
  isToggle: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
  }
  toogle() {
    this.setState({ isToggle: !this.state.isToggle });
  }
  render() {
    return (
      <section className="body">
        <div className={`card ${this.state.isToggle ? 'active' : ''}`}>
          <div className="content">
            <div className="imgBx">
              <img
                src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <h2>
              Breno Silva <br />
              <span>Web designer</span>
            </h2>
          </div>
          <ul className="navigation">
            <li>
              <a href="#">
                <PersonOutline color="currentColor" />
                Edit Profile
              </a>
            </li>
            <li>
              <a href="#">
                <ChatboxOutline color="currentColor" />
                Inbox
              </a>
            </li>
            <li>
              <a href="#">
                <SettingsOutline color="currentColor" />
                Settings
              </a>
            </li>
            <li>
              <a href="#">
                <HelpCircleOutline color="currentColor" /> Support
              </a>
            </li>
            <li>
              <a href="#">
                <LogOutOutline color="currentColor" />
                Logout
              </a>
            </li>
          </ul>
          <div className="toggle" onClick={() => this.toogle()}>
            <ChevronDownOutline color="currentColor" />
          </div>
        </div>
      </section>
    );
  }
}

render(<App />, document.getElementById('root'));
