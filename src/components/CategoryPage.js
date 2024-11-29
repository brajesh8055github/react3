function CategoryPage({ category, image }) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-3xl font-bold">{category}</h1>
        <img 
          src={image} 
          alt={category} 
          className="mx-auto mt-4 max-w-full h-auto rounded-lg shadow-lg" 
        />
        <p className="mt-4 text-lg">Explore the best {category} products here!</p>
      </div>
    );
  }
  
  export default CategoryPage;
  
  
  