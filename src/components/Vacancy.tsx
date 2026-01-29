const vacancies = [
  {
    title: "Civil Engineer (土木エンジニア)",
    experience: "Above 8 years experience in this role",
    location: "Willing to migrate Japan",
    degree: "Degree related to civil engineering",
    salary: "Salary negotiable"
  },
  {
    title: "Site Manager (現場管理者)",
    experience: "Above 5 years experience in this role",
    location: "Willing to migrate Japan",
    degree: "Degree related to civil engineering",
    salary: "Salary negotiable"
  },
  {
    title: "Construction Site Supervisor (建設現場監督)",
    experience: "Above 5 years experience in this role",
    location: "Willing to migrate Japan",
    degree: "Degree related to civil engineering",
    salary: "Salary negotiable"
  }
];

export default function Vacancy() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-br from-blue-200/80 via-white/90 to-pink-200/80 rounded-3xl shadow-2xl border border-white/40 mx-auto max-w-6xl my-16 overflow-hidden"
      style={{ backgroundImage: `url('/images/image 1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[6px] z-0" />
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-5xl font-extrabold mb-8 text-blue-900 drop-shadow-lg text-center tracking-wide" style={{letterSpacing: '0.04em'}}>Vacancies</h2>
        <p className="mb-10 text-lg text-gray-700 text-center max-w-2xl">We are looking for talented professionals to join our team in Japan! Explore our open positions and apply today.</p>
        <div className="w-full grid md:grid-cols-3 gap-10">
          {vacancies.map((v, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-blue-200 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center relative"
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
            >
              <img src={`/images/image 1.png`} alt="Vacancy" className="w-20 h-20 object-cover rounded-full border-4 border-blue-300 shadow mb-4 bg-white" />
              <h3 className="text-2xl font-bold text-blue-800 mb-3">{v.title}</h3>
              <ul className="text-gray-700 mb-4 space-y-1 text-left mx-auto max-w-xs">
                <li><span className="font-semibold">•</span> {v.experience}</li>
                <li><span className="font-semibold">•</span> {v.location}</li>
                <li><span className="font-semibold">•</span> {v.degree}</li>
                <li><span className="font-semibold">•</span> {v.salary}</li>
              </ul>
              <a
                href="mailto:mk-kaitai@motegi-615.jp?subject=Application for "
                className="mt-auto inline-block px-5 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition-colors"
              >
                Send Resume
              </a>
            </div>
          ))}
        </div>
        <p className="mt-12 text-lg text-gray-800 text-center bg-white/70 rounded-xl px-6 py-3 shadow font-medium">
          Interested candidates, please send your resume to <a href="mailto:mk-kaitai@motegi-615.jp" className="text-blue-700 underline font-semibold">mk-kaitai@motegi-615.jp</a>
        </p>
      </div>
    </section>
  );
}
