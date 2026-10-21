import { useState } from 'react'
import { PageShell, Section, In, ItchButton, YtThumb } from '../components/ui'

interface Video { id: string; title: string; channel: string; category: string; description: string; chapters?: { t: string; s: number }[] }

const VIDEOS: Video[] = [
  {
    id: 'RgCbCtUV35o', channel: 'scarybonz', category: 'No commentary · both endings',
    title: 'One Halloween Night – All Endings (No Commentary)',
    description: 'A complete playthrough without commentary, with chapter markers for each ending. Good if you just want to see the story.',
    chapters: [{ t: 'Gameplay', s: 17 }, { t: 'Ending #1', s: 2150 }, { t: 'Ending #2', s: 2188 }],
  },
  {
    id: 'ZuT2MgqnSSA', channel: 'Unidentified Jakunda', category: 'Full game · both endings',
    title: 'One Halloween Night Full Gameplay (All Endings)',
    description: 'Another full run with timestamps for the good (hide) ending and the bad (escape) ending.',
    chapters: [{ t: 'Full gameplay', s: 12 }, { t: 'Good ending', s: 1345 }, { t: 'Bad ending', s: 1551 }],
  },
  {
    id: 'Cwfu69Y_EYQ', channel: 'Thinknoodles', category: "Let's play · both endings",
    title: 'I GAVE OUT CANDY ON HALLOWEEN.. (One Halloween Night)',
    description: 'A family-friendly commentary playthrough that shows the hide ending and then the escape ending.',
  },
  {
    id: 'A-LygN5ed_k', channel: 'MoistCr1TiKaL Gaming', category: "Let's play",
    title: 'One Halloween Night',
    description: 'Popular commentary playthrough. He tries escaping first, gets caught, and then takes the hide route.',
  },
  {
    id: 'ErXKdtXSztQ', channel: 'Hollow', category: "Let's play",
    title: 'A Halloween Home Invasion Horror..',
    description: 'A commentary playthrough that tries the escape route before finishing with the hide ending.',
  },
]

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

function VideoItem({ video }: { video: Video }) {
  const [start, setStart] = useState<number | null>(null)
  return (
    <Section title={video.title}>
      <p><span className="inline-block bg-halloween-orange text-halloween-dark px-3 py-1 rounded-full text-sm font-bold">{video.category}</span> <span className="opacity-90">by {video.channel} on YouTube</span></p>
      <div className="relative w-full rounded-xl overflow-hidden bg-black group cursor-pointer" style={{ aspectRatio: '16/9' }} onClick={() => setStart(start ?? 0)}>
        {start === null ? (
          <>
            <YtThumb id={video.id} alt={`${video.title} – One Halloween Night video by ${video.channel}`} />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="w-16 h-16 bg-halloween-orange rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </>
        ) : (
          <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video.id}?autoplay=1&start=${start}`} title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )}
      </div>
      <p>{video.description}</p>
      {video.chapters && (
        <p>Jump to:{' '}
          {video.chapters.map((c) => (
            <button key={c.s} onClick={() => setStart(c.s)} className="underline text-halloween-orange hover:text-white mr-3">{c.t} ({fmt(c.s)})</button>
          ))}
        </p>
      )}
    </Section>
  )
}

function Videos() {
  return (
    <PageShell
      path="/videos"
      h1="One Halloween Night Gameplay Videos"
      intro={<p>Full playthroughs of <In to="/">One Halloween Night</In> from YouTube, including no-commentary runs with timestamps for <strong>both endings</strong>. Prefer reading? The <In to="/walkthrough">written walkthrough</In> and <In to="/endings">endings guide</In> cover the same ground.</p>}
    >
      {VIDEOS.map((v) => <VideoItem key={v.id} video={v} />)}
      <Section title="Play it yourself">
        <p>Videos load only when you click play. All videos belong to their creators and are hosted on YouTube. The game itself is free, so it's worth playing before you watch the endings.</p>
        <div className="text-center"><ItchButton /></div>
      </Section>
    </PageShell>
  )
}

export default Videos
