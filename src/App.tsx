import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load components for better performance
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-500"></div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">申し訳ありません</h2>
      <p className="text-gray-600 mb-4">ページの読み込み中にエラーが発生しました。</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors"
      >
        再試行 / Retry
      </button>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="App">
          <Header />
          <Hero />

          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <Footer />
          </Suspense>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
