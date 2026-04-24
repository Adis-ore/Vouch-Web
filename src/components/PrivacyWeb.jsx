import LegalPage from './LegalPage'

const sections = [
  {
    title: '1. Who We Are',
    body: 'Vouch ("we", "our", "us") is an accountability app built and operated in Nigeria. We help people stay consistent on goals by pairing them with accountability partners. By using Vouch, you agree to this Privacy Policy.',
  },
  {
    title: '2. What We Collect',
    body: 'Account data: name, email, phone number, profile photo.\nUsage data: journeys joined, check-ins submitted, streaks, milestone progress.\nCheck-in content: text, photos, or voice notes you upload as proof.\nDevice data: device type, OS version, push notification token.\nPayment data: we do not store card details — payments are handled by Paystack.',
  },
  {
    title: '3. Why We Collect It',
    body: 'To create and manage your account.\nTo match you with accountability partners.\nTo send streak reminders, milestone alerts, and partner notifications.\nTo enforce community guidelines and resolve disputes.\nTo improve the product through usage analytics.',
  },
  {
    title: '4. What Others Can See',
    body: 'Your name and profile photo are visible to your journey partners.\nYour check-ins (text, photos, voice notes) are visible to partners in the same journey.\nYour streak count and milestone progress are visible within shared journeys.\nYour email and phone number are never visible to other users.',
  },
  {
    title: '5. Data Sharing',
    body: 'We do not sell your personal data.\nWe share data only with:\n— Supabase (database and authentication infrastructure)\n— Paystack (payment processing)\n— Expo / Firebase (push notifications)\nAll third-party providers are contractually bound to protect your data.',
  },
  {
    title: '6. Data Retention',
    body: 'We retain your data for as long as your account is active.\nIf you delete your account, your personal data is permanently removed within 30 days.\nCheck-in content shared in group journeys may remain visible to other participants until their own data is deleted.',
  },
  {
    title: '7. Your Rights',
    body: 'You have the right to:\n— Access the personal data we hold about you\n— Request correction of inaccurate data\n— Request deletion of your account and associated data\n— Object to processing of your data\nTo exercise any of these rights, email support@vouch.app.',
  },
  {
    title: '8. Security',
    body: 'We use industry-standard security measures including encrypted connections (HTTPS/TLS), secure authentication via Supabase, and access controls limiting who on our team can access user data. No system is 100% secure — if you suspect unauthorized access to your account, contact us immediately.',
  },
  {
    title: '9. Cookies and Analytics',
    body: 'Our website uses minimal analytics to understand page traffic (e.g., which features pages are visited most). We do not use advertising cookies or cross-site tracking. The mobile app does not use cookies.',
  },
  {
    title: '10. Children',
    body: 'Vouch is not intended for users under the age of 13. We do not knowingly collect data from children. If you believe a child has created an account, please contact us and we will remove it.',
  },
  {
    title: '11. Changes to This Policy',
    body: 'We may update this policy from time to time. We will notify users of material changes via in-app notification or email. Continued use of Vouch after changes means you accept the updated policy.',
  },
  {
    title: '12. Contact',
    body: 'Questions about your data? Email support@vouch.app. We aim to respond within 3 business days.',
  },
]

export default function PrivacyWeb() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="April 2025"
      intro="We built Vouch to help people show up for each other. That means trust — including how we handle your data. Here's exactly what we collect, why, and how we protect it."
      sections={sections}
    />
  )
}
