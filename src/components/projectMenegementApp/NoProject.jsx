import ProductMenegementButton from './ProductMenegementButton';
import img from '../../assets/no-projects.png';

export default function NoProject({ onSelectAddProject }) {
  return (
    <div className="w-2/3 flex flex-col items-center mt-24">
      <img src={img} alt="no product selected" className="w-16 h-16" />
      <h2 className="text-xl font-bold text-stone-800">No Project Selected</h2>
      <p className="text-stone-600 m-4">
        select project or started with a new one
      </p>
      <ProductMenegementButton onClick={onSelectAddProject}>
        Create New Product
      </ProductMenegementButton>
    </div>
  );
}
