import type React from "react";
import { useDocumentMeta } from "../../../../_components/useDocumentMeta";

const LAST_UPDATED = "May 6, 2026";

const Component: React.FC = () => {
  useDocumentMeta({
    title: "Privacy Policy — Polarisetter | Karaage's Library",
    description:
      "Privacy Policy for Polarisetter, an iOS companion app showing true north and level for telescope setup. Learn how the app handles location data, sensors, and contact information.",
    canonical: "https://krgpi.github.io/works/polarisetter/privacy",
    ogImage: "https://krgpi.github.io/polarisetter-screenshot.png",
    favicon: "/polarisetter-icon-ios.png",
  });

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto px-4 py-8 space-y-6">
      <header className="space-y-2 max-w-prose">
        <p className="text-sm text-gray-500">
          <a
            href="/works/polarisetter/en"
            className="text-krg-link-orange hover:underline"
          >
            ← Back to Polarisetter
          </a>
        </p>
        <h1 className="text-3xl sm:text-4xl font-light">
          Polarisetter — Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
      </header>

      <article className="max-w-prose space-y-6 leading-relaxed">
        <section className="space-y-2">
          <p>
            This Privacy Policy explains how <strong>Polarisetter</strong>{" "}
            (the “app”), an iOS / iPadOS companion app for telescope setup
            developed by Karaage (Yuki NOAKI), handles information when you use
            the app. The app is distributed for free on the App Store.
          </p>
          <p>
            <strong>Summary:</strong> Polarisetter does not collect, transmit, or
            sell any personal data to the developer or to third parties. The
            app does not require an account, has no ads, no analytics SDKs, and
            does not perform any network communication.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">1. Information the app handles</h2>
          <p>
            Polarisetter reads two kinds of sensor data on your device while it is
            running:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Location (latitude and longitude)</strong> — used only
              on-device to compute magnetic declination so that the displayed
              compass bearing reflects true north rather than magnetic north.
            </li>
            <li>
              <strong>Motion / orientation sensors</strong> (gyroscope,
              magnetometer, accelerometer) — used only on-device to render the
              compass dial and the level indicator.
            </li>
          </ul>
          <p>
            None of this information is recorded, stored persistently, or
            transmitted off your device. The developer never receives any of it.
          </p>
          <p>
            The app does not ask for your name, email address, contacts,
            photos, microphone, or camera. It does not contain advertising or
            analytics SDKs, and it does not track your usage.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">2. Network communication</h2>
          <p>
            Polarisetter does not perform any network communication during normal
            use. It works fully offline.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">3. Crash reports and diagnostics</h2>
          <p>
            Polarisetter does not include any third-party crash-reporting or
            telemetry SDK. If you choose to share diagnostics with Apple from
            iOS{" "}
            <strong>
              Settings → Privacy &amp; Security → Analytics &amp; Improvements
            </strong>
            , Apple may share anonymized crash logs with the developer through
            App Store Connect. Sharing is opt-in and controlled by you.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">4. Children's privacy</h2>
          <p>
            Polarisetter is a general-purpose utility app and is not directed at
            children under 13. It does not knowingly collect any personal
            information from children.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">5. Your choices</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              You can revoke location access at any time from{" "}
              <strong>Settings → Privacy &amp; Security → Location Services</strong>
              . Without location, the app falls back to magnetic north only and
              still works for the level indicator.
            </li>
            <li>
              You can uninstall Polarisetter by long-pressing its icon on the
              Home Screen and selecting <strong>Remove App</strong>.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">6. Changes to this policy</h2>
          <p>
            This policy may be updated as the app evolves. The “Last updated”
            date at the top of this page reflects the most recent revision.
            Material changes will also be noted on the{" "}
            <a
              href="/works/polarisetter/en"
              className="text-krg-link-orange hover:underline"
            >
              Polarisetter page
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">7. About this website</h2>
          <p>
            This page is part of the developer’s portfolio site (
            <code>krgpi.github.io</code>), which is separate from the
            Polarisetter app itself. For details on how the website handles
            visitor data — including aggregate analytics — please see the{" "}
            <a
              href="/privacy"
              className="text-krg-link-orange hover:underline"
            >
              site privacy policy
            </a>
            . The app on your device is not affected by website analytics.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">8. Contact</h2>
          <p>
            Questions or requests about this policy can be sent to{" "}
            <a
              href="mailto:karaage01@outlook.jp"
              className="text-krg-link-orange hover:underline"
            >
              karaage01@outlook.jp
            </a>{" "}
            or via DM to{" "}
            <a
              href="https://twitter.com/krgpi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-krg-link-orange hover:underline"
            >
              @krgpi on X (Twitter)
            </a>
            .
          </p>
        </section>
      </article>
    </div>
  );
};

export default Component;
