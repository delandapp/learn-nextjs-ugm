import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { BsChatLeftDots, BsBookmarkStar, BsFillEmojiSunglassesFill } from 'react-icons/bs';
  import classes from './FeaturesCards.module.css';
  
  const mockdata = [
    {
      title: 'Tidak seleb',
      description:
        'jangan lupa untuk follow ig saya wirr, @deland.putraa',
      icon: BsChatLeftDots,
    },
    {
      title: 'Terpercaya (Setia)',
      description:
        'setia itu mahal wir,jangan murahan jadi orang',
      icon: BsBookmarkStar,
    },
    {
      title: 'Agak Ganteng',
      description:
        'mirip artis pridapan sih wir,hehehehe bercanda wir',
      icon: BsFillEmojiSunglassesFill,
    },
  ];
  
  export default function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="lg">
            dont never give up
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Manusia yang Jauh Dari Kata Sempurna
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Jangan menyerah indonesia tidak butuh kita #MenteriKorupsiTerus #CoblosPrabowo #PrabowoPresident2024
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }