import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Globe,
  Target,
  Camera,
  Type,
  FileText,
  GraduationCap,
  Wrench,
  Award,
  Folder,
  Users,
  PenLine,
  MessageCircle,
  Search,
  Briefcase,
  Star,
  AlertTriangle,
  CalendarClock,
  CheckSquare,
  Lightbulb,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";

const BlogLinkedInGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "The Complete LinkedIn Guide for Freshers in India (2026) | Get Job Opportunities",
      description:
        "Learn how to build a professional LinkedIn profile, grow your network, attract recruiters and land your first job with this complete LinkedIn guide for freshers in India.",
      path: "/blog/linkedin-guide-freshers-india-2026",
      type: "article",
      publishedTime: "2026-07-21",
    });
  }, []);

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
            Career Advice
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            The Complete LinkedIn Guide for Freshers in India{" "}
            <span className="text-gradient">(2026)</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> July 21, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 10 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            <p className="text-lg">
              In today's job market, having a written resume is not enough. Recruiters want to know
              more about you before scheduling interviews. One of the places they look is LinkedIn.
            </p>
            <p>
              If you are a fresher in India, creating a LinkedIn profile can really improve your
              chances of getting internships, freelance projects and full-time job opportunities.
              Whether you are a college student, a graduate or someone switching careers, LinkedIn
              can become one of your most valuable career tools.
            </p>
            <p>
              This guide will show you how to build a LinkedIn profile from scratch, optimize it for
              recruiters, grow your professional network and use LinkedIn effectively to find your
              first job in 2026.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" /> What is LinkedIn?
            </h2>
            <p>
              LinkedIn is the world's professional networking platform with more than one billion
              users.
            </p>
            <p>
              Unlike media platforms that focus on entertainment, LinkedIn helps professionals find
              jobs, build professional networks, showcase skills and achievements, learn from
              industry experts, connect with recruiters and discover internship opportunities.
            </p>
            <p>For freshers, LinkedIn acts as a resume that is visible to recruiters around the world.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" /> Why Every Fresher in India Should Use
              LinkedIn
            </h2>
            <p>
              Many students create a LinkedIn account but never complete their profile. This is a
              missed opportunity.
            </p>
            <p>A strong LinkedIn profile can help you:</p>
            <ul className="space-y-2">
              <li>Get discovered by recruiters</li>
              <li>Build credibility without work experience</li>
              <li>Learn industry trends</li>
              <li>Connect with professionals</li>
              <li>Find internships</li>
              <li>Showcase projects and certifications</li>
              <li>Increase interview opportunities</li>
            </ul>
            <p>
              Many recruiters actively search LinkedIn before posting jobs. Having a complete
              profile increases your chances of appearing in their search results.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Camera className="w-6 h-6 text-primary" /> Step 1: Create a Professional Profile
              Photo
            </h2>
            <p>Your profile picture is the first thing people notice.</p>
            <p>Choose a photo that's:</p>
            <ul className="space-y-2">
              <li>Clear and high quality</li>
              <li>Well-lit</li>
              <li>Professional</li>
              <li>Where you are smiling naturally</li>
              <li>Where you are wearing neat clothes</li>
            </ul>
            <p>
              Avoid selfies, group photos, filters, sunglasses and casual party pictures. Profiles
              with photos generally receive more profile views than profiles without one.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Type className="w-6 h-6 text-primary" /> Step 2: Write a Headline
            </h2>
            <p>
              Your headline appears below your name and is one of the most important parts of your
              profile.
            </p>
            <p>Do not simply write "Student". Instead write something like:</p>
            <ul className="space-y-2">
              <li>
                "Computer Science Graduate | Python Learner | Open to Software Development
                Opportunities"
              </li>
              <li>"B.Com Graduate | Excel & Financial Analysis | Open to Finance Roles"</li>
            </ul>
            <p>Include keywords recruiters actually search for.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" /> Step 3: Write an Engaging About Section
            </h2>
            <p>Your About section tells your story.</p>
            <p>
              Include your education, career interests, technical skills, soft skills and career
              goals.
            </p>
            <p>For example, you can write:</p>
            <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
              "I am a Computer Science graduate passionate about software development and
              problem-solving. I have experience building projects using Python, HTML, CSS and
              JavaScript. I enjoy learning technologies and continuously improving my technical
              skills. I am currently seeking entry-level opportunities where I can contribute, learn
              from professionals and grow my career."
            </blockquote>
            <p>Keep it genuine, concise and easy to read.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" /> Step 4: Add Your Education
            </h2>
            <p>
              Include your college name, degree, graduation year, relevant coursework and academic
              achievements.
            </p>
            <p>
              If your GPA or percentage is strong, include it. You can also mention clubs, leadership
              positions and volunteer activities.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Wrench className="w-6 h-6 text-primary" /> Step 5: Showcase Your Skills
            </h2>
            <p>Recruiters often search candidates using skills.</p>
            <p>Examples include:</p>
            <ul className="space-y-2">
              <li>Technical skills: Python, Java, SQL, Excel, Power BI, HTML, CSS, JavaScript, Data Analysis, Digital Marketing</li>
              <li>Soft skills: Communication, Teamwork, Leadership, Time Management, Problem Solving</li>
            </ul>
            <p>Prioritize skills relevant to the roles you want.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" /> Step 6: Add Certifications
            </h2>
            <p>Online certifications demonstrate your willingness to learn.</p>
            <p>Popular areas include:</p>
            <ul className="space-y-2">
              <li>Python Programming</li>
              <li>Data Analytics</li>
              <li>Microsoft Excel</li>
              <li>Cloud Computing</li>
              <li>Artificial Intelligence</li>
              <li>Digital Marketing</li>
              <li>UI/UX Design</li>
              <li>Project Management</li>
            </ul>
            <p>Mention the course name, organization and completion date.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Folder className="w-6 h-6 text-primary" /> Step 7: Highlight Your Projects
            </h2>
            <p>Projects matter, especially when you have no experience.</p>
            <p>Examples include:</p>
            <ul className="space-y-2">
              <li>Personal Portfolio Website</li>
              <li>Resume Builder Application</li>
              <li>Weather App</li>
              <li>Expense Tracker</li>
              <li>Business Analysis Project</li>
              <li>Data Visualization Dashboard</li>
            </ul>
            <p>
              For each project, include the objective, technologies used, results and GitHub or live
              project link if available. Projects show recruiters that you can apply your knowledge
              practically.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" /> Step 8: Build Your Network
            </h2>
            <p>Networking is one of LinkedIn's biggest advantages.</p>
            <p>Start connecting with:</p>
            <ul className="space-y-2">
              <li>Classmates</li>
              <li>Alumni</li>
              <li>Professors</li>
              <li>Recruiters</li>
              <li>HR professionals</li>
              <li>Industry experts</li>
            </ul>
            <p>Always personalize your connection request. For example:</p>
            <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
              "Hello, I'm a graduate interested in software development. I enjoy reading your posts
              and would love to connect and learn from your experience."
            </blockquote>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <PenLine className="w-6 h-6 text-primary" /> Step 9: Post Regularly
            </h2>
            <p>
              You don't need thousands of followers to benefit from LinkedIn. Posting consistently
              helps recruiters notice your profile.
            </p>
            <p>Ideas include:</p>
            <ul className="space-y-2">
              <li>Course completion</li>
              <li>New certifications</li>
              <li>Personal projects</li>
              <li>Career lessons</li>
              <li>Resume tips</li>
              <li>Interview experiences</li>
              <li>Industry news</li>
            </ul>
            <p>Aim to post twice every week.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" /> Step 10: Engage with Other
              Professionals
            </h2>
            <p>Don't just post.</p>
            <p>
              Also like posts, leave thoughtful comments, share useful articles and join discussions.
              Meaningful engagement increases your visibility.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Search className="w-6 h-6 text-primary" /> Step 11: Turn on "Open to Work"
            </h2>
            <p>
              Enable LinkedIn's "Open to Work" feature. Specify your roles, job locations, remote
              work preferences and internship opportunities. This helps recruiters discover your
              profile easily.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" /> Step 12: Search for Jobs
            </h2>
            <p>Instead of searching only for "Jobs", try combinations like:</p>
            <ul className="space-y-2">
              <li>"Software Developer Fresher"</li>
              <li>"Data Analyst Intern"</li>
              <li>"Digital Marketing Executive"</li>
              <li>"Business Analyst Trainee"</li>
              <li>"Python Developer Entry Level"</li>
            </ul>
            <p>
              Use filters for location, experience level, remote jobs and internship opportunities.
              Set up job alerts so LinkedIn notifies you about openings.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" /> Step 13: Request Recommendations
            </h2>
            <p>Recommendations improve your credibility.</p>
            <p>
              Ask professors, internship mentors, project guides and freelance clients for
              recommendations. One or two genuine recommendations can strengthen your profile.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-primary" /> Common LinkedIn Mistakes
              Freshers Should Avoid
            </h2>
            <p>Avoid these mistakes:</p>
            <ul className="space-y-2">
              <li>Incomplete profile</li>
              <li>Poor-quality profile photo</li>
              <li>Copy-paste About section</li>
              <li>Irrelevant skills</li>
              <li>Spelling mistakes</li>
              <li>Sending generic connection requests</li>
              <li>Posting only when looking for a job</li>
              <li>Ignoring recruiter messages</li>
            </ul>
            <p>A complete, professional profile builds trust.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <CalendarClock className="w-6 h-6 text-primary" /> How Should You Use LinkedIn?
            </h2>
            <p>Spend just 15-20 minutes daily.</p>
            <p>Suggested routine:</p>
            <ul className="space-y-2">
              <li>Check notifications</li>
              <li>Connect with 5-10 professionals</li>
              <li>Comment on 3-5 posts</li>
              <li>Apply for jobs</li>
              <li>Read one industry article</li>
            </ul>
            <p>Consistency matters more than spending hours.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <CheckSquare className="w-6 h-6 text-primary" /> LinkedIn Profile Checklist
            </h2>
            <p>Before applying for jobs, ensure your profile includes:</p>
            <ul className="space-y-2">
              <li>✅ Professional profile photo</li>
              <li>✅ Keyword-rich headline</li>
              <li>✅ About section</li>
              <li>✅ Education details</li>
              <li>✅ Skills</li>
              <li>✅ Certifications</li>
              <li>✅ Projects</li>
              <li>✅ Customized LinkedIn URL</li>
              <li>✅ Open to Work enabled</li>
              <li>✅ Active networking</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" /> Final Thoughts
            </h2>
            <p>
              LinkedIn is more than an online resume. It is a platform where you can learn, network,
              showcase your work and discover career opportunities.
            </p>
            <p>
              As a fresher in India, building your LinkedIn profile today can create opportunities
              months from now. Recruiters often search for candidates before posting jobs, and a
              complete profile can help you stand out from thousands of applicants.
            </p>
            <p>
              Remember that LinkedIn is a long-term investment. Keep updating your profile, learn
              skills, share your achievements and engage with your professional community regularly.
            </p>
            <p>
              Small improvements made consistently can lead to internships, interviews, freelance
              projects and even your dream job.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" /> Frequently Asked Questions
            </h2>

            <h3 className="text-xl font-bold mt-8">Is LinkedIn necessary for freshers in India?</h3>
            <p>
              Yes. Many recruiters use LinkedIn to search for candidates, making it one of the best
              platforms for freshers to build their professional presence.
            </p>

            <h3 className="text-xl font-bold mt-8">Can I get a job through LinkedIn without experience?</h3>
            <p>
              Yes. Many companies hire graduates based on their skills, projects, certifications and
              LinkedIn profile.
            </p>

            <h3 className="text-xl font-bold mt-8">How many LinkedIn connections should a fresher have?</h3>
            <p>
              Quality matters more than quantity. Aim to build connections with classmates, alumni,
              recruiters and professionals in your field.
            </p>

            <h3 className="text-xl font-bold mt-8">How often should I post on LinkedIn?</h3>
            <p>
              Posting twice a week and engaging with other professionals regularly is enough to
              improve your visibility.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">Build a Resume That Matches Your LinkedIn Profile</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Your LinkedIn profile and resume should complement each other. Create an ATS-friendly
                resume with Resumly in minutes and present a consistent professional profile across
                every job application.
              </p>
              <Link
                to="/builder"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Sparkles className="w-4 h-4" /> Build My Resume Now
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

export default BlogLinkedInGuide;
