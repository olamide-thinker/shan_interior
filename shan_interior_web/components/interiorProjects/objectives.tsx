import Image from "next/image";

interface ProfileProps {
  name: string;
  role: string;
  imageUrl: string;
  about: string;
}

interface ObjectivesProps {
  missionTitle: string;
  missionContent: string[];
  profile?: ProfileProps; // Now optional
}

export default function Objectives({ missionTitle, missionContent, profile }: ObjectivesProps) {
  return (
    <div className="w-full mb-10">
      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row justify-between">
        <h1 className="text-[2.8rem] font-bold">{missionTitle}</h1>

        <div className="flex flex-col lg:w-1/2 w-full space-y-6">
          <div className="mt-4 space-y-4 max-w-prose leading-relaxed">
            {missionContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Profile Card (Only Render If Profile Exists) */}
          {profile && (
            <div className="flex w-full flex-col justify-center max-w-[520px]">
              <div className="relative flex w-full flex-col">
                <div className="text-card-foreground mb-5 flex items-center py-6">
                  {/* Profile Image and Details */}
                  <div className="flex items-center space-x-4">
                    <span className="relative flex h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        className="aspect-square h-full w-full object-cover"
                        src={profile.imageUrl}
                        alt={profile.name}
                        width={68}
                        height={68}
                      />
                    </span>
                    <div>
                      <p className="text-xl font-extrabold text-zinc-950 dark:text-white md:text-3xl">
                        {profile.name}
                      </p>
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-2 md:text-base">
                        {profile.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Personal Vision / About */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {profile.about}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
