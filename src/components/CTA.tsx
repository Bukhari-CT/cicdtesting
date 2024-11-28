export const CTA = () => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Ready to Modernize Your Development Pipeline?
          <span className="block text-xl font-normal mt-4 opacity-90">
            Get started with CI/CD implementation today
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-8 py-3 bg-transparent text-white rounded-lg font-medium border-2 border-white hover:bg-white/10 transition-colors duration-200"
          >
            Schedule Demo
          </a>
        </div>
      </div>
    </div>
  )
}
