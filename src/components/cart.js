import { Segment, List, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <Segment>
      <h2>Items in cart</h2>
      <List>
        {props.items.map(i => props.shopProducts.find(p => p.id == i)).map(p =>
          <List.Item>
            <Image avatar src={p.photoUrl} />
            <List.Content>
              <List.Header as='a'>{p.name}</List.Header>
              <List.Description>{p.description}</List.Description>
            </List.Content>
          </List.Item>
        )}
      </List>
    </Segment>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    items: state.CartRedcuer.items
  }
}

const mapDisptchToProps = {

}

export default connect(mapStateToProps, mapDisptchToProps)(Cart);
