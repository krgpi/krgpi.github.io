import type React from "react";
import { useDocumentMeta } from "../../../../_components/useDocumentMeta";

const LAST_UPDATED = "April 27, 2026";

const Component: React.FC = () => {
  useDocumentMeta({
    title: "Privacy Policy — DeskStick | Karaage's Library",
    description:
      "Privacy Policy for DeskStick, an iCloud-synced sticky notes app for macOS. Learn how the app handles your notes, iCloud sync, automatic updates, and contact information.",
    canonical: "https://krgpi.github.io/works/deskstick/privacy",
    ogImage: "https://krgpi.github.io/stickies-on-the-desktop.png",
    favicon: "/deskstick-icon-mac.png",
  });

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto px-4 py-8 space-y-6">
      <header className="space-y-2 max-w-prose">
        <p className="text-sm text-gray-500">
          <a
            href="/works/deskstick/en"
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
            This Privacy Policy explains how <strong>DeskStick</strong>{" "}
            (the “app”), a macOS sticky notes application developed by Karaage
            (Yuki NOAKI), handles information when you use the app. The app is
            distributed for free from{" "}
            <a
              href="https://krgpi.github.io/works/deskstick"
              className="text-krg-link-orange hover:underline"
            >
              krgpi.github.io
            </a>
            .
          </p>
          <p>
            <strong>Summary:</strong> DeskStick does not collect, transmit,
            or sell any personal data to the developer or to third parties. Your
            notes stay on your Mac and (optionally) inside your own iCloud
            account.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">1. Information the app handles</h2>
          <p>
            DeskStick stores the content you type into sticky notes —
            including text, note color, position, and pinned state — on your
            Mac. The developer does not receive a copy of this content.
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
            If you are signed in to iCloud on your Mac and have iCloud Drive
            enabled, DeskStick uses Apple’s CloudKit framework to sync
            your sticky notes between Macs that are signed in to the same Apple
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
            sync, you can sign out of iCloud or disable iCloud Drive for the
            app from <strong>System Settings → [your name] → iCloud</strong>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">3. Automatic updates (Sparkle)</h2>
          <p>
            DeskStick uses the open-source{" "}
            <a
              href="https://sparkle-project.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-krg-link-orange hover:underline"
            >
              Sparkle
            </a>{" "}
            framework to check for new versions of the app. When checking for
            updates, the app makes HTTPS requests to{" "}
            <code>krgpi.github.io</code> (hosted on GitHub Pages). These
            requests may include standard information that any web request
            includes, such as your IP address and a user-agent string. This is
            handled by GitHub under{" "}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-krg-link-orange hover:underline"
            >
              GitHub’s privacy statement
            </a>
            . The developer does not run server-side logging or analytics on
            top of these requests.
          </p>
          <p>
            You can disable automatic update checks at any time from the app’s
            preferences.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">4. Crash reports and diagnostics</h2>
          <p>
            DeskStick does not include any third-party crash-reporting or
            telemetry SDK. If you choose to share diagnostics with Apple from
            macOS{" "}
            <strong>
              System Settings → Privacy &amp; Security → Analytics &amp;
              Improvements
            </strong>
            , Apple may share anonymized crash logs with the developer through
            App Store Connect or similar channels. Sharing is opt-in and
            controlled by you.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">5. Children’s privacy</h2>
          <p>
            DeskStick is a general-purpose productivity app and is not
            directed at children under 13. It does not knowingly collect any
            personal information from children.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">6. Your choices</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              You can delete individual notes or all notes from the app at any
              time. Deletions sync via iCloud to your other Macs.
            </li>
            <li>
              You can stop using iCloud sync by signing out of iCloud or
              disabling iCloud Drive for the app.
            </li>
            <li>
              You can uninstall DeskStick by dragging{" "}
              <code>DeskStick.app</code> from <code>/Applications</code>{" "}
              to the Trash.
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
              href="/works/deskstick/en"
              className="text-krg-link-orange hover:underline"
            >
              DeskStick page
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">8. Contact</h2>
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
