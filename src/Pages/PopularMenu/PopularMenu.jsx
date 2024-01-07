
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useMenu from '../../hooks/useMenu';
import MenuCategory from '../Menu/MenuCategory/MenuCategory';

const PopularMenu = () => {
  const [menu] = useMenu()
  const PopularMenu = menu.filter(item=>item.category==='popular')
  return (
    <div className='my-10'>
      <SectionTitle heading='From Our Menu' subHeading='Popular Items'></SectionTitle>
      <MenuCategory items={PopularMenu}></MenuCategory>
    </div>
  );
};

export default PopularMenu;