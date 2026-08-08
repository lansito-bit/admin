import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navConfig } from "../config/links";
import "./Sidebar.css";

function Sidebar() {
  // Track which sections are expanded. All open by default.
  const [openSections, setOpenSections] = useState(
    () => Object.fromEntries(navConfig.map((s) => [s.section, true]))
  );

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__logos">
          <img src="/logo-bsit.jpg" alt="PHINMA Union College of Laguna - BSIT" className="sidebar__logo-img" />
          <img src="/logo-ucl.jpg" alt="Union College of Laguna" className="sidebar__logo-img" />
        </div>
      </div>

      <nav className="sidebar__nav">
        {navConfig.map((group) => (
          <div className="sidebar__group" key={group.section}>
            <button
              className={`sidebar__section-btn ${openSections[group.section] ? "sidebar__section-btn--open" : ""}`}
              onClick={() => toggleSection(group.section)}
            >
              <span>{group.section}</span>
              <span className={`sidebar__chevron ${openSections[group.section] ? "open" : ""}`}>
                ›
              </span>
            </button>

            {openSections[group.section] && (
              <ul className="sidebar__items">
                {group.items.map((item) =>
                  item.href ? (
                    // External link (Google Sheets / Forms / Drive) — opens in a new tab
                    <li key={item.label}>
                      <a
                        className="sidebar__link sidebar__link--external"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                        <span className="sidebar__ext-icon">↗</span>
                      </a>
                    </li>
                  ) : (
                    // Internal route
                    <li key={item.label}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
