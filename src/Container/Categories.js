import React, {Component} from 'react';
import {connect} from "react-redux";
import '../style/Categories.css';
import Input from "../Components/Input";
import Button from "../Components/Button";
import CategoryList from "../Components/CategoryList";
import {createCategory, deleteCategory} from '../Actions/categoryAction'
import {createSubCategory} from "../Actions/subAction";
import SubList from "../Components/SubList";

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
  handleAddSub = () => {
    const {createSubCategory} = this.props;
    createSubCategory(this.state);
    this.setState({})
  };

  handleDelete = id => {
    const {deleteCategory} = this.props;
    deleteCategory(id);
  };

  render() {
    const {value} = this.state;
    const {category, sub} = this.props;
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
                        handleAddSub={this.handleAddSub}
                        deleteCategory={this.handleDelete}>
            <SubList sub={sub}
                     category={category}
                     handleAddSub={this.handleAddSub}
                     deleteCategory={this.handleDelete}
            />
          </CategoryList>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  category: state.categoryReducer,
  sub: state.subReducer,
});

const mapDispatchToProps = {
  createCategory,
  deleteCategory,
  createSubCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);