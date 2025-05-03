export default function FeatureCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <div className="text-amber-700 mb-3">{icon}</div>
      <h3 className="text-lg font-medium text-center">{title}</h3>
    </div>
  )
}
