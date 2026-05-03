import LegalPage from './LegalPage'

const sections = [
  { title: '1. Acceptance of terms', body: 'By creating a Vouch account, you agree to these Terms of Service. If you do not agree, do not use the app.' },
  { title: '2. Eligibility', body: 'You must be at least 13 years old to use Vouch. By creating an account, you confirm that you meet this age requirement. Users under 18 are responsible for ensuring they have parental awareness.' },
  { title: '3. Your account', body: 'You are responsible for keeping your login credentials secure and for all activity that occurs under your account. You may not create multiple accounts or share your account with others. Notify us immediately at vouchapp0@gmail.com if you suspect unauthorised access.' },
  { title: '4. Acceptable use', body: 'You agree not to: submit fake check-ins or misrepresent your progress; harass, threaten, or abuse other users; use Vouch for any illegal purpose; attempt to access other users\' private data; reverse engineer, copy, or resell any part of the platform; post content that is offensive, discriminatory, or harmful.' },
  { title: '5. Subscriptions', body: 'Vouch offers Pro (₦1,500/month or ₦12,000/year), Elite (₦3,000/month or ₦24,000/year), and Journey Pass (₦800 one-time). Subscriptions are billed in advance. By subscribing, you authorise Paystack to charge your payment method on a recurring basis until you cancel. All payments are processed securely by Paystack. Vouch does not store your card or bank account details.' },
  { title: '6. Cancellation and refunds', body: 'See our Cancellation Policy for full details on cancellations, refunds, and what happens when your subscription ends.' },
  { title: '7. Content you submit', body: 'You retain ownership of content you submit (check-in notes, photos, voice notes). By submitting content, you grant Vouch a limited licence to display that content to members of your journey group. You are responsible for ensuring your content does not violate any third-party rights or applicable laws.' },
  { title: '8. Suspension and termination', body: 'Vouch may suspend or permanently ban any account that repeatedly submits fake check-ins, harasses other users, violates these Terms, or engages in fraudulent activity. If your account is suspended for policy violations, subscription fees already paid are non-refundable.' },
  { title: '9. Reputation and scores', body: 'Reputation scores are calculated automatically based on your activity. We reserve the right to adjust or reset scores if we detect fraudulent check-ins or abuse of the verification system.' },
  { title: '10. Disclaimer', body: 'Vouch is provided "as is." We do not guarantee that the service will be uninterrupted or error-free. Accountability outcomes depend entirely on the effort and commitment of the users involved.' },
  { title: '11. Limitation of liability', body: 'To the maximum extent permitted by law, Vouch shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform, including loss of data, failed goals, or disputes between users.' },
  { title: '12. Governing law', body: 'These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved under Nigerian jurisdiction.' },
  { title: '13. Changes to terms', body: 'We may update these Terms from time to time. Continued use of Vouch after changes are posted constitutes acceptance. We will notify users of significant changes through the app.' },
  { title: '14. Contact', body: 'For questions about these Terms or general support:\nEmail: vouchapp0@gmail.com' },
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
