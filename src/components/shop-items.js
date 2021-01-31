import Item from './item';
import { Grid } from 'semantic-ui-react'

function ShopItems(props) {
    return (
        <Grid>
            <Grid.Row>
                {props.shopProducts.map(f => <Grid.Column width={4}><Item key={f.id} {...f} /></Grid.Column>)}
            </Grid.Row>
        </Grid>
    );
}

export default ShopItems;
