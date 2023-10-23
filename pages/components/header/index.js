import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import Logo from '@/pages/components/logo'

const links = [
  { link: '/home', label: 'Home' },
  { link: '/project', label: 'Project' },
  { link: '/contact', label: 'Contact' },
  { link: '/order', label: 'Order' },
];

export default function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Logo />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}