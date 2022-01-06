import React from 'react';
import Switches from '../assets/Switches';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useStateValue } from '../components/Overview/store/StateProvider';
import MigosLogo from '../assets/Migos.png';

export default function Header(props) {
  const [{ basket }, dispatch] = useStateValue();
  const divStyle = {
    backgroundColor: props.darkTheme ? 'rgb(40, 40, 40)' : 'rgb(225, 225, 225)',
    color: props.darkTheme ? 'white' : 'black',
    position: 'sticky',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
  };

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    props.setView('catalogue');
  }

  function handleChange() {
    props.setDarkTheme(!props.darkTheme);
    localStorage.setItem('darkMode', JSON.stringify(!props.darkTheme));
  }

  function goToCheckout() {
    props.setView('checkout');
  }

  React.useEffect(() => {
    basket.length && totalQuantity;
  }, [basket]);

  const totalQuantity =
    basket.length &&
    basket.reduce((amount, item) => parseInt(item.quantity) + amount, 0);

  return (
    <div
      className='w-100 d-flex align-items-center px-5 mb-4 sticky-top'
      style={divStyle}
    >
      <div
        className='d-flex align-items-center me-auto cP'
        onClick={handleClick}
      >
        <img src={MigosLogo} height='50px' className='pe-4' />
        <b>migoShop</b>
      </div>
      <div className='p-0 pe-4 m-0' onChange={handleChange}>
        {Switches()}
        <LocalMallIcon
          onClick={goToCheckout}
          fontSize='medium'
          className='cP'
        />
        <span className='cP'>{totalQuantity}</span>
      </div>
    </div>
  );
}
