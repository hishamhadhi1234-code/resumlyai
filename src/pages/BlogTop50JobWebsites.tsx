import { useEffect } from "react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BlogCTA from "@/components/BlogCTA";
import BlogTOC from "@/components/BlogTOC";
import { setSEO } from "@/lib/seo";

type Site = { name: string; title: string; text: string; bullets?: string[]; url?: string; internal?: string };
type Group = { heading: string; sites: Site[] };

const groups: Group[] = [
  {
    heading: "Job Search Websites",
    sites: [
      { name: "LinkedIn", title: "Professional Networking and Jobs", text: "LinkedIn is one of the most important websites for modern job seekers. For freshers, a strong LinkedIn profile can make you visible to recruiters even before you apply.", bullets: ["Find job vacancies", "Connect with recruiters", "Follow companies", "Showcase your skills", "Find internships", "Share projects and achievements"], url: "linkedin.com" },
      { name: "Indeed", title: "Job Search", text: "Indeed is one of the world's largest job-search websites. Filter by job title, location, salary, experience, remote work and company — useful for comparing many openings.", url: "indeed.com" },
      { name: "Naukri", title: "Indian Job Search", text: "Naukri.com is one of the most widely used job portals in India. Create a profile, upload your resume, search jobs and receive recruiter messages.", url: "naukri.com" },
      { name: "Foundit", title: "Jobs in India", text: "Foundit lists jobs across IT, finance, marketing, sales, HR, engineering and customer support, with personalised job recommendations.", url: "foundit.in" },
      { name: "Internshala", title: "Internships and Fresher Jobs", text: "Ideal for students and fresh graduates: internships, work-from-home roles, part-time jobs and skill-based internships. A great starting point if you have no experience yet.", url: "internshala.com" },
      { name: "Wellfound", title: "Startup Jobs", text: "Wellfound focuses on startup careers — tech startups, AI and SaaS companies, early-stage and remote startups. You'll often find roles not listed on traditional portals.", url: "wellfound.com" },
      { name: "Glassdoor", title: "Jobs and Company Research", text: "Research companies before applying: job openings, employee reviews, interview experiences, salary information and company ratings.", url: "glassdoor.com" },
      { name: "Google Jobs", title: "Search Jobs on Google", text: "Google shows job listings directly in search results. Try searches like \"Python developer jobs in Kerala\" or \"Remote data analyst jobs India\", then filter by location and more." },
      { name: "Apna", title: "Jobs for Indian Job Seekers", text: "Apna covers sales, customer service, operations, retail, delivery, office administration and many entry-level roles.", url: "apna.co" },
      { name: "Cutshort", title: "Technology and Startup Jobs", text: "Useful for software development, data, product, design, marketing and business roles at tech companies and startups.", url: "cutshort.io" },
    ],
  },
  {
    heading: "Websites for Remote Jobs",
    sites: [
      { name: "We Work Remotely", title: "Remote Jobs", text: "Remote roles in programming, design, marketing, customer support, writing and sales.", url: "weworkremotely.com" },
      { name: "Remote OK", title: "Remote Employment", text: "Work for companies worldwide without relocating.", url: "remoteok.com" },
      { name: "FlexJobs", title: "Flexible Work", text: "Specialises in flexible and remote jobs. Some resources are free, though full database access may need a paid plan.", url: "flexjobs.com" },
      { name: "Remotive", title: "Remote Tech Jobs", text: "Job listings and career resources for remote technology and digital roles.", url: "remotive.com" },
      { name: "Jobspresso", title: "Remote Digital Careers", text: "Remote jobs in development, marketing, customer support, design and writing.", url: "jobspresso.co" },
    ],
  },
  {
    heading: "Websites for Freelancing",
    sites: [
      { name: "Upwork", title: "Global Freelancing", text: "Connects freelancers with clients worldwide in writing, programming, design, data entry, virtual assistance, digital marketing and video editing.", url: "upwork.com" },
      { name: "Fiverr", title: "Sell Your Services", text: "Offer services like \"I will create an ATS-friendly resume\" or \"I will edit your photos\" — a good way to build a freelance portfolio.", url: "fiverr.com" },
      { name: "Freelancer", title: "Bid on Projects", text: "Compete for projects in writing, programming, design, data entry and marketing.", url: "freelancer.com" },
      { name: "PeoplePerHour", title: "International Freelance Work", text: "Another option for finding clients looking for freelance services.", url: "peopleperhour.com" },
      { name: "Contra", title: "Portfolio-First Freelancing", text: "Showcase your portfolio and find opportunities without relying on a traditional resume.", url: "contra.com" },
    ],
  },
  {
    heading: "Websites for Learning Job Skills",
    sites: [
      { name: "YouTube", title: "Free Learning", text: "Learn Python, Excel, AI, data analysis, digital marketing, graphic design, video editing and communication — extremely valuable if you can't afford courses.", url: "youtube.com" },
      { name: "freeCodeCamp", title: "Free Programming Education", text: "Learn HTML, CSS, JavaScript, Python, data analysis and web development, with free certifications.", url: "freecodecamp.org" },
      { name: "W3Schools", title: "Beginner Tutorials", text: "Simple explanations and examples for programming and web technologies.", url: "w3schools.com" },
      { name: "Khan Academy", title: "Strengthen Fundamentals", text: "Free lessons in mathematics, computing, economics and more.", url: "khanacademy.org" },
      { name: "Coursera", title: "University Courses", text: "Courses from universities and companies. Many can be audited free; certificates may need payment or financial aid.", url: "coursera.org" },
      { name: "edX", title: "Courses from Institutions", text: "Computer science, business, data science, AI and mathematics. Learning materials are often free; certificates may cost extra.", url: "edx.org" },
      { name: "MIT OpenCourseWare", title: "Deep Knowledge", text: "Free materials from real MIT courses — excellent for in-depth learning.", url: "ocw.mit.edu" },
      { name: "Google Skillshop", title: "Google Tools Training", text: "Training on digital marketing, Google Ads, Analytics and business tools.", url: "skillshop.withgoogle.com" },
      { name: "Microsoft Learn", title: "Tech Learning Paths", text: "Azure, AI, data, Power Platform and other Microsoft technologies.", url: "learn.microsoft.com" },
      { name: "HubSpot Academy", title: "Marketing and Sales", text: "Courses on digital, content, email and social media marketing, sales and CRM.", url: "academy.hubspot.com" },
    ],
  },
  {
    heading: "Websites for Coding and Technical Portfolios",
    sites: [
      { name: "GitHub", title: "Developer Portfolio", text: "Upload projects, build a portfolio, collaborate and contribute to open source. Essential for technical careers.", url: "github.com" },
      { name: "GitLab", title: "Code Hosting", text: "Host code and collaborate on software projects to show employers your skills.", url: "gitlab.com" },
      { name: "Kaggle", title: "Data Science Projects", text: "Join competitions, use datasets and build projects — ideal for aspiring data analysts, data scientists and ML engineers.", url: "kaggle.com" },
      { name: "HackerRank", title: "Coding Practice", text: "Practice coding and interview questions to prepare for coding tests.", url: "hackerrank.com" },
      { name: "LeetCode", title: "Interview Problems", text: "Widely used for practising programming problems before technical interviews.", url: "leetcode.com" },
    ],
  },
  {
    heading: "Websites for Resume and Career Preparation",
    sites: [
      { name: "Resumly", title: "AI Resume Builder", text: "Resumly helps you build ATS-friendly resumes with AI — improving structure, content, keywords and layout so your resume matches each job instead of using one version everywhere.", internal: "/builder" },
      { name: "Canva", title: "Resume Design", text: "Templates for resumes, portfolios and presentations. For ATS applications, prefer readability and simple formatting over flashy designs.", url: "canva.com" },
      { name: "Google Docs", title: "Easy Resume Editing", text: "Easy editing, cloud storage, sharing, collaboration and simple templates.", url: "docs.google.com" },
      { name: "Grammarly", title: "Error-Free Writing", text: "Catch spelling, grammar and punctuation mistakes in resumes, cover letters, emails and LinkedIn posts.", url: "grammarly.com" },
      { name: "Jobscan", title: "Keyword Matching", text: "Compare your resume with job descriptions. Some features have usage limits or need payment, but it helps you understand ATS optimisation.", url: "jobscan.co" },
    ],
  },
  {
    heading: "Websites for Interview Preparation",
    sites: [
      { name: "Pramp", title: "Peer Mock Interviews", text: "Practise interviews with real people to build communication and confidence.", url: "pramp.com" },
      { name: "Interviewing.io", title: "Technical Interviews", text: "Interview preparation focused on software developers.", url: "interviewing.io" },
      { name: "Big Interview", title: "Answer Practice", text: "Resources and tools to learn how to answer interview questions.", url: "biginterview.com" },
      { name: "GeeksforGeeks", title: "Interview Prep Material", text: "Data structures, algorithms, programming, databases, operating systems and interview questions.", url: "geeksforgeeks.org" },
      { name: "AmbitionBox", title: "Company and Salary Research", text: "Company reviews, salaries, interviews and work culture. Cross-check salary numbers with other sources.", url: "ambitionbox.com" },
    ],
  },
  {
    heading: "Websites for Government and Official Opportunities",
    sites: [
      { name: "National Career Service", title: "Government Employment Platform", text: "India's government platform for job listings, career advice and employment support.", url: "ncs.gov.in" },
      { name: "UPSC", title: "Civil Services Exams", text: "Official notifications, exam details, schedules and results for UPSC exams.", url: "upsc.gov.in" },
      { name: "SSC", title: "Central Government Recruitment", text: "Official information on SSC exams. Always rely on official sites rather than social media posts about vacancies.", url: "ssc.gov.in" },
    ],
  },
  {
    heading: "Websites for Building Your Professional Presence",
    sites: [
      { name: "Notion", title: "Online Portfolio", text: "Display projects, skills, certificates, resume, case studies and contact info — great if you don't have a personal website.", url: "notion.so" },
      { name: "Google Drive", title: "Organise Your Job Search", text: "Create folders for resume versions, certificates, portfolio projects, cover letters, applications and interview prep.", url: "drive.google.com" },
    ],
  },
];

