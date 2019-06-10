import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../style/Categories.css';
import Input from '../Components/Input';
import Button from '../Components/Button';
import {createCategory, deleteCategory} from '../Actions/categoryAction';


class Categories extends Component {
  state = {
    value: '',
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
      createCategory(this.state, 'root');
      this.setState({
        value: '',
      });
    } else {
      alert('Add task please!');
    }

  };
  ITEM = (item, idx, del, cre, counter) => {
    let total = counter;
    return (
      <div key={idx}>
        <ul style={{marginLeft: total}}>
          <li className='item'
              key={item.id}> {item.value} id: {item.id} owner: {item.owner}
            <div className='btns'>
              <Button title={'EDIT [NO]'}/>
              <Button action={() => del(item.id)}
                      title={'REMOVE'}/>
              <Button action={() => cre('sub_cat', item.id)}
                      title={'ADD'}/>
            </div>
          </li>
        </ul>
        {item.sub && item.sub.map((i, idx) => this.ITEM(i, idx, del, cre, total + 5))}
      </div>
    );
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
                    title={'Add'}
            />
          </div>
          {category.map((item, idx) => this.ITEM(
            item, idx,
            this.props.deleteCategory,
            this.props.createCategory, 0))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  category: state.categoryReducer,
});

const mapDispatchToProps = {
  createCategory,
  deleteCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);