"use client";

import Image from "next/image";
import Calendar from "./components/Calendar";
import { ModeToggle } from "./components/WhiteDarkMode";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="w-full border-b border-gray-200 bg-blue-100/100 shadow-sm lg:h-auto fixed">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={340}
            height={50}
            className="object-contain"
            priority
          />
          <ModeToggle/>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-2 pt-32">
        <div className="max-w-4xl mx-auto bg-blue-100/100  rounded-lg shadow-md p-6 border border-gray-100 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Aktuelles
          </h2>
          <p className="text-gray-600 text-lg">
            Hallo! <br />
            Wir haben im Laufe des letzten Jahres diese Website entworfen.{" "}
            <br />
            Die aktuelle Version ist zwar vorläufig, aber funktionsfähig. <br />
            Und wie geht das jetzt? <br />
            1. E-Mail-Adresse angeben, unter der Sie erreichbar sind <br />
            2. Veranstaltungstitel angeben <br />
            3. Zeitraum der Veranstaltung angeben <br />
            4. Genauere Details angeben: <br />
            - Vortrag/Konzert/Sonstiges? - Mikrofone? <br />
            - Beamer? <br />
            - Generalprobe? <br />
            (Bei Konzerten bitte <b>unbedingt</b> angeben!) <br />
            - Sonstiges? <br />
            <b>
              {" "}
              Bitte denken Sie daran die Veranstaltungen mindestens eine Woche
              vor Tag der Veranstaltung bei uns anzumelden!{" "}
            </b>{" "}
            <br />
            Warum jetzt diese Website? <br />
            In Zukunft soll diese Website als automatisiertes
            Aula-Buchungs-Portal agieren. Somit wird die Planung der
            Veranstaltung in allen technischen und nicht-technischen Aspekten
            übersichtlicher und einfacher.
          </p>
        </div>
        <Calendar />
      </main>
    </div>
  );
}
