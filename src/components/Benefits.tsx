const benefits = [
  {
    title: 'Continuous Integration',
    description: 'Automatically merge code changes from multiple developers, ensuring code quality and preventing integration issues.',
    icon: '🔄'
  },
  {
    title: 'Automated Testing',
    description: 'Run comprehensive tests automatically on every code change, catching bugs early in the development cycle.',
    icon: '🧪'
  },
  {
    title: 'Continuous Deployment',
    description: 'Deploy your applications automatically to production with confidence and reliability.',
    icon: '🚀'
  },
  {
    title: 'Infrastructure as Code',
    description: 'Manage and provision infrastructure through code, ensuring consistency across environments.',
    icon: '⚙️'
  },
  {
    title: 'Monitoring & Logging',
    description: 'Track application performance and gather insights with automated monitoring and logging.',
    icon: '📊'
  },
  {
    title: 'Security Scanning',
    description: 'Automatically scan for vulnerabilities and ensure your application meets security standards.',
    icon: '🔒'
  }
]

export const Benefits = () => {
  return (
    <div id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Components of CI/CD Pipeline
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the essential elements that make up a modern CI/CD pipeline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{benefit.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
