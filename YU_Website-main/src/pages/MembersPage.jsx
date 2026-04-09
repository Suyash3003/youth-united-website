import React, { useEffect, useState } from 'react';
import members, { facultyMembers, techMembers } from '../data/members';
import MemberCard from '../components/sections/MemberCard/MemberCard';
import { triggerReveal } from '../utils/reveal';
import '../components/sections/MemberCard/MemberCard.css';
import '../components/sections/EventCard/EventCard.css';
import '../components/sections/About/About.css';
import './MembersPage.css';

/** Order: All → Faculty → hierarchy (matches org structure). */
const ROLE_TABS = [
  { key: 'All', label: 'All' },
  { key: 'Faculty', label: 'Faculty' },
  { key: 'general-secretary', label: 'General Secretary' },
  { key: 'joint-secretary', label: 'Joint Secretary' },

  { key: 'em-heads', label: 'EM Heads' },
  { key: 'marketing-heads', label: 'Marketing Heads' },
  { key: 'Developers', label: 'Developers' },
];

export default function MembersPage() {
  const [active, setActive] = useState('All');

  useEffect(() => { setTimeout(triggerReveal, 100); }, [active]);

  const showFaculty = active === 'All' || active === 'Faculty';
  const showTech = active === 'All' || active === 'Developers';
  
  const filteredStudents =
    active === 'All' || active === 'Faculty' || active === 'Developers'
      ? active === 'Faculty' || active === 'Developers'
        ? []
        : members
      : members.filter(m => m.roleFilter === active);

  return (
    <main>
      <div className="about-hero" style={{ minHeight: '320px' }}>
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <span className="page-label">Our Members</span>
          <h1>The <em style={{ fontStyle:'italic', color:'var(--green-soft)' }}>People</em> Behind the Work</h1>
          <p>500+ students from every corner of Thapar, united by the belief that they can make a real difference.</p>
        </div>
      </div>

      <section className="members-page-section">
        <div className="members-page-inner">
          <div className="events-filter-tabs members-role-tabs">
            {ROLE_TABS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={`filter-tab ${active === key ? 'active' : ''}`}
                onClick={() => setActive(key)}
              >
                {label}
              </button>
            ))}
          </div>
          {showFaculty && (
            <div className="team-block team-block--faculty" style={{ marginTop: 32 }}>
              <h3 className="team-block-title">Faculty Mentors</h3>
              <div className="faculty-grid">
                {facultyMembers.map(m => <MemberCard key={m.id} member={m} />)}
              </div>
            </div>
          )}
          {active !== 'Faculty' && active !== 'Developers' && (
            <div className="team-block team-block--students" style={{ marginTop: showFaculty && active === 'All' ? 32 : 40 }}>
              <h3 className="team-block-title">Student Representative</h3>
              <div className="members-grid members-leadership-grid">
                {filteredStudents.map(m => <MemberCard key={m.id} member={m} />)}
              </div>
            </div>
          )}
          {active !== 'Faculty' && active !== 'Developers' && filteredStudents.length === 0 && (
            <p className="members-empty-hint">
              No members in this role yet.
            </p>
          )}
          {showTech && (
            <div className="team-block team-block--tech" style={{ marginTop: active === 'All' ? 48 : 32 }}>
              <h3 className="team-block-title">Website Developers</h3>
              <div className="faculty-grid">
                {techMembers.map(m => <MemberCard key={m.id} member={m} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
