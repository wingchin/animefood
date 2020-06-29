export default function Card({ id, title, tags, show, grid }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img className="w-full" src={`/uploads/${id}.gif`} alt={title} />
      <div className="px-6 py-5">
        <h1 className={`${grid ? 'text-base' : 'text-5xl'} text-gray-800 font-bold mb-2`}>{title}</h1>
        <p className={`${grid ? 'text-sm' : 'text-base'} text-gray-700 font-light`}>{show}</p>
        { !grid && (
          <div className="pt-3">
            {tags.map((item, index) => <span className="inline-block bg-gray-200 rounded-full px-2 text-xs text-gray-600 mr-2" key={index}>#{item}</span>)}
          </div>
        )}
      </div>
    </div>
  )
}
