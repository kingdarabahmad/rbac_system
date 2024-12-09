import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useStore } from '@/store/useStore'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/useAuthStore'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { toast } from 'sonner'
gsap.registerPlugin(ScrollTrigger);

//creating form schema
const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),

})
const LoginPage = () => {
    const { users, setCurrentUser } = useStore()
    const { login } = useAuthStore()
    const navigate = useNavigate()

    //define the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    //define the submit
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);

        const user = users.find((u) => u.email == values.email)
        console.log(user);

        if (user) {
            setCurrentUser(user);
            const success = login(values.email, values.password);
            if (success) {
                toast.success('Login successful');
                navigate('/dashboard');

            }
            else {
                toast.error('Invalid credentials');
            }
        }
        else {
            toast.error('User not found');
        }
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".animate-login",
                start: "top center",
            },
        });
        tl.from(".animate-login", {
            y: 100,
            opacity: 0,
            duration: 1,
        });

        gsap.from(".animate-rabac-logo", {
            y: 50,
            opacity: 0,
            duration: 3,
        });
    });

    return (
        <div className="animate-login min-h-screen flex flex-col  gap-24 items-center justify-center">
            {/* <div className='flex items-center gap-2 animate-rabac-logo'>
                <h1 className="text-4xl tracking-wider italic font-bold">RBAC</h1>
                <img className="h-10 w-10 rounded-full mix-blend-hard-light rotate-90" src="https://thumbs.dreamstime.com/b/rocket-logo-icon-design-template-340699309.jpg" alt="" />
            </div> */}
            <Card className="w-[400px] border-none">
                <CardHeader className='text-center space-y-1'>
                    <img className='w-25 h-20 object-contain' src="https://cdn.dribbble.com/users/129972/screenshots/3964116/75_smile.gif" alt="login-logo" />
                    <CardTitle className='text-xl font-bold'>Admin Login</CardTitle>
                    <CardDescription className='text-sm'>
                        Please login with your admin credentials
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="password" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full rounded-2xl py-2 bg-[#0285da]">
                                Login
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginPage