import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

const Aboutus = () => {
  const teamMembers = [
{
  name: "VIRENDRA KUMAR",
  image: "./Profiles/Virendra-Srivastava.jpg",
  position: "President",
  shortDescription:
    "Shri Virendra Kumar Srivastava, born on September 2, 1976, is a highly accomplished professional with a strong academic background in business, commerce, journalism, and finance. He holds an MBA from UPTU (UP College, Varanasi), an M.Com and PG Diploma in Financial Management from Purvanchal University, and an MJMC from Sanskrit University, Varanasi (2025). A native of Varanasi, he combines deep academic insight with extensive experience in administration and leadership. He also holds computer certifications from Jetking Varanasi and other reputed institutions.",
  fullDescription: `
    <p>🔷 <strong>Full Biography</strong></p>
    <p>
      Shri Virendra Kumar Srivastava, born on September 2, 1976, is an accomplished professional, social contributor, and spiritual leader based in Varanasi, Uttar Pradesh. He is the son of the late Shri Ghanshyam Lal Srivastava and resides at C.K. 65/268 D, Badi Piyarikala Chowk, Varanasi – 221001.
    </p>

    <p><strong>🎓 Academic Background</strong></p>
    <ul>
      <li>MBA – U.P. Technical University, Lucknow (UP College, Varanasi) – 2002</li>
      <li>M.Com – Purvanchal University, Jaunpur – 1997</li>
      <li>PG Diploma in Financial Management – Purvanchal University – 1998</li>
      <li>MJMC – Sanskrit University, Varanasi – 2025</li>
      <li>Computer Certifications – Swift Course (Computer Bureau, 1996) and Jetking Varanasi</li>
    </ul>

    <p><strong>🧘‍♂️ Social & Spiritual Leadership</strong></p>
    <ul>
      <li><strong>Devashram Trust</strong> (2000–2020): Spiritual and social leader with 12,000+ volunteers nationwide</li>
      <li><strong>Divyashram Trust</strong> (President since 2024): Leading 6,000+ members in India for social and spiritual service</li>
    </ul>

    <p><strong>💼 Professional Career</strong></p>
    <ul>
      <li><strong>Pooja Associates / Ankoot Supplements Pvt. Ltd.</strong> (Founder since 2015): Distribution & production, 40+ team members, ₹10 Cr turnover</li>
      <li><strong>Dishnet Wireless Ltd. (AIRCEL)</strong> (Regional Sales Manager, 2013–2015)</li>
      <li><strong>Reliance Communications</strong> (Prepaid Lead Manager, 2007–2013)</li>
      <li><strong>Wipro Consumer Care Ltd.</strong> (Senior Sales Officer, 2002–2007)</li>
    </ul>

    <p>
      Shri Virendra Srivastava’s journey reflects a rare blend of academic brilliance, entrepreneurial spirit, and community-driven leadership. As the current President of Divyashram Trust, he continues to inspire change and promote holistic development across India.
    </p>
  `,
},

{
  name: "SANJAY KESHARI",
  image: "./Profiles/Sanjay-Keshari.jpg",            
  position: "Secretary",
  shortDescription:
    "Shri Sanjay Keshari is a respected entrepreneur and academic with a Master's degree in Commerce (M.Com) from Purvanchal University, Jaunpur, Uttar Pradesh (1997). He has also completed a Swift Computer Course from Computer Bureau, Varanasi, in 1999. Known for his business acumen and leadership, he has earned a reputation as a distinguished and reputable businessman.",
  fullDescription: `
    <p>🔷 <strong>Full Biography</strong></p>
    <p>
      Shri Sanjay Keshari is a reputed businessman and academic, widely recognized for his contributions to commerce and entrepreneurship in Varanasi, Uttar Pradesh.
    </p>

    <p><strong>🎓 Academic Background</strong></p>
    <ul>
      <li>M.Com – Purvanchal University, Jaunpur – 1997</li>
      <li>Computer Certification – Swift Course (Computer Bureau, Varanasi) – 1999</li>
    </ul>

    <p><strong>💼 Professional Recognition</strong></p>
    <ul>
      <li>Renowned and established businessman with a strong presence in Varanasi and surrounding areas.</li>
    </ul>

    <p>
      Shri Sanjay Keshari’s journey reflects a combination of academic excellence and entrepreneurial success. His consistent efforts and business leadership have made a lasting impact in his community and beyond.
    </p>
  `,
},
    {
  name: "SIDHARTHA PANDEY",
  image: "./Profiles/Sidhartha-Pandey.jpg",
  position: "Treasurer",
  shortDescription:
    "Shri Sidhartha Pandey, born on September 18, 1974, is a highly accomplished professional with a strong academic background in law, commerce, journalism, and finance. He holds an LLB and M.Com from Purvanchal University. A native of Varanasi, he combines deep academic insight with extensive experience in administration and leadership.",
  fullDescription: `
    <p>🔷 <strong>Full Biography</strong></p>
    <p>
      Shri Sidhartha Pandey, born on September 18, 1974, is a distinguished entrepreneur and multi-disciplinary professional based in Varanasi, Uttar Pradesh. Known for his academic versatility and administrative capabilities, he has significantly contributed to both business and social spheres.
    </p>

    <p><strong>🎓 Academic Background</strong></p>
    <ul>
      <li>LLB – Purvanchal University, Jaunpur</li>
      <li>M.Com – Purvanchal University, Jaunpur</li>
    </ul>

    <p><strong>🧠 Expertise & Contributions</strong></p>
    <ul>
      <li>Expertise in law, commerce, journalism, and finance</li>
      <li>Known for his strong administrative leadership and visionary thinking</li>
      <li>Combines professional excellence with social awareness and responsibility</li>
    </ul>

    <p>
      Shri Sidhartha Pandey’s journey is marked by academic distinction and entrepreneurial success. As a forward-thinking leader from Varanasi, he continues to inspire others through his work and vision in both business and community development.
    </p>
  `,
},
    {
  name: "AJAY KUSHWAHA",
  image: "./Profiles/Ajay-Kushwaha.jpg",
  position: "Vice President",
  shortDescription:
    "Shri Ajay is a highly skilled finance professional with a strong background in business management and commerce. He holds an MBA from UPTU, Lucknow and an M.Com from Purvanchal University, Jaunpur. With over two decades of experience, he currently serves as the Finance Head at a multinational company in India. Additionally, Ajay has been deeply involved in spiritual and social work, actively contributing to various organizations across India.",
  fullDescription: `
    <p>🔷 <strong>Full Biography</strong></p>
    <p>
      Shri Ajay is an experienced finance professional, spiritual leader, and social contributor, known for his long-standing service in the corporate sector and commitment to the betterment of society. With a rich academic background and significant experience in business, he continues to make meaningful contributions in both the professional and spiritual realms.
    </p>

    <p><strong>🎓 Academic Qualifications</strong></p>
    <ul>
      <li>MBA from UPTU, Lucknow (UP College, Varanasi) – 2002</li>
      <li>M.Com from Purvanchal University, Jaunpur – 1997</li>
      <li>SWIFT Computer Course, Computer Bureau, Varanasi – 1996</li>
      <li>JETKING Varanasi</li>
    </ul>

    <p><strong>💼 Professional Experience</strong></p>
    <ul>
      <li><strong>Finance Head</strong> at a Multinational Company, India (Since December 2002)</li>
      <li>Regional Sales Manager (Previous role)</li>
    </ul>

    <p><strong>🌟 Social & Spiritual Leadership</strong></p>
    <ul>
      <li>
        <strong>Devashram Trust</strong> (Part-time member, 2000–2020)<br>
        Focus on spiritual and social service with 12,000+ members nationwide
      </li>
      <li>
        <strong>Divyashram Trust</strong> (Vice President, since December 2024)<br>
        Leading spiritual guidance, social work, and community development with 6,000+ members
      </li>
    </ul>

    <p>
      Shri Ajay’s work reflects a balanced blend of professional excellence and a deep commitment to social and spiritual causes, inspiring countless individuals across India.
    </p>
  `,
},

    {
  name: "MRS. MEENA SINGH",
  image: "./Profiles/Meena-Singh.jpg",
  position: "Director – Human Resources",
  shortDescription:
    "Mrs. Meena Singh is a dynamic and results-driven HR leader with over two decades of experience in executing transformative HR strategies aligned with business goals. She is known for driving organizational effectiveness and optimizing talent acquisition, employee engagement, and HR operations across sectors like FMCG, Telecom, BFSI, and Defence.",
  fullDescription: `
    <p>🔷 <strong>Full Biography</strong></p>
    <p>
      Mrs. Meena Singh is a strategic HR professional with a proven record of success in implementing end-to-end HR solutions. With expertise in talent management, change management, succession planning, M&A integration, and performance-driven employee relations, she has contributed to notable organizations such as Akshat Group, SAHIT Enterprises, and Ujala Credit Co-op Society. She excels in SAP and ERP HR modules and has led initiatives reducing hiring costs and redesigning compensation frameworks.
    </p>

    <p><strong>🎓 Academic Background</strong></p>
    <ul>
      <li>MBA in Human Resources – Purvanchal University</li>
      <li>M.Sc. in Organic Chemistry</li>
      <li>B.Sc. in Biology</li>
    </ul>

    <p><strong>💼 Professional Expertise</strong></p>
    <ul>
      <li>Strategic HR & Organizational Development</li>
      <li>Talent Acquisition & Workforce Planning</li>
      <li>Change Management & Compliance Leadership</li>
      <li>HR Policy Design & Process Optimization</li>
      <li>ERP & SAP HR Module Implementation</li>
    </ul>

    <p><strong>🏆 Notable Achievements</strong></p>
    <ul>
      <li>Recipient of “HR Exceptional Award”</li>
      <li>Recognized as “Best Performer of the Year”</li>
      <li>Led successful SAP HRM rollouts</li>
    </ul>

    <p>
      With her people-first leadership style, Mrs. Singh fosters a culture of trust, growth, and innovation—emphasizing the role of HR in shaping meaningful human experiences and scalable business outcomes.
    </p>

    <p>
      🔗 <strong>LinkedIn:</strong> 
      <a href="https://www.linkedin.com/in/meena-singh-16165615" target="_blank">Meena Singh on LinkedIn</a>
    </p>
  `
},
    {
  name: "MRS. POOJA SRIVASTAVA",
  image: "./Profiles/Pooja-Srivastava.jpg",
  position: "Consultant",
  shortDescription:
    "Mrs. Pooja Srivastava is a highly accomplished professional with a strong academic foundation in business, commerce, and finance. A native of Varanasi, she holds an M.Com and MBA, combining academic excellence with real-world experience as an entrepreneur and advisor. She also possesses certifications in computer applications from reputed institutions.",
  fullDescription: `
    <p>🔷 <strong>Full Biography</strong></p>
    <p>
      Born on June 28, 1982, Mrs. Pooja Srivastava is an experienced entrepreneur and strategic advisor. With her educational expertise in commerce and business administration, she has successfully guided organizations in their growth journeys. Her leadership approach emphasizes discipline, clarity, and long-term sustainability.
    </p>

    <p><strong>🎓 Academic Background</strong></p>
    <ul>
      <li>MBA – Master of Business Administration</li>
      <li>M.Com – Master of Commerce</li>
      <li>Certifications in Computer Applications</li>
    </ul>

    <p><strong>💼 Professional Strengths</strong></p>
    <ul>
      <li>Entrepreneurship and Business Advisory</li>
      <li>Strategic Planning and Operational Oversight</li>
      <li>Financial Management and Compliance</li>
      <li>Leadership in Administrative Structures</li>
      <li>Empowering individuals and teams toward impactful growth</li>
    </ul>

    <p>
      Mrs. Srivastava continues to serve as a trusted advisor, offering her guidance to institutions with integrity, vision, and a commitment to excellence. Her contributions reflect her deep-rooted belief in purposeful progress and community upliftment.
    </p>
  `
},
{
  name: "Dr. Arvind Keshari",
  image: "./Profiles/Dr-Arvind-keshari .jpg",
  position: "Senior Consultant",
  shortDescription:
    "Dr. Arvind Keshari, born on September 12, 1970, is a BAMS medical graduate and a well-renowned social welfare activist and community leader from Varanasi. With decades of hands-on experience in healthcare outreach, education, and grassroots development, he has dedicated his life to uplifting underserved communities through various civic and humanitarian initiatives.",

  fullDescription: `
    <p>🔷 <strong>Full Biography</strong></p>
    <p>
      Dr. Arvind Keshari, born on September 12, 1970, is a well-renowned social activist and community leader from Varanasi, Uttar Pradesh. He currently resides at B 38/1-K, Plot No. 8, Birdopur, Mahmoorganj, Varanasi – 221010.
    </p>

    <p><strong>🎓 Educational Background</strong></p>
    <ul>
      <li>BAMS (Bachelor of Ayurvedic Medicine & Surgery) Graduate</li>
    </ul>

    <p><strong>💼 Professional Background</strong></p>
    <ul>
      <li>Currently engaged in business while actively involved in community service initiatives</li>
    </ul>

    <p><strong>🌟 Community & Social Service</strong></p>
    <ul>
      <li>Over three decades of involvement in social welfare and volunteer work</li>
      <li>Senior member of several nationally recognized cultural and humanitarian organizations</li>
      <li>Organizer of numerous <strong>medical and health check-up camps</strong> in rural and underserved areas</li>
      <li>Strong advocate for <strong>primary education and child welfare</strong> in low-income communities</li>
      <li>Promoter of inclusive development programs, especially in the field of health and education</li>
      <li>Supporter of initiatives empowering the differently-abled and marginalized groups</li>
    </ul>

    <p>
      Widely regarded as a well-renowned figure in grassroots leadership, Dr. Arvind Keshari is known for his unwavering commitment to service and social upliftment. He continues to inspire meaningful change through his work in healthcare, education, and community empowerment.
    </p>
  `,
},

  ];


const TeamCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6 mb-10 border border-gray-700">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* Profile Image */}
        <div className="w-50 h-50 sm:w-48 sm:h-48 md:w-56 md:h-56 flex-shrink-0">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover rounded-full border border-gray-300 shadow-md"
  />
</div>



        {/* Basic Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
          <p className="text-lg font-semibold text-blue-700 mt-1">{member.position}</p>
          <p className="text-gray-700 mt-3">{member.shortDescription}</p>
        </div>
      </div>

      {/* Full Description (Expandable) */}
      {expanded && (
        <div
          className="mt-6 text-gray-800 prose prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: member.fullDescription }}
        />
      )}

      {/* Toggle Button */}
      <div className="mt-4 text-right">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          {expanded ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};


return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Leadership Team
        </h2>
        <div className="max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard member={member} key={index} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Aboutus;
