import { Box, Paper, Text } from '@mantine/core'
import StoreItemRow from '../components/StoreItemRow';

function MainPage() {

    return (
        <>
        <Box p='md' style={{flex:1}}>        
            <Paper shadow='sm' radius='xs' mb='20px' p='md' withBorder>
                <Text ta='center' fz="25px" ff="'Lilita One', sans-serif">
                    TODOS OS PRODUTOS
                </Text>
            </Paper>

            <StoreItemRow/>
        </Box>

        </>
    );
}

export default MainPage;