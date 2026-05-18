import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";

const BlogFirstInterviewIndia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "How to Prepare for Your First Job Interview in India (2026 Guide) | Resumly",
      description:
        "Step-by-step guide for freshers in India to prepare for their first job interview — research, common questions, communication, dress code, and confidence tips.",
      path: "/blog/first-job-interview-india-2026",
      type: "article",
      publishedTime: "2026-05-18",
    });
  }, []);

  const steps: { title: string; body: React.ReactNode }[] = [
    {
      title: "Step 1: Understand the Job Role",
      body: (
        <>
          <p>Before attending an interview, carefully read the job description. Focus on:</p>
          <ul>
            <li>Required skills</li>
            <li>Responsibilities</li>
            <li>Company expectations</li>
          </ul>
          <p>
            For example, if the role is for digital marketing, you should understand social media basics,
            SEO, and content marketing. Understanding the role helps you answer questions more confidently.
          </p>
        </>
      ),
    },
    {
      title: "Step 2: Research the Company",
      body: (
        <>
          <p>
            One of the biggest mistakes freshers make is attending interviews without researching the
            company. Before the interview, visit the company website, understand their services, and
            learn about their products.
          </p>
          <p>
            Recruiters often ask: <em>"What do you know about our company?"</em> A confident answer
            creates a strong impression.
          </p>
        </>
      ),
    },
    {
      title: "Step 3: Prepare Common Interview Questions",
      body: (
        <>
          <p>Most fresher interviews include similar questions:</p>
          <ul>
            <li>Tell me about yourself</li>
            <li>Why should we hire you?</li>
            <li>What are your strengths and weaknesses?</li>
            <li>Why do you want this job?</li>
            <li>Where do you see yourself in 5 years?</li>
          </ul>
          <p>Practice answering these clearly and naturally.</p>
        </>
      ),
    },
    {
      title: "Step 4: Nail Your “Tell Me About Yourself” Answer",
      body: (
        <>
          <p>This is usually the first question. Your answer should include your education, your skills, and your career goal.</p>
          <blockquote className="border-l-4 border-primary pl-4 italic">
            "Hi, I'm a B.Com graduate with strong communication and analytical skills. I'm interested in
            finance and looking for an opportunity to start my career and improve my professional skills."
          </blockquote>
          <p>Keep it short, professional, and confident.</p>
        </>
      ),
    },
    {
      title: "Step 5: Dress Professionally",
      body: (
        <>
          <p>First impressions matter a lot.</p>
          <ul>
            <li><strong>Men:</strong> Formal shirt, formal pants, clean shoes</li>
            <li><strong>Women:</strong> Formal or semi-formal attire, simple appearance</li>
          </ul>
          <p>Avoid overly casual clothing and loud accessories. You don't need expensive clothes — just look neat and professional.</p>
        </>
      ),
    },
    {
      title: "Step 6: Practice Communication Skills",
      body: (
        <>
          <p>Good communication doesn't mean speaking perfect English. It means speaking clearly, being confident, and explaining your thoughts properly.</p>
          <ul>
            <li>Speak slowly</li>
            <li>Maintain eye contact</li>
            <li>Avoid filler words like "umm"</li>
          </ul>
          <p>Practice in front of a mirror or record yourself.</p>
        </>
      ),
    },
    {
      title: "Step 7: Prepare Questions to Ask Recruiters",
      body: (
        <>
          <p>At the end, recruiters often ask: <em>"Do you have any questions for us?"</em> Never say "No." Instead, ask:</p>
          <ul>
            <li>What does a normal workday look like?</li>
            <li>What skills are important for this role?</li>
            <li>Are there learning opportunities for freshers?</li>
          </ul>
          <p>This shows interest and professionalism.</p>
        </>
      ),
    },
    {
      title: "Step 8: Prepare for Online Interviews",
      body: (
        <>
          <p>Many companies in India now conduct online interviews. Before the interview:</p>
          <ul>
            <li>Test your internet connection</li>
            <li>Use headphones</li>
            <li>Sit in a quiet, well-lit place</li>
            <li>Keep your resume ready</li>
            <li>Join the meeting 5 minutes early</li>
          </ul>
        </>
      ),
    },
    {
      title: "Step 9: Build Confidence Before the Interview",
      body: (
        <>
          <p>Confidence comes from practice, preparation, and knowing the company. Recruiters know you're a fresher — they don't expect perfection. They mainly look for:</p>
          <ul>
            <li>Willingness to learn</li>
            <li>Positive attitude</li>
            <li>Communication ability</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to blogs
          </Link>

          <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-4">
            Interviews
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            How to Prepare for Your <span className="text-gradient">First Job Interview</span> in India (2026 Guide)
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> May 18, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 8 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            <p className="text-lg">
              Getting your first job interview can feel exciting and stressful at the same time. For many
              freshers in India, interviews are the biggest challenge after building a resume. The good
              news: interview skills can be learned. With proper preparation and practice, you can perform
              better than most candidates.
            </p>

            <h2>Why Interview Preparation Matters</h2>
            <p>
              In India, companies receive applications from hundreds of candidates for a single role.
              Interviews help recruiters identify communication skills, confidence, problem-solving
              ability, and professional attitude. Even candidates with average marks get selected if they
              perform well in interviews.
            </p>

            {steps.map((step) => (
              <div key={step.title} className="mt-10">
                <h2 className="text-2xl md:text-3xl font-bold">{step.title}</h2>
                <div className="space-y-3">{step.body}</div>
              </div>
            ))}

            <h2>Common Interview Mistakes Freshers Make</h2>
            <ol>
              <li><strong>Lack of preparation</strong> — attending interviews without practice.</li>
              <li><strong>Giving long answers</strong> — keep answers short and clear.</li>
              <li><strong>Poor body language</strong> — looking nervous or avoiding eye contact.</li>
              <li><strong>Talking negatively</strong> — never complain about college, previous internships, or other companies.</li>
            </ol>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-12">
              <h3 className="text-xl font-bold mb-3 mt-0">💡 Bonus Tip: Build a Strong Resume First</h3>
              <p className="m-0">
                Your interview starts with your resume. A professional, ATS-friendly resume increases your
                chances of getting interview calls — highlight relevant skills, include projects, and use
                proper formatting.
              </p>
            </div>

            <h2>How AI Can Help Freshers</h2>
            <p>
              AI tools can help you build resumes, practice interview questions, and improve communication
              — saving time and sharpening your preparation.
            </p>

            <h2>Final Thoughts</h2>
            <p>
              Your first interview may feel difficult, but preparation changes everything. Research the
              company, practice common questions, improve communication, and stay confident. Even if you
              don't get selected immediately, every interview helps you perform better in the next one.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">Walk Into Your Interview With a Winning Resume</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Build an ATS-friendly, recruiter-ready resume in minutes — designed for Indian freshers.
              </p>
              <Link
                to="/builder"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Build My Resume Now
              </Link>
            </div>
          </article>

          <div className="mt-16 pt-8 border-t border-border text-center">
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Read more articles
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogFirstInterviewIndia;
