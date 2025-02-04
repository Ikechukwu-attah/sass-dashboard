"use client";
import { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button - Fixed Position */}
      <button
        className="lg:hidden fixed top-2 left-4 bg-gray-900 text-white p-2 rounded-full z-50 shadow-md"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <FiMenu className="text-xl" />
      </button>

      {/* Sidebar */}
      <aside
        className={`sidebar h-screen p-4 fixed top-0 left-0 z-40 transition-transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:w-60 ${
          collapsed ? "lg:w-16" : "lg:w-60"
        } border-r border-gray-300 dark:border-gray-700`}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex mb-4 items-center"
        >
          <FiMenu className="text-xl" />
        </button>
        <nav className="flex flex-col space-y-4 mt-6">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <FiHome />
            {!collapsed && <span>Dashboard</span>}
          </Link>
          <Link
            href="/users"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <FiUsers />
            {!collapsed && <span>Users</span>}
          </Link>
          <Link
            href="/analytics"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <FiBarChart2 />
            {!collapsed && <span>Analytics</span>}
          </Link>
          <Link
            href="/settings"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <FiSettings />
            {!collapsed && <span>Settings</span>}
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
