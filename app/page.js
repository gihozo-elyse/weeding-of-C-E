"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WEDDING_DATE = new Date("2026-08-22T09:00:00+02:00");

const CONTACTS = [
  { name: "Habibu", phone: "0788616802" },
  { name: "Claudine", phone: "0780127320" },
  { name: "Polaire", phone: "0782808973" },
];

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
    h: Math.floor((diff / (1000 * 60 * 60)) % 24),
    m: Math.floor((diff / (1000 * 60)) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="countdown">
      {[
        { v: time.d, l: "Iminsi" },
        { v: time.h, l: "Amasaha" },
        { v: time.m, l: "Iminota" },
        { v: time.s, l: "Amasegonda" },
      ].map((u) => (
        <div className="unit" key={u.l}>
          <span className="num">{pad(u.v)}</span>
          <span className="lbl">{u.l}</span>
        </div>
      ))}
    </div>
  );
}

function Envelope({ onOpen }) {
  return (
    <div>
      <div className="envelope-names">
        <div className="eyebrow">Ubutumire</div>
        <div className="names">Claudine &amp; Eustache</div>
      </div>

      <div
        className="envelope-wrap"
        onClick={onOpen}
        role="button"
        tabIndex={0}
        aria-label="Fungura ubutumire"
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      >
        <div className="envelope-body">
          <div className="envelope-card-peek" />
          <div className="envelope-shadow-inner" />
        </div>

        <motion.div
          className="envelope-center-text"
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          click here to see our wedding invitation
        </motion.div>

        <motion.div
          className="envelope-flap"
          initial={{ rotateX: 0 }}
          whileHover={{ rotateX: -8 }}
          transition={{ duration: 0.4 }}
          style={{ transformStyle: "preserve-3d" }}
        />

        <div className="seal">F&nbsp;E</div>
      </div>


    </div>
  );
}

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function CalendarWidget({ year, month, highlight }) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="cal-widget">
      <div className="cal-header">{MONTHS[month]} {year}</div>
      <div className="cal-grid">
        {DAYS.map(d => <div key={d} className="cal-day-name">{d}</div>)}
        {cells.map((d, i) => (
          <div key={i} className={`cal-day${d === highlight ? " cal-day--highlight" : ""}${!d ? " cal-day--empty" : ""}`}>
            {d || ""}
          </div>
        ))}
      </div>
    </div>
  );
}

function InvitationCard() {
  return (
    <div className="invite-card">
      <div className="invite-body">
        <div className="invite-portrait">
          <img src="/ce.png" alt="Claudine na Eustache" />
        </div>

        <div className="eyebrow-label">Ubutumire</div>
        <p className="invite-lede">
          Twishimiye kubatumira mubukwe bwa
        </p>

        <div className="invite-names">
          Claudine Mutesi
          <span className="invite-amp">&amp;</span>
          Habiyaremye Eustache (Habibu)
        </div>

        <div className="divider" />

        <div className="invite-date">
          <span className="day">Ku Wa Gatandatu</span>
          22 Kanama 2026
        </div>

        <CalendarWidget year={2026} month={7} highlight={22} />

        <Countdown />

        <div className="divider" />

        <div className="schedule">
          <div className="schedule-item">
            <div className="schedule-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s-7-4.6-9.5-9.1C1 8.6 2.6 5 6.2 5c2 0 3.4 1 5.8 3.3C14.4 6 15.8 5 17.8 5 21.4 5 23 8.6 21.5 11.9 19 16.4 12 21 12 21z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="schedule-text">
              <div className="time">Satatu — 09H00</div>
              <div className="desc">Gusaba no gukwa, mu Gatsata</div>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="8" cy="15" r="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="16" cy="15" r="5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="schedule-text">
              <div className="time">Sasita n&apos;igice — 12H30</div>
              <div className="desc">Gusezerana imbere y&apos;Imana, mu Gatsata</div>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 11.5 12 4l9 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 10v9h14v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="schedule-text">
              <div className="time">Samunani — 02H00</div>
              <div className="desc">Kwiyakira, mu Gatsata</div>
            </div>
          </div>
        </div>

        <div className="venue-box">
          <div className="venue-title">Aho bizabera</div>
          <div className="venue-sub">
            Bizabera murugo rw&apos;abageni, mu Gatsata.
          </div>
        </div>

        <div className="contacts">
          {CONTACTS.map((c) => (
            <a key={c.phone} className="contact-btn primary" href={`tel:${c.phone}`}>
              {c.name} — {c.phone}
            </a>
          ))}
        </div>

        <div className="footer-note">Turabashimiye kuba muri iki gihe cyacu</div>
        <div className="footer-mono">Claudine &amp; Eustache · 22.08.2026</div>
      </div>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="stage">
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.35 },
            }}
            transition={{ duration: 0.6 }}
          >
            <Envelope onOpen={() => setOpen(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            className="invite-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              initial={{ y: 90, opacity: 0, scale: 0.94 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <InvitationCard />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
