import React from 'react'

const PopupModal = ({children}:{children:React.ReactNode}) => {
  return (
		<dialog id='my_modal_2' className='modal '>
			<form method='dialog' className='modal-box  h-[auto] bg-[#EDEFF3] dark:bg-gray-800 dark:border-gray-700'>
        {children}
			</form>
			<form method='dialog' className='modal-backdrop'>
				<button>close</button>
			</form>
		</dialog>
	);
}

export default PopupModal;
