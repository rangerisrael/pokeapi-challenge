import { isEmpty } from 'lodash';
import React from 'react'

const Button = ({ spanText,btnText,overrideClassName, ...props }: { spanText: string,btnText:string,overrideClassName?: string | undefined} ) => {
	const defaultClassName = 'modal-action btn bg-[#4c566a] hover:bg-white  text-white hover:text-[#4c566a] font-bold py-2 px-4 rounded';
  const clsx = !isEmpty(overrideClassName) ? `${defaultClassName} ${overrideClassName}` : defaultClassName;
  
  
  return (
		<button {...props} className={clsx}>
			<span className='text-lg'>{spanText}</span>
			{btnText}
		</button>
	);
};

export default Button
