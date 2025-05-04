
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const SignUp = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/" className="flex justify-center items-center gap-2">
            <div className="rounded-full bg-wellness-primary p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="M8 11h8" />
                <path d="M12 15V7" />
              </svg>
            </div>
            <span className="text-xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-wellness-primary to-wellness-secondary">LifeSync</span>
          </Link>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight">
            Create your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">
                  Full name
                </Label>
                <div className="mt-2">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">
                  Email address
                </Label>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">
                  Password
                </Label>
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link to="/terms" className="text-wellness-primary hover:text-wellness-primary/90 font-semibold">
                    terms of service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-wellness-primary hover:text-wellness-primary/90 font-semibold">
                    privacy policy
                  </Link>
                </Label>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-wellness-primary hover:bg-wellness-primary/90"
                >
                  Sign up
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" type="button" className="flex w-full items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                    <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                  </svg>
                  Google
                </Button>
                
                <Button variant="outline" type="button" className="flex w-full items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12s5.374 12 12 12 12-5.373 12-12-5.374-12-12-12zm6.132 18.018c-.233.042-.486.047-.71-.099-3.353-2.258-6.8-1.585-10.007-1.536-.202 0-.359-.187-.357-.389.002-.202.189-.365.391-.363 3.04-.044 6.749-.756 10.408 1.666.179.121.214.366.094.541-.089.131-.239.192-.388.18.025 0 .038 0 .091 0-.05 0-.075 0-.117 0-.093 0-.277 0-.405 0zm.57-1.483c-.281.05-.535-.071-.664-.29-1.333-2.066-4.329-2.496-7.062-1.885-.199.044-.398-.08-.441-.28-.043-.2.08-.398.28-.442 3.1-.67 6.356-.236 7.925 2.09.129.199.112.467-.087.596-.149.096-.157.127-.275.145.111-.02.143-.027.324-.065-.181.039-.174.038-.211.045-.005.001-.01.002-.015.003-.049.01-.101.021-.177.038-.013.003-.027.006-.04.008-.055.012-.11.023-.163.035-.063.014-.127.027-.203.044-.035.008-.071.015-.099.023zm.151-1.515c-.317.057-.616.037-.875-.098-2.274-1.365-6.349-1.65-8.904-.898-.281.082-.575-.079-.658-.36-.082-.282.079-.575.36-.658 2.899-.844 7.396-.508 10.016 1.057.25.15.336.473.186.724-.136.226-.38.326-.618.211-.016-.003-.027-.006-.036-.008.053.012.236.045.304.059-.052-.01-.051-.01-.072-.014-.083-.016-.099-.019-.125-.025-.069-.013-.133-.027-.204-.04-.117-.024-.185-.037-.305-.063.145.031.16.034.394.081-.209-.044-.296-.063-.463-.098z" />
                  </svg>
                  Spotify
                </Button>
              </div>
              <div className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-wellness-primary hover:text-wellness-primary/90">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
