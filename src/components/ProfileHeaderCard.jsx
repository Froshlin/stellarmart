import { LogOut } from "lucide-react"
import { DEFAULT_PROFILE } from "../constants/profileData"

function ProfileHeaderCard() {
  const profile = DEFAULT_PROFILE

  return (
    <section className="w-full border-y border-[#44C5384D] bg-[#44C5381F] px-4 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3">
        <img
          src={profile.avatarUrl}
          alt={profile.fullName}
          className="h-30 w-30 rounded-full border-2 border-[#44C538] bg-[#4e9be6] object-cover"
        />
        <h1 className="text-4xl font-semibold text-[#112019]">{profile.fullName}</h1>
        <div className="flex items-center gap-3 text-2xl text-[#112019]">
          <span>{profile.phone}</span>
          <LogOut className="h-5 w-5" />
        </div>
        <div className="mt-2 inline-flex items-center gap-2 bg-[#d4dfd1] px-4 py-3 text-3xl text-[#112019]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#112019] text-sm text-white">
            P
          </span>
          <span>Points : {profile.points}</span>
        </div>
      </div>
    </section>
  )
}

export default ProfileHeaderCard

