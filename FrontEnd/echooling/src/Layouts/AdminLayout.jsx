import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Header from "../Components/Header/Header";
import AdminPageHeader from "../Components/Header/AdminPageHeader";
import Sidebar from "../Components/CustomSideBar/Sidebar";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Styles from "./AdminLayout.module.css";

export function AdminLayout() {
  const CreateTeacher = ["Create Course", "My Courses", "Stats", "Course Review"];
  const CreateStaff = ["Create Event", "My Events", "Stats"];

  // Initialize the isSmall state
  const [isSmall, setIsSmall] = useState(false);

  // Callback function to toggle isSmall
  const toggleIsSmall = () => {
    setIsSmall(!isSmall);
  };

  return (
    <Grid className={Styles.GridContainer} templateColumns="0fr 1fr">
      <GridItem>
        <Sidebar CreateTeacher={CreateTeacher} CreateStaff={CreateStaff} isSmall={isSmall} />
      </GridItem>
      <GridItem className={Styles.GridItem}>
        <AdminPageHeader toggleIsSmall={toggleIsSmall} isSmall={isSmall} />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
