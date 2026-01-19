function TeamCard({ member }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-sm leading-relaxed">{member.bio || 'Leading with dedication and expertise.'}</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
        <p className="text-gray-500 text-sm">{member.title}</p>
      </div>
    </div>
  )
}

export default TeamCard