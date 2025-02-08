import { Button } from "@/components/ui/button";
import { KeyRound, Trash, User } from "lucide-react";
import Link from "next/link";

export default function Settings(){
    return(
        <main className="py-32 min-h-screen max-w-[300px] mx-auto">
            <div className="my-5 text-6xl font-bold text-center">Settings</div>
            <div className="p-5 flex flex-col items-center gap-y-5 border rounded-md">
                <Link href={"/dashboard/update-profile"}><Button variant={"outline"} className="text-primary-foreground"><User />Update Profile</Button></Link>
                <Link href={"/dashboard/update-profile"}><Button variant={"outline"} className="text-primary-foreground"><KeyRound />Update Password</Button></Link>
                <Link href={"/dashboard/update-profile"}><Button variant={"destructive"} className="text-primary-foreground"><Trash />Delete Account</Button></Link>
            </div>
        </main>
    );
}