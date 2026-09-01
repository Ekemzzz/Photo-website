import CategoryCard from './CategoryCard'
import categories from '../data/categories'

/**
 * Categories section — renders a grid of CategoryCard components
 * from the shared categories data file.
 */
function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="categories__header">
        <h2 className="categories__title">Our Categories</h2>
        <p className="categories__subtitle">
          Explore our photography specialties
        </p>
      </div>
      <div className="categories__grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            image={category.image}
            title={category.title}
            description={category.description}
            href={category.href}
          />
        ))}
      </div>
    </section>
  )
}

export default Categories
