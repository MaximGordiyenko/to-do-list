import React, {Component} from 'react';
import Input from "../Components/Input";
import Button from "../Components/Button";
import '../style/Categories.css';
import ItemCategory from "../Components/ItemCategory";
import SubItem from "../Components/SubItem";

class Categories extends Component {
  state = {
    value: "",
    items: [
      {
        value: "Category 1",
        isOpen: false,
        submenu: [
          {value: "Sub 1",},
          {value: "Sub 2",},
        ],
      },
      {
        value: "Category 2",
        isOpen: false,
        subItem: 2,
        submenu: [
          {value: "Sub 1",},
          {value: "Sub 2",},
        ],
      },
      {
        value: "Category 3",
        isOpen: false,
        subItem: 3,
        submenu: [
          {value: "Sub 1",},
          {value: "Sub 2",},
        ],
      },
    ]
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value) {
      this.setState({
        value: '',
        items: [...this.state.items, {
          value: this.state.value, isOpen: false,
        }
        ],
      });
    } else {
      alert('Add task please!');
    }

  };
  handleAddSub = (e) => {
    e.preventDefault();
    const itemsValue = this.state.items.map(i => i.value);
    console.log(itemsValue);
    console.log(this.state.items);
    this.setState({})
  };

  render() {
    const {items, value} = this.state;
    return (
        <>
          <div className='category-container'>
            <div className='form-category-wrapper'>
              <form>
                <Input type={'text'}
                       placeholder={'Enter category title'}
                       value={value}
                       action={this.handleChange}
                />
              </form>
              <Button action={this.handleSubmit}
                      title={"Add"}
              />
            </div>
            <ItemCategory items={items}
                          action={this.handleAddSub}
            />
            <SubItem items={items}
            />
          </div>
        </>
    );
  }
}

export default Categories;