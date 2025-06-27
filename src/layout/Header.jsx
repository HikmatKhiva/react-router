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
                <UnstyledButton key={item.id}>{item.title}</UnstyledButton>
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

      {/* <AppShell.Main>
        Navbar is only visible on mobile, links that are rendered in the header
        on desktop are hidden on mobile in header and rendered in navbar
        instead.
      </AppShell.Main> */}
    </AppShell>
  );
}
