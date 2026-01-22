// import { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { Send, MapPin, Briefcase, Users, ChevronDown, ChevronUp } from 'lucide-react';

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );

// interface Job {
//   id: string;
//   title: string;
//   department: string;
//   level: string;
//   location: string;
//   type: string;
//   description: string;
//   requirements: string[];
//   responsibilities: string[];
//   benefits: string[];
//   salary_range: string;
//   posted_at: string;
// }

export default function CareersPage() {
  // const [jobs, setJobs] = useState<Job[]>([]);
  // const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  // const [selectedDepartment, setSelectedDepartment] = useState('all');
  // const [selectedLevel, setSelectedLevel] = useState('all');
  // const [expandedJob, setExpandedJob] = useState<string | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchJobs();
  // }, []);

  // useEffect(() => {
  //   filterJobs();
  // }, [jobs, selectedDepartment, selectedLevel]);

  // const fetchJobs = async () => {
  //   try {
  //     const { data, error } = await supabase
  //       .from('jobs')
  //       .select('*')
  //       .order('posted_at', { ascending: false });

  //     if (error) throw error;
  //     setJobs(data || []);
  //   } catch (error) {
  //     console.error('Error fetching jobs:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const filterJobs = () => {
  //   let filtered = jobs;

  //   if (selectedDepartment !== 'all') {
  //     filtered = filtered.filter((job) => job.department === selectedDepartment);
  //   }

  //   if (selectedLevel !== 'all') {
  //     filtered = filtered.filter((job) => job.level === selectedLevel);
  //   }

  //   setFilteredJobs(filtered);
  // };

  // const departments = ['all', ...new Set(jobs.map((job) => job.department))];
  // const levels = ['all', ...new Set(jobs.map((job) => job.level))];

  // const handleApply = (jobTitle: string) => {
  //   const message = encodeURIComponent(
  //     `Hello, I am interested in applying for the position: ${jobTitle}`
  //   );
  //   window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  // };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-white font-light mb-4">Careers</h1>
        <p className="text-gray-400">Coming Soon</p>
      </div>
    </div>
  );
  /*
  return (
    <div className="min-h-screen bg-slate-900">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-8 leading-tight">
            Join Our
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Build your career with India's leading premium metal sticker
            manufacturer. Be part of our journey of excellence and innovation.
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-12" />
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Why Join Metal Stickers India?
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Users,
                title: 'Collaborative Culture',
                description:
                  'Work with a talented team that values innovation and excellence',
              },
              {
                icon: Briefcase,
                title: 'Growth Opportunities',
                description:
                  'Develop your skills with mentorship and professional development',
              },
              {
                icon: Send,
                title: 'Premium Benefits',
                description:
                  'Competitive salary, health insurance, and performance incentives',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-10 space-y-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-2xl shadow-amber-500/50">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-amber-900/10 to-slate-900" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Open Positions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              {filteredJobs.length} positions available
            </p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="flex flex-wrap gap-3">
              <span className="text-gray-400 text-sm tracking-wider self-center">
                Department:
              </span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-2 rounded-full text-sm tracking-wider transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/50'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {dept === 'all' ? 'All' : dept}
                </button>
              ))}
            </div>

            <div className="w-full" />

            <div className="flex flex-wrap gap-3">
              <span className="text-gray-400 text-sm tracking-wider self-center">
                Level:
              </span>
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-6 py-2 rounded-full text-sm tracking-wider transition-all duration-300 ${
                    selectedLevel === level
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/50'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {level === 'all' ? 'All' : level}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Loading positions...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No positions match your filters
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-amber-500/30 hover:bg-white/10 transition-all duration-300"
                >
                  <button
                    onClick={() =>
                      setExpandedJob(expandedJob === job.id ? null : job.id)
                    }
                    className="w-full text-left p-8 flex items-center justify-between"
                  >
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-light text-white">
                          {job.title}
                        </h3>
                        <span className="text-xs px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full">
                          {job.level}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Briefcase size={16} />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="text-amber-400">{job.type}</div>
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedJob === job.id ? (
                        <ChevronUp className="text-amber-400" size={24} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={24} />
                      )}
                    </div>
                  </button>

                  {expandedJob === job.id && (
                    <div className="border-t border-white/10 px-8 py-8 space-y-8">
                      <div>
                        <h4 className="text-lg font-medium text-amber-400 mb-4">
                          About the Role
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-amber-400 mb-4">
                          What We're Looking For
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <span className="text-amber-400 mt-1">•</span>
                              <span className="text-gray-400">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-amber-400 mb-4">
                          Your Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <span className="text-amber-400 mt-1">•</span>
                              <span className="text-gray-400">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-amber-400 mb-4">
                          What We Offer
                        </h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <span className="text-amber-400 mt-1">•</span>
                              <span className="text-gray-400">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {job.salary_range && (
                        <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
                          <p className="text-sm text-amber-400 mb-1">Salary Range</p>
                          <p className="text-xl text-white font-medium">
                            {job.salary_range}
                          </p>
                        </div>
                      )}

                      <button
                        onClick={() => handleApply(job.title)}
                        className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-2xl hover:shadow-green-500/50"
                      >
                        <Send size={20} />
                        <span>Apply via WhatsApp</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
              Don't See Your Position?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We're always looking for talented individuals. Send us your resume
              and let's explore how we can work together.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hello%20I%20would%20like%20to%20send%20my%20resume%20and%20inquire%20about%20career%20opportunities"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-2xl hover:shadow-amber-500/50"
            >
              <Send size={20} />
              <span>Send Your Resume</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );*/
}
