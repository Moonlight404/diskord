import React from "react";
import { Link, Redirect } from "react-router-dom";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemoRequest = this.handleDemoRequest.bind(this);
  }

  handleDemoRequest(e) {
    e.preventDefault();
    this.props.demologin().then(() => this.props.history.push("/channels/@me"));
  }

  render() {
    const { currentMemberId, removeErrors } = this.props;
    return (
      <div className="splash-background">
        <div className="splash-container">
          <nav className="splash-nav">
            <div className="left-splash-nav">
              {/* <img className="diskord-logo" src={diskordLogo}/> */}
              <a
                href="http://github.com/al6/diskord"
                className="splash-nav-item"
              >
                Diskord on Github
              </a>
            </div>
            <div className="right-splash-nav">
              <div className="network-buttons">
                <a href="http://github.com/al6">
                  <img
                    className="github-button"
                    src="https://diskord-pro.s3.amazonaws.com/github-logo.png"
                  />
                </a>
                <a href="https://www.linkedin.com/in/albertlee3/">
                  <img
                    className="linkedin-button"
                    src="https://diskord-pro.s3.amazonaws.com/linkedin.svg"
                  />
                </a>
                <a href="https://angel.co/">
                  <img
                    className="angellist-button"
                    src="https://diskord-pro.s3.amazonaws.com/angellist.png"
                  />
                </a>
              </div>
              <Link
                className="splash-nav-button"
                to={currentMemberId ? `/channels/@me` : `/login`}
                onClick={() => removeErrors()}
              >
                {currentMemberId ? "Open" : "Login"}
              </Link>
            </div>
          </nav>
          <div className="landing-hero">
            <main className="splash-main">
              <div className="splash-header">
                <div className="splash-header-main-container">
                  <span className="splash-header-main">
                    It's time to ditch Skype and TeamSpeak.
                  </span>
                </div>
                <span className="splash-header-sub">
                  All-in-one voice and text chat for gamers that's free, secure,
                  and works on both your desktop and phone. Stop paying for
                  TeamSpeak servers and hassling with Skype. Simplify your life.
                </span>
                <div className="splash-main-github-demo-buttons">
                  <Link
                    to={`/register`}
                    className="splash-main-left-button"
                    onClick={() => removeErrors()}
                  >
                    Sign Up
                  </Link>
                  <a
                    className="splash-main-right-button"
                    onClick={this.handleDemoRequest}
                  >
                    Try the Demo
                  </a>
                </div>
              </div>
            </main>
            <div className="splash-margin-container">
              <div className="splash-image-container">
                {/* left of monitor */}
                <img className="x" src={x} />
                <img className="triangle" src={triangle} />
                <img
                  className="dot"
                  src="https://diskord-pro.s3.amazonaws.com/filled-dot.svg"
                />
                <img className="flask" src={flask} />
                <img
                  className="android"
                  src="https://diskord-pro.s3.amazonaws.com/android.svg"
                />
                <img className="iphone" src={iphone} />
                <img
                  className="game-controller"
                  src="https://diskord-pro.s3.amazonaws.com/game-controller.svg"
                />
                <img
                  className="bomb"
                  src="https://diskord-pro.s3.amazonaws.com/bomb.svg"
                />
                <img
                  className="coin-left"
                  src="https://diskord-pro.s3.amazonaws.com/coin.svg"
                />

                <img className="monitor" src={monitor} />

                {/* right of monitor */}
                <img
                  className="coin-top-middle"
                  src="https://diskord-pro.s3.amazonaws.com/coin.svg"
                />
                <img
                  className="filled-dot-above-monitor-and-laptop"
                  src="https://diskord-pro.s3.amazonaws.com/filled-dot.svg"
                />
                <img className="game-cartridge" src={cartridge} />
                <img className="laptop" src={laptop} />
                <img className="headphones" src={headphones} />
                <img className="shield" src={shield} />
                <img
                  className="filled-dot-left-of-android"
                  src="https://diskord-pro.s3.amazonaws.com/filled-dot.svg"
                />
                <img
                  className="filled-dot-directly-above-iphone"
                  src="https://diskord-pro.s3.amazonaws.com/filled-dot.svg"
                />
                <img
                  className="filled-dot-bottom-right"
                  src="https://diskord-pro.s3.amazonaws.com/filled-dot.svg"
                />
                <img
                  className="filled-dot-top-right"
                  src="https://diskord-pro.s3.amazonaws.com/filled-dot.svg"
                />
                <img
                  className="triangle-left"
                  src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg"
                />
                <img
                  className="triangle-top-middle"
                  src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg"
                />
              </div>
            </div>
          </div>
          <img src="https://diskord-pro.s3.amazonaws.com/footer.svg" />
          <div className="footer-main">
            {/* <div className="footer-links">
                <div className="splash-footer-links-container">footer-links</div>
                <div className="splash-footer-links-container">
                  <div className="footer-links-category">
                    Product
                  </div>
                  <div>Download</div>
                  <div>Branding</div>
                  <div>Nitro</div>
                </div>
                <div className="splash-footer-links-container">
                  <div className="footer-links-category">
                    Developers
                    </div> 
                  <div>Sell Your Game</div> 
                  <div>Rich Presence</div> 
                  <div>Verification</div> 
                  <div>Applications</div> 
                  <div>Documentation</div> 
                </div>
                <div className="splash-footer-links-container">
                  <div className="footer-links-category">
                    Resources
                  </div>
                  <div>Help & Support</div>
                  <div>Guidelines</div>
                  <div>Feedback</div>
                  <div>Terms</div>
                  <div>Privacy</div>
                  <div>Status</div>
                </div>
                <div className="splash-footer-links-container">
                  <div className="footer-links-category">
                    Company
                  </div>
                  <div>About</div>
                  <div>Blog</div>
                  <div>Jobs</div>
                </div>
                <div className="splash-footer-links-container">
                  <div className="footer-links-category">
                    More
                  </div>
                  <div>Partners</div>
                  <div>HypeSquad</div>
                  <div>Merch Store</div>
                  <div>Press Inquiries</div>
                  <div>Open Source</div>
                </div>
              </div> */}
            <footer className="splash-footer">
              <div className="left-splash-footer">
                <div className="splash-footer-header-main">
                  Ready to try Diskord? It's free!
                </div>
                <div className="splash-footer-header-sub">
                  JOIN OVER 0.250 PLAYERS TODAY
                </div>
              </div>

              <div className="right-splash-footer">
                <Link
                  className="splash-footer-button"
                  to={currentMemberId ? `/channels/@me` : `/register`}
                  onClick={() => removeErrors()}
                >
                  <div className="splash-footer-button-text">
                    {currentMemberId ? "Open" : "Register Now"}
                  </div>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
