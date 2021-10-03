import { Grid, Image } from 'semantic-ui-react'

export default function ItemList({ list }) {
    console.log(list)

    return (
        <div>
             <Grid columns={3}>
                <Grid.Row>
                    {list.map((item) => (
                        <Grid.Column key={item.id}>
                            <img src={item.image_link} alt={item.name}/>
                        </Grid.Column>
                    ))}  
                </Grid.Row>
            </Grid>
        </div>
    )
}