import LegalPage from './LegalPage'

const sections = [
  {
    title: '1. Acceptance',
    body: 'By creating a Vouch account, you agree to these Terms of Service. If you do not agree, do not use the app. These terms apply to all users, including free and paid accounts.',
  },
  {
    title: '2. Eligibility',
    body: 'You must be at least 13 years old to use Vouch. By using the app, you confirm that the information you provide is accurate and that you have the legal capacity to enter into these terms.',
  },
  {
    title: '3. Your Account',
    body: 'You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activity that occurs under your account. Notify us immediately at support@vouch.app if you suspect unauthorized access.',
  },
  {
    title: '4. Acceptable Use',
    body: 'You agree not to:\n— Submit false, misleading, or fabricated check-ins\n— Harass, threaten, or abuse other users\n— Upload content that is illegal, obscene, or violates third-party rights\n— Attempt to circumvent any platform feature or access control\n— Use the app for any commercial purpose without written permission\nViolations may result in immediate account suspension.',
  },
  {
    title: '5. Check-ins and Content',
    body: 'You own the content you submit (text, photos, voice notes). By uploading content, you grant Vouch a non-exclusive, royalty-free license to store and display it to your journey partners. We do not use your check-in content for advertising or share it with third parties.',
  },
  {
    title: '6. Subscriptions',
    body: 'Vouch Pro is available as a monthly or annual subscription:\n— Monthly: ₦2,500/month\n— Annual: ₦20,000/year (save ~33%)\nSubscriptions auto-renew unless cancelled at least 24 hours before the renewal date. You can manage your subscription in your device\'s App Store or Google Play account settings.',
  },
  {
    title: '7. Journey Pass',
    body: 'A Journey Pass is a one-time payment that unlocks a single journey. Journey Passes are non-refundable once the journey has started. See our Cancellation Policy for full details.',
  },
  {
    title: '8. Cancellation and Refunds',
    body: 'You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period — you retain access until then. We do not offer pro-rata refunds for unused subscription time. See our Cancellation Policy for full details.',
  },
  {
    title: '9. Accountability and Disputes',
    body: 'Vouch provides tools for accountability but does not guarantee outcomes. If a partner disputes a check-in, our moderation team reviews and makes a final decision. Decisions are made in good faith but may not always align with your preference.',
  },
  {
    title: '10. Account Suspension',
    body: 'We may suspend or terminate accounts that violate these terms, submit fraudulent check-ins, or engage in abusive behavior. Severe violations result in permanent bans. We will notify you by email unless the violation makes notification inappropriate.',
  },
  {
    title: '11. Disclaimer of Warranties',
    body: 'Vouch is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the app will be available at all times, error-free, or that it will meet your specific goals. Use the app at your own risk.',
  },
  {
    title: '12. Limitation of Liability',
    body: 'To the maximum extent permitted by Nigerian law, Vouch is not liable for any indirect, incidental, or consequential damages arising from your use of the app. Our total liability to you shall not exceed the amount you paid us in the 3 months preceding the claim.',
  },
  {
    title: '13. Changes to Terms',
    body: 'We may update these terms from time to time. We will notify users of material changes via in-app notification or email at least 7 days before they take effect. Continued use after the effective date means you accept the new terms.',
  },
  {
    title: '14. Contact',
    body: 'Questions about these terms? Email support@vouch.app.',
  },
]

export default function TermsWeb() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="April 2025"
      intro="These terms govern your use of Vouch. Please read them carefully."
      sections={sections}
    />
  )
}
