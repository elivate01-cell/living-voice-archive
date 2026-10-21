import { useState } from 'react';

type Lang = 'All' | 'Yorùbá' | 'Igbo' | 'Hausa' | 'Pidgin' | 'Èdo';

const CARDS: Array<{ id: string; title: string; speaker: string; place: string; year: string; lang: Lang; mins: number }> = [
  { id: 'LVA-0192', title: 'The fisherman who drew the lagoon line', speaker: 'Pa Rufai A.', place: 'Epe', year: '1978 / re-taped 2023', lang: 'Yorùbá', mins: 44 },
  { id: 'LVA-0207', title: 'Market nights at Onitsha main', speaker: 'Mma Ngozi E.', place: 'Onitsha', year: '1979', lang: 'Igbo', mins: 61 },
  { id: 'LVA-0231', title: 'Railway stories: Zaria platform', speaker: 'Mallam Idris S.', place: 'Zaria', year: '1981', lang: 'Hausa', mins: 38 },
  { id: 'LVA-0244', title: 'How we crossed the creek to school', speaker: 'Madam Ejiro O.', place: 'Warri', year: '1983', lang: 'Pidgin', mins: 29 },
  { id: 'LVA-0266', title: 'Bronze casters of Igun street', speaker: 'Pa Osaretin I.', place: 'Benin City', year: '1985 / re-taped 2022', lang: 'Èdo', mins: 52 },
  { id: 'LVA-0281', title: 'The year the harmattan came twice', speaker: 'Chief Adebanjo T.', place: 'Ogbomoso', year: '1986', lang: 'Yorùbá', mins: 47 },
  { id: 'LVA-0305', title: 'Tracing family names through song', speaker: 'Aunty Uche N.', place: 'Nsukka', year: '1988', lang: 'Igbo', mins: 33 },
  { id: 'LVA-0318', title: 'Salt roads and saddle bags', speaker: 'Hajiya Halima B.', place: 'Kano', year: '1990', lang: 'Hausa', mins: 41 },
  { id: 'LVA-0330', title: 'Welding sheds of Apapa wharf', speaker: 'Baba Kelechi A.', place: 'Apapa', year: '1992', lang: 'Pidgin', mins: 25 },
];

const RECENT = [
  ['LVA-0330', 'Welding sheds of Apapa wharf', 'catalogued this week'],
  ['LVA-0318', 'Salt roads and saddle bags', 'transcription checked'],
  ['LVA-0305', 'Tracing family names through song', 'summary in English added'],
  ['LVA-0281', 'The year the harmattan came twice', 'reel digitised from cassette'],
  ['LVA-0266', 'Bronze casters of Igun street', 'donor copy returned to family'],
] as const;

const COLLECTIONS = ['Markets & trade', 'Water & work', 'Rail journeys', 'School days', 'Family names', 'Craft & forge'] as const;
export default function App() {
  const [lang, setLang] = useState<Lang>('All');
  const [sent, setSent] = useState(false);
  const LANGS: Lang[] = ['All', 'Yorùbá', 'Igbo', 'Hausa', 'Pidgin', 'Èdo'];
  const shown = CARDS.filter((c) => lang === 'All' || c.lang === lang);
  return (
    <div className="lv">
      <header className="lhead">
        <div className="lhead-in">
          <span className="lstamp mono">LVA · EST. 1975 · READING ROOM OPEN TUE–SAT</span>
          <a className="lword serif" href="#top">The Living Voice Archive</a>
          <nav className="lnav">
            <a href="#cards">Catalogue</a><a href="#ledger">Recently catalogued</a><a href="#collections">Collections</a><a href="#contribute">Contribute</a>
          </nav>
        </div>
      </header>
      <section className="lopen" id="top">
        <p className="mono lopen-kick">CATALOGUE OF RECORDED CONVERSATIONS · NIGERIA · 1975–PRESENT</p>
        <h1 className="serif">Voices do not live<br />in the library.<br /><em>They live in people.</em></h1>
        <p className="lopen-lede">Nine hundred and forty hours of oral history, taped in the language they were told in, catalogued on the cards our volunteers still write by hand.</p>
      </section>
      <section className="lfilter" id="cards">
        <p className="mono lflabel">FILTER BY LANGUAGE</p>
        <div className="lfchips">
          {LANGS.map((l) => (
            <button key={l} className={lang === l ? 'lfchip on mono' : 'lfchip mono'} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
          ))}
        </div>
      </section>
      <section className="lcards">
        {shown.map((c) => (
          <article className="lcard" key={c.id}>
            <div className="lcard-top mono">
              <span>{c.id}</span>
              <span>{c.mins} MIN</span>
            </div>
            <h3 className="serif">{c.title}</h3>
            <dl className="lmeta mono">
              <div><dt>SPEAKER</dt><dd>{c.speaker}</dd></div>
              <div><dt>PLACE</dt><dd>{c.place}</dd></div>
              <div><dt>TAPED</dt><dd>{c.year}</dd></div>
              <div><dt>LANGUAGE</dt><dd>{c.lang}</dd></div>
            </dl>
            <button className="llisten">REQUEST LISTENING SLOT →</button>
          </article>
        ))}
        {shown.length === 0 && <p className="lzero mono">NO CARDS UNDER THIS LANGUAGE YET — CHECK THE LEDGER BELOW.</p>}
      </section>
      <section className="lledger" id="ledger">
        <h2 className="serif">Recently catalogued</h2>
        <div className="lled">
          {RECENT.map((r) => (
            <div className="lled-row mono" key={r[0]}><span>{r[0]}</span><span className="lled-t serif">{r[1]}</span><span className="lled-s">{r[2]}</span></div>
          ))}
        </div>
      </section>
      <section className="lcollections" id="collections">
        <h2 className="serif">Collections</h2>
        <div className="lcol-chips">{COLLECTIONS.map((c) => <span className="lchip mono" key={c}>{c}</span>)}</div>
        <div className="lroom">
          <h3 className="serif">Reading room</h3>
          <p className="mono">36 Awolowo Road Annex, Ikoyi, Lagos.<br />Tuesdays–Saturdays, 10:00–16:00.<br />Bring a form of ID; tapes are listened to on the premises.</p>
        </div>
      </section>
      <section className="lcontribute" id="contribute">
        <div className="lc-in">
          <div>
            <h2 className="serif">Contribute a conversation</h2>
            <p>You can record a family member yourself or sit with our volunteer recordists. Whatever you give goes back to the community as a catalogue card and a listening slot.</p>
            <ul className="lguides mono">
              <li>01 — ASK FIRST. RECORDING IS A GIFT, NOT A TAKE.</li>
              <li>02 — RECORD IN THE LANGUAGE THE STORY LIVES IN.</li>
              <li>03 — SEND TAPES TO THE READING ROOM, NOT EMAIL.</li>
              <li>04 — EVERY CARD CARRIES THE SPEAKER’S CONSENT SIGNATURE.</li>
            </ul>
          </div>
          {sent ? (
            <div className="lsent serif">Noted, catalogued as an offer. The reading room will write to you before Saturday.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label>Name<input required placeholder="Your name" /></label>
              <label>Email<input required type="email" placeholder="you@example.com" /></label>
              <label>Who would you record?<textarea rows={3} required placeholder="e.g. my father, 74, his years on the railways" /></label>
              <button type="submit">Offer a story</button>
            </form>
          )}
        </div>
      </section>
      <footer className="lfoot">
        <span>© {new Date().getFullYear()} The Living Voice Archive · a community trust</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}