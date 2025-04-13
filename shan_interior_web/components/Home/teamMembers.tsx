import Image from "next/image";
import imageOne from "../../assets/teams/Michael_Shanu_Founder.webp";

const teamMembers = [
  { name: "Michael Shanu", role: "Founder", imgSrc: imageOne },
];

const TeamGrid = () => {
  return (
    <section className=" py-12">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={member.imgSrc}
                alt={member.name}
                width={400}
                height={300}
                className="w-full h-72 object-cover object-top"
              />
              <div className="p-4 bg-black text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
