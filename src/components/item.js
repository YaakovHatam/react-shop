import { connect } from 'react-redux';
import { addItemToCartAction } from '../redux/actions';
import { Segment, Image, Header, Button, Icon } from 'semantic-ui-react'

function Item(props) {

  const addToCart = (e) => {
    props.addItemToCartAction(props.id);
  }

  return (
    <Segment>
      <Header size='huge'>{props.name}</Header>
      <Image src={props.photoUrl} size='small' />
      <p>{props.description}</p>
      <Button animated='vertical' onClick={addToCart}>
        <Button.Content hidden>Order</Button.Content>
        <Button.Content visible>
          <Icon name='shop' />
        </Button.Content>
      </Button>
    </Segment>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    
  }
}

const mapDisptchToProps = {
  addItemToCartAction
}

export default connect(mapStateToProps, mapDisptchToProps)(Item);
