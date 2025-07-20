"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../utlis/supabase/client";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";

export default function UserNav() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth");
    router.refresh();
  };

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const getDisplayName = (email: string) => {
    return email.split("@")[0];
  };

  if (loading) {
    return (
      <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
          {getInitials(user.email || "")}
        </div>
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-medium">
                {getInitials(user.email || "")}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {getDisplayName(user.email || "")}
                </p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="py-1">
            <button
              onClick={() => {
                setShowDropdown(false);
                // Add profile functionality later
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Profile Settings
            </button>
            <button
              onClick={() => {
                setShowDropdown(false);
                handleLogout();
              }}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
