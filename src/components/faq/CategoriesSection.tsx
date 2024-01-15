import ChevronRight from '@/assets/icons/ChevronRight';
import CategoriesCard from './CategoriesCard';
import { Categories } from '@/types/faqs';
interface CategoriesSectionProps {
  response: Categories;
}
const CategoriesSection = async ({ response }: CategoriesSectionProps) => {
  const data = response?.data;
  const meta = response?.meta;
  return (
    <section className="w-full 2xl:px-48 py-12 ">
      <div className="grid md:grid-cols-2 gap-4  xl:grid-cols-3 place-items-center">
        {data?.slice(0, 6).map((item: any) => (
          <CategoriesCard
            key={item.id}
            identifier={item.id}
            slug={item.attributes.slug}
            title={item.attributes.title}
            description={item.attributes.description}
            icon={<ChevronRight />}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
