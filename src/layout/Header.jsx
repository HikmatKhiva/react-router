import {
  AppShell,
  Burger,
  Group,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { headerNav } from "../config";
import { Link } from "react-router";
export function Header() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Title order={2}>Logo</Title>
            <Group ml="xl" gap={20} visibleFrom="sm">
              {headerNav.map((item) => (
                <Link key={item.id} to={item.link}>{item.title}</Link>
                // <UnstyledButton key={item.id}>{item.title}</UnstyledButton>
              ))}
            </Group>
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        {headerNav.map((item) => (
          <UnstyledButton key={item.id}>{item.title}</UnstyledButton>
        ))}
      </AppShell.Navbar>

      
    </AppShell>
  );
}
