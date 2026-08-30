import type React from "react";
import { useDocumentMeta } from "../../../../_components/useDocumentMeta";
import { getRouteMeta } from "../../../../_data/routeMeta";

const LAST_UPDATED = "August 23, 2026";

const Component: React.FC = () => {
  useDocumentMeta({
    ...getRouteMeta("/works/deskstick/privacy/"),
  });

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto px-4 py-8 space-y-6">
      <header className="space-y-2 max-w-prose">
        <p className="text-sm text-gray-500">
          <a
            href="/works/deskstick/en/"
            className="text-krg-link-orange hover:underline"
          >
            ← Back to DeskStick
          </a>
        </p>
        <h1 className="text-3xl sm:text-4xl font-light">
          DeskStick — Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
      </header>

      <article className="max-w-prose space-y-6 leading-relaxed">
        <section className="space-y-2">
          <p>
            This Privacy Policy explains how <strong>DeskStick</strong> (the
            “app”), a sticky notes application for Mac, iPhone, iPad, and Apple
            Vision Pro developed by Karaage (Yuki NOAKI), handles information
            when you use the app. The app is distributed for free on the App
            Store and through Homebrew — see the{" "}
            <a
              href="https://krgpi.github.io/works/deskstick/"
              className="text-krg-link-orange hover:underline"
            >
              DeskStick page
            </a>{" "}
            for details.
          </p>
          <p>
            <strong>Summary:</strong> DeskStick does not collect, transmit, or
            sell any personal data to the developer or to third parties. Your
            notes stay on your device and (optionally) inside your own iCloud
            account.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">1. Information the app handles</h2>
          <p>
            DeskStick stores the content you type into sticky notes — including
            text, note color, position, and pinned state — on your device. The
            developer does not receive a copy of this content.
          </p>
          <p>
            The app does not ask for your name, email address, location,
            contacts, photos, microphone, or camera. It does not contain any
            advertising or analytics SDKs, and it does not track your usage.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">2. iCloud sync</h2>
          <p>
            If you are signed in to iCloud on your device and have iCloud Drive
            enabled, DeskStick uses Apple’s CloudKit framework to sync your
            sticky notes between devices that are signed in to the same Apple
            ID. Your notes are stored in your private iCloud database and are
            handled by Apple under{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-krg-link-orange hover:underline"
            >
              Apple’s Privacy Policy
            </a>
            .
          </p>
          <p>
            The developer cannot read, view, or recover the contents of notes
            stored in your iCloud account. If you do not want to use iCloud
            sync, you can sign out of iCloud or disable iCloud Drive for the app
            from <strong>System Settings → [your name] → iCloud</strong> on
            macOS, or <strong>Settings → [your name] → iCloud</strong> on iOS,
            iPadOS, and visionOS.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">3. Updates</h2>
          <p>
            DeskStick does not check for updates on its own, and it does not
            contact the developer’s servers for any purpose. Earlier versions
            bundled the Sparkle update framework and requested an update feed
            from <code>krgpi.github.io</code>; current versions no longer do
            this.
          </p>
          <p>
            Updates are delivered by whichever channel you installed the app
            from — the App Store, or Homebrew via{" "}
            <code>brew upgrade --cask deskstick</code>. Those channels are
            operated by Apple and by the Homebrew project respectively, and
            their own privacy policies apply to them.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">
            4. Crash reports and diagnostics
          </h2>
          <p>
            DeskStick does not include any third-party crash-reporting or
            telemetry SDK. If you choose to share diagnostics with Apple from
            your device’s{" "}
            <strong>
              Privacy &amp; Security → Analytics &amp; Improvements
            </strong>{" "}
            settings, Apple may share anonymized crash logs with the developer
            through App Store Connect or similar channels. Sharing is opt-in and
            controlled by you.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">5. Children’s privacy</h2>
          <p>
            DeskStick is a general-purpose productivity app and is not directed
            at children under 13. It does not knowingly collect any personal
            information from children.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">6. Your choices</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              You can delete individual notes or all notes from the app at any
              time. Deletions sync via iCloud to your other devices.
            </li>
            <li>
              You can stop using iCloud sync by signing out of iCloud or
              disabling iCloud Drive for the app.
            </li>
            <li>
              On a Mac you can uninstall DeskStick by dragging{" "}
              <code>DeskStick.app</code> from <code>/Applications</code> to the
              Trash, or — if you installed it with Homebrew — by running{" "}
              <code>brew uninstall --cask deskstick</code>. On iPhone, iPad, and
              Apple Vision Pro, delete the app from the Home Screen as you would
              any other app.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">7. Changes to this policy</h2>
          <p>
            This policy may be updated as the app evolves. The “Last updated”
            date at the top of this page reflects the most recent revision.
            Material changes will also be noted on the{" "}
            <a
              href="/works/deskstick/en/"
              className="text-krg-link-orange hover:underline"
            >
              DeskStick page
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">8. About this website</h2>
          <p>
            This page is part of the developer’s portfolio site (
            <code>krgpi.github.io</code>), which is separate from the DeskStick
            app itself. For details on how the website handles visitor data —
            including aggregate analytics — please see the{" "}
            <a
              href="/privacy/"
              className="text-krg-link-orange hover:underline"
            >
              site privacy policy
            </a>
            . The app on your device is not affected by website analytics.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">9. Contact</h2>
          <p>
            Questions or requests about this policy can be sent to{" "}
            <a
              href="mailto:krgpi@icloud.com"
              className="text-krg-link-orange hover:underline"
            >
              krgpi@icloud.com
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
