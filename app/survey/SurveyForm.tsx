'use client'

import { useState } from 'react'
import Link from 'next/link'

function Options({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="survey-options">
      {options.map((opt) => (
        <label key={opt} className="survey-option">
          <input type="checkbox" name={name} value={opt} />
          <span className="survey-radio" />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  )
}

export default function SurveyForm() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const response = await fetch('https://formspree.io/f/mlgppwoe', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    if (response.ok) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="survey-success">
        <p>Thank you. Your response has been recorded.</p>
        <p><Link href="/">Back to Sainte-Patrie &rarr;</Link></p>
      </div>
    )
  }

  return (
    <>
      <h1>Six Questions.</h1>

      <p className="subheading">
        These six questions help us understand who is following Sainte-Patrie and why. We collect your name, email address, and answers &mdash; nothing beyond that.
      </p>

      <hr className="divider" />

      <form onSubmit={handleSubmit}>

        {/* Contact info */}
        <div className="survey-question survey-question--first">
          <p className="survey-q-text"><span className="survey-q-number">&mdash;&ensp;</span>Your details</p>
          <div className="survey-field">
            <label htmlFor="full_name" className="survey-field-label">Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              className="survey-text-input"
              placeholder="Your name"
              required
            />
          </div>
          <div className="survey-field">
            <label htmlFor="email" className="survey-field-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="survey-text-input"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        {/* Q1 */}
        <div className="survey-question">
          <p className="survey-q-text"><span className="survey-q-number">01 &mdash;</span> How long have you been outside Haiti?</p>
          <Options name="q1_time_abroad" options={[
            'Less than 2 years',
            '2 to 5 years',
            '5 to 15 years',
            'More than 15 years',
            'I was born abroad',
          ]} />
        </div>

        {/* Q2 */}
        <div className="survey-question">
          <p className="survey-q-text"><span className="survey-q-number">02 &mdash;</span> Have you ever tried to invest in Haiti and stopped?</p>
          <Options name="q2_invest_history" options={[
            'Never tried',
            'Tried and it worked',
            "Tried and it didn't",
            "I've been waiting for the right conditions",
          ]} />
        </div>

        {/* Q3 */}
        <div className="survey-question">
          <p className="survey-q-text"><span className="survey-q-number">03 &mdash;</span> What has held you back most?</p>
          <Options name="q3_obstacle" options={[
            "I couldn't find a trustworthy structure",
            "I didn't know where my money would actually go",
            "I didn't feel safe going back",
            "I didn't see a project worth believing in",
            'Nothing has held me back',
          ]} />
        </div>

        {/* Q4 */}
        <div className="survey-question">
          <p className="survey-q-text"><span className="survey-q-number">04 &mdash;</span> What does Haiti need to get right first, before anything else?</p>
          <Options name="q4_priority" options={[
            'Security',
            'Property rights and land',
            'Accountable institutions',
            'Jobs and economic opportunity',
            'Political stability',
          ]} />
        </div>

        {/* Q5 */}
        <div className="survey-question">
          <p className="survey-q-text"><span className="survey-q-number">05 &mdash;</span> If Sainte-Patrie delivers what it promises, what does that mean to you personally?</p>
          <Options name="q5_meaning" options={[
            'A place to retire or return to',
            'Somewhere to invest with confidence',
            'A reason to believe Haiti can change',
            'A city for my children or family',
            'All of the above',
          ]} />
        </div>

        {/* Q6 */}
        <div className="survey-question">
          <p className="survey-q-text"><span className="survey-q-number">06 &mdash;</span> What would make you trust this enough to take the next step?</p>
          <textarea name="q6_trust" rows={6} placeholder="Share your thoughts…" />
          <p className="survey-open-label">Open response</p>
        </div>

        <div className="survey-submit">
          <button type="submit" className="survey-btn">Submit your answers &rarr;</button>
        </div>

      </form>
    </>
  )
}
