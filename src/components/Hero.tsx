export const Hero = () => {
  return (
    <div className="relative">
      <img 
        src="/4589980.jpg" 
        alt="CI/CD Pipeline" 
        className="absolute inset-0 w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 h-[500px]" />
      <div className="relative pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Understanding CI/CD Pipeline
              <span className="block text-2xl font-normal mt-4 opacity-90">
                Your Guide to Modern Software Development
              </span>
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-12">
              Learn how Continuous Integration and Continuous Deployment streamlines 
              your development process and ensures reliable software delivery.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#benefits"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Learn More
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
