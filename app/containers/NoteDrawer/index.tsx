import React, { useState, useReducer, useRef } from 'react';
import { Button, Drawer, Dropdown, Menu, Icon, List } from 'antd';
import { notesReducer, initialState } from './reducer';


export function NoteDrawer() {

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [notes, dispatch] = useReducer(notesReducer, initialState);
  const inputRef: any = useRef();

  function addNote(event) {
    event.preventDefault();
    dispatch({
      type: 'ADD_NOTE',
      note: inputRef.current.value,
    });
    inputRef.current.value = '';
  }


  const menuDropdown = (
    <Menu>
      <Menu.Item key={1}>
        <a target="_blank" rel="noopener noreferrer" href="#">Contact</a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a target="_blank" rel="noopener noreferrer" href="#">Expedited Order</a>
      </Menu.Item>
      <Menu.Item key={3}>
        <a target="_blank" rel="noopener noreferrer" href="#">Next Day</a>
      </Menu.Item>
      <Menu.Item key={4}>
        <a target="_blank" rel="noopener noreferrer" href="#">Rush Order</a>
      </Menu.Item>
      <Menu.Item key={5}>
        <a target="_blank" rel="noopener noreferrer" href="#">Saturday Delivery</a>
      </Menu.Item>
      <Menu.Item key={6}>
        <a target="_blank" rel="noopener noreferrer" href="#">Second Day</a>
      </Menu.Item>
      <Menu.Item key={7}>
        <a target="_blank" rel="noopener noreferrer" href="#">Will-Call</a>
      </Menu.Item>
    </Menu>
  );

  const ButtonGroup = Button.Group;

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
          onClose={() => setDrawerVisible(false)}
          visible={drawerVisible}
        >
          <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            dataSource={notes}
            renderItem={item => {
              return (<List.Item>{item['note']}</List.Item>); }
            }
          />
          <form onSubmit={addNote}>
            <input ref={inputRef} placeholder="Add Note..." />
            <Button type="primary" htmlType="submit" block>Add Note</Button>
          </form>

        </Drawer>
        <Button
          type="primary"
          icon="bars"
          onClick={() => {
            setDrawerVisible(true);
          }}>
          Notes
        </Button>
      </ButtonGroup>
    </div>
  );

  return ui;
}
