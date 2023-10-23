import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import { Image } from '@mantine/core';

export default function Logo() {
    return (
        <>
        <div style={{display: 'flex',alignItems: 'center', gap:'15px'}}>
        <Image radius="40" h={40} src="https://i.pinimg.com/564x/77/c1/1c/77c11cf27cbd4e4f79eda536b72871f0.jpg" alt='img'/>
        <Text>
            PT BJORKA
        </Text>
        </div>
        </>
    )
}
