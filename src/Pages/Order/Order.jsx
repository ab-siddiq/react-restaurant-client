import React, { useState } from "react";
import orderImage from "../../assets/shop/order.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import useCategory from "../../hooks/useCategory";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [pizza, offer, soup, dessert, salad] = useCategory();
  const [menu] = useMenu();
  let categories = [];
  menu.map((item) => (categories = [item.category, ...categories]));
  const uniqueCategory = [...new Set(categories)];
  // console.log(uniqueCategory)
  return (
    <div className="">
      {}
      <Cover title={"order food"} coverImage={orderImage}></Cover>
      <Tabs
        className="my-24"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          {uniqueCategory.map((category) => (
            <Tab>{category}</Tab>
          ))}
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
