import LegalPage from './LegalPage'

const sections = [
  {
    title: '1. Cancelling Your Subscription',
    body: 'You can cancel your Vouch Pro subscription at any time through the App Store (iOS) or Google Play (Android) account settings. Cancellation takes effect at the end of your current billing period. You will retain access to Pro features until that date.\n\nWe do not offer pro-rata refunds for unused subscription time after the billing period has started.',
  },
  {
    title: '2. Journey Pass',
    body: 'Journey Passes are one-time payments that unlock a single journey. Journey Passes are non-refundable once the journey has started.\n\nIf a Journey Pass was purchased but the journey has not yet started, contact us within 48 hours of purchase at support@vouch.app for a review.',
  },
  {
    title: '3. Refund Eligibility',
    body: 'You may be eligible for a refund if:\n— You were charged twice for the same subscription period (billing error)\n— You were charged after cancelling your subscription\n— You did not receive access to a paid feature due to a platform bug\n\nRefund requests must be submitted within 14 days of the charge to support@vouch.app.',
  },
  {
    title: '4. How to Cancel',
    body: 'iOS: Open the App Store → Tap your profile → Subscriptions → Vouch → Cancel Subscription.\n\nAndroid: Open Google Play → Tap your profile → Payments & subscriptions → Subscriptions → Vouch → Cancel.\n\nEmailing us does not cancel your subscription — you must cancel through your app store.',
  },
  {
    title: '5. Deleting Your Account',
    body: 'You can delete your account from Settings → Account → Delete Account in the app. Deleting your account immediately cancels any active subscription and removes your data within 30 days.\n\nAccount deletion is permanent and cannot be undone.',
  },
  {
    title: '6. Questions',
    body: 'For refund requests or cancellation help, email support@vouch.app. We respond within 3 business days.',
  },
]

export default function CancellationWeb() {
  return (
    <LegalPage
      title="Cancellation Policy"
      updated="April 2025"
      intro={null}
      sections={sections}
    />
  )
}
