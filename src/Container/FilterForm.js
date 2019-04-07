import React, {Component} from 'react';
import Input from "../Components/Input";

class FilterForm extends Component {
    state = {
        filter: ''
    };

    handleFilter = () => {

    };

    render() {
        return (
            <div>
                <Input type={'text'}
                       placeholder={'Search'}
                       value={this.state.filter}
                       action={this.handleFilter}
                />
            </div>
        );
    }
}

export default FilterForm;