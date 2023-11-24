"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withAuth(roles){
    return function(Component){
        return function ProtectedRoute({...props}){
            const router = useRouter();
            const token = localStorage.getItem('token');
            const role = localStorage.getItem('role');

            useEffect(() => {
                if (!token || !roles.includes(role)) {
                    router.replace('/login');
                }
            }, [token, role, router]);

            return token && roles.includes(role) ? <Component {...props} /> : null;
        }
    }
}
