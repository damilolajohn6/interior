import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    image: "/assets/po2.jpg",
    description:
      "Nestled along the serene coastline, this project aimed to create a harmonious blend of contemporary design and natural elements. The client's vision was a tranquil yet luxurious space that embodied their love for ocean views and minimalist aesthetics. Drawing inspiration from the surrounding seascape, we incorporated neutral tones, organic textures, and expansive glass elements to maximize natural light and frame the stunning vistas. The result is a sophisticated sanctuary that balances elegance with a warm, inviting ambiance.",
  },
  {
    id: 2,
    title: "Modern Minimalist Villa",
    image: "/assets/po1.jpg",
    description:
      "Nestled along the serene coastline, this project aimed to create a harmonious blend of contemporary design and natural elements. The client's vision was a tranquil yet luxurious space that embodied their love for ocean views and minimalist aesthetics. Drawing inspiration from the surrounding seascape, we incorporated neutral tones, organic textures, and expansive glass elements to maximize natural light and frame the stunning vistas. The result is a sophisticated sanctuary that balances elegance with a warm, inviting ambiance.",
  },
  {
    id: 3,
    title: "Modern Minimalist Villa",
    image: "/assets/po3.jpg",
    description:
      "Nestled along the serene coastline, this project aimed to create a harmonious blend of contemporary design and natural elements. The client's vision was a tranquil yet luxurious space that embodied their love for ocean views and minimalist aesthetics. Drawing inspiration from the surrounding seascape, we incorporated neutral tones, organic textures, and expansive glass elements to maximize natural light and frame the stunning vistas. The result is a sophisticated sanctuary that balances elegance with a warm, inviting ambiance.",
  },
];

export default function CompletedProjects() {
  return (
    <section className="py-12 px-6 lg:px-20 container">
      <div className="text-center md:text-start mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Completed Project
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl ">
          Each project tells a story of collaboration, creativity, and
          precision. Here’s a glimpse into how we’ve transformed spaces into
          stunning sanctuaries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <button className="mt-4 w-full bg-[#8B6F4E] text-white py-2 px-4 rounded-lg hover:bg-[#6D5138] transition duration-300">
                Book For Consultation
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
