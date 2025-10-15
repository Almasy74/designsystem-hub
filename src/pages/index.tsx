import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Skatteetatens designsystem"
      description="Finn alt om komponenter, mønstre, stil og utvikling i Skatteetatens designsystem.">
      <main className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Skatteetatens designsystem</h1>
        <p className="text-lg text-gray-600 mb-10">
          Ett sted for alt du trenger – komponenter, mønstre, stil og tekniske retningslinjer.
        </p>
        <div className="mb-12">
          <input
            type="search"
            placeholder="🔍 Søk i designsystemet..."
            className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <Link
            to="https://storybook.skatteetaten.no"
            className="block p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">🧩 Komponenter</h2>
            <p className="text-gray-600 text-sm">
              Utforsk komponenter og deres bruk i Storybook.
            </p>
          </Link>
          <Link
            to="/docs/monster/header-topbanner"
            className="block p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">🎨 Stil og tone</h2>
            <p className="text-gray-600 text-sm">
              Les om mønstre, god praksis og visuell stil.
            </p>
          </Link>
          <Link
            to="https://github.com/skatteetaten/designsystem"
            className="block p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">💻 Utviklerressurser</h2>
            <p className="text-gray-600 text-sm">
              Kildekode, tekniske krav og retningslinjer.
            </p>
          </Link>
          <Link
            to="/docs/teknisk/browserstotte"
            className="block p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">♿ Tilgjengelighet</h2>
            <p className="text-gray-600 text-sm">
              Lær hvordan vi sikrer universell utforming i Skatteetatens løsninger.
            </p>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
