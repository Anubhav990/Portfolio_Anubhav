import Eshqimg from '/eshqiproffesional.jpg';
import Nitinimg from '/nitinvyas.webp';
import Harjaapimg from '/harjaapimg.jpeg';
import Narvijayimg from '/narvijayimg.png';

const items = [
    {
      name: "Eshqpreet Singh",
      title: "Full-Stack Developer, IIT Ropar, AddPinch(Germany)",
      image: Eshqimg,
      body: "Anubhav's dedication, problem-solving skills and expertise in front-end and back-end development make working with him a truly rewarding experience.",
    },
    {
      name: "Nitin Vyas",
      title: "CEO & MD, BEUMER India",
      image: Nitinimg,
      body: "Anubhav has a keen understanding of software development and brings a professional approach to his work. His ability to deliver effective and user-friendly solutions is commendable.",
    },
    {
      name: "Harjaap Dhillon",
      title: "Founder(Pulsepeak), Front-End Web developer",
      image: Harjaapimg,
      body: "Known for his sharp UI/UX skills and front-end expertise, Anubhav creates functional and engaging interfaces with precision.",
    },
    {
      name: "Narvijay Thakur",
      title: "CEO & MD, 60DegreeDigital",
      image: Narvijayimg,
      body: "Anubhav’s dedication, quick learning and strong work ethic makes him a valuable asset, delivering results with great attention to detail.",
    },
  ]
  
  export default function Page() {
    return (
      <div className="relative flex w-screen items-center">
        <div className="relative flex max-w-[100vw] overflow-hidden py-6">
          <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="h-full px-2.5">
                <div className="relative h-full w-[28rem] rounded-2xl border border-white dark:border-white/5 bg-gradient-to-br from-gray-200 to-slate-300 dark:bg-gradient-to-br dark:from-white/5 dark:to-white/10 px-8 py-6">
                  <div className="pb-4 font-light text-black dark:text-white/75">{item.body}</div>
  
                  <div className="mt-auto flex items-center gap-4">
                    <img src={item.image} className="h-9 w-9 rounded-full object-cover" />
  
                    <div className="flex flex-col text-sm">
                      <div className="text-black dark:text-white">{item.name}</div>
  
                      <div className="text-black dark:text-white/75">{item.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  