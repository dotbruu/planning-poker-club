import { IUser } from "@/interfaces/models/user.struct";

export const UserCard = ({ user }: { user: IUser | null }) => {
  if (!user) {
    return <div></div>;
  }

  return (
    <div className="w-auto flex items-center gap-4 md:fixed md:left-8 md:bottom-8 left-auto bottom-auto">
      <div
        className="w-14 h-14 justify-center flex
  items-center bg-primary-light rounded-full text-2xl aspect-square"
      >
        {user.avatar}
      </div>
      <span className="font-bold text-white flex-wrap max-w-[150px] break-words whitespace-normal">
        {user.name}
      </span>
    </div>
  );
};