const toolkit: [string, string][] = [
  ["Finding jobs", "LinkedIn, Naukri, Indeed, Internshala, Foundit"],
  ["Learning", "YouTube, freeCodeCamp, Microsoft Learn, Google Skillshop, HubSpot Academy"],
  ["Portfolio", "GitHub, Kaggle, Notion"],
  ["Resumes", "Resumly, Google Docs, Canva"],
  ["Interviews", "GeeksforGeeks, HackerRank, LeetCode, Pramp"],
  ["Government jobs", "National Career Service, UPSC, SSC"],
];

const weekly: [string, string][] = [
  ["Monday: Find opportunities", "Search LinkedIn, Naukri, Indeed and Internshala. Save jobs that suit your skills."],
  ["Tuesday: Customise your resume", "Read each job description, note key skills and keywords, and update your resume to match."],
  ["Wednesday: Build skills", "Spend at least one hour learning from YouTube, freeCodeCamp, Microsoft Learn or similar."],
  ["Thursday: Work on your portfolio", "Add a project to GitHub, Kaggle or Notion. A project shows what you can do better than a skills list."],
  ["Friday: Network", "Connect with recruiters, employees, alumni and founders on LinkedIn. Build relationships before asking for jobs."],
  ["Saturday: Interview preparation", "Practise common questions; solve coding challenges on HackerRank or LeetCode for tech roles."],
  ["Sunday: Review progress", "Track applications, interviews, skills learned, projects, connections and resume improvements."],
];

