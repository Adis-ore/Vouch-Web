import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Download from './components/Download'
import Footer from './components/Footer'
import ResetPassword from './components/ResetPassword'
import PaymentComplete from './components/PaymentComplete'
import PrivacyWeb from './components/PrivacyWeb'
import TermsWeb from './components/TermsWeb'
import CancellationWeb from './components/CancellationWeb'

const path = window.location.pathname

export default function App() {
  if (path === '/payment-complete') return <PaymentComplete />
  if (path === '/reset-password') return <ResetPassword />
  if (path === '/privacy') return <PrivacyWeb />
  if (path === '/terms') return <TermsWeb />
  if (path === '/cancellation') return <CancellationWeb />

  // Also handle Supabase recovery redirect which lands on / with a hash
  const hash = new URLSearchParams(window.location.hash.substring(1))
  if (hash.get('type') === 'recovery') return <ResetPassword />

  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <Download />
      <Footer />
    </>
  )
}
