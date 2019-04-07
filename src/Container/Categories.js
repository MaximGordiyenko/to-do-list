import React, {Component} from 'react';
import Input from "../Components/Input";
import Button from "../Components/Button";
import '../style/Categories.css';
import ListCategory from "../Components/ListCategory";

class Categories extends Component {
    state = {
        items: []
    };

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
                        />
                    </div>
                    <ListCategory items={this.state.items}

                    />
                </div>
            </div>
        );
    }
}

export default Categories;