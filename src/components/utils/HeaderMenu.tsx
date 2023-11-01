import * as React from 'react';

interface IHeaderMenuProps {
  title: string;
}

const HeaderMenu: React.FunctionComponent<IHeaderMenuProps> = (props) => {
  return (
    <div>
        <div className='p-8'>
          <h3 className='text-center text-2xl text-color-primary font-bold  '>{ props.title }</h3>
        </div>
    </div>
  );
};

export default HeaderMenu;
