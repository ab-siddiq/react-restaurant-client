import React, { useState } from "react";
import orderImage from "../../assets/shop/order.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import useCategory from "../../hooks/useCategory";
import FoodCard from "../../components/FoodCard/FoodCard";
import "./Order.css";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [pizza, offer, soup, dessert, salad, popular, drinks] = useCategory();
  const [menu] = useMenu();
  let menuCategories = [];
  menu.map((item) => (menuCategories = [item.category, ...menuCategories]));
  const uniqueCategory = [...new Set(menuCategories)];
  return (
    <div className="">
      <Cover title={"order food"} coverImage={orderImage}></Cover>
      <div className="mt-5">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="uppercase">
            <TabList>
              {uniqueCategory.map((category, i) => (
                <Tab key={i + 1}>{category}</Tab>
              ))}
            </TabList>
          </div>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4  my-10">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 gap-4  my-10">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4  my-10">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4  my-10">
              {dessert.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4  my-10">
              {offer.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4  my-10">
              {popular.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4  my-10">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
