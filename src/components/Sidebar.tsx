"use client";

type SidebarProps = {
  category: string;
  setCategory: (cat: string) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
};

export default function Sidebar({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
}: SidebarProps) {
  const categories = ["All", "Electronics", "Clothing", "Home"];

  return (
    <aside className="w-full md:w-75 flex flex-col gap-4 min-h-150 ml-2 mt-2">
      {/* Box 1 */}
      <div className="bg-blue-700 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>

        <h3 className="font-semibold mb-2">Category</h3>
        <div className="space-y-4 mb-6">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={category === cat}
                onChange={() => setCategory(cat)}
                className="blue"
              />
              {cat}
            </label>
          ))}
        </div>

        <h3 className="font-semibold mb-2 mt-8">Price</h3>
        <input
          type="range"
          min={0}
          max={1000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>0</span>
          <span>1000</span>
        </div>
      </div>

      {/* Box 2 */}
      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-4">Category</h2>
        <div className="space-y-4 mb-6">
          {categories.map((cat) => (
            <label
              key={`b2-${cat}`}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category2"
                checked={category === cat}
                onChange={() => setCategory(cat)}
                className="accent-blue-600"
              />
              {cat}
            </label>
          ))}
        </div>

        <h3 className="font-semibold mb-2 mt-8">Price</h3>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full border rounded-md px-3 py-2"
        />
      </div>
    </aside>
  );
}
