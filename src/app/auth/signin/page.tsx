
import { SignIn } from "./_components/singin";





export default function Page() {

    return (
        <div className="m-12 flex flex-col justify-center items-center h-96">
            <div className="flex py-12">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Sign in
                </h1>
            </div>
            <SignIn />
        </div>
    );
}