const mistakes: [string, string][] = [
  ["Applying to hundreds of jobs", "One good application is usually better than many random ones."],
  ["Using one resume for every job", "Tailor your resume to highlight relevant skills and keywords."],
  ["Ignoring your LinkedIn profile", "Recruiters often check your professional presence."],
  ["Collecting certificates without projects", "Certificates show you studied; projects show you applied it."],
  ["Applying without reading the job description", "Understand the role, requirements, location, salary and how to apply."],
  ["Paying suspicious recruiters", "Real jobs never require you to pay. Be very careful."],
];

const faqs: [string, string][] = [
  ["Which is the best free website for finding jobs in India?", "There isn't one best website. LinkedIn, Naukri, Indeed, Foundit, Internshala and the National Career Service can all be useful depending on your experience and goals."],
  ["Which website is best for freshers?", "Internshala, LinkedIn, Naukri, Indeed and Foundit are good starting points. Choose based on the kind of job you want."],
  ["Where can I learn job skills for free?", "YouTube, freeCodeCamp, Microsoft Learn, Khan Academy, MIT OpenCourseWare, Google Skillshop and HubSpot Academy all offer free courses covering technical and soft skills."],
  ["How can I get a job without experience?", "Build real-world experience through internships, freelance work, personal projects, volunteering, competitions or open source — then present it clearly in your resume and portfolio."],
  ["Should I use multiple job websites?", "Yes, because companies post on different platforms. But don't spread yourself thin — pick a few that match your field and stay organised."],
  ["How can I make my resume ATS-friendly?", "Keep the layout simple, use standard headings like Experience, Education and Skills, include keywords from the job description, and avoid images, tables and fancy fonts."],
];

let counter = 0;

