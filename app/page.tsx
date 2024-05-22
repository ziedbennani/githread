// localhost:3000

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAuthSession } from "@/lib/auth";
import { stringify } from "querystring";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <div className="">
      <p>{JSON.stringify(session, null, 2)}</p>

      <Button>Click</Button>
      <Input />
    </div>
  );
}
