import { Button, Drawer, Dropdown, Menu, Icon, List } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';

export function NoteDrawer() {

  const [drawerVisable, setDrawerVisable] = useState(false);

  const menuDropdown = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">Contact</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">Expedited Order</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">Next Day</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">Rush Order</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">Saturday Delivery</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">Second Day</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">Will-Call</a>
      </Menu.Item>
    </Menu>
  );

  const ButtonGroup = Button.Group;

  const notes = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  const ui = (
    <div>
      <ButtonGroup>
        <Dropdown overlay={menuDropdown}
                  placement="bottomCenter">
          <Button><Icon type="flag"/>Order Flag</Button>
        </Dropdown>
        <Drawer
          title="Order Notes"
          placement="right"
          closable={false}
          onClose={() => setDrawerVisable(false)}
          visible={drawerVisable}
        >
          <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            dataSource={notes}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
          <Button type="primary" block>Add Note</Button>

        </Drawer>
        <Button
          type="primary"
          icon="bars"
          onClick={() => {
            setDrawerVisable(true);
          }}>
          Notes
        </Button>
      </ButtonGroup>
    </div>
  );

  return ui;
}
