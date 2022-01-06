import React from 'react';
import BagItem from './BagItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Snackbar from '@mui/material/Snackbar';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';

export default function Summary({ basket, darkTheme }) {
  const subtotal =
    basket.length &&
    basket
      .reduce((amount, item) => parseInt(item.itemTotal) + amount, 0)
      .toFixed(2);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const taxHelp =
    'The actual tax amount will be calculated based on the applicable state and local sales taxes when your order is shipped.';

  const subtotalHelp =
    'The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes.';

  return (
    <>
      <Row>
        <Col>
          <>
            {`Subtotal `}
            <Tooltip title={subtotalHelp} arrow>
              <HelpIcon
                style={{
                  verticalAlign: '-4px',
                  fontSize: '18px',
                }}
              />
            </Tooltip>
          </>
        </Col>
        <Col md={4}>
          <>{`$${subtotal}`}</>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            {`Estimated Tax `}
            <Tooltip title={taxHelp} arrow>
              <HelpIcon
                style={{
                  verticalAlign: '-4px',
                  fontSize: '18px',
                }}
              />
            </Tooltip>
          </div>
        </Col>
        <Col md={4}>
          <div>--</div>
        </Col>
      </Row>
      <hr className='mt-3'></hr>
      <Row>
        <Col>
          <div>
            <b>{`Total`}</b>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <b>{`$${subtotal}`}</b>
          </div>
        </Col>
      </Row>
      <hr className='mt-3'></hr>
      <Button
        variant={darkTheme ? 'outline-light' : 'outline-secondary'}
        style={{ width: '100%' }}
        onClick={handleClick}
      >
        Checkout
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        message={'Thank you for shopping with us!'}
        onClose={handleClose}
        autoHideDuration={3000}
      />
    </>
  );
}
