'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSupabase } from "@/hooks/use-supabse";
import { useAuthStore } from "@/stores/use-auth-store";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type SignInFormField = {
    email: string;
    password: string;
}

const requiredRules = {
    required: true,
};
export const SignIn = () => {
    const supabase = useSupabase();
    const router = useRouter();
    const signIn = useAuthStore(state => state.signIn);
    const { register, handleSubmit, formState } = useForm<SignInFormField>({ mode: 'all' });
    const { errors, isValid } = formState;


    const login = async ({ email, password }: SignInFormField) => await supabase.auth.signInWithPassword({
        email,
        password,
    });
    const { mutate, isPending } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            signIn(data.data.user);
            router.push('/');
        }
    })





    const onSigninSubmit = (data: SignInFormField) => {
        mutate(data);
    };

    return (
        <form className="flex flex-col gap-8 min-w-96" method="post" onSubmit={handleSubmit(onSigninSubmit)}>

            <div className="flex gap-2 flex-col">
                <label
                    htmlFor="email"
                    className="font-bold">Email</label>
                <Input id="email" placeholder="entered email" {...register('email', requiredRules)}></Input>
            </div>
            <div className="flex gap-2 flex-col">
                <label htmlFor="password"
                    className="font-bold">Password</label>
                <Input type="password" id="password" placeholder="entered password" {...register('password', requiredRules)}></Input>
                {errors?.password ? <p>{formState.errors?.password?.message}</p> : null}
            </div>
            <Button type="submit" disabled={!isValid || isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign up</Button>
        </form>

    );
};