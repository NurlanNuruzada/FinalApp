import React from 'react';
import Styles from './AdminPageHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { Menu, Button, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function AdminPageHeader({ toggleIsSmall, isSmall, IsButtonClicked }) {
  return (
    <div className={Styles.main}>
      <FontAwesomeIcon
        size="xl"
        icon={faBarsStaggered}
        style={{ color: "#2e71e5" }}
        onClick={() => {
          IsButtonClicked(); 
          toggleIsSmall(); 
        }}
      />
      <div className={Styles.UserSeciton}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Nurlan Nurzade
          </MenuButton>
          <MenuList>
            <MenuItem>Nurlan Nurzade</MenuItem>
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default AdminPageHeader;
