import { useEffect, useState, type CSSProperties, type ReactNode } from "react"
import envelope from "./assets/lace-envelope.jpg"
import invitationPattern from "./assets/o.png"
import laceCard from "./assets/lace-card-transparent.png"
import newPhoto from "./assets/por.png"
import seal from "./assets/w.jpg"
import plaque from "./assets/plaque.png";
import openEnvelope from "./assets/open-envelope.png"

const WEDDING_DATE = new Date("2026-11-12T20:00:00")
const COUPLE_HANDS = newPhoto
  
type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const distance = Math.max(0, WEDDING_DATE.getTime() - Date.now())
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  }
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3v3m10-3v3M4.5 9.5h15M6 5h12a2 2 0 0 1 2 2v12H4V7a2 2 0 0 1 2-2Z" />
      <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 8.5h3l1.2-2h7.6l1.2 2h3v10H4v-10Z" />
      <circle cx="12" cy="13.5" r="3" />
      <path d="m5 5 14 15" />
    </svg>
  )
}

function ChildIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="6.5" r="2.5" />
      <path d="M8 20v-4.5l-2-2 2-4h8l2 4-2 2V20M9 12h6" />
      <path d="m5 4 14 16" />
    </svg>
  )
}

function SnapchatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.4c-2.7 0-4.4 2.1-4.4 5.1 0 .8.1 1.5.2 2.1-.4.4-1 .7-1.7.7-.6 0-1 .3-1 .7 0 .7 1.1.9 2 1.2.4.1.5.3.3.7-.4.8-1.4 1.6-2.5 1.8-.5.1-.8.5-.7.9.2.8 1.6 1 2.7 1.2.5.1.7.4.8.8.1.5.3.7.8.6.8-.1 1.5-.7 3.5-.7s2.7.6 3.5.7c.5.1.7-.1.8-.6.1-.4.3-.7.8-.8 1.1-.2 2.5-.4 2.7-1.2.1-.4-.2-.8-.7-.9-1.1-.2-2.1-1-2.5-1.8-.2-.4-.1-.6.3-.7.9-.3 2-.5 2-1.2 0-.4-.4-.7-1-.7-.7 0-1.3-.3-1.7-.7.1-.6.2-1.3.2-2.1 0-3-1.7-5.1-4.4-5.1Z" />
    </svg>
  )
}

function Detail({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <div className="detail">
      <span className="detail-icon">{icon}</span>
      <div>
        <p className="detail-title">{title}</p>
        <div className="detail-copy">{children}</div>
      </div>
    </div>
  )
}

export default function App() {
  const [opening, setOpening] = useState(false)
  const [opened, setOpened] = useState(false)
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const openInvitation = () => {
    if (opening) return
    setOpening(true)
    window.setTimeout(() => setOpened(true), 1200)
  }

  const countdown = [
    { value: timeLeft.days, label: "يوم" },
    { value: timeLeft.hours, label: "ساعة" },
    { value: timeLeft.minutes, label: "دقيقة" },
    { value: timeLeft.seconds, label: "ثانية" },
  ]

  return (
    <main
      className="wedding-page"
      style={
        { "--paper-pattern": `url(${invitationPattern})` } as CSSProperties
      }
    >
      <section className={`welcome ${opening ? "is-opening" : ""}`}>
        <div className="welcome-heading">
          <span>Save the date</span>
          <h1>You're Invited</h1>
          <i />
        </div>

        <button
          className="envelope-button"
          onClick={openInvitation}
          aria-label="فتح دعوة التخرج"
        >
          <span className="envelope-shadow" />

{opening ? (
  <img
    className="envelope-image"
    src={openEnvelope}
    alt="الظرف المفتوح"
  />
) : (
  <>
    <span className="envelope-contents" aria-hidden="true">
      <span className="hands-photo">
        <img src={COUPLE_HANDS} alt="" />
        <small>12 · 11 · 26</small>
      </span>
      <img className="plaque-image" src={plaque} alt="Shahd & Omran" />
      <span className="name-ticket">
        <small>THE WEDDING OF</small>
        <strong>
          esraa <i>&amp;</i> abdo
        </strong>
        <b>Save the date</b>
      </span>
    </span>

    <img className="envelope-image" src={envelope} alt="" />
    <img className="envelope-flap" src={envelope} alt="" />
    <img className="wax-seal" src={seal} alt="" />
  </>
)}
        </button>

        {!opening ? (
          <button className="open-prompt" onClick={openInvitation}>
            <svg
              className="prompt-arrow"
              viewBox="0 0 80 78"
              aria-hidden="true"
            >
              <path d="M12 70C10 43 28 18 62 12" />
              <path d="m49 7 14 5-8 13" />
            </svg>
            <span>Tap the envelope to view the invitation</span>
            <span className="prompt-line" />
          </button>
        ) : (
          <a className="scroll-prompt" href="#invitation">
            <span>مرّري للأسفل لرؤية الدعوة</span>
            <i />
          </a>
        )}
      </section>

      <section
        id="invitation"
        className={`invitation ${opened ? "is-visible" : ""}`}
        dir="rtl"
      >
        <header className="invitation-header">
          <p>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
          <span>دعوة تخرج</span>
        </header>

        <article className="invitation-card">
          <img className="lace-card" src={laceCard} alt="" />
          <div className="card-content">
            <div className="story-copy">
              <p className="story-heading">الحمد لله</p>
              <p>هيَا البدء ويسر الطريق وطيب المنتهى</p>
              <p>اليوم نلت الحلم وهان الأمس واتعابه </p>
            </div>
            <div className="host-copy">
              <span>تم بفضل الله وكرمه</span>
              <strong></strong>
              <span></span>
              <strong></strong>
            </div>
            <p className="invitation-line">
              
            </p>
            <div className="modern-title">
              <h2>تخرجي </h2>
            </div>
            <p className="blessing-line">من جامعة طرابلس </p>
            <p className="blessing-line">وحصولي على درجة البكالوريوس </p>
            <p className="blessing-line"> في العلوم الصيدلانية </p>
          </div>
        </article>

        <section className="details-section" aria-label="تفاصيل الحفل">
          <p className="section-kicker">تفاصيل الحفل</p>
          <h3>موعدنا مع الفرح</h3>
          <div className="details-grid">
            <Detail icon={<CalendarIcon />} title="التاريخ">
              الخميس، 12 نوفمبر 2026
            </Detail>
            <Detail icon={<ClockIcon />} title="الوقت">
              الساعة الثامنة مساءً
            </Detail>
            <Detail icon={<PinIcon />} title="المكان">
              <a
                href="https://www.google.com/maps/search/?api=1&query=wedding+hall"
                target="_blank"
                rel="noreferrer"
              >
                موقع قاعة الحفل
                <span>عرض على الخريطة</span>
              </a>
            </Detail>
            <Detail icon={<SnapchatIcon />} title="فلتر المناسبة">
              فلتر السناب متاح يوم الحفل
            </Detail>
          </div>
        </section>

        

        <section className="countdown-section" aria-label="العد التنازلي">
          <p>باقي على يوم التخرج </p>
          <div className="countdown" dir="ltr">
            {countdown.map((item) => (
              <div className="countdown-item" key={item.label}>
                <strong>{String(item.value).padStart(2, "0")}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <span>We can't wait to celebrate with you</span>
          <div className="footer-names">
          shahed omran
          </div>
          <p> · 11 · 2026</p>
        </footer>
      </section>
    </main>
  )
}