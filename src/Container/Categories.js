import React, {Component} from 'react';
import Input from "../Components/Input";
import Button from "../Components/Button";
import '../style/Categories.css';

class Categories extends Component {

    handleAddCategories = () => {

    };

    render() {
        return (
            <div>
                <div className='category-container'>
                    <div className='form-category-wrapper'>
                        <form>
                            <Input type={'text'}
                                   placeholder={'Enter category title'}
                                // value={}
                                // action={}
                            />
                        </form>
                        <Button action={this.handleAddCategories}
                                title={"Add"}
                        /></div>
                </div>
            </div>
        );
    }
}

export default Categories;