import LegalPage from './LegalPage'

const sections = [
  {
    title: '1. Subscription cancellation',
    body: 'You may cancel your Vouch Pro or Elite subscription at any time from Settings → Your Plan → Cancel Subscription.\n\nWhen you cancel:\n• Your subscription remains active until the end of your current billing period\n• You will not be charged again after cancellation\n• You retain access to all Pro/Elite features until the billing period ends\n• After the period ends, your account automatically reverts to the Free plan\n• Your journeys, history, badges, and streak data are preserved\n\nWe do not offer prorated refunds for unused days within a billing period.',
  },
  {
    title: '2. Journey Pass — non-refundable',
    body: 'Journey Pass purchases (₦800 one-time) are non-refundable once purchased. The pass activates immediately and is tied to a specific journey for its full duration.',
  },
  {
    title: '3. Refund eligibility',
    body: 'We offer refunds in the following circumstances only:\n• You were charged twice for the same subscription period (billing error)\n• You were charged after cancelling your subscription (system error)\n• Your account was not activated due to a payment processing error\n\nTo request a refund, email vouchapp0@gmail.com within 7 days of the charge with your account email and transaction reference.\n\nWe do not offer refunds for:\n• Change of mind after subscribing\n• Unused days within a billing period\n• Accounts suspended for Terms of Service violations\n• Journey Pass purchases',
  },
  {
    title: '4. How to cancel',
    body: 'In-app: Settings → Your Plan → Cancel Subscription\n\nIf you are unable to cancel through the app, email vouchapp0@gmail.com with the subject line "Cancel Subscription" and your account email. We will process your cancellation within 24 hours.',
  },
  {
    title: '5. Account deletion',
    body: 'Deleting your account (Settings → Delete Account) automatically cancels any active subscription. No further charges will be made. Account deletion is permanent and cannot be undone.',
  },
  {
    title: '6. Contact',
    body: 'For billing or cancellation queries:\nEmail: vouchapp0@gmail.com\nResponse time: within 24 hours on business days',
  },
]

export default function CancellationWeb() {
  return (
    <LegalPage
      title="Cancellation Policy"
      updated="April 2025"
      intro="Our cancellation and refund policy for subscriptions and one-time purchases."
      sections={sections}
    />
  )
}
