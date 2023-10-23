import Buttonn from '@/pages/components/button'
import { BackgroundImage, Center, Text, Box, Image, Flex,Button } from '@mantine/core';

export default function MainHome() {
    return (
        <Box style={{display:'flex', justifyContent:'center',alignItems:'center',backgroundColor:'#001524',color:'white'}}>
            <Text size='40px' fw={600} w='40%' style={{lineHeight:1.2}}>
                Hello,saya adalah bjorka
                saya bersekolah di <span style={{color:'#D83F31'}}>SMKN 10 Surakarta </span>
                jurusan saya adalah multimedia
                cita cita saya <span style={{color:'#D83F31'}}>Korupsi seperti </span> ...
                <Button variant="light" color="green" style={{marginRight:40,marginTop:50}}>Dukung Me</Button>
                <Button variant="light" color="red">Lindungi Me</Button>
            </Text>
            <Image radius="1" h='500px' w={400} src="/deland.png" alt='gambar'/>
        </Box> 
        )
}