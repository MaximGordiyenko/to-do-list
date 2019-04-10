import React, {Component} from 'react';
import Input from "../Components/Input";
import Button from "../Components/Button";
import '../style/Categories.css';
import ListCategory from "../Components/ListCategory";

class Categories extends Component {
    state = {
        value: "",
        items: []
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
        console.log(e.target.value);
    };

    handleAddCategories = (e) => {
        e.preventDefault();
        if (this.state.value) {
            this.setState({
                value: '',
                items: [...this.state.items, this.state.value],
            });
        }else {
            alert('Add task please!');
        }

    };

    render() {
        return (
            <>
                <div className='category-container'>
                    <div className='form-category-wrapper'>
                        <form>
                            <Input type={'text'}
                                   placeholder={'Enter category title'}
                                   value={this.state.value}
                                   action={this.handleChange}
                            />
                        </form>
                        <Button action={this.handleAddCategories}
                                title={"Add"}
                        />
                    </div>
                    <ListCategory items={this.state.items}
                    />
                </div>
            </>
        );
    }
}

export default Categories;