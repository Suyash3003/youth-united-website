import React, { useState } from 'react';
import { validateJoinForm } from '../../../utils/formValidation';
import './JoinUs.css';

const DOMAINS = ['Education', 'Environment', 'Health & Welfare', 'Digital Literacy', 'Events & Outreach', 'Design & Media', 'Tech & Web'];
const YEARS   = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Postgraduate'];
const DEPTS   = ['CSE', 'ECE', 'ME', 'Civil', 'Chemical', 'Biotechnology', 'MBA', 'Physics', 'Mathematics', 'Other'];

export default function ApplicationForm() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', department:'', year:'', domain:'', motivation:'' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => {
    setForm(f => ({ ...f, [field]: value }));
    setErrors(e => ({ ...e, [field]: '' }));
  };

  const handleSubmit = () => {
    const { valid, errors: errs } = validateJoinForm(form);
    if (!valid) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon"><i className="fa-solid fa-check"></i></div>
        <h3>Application Submitted!</h3>
        <p>Thank you, {form.name}. We'll be in touch within 3–5 working days.</p>
      </div>
    );
  }

  return (
    <div className="application-form">
      <div className="form-row">
        <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
          <label>Full Name *</label>
          <input type="text" placeholder="Your full name" value={form.name} onChange={e => update('name', e.target.value)} />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>
        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
          <label>Email Address *</label>
          <input type="email" placeholder="you@thapar.edu" value={form.email} onChange={e => update('email', e.target.value)} />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => update('phone', e.target.value)} />
        </div>
        <div className={`form-group ${errors.department ? 'has-error' : ''}`}>
          <label>Department *</label>
          <select value={form.department} onChange={e => update('department', e.target.value)}>
            <option value="">Select department</option>
            {DEPTS.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          {errors.department && <span className="form-error">{errors.department}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className={`form-group ${errors.year ? 'has-error' : ''}`}>
          <label>Year of Study *</label>
          <select value={form.year} onChange={e => update('year', e.target.value)}>
            <option value="">Select year</option>
            {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          {errors.year && <span className="form-error">{errors.year}</span>}
        </div>
        <div className={`form-group ${errors.domain ? 'has-error' : ''}`}>
          <label>Area of Interest *</label>
          <select value={form.domain} onChange={e => update('domain', e.target.value)}>
            <option value="">Select a domain</option>
            {DOMAINS.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          {errors.domain && <span className="form-error">{errors.domain}</span>}
        </div>
      </div>
      <div className={`form-group ${errors.motivation ? 'has-error' : ''}`}>
        <label>Motivation *</label>
        <textarea
          rows={4}
          placeholder="Tell us your motivation and what you hope to contribute..."
          value={form.motivation}
          onChange={e => update('motivation', e.target.value)}
        />
        {errors.motivation && <span className="form-error">{errors.motivation}</span>}
      </div>
      <div className="form-submit">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit Application <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