const BlogTop50JobWebsites = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "Top 50 Free Websites Every Job Seeker Should Bookmark in 2026",
      description:
        "50 free websites for job search, remote work, freelancing, learning skills, resumes, interview prep and government jobs in India — plus a simple weekly job-search system.",
      path: "/blog/top-50-free-websites-job-seekers-2026",
      type: "article",
      publishedTime: "2026-10-10",
    });
  }, []);

  counter = 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/#blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blogs
          </Link>

          <span className="mb-4 inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            Job Search
          </span>

          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
            Top 50 Free Websites Every Job Seeker Should <span className="text-gradient">Bookmark in 2026</span>
          </h1>

          <div className="mb-10 flex items-center gap-4 border-b border-border pb-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> Oct 10, 2026
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> 14 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none space-y-6 leading-relaxed text-foreground/90">
            <p>
              Finding a job today is no longer about checking newspaper ads or visiting companies with a
              printed resume. Job seekers now have hundreds of websites for finding jobs, learning skills,
              building resumes, preparing for interviews, networking and discovering opportunities.
            </p>
            <p>
              The challenge is knowing <strong>which websites are actually worth your time</strong>. Whether
              you're looking for your first job, an internship or a career change, this guide lists{" "}
              <strong>50 websites every job seeker should bookmark in 2026</strong> — especially for
              opportunities in India and remote work.
            </p>

            <BlogTOC />

            {groups.map((g) => (
              <section key={g.heading} className="space-y-4">
                <h2>{g.heading}</h2>
                {g.sites.map((s) => {
                  counter += 1;
                  return (
                    <div key={s.name}>
                      <h3>
                        {counter}. {s.name} – {s.title}
                      </h3>
                      <p>{s.text}</p>
                      {s.bullets && (
                        <ul>
                          {s.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}
                      {s.url && (
                        <p className="text-sm">
                          <strong>Website:</strong>{" "}
                          <a href={`https://${s.url}`} target="_blank" rel="noopener noreferrer nofollow" className="text-primary">
                            {s.url}
                          </a>
                        </p>
                      )}
                      {s.internal && (
                        <p className="text-sm">
                          <strong>Try it:</strong>{" "}
                          <Link to={s.internal} className="text-primary">
                            Build your free resume
                          </Link>{" "}
                          or{" "}
                          <Link to="/ats-checker" className="text-primary">
                            check your ATS score
                          </Link>
                        </p>
                      )}
                    </div>
                  );
                })}
                {g.heading === "Websites for Learning Job Skills" && <BlogCTA variant="inline" />}
              </section>
            ))}

            <h2>How to Use These 50 Websites Without Getting Overwhelmed</h2>
            <p>
              You don't need to sign up for all 50. Build a small <strong>job-search toolkit</strong> instead.
              A fresher could start with:
            </p>
            <ul>
              {toolkit.map(([k, v]) => (
                <li key={k}>
                  <strong>{k}:</strong> {v}
                </li>
              ))}
            </ul>

            <h2>A Simple Weekly Job Search System for Freshers</h2>
            <p>Saving websites helps, but knowing how to use them matters more. Try this routine:</p>
            {weekly.map(([k, v]) => (
              <div key={k}>
                <h3>{k}</h3>
                <p>{v}</p>
              </div>
            ))}
            <p>
              Need more ideas? Read{" "}
              <Link to="/blog/job-search-checklist-before-you-apply">the job search checklist</Link> and{" "}
              <Link to="/blog/build-work-experience-without-job">how to build experience without a job</Link>.
            </p>

            <h2>Job Search Mistakes to Avoid</h2>
            {mistakes.map(([k, v]) => (
              <div key={k}>
                <h3>{k}</h3>
                <p>{v}</p>
              </div>
            ))}

            <h2>Final Thoughts</h2>
            <p>
              You don't need all 50 websites. Pick the ones that fit your goal. For a fresher in India, a
              strong mix is: <strong>LinkedIn + Naukri + Internshala + YouTube + GitHub + Resumly + a portfolio + interview practice.</strong>
            </p>
            <p>
              Use job portals to find openings, learning platforms to grow skills, portfolio sites to prove
              your abilities and networking sites to meet people. Your next opportunity could begin with{" "}
              <strong>one application, one project, one connection or one new skill.</strong>
            </p>

            <h2>Frequently Asked Questions</h2>
            {faqs.map(([q, a]) => (
              <div key={q}>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}

            <BlogCTA
              title="Start Building a Better Resume"
              description="Finding the job is only half the process. Create an AI-powered, ATS-friendly resume with Resumly — free, no login."
              buttonText="Build My Resume Now"
            />
          </article>

          <div className="mt-16 border-t border-border pt-8 text-center">
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Read more articles
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogTop50JobWebsites;
