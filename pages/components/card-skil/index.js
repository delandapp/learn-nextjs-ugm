import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
import { AiFillHtml5, BiLogoCss3, CgGirl } from 'react-icons/bs';
import classes from './FeaturesImages.module.css';

const data = [
  {
    image : 'html',
    title: 'Html',
    description: 'yah dulu masih belum ngerti html itu apa puh,ya begini lah nasih saya tanpa pendamping puhh',
  },
  {
    image : 'css',
    title: 'Css',
    description: 'emmm ini yang bikin saya tertarik sama website',
  },
  {
    image : 'php',
    title: 'Php',
    description: 'suka bgt ama pemograman backend puh,tapi masih lebih suka ama dia',
  },
  {
    image : 'laravel',
    title: 'Laravel',
    description: 'membuat php jadi mudah dengan fitur fiturnya tapi ormnya bikin server agak berat',
  },
];

export default function FeaturesImages() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
      <Image src='/images/code.png' alt='gambar' />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>Skill Saya</Text>

      <Title className={classes.title} order={2}>
        Masih Pemula puh <span className={classes.highlight}>Jangan</span> dibully puh sepuh
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          diatas langit masih ada langit puh sepuh jangan sombong puh sepuh 
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}