import { Text, Card, Image, Group } from "@mantine/core";

function StoreItem({item}) {

    const {id, image, title, value, oldValue} = item;

    return(
        <Card 
            shadow='sm' 
            padding='md' 
            radius='md' 
            withBorder
            h='300px' w={{base: '270px', sm: '300px'}}
            component='a'
            href={`store/${id}`}
        >
            {image && 
                <Card.Section>
                    <Image 
                        src={image} 
                        alt={title}
                        h='200px'
                    />
                </Card.Section>
            }
            
            <Card.Section p='sm' bg='primary.0'>
                <Text fw={700} fz='18px' truncate='end'>
                    {title}
                </Text>
                <Group align='center'>
                    {oldValue && (
                        <Text td='line-through'>
                            {oldValue}
                        </Text>
                    )}
                    <Text fw={700}>  
                        {value}
                    </Text>
                </Group>
            </Card.Section>
            
        </Card>
    );
}

export default StoreItem;