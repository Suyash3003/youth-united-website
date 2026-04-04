import React, { useState } from 'react';
import './MemberCard.css';

export default function MemberCard({ member }) {
  const { name, role, department, year, initials, bio, faculty, photo } = member;
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(photo) && !photoFailed;

  return (
    <div className={`member-card reveal${faculty ? ' member-card--faculty' : ''}`}>
      <div
        className={`member-avatar${showPhoto ? ' member-avatar--photo' : ''}`}
      >
        {showPhoto ? (
          <img
            src={photo}
            alt={name}
            className="member-photo"
            loading="lazy"
            decoding="async"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          initials
        )}
      </div>
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <div className="member-meta">
          {faculty ? (
            <>
              <span><i className="fa-solid fa-building-columns"></i> {department}</span>
              <span><i className="fa-solid fa-chalkboard-user"></i> Thapar Institute</span>
            </>
          ) : (
            <span><i className="fa-solid fa-graduation-cap"></i> {year}</span>
          )}
        </div>
        {bio && <p className="member-bio">{bio}</p>}
      </div>
    </div>
  );
}
