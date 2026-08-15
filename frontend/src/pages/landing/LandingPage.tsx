import { useEffect } from 'react';
import './LandingPage.css';

export default function LandingPage() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));

    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-links a').forEach((a) => a.classList.remove('active'));
        (link as HTMLElement).classList.add('active');
      });
    });
  }, []);

  return (
    <div className="landing-page">
      <header className="nav">
        <div className="nav-inner">
          <div className="logo">Task Flow</div>
          <nav className="nav-links">
            <a href="#" className="active">Features</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div className="nav-right">
            <div className="icon-btn" title="Notifications">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </div>
            <div className="icon-btn" title="Settings">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </div>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <span className="badge">Now in Enterprise Beta</span>
          <h1>Software Project Management<br /><span className="accent">Simplified.</span></h1>
          <p>The all-in-one workspace for high-performance engineering teams. Manage tasks, plan sprints, and govern security with organized density.</p>
          <div className="hero-ctas">
            <a href="#" className="btn btn-primary">Get Started Free →</a>
            <a href="#" className="btn btn-ghost">Request Demo</a>
          </div>
        </div>

        <div className="app-preview-wrap reveal" id="appPreview">
          <div className="app-window">
            <div className="app-titlebar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="app-body">
              <aside className="app-sidebar">
                <div className="brand"><span className="sq"></span>Task Flow</div>
                <nav>
                  <a className="current"><span className="doticon"></span>Dashboard</a>
                  <a><span className="doticon"></span>Projects</a>
                  <a><span className="doticon"></span>Tasks</a>
                  <a><span className="doticon"></span>Team</a>
                  <a><span className="doticon"></span>Reports</a>
                  <a><span className="doticon"></span>Settings</a>
                </nav>
              </aside>
              <main className="app-main">
                <div className="app-toprow">
                  <div className="app-search">Search tasks, projects...</div>
                  <div className="app-toprow-right">
                    <span className="app-create-btn">+ Create Task</span>
                    <span className="avatar"></span>
                  </div>
                </div>
                <div className="app-project-title">Project: Q3 Marketing Campaign</div>
                <div className="board">
                  <div>
                    <div className="col-head">Backlog <span className="col-count">8</span></div>
                    <div className="kard"><div className="ktitle">Website Redesign</div><div className="ksub">Project</div><div className="kpriority high">Priority: High</div><div className="kfooter"><span className="kavatar"></span>M. Chen · Sep 14</div></div>
                    <div className="kard"><div className="ktitle">Social Media Strategy</div><div className="ksub">Project</div><div className="kpriority medium">Priority: Medium</div><div className="kfooter"><span className="kavatar"></span>J. Patel · Sep 15</div></div>
                    <div className="kard"><div className="ktitle">Competitor Analysis</div><div className="ksub">Project</div><div className="kpriority low">Priority: Low</div><div className="kfooter"><span className="kavatar"></span>A. Kim · Sep 16</div></div>
                  </div>
                  <div>
                    <div className="col-head">To Do <span className="col-count">6</span></div>
                    <div className="kard"><div className="ktitle">Social Media Strategy</div><div className="ksub">Project</div><div className="kpriority medium">Priority: Medium</div><div className="kfooter"><span className="kavatar"></span>J. Patel · Sep 15</div></div>
                    <div className="kard"><div className="ktitle">Email Campaign Draft</div><div className="ksub">Project</div><div className="kpriority low">Priority: Low</div><div className="kfooter"><span className="kavatar"></span>S. Owen · Sep 15</div></div>
                    <div className="kard"><div className="ktitle">Comp Campaign Draft</div><div className="ksub">Project</div><div className="kpriority low">Priority: Low</div><div className="kfooter"><span className="kavatar"></span>S. Owen · Sep 15</div></div>
                  </div>
                  <div>
                    <div className="col-head">In Progress <span className="col-count">3</span></div>
                    <div className="kard"><div className="ktitle">Design Landing Page</div><div className="ksub">Project</div><div className="kpriority high">Priority: High</div><div className="kfooter"><span className="kavatar"></span>M. Chen · Sep 14</div><div className="bar"><span style={{ width: '65%' }}></span></div></div>
                    <div className="kard"><div className="ktitle">Content Creation</div><div className="ksub">Project</div><div className="kpriority medium">Priority: Medium</div><div className="kfooter"><span className="kavatar"></span>S. Khan · Sep 15</div></div>
                    <div className="kard"><div className="ktitle">SEO Audit</div><div className="ksub">Project</div><div className="kpriority low">Priority: Low</div><div className="kfooter"><span className="kavatar"></span>A. Kim · Sep 15</div></div>
                  </div>
                  <div>
                    <div className="col-head">Review <span className="col-count">2</span></div>
                    <div className="kard"><div className="ktitle">Competitor Analysis</div><div className="ksub">Project</div><div className="kpriority high">Priority: High</div><div className="kfooter"><span className="kavatar"></span>L. Patel · Sep 15</div></div>
                    <div className="kard"><div className="ktitle">Content Creation</div><div className="ksub">Project</div><div className="kpriority high">Priority: High</div><div className="kfooter"><span className="kavatar"></span>S. Khan · Sep 15</div></div>
                  </div>
                  <div>
                    <div className="col-head">Done <span className="col-count">12</span></div>
                    <div className="kard"><div className="ktitle">Competitor Analysis</div><div className="ksub">Project</div><div className="kpriority low">Priority: Low</div><div className="kfooter"><span className="kavatar"></span>L. Patel · Sep 15</div></div>
                    <div className="kard"><div className="ktitle">Social Media Strategy</div><div className="ksub">Project</div><div className="kpriority low">Priority: Low</div><div className="kfooter"><span className="kavatar"></span>L. Patel · Sep 15</div></div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Engineered for Efficiency</h2>
            <p>Functional depth disguised as minimalist simplicity.</p>
          </div>

          <div className="feature-grid-top">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <h3>Dynamic Task Allocation</h3>
              <p>Automated workload balancing with real-time capacity monitoring. Move tasks seamlessly across stages with smart automation triggers.</p>
              <div className="task-mock">
                <div className="panel">
                  <div className="lbl">In Progress</div>
                  <div className="line"></div>
                  <div className="line short"></div>
                  <div className="chip"></div>
                </div>
                <div className="panel">
                  <div className="lbl">Backlog</div>
                  <div className="line"></div>
                  <div className="line short"></div>
                  <div className="chip"></div>
                </div>
              </div>
            </div>

            <div className="card card-dark reveal">
              <div className="card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
              </div>
              <h3>Sprint Planning</h3>
              <p>Iterate faster with data-driven sprint reviews and predictive velocity tracking. Align your team's output with project milestones.</p>
              <div className="terminal">
                <div className="prompt">$ flow sprint status --active</div>
                <div className="out">Velocity: 42pts &nbsp;|&nbsp; Remaining: 33pts</div>
              </div>
            </div>
          </div>

          <div className="feature-grid-bottom">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>RBAC Governance</h3>
              <p>Enterprise-grade Role Based Access Control. Manage permissions with granular precision across services.</p>
              <div className="tag-row">
                <span className="tag">ADMIN_ACCESS</span>
                <span className="tag">READ_ONLY</span>
              </div>
            </div>

            <div className="card reveal">
              <div className="card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </div>
              <h3>Integrated Communication</h3>
              <p>Direct context-linked messaging. Tag tasks in chats and never lose the thread of conversation during execution.</p>
              <div className="chat-mock">
                <span className="cavatar"></span>
                <div className="clines">
                  <div className="cline"></div>
                  <div className="cline"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="gov-banner reveal">
            <div className="gov-left">
              <h2>Total Governance Control</h2>
              <p>Our multi-layered RBAC system ensures that users only see what they need, from project allocation to task execution.</p>
              <ul className="gov-list">
                <li><span className="check">✓</span>Auth Service Integration</li>
                <li><span className="check">✓</span>Granular Permission Service</li>
                <li><span className="check">✓</span>Project-level Governance</li>
              </ul>
            </div>
            <div className="gov-right">
              <div className="gov-row">
                <span className="gicon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                  </svg>
                </span>
                <div className="gtext">
                  <div className="gname">Admin User</div>
                  <div className="grole">Full System Governance</div>
                </div>
                <span className="gov-badge master">MASTER</span>
              </div>
              <div className="gov-row">
                <span className="gicon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                  </svg>
                </span>
                <div className="gtext">
                  <div className="gname">Project Owner</div>
                  <div className="grole">Task Allocation &amp; Review</div>
                </div>
                <span className="gov-badge project">PROJECT</span>
              </div>
              <div className="gov-row">
                <span className="gicon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </span>
                <div className="gtext">
                  <div className="gname">Contributor</div>
                  <div className="grole">Task Execution</div>
                </div>
                <span className="gov-badge view">VIEW</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap reveal">
          <h2>Ready to streamline your workflow?</h2>
          <p>Join 500+ engineering teams already scaling with ProjectFlow. No credit card required to start.</p>
          <div className="cta-btns">
            <a href="#" className="btn btn-primary">Get Started for Free</a>
            <a href="#" className="btn btn-outline-light">Contact Sales</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">ProjectFlow</div>
              <p>High-performance project management for the modern engineering era.</p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Enterprise</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 ProjectFlow. All rights reserved.</p>
            <div className="footer-socials">
              <a href="#" title="Twitter/X">𝕏</a>
              <a href="#" title="GitHub">◐</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
