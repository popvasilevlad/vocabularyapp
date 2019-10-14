import React from 'react';
import StyledDropdown from './dropdown-style';

const Dropdown = props => {
	if (!props.options) return null;
	
	const defaultValue = props.options.find(item => item.isSelected).value;
	
	return (
		<StyledDropdown
			defaultValue={defaultValue}
			size={props.size}
		>
			{
				props.options.map((option, index) => (
					<option
						key={index}
						value={option.value}
					>
						{option.name}
					</option>
				))
			}
		</StyledDropdown>
	)
};

export default Dropdown;