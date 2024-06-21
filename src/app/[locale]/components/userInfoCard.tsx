import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
// import classes from './UserInfoIcons.module.css';

export default function UserInfoIcons() {
  return (
    <div>
      <Group wrap="nowrap" className="flex items-start">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        size={80}
        radius="md"
      />
      <div className="ml-4">
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
          Software engineer
        </Text>

        <Text fz="lg" fw={500}>
          Raul Marin
        </Text>

        <Group wrap="nowrap" gap={15} mt={3} className="flex items-center">
          <IconAt stroke={1.5} size="1rem" className="inline-block" />
          <Text fz="xs" c="dimmed" className="inline-block">
            raulm0429@icloud.com
          </Text>
        </Group>

        <Group wrap="nowrap" gap={15} mt={5} className="flex items-center">
          <IconPhoneCall stroke={1.5} size="1rem" className="inline-block" />
          <Text fz="xs" c="dimmed" className="inline-block">
            +1 (316) 925-3695
          </Text>
        </Group>
      </div>
    </Group>
    </div>

  );
}