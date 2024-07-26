import React, { FC, memo } from 'react'

interface IMenu { title: string, link: string }

interface Props { data: IMenu[] }

const Menu: FC<Props> = ({ data }) => {
	const handleOnClick = (link: string) => {
		window.open(link, '_self');
	}
	return (
		<div className='grid grid-cols-4 gap-4 p-4'>
			{data.map((item, idx) => (
				<button type='button' className='aspect-square border rounded-lg hover:bg-primary hover:text-white' key={`menu-${idx}`} onClick={() => handleOnClick(item.link)}>
					{item.title}
				</button>
			))}
		</div>
	)
}

export default memo(Menu)