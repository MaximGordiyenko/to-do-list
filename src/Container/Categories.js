import React, {Component} from 'react';
import {connect} from "react-redux";
import '../style/Categories.css';
import Input from "../Components/Input";
import Button from "../Components/Button";
import CategoryList from "../Components/CategoryList";
// import SubItem from "../Components/SubItem";
import {createCategory, deleteCategory} from '../Actions/categoryAction'

class Categories extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {category, createCategory} = this.props;
    const isExistTask = category.map(i => i.value).includes(this.state.value);
    const isEmpty = this.state.value !== '';
    if (!isExistTask && isEmpty) {
      createCategory(this.state);
      this.setState({
        value: '',
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

  handleDelete = id => {
    const {deleteCategory} = this.props;
    deleteCategory(id);
  };

  render() {
    const {value} = this.state;
    const {category} = this.props;
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
            <CategoryList category={category}
                          action={this.handleAddSub}
                          deleteCategory={this.handleDelete}
            />
            {/*<SubItem items={category}
            />*/}
          </div>
        </>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category
});

const mapDispatchToProps = {
  createCategory,
  deleteCategory,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Categories);