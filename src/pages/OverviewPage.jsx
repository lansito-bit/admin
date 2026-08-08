import { Link } from "react-router-dom";
import { navConfig } from "../config/links";
import heroImage from "../assets/hero.png";
import "./OverviewPage.css";

function OverviewPage() {
  const sections = navConfig.filter((group) => group.section !== "Overview");

  return (
    <div className="overview-page">
      <section className="overview-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.55)), url(${heroImage})` }}>
        <div className="overview-hero__content">
          <h1 className="overview-hero__title">DASHBOARD</h1>
          <div className="overview-hero__divider" />
          <p className="overview-hero__subtitle">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</p>
          <div className="overview-hero__logos">
            <img src="/logo-bsit.jpg" alt="BSIT logo" className="overview-hero__logo" />
            <img src="/logo-ucl.jpg" alt="UCL logo" className="overview-hero__logo" />
          </div>
        </div>
      </section>

      <div className="overview-page__header">
        <div>
          <p className="overview-page__breadcrumb">
            Overview / <span>Dashboard Summary</span>
          </p>
          <h1 className="overview-page__title">Dashboard Overview</h1>
          <p className="overview-page__subtitle">
            Quick access to the most important sections, organized for easy navigation and fast decision-making.
          </p>
        </div>
      </div>

      <div className="overview-page__stat-grid">
        <article className="overview-card">
          <h2>Summary</h2>
          <p>
            This dashboard is design for BSIT faculty and staff to manage and monitor various aspects of the program.
             It provides quick access to key sections, including student records, course management, and administrative tools.
          </p>
        </article>

        <article className="overview-card">
          <h2>Key sections</h2>
          <ul>
            {sections.map((group) => (
              <li key={group.section}>
                {group.section} — {group.items.length} items
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="overview-page__sections">
        {sections.map((group) => (
          <section className="overview-section" key={group.section}>
            <div className="overview-section__heading">
              <h3>{group.section}</h3>
              <span>{group.items.length} items</span>
            </div>
            <p className="overview-section__text">Important items in this section.</p>
            <ul>
              {group.items.map((item) => (
                <li key={item.label}>
                  {item.path ? (
                    <Link className="overview-item-link" to={item.path}>
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      className="overview-item-link"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default OverviewPage;
