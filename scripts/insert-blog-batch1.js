// One-off script: inserts 6 new blog posts (Blog3 table) sourced from
// "DoMyEbook Blog Posts — Batch 1 of 4" into the existing SQLite database.
// Run with: node scripts/insert-blog-batch1.js
const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(process.cwd(), 'lib/data/domyebook.db');
const db = new Database(dbPath);

const IMG_DIR = 'C:\\Users\\MURTAZA\\AppData\\Local\\Temp\\claude\\d--Websites-Imran-domyebook\\5b35c2d5-edd0-4d6e-a3f6-3716be9093ca\\scratchpad\\blogimg';
const img = (name) => fs.readFileSync(path.join(IMG_DIR, name));

const posts = [
  {
    MainTitle: 'How Much Does It Cost to Hire an Ebook Ghostwriter in 2026?',
    date: '24 july, 2026',
    Author: 'DoMyEbook Team',
    SubHeading1: 'How Much Does It Cost to Hire an Ebook Ghostwriter in 2026?',
    Paragraph1: "Most ebook ghostwriting projects land somewhere between $450 and $3,000 or more. The exact number depends less on the writer's reputation than most people assume, and more on three things: how long the book is, how much original research or interviewing it needs, and how fast you need it done.",
    Paragraph2: "Here's the real breakdown, by project type: Short ebooks and lead magnets (5,000–10,000 words): $450–$1,000. This is the entry point — a focused, single-topic ebook used as a marketing tool or a quick-read guide. Turnaround is usually 2–4 weeks. Full-length nonfiction or business books (30,000–50,000 words): $1,000–$3,000+. This is the range most first-time authors land in, whether it's a memoir, a leadership book, or an industry guide. Turnaround runs 4–8 weeks for most services. High-volume, budget marketplace writers: around $500 per 10,000 words. You'll find this pricing on freelancer-marketplace-style platforms. It can work, but you're usually assigned whichever writer is available rather than one chosen for your subject or voice — worth knowing before you commit.",
    Quote: "Pricing dramatically below these ranges usually means corners are being cut somewhere — fewer revision rounds, an assigned (not chosen) writer, or an AI-generated first draft with a light human edit rather than a ghostwriter who's actually interviewed you.",
    Image1: img('p1cover.jpg'),
    SubHeading2: 'What Actually Moves the Price',
    Paragraph3: "Research and interviews. A book based on your own knowledge, recorded in a few interviews, costs less to produce than one requiring the ghostwriter to research an unfamiliar industry from scratch. Editing rounds. One editing pass is standard. Multiple rounds, developmental editing, or a full rewrite after the first draft all add cost.",
    Paragraph4: "Design and formatting. Cover design, interior layout, and multi-format conversion (EPUB, MOBI, print-ready PDF) are often quoted separately from the writing itself — ask what's actually included before you compare two quotes. Rush timelines. Compressing an 8-week project into 3 weeks usually adds 20–40% to the cost, since it means blocking out a writer's full attention.",
    Image2: img('p1img2.jpg'),
    SubHeading3: 'Getting an Exact Number',
    Paragraph5: "One red flag worth knowing: pricing dramatically below these ranges usually means corners are being cut somewhere — fewer revision rounds, an assigned (not chosen) writer, or an AI-generated first draft with a light human edit rather than a ghostwriter who's actually interviewed you. That's not automatically wrong for every project, but it's worth asking about directly before you sign anything.",
    Paragraph6: "If you want an exact number instead of a range, that's really a five-minute conversation — it depends on your book's length, how much of the material already exists in your head versus needs research, and your timeline. Get a free quote and we'll walk you through exactly what drives your specific project's cost before you commit to anything.",
    Image3: img('p1img3.jpg'),
    SubHeading4: 'FAQ',
    Paragraph7: "Is a cheaper ghostwriter automatically a bad choice? Not automatically — but it's worth asking exactly what's included (revision rounds, whether the writer is dedicated to your project, whether editing and formatting are separate costs) before assuming a lower quote is the better deal.",
    Paragraph8: "Does the price include publishing? Not usually. Writing, editing, design, and publishing/distribution are often quoted as separate stages — confirm what's bundled before comparing prices across services.",
  },
  {
    MainTitle: 'How to Choose the Best Ebook Ghostwriting Service in 2026',
    date: '27 july, 2026',
    Author: 'DoMyEbook Team',
    SubHeading1: 'How to Choose the Best Ebook Ghostwriting Service in 2026',
    Paragraph1: "Search \"best ebook ghostwriting service\" and you'll get a dozen lists that all look nearly identical — which tells you they're not actually comparing anything, just repeating the same names.",
    Paragraph2: "Here's a more useful approach: the specific things that actually separate a good ghostwriting service from a risky one, so you can evaluate any option — including us — with real criteria instead of a ranking that might be six months out of date by the time you read it.",
    Quote: "A legitimate ghostwriting service is confident enough in its work to let you think it over. Urgency tactics — \"this rate expires today,\" repeated follow-up calls — are sales pressure, not scarcity.",
    Image1: img('p2cover.jpg'),
    SubHeading2: 'What to Actually Check Before You Hire Anyone',
    Paragraph3: "1. Can you see real writer bios or work samples? This is the single biggest tell. A service that shows you who's actually going to write your book — their background, their previous work, their genre experience — is telling you they stand behind their people. A service that only shows a contact form is asking you to trust blind. 2. Is pricing explained, even roughly? You don't need an exact number before your first conversation, but you should get a clear range and a clear explanation of what's included — writing, edit rounds, design, formatting, publishing support — before you're asked to commit. If a company won't give you any number until after a sales call, that's a pressure tactic, not a pricing model.",
    Paragraph4: "3. Do they handle your specific genre? A service built around business books may not be the right fit for a novel, a memoir, or an illustrated children's book — the editing process, the voice work, and the design needs are genuinely different. Ask directly whether they've completed projects in your specific category, not just \"books\" broadly. 4. Is there a real revision process, or just \"unlimited revisions\" as a slogan? Unlimited revisions sounds generous until you realize it can also mean no structured process — just an open-ended back-and-forth with no clear finish line. A defined process (outline approval, first draft, one or two structured revision rounds, final polish) usually produces a better book, faster, than an \"unlimited\" promise with no shape to it. 5. Are you pressured to decide immediately? This is the clearest red flag in the entire industry. A legitimate ghostwriting service is confident enough in its work to let you think it over. Urgency tactics — \"this rate expires today,\" repeated follow-up calls — are sales pressure, not scarcity.",
    Image2: img('p2img2.jpg'),
    SubHeading3: 'Where DoMyEbook Fits Into This',
    Paragraph5: "We've been doing this for over a decade, across fiction, nonfiction, memoir, and children's books, with teams in the US and UK. That range matters specifically because of point #3 above — a lot of services specialize narrowly, which is fine if your book fits their lane and a real limitation if it doesn't. If you want to see how we handle revisions, pricing, and writer matching, that's exactly what a first call with us covers.",
    Paragraph6: "The honest bottom line: there's a real range of legitimate options in this market — from high-volume, budget-friendly marketplaces where you're matched with whichever writer is available, up to premium boutique agencies built around a heavy interview process for executive and thought-leadership books. Neither end is automatically \"best.\" The right choice depends on your budget, your timeline, and how closely your genre matches what a given service actually specializes in. Use the five checks above on anyone you're considering, including us, and you'll make a better call than any ranked list can make for you.",
    Image3: img('p2img3.jpg'),
    SubHeading4: 'FAQ',
    Paragraph7: "Is it bad if a ghostwriting service doesn't show writer bios? It's not automatically disqualifying, but it's worth asking why directly. Some services withhold this over concerns about writers being poached; others simply don't have named, vetted writers behind the marketing. Ask which one it is.",
    Paragraph8: "How many revision rounds should be normal? One to two structured rounds after the first draft is typical for most projects. More than that usually signals either an unusually complex book or a process that isn't well defined upfront — ask what happens if you need a third round before you sign anything.",
  },
  {
    MainTitle: 'KDP vs. IngramSpark: How to Actually Get Your Book on a Bookstore Shelf',
    date: '30 july, 2026',
    Author: 'DoMyEbook Team',
    SubHeading1: 'KDP vs. IngramSpark: How to Actually Get Your Book on a Bookstore Shelf',
    Paragraph1: "If your goal is just Amazon sales, KDP is simple and free. If your goal is a physical bookstore or library actually being able to order your book, KDP alone won't get you there — you need IngramSpark, and here's exactly why.",
    Paragraph2: "What KDP does well: Amazon's Kindle Direct Publishing is free to use, pays a competitive royalty on Amazon sales, and gets your book listed within about 72 hours. For ebook sales and print-on-demand paperbacks sold through Amazon, it's the easiest on-ramp in publishing. The catch: KDP print books are generally non-returnable. Bookstores order inventory on the assumption they can return unsold copies — standard practice in physical retail — so a non-returnable title is a hard pass for most of them, no matter how good the book is.",
    Quote: "Bookstores order inventory on the assumption they can return unsold copies — standard practice in physical retail — so a non-returnable title is a hard pass for most of them, no matter how good the book is.",
    Image1: img('p3cover.jpg'),
    SubHeading2: 'What IngramSpark Actually Does Differently',
    Paragraph3: "IngramSpark is run by Ingram Content Group — the same wholesale distributor that supplies the vast majority of real, physical bookstores and libraries in the US. When you publish through IngramSpark, you can set your book to a 55% trade discount and mark it \"Returnable.\" Once you do that, your book becomes visible and orderable inside the exact same ordering system bookstores already use for every other book on their shelves — self-published or not, they can't tell the difference from where they're ordering.",
    Paragraph4: "The tradeoff: IngramSpark's per-copy earnings are typically lower than KDP's, especially once you factor in the return allowance. That's the real cost of \"top of shelf\" access — it's not free, and it's not automatic. It's a genuine tradeoff between better margins (KDP, Amazon-only) and real physical distribution (IngramSpark, everywhere else).",
    Image2: img('p3img2.jpg'),
    SubHeading3: 'So Which One Do You Actually Need?',
    Paragraph5: "In almost every case, the answer is both — not one instead of the other. Use KDP for the best royalty on Amazon sales, and IngramSpark for everything else: bookstores, libraries, and international distributors. The one thing that makes this work cleanly is owning your own ISBN rather than using a free one from either platform — a free ISBN ties your book to that specific platform as the \"publisher of record,\" which gets confusing fast the moment you're distributing through two systems at once.",
    Paragraph6: "What this looks like in practice: a children's book author who wants copies in local bookstores for a launch event needs IngramSpark's returnability, full stop — KDP-only won't get a local shop to say yes. A business author focused purely on Amazon sales and Kindle Unlimited reads might not need IngramSpark at all. The right setup depends entirely on where you actually want the book to show up, which is worth mapping out before you publish, not after.",
    Image3: img('p3img3.jpg'),
    SubHeading4: 'FAQ',
    Paragraph7: "Can I switch from KDP-only to IngramSpark later? Yes, but it's cleaner to plan for both from the start, especially around ISBN ownership — retrofitting distribution after a book is already live adds extra steps.",
    Paragraph8: "Does IngramSpark guarantee bookstores will actually stock my book? No — it makes your book orderable, not automatically ordered. Getting an actual bookstore to stock physical copies still takes outreach, usually through local relationships or a distributor's sales team, but that outreach is only possible once the book is set up as returnable in the first place.",
  },
  {
    MainTitle: 'Ghostwriter vs. AI Writing Tools: What You Actually Get for Your Money',
    date: '2 august, 2026',
    Author: 'DoMyEbook Team',
    SubHeading1: 'Ghostwriter vs. AI Writing Tools: What You Actually Get for Your Money',
    Paragraph1: "You can generate a full book draft with an AI tool in an afternoon. People do it constantly now. So it's a fair question: why pay a human ghostwriter thousands of dollars for something a chatbot can produce for free? The honest answer is that the two aren't actually doing the same job, even when the output looks similar on the page.",
    Paragraph2: "What AI tools are genuinely good at: speed, and getting past a blank page. If you need a rough structure, a first pass at an outline, or filler paragraphs to react to and correct, AI is fast and cheap at that specific task. It's a legitimate tool, and plenty of professional ghostwriters — including ours — use AI for research assistance and early drafting speed.",
    Quote: "Ask an AI tool to write a memoir chapter about your father, and it will produce something that reads like a memoir chapter about somebody's father — technically fine, emotionally interchangeable.",
    Image1: img('p4cover.jpg'),
    SubHeading2: "What AI Still Doesn't Do Well",
    Paragraph3: "It doesn't know your specific voice unless you describe it in exhaustive detail, and even then, it tends to flatten a distinct voice into a generic, competent-sounding average. Ask an AI tool to write a memoir chapter about your father, and it will produce something that reads like a memoir chapter about somebody's father — technically fine, emotionally interchangeable. A human ghostwriter who's actually interviewed you spends real time finding the specific phrases, memories, and rhythms that sound like you and nobody else. That's the entire value of a ghostwriter, and it's the one thing that's genuinely hard to fake.",
    Paragraph4: "The other real difference: judgment. A good ghostwriter makes structural calls a generation tool can't: which parts of your story actually matter to a reader who's never met you, what to cut even though it feels important to you, where the book is boring and needs to move faster. AI will write whatever you ask it to write. A skilled ghostwriter will occasionally tell you that what you're asking for isn't going to work, and that pushback is often exactly what a first-time author needs most.",
    Image2: img('p4img2.jpg'),
    SubHeading3: 'Where This Leaves a Smart Approach in 2026',
    Paragraph5: "The strongest process isn't \"human vs. AI\" — it's human-directed, AI-assisted. A ghostwriter who uses AI to speed up research and early drafts, while doing the interviewing, structural editing, and voice work themselves, produces a better book faster than either a pure-AI draft or a slower, fully manual process. That's the model worth looking for in any service you're evaluating — including ours.",
    Paragraph6: "A quick way to test it before you hire anyone: ask directly, \"How much of my book will actually be written by a person who's talked to me, versus generated and lightly edited?\" A confident, specific answer is a good sign. A vague one is worth pressing on.",
    Image3: img('p4img3.jpg'),
    SubHeading4: 'FAQ',
    Paragraph7: "Is it bad if a ghostwriter uses AI at all? No — used well, it speeds up research and early drafting. The question that matters is whether a human is still doing the interviewing, structural decisions, and voice work, or just editing an AI draft lightly.",
    Paragraph8: "Can I tell if a book was mostly AI-written? Often, yes — flattened voice, generic phrasing, and a lack of specific, only-you-would-know-this detail are the usual tells. It's worth reading a sample chapter closely before committing to a full project.",
  },
  {
    MainTitle: "How to Self-Publish a Children's Book: A Parent's Complete Guide",
    date: '5 august, 2026',
    Author: 'DoMyEbook Team',
    SubHeading1: "How to Self-Publish a Children's Book: A Parent's Complete Guide",
    Paragraph1: "Writing a children's book is usually the fastest part of the whole process — most run 500 to 1,500 words. What takes real planning is everything after the words: illustration, format, and where the finished book actually needs to live.",
    Paragraph2: "Start with the illustration decision, not the writing. For a picture book especially, illustration isn't a finishing touch — it's half the book, and it drives your timeline more than the text does. You've got three real paths: hire a professional illustrator (the slowest and most expensive option, but the most consistent quality), use an illustration service bundled into a publishing package, or attempt it yourself if you have the skill. Whichever path you pick, lock it in before you finalize the text — illustrators often shape page breaks and pacing, which can mean revising the manuscript around the art rather than the other way around.",
    Quote: "Illustration isn't a finishing touch — it's half the book, and it drives your timeline more than the text does.",
    Image1: img('p5cover.jpg'),
    SubHeading2: 'Pick Your Format Before You Design Anything',
    Paragraph3: "A children's book meant to be read on a tablet has completely different needs than one meant to be a physical gift or read aloud at bedtime. Full-color picture books also behave differently across formats than text-heavy chapter books. Decide early whether you're building primarily for print, primarily for digital, or genuinely both, since the design specs differ enough that \"we'll figure out formats later\" usually means redoing layout work twice.",
    Paragraph4: "Where children's books actually get read: Amazon KDP handles both the ebook and print-on-demand paperback side, and it's the simplest starting point. If you want the book in actual bookstores or a school or public library, that requires IngramSpark specifically — Amazon-only print books are typically non-returnable, which is a dealbreaker for most physical retailers and library systems. Apple Books and Google Play Books are worth including too, particularly if the young readers you're targeting use tablets more than physical books.",
    Image2: img('p5img2.jpg'),
    SubHeading3: "What Trips Up First-Time Children's Book Authors",
    Paragraph5: "Word count expectations. Picture books run far shorter than most new authors expect — padding one out to \"feel like a real book\" usually hurts it rather than helping. Reading-level consistency. Vocabulary that drifts between a 4-year-old's level and an 8-year-old's level in the same book confuses both the read-aloud experience and the eventual age-range marketing. Rights to the illustrations. Confirm in writing that you own full commercial rights to any illustration work before you publish — this gets missed more often than you'd expect, and it's a serious problem to discover after the book is live.",
    Paragraph6: "A realistic timeline: text alone can be finished in a few weeks. Illustration is almost always the longer pole in the tent — plan for 6 to 12 weeks for professional illustration work on a standard picture book, longer for a more detailed art style.",
    Image3: img('p5img3.jpg'),
    SubHeading4: 'FAQ',
    Paragraph7: "How long should a picture book actually be? Most run 500–1,000 words across roughly 32 pages, which is a standard print length for the category. Longer isn't usually better here.",
    Paragraph8: "Do I need a literary agent to self-publish a children's book? No — agents matter for traditional publishing deals, not for self-publishing, where you're working directly with a platform like KDP or IngramSpark instead of pitching a publishing house.",
  },
  {
    MainTitle: 'Ebook, Paperback, or Audiobook: Which Should You Publish First?',
    date: '8 august, 2026',
    Author: 'DoMyEbook Team',
    SubHeading1: 'Ebook, Paperback, or Audiobook: Which Should You Publish First?',
    Paragraph1: "You'll likely want all three formats eventually, but launching all three at once isn't necessary, and for a first-time author, it's usually not the smart order of operations either. Here's how to actually decide what comes first.",
    Paragraph2: "Lead with ebook if your genre skews toward genre fiction — romance, thriller, fantasy, mystery — where a large share of readers already read primarily on Kindle or a similar device. Ebook-first also makes sense if you want the fastest possible path to having something live — it's the quickest format to produce and the easiest to update if you catch errors after launch.",
    Quote: "Each format needs its own edit pass, not just a file conversion.",
    Image1: img('p6cover.jpg'),
    SubHeading2: 'Matching the Format to Your Book',
    Paragraph3: "Lead with paperback if you're writing nonfiction meant for a professional audience — a business book handed out at conferences, a memoir given as a gift, anything where a physical object signals credibility or is genuinely meant to be held. Paperback-first also matters if a launch event, book signing, or speaking engagement is part of your plan — you need physical copies in hand for that regardless of what else you publish.",
    Paragraph4: "Lead with audiobook if your writing style is naturally conversational, your genre overlaps heavily with podcast listeners (business, self-help, true crime), or you're already recognized for your speaking voice — some authors, especially in the personal-development and business space, actually build their audience through audio first and treat the ebook as secondary.",
    Image2: img('p6img2.jpg'),
    SubHeading3: 'The Realistic Sequencing Most Authors Actually Use',
    Paragraph5: "Ebook and paperback together at launch, since they're produced through the same platforms (KDP handles both) and the marginal extra work is mostly formatting, not new writing. Audiobook usually follows a few weeks to a few months later, once you know the book has real traction — it's the most expensive and time-consuming format to produce, since it requires either narrating it yourself or hiring a narrator, so it's the one worth confirming demand for before you invest in it.",
    Paragraph6: "One thing that catches people off guard: each format needs its own edit pass, not just a file conversion. An ebook edited for on-screen reading doesn't always translate cleanly to a print page — line breaks, chapter starts, and even some jokes or rhythm-dependent writing read differently out loud in an audiobook than they do silently on a page. Budget for a light format-specific pass rather than assuming one edited manuscript works identically everywhere.",
    Image3: img('p6img3.jpg'),
    SubHeading4: 'FAQ',
    Paragraph7: "Do I need a professional narrator for my audiobook? Not always — some nonfiction, especially memoir and personal-development books, works well narrated by the author, since the voice is part of the book's identity. Fiction usually benefits more from a trained narrator who can distinguish characters.",
    Paragraph8: "Can I publish an audiobook without an ebook or paperback existing first? Technically yes, but it's uncommon and usually not strategic — most audiobook platforms and readers expect a print or ebook version to already exist as the primary reference edition.",
  },
];

const insert = db.prepare(`
  INSERT INTO Blog3 (
    MainTitle, date, SubHeading1, Paragraph1, Paragraph2, Quote, Author, Image1,
    SubHeading2, Paragraph3, Paragraph4, Image2,
    SubHeading3, Paragraph5, Paragraph6, Image3,
    SubHeading4, Paragraph7, Paragraph8
  ) VALUES (
    @MainTitle, @date, @SubHeading1, @Paragraph1, @Paragraph2, @Quote, @Author, @Image1,
    @SubHeading2, @Paragraph3, @Paragraph4, @Image2,
    @SubHeading3, @Paragraph5, @Paragraph6, @Image3,
    @SubHeading4, @Paragraph7, @Paragraph8
  )
`);

const insertMany = db.transaction((rows) => {
  for (const row of rows) insert.run(row);
});

insertMany(posts);

console.log(`Inserted ${posts.length} blog posts. New BlogID range:`);
console.log(db.prepare('SELECT BlogID, MainTitle, date FROM Blog3 ORDER BY BlogID DESC LIMIT 6').all());
