import React from 'react';
import Button from '../../forms/Button/Button';

export default function HomeHeader(props) {
  let authButton =
    <Button
      label={'Увiйти'}
      handleClick={(e) => props.openAuthModal({type: 'login'})}
    />;

  return (
    <div className=''>
      <div className=''>
        {authButton}
      </div>
    </div>
  )
}
