import Image from "next/image";

const partners = [
  {
    name: "Faisal Aslam",
    role: "Partner",
    image: "/images/person.png",
    experience: "18+ Years",
  },
  {
    name: "Zeeshan Aslam",
    role: "Partner",
    image: "/images/zeeshan.JPG",
    experience: "15+ Years",
  },
  {
    name: "Suhail Aslam",
    role: "Partner",
    image: "/images/person.png",
    experience: "12+ Years",
  },
  {
    name: "Shoaib Akram",
    role: "Partner",
    image: "/images/person.png",
    experience: "10+ Years",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full mb-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-px bg-amber-600" />
              <p className="text-sm font-medium text-amber-600 tracking-widest uppercase">
                Our Partners
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-tight">
              The People Behind
              <br />
              Every Structure
            </h2>
          </div>
          <p className="max-w-sm text-stone-600 leading-relaxed text-lg">
            With decades of combined experience, our partners bring vision,
            expertise, and unwavering commitment to every project.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white border border-stone-200 hover:border-stone-300 transition-all duration-500 hover:shadow-xl hover:shadow-stone-200/50"
            >
              {/* Corner Accents - Blueprint Style */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-px -translate-y-px" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-px translate-y-px" />

              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                  priority
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
              </div>

              {/* Info Section */}
              <div className="p-5 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-0.5 group-hover:text-amber-700 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-stone-500">{partner.role}</p>
                  </div>

                  {/* Index Number */}
                  <span className="text-3xl font-bold text-stone-100 group-hover:text-amber-100 transition-colors duration-300">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
