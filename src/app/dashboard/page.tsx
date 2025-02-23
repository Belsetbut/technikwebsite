"use client";

import Calendar from "../components/Calendar";
import { ModeToggle } from "../components/WhiteDarkMode";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <header className="w-full border-b border-gray-200 bg-blue-100 dark:bg-blue-900 opacity-95 shadow-sm lg:h-auto fixed z-10">
        <div className="container mx-auto px-4 py-2 sm:py-4 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={340}
            height={50}
            className="w-[200px] sm:w-[260px] md:w-[340px] h-auto object-contain"
            priority
          />
          <ModeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 pb-2 pt-32">
        <div className="max-w-4xl mx-auto bg-blue-100/100 dark:bg-blue-900/20 rounded-lg shadow-md p-6 border border-gray-100 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Welcome to Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Here you can manage all your events and bookings. Use the form below to add new events to the calendar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Calendar showEventForm={true} />
        </div>
      </main>
    </div>
  );
}