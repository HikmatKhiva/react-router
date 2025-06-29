import {
  Card,
  Image,
  Text,
  Button,
  Group,
  Rating,
  Spoiler,
} from "@mantine/core";
import { Link } from "react-router";
const CardComponent = ({ product }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={product.image} height={250} alt={product.title} />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Text
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          fw={500}
        >
          {product.title}
        </Text>
      </Group>
      <Rating value={product.rating.rate} fractions={2} readOnly />
      <Spoiler maxHeight={50} showLabel="Show more" hideLabel="Hide">
        {product.description}
      </Spoiler>
      <Link to={`${product.id}`}>Detail</Link>
      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
};
export default CardComponent;
