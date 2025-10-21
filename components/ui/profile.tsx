import { User } from "lucide-react";
export default function Profile({ data }: { data: any }) {
  return (
    <div className="flex items-center gap-3">
      <User />
      <h1 className="text-xl font-medium">{data?.username}</h1>
    </div>
  );
}
